#!/usr/bin/env python3
"""Download the media referenced by the generated content into public/.

Reads scripts/.media-manifest.json ({ "<remote url>": "public/<path>" }) produced
by gen-blog.py (and any later page generators), plus a fixed list of extra assets
(the eBook PDF). Skips files that already exist, retries transient failures.

Run from the ethos-website directory:  python3 -I scripts/download-media.py
"""
import json
import os
import sys
import time
import urllib.request
import urllib.error

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)

manifest_path = os.path.join(HERE, ".media-manifest.json")
manifest = {}
if os.path.exists(manifest_path):
    manifest = json.load(open(manifest_path, encoding="utf-8"))

# Extra fixed assets not captured by body-image scanning.
EXTRA = {
    "https://www.ethosrecovery.com/wp-content/uploads/2026/01/Ethos-Guide-To-Sober-Living.pdf":
        "public/uploads/2026/01/Ethos-Guide-To-Sober-Living.pdf",
}
manifest.update(EXTRA)

UA = "EthosSiteMigration/1.0 (+static re-host; contact site owner)"


def download(url: str, dest_rel: str) -> str:
    dest = os.path.join(REPO, dest_rel)
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return "skip"
    os.makedirs(os.path.dirname(dest), exist_ok=True)
    last = None
    for attempt in range(3):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                data = r.read()
            tmp = dest + ".part"
            with open(tmp, "wb") as f:
                f.write(data)
            os.replace(tmp, dest)
            return f"ok {len(data)//1024}KB"
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError) as e:
            last = e
            time.sleep(1.5 * (attempt + 1))
    return f"FAIL {last}"


ok = skip = fail = 0
failures = []
items = sorted(manifest.items())
for i, (url, dest_rel) in enumerate(items, 1):
    res = download(url, dest_rel)
    if res == "skip":
        skip += 1
    elif res.startswith("ok"):
        ok += 1
    else:
        fail += 1
        failures.append((url, res))
    if i % 20 == 0 or i == len(items):
        print(f"[{i}/{len(items)}] ok={ok} skip={skip} fail={fail}", flush=True)

if failures:
    print("\nFAILURES:")
    for url, res in failures:
        print(" ", url, "->", res)
    sys.exit(1)
print(f"\nDone. ok={ok} skip={skip} fail={fail}")
