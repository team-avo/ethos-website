# Ethos Recovery — Home + Flagship Program: Rebuild Spec

**Scope:** `/` and `/ethos-flagship-program/`
**Date:** 2026-11-26
**Live refs:** https://www.ethosrecovery.com/ · https://www.ethosrecovery.com/ethos-flagship-program/

All color tokens below are already available as Tailwind utilities (see `src/app/globals.css`): `bg-page`, `bg-primary`, `bg-card`, `bg-cta`, `text-highlight`, `text-muted`, `text-subtle`, `border-ink`, `border-highlight`, `bg-gold`, `text-gold`.

---

## 0. Global facts

- Business: Ethos Recovery, structured sober living for men in Los Angeles.
- Address: **3914 Tuller Ave, Culver City, CA 90230**.
- Phone (CallRail-swapped on page): **(323) 942-9996** → `tel:+13239429996`.
- Universal CTA pair: `Call (323) 942-9996` + `Get In Touch` → `/contact/`.
- Vimeo hero video (homepage): **`1002119749`** — autoplay, muted, looped, no title/byline.
- Analytics: GTM `GTM-PC8G46L8`, CallRail `swap.js` from `cdn.callrail.com/companies/744125446/82cf8ae086c4fb91a656/12/swap.js`.
- Mobile nav pattern: hamburger → right-side drawer.
- Observed section markers on the live site (`data-label="…"`) — mirror these as component names.

---

## 1. Shared chrome

### 1.1 `<SiteHeader />` — appears on every page

**Layout:** sticky top bar on a dark `bg-page` surface with a hairline `border-ink` bottom divider.

**Left:** logo (`/public/images/ethos-logo.png` or SVG) linking to `/`.
**Right (desktop ≥1024):** inline nav links.
**Right (<1024):** hamburger button that opens `<MobileDrawer />` from the right.

**Top ribbon** (both desktop + mobile, above the main nav row):
- CTA pill: **"Download our FREE eBook"** → `/ebook-about-addiction/` (`bg-cta` button).

**Nav items — in order, exact labels + hrefs:**

| Label | href |
|---|---|
| Home | `/` |
| Meet Our Team | `/meet-our-team/` |
| Ethos Recovery Apartments | `/ethos-recovery-apartments/` |
| Transitional Living | `/ethos-independent-living/` |
| The Ethos Difference | `/the-ethos-difference/` |
| Mental Health Support | `/mental-health-support/` |
| Substance Abuse Support | `/substance-abuse-support/` |
| Outcomes | `/outcomes/` |
| Lifestyle Interventions | `/lifestyle-interventions/` |
| Pulse TMS | `/pulse-tms/` |
| Sober Living Guide | `/sober-living-guide/` |
| Long-Term Recovery | `/long-term-recovery-guide/` |
| Interventions | `/interventions/` |
| A Parent's Guide To Addiction | `/a-parents-guide-to-addiction/` |
| Adult Child Syndrome | `/post/adult-child-syndrome/` |
| Blog | `/blog/` |
| Contact | `/contact/` |

That's **17 items** — too many for a single horizontal row at desktop. The live site uses a condensed primary row + a dropdown or secondary drawer for the long tail. Recommended split in the rebuild:

- **Primary row (desktop):** Home · Programs ▾ · Outcomes · The Ethos Difference · Resources ▾ · Blog · Contact
- **Programs ▾:** Ethos Flagship Program, Ethos Recovery Apartments, Transitional Living, Meet Our Team
- **Resources ▾:** Sober Living Guide, Long-Term Recovery, Interventions, A Parent's Guide, Adult Child Syndrome, Mental Health Support, Substance Abuse Support, Lifestyle Interventions, Pulse TMS
- **Mobile drawer:** flat list of all 17 (what the live site does).

Props sketch:

```ts
type SiteHeaderProps = {
  current?: string; // active route for aria-current
};
```

### 1.2 `<PhoneCtaBar />` — floating call button (observed as `cta/call-button`)

Pinned bottom-right (desktop) / bottom-center full-width (mobile). On `bg-cta` with white text.

