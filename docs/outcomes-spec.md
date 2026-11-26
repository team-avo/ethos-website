# Ethos Recovery — Outcomes Page: Rebuild Spec

**Scope:** `/outcomes/`
**Date:** 2026-11-26
**Live ref:** https://www.ethosrecovery.com/outcomes/

This page is not a stats-tile marketing page — it's a **long-form evaluation report** (the "Ethos Summer 2023 Evaluation Report" by Petree Consulting, using OQ45.2 + PHQ-9 instruments). The rebuild preserves that character: a credible, data-driven report, not a hype reel.

All color tokens below are already available as Tailwind utilities (see `src/app/globals.css`).

---

## 0. Page shape

| # | Section (live `data-label` / name) | Component | Backdrop |
|---|---|---|---|
| 1 | `header/header` | `<SiteHeader />` (layout) | — |
| 2 | Breadcrumbs (Home › Outcomes) | `<Breadcrumbs />` | `bg-primary` |
| 3 | Hero — "Outcomes / Recovery is Achievable" | `<PageHero />` | `bg-primary` |
| 4 | About the evaluation (methodology) | `<MethodologyIntro />` **new** | `bg-page` |
| 5 | Member characteristics & treatment progress | `<StatTileRow />` **new** + copy | `bg-primary` |
| 6 | Health outcomes intro | `<SectionIntro />` (plain Container block) | `bg-page` |
| 7 | 4× Clinical chart blocks (Depression, Mental Health, Interpersonal, Social) | `<ChartBlock />` **new** × 4 | alternating `bg-page` / `bg-primary` |
| 8 | Post-program surveys intro (3/6/12 mo response counts) | `<StatTileRow />` reuse | `bg-primary` |
| 9 | 5× Life-outcome chart blocks (Substance, Family, Employment, Education, Satisfaction) | `<ChartBlock />` reuse × 5 | alternating |
| 10 | Report downloads (2023 + 2020 Petree PDFs) | `<ReportDownloads />` **new** | `bg-card` card on `bg-page` |
| 11 | CTA banner | `<CtaBanner />` (reuse) | `bg-cta` |
| 12 | `<SiteFooter />` (layout) | — | — |

---

## 1. Hero — `<PageHero />` (reuse)

- **Eyebrow:** `Outcomes`
- **H1:** `Recovery is Achievable.`
- **Lead (verbatim from DOM paragraph 0):**
  > Although Ethos Recovery is not a clinical program, we share outcome data from a third-party evaluation with residents, families, and outside providers. We use the OQ45.2 and PHQ-9 instruments — validated tools that measure functioning across mental, behavioral, and social health, and are sensitive to change over short periods of time.

Backdrop: `bg-primary`. No image. Lets the data breathe.

---

## 2. Methodology intro — `<MethodologyIntro />` **(NEW)**

Full-bleed `bg-page` block with a two-column layout on desktop:
- **Left:** Big numbered steps (01 / 02 / 03) that explain the evaluation process.
- **Right:** Narrative paragraph.

**Numbered steps** (synthesized from the DOM — pulled from copy, not the live DOM layout, which is a plain paragraph wall):

| 01 | **Third-party evaluation.** Ethos partners with Petree Consulting to independently assess outcomes. |
| 02 | **Validated instruments.** We use the Outcome Questionnaire (OQ45.2) for mental, relationships, and social health, and the PHQ-9 for depression. |
| 03 | **Longitudinal measurement.** Scores are taken at admission, during the program, and at 3, 6, and 12 months after discharge. |

**Right-column paragraph** (verbatim DOM para 2):
> Ethos Structured Sober Living is an all-male recovery community in West Los Angeles. Long-term sobriety is fostered by peer encouragement and expectations of accountability, camaraderie, and character development. House members eat and live as a family and meet regularly to support each other in their new ways of living.

Backdrop: `bg-page` · accent `text-highlight` on the numbered badges.

```ts
type MethodologyIntroProps = {
  eyebrow?: string;
  heading: string;
  steps: Array<{ index: string; title: string; body: string }>;
  narrative: string;
};
```

---

## 3. 2023 Resident Evaluation header

Bridge block (plain `Container` inside the page route — no new component needed):
- **H2 (small, eyebrow):** `2023 Resident Evaluation`
- **H3 (big):** `Ethos Summer 2023 Evaluation Report`
- Sub-eyebrows below: `ETHOS SOBER LIVING RESIDENCE` · `EVALUATION`
- Body (verbatim DOM para 3):
  > In keeping with their accountability standards, Ethos is dedicated to understanding and sharing the impact of their work. Ethos evaluates changes on their house members' substance use, as well as relationship, mental, and social health. This report summarizes this evaluation for members who attended Ethos between 2016 and 2023.

