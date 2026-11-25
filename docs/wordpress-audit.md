# Ethos Recovery — WordPress Audit & Rebuild Brief

**Audit date:** 2026-11-26
**Target:** https://www.ethosrecovery.com
**Audit scope:** Public pages only (no WP admin access used).

---

## Executive summary

1. The current site is a **custom `nomadic` WordPress theme on Hostinger LiteSpeed**, PHP 8.3.37, with a **Tailwind-compiled CSS pipeline** already in place — this is not a legacy Elementor/Divi build.
2. The design system is **already codified as CSS variables** (`--color-navy`, `--color-cobalt`, `--color-aqua`, `--color-gold`, Inter font) — we can lift these verbatim into the new design tokens.
3. Content surface is **24 pages, 182 blog posts, 7 team members, 8 categories** — the pages are the rebuild; the blog is a bulk migration.
4. **SEO is in good shape**: Slim SEO plugin, structured data (LocalBusiness, Service, Place, BreadcrumbList) is present on every page. We must preserve this.
5. Forms are **external** (`api.leadconnectorhq.com` iframes = HighLevel / GoHighLevel CRM) — rebuild can keep these as embeds; no migration needed.
6. **Analytics**: Google Site Kit 1.187.0 + GTM (`GTM-PC8G46L8`) + CallRail call tracking. All portable.
7. **Content quality is strong** — most page copy is well-written and recently edited (Nov 2026). This is a *technical* rebuild, not a copywriting rebuild.
8. **Page weight is heavy** (~100KB HTML per page, 221 unique image assets, mixed JPG/PNG/WebP/AVIF). Big opportunity with Next.js `<Image>`.
9. **Hero video on homepage is Vimeo** — keep or self-host; minimal impact.
10. **Phone-first CTA model**: every page has the same `(323) 942-9996` + "Get In Touch" CTA. We can standardize this in the new build.

---

## 1. Page map / URL inventory

### Pages (24 — the rebuild target)

| Path | Last modified | Role | Keep / Merge / Drop |
|---|---|---|---|
| `/` | 2026-11-16 | Homepage | **Keep** — rebuild |
| `/ethos-flagship-program/` | 2026-11-16 | Program L1 | **Keep** — rebuild |
| `/ethos-independent-living/` | 2026-11-19 | Program L2 | **Keep** — rebuild |
| `/ethos-recovery-apartments/` | 2026-11-19 | Program L3 | **Keep** — rebuild |
| `/the-ethos-difference/` | 2026-03-02 | About / differentiator | **Keep** — rebuild |
| `/meet-our-team/` | 2026-11-13 | Team | **Keep** — rebuild |
| `/outcomes/` | 2026-11-16 | Outcomes / proof | **Keep** — rebuild |
| `/contact/` | 2026-05-25 | Contact | **Keep** — rebuild |
| `/program-overview-for-professionals/` | 2026-11-19 | Referrer landing | **Keep** — rebuild |
| `/blog/` | 2026-11-13 | Blog index | **Keep** — rebuild |
| `/independence-readiness-checklist/` | 2026-11-19 | Interactive tool | **Keep** — port interactivity |
| `/sober-living-questions-checklist/` | 2026-11-19 | Interactive tool | **Keep** — port interactivity |
| `/after-treatment-family-guide/` | 2026-11-19 | Guide / SEO | **Keep** — rebuild |
| `/sober-living-guide/` | 2026-11-19 | Guide / SEO | **Keep** — rebuild |
| `/long-term-recovery-guide/` | 2026-03-06 | Guide / SEO | **Merge** — into `/sober-living-guide/` or keep as pillar |
| `/a-parents-guide-to-addiction/` | 2026-03-06 | Guide / SEO | **Keep** — rebuild |
| `/interventions/` | 2026-03-06 | Guide / SEO | **Keep** — rebuild |
| `/ebook-about-addiction/` | 2026-11-19 | Lead magnet | **Keep** — rebuild |
| `/substance-abuse-support/` | 2026-11-16 | Thin disclaimer page | **Merge** into `/the-ethos-difference/` or FAQ |
| `/mental-health-support/` | 2026-11-16 | Thin disclaimer page | **Merge** into `/the-ethos-difference/` or FAQ |
| `/lifestyle-interventions/` | 2026-11-16 | Partner page | **Keep** — simple port |
| `/pulse-tms/` | 2026-11-16 | Partner page | **Keep** — simple port |
| `/privacy-policy/` | 2026-05-11 | Legal | **Port as-is** |
| `/terms-and-conditions/` | 2026-05-11 | Legal | **Port as-is** |