```ts
type PhoneCtaBarProps = { phone: string; telHref: string }; // defaults to (323) 942-9996
```

### 1.3 `<CtaBanner />` — appears before `<SiteFooter />` on every page (observed as `cta/banner`)

Full-bleed `bg-cta` band. Centered content:
- Eyebrow / small heading (page-specific)
- Big CTA copy ("Take the first step." style)
- Two buttons: phone (`bg-page` border-highlight) + "Get In Touch" (`bg-white` text-primary)

```ts
type CtaBannerProps = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
};
```

### 1.4 `<SiteFooter />` — appears on every page

**Columns (desktop, 3–4 columns + logo row):**

**Programs**
- Meet Our Team → `/meet-our-team/`
- Ethos Flagship Program → `/ethos-flagship-program/`
- Ethos Recovery Apartments → `/ethos-recovery-apartments/`
- Transitional Living → `/ethos-independent-living/`
- Outcomes → `/outcomes/`

**Partners**
- Lifestyle Interventions → `/lifestyle-interventions/`
- Pulse TMS → `/pulse-tms/`

**Resources**
- What It Is Like Living in a Sober House: A Complete Guide → `/sober-living-guide/`
- Long-Term Recovery → `/long-term-recovery-guide/`
- Interventions → `/interventions/`
- A Parent's Guide To Addiction → `/a-parents-guide-to-addiction/`
- Blog → `/blog/`

**Get in touch**
- Get In Touch → `/contact/`
- `3914 Tuller Ave Culver City, CA 90230` → `https://maps.google.com/?q=3914+Tuller+Ave%2C+Culver+City%2C+CA+90230`
- `(323) 942-9996` → `tel:+13239429996`

**Legal row:** © {year} Ethos Recovery · Privacy Policy → `/privacy-policy/` · Terms and Conditions → `/terms-and-conditions/`

Dominant colors: section bg `--color-primary`; link text `--color-muted` → hover `--color-highlight`.

---

## 2. Home page (`/`)

Observed sections in reading order (from `data-label` attributes on the live DOM):

1. `header/header` → `<SiteHeader />`
2. `hero/hero` → `<HomeHero />`
3. `front-page/callout` (`bg-primary py-20 desktop:py-28`)
4. `front-page/features`
5. `front-page/video`
6. `front-page/programs`
7. `front-page/lead-magnet`
8. `front-page/partners`
9. `front-page/testimonials` (uses `carousel/default` + 3× `card/testimonial`)
10. `cta/banner` → `<CtaBanner />`
11. `footer` → `<SiteFooter />`
12. Overlay: `cta/call-button` → `<PhoneCtaBar />`

### 2.1 `<HomeHero />`

- **Backdrop:** full-bleed Vimeo loop (`id=1002119749`, `muted=1&autoplay=1&loop=1&title=0&byline=0&portrait=0`), overlaid with a `rgba(13, 17, 43, 0.6)` wash so text stays readable.
  - Fallback poster: `/public/images/hero.jpg` (currently `/wp-content/uploads/2026/02/hero_image-1.jpg`, 1921×1184).
- **Eyebrow / title content (centered-left):**
  - **H1:** `COMMUNITY IS OUR METHOD`
  - **Subheading:** `Building Character, Sustaining Recovery & Resilience: Your Community Awaits.`
  - **Primary CTA:** `Learn More` → `/the-ethos-difference/` (`border-highlight bg-transparent text-white rounded-full` — observed utility string on live site).
- Colors: text white, accent `--color-highlight`.

```ts
type HomeHeroProps = {
  videoId: string;
  posterSrc: string;
  eyebrow?: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
};
```

### 2.2 `<Callout />` — three feature rail (`front-page/callout`)

**Background:** `bg-primary` · padding `py-20 desktop:py-28` · flex column, gap-20.

Three "pillar" callouts, each a short title + body. From the DOM:

- **Ethos Flagship Program** — "Our Los Angeles recovery community provides a structured community for men in recovery."
- **Peer Support Philosophy** — "Peer support to help young men navigate education, work, and family integration to manifest clinically relevant outcomes."
- **Recovery Residences** — "Ethos Recovery provides three levels of support: Ethos Recovery Community, Ethos Recovery Apartments, and Ethos Recovery Transitional Living, each offering structure and community to support your recovery."

Visual treatment: numbered or iconed `<CalloutItem />` on `bg-primary`, text white, each item has a `text-highlight` numeric label or decorative accent.

```ts
type CalloutProps = { items: Array<{ title: string; body: string }> };
```

### 2.3 `<ProgramsGrid />` — three tiers (`front-page/programs`)

**H2:** `Structured Support, Balanced Independence, and Community-Focused Recovery Across Los Angeles`

Three `<TierCard />` (clickable, each is `<Link>`). Dominant: `bg-card` card surface on `bg-page` section. Each card has image/illustration, heading, short body, and a trailing CTA chevron.

| Card | Heading | Body | Href |
|---|---|---|---|
| 1 | **Ethos Structured Recovery Community** | Our most flagship program, offering intensive support with a focus on accountability, 12-step integration, and daily routine. | `/ethos-flagship-program/` |
| 2 | **Ethos Recovery Apartments** | Our mid-level structured living community in Culver City, blending independence with essential recovery services like drug testing, se[rvices]… | `/ethos-recovery-apartments/` |
| 3 | **Ethos Recovery Transitional Living** | For men ready for more autonomy, this community-based residence in West Adams supports long-term recovery with private rooms[…] | `/ethos-independent-living/` |

```ts
type TierCardProps = {
  index: 1 | 2 | 3;
  title: string;
  body: string;
  href: string;
  icon?: ReactNode;
};
```

### 2.4 `<LeadMagnet />` — eBook callout (`front-page/lead-magnet`)

- **H2:** `Get the guide`
- **Body:** `After Treatment: a free family planning guide for the first 90 days, covering what to plan before discharge and what to expect in the months that follow.`
- **CTA:** `Read the guide` → `/after-treatment-family-guide/`
- **Disclaimer (small, muted):** `This guide is a planning tool for families. It isn't medical advice.`

Visual: Two-col row on desktop, stacked on mobile. Left side: cover art (`/public/images/after-treatment-cover.png` TBD — not present in homepage HTML, image may be served via srcset in the live CSS). Right side: copy + CTA.

```ts
type LeadMagnetProps = {
  heading: string;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  disclaimer?: string;
  cover?: { src: string; alt: string };
};
```

### 2.5 `<Partners />` — community partners (`front-page/partners`)

- **H2:** `Community Partners`

Two tiles side by side:

| Partner | Blurb (from the card link) | Href | Asset |
|---|---|---|---|
| **Lifestyle Interventions** | Lifestyle Interventions (LI) provides a comprehensive suite of concierge case management and mentoring services tailored to support ment[al health]… | `/lifestyle-interventions/` | `/public/images/lifestyle-interventions.png` (currently `final-logo-01-768x323.png`) |
| **Pulse TMS** | Pulse TMS partners with Ethos Recovery to provide cutting-edge transcranial magnetic stimulation and medication management as an additional resource f[or]… | `/pulse-tms/` | `/public/images/pulse-tms.png` (currently `Pulse-Color.png`) |

```ts
type PartnersProps = {
  heading: string;
  partners: Array<{ name: string; blurb: string; href: string; logoSrc: string; logoAlt: string }>;
};
```

### 2.6 `<Testimonials />` — 3-card carousel (`front-page/testimonials` → `carousel/default`)

- **H2:** `What are people saying about Ethos`
- **Background:** `background-image: url(/public/images/testimonials-bg.png)` (currently `What-people-aresaying-about-ethos.png`). Overlay for legibility.
- **Carousel:** 3 cards, `bg-card rounded-2xl p-8`, each a quote + author em-dash line. 5 gold stars (`text-gold`) above the quote on each card.