Backdrop: `bg-page`.

---

## 4. Member Characteristics & Treatment Progress — `<StatTileRow />` **(NEW)**

**Eyebrow:** `MEMBER CHARACTERISTICS & TREATMENT PROGRESS`

Four big stat tiles (the key marketing-ready numbers on this page):

| # | Value | Label | Source |
|---|---|---|---|
| 1 | **26** | Average age on arrival | DOM para 4 |
| 2 | **165** | Members hosted by spring 2023 | DOM para 4 |
| 3 | **10** | Members in program at the time of evaluation | DOM para 4 |
| 4 | **66%** | Depart after ≤ 25% of program (avg stay 43 days) | DOM para 4 |

Prose block below the tiles (verbatim DOM para 4, trimmed):
> Ethos is a program for males only, averaging 26 years old on arrival. By spring 2023, 165 members had come to the house, ten of whom were in program at that time. Not all house members stay engaged with Ethos for the recommended duration — two-thirds (66%) depart after having completed one-quarter, or less, of the program, staying an average of 43 days.

Backdrop: `bg-primary` · tile bg `bg-card` · number `text-highlight` (7xl) · label `text-muted`.

```ts
type StatTileRowProps = {
  eyebrow?: string;
  heading?: string;
  tiles: Array<{ value: string; label: string; note?: string }>;
  caption?: string; // the narrative paragraph under the row
};

type StatTileProps = { value: string; label: string; note?: string };
```

Will be reused for the post-program response-count row (33 @ 3mo, 26 @ 6mo, 15 @ 1yr).

---

## 5. Health Outcomes intro

Plain `<Container>` block:
- **H3 (eyebrow):** `HEALTH OUTCOMES`
- Body (verbatim DOM para 5, trimmed first+last):
  > Outcomes are the mental, relationships, and behavioral changes members experienced, associated with their engagement with the program. Ethos adopts a widely used, validated, reliable instrument — the Outcome Questionnaire 45.2 — to assess the mental, behavioral, and social health of their clients. This is a 45-question instrument that measures mental health symptoms, relationships, and social behavior.

Backdrop: `bg-page`.

---

## 6. Four clinical chart blocks — `<ChartBlock />` **(NEW)**

Each block is a single `<ChartBlock />`, rendered in a 2-column layout at desktop (chart left, methodology right), stacked on mobile. Alternating backdrops (`bg-page` → `bg-primary` → `bg-page` → `bg-primary`) to create vertical rhythm.

### 6.1 Depression Symptoms (PHQ-9)
- **Eyebrow / H2:** `DEPRESSION SYMPTOMS`
- **Scale caption:** `PHQ-9 · 10–14 moderate · 5–9 mild · <4 minimal`
- **Chart image:** `/images/outcomes/depression-symptoms.png`
- **Body (DOM para 7, verbatim trimmed):**
  > Depression symptoms are measured with the PHQ-9 (Personal Health Questionnaire – 9 Item Survey). The figure shows scores from when members started at Ethos, during the program, and after discharge. The blue line represents members who fully completed the program.

### 6.2 Mental Health Symptoms (OQ45.2 Symptom Distress)
- **H2:** `MENTAL HEALTH SYMPTOMS`
- **Scale caption:** `Symptom Distress · ≥36 clinically problematic`
- **Chart image:** `/images/outcomes/mental-health.png`
- **Body (DOM para 8):**
  > The Symptom Distress Scale of the OQ45.2 measures depression and anxiety. Scores of 36 or higher indicate clinically problematic symptoms. House members at Ethos admit to treatment with scores in the clinically problematic range. As time from admission increases, mental health symptoms are healthier — particularly for those who complete the program. Sustained gains are more pronounced for completers.

### 6.3 Interpersonal Relationships (OQ45.2)
- **H2:** `INTERPERSONAL RELATIONSHIPS`
- **Scale caption:** `Interpersonal Relations · ≥15 clinically problematic`
- **Chart image:** `/images/outcomes/interpersonal-relationships.png`
- **Body (DOM para 10):**
  > Scores on the Interpersonal Relations scale of the OQ45.2 of 15 or higher indicate clinically problematic symptoms. House members, on average, admit to treatment in the clinically problematic range. For those who complete the program, relationship health improves as they progress through the program and gains are sustained after departure.