### Content types summary

| Type | Count | Strategy |
|---|---|---|
| Pages | 24 | Hand-built in Next.js |
| Posts (blog) | 182 | Bulk migrate via WP REST API → MDX or Sanity |
| Team members | 7 | Content in `/data/team.ts` or Sanity |
| Categories | 8 | Blog taxonomy — keep as-is |
| **Total URLs to preserve** | **221** | Redirect map required |

### Team members (7)
`chris-howard`, `tuck-richardson`, `jenna-foster`, `josh-abdekalimi`, `jacob-mosios`, `sebastian-saad`, `cormac-thomas`

### Blog categories (8)
`addiction`, `alcoholism`, `child-addiction`, `failure-to-launch`, `inspiration`, `mental-health`, `recovery`, `sober-living`

---

## 2. Content inventory — key pages

| Slug | H1 | H2 count | Images | iframes | Primary CTA |
|---|---|---:|---:|---:|---|
| `_home` | COMMUNITY IS OUR METHOD | 4 | 6 | 2 | Call + Contact |
| `ethos-flagship-program` | Ethos Flagship Program | 2 | 3 | 1 | Call + Contact |
| `ethos-independent-living` | Ethos Recovery Transitional Living for Men in West Adams | 2 | 10 | 1 | Call + Contact |
| `ethos-recovery-apartments` | Ethos Recovery Apartments: Supportive Living in the Heart of Los Angeles | 5 | 11 | 1 | Call + Contact |
| `the-ethos-difference` | The Ethos Difference | 2 | 5 | 2 | Call + Contact |
| `meet-our-team` | Meet Our Team | 7 (1/member) | 19 | 1 | Call + Contact |
| `outcomes` | Outcomes | 6 | 15 | 1 | Call + Contact |
| `contact` | Get In Touch | 0 | 3 | 3 | Call + form |
| `program-overview-for-professionals` | Program Overview for Referral Professionals | 4 | 6 | 1 | `Call (323) 942-9996` / `Contact us →` |
| `independence-readiness-checklist` | Is More Independence the Right Next Step? | 5 | 6 | 1 | Form + Call |
| `blog` | Ethos Journal | 27 (post titles) | 27 | 1 | Post links |

**Universal CTAs across site:** `(323) 942-9996` (phone tap) + "Get In Touch" + "Contact".

**Forms:** All embedded from **GoHighLevel** (`api.leadconnectorhq.com/widget/form/...`). Two unique form IDs:
- `9vtER8qy62NY25LptzzK`
- `dkmP3hSqhgz3T7IWTaBQ`

---

## 3. Visual design extraction

### Brand color palette (lift directly from `style.css`)

| CSS variable | Hex | Semantic use |
|---|---|---|
| `--color-white` | `#fefefe` | Light surfaces |
| `--color-black` | `#2e2e2e` | Body text |
| `--color-midnight` | `#10182f` | **Page background (`--color-page`)** |
| `--color-navy` | `#0d112b` | **Primary brand (`--color-primary`)** |
| `--color-ink` | `#0e1638` | **Card surface (`--color-card`)** |
| `--color-cobalt` | `#0c51b7` | **CTA / Banner (`--color-cta`, `--color-banner`)** |
| `--color-aqua` | `#34fafd` | **Highlight / accent (`--color-highlight`)** |
| `--color-gold` | `#fec84b` | **Star / rating (`--color-star`)** |
| `--color-ash` | `#a6a6a6` | **Muted (`--color-muted`)** |
| `--color-stone` | `#73787f` | **Subtle / hover (`--color-subtle`)** |
| `--color-amber-light` | `#fbbf24` | Call tag |
| `--color-emerald-light` | `#4ade80` | Success |
| `--color-crimson-light` | `#f87171` | Danger |

**Dominant 5 brand colors** (what the site reads as):
1. **Midnight `#10182f`** — page background
2. **Navy `#0d112b`** — primary
3. **Cobalt `#0c51b7`** — CTA blue
4. **Aqua `#34fafd`** — accent highlight
5. **Gold `#fec84b`** — rating / punctuation