| # | Quote (verbatim, trimmed to fit) | Author |
|---|---|---|
| 1 | *"For me this review is simple..I tried everything for over 20 years of my life to regain control of a on-going struggle within myself, it caused me to suffer silently, hurt loved ones and ruin all opportunities and dreams that I had worked my whole life for. Today, after entering Ethos over a year and a half ago, I have found my true self and can enjoy life as it's meant to be. Along with a new community of friends and brothers who support my every move. Today I am sober after a 3 decade struggle with addiction. Thank you Ethos and everyone who guided me to break through the barriers. Forever Thankful 🙏"* | **Brandon R.** |
| 2 | *"The ethos sober living was a game changer for our son and family. Our son went to several rehabs and sober living houses. The ethos program not only had him sober for more than 90 days but taught him the value of family, communication and thinking outside of himself. He is definitely a better person since graduating from the program. He is now a year and half sober and excited about life. The ethos program helped be too as a mom of an addict hold my boundaries. Tuc who was the case manager called once a week with any updates. Best program out there!"* | **Clay F.** |
| 3 | *"Ethos has truly changed my life for the better. I came into Ethos without direction for my future and minimal life skills. Thankfully, Ethos fostered my ability to maintain long term sobriety and shaped my character into one that is able to withstand any challenges in life. Today I am an independent person that has 2 years of recovery, a career that I love, healthy relationships, and most importantly the Ethos community, that continues to support my future in all my endeavors!"* | **Tyler V.** |

Carousel behavior: autoplay (`startAutoPlay()` observed in the source), left/right chevrons visible desktop, swipeable mobile. Indicators (dots) below.

```ts
type TestimonialsProps = {
  heading: string;
  items: Array<{ quote: string; author: string; stars?: number /* default 5 */ }>;
  bgImage?: string;
};

type TestimonialCardProps = { quote: string; author: string; stars: number };
```

### 2.7 `<CtaBanner />` (home-specific copy)

Content observed from the universal pattern — copy to confirm during build:
- **Heading:** `Ready to join the Ethos community?`
- **Buttons:** `Call (323) 942-9996` · `Get In Touch` → `/contact/`

### 2.8 `<SiteFooter />` — as spec'd in §1.4.

---

## 3. Flagship Program (`/ethos-flagship-program/`)

The flagship page is a single long-form content page. Structure is lean:

1. `header/header` → `<SiteHeader />`
2. `<Breadcrumbs />` (JSON-LD `BreadcrumbList`) — Home › Ethos Flagship Program
3. `<PageHero />` — simpler than the home hero
4. `page/page` — the R.I.S.E. UP content block
5. `cta/banner` → `<CtaBanner />`
6. `footer` → `<SiteFooter />`
7. Overlay: `<PhoneCtaBar />`

### 3.1 `<PageHero />` (title block)

- **H1:** `Ethos Flagship Program`
- **Lead paragraph:** *"At Ethos Recovery, we believe that treating substance abuse requires a comprehensive approach to addressing the underlying issues contributing to addiction. We recognize that addiction often stems from trauma, unresolved emotional pain, and a lack of purpose or direction. That's why we offer a range of non-clinical int[erventions]…"*
- Background: `bg-primary` with a `text-highlight` accent on the title.

```ts
type PageHeroProps = {
  h1: string;
  lead: string;
  backdrop?: 'primary' | 'page' | 'card';
};
```

### 3.2 `<RiseUpModel />` — the signature content block

- **H2:** `Ethos R.I.S.E. UP Model of Recovery`
- **H3 intro block:** `Welcome to Ethos Recovery – Embracing the R.I.S.E UP Model A Journey Towards Sustainable Recovery`
  - Body: *"At Ethos Recovery, we are committed to providing a transformative recovery experience grounded in our unique R.I.S.E UP model, designed to support individuals facing challenges related to mental health and substance abuse. This model encapsulates the key principles of resilience, inspiration, and holistic healing, prom[oting]…"*
- **H2:** `R.I.S.E. UP: A Philosophy for Living`
  - Body: *"The R.I.S.E. UP model is more than just a recovery strategy—it is a philosophy for living. At its core, this model encourages individuals to adopt a mindset of perseverance, growth, and community support in every aspect of their lives. The principles of resilience, inspiration, sobriety, exercise, and upward progress e[verywhere]…"*

