# Ethos Recovery — website

A static Next.js rebuild of **ethosrecovery.com**, migrated off WordPress and
deployed on Vercel. Faithful reproduction of the live site: all pages, the full
blog (175 posts + category/tag archives), team pages, the three interactive
pages, and the 91 legacy redirects.

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19**, `cacheComponents` on.
- **Tailwind CSS 4** via `@tailwindcss/turbopack` (tokens in `src/app/globals.css`).
- Fully static: every route is prerendered at build time. No database, no CMS.
- `trailingSlash: true` to match the WordPress URL scheme.

## Content model

Content is **generated from the WordPress export** in `../arh-agent-docs/wordpress-export/`
by the scripts in `scripts/`, into `src/content/*.json` (git-committed):

| Script | Produces |
|---|---|
| `scripts/gen-redirects.py` | `src/data/redirects.ts` (91 legacy 301s) |
| `scripts/gen-team.py` | `src/data/team.ts` (7 members, bios + roles) |
| `scripts/gen-blog.py` | `src/content/posts-*.json`, `taxonomies.json` + image manifest |
| `scripts/gen-pages.py` | `src/content/pages-*.json` (ported page bodies) |
| `scripts/download-media.py` | downloads all referenced images + the eBook PDF into `public/` |

Re-run them (from this directory) after refreshing the export:

```bash
python3 -I scripts/gen-redirects.py
python3 -I scripts/gen-team.py
python3 -I scripts/gen-blog.py
python3 -I scripts/gen-pages.py
python3 -I scripts/download-media.py   # ~49 MB into public/
```

## Routes

- Pages: `/`, programs, guides, partners, support, legal, `/contact/`, `/outcomes/`,
  `/meet-our-team/`, and the three interactive pages.
- Blog: `/blog/`, `/blog/page/[n]/`, `/post/[slug]/`,
  `/post/category/[slug]/(page/[n]/)`, `/post/tag/[slug]/(page/[n]/)`.
- Team: `/team/[slug]/`.

Bespoke React pages: home, `/outcomes/`, `/contact/`, `/meet-our-team/`, blog.
The remaining content pages render their WordPress body HTML (`.prose-ethos .wp-body`).
The three interactive pages render their self-contained HTML + run their inline
scripts client-side via `RawHtml`.

## Commands

```bash
npm ci
npm run dev      # Turbopack dev server on :3000
npm run build    # static build (~266 pages)
npm start        # serve the production build
npm run lint
```

## Environment

- `NEXT_PUBLIC_SITE_URL` — canonical origin (preview URL first, real domain at go-live).
- `NEXT_PUBLIC_GTM_ID` — Google Tag Manager id. **Leave unset on preview.** Set to
  `GTM-PC8G46L8` at go-live.

## Deploy / go-live

See **[SETUP-WALKTHROUGH.md](./SETUP-WALKTHROUGH.md)** for step-by-step Vercel import
and go-live instructions.

> The site ships with `robots: { index: false }` (layout) and a disallow-all
> `robots.ts` — it stays non-indexable until the go-live switches are flipped.