Read: **dark, modern, masculine** — appropriate for the target demo (men in recovery, families, referring clinicians).

### Typography

| Token | Value |
|---|---|
| `--font-sans` | `Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif` |
| `--font-mono` | `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace` |
| `--font-weight-medium` | `500` |
| `--font-weight-semibold` | `600` |
| `--font-weight-bold` | `700` |

**One font: Inter.** No display font, no Google Fonts stylesheet on the page — font-face declarations are self-hosted or the browser falls back to system fonts. Clean, performant choice.

### Type scale (Tailwind-standard)

| Token | Size | Line-height |
|---|---|---|
| `--text-xs` | `.75rem` | `calc(1/.75)` |
| `--text-sm` | `.875rem` | `calc(1.25/.875)` |
| `--text-base` | `1rem` | `1.5` |
| `--text-lg` | `1.125rem` | `calc(1.75/1.125)` |
| `--text-xl` | `1.25rem` | `calc(1.75/1.25)` |
| `--text-2xl` | `1.5rem` | `calc(2/1.5)` |
| `--text-3xl` | `1.875rem` | `1.2` |
| `--text-4xl` | `2.25rem` | `calc(2.5/2.25)` |
| `--text-5xl` | `3rem` | `1` |
| `--text-7xl` | `4.5rem` | `1` |

### Radii

| Token | Value |
|---|---|
| `--radius-md` | `.375rem` |
| `--radius-lg` | `.5rem` |
| `--radius-2xl` | `1rem` |
| `--radius-3xl` | `1.5rem` |

### Breakpoints

Standard Tailwind: `md: 768px`, `lg: 1024px`. (No custom breakpoints observed.)

---

## 4. Asset inventory

| Extension | Count |
|---|---:|
| JPG | 68 |
| PNG | 61 |
| WebP | 38 |
| JPEG | 32 |
| AVIF | 20 |
| PDF | 1 |
| **Total unique** | **221** |

**Observations:**
- Images are **serving multiple formats already** (WebP + AVIF = 58 of 221). Next.js `<Image>` will tidy this up automatically.
- Hero `hero_image-1.jpg` = **68 KB** — fine.
- Logo `ethos_logo.png` = **3.4 KB** — fine, but convert to SVG for the rebuild.
- No third-party CDN — all assets on-origin.
- Only **1 PDF** (the e-book / addiction guide lead magnet).

---

## 5. SEO baseline

### Homepage SEO snapshot

| Field | Value |
|---|---|
| `<title>` | `Sober Living for Men in Los Angeles \| Ethos Recovery` |
| `<meta description>` | "Structured sober living for men in Los Angeles. Three levels of support, from our Flagship Program to recovery apartments in Culver City. Talk with our team." |
| OG image | `https://www.ethosrecovery.com/wp-content/uploads/2026/02/hero_image-1.jpg` (1921×1184) |
| OG site_name | `Ethos Recovery \| Sober Living Community in Los Angeles` |
| Canonical | present (Slim SEO) |
| Twitter card | `summary_large_image` |

### Schema.org (JSON-LD) — consistent across site

Every page emits:
- `LocalBusiness` with `PostalAddress` + `GeoCoordinates`
- `WebSite`
- `BreadcrumbList` + `ListItem`
- `ImageObject`

Program pages add:
- `Service`
- `Place`

**Rebuild requirement:** reproduce this structured data in Next.js via a shared `<SchemaOrg />` component. Must not regress or we lose Google's LocalBusiness rich card in Maps.

### Sitemap coverage

Sitemap at `https://www.ethosrecovery.com/sitemap.xml` (Slim SEO) splits by post type — **all 24 pages, 182 posts, 7 team members, 8 categories are present**. No orphans found.

### Robots

```
User-agent: *
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /?s=
Disallow: /page/*/?s=
Disallow: /search/
Allow: /
```

AI crawlers (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot) **explicitly allowed** — the team is intentionally GEO-optimized. Carry this forward.

---

## 6. Tech / performance signals