Then **five principle cards** (R-I-S-E-UP), each on `bg-card rounded-2xl` with a `text-highlight` letter badge:

| Letter | Title | Body (verbatim) |
|---|---|---|
| **R** | Resilience: "Finding Strength in Challenges" | Recovery from mental health issues and substance abuse requires resilience. At Ethos, we help individuals build the strength and determination needed to overcome these challenges. Our community supports personal growth by transforming obstacles into opportunities, fostering lasting recovery. |
| **I** | Inspiration: "Community is Our Method" | In recovery, inspiration from others can be a catalyst for change. At Ethos, "Community is Our Method," where individuals uplift and motivate each other throughout their recovery journey. By sharing experiences and fostering an environment of positivity and hope, we create a culture that supports sustainable recovery f[rom addiction]… |
| **S** | Sobriety: "Commitment to a Holistic Lifestyle" | Sobriety is not just about abstaining from substances—it involves a commitment to a holistic, healthy lifestyle that enhances both mental and physical well-being. Our focus is on maintaining sobriety through health practices that encompass both emotional and physical healing, ensuring long-term recovery from substance[…] |
| **E** | Exercise: "Physical Wellness for Mental Strength" | Exercise plays a vital role in improving both mental health and recovery from substance abuse. At Ethos, we integrate regular physical activity into our recovery process, promoting overall wellness that strengthens the mind and body. Physical activity helps relieve stress, improve mood, and create mental resilience, wh[ich]… |
| **UP** | Progress and Optimism in Recovery | "UP" symbolizes upward progress in recovery, especially during challenging times when giving up may seem like an option. We teach individuals to face their fears and persevere, whether dealing with mental health disorders or addiction recovery. At Ethos, we celebrate each step forward, recognizing the importance of opt[imism]… |

Then three summary/closer blocks:

- **H3** `Ethos Recovery Workbook: A Practical Tool for Mental Health and Substance Abuse Recovery` — full paragraph on the companion workbook.
- **H3** `Why Choose Ethos Recovery?` — full paragraph summarizing differentiators.
- **H3** `Embrace Change and Rise Up with Ethos` — closing paragraph ending with "Contact us today to learn more about our program and schedule a tour."

```ts
type RiseUpModelProps = {
  intro: { h3: string; body: string };
  philosophy: { h2: string; body: string };
  principles: Array<{ letter: 'R' | 'I' | 'S' | 'E' | 'UP'; title: string; body: string }>;
  closers: Array<{ h3: string; body: string }>;
};
```

### 3.3 `<CtaBanner />` (flagship copy)

- **Heading:** `Embrace Change and Rise Up with Ethos`
- **Subheading:** `Contact us today to learn more about our program and schedule a tour.`
- **Buttons:** phone + `Get In Touch`.

### 3.4 `<SiteFooter />` — as §1.4.

---

## 4. Component library plan

### Shared (build new, reuse on both pages)
- `<SiteHeader />` (incl. `<MobileDrawer />`, `<DesktopNav />`, `<NavLink />`)
- `<SiteFooter />`
- `<PhoneCtaBar />` (sticky overlay)
- `<CtaBanner />`
- `<SchemaOrg />` (JSON-LD emitter — see §6)
- `<Breadcrumbs />` (JSON-LD + visual crumb row)
- `<Container />` (consistent `max-w-7xl mx-auto px-6`)
- `<Button />` (variants: `primary` on `bg-cta`, `outline` on `border-highlight`, `ghost`)
- `<StarRow />` (5× gold stars — for testimonials and anywhere ratings appear)

### Home-specific (build new)
- `<HomeHero />` (Vimeo background, h1 overlay)
- `<Callout />` + `<CalloutItem />`
- `<ProgramsGrid />` + `<TierCard />`
- `<LeadMagnet />`
- `<Partners />` + `<PartnerLogo />`
- `<Testimonials />` + `<TestimonialCard />` + `<TestimonialCarousel />` (autoplay + chevrons + dots, swipeable)