### 6.4 Social Behavior (OQ45.2 Social Role)
- **H2:** `SOCIAL BEHAVIOR`
- **Scale caption:** `Social Role · ≥12 clinically problematic`
- **Chart image:** `/images/outcomes/social-behavior.png`
- **Body (DOM para 12):**
  > The Social Role Scale of the OQ45.2 measures social functioning — respect for the law, ability to meet responsibilities. Scores of 12 or higher indicate clinically problematic symptoms. Those who complete Ethos generally present with healthy social functioning and sustain that health during and after the program.

```ts
type ChartBlockProps = {
  eyebrow?: string;       // e.g. "CLINICAL INDICATOR"
  heading: string;
  scaleCaption?: string;  // short badge above the chart
  body: string;           // paragraph
  chartSrc: string;
  chartAlt: string;
  backdrop?: 'page' | 'primary';
  reversed?: boolean;     // flip chart/text columns
};
```

---

## 7. Post-program response counts — `<StatTileRow />` (reuse)

**Eyebrow:** `OTHER HEALTH INDICATORS — 3, 6, AND 12 MONTHS POST-PROGRAM`

Three tiles:
| 33 | respondents at 3 months |
| 26 | respondents at 6 months |
| 15 | respondents at 12 months |

Caption (DOM para 13, verbatim trimmed):
> Three, six, and twelve months after departure, Ethos members are asked to report on their health, behavior, and relationships. It must be noted that this sub-sample might be biased toward those who stay in touch with the program.

Backdrop: `bg-primary`.

---

## 8. Five life-outcome chart blocks — `<ChartBlock />` (reuse)

| # | Heading | Scale caption | Image | Body source |
|---|---|---|---|---|
| 1 | Substance Use | Self-reported abstinence | `/images/outcomes/substance-use.png` *(not on live page — use `outcomes_other-indicators-01.jpg`)* | DOM para 15 |
| 2 | Family Functioning | Family-relationship self-report | `outcomes_other-indicators-02.png` → `/images/outcomes/family-functioning.png` | DOM para 17 |
| 3 | Employment | Employment status self-report | `outcomes_other-indicators-03.png` → `/images/outcomes/employment.png` | DOM para 22 |
| 4 | Educational Goals | Education-goal progress | `outcomes_other-indicators-04.png` → `/images/outcomes/education.png` | DOM para 24 |
| 5 | Satisfaction with Life | Life-satisfaction self-report | `outcomes_other-indicators-05.png` → `/images/outcomes/satisfaction.png` | DOM para 27 |

Alternating backdrops `bg-page` / `bg-primary`.

---

## 9. Report downloads — `<ReportDownloads />` **(NEW)**

Backdrop: `bg-page` with inner `bg-card` panel (rounded-2xl p-10).

- **H3:** `Ethos Recovery believes that outcomes matter.`
- **Body (verbatim DOM para 31):**
  > We proudly use Petree Consulting to track our outcomes. Download the full reports for 2023 and 2020 below.
- **Two download cards (vertical stack on mobile, 2-col desktop):**
  - **2023 Petree Evaluation (PDF)** — primary CTA. Live URL is not directly linked on the page; placeholder href `/reports/ethos-2023-evaluation.pdf`.
  - **2020 Petree Evaluation (PDF)** — secondary. Live asset: `wp-content/uploads/2026/11/ETHOS-2020-EVALUATION-REPORT-FINAL-05262020LM.pdf`. Mirror to `/public/reports/ethos-2020-evaluation.pdf`.

```ts
type ReportDownloadsProps = {
  heading: string;
  body: string;
  reports: Array<{
    year: number;
    title: string;
    href: string;
    sizeLabel?: string; // e.g. "PDF · 2.1 MB"
  }>;
};
```

---

## 10. CTA banner — `<CtaBanner />` (reuse)

- **Eyebrow:** `Ready to begin?`
- **Heading:** `See what sustained recovery looks like.`
- **Subheading:** `Talk with our team to learn how Ethos fits your family's path.`

---

## 11. Component list

### Reuse (already built)
- `<SiteHeader />`, `<SiteFooter />`, `<PhoneCtaBar />` — from layout
- `<Container />`
- `<Breadcrumbs />`
- `<PageHero />`
- `<CtaBanner />`
- `<SchemaOrg />`

### Build new (3)
- `<MethodologyIntro />` — numbered 01/02/03 steps + right-column narrative. Purpose: visually structures the methodology so the page opens credible and clear rather than as a wall of text.
- `<StatTileRow />` + `<StatTile />` — big-number row used in two places (member cohort stats, post-program response counts). Reuse this component on `/the-ethos-difference/` and `/outcomes/` downstream.
- `<ChartBlock />` — chart image + title + scale caption + methodology prose in a two-column block with an optional `reversed` flag. Used 9 times on this page; will reuse on `/the-ethos-difference/` too.
- `<ReportDownloads />` — two-card PDF download block with file metadata.