| Signal | Value |
|---|---|
| Server | LiteSpeed on Hostinger |
| PHP | 8.3.37 |
| Theme | Custom `nomadic` (Tailwind-compiled) |
| CSS files | 2 (`style.css` 62KB + `utilities.css` 68KB) |
| Scripts on homepage | 2 external (CallRail swap.js, theme `app.js`) + 3 inline |
| Visible plugins | `gravityforms`, `nomadic-css-utilities` (+ `slim-seo` from sitemap) |
| Homepage weight | ~98 KB HTML (good — gzipped on wire) |
| Legacy baggage | **None** — no jQuery, no Revslider, no Elementor/Divi/WPBakery markup |
| Cache | LiteSpeed server-side (no CDN layer visible) |
| Third-party hosts | `api.leadconnectorhq.com` (forms), `link.msgsndr.com` (CRM), `player.vimeo.com`, `api.cdn.callrail.com`, `googletagmanager.com`, `maps.google.com`, `anyflip.com` (flipbook e-book) |

### External embeds to re-support in rebuild

| Service | Purpose | Treatment |
|---|---|---|
| GoHighLevel (`api.leadconnectorhq.com`) | Contact + checklist forms | **Keep as iframe embed** — do not rewrite |
| Vimeo (`player.vimeo.com/video/1002119749`, `914557375`) | Hero + testimonial video | Keep embed; consider lazy-load wrapper |
| Google Maps | Culver City location | Replace with lighter `<iframe loading="lazy">` or static map image |
| CallRail (`cdn.callrail.com`) | Phone-number swap | **Keep** — core attribution |
| GTM (`GTM-PC8G46L8`) | Analytics | **Keep** — reuse container |
| AnyFlip | E-book flipbook | Consider replacing with native PDF viewer |

---

## 7. Rebuild recommendations

### 7a. Design tokens to put in `src/design-system/colors.ts`

Replace the placeholder palette with:

```ts
// src/design-system/colors.ts — Ethos brand palette (extracted from live site)
export const colors = {
  // Base palette
  white:    '#fefefe',
  black:    '#2e2e2e',
  midnight: '#10182f',   // --color-page
  navy:     '#0d112b',   // --color-primary
  ink:      '#0e1638',   // --color-card
  cobalt:   '#0c51b7',   // --color-cta, --color-banner
  aqua:     '#34fafd',   // --color-highlight
  gold:     '#fec84b',   // --color-star
  ash:      '#a6a6a6',   // --color-muted
  stone:    '#73787f',   // --color-subtle, --color-hover

  // Semantic
  amber:        '#451a03',
  amberLight:   '#fbbf24',
  emerald:      '#052e16',
  emeraldLight: '#4ade80',
  crimson:      '#450a0a',
  crimsonLight: '#f87171',
} as const;

export const semantic = {
  page:      colors.midnight,
  primary:   colors.navy,
  card:      colors.ink,
  cta:       colors.cobalt,
  banner:    colors.cobalt,
  highlight: colors.aqua,
  star:      colors.gold,
  muted:     colors.ash,
  subtle:    colors.stone,
  success:   colors.emeraldLight,
  danger:    colors.crimsonLight,
  warning:   colors.amberLight,
} as const;
```

### 7b. `src/design-system/typography.ts`

```ts
export const fontFamily = {
  sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
} as const;

export const fontSize = {
  xs:   ['0.75rem',  { lineHeight: 'calc(1/.75)' }],
  sm:   ['0.875rem', { lineHeight: 'calc(1.25/.875)' }],
  base: ['1rem',     { lineHeight: '1.5' }],
  lg:   ['1.125rem', { lineHeight: 'calc(1.75/1.125)' }],
  xl:   ['1.25rem',  { lineHeight: 'calc(1.75/1.25)' }],
  '2xl':['1.5rem',   { lineHeight: 'calc(2/1.5)' }],
  '3xl':['1.875rem', { lineHeight: '1.2' }],
  '4xl':['2.25rem',  { lineHeight: 'calc(2.5/2.25)' }],
  '5xl':['3rem',     { lineHeight: '1' }],
  '7xl':['4.5rem',   { lineHeight: '1' }],
} as const;

export const fontWeight = { medium: 500, semibold: 600, bold: 700 } as const;
```

### 7c. Content migration strategy