### Flagship-specific (build new)
- `<PageHero />` (reused on every non-home page)
- `<RiseUpModel />` + `<PrincipleCard />` (5× R-I-S-E-UP letter badges)

### Flagship-specific reuses from Home
- `<CtaBanner />`, `<SiteHeader />`, `<SiteFooter />`, `<PhoneCtaBar />`, `<Container />`, `<Button />`, `<SchemaOrg />`.

**Total new components:** **18** — 10 shared + 6 home + 2 flagship-only.

---

## 5. Image inventory

The two pages reference 6 distinct `wp-content/uploads` assets (many are loaded via CSS/srcset, not inline `<img>`). Confirmed observed paths:

| # | Live path | Suggested local path | Format / notes |
|---|---|---|---|
| 1 | `/wp-content/uploads/2026/02/ethos_logo.png` | `/public/images/ethos-logo.png` | Convert to SVG for crispness; keep PNG fallback at 2x |
| 2 | `/wp-content/uploads/2026/02/hero_image-1.jpg` (1921×1184) | `/public/images/hero-poster.jpg` | Keep JPG, 1920w; also 1280w + 768w via next/image |
| 3 | `/wp-content/uploads/2026/11/Pulse-Color.png` | `/public/images/partners/pulse-tms.png` | PNG with transparent bg; add 2x |
| 4 | `/wp-content/uploads/2026/11/What-people-aresaying-about-ethos.png` | `/public/images/testimonials-bg.png` | Dark-overlay background, 1920w |
| 5 | `/wp-content/uploads/2026/11/final-logo-01-768x323.png` | `/public/images/partners/lifestyle-interventions.png` | PNG with transparent bg; add 2x |
| 6 | Vimeo video `1002119749` | (no download — embed) | Lazy-load with `<iframe loading="lazy">` behind a poster |

**Not yet downloaded** (bulk migration via a `scripts/download-images.ts` that reads `wordpress-audit.md` + REST will be needed for the 221 site-wide assets; for just these two pages, download the 5 PNG/JPGs above manually).

---

## 6. JSON-LD requirements

The `<SchemaOrg />` component must emit the following per page (minimum required `@type` list from the live DOM):

### Home (`/`)
- `LocalBusiness` — `name`, `url`, `telephone: "+13239429996"`, `image`, `address: PostalAddress { streetAddress: "3914 Tuller Ave", addressLocality: "Culver City", addressRegion: "CA", postalCode: "90230", addressCountry: "US" }`, `geo: GeoCoordinates { latitude, longitude }`, `openingHours`, `priceRange`, `sameAs: [facebook, instagram, linkedin, …]`
- `ImageObject` — the hero image
- `PostalAddress` + `GeoCoordinates` — embedded in `LocalBusiness`
- `WebSite` — `name`, `url`, `potentialAction: SearchAction` (if search exists; the site has `/?s=` disallowed in robots so maybe skip)

### Flagship (`/ethos-flagship-program/`)
- `LocalBusiness` (same shared block)
- `ImageObject`
- `BreadcrumbList` with 2 `ListItem`:
  - `{ position: 1, name: "Home", item: "https://.../" }`
  - `{ position: 2, name: "Ethos Flagship Program", item: "https://.../ethos-flagship-program/" }`
- `Service` — `serviceType: "Sober Living"`, `provider: { @id: LocalBusiness }`, `areaServed: "Los Angeles"`, `description: <lead paragraph>`
- `Place` — the physical residence (`name`, `address`)

Implementation:

```ts
// src/components/SchemaOrg.tsx
type SchemaOrgProps = {
  types: Array<'LocalBusiness' | 'WebSite' | 'BreadcrumbList' | 'Service' | 'Place'>;
  page: { url: string; title: string; description: string };
  breadcrumbs?: Array<{ name: string; url: string }>;
  service?: { name: string; description: string };
};
```

Centralize `LocalBusiness` facts in `src/data/business.ts` so every page emits the same source-of-truth block.

---

## 7. CTAs / forms

