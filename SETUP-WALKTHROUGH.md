# Ethos Recovery → Vercel: setup walkthrough

This guide takes the finished site (in this `ethos-website/` folder) and gets it
live on **your** Vercel account, as a private preview first, then — only when you
decide — on the real `ethosrecovery.com` domain.

Follow the steps top to bottom. Commands are meant to be copy-pasted into a
terminal **from inside the `ethos-website` folder** unless noted.

> **Nothing has been committed or pushed for you.** Step 1 is where *you* put the
> code on GitHub. Until you do that, nothing has left this machine.

---

## 0. What you need first

- A **GitHub account** with access to the `team-avo/ethos-website` repository
  (this project's `origin` remote already points there).
- A **Vercel account** (free Hobby plan is fine to start): https://vercel.com/signup —
  sign up with the same GitHub account to make importing easier.
- Node.js 20+ and `git` installed locally (you already have them if you ran the build).
- About 15 minutes.

Nothing here touches the live WordPress site. WordPress keeps serving
ethosrecovery.com until **you** flip the domain over in Step 5.

---

## 1. Put the code on GitHub

From inside `ethos-website/`:

```bash
# 1a. Sanity check: the build passes locally
npm ci
npm run build          # should end with "Generating static pages (266/266)"

# 1b. Create a branch and commit everything (including generated content + images)
git checkout -b migrate-to-vercel
git add -A
git commit -m "Rebuild ethosrecovery.com as a static Next.js site for Vercel"

# 1c. Push it to GitHub
git push -u origin migrate-to-vercel
```

Then open https://github.com/team-avo/ethos-website, and either:

- **Open a Pull Request** from `migrate-to-vercel` into `main`, review it, and merge
  (recommended if others review first); **or**
- just deploy the `migrate-to-vercel` branch directly in Step 2 (Vercel can deploy
  any branch).

> **Note on size:** this commit includes ~49 MB of re-hosted images and a 36 MB
> eBook PDF under `public/`. That's expected (the site is self-contained so the old
> WordPress media can be shut off). If your team prefers not to store the big PDF in
> git, you can instead upload `public/uploads/2026/01/Ethos-Guide-To-Sober-Living.pdf`
> to Vercel Blob or another host and link it — but keeping it in git is simplest and
> works fine.

---

## 2. Import the project into Vercel

1. Go to https://vercel.com/new (log in with GitHub).
2. If this is your first Vercel project, it will ask to **install the Vercel GitHub
   App**. Click **Install**, choose the account/org that owns `team-avo`, and grant
   access to the **`ethos-website`** repository (you can limit it to just that repo).
3. Back on the "Import Git Repository" screen, find **`team-avo/ethos-website`** and
   click **Import**.
4. On the configuration screen:
   - **Framework Preset:** Next.js (auto-detected — leave it).
   - **Root Directory:** leave as the repository root (`./`). The Next app *is* the
     repo root here.
   - **Build Command / Output:** leave the defaults (`next build`).
   - **Branch:** if you didn't merge to `main`, pick `migrate-to-vercel` as the
     Production Branch under **Settings → Git** after the first deploy, or just deploy
     the branch as a preview.
5. Before clicking Deploy, expand **Environment Variables** and add the one in Step 3.
6. Click **Deploy**. The first build takes ~2–4 minutes.

When it finishes, Vercel gives you a URL like `https://ethos-website-xxxx.vercel.app`.

---

## 3. Environment variables

In the import screen (or later under **Project → Settings → Environment Variables**),
add:

| Name | Value | Notes |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | your `*.vercel.app` URL (e.g. `https://ethos-website-xxxx.vercel.app`) | Used for canonical URLs + sitemap. Change to the real domain at go-live (Step 5). |

**Do NOT set `NEXT_PUBLIC_GTM_ID` yet.** Leaving it unset keeps Google Tag Manager
off while the site is a private preview, so preview traffic doesn't pollute analytics.
You'll add it at go-live.

After adding/changing an env var, trigger a redeploy: **Deployments → … → Redeploy**
(env vars are read at build time).

---

## 4. Review the preview

Open your `*.vercel.app` URL and click through:

- [ ] Home — hero "COMMUNITY IS OUR METHOD", the video section, programs, partners,
      testimonials.
- [ ] The 4 header dropdowns + the amber "Call" bar on a phone-width window.
- [ ] A few pages: `/ethos-flagship-program/`, `/outcomes/`, `/contact/` (map + form),
      `/meet-our-team/` → click into a person (`/team/chris-howard/`).
- [ ] Blog: `/blog/`, page 2 (`/blog/page/2/`), a post, a category
      (`/post/category/addiction/`), a tag (`/post/tag/recovery/`).
- [ ] The interactive pages: `/independence-readiness-checklist/` and
      `/sober-living-questions-checklist/` — answer a few questions and confirm the
      score/result updates.