| Content | Source | Target | How |
|---|---|---|---|
| 24 Pages | WP page HTML | Next.js route files | Hand-port, rewriting markup against new components |
| 182 Posts | WP REST `/wp-json/wp/v2/posts?per_page=100` | MDX in `/content/blog/` **or** Sanity | Script-based bulk export; images rehosted on Next.js `/public/` or CDN |
| 7 Team bios | `sitemap-post-type-team_member.xml` → each URL | `/data/team.ts` | Hand-port (small set) |
| 8 Categories | `sitemap-taxonomy-category.xml` | Blog taxonomy | Hand-port slugs |
| 2 Forms | GoHighLevel iframes | Reuse same iframes | Zero migration |
| Schema.org JSON-LD | Slim SEO output | `<SchemaOrg>` React component | Reproduce `LocalBusiness`, `Service`, `Place`, `BreadcrumbList` |

### 7d. Redirects (keep SEO equity)

All 24 page URLs + 182 post URLs + 7 team URLs are 1:1 preservable. **Build the new routes at the same paths.** No redirects needed if URL slugs match.

Expected changes that *will* need redirects:
- `/substance-abuse-support/` → `/the-ethos-difference/#support` (if merged)
- `/mental-health-support/` → `/the-ethos-difference/#mental-health` (if merged)
- `/long-term-recovery-guide/` → `/sober-living-guide/` (if merged)

Add via `next.config.ts` `redirects()` with `permanent: true`.

### 7e. MVP page list (v1 — 8 pages)

1. `/` — Home
2. `/ethos-flagship-program/` — Level 1
3. `/ethos-independent-living/` — Level 2
4. `/ethos-recovery-apartments/` — Level 3
5. `/the-ethos-difference/` — About / method
6. `/meet-our-team/` — Team
7. `/contact/` — Contact + form
8. `/program-overview-for-professionals/` — Referrer landing

Everything else (blog, guides, checklists, legal) ships in **v1.1** behind the same brand shell.

### 7f. Interactive features that need React work

These are the two pages that are **more than static content**:

| Page | Interactivity |
|---|---|
| `/independence-readiness-checklist/` | 14-question multi-area readiness quiz with scored outcome + email delivery |
| `/sober-living-questions-checklist/` | 30-question checklist with email-my-answers |

These need custom React components with form state + backend (likely: send answers to GoHighLevel via webhook, or build a simple `/api/checklist` route).

### 7g. Standardized components the site needs

- `<CallToAction phone="(323) 942-9996" />` — ships on every page footer
- `<ProgramCard level="flagship | independent | apartments" />` — appears on home + overview
- `<TeamCard />` — grid on `/meet-our-team/` + spots on program pages
- `<GhlForm formId="..." />` — thin iframe wrapper with correct aspect ratio
- `<SchemaOrg type="LocalBusiness | Service | Place" data={...} />` — SEO-critical
- `<VimeoLite />` — lazy facade for hero videos

---

## What I'd build first

1. **Design tokens + base layout (Week 1 Day 1–2).** Copy the brand palette & typography above into `src/design-system/`, extend `tailwind.config` with the semantic names (`bg-primary`, `text-highlight`, `bg-card`), build the root layout with the dark `--color-page` background, Inter sans, and the sticky header + footer shell with the universal CTA block. Everything downstream renders inside this shell.

2. **Homepage + Flagship Program page (Week 1 Day 3–5).** Build these two together because they share ~80% of the component surface (hero, program tier card, outcomes strip, testimonial, CTA block, team preview). Shipping both proves the component library and gets a client-visible preview deploy. Vimeo hero with lazy facade. GHL form embed verified live.

3. **Remaining 6 MVP pages + SEO parity (Week 2).** Independent Living, Recovery Apartments, The Ethos Difference, Meet Our Team, Contact, Program Overview for Professionals. Each gets the `<SchemaOrg>` LocalBusiness + (where relevant) Service + Place JSON-LD. Robots + sitemap wired. OpenGraph parity with current site so link previews don't regress.

4. **Blog + content migration (Week 3).** Bulk-export 182 posts via WP REST API to MDX files with frontmatter; rehost images; rebuild `/blog/` index + `/post/[slug]/` + category pages. Same URL shape = no redirects.

5. **Interactive checklists (Week 4).** Port the two scored checklists as React components with GoHighLevel webhook on submit. These are the only pages that are more than content, and they're also the top-of-funnel lead magnets — worth doing right.

---

*Supporting artifacts saved to `/tmp/ethos_*` — HTMLs, sitemaps, and raw CSS files are preserved for deeper per-page work.*