**Total: 4 new components (counting StatTile as part of StatTileRow).**

---

## 12. Image / asset downloads

Mirror the following into `/public/images/outcomes/` and `/public/reports/`:

| Live URL | Local path | Notes |
|---|---|---|
| `wp-content/uploads/2026/11/outcomes_depression-symptoms.png` | `/images/outcomes/depression-symptoms.png` | Chart; keep as-is for v1, redraw with Recharts/Nivo later. |
| `wp-content/uploads/2026/11/outcomes_mental-health.png` | `/images/outcomes/mental-health.png` | Chart. |
| `wp-content/uploads/2026/11/outcomes_interpersonal-relationships.png` | `/images/outcomes/interpersonal-relationships.png` | Chart. |
| `wp-content/uploads/2026/11/outcomes_social-behavior.png` | `/images/outcomes/social-behavior.png` | Chart. |
| `wp-content/uploads/2026/11/outcomes_other-indicators-01.jpg` | `/images/outcomes/substance-use.jpg` | Chart; note jpg not png. |
| `wp-content/uploads/2026/11/outcomes_other-indicators-02.png` | `/images/outcomes/family-functioning.png` | Chart. |
| `wp-content/uploads/2026/11/outcomes_other-indicators-03.png` | `/images/outcomes/employment.png` | Chart. |
| `wp-content/uploads/2026/11/outcomes_other-indicators-04.png` | `/images/outcomes/education.png` | Chart. |
| `wp-content/uploads/2026/11/outcomes_other-indicators-05.png` | `/images/outcomes/satisfaction.png` | Chart. |
| `wp-content/uploads/2026/11/ETHOS-2020-EVALUATION-REPORT-FINAL-05262020LM.pdf` | `/reports/ethos-2020-evaluation.pdf` | PDF, ~multi-MB. |

Pull with `curl`, no credentials needed. All assets are public.

---

## 13. JSON-LD

Live page emits: `LocalBusiness` + `BreadcrumbList`.

**Rebuild adds:**
- `LocalBusiness` (shared, via `<SchemaOrg types={['LocalBusiness']} />`)
- `BreadcrumbList` with `[Home, Outcomes]`
- `Article` — framing this as a published report (rich-snippet-eligible):
  ```ts
  {
    '@type': 'Article',
    headline: 'Ethos Recovery 2023 Resident Evaluation',
    author: { '@type': 'Organization', name: 'Petree Consulting' },
    publisher: { '@id': `${business.url}#org` },
    datePublished: '2023-09-01', // best guess — confirm with Petree if we can
    about: { '@type': 'Thing', name: 'Sober living outcomes' },
  }
  ```

Extend `<SchemaOrg>` to accept an optional `article?: ArticleProps` so the existing types array stays simple. Low-risk extension of the existing component.

---

## 14. Metadata (Next.js `metadata` export)

Verbatim from live site:

```ts
export const metadata: Metadata = {
  title: 'Outcomes',  // layout template will render "Outcomes | Ethos Recovery"
  description:
    "What residents reported in Ethos Recovery's 2023 resident evaluation, including how the evaluation was done and what it can and can't tell you.",
  alternates: { canonical: '/outcomes/' },
  openGraph: {
    title: 'Outcomes - Ethos Recovery | Sober Living Community in Los Angeles',
    description:
      "What residents reported in Ethos Recovery's 2023 resident evaluation, including how the evaluation was done and what it can and can't tell you.",
  },
};
```

---

## 15. Implementation risks (max 3)

1. **9 chart PNGs are large and un-responsive.** The live site serves them at ~1200w without srcset. Served through `<Image>` with `fill` or explicit `width/height`, they'll be properly sized, but they're bitmap charts so they will look fuzzy on retina until we redraw them as SVG or with a chart library. **Acceptable for v1 — ship bitmap now, redraw later.**
2. **2020 PDF is multi-MB.** Don't commit the binary to git — download it, store under `/public/reports/`, and either `.gitattributes` it as a file to track with LFS or (simpler) just gitignore it and fetch it at build time. **Simplest for v1: commit it. It's a one-time resource file.**
3. **Chart image credibility risk.** The PNGs look dated — pasting them into a modern design makes the page feel like a WordPress port, not a rebuild. Consider a small Recharts conversion in a follow-up PR; it's the single biggest visual upgrade available on this page. **Out of scope for this spec; call it out in the PR description.**

---

**End of spec.**