- [ ] A couple of old URLs redirect, e.g. `/our-mission/` → `/the-ethos-difference/`,
      `/program/` → `/ethos-flagship-program/`.

**Privacy:** the preview is intentionally **not indexable** — every page sends
`noindex` and `robots.txt` disallows all crawlers. Google will not pick it up. Share
the link freely for review.

> **Known item to decide on:** the sober-living checklist's *email-capture* form
> (originally a WordPress "Gravity Form") is not wired to a destination yet — the
> quiz/scoring works, but to collect leads you'll need to drop in a GoHighLevel form
> embed id for it (the contact and eBook pages already use GoHighLevel). See
> "Open items" at the bottom.

---

## 5. Go live (only when you're ready)

This is the point the **new site replaces WordPress** for real visitors. Do it only
when the preview review is signed off.

### 5a. Add the domain in Vercel
1. **Project → Settings → Domains → Add** `ethosrecovery.com` and `www.ethosrecovery.com`.
2. Vercel shows the DNS records to set. Typically:
   - `www` → **CNAME** to `cname.vercel-dns.com`
   - apex `ethosrecovery.com` → **A** record to `76.76.21.21` (Vercel shows the exact
     current value — use what Vercel displays, not this number if it differs).
3. Set those records at your DNS provider (where the domain's nameservers live).
   DNS can take anywhere from minutes to a few hours to propagate. Vercel will show
   "Valid Configuration" when it's ready and will auto-issue HTTPS.

### 5b. Point the site at the real domain
Update the env var and redeploy:
- `NEXT_PUBLIC_SITE_URL` → `https://www.ethosrecovery.com`
- (optional, to turn analytics on) add `NEXT_PUBLIC_GTM_ID` → `GTM-PC8G46L8`

### 5c. Flip the site to indexable
Two small code changes (then commit, push, and Vercel redeploys):

1. `src/app/layout.tsx` — in `export const metadata`, change:
   ```ts
   robots: { index: false, follow: false },
   ```
   to:
   ```ts
   robots: { index: true, follow: true },
   ```
2. `src/app/robots.ts` — replace the `disallow: '/'` rule with an allow rule:
   ```ts
   rules: { userAgent: '*', allow: '/' },
   ```
   (Keep the `sitemap:` line.)

```bash
git add -A
git commit -m "Go live: enable indexing"
git push
```

### 5d. After the domain resolves
- Visit `https://www.ethosrecovery.com` — confirm it serves the new site over HTTPS.
- Submit `https://www.ethosrecovery.com/sitemap.xml` in Google Search Console.
- Spot-check a few of the old redirect URLs on the real domain.

---

## 6. Decommission WordPress (after go-live looks good)

Don't rush this — leave WordPress up for a few days as a fallback. When ready:

- [ ] Confirm images and the eBook PDF load from the new site (not from
      `ethosrecovery.com/wp-content/...`). They were all re-hosted into `public/`, so
      they should. Search the live pages' network tab for any `wp-content` request —
      there should be none.
- [ ] Confirm the 91 old URLs still redirect on the live domain.
- [ ] Export a final backup of the WordPress site + database from Hostinger and keep it.
- [ ] Cancel/stop the Hostinger hosting and WordPress. Keep the **domain
      registration** active (it's independent of hosting).

---

## 7. Troubleshooting

- **Build fails on Vercel but works locally:** make sure you committed the generated
  content (`src/content/*.json`, `src/data/redirects.ts`, `src/data/team.ts`) and the
  images under `public/`. Run `git status` — nothing important should be untracked.
- **Images 404 on the preview:** the re-hosted files live in `public/images/wp/...`.
  If any are missing, re-run `python3 -I scripts/download-media.py` from
  `ethos-website/`, then commit and push.
- **A page shows stale content after an edit (local only):** Next's build cache can
  hold an old `use cache` render. Run `rm -rf .next && npm run build`. (Vercel builds
  clean every time, so this only affects local `npm start`.)
- **DNS "Invalid Configuration" in Vercel:** the records haven't propagated yet, or a
  conflicting old record still exists at your DNS provider. Remove the old A/CNAME
  records that pointed at Hostinger, keep only the Vercel ones, and wait.
- **Env var change didn't take effect:** env vars are read at build time — redeploy
  after changing one (**Deployments → … → Redeploy**).

---

## Open items to resolve with the client / accounts you control

These need information that lives outside this codebase:

1. **Checklist lead form** (`/sober-living-questions-checklist/`): provide a
   GoHighLevel form embed id to collect leads (quiz + scoring already work without it).
2. **2023 outcomes report PDF**: the live /outcomes/ text references a "2023 Report"
   download, but no 2023 PDF exists in the WordPress media library — only the 2020 one
   is linked here. If you have the 2023 PDF, drop it in `public/reports/` and re-add
   its entry in `src/data/outcomes.ts`.
3. **GoHighLevel form fields/routing** and **Gravity Forms email recipients** live in
   those external accounts — verify lead notifications still go where you expect.
```
