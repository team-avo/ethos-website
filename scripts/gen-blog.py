#!/usr/bin/env python3
"""Generate blog content + taxonomy indexes from the WordPress export.

Outputs (under ethos-website/):
  src/content/posts/<slug>.json     one file per post: meta + rewritten HTML body
  src/content/posts-index.json      lightweight meta list (newest first) for listings
  src/content/taxonomies.json       categories + tags that have posts (slug, name, count)
  scripts/.media-manifest.json      { "<remote url>": "<public relative path>" } to download

All wp-content/uploads image URLs in post bodies + featured images are rewritten to
local paths under /images/wp/<uploads-subpath>, and recorded in the manifest so
scripts/download-media.py can fetch them. Nothing is downloaded here.

Run from the ethos-website directory:  python3 -I scripts/gen-blog.py
"""
import json
import os
import re
import html as htmllib

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
EXPORT = os.path.join(REPO, "..", "arh-agent-docs", "wordpress-export")
CONTENT = os.path.join(REPO, "src", "content")
os.makedirs(CONTENT, exist_ok=True)

posts = json.load(open(os.path.join(EXPORT, "posts.raw.json"), encoding="utf-8"))
cats = json.load(open(os.path.join(EXPORT, "categories.raw.json"), encoding="utf-8"))
tags = json.load(open(os.path.join(EXPORT, "tags.raw.json"), encoding="utf-8"))
media = json.load(open(os.path.join(EXPORT, "media.raw.json"), encoding="utf-8"))

media_by_id = {m["id"]: m for m in media}
cat_by_id = {c["id"]: c for c in cats}
tag_by_id = {t["id"]: t for t in tags}

manifest = {}

UPLOADS_RE = re.compile(
    r"https?://(?:www\.)?ethosrecovery\.com/wp-content/uploads/([^\s\"')]+)"
)


def localize(url: str) -> str:
    """Rewrite a wp uploads URL to a local /images/wp/<subpath> path and
    record it in the download manifest. Non-upload URLs are returned as-is."""
    if not url:
        return url
    m = UPLOADS_RE.search(url)
    if not m:
        return url
    subpath = m.group(1)
    local = f"/images/wp/{subpath}"
    manifest[f"https://www.ethosrecovery.com/wp-content/uploads/{subpath}"] = (
        f"public{local}"
    )
    return local


def rewrite_body(html: str) -> str:
    return UPLOADS_RE.sub(lambda mo: localize(mo.group(0)), html)


def strip_tags(s: str) -> str:
    s = re.sub(r"<[^>]+>", "", s or "")
    s = htmllib.unescape(s)
    s = re.sub(r"\s+", " ", s).strip()
    # WordPress auto-excerpt tail
    s = re.sub(r"\s*\[(?:…|\.\.\.|&hellip;)\]\s*$", "…", s)
    return s


index = []
full = {}
published = [p for p in posts if p.get("status", "publish") == "publish"]
# The export contains 7 exact duplicate records (same id); keep one of each.
seen_ids = set()
deduped = []
for p in published:
    if p["id"] in seen_ids:
        continue
    seen_ids.add(p["id"])
    deduped.append(p)
published = deduped
# newest first by date
published.sort(key=lambda p: p["date"], reverse=True)

for p in published:
    slug = p["slug"]
    title = htmllib.unescape(p["title"]["rendered"]).strip()
    body = rewrite_body(p["content"]["rendered"])

    fid = p.get("featured_media") or 0
    fm = media_by_id.get(fid, {})
    details = fm.get("media_details", {}) or {}
    featured = None
    if fm.get("source_url"):
        featured = {
            "src": localize(fm["source_url"]),
            "alt": strip_tags(fm.get("alt_text") or title),
            "width": details.get("width"),
            "height": details.get("height"),
        }

    cat_ids = p.get("categories", []) or []
    post_cats = [
        {"slug": cat_by_id[c]["slug"], "name": htmllib.unescape(cat_by_id[c]["name"])}
        for c in cat_ids
        if c in cat_by_id
    ]
    post_tags = [
        {"slug": tag_by_id[t]["slug"], "name": htmllib.unescape(tag_by_id[t]["name"])}
        for t in (p.get("tags", []) or [])
        if t in tag_by_id
    ]

    seo = (p.get("meta", {}) or {}).get("slim_seo", {}) or {}
    excerpt = strip_tags(p["excerpt"]["rendered"])

    meta = {
        "slug": slug,
        "title": title,
        "date": p["date"],
        "modified": p["modified"],
        "excerpt": excerpt,
        "seoTitle": seo.get("title") or title,
        "seoDescription": seo.get("description") or excerpt,
        "category": post_cats[0] if post_cats else None,
        "categories": post_cats,
        "tags": post_tags,
        "featured": featured,
    }

    # full record (adds body)
    record = dict(meta)
    record["html"] = body
    full[slug] = record
    index.append(meta)

json.dump(
    index,
    open(os.path.join(CONTENT, "posts-index.json"), "w", encoding="utf-8"),
    ensure_ascii=False,
    indent=0,
)
json.dump(
    full,
    open(os.path.join(CONTENT, "posts-full.json"), "w", encoding="utf-8"),
    ensure_ascii=False,
)

# Taxonomies that actually have published posts
used_cat_slugs = {}
used_tag_slugs = {}
for m in index:
    for c in m["categories"]:
        used_cat_slugs[c["slug"]] = used_cat_slugs.get(c["slug"], 0) + 1
    for t in m["tags"]:
        used_tag_slugs[t["slug"]] = used_tag_slugs.get(t["slug"], 0) + 1

tax = {
    "categories": [
        {"slug": c["slug"], "name": htmllib.unescape(c["name"]), "count": used_cat_slugs[c["slug"]]}
        for c in cats
        if c["slug"] in used_cat_slugs
    ],
    "tags": [
        {"slug": t["slug"], "name": htmllib.unescape(t["name"]), "count": used_tag_slugs[t["slug"]]}
        for t in tags
        if t["slug"] in used_tag_slugs
    ],
}
json.dump(
    tax,
    open(os.path.join(CONTENT, "taxonomies.json"), "w", encoding="utf-8"),
    ensure_ascii=False,
    indent=2,
)

json.dump(
    manifest,
    open(os.path.join(HERE, ".media-manifest.json"), "w", encoding="utf-8"),
    ensure_ascii=False,
    indent=0,
)

print(f"posts: {len(index)}")
print(f"categories with posts: {len(tax['categories'])}  tags with posts: {len(tax['tags'])}")
print(f"images to download: {len(manifest)}")