- **Home**: **no form embed**. All CTAs are links to `/contact/` and `tel:+13239429996`. (The form widgets live on `/contact/` and the two checklist pages.)
- **Flagship**: **no form embed**. Same — CTAs funnel to `/contact/` and phone.
- Form IDs seen elsewhere on site (for the `/contact/` build later, not these two pages):
  - `https://api.leadconnectorhq.com/widget/form/9vtER8qy62NY25LptzzK`
  - `https://api.leadconnectorhq.com/widget/form/dkmP3hSqhgz3T7IWTaBQ`
- CallRail phone-swap script must load once in `<SiteLayout />`:
  `https://cdn.callrail.com/companies/744125446/82cf8ae086c4fb91a656/12/swap.js` (`async`, `defer`).

---

## 8. Section color map (quick reference)

| Section | Background | Primary text | Accent | Card surface |
|---|---|---|---|---|
| `<HomeHero />` | Vimeo + `rgba(13,17,43,0.6)` overlay | `white` | `text-highlight` | — |
| `<Callout />` | `bg-primary` | `white` | `text-highlight` | — |
| `<ProgramsGrid />` | `bg-page` | `white` | `text-highlight` | `bg-card` |
| `<LeadMagnet />` | `bg-primary` | `white` | `text-highlight` | — |
| `<Partners />` | `bg-page` | `white` | `text-highlight` | `bg-card` |
| `<Testimonials />` | bg-image + `bg-primary/60` overlay | `white` | `text-gold` (stars) | `bg-card rounded-2xl` |
| `<PageHero />` (flagship) | `bg-primary` | `white` | `text-highlight` | — |
| `<RiseUpModel />` principles | `bg-page` | `white` | `text-highlight` letter badge | `bg-card rounded-2xl` |
| `<CtaBanner />` | `bg-cta` | `white` | `bg-white text-primary` on second button | — |
| `<SiteFooter />` | `bg-primary` | `text-muted` | `text-highlight` on hover | — |
| `<PhoneCtaBar />` | `bg-cta` | `white` | — | — |

---

## 9. Build order (recommended)

1. **Shared layer** — `<Container />`, `<Button />`, `<SiteHeader />`, `<SiteFooter />`, `<PhoneCtaBar />`, `<CtaBanner />`, `<SchemaOrg />`, `<Breadcrumbs />`, `<StarRow />`, `src/data/business.ts`.
2. **Flagship first** (simpler page, validates shared layer) — `<PageHero />`, `<RiseUpModel />`, `<PrincipleCard />`, page route `app/ethos-flagship-program/page.tsx`.
3. **Home** — `<HomeHero />`, `<Callout />`, `<ProgramsGrid />` + `<TierCard />`, `<LeadMagnet />`, `<Partners />`, `<Testimonials />` + `<TestimonialCarousel />` + `<TestimonialCard />`, page route `app/page.tsx` (replace current placeholder).
4. **Assets** — download the 5 inline images to `/public/images/…`, replace Vimeo link with `<iframe loading="lazy">` behind a poster.
5. **Build** — run `npm run build`, verify both pages prerender under Next 16 Cache Components (prefer `'use cache'` on long-form server pages; keep carousel as a client component).
6. **Screenshot** at desktop + mobile widths, side-by-side vs the live site.

---

## 10. Implementation risks

1. **Nav density.** The live header has 17 primary links. A straight port looks cluttered at desktop. Decide early whether to adopt the dropdown split proposed in §1.1 or match 1:1 — a layout swap mid-build is costly.
2. **Testimonial carousel on Next 16 Cache Components.** The carousel is interactive (`startAutoPlay()`) and must be a client component (`'use client'`), but it's nested inside a server page using `'use cache'`. The server/client boundary must be drawn cleanly or the build will refuse.
3. **Partial card body copy.** The three `<TierCard />` blurbs and two `<Partners />` blurbs are visibly truncated on the live homepage (DOM wraps them in `line-clamp` or similar). The full copy must be pulled from each destination page before we ship — otherwise cards will read mid-sentence like they do now. Recommend adding a `description` field in `src/data/programs.ts` and `src/data/partners.ts` sourced from the full page intros, not the homepage card text.

