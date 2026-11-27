#!/usr/bin/env python3
"""Generate ported page bodies from the WordPress export.

For the content pages we render faithfully from WordPress (`content.rendered`),
this emits src/content/pages/<slug>.json { title, seoTitle, seoDescription, html }
with all wp-content image URLs localized to /images/wp/... and appended to the
shared download manifest (scripts/.media-manifest.json).

Run from the ethos-website directory:  python3 -I scripts/gen-pages.py
"""
import json
import os
import re
import html as htmllib

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
EXPORT = os.path.join(REPO, "..", "arh-agent-docs", "wordpress-export")
CONTENT = os.path.join(REPO, "src", "content")
PAGES_DIR = os.path.join(CONTENT, "pages")
os.makedirs(PAGES_DIR, exist_ok=True)

# Pages rendered from the WP body (article pages + the self-contained html-block
# pages + the 3 interactive pages). home/blog/meet-our-team/outcomes/contact are
# built as bespoke React and excluded here.
SLUGS = [
    "ethos-flagship-program",
    "ethos-recovery-apartments",
    "ethos-independent-living",
    "the-ethos-difference",
    "sober-living-guide",
    "long-term-recovery-guide",
    "interventions",
    "a-parents-guide-to-addiction",
    "lifestyle-interventions",
    "pulse-tms",
    "mental-health-support",
    "substance-abuse-support",
    "privacy-policy",
    "terms-and-conditions",
    "after-treatment-family-guide",
    "ebook-about-addiction",
    "program-overview-for-professionals",
    "independence-readiness-checklist",
    "sober-living-questions-checklist",
]

pages = json.load(open(os.path.join(EXPORT, "pages.raw.json"), encoding="utf-8"))
by_slug = {p["slug"]: p for p in pages}

manifest_path = os.path.join(HERE, ".media-manifest.json")
manifest = {}
if os.path.exists(manifest_path):
    manifest = json.load(open(manifest_path, encoding="utf-8"))

UPLOADS_RE = re.compile(
    r"https?://(?:www\.)?ethosrecovery\.com/wp-content/uploads/([^\s\"')]+)"
)


def localize_all(text: str) -> str:
    def repl(mo):
        subpath = mo.group(1)
        manifest[
            f"https://www.ethosrecovery.com/wp-content/uploads/{subpath}"
        ] = f"public/images/wp/{subpath}"
        return f"/images/wp/{subpath}"

    return UPLOADS_RE.sub(repl, text)


index = {}
full = {}
for slug in SLUGS:
    p = by_slug.get(slug)
    if not p:
        print(f"  !! missing page: {slug}")
        continue
    title = htmllib.unescape(p["title"]["rendered"]).strip()
    body = localize_all(p["content"]["rendered"])
    seo = (p.get("meta", {}) or {}).get("slim_seo", {}) or {}
    rec = {
        "slug": slug,
        "title": title,
        "seoTitle": seo.get("title") or title,
        "seoDescription": seo.get("description") or "",
        "html": body,
    }
    full[slug] = rec
    index[slug] = {
        "slug": slug,
        "title": title,
        "seoTitle": rec["seoTitle"],
        "seoDescription": rec["seoDescription"],
    }
    print(f"  {slug}: {len(body)} bytes html")

json.dump(
    index,
    open(os.path.join(CONTENT, "pages-index.json"), "w", encoding="utf-8"),
    ensure_ascii=False,
    indent=2,
)
json.dump(
    full,
    open(os.path.join(CONTENT, "pages-full.json"), "w", encoding="utf-8"),
    ensure_ascii=False,
)
json.dump(manifest, open(manifest_path, "w", encoding="utf-8"), ensure_ascii=False, indent=0)
print(f"\npages: {len(index)}  |  manifest now: {len(manifest)} images")
