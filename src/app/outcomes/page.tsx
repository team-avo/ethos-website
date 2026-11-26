import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { MethodologyIntro } from '@/components/sections/MethodologyIntro';
import { StatTileRow } from '@/components/sections/StatTileRow';
import { ChartBlock } from '@/components/sections/ChartBlock';
import { ReportDownloads } from '@/components/sections/ReportDownloads';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';
import {
  methodologySteps,
  methodologyNarrative,
  memberStats,
  memberStatsCaption,
  postProgramCounts,
  postProgramCaption,
  clinicalCharts,
  lifeOutcomeCharts,
  reports,
} from '@/data/outcomes';

const title = 'Outcomes';
const description =
  "What residents reported in Ethos Recovery's 2023 resident evaluation, including how the evaluation was done and what it can and can't tell you.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/outcomes/' },
  openGraph: {
    title: `Outcomes — ${business.name} | Sober Living Community in Los Angeles`,
    description,
  },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Outcomes', href: '/outcomes/' },
];

export default async function OutcomesPage() {
  'use cache';
  const canonicalUrl = `${business.url}/outcomes/`;

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList', 'Article']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
        article={{
          headline: 'Ethos Recovery 2023 Resident Evaluation',
          description,
          author: { type: 'Organization', name: 'Petree Consulting' },
          datePublished: '2023-09-01',
          about: 'Sober living outcomes',
        }}
      />
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Outcomes"
        h1="Recovery is achievable."
        lead="Although Ethos Recovery is not a clinical program, we share outcome data from a third-party evaluation with residents, families, and outside providers. We use the OQ45.2 and PHQ-9 instruments — validated tools that measure functioning across mental, behavioral and social health, and are sensitive to change over short periods of time."
      />

      <MethodologyIntro
        eyebrow="How we measure"
        heading="A third-party evaluation, using validated instruments."
        steps={methodologySteps}
        narrative={methodologyNarrative}
      />

      {/* Section bridge */}
      <section className="bg-page border-t border-ink">
        <Container className="py-16 md:py-20">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              2023 resident evaluation
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              Ethos Summer 2023 Evaluation Report.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              In keeping with our accountability standards, Ethos is dedicated
              to understanding and sharing the impact of our work. The report
              summarizes evaluation data for members who attended Ethos between
              2016 and 2023 — covering substance use, relationships, mental and
              social health.
            </p>
          </div>
        </Container>
      </section>

      <StatTileRow
        eyebrow="Member characteristics & treatment progress"
        tiles={memberStats}
        caption={memberStatsCaption}
        backdrop="primary"
      />

      {/* Health outcomes bridge */}
      <section className="bg-page border-t border-ink">
        <Container className="py-16 md:py-20">
          <div className="max-w-4xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Health outcomes
            </p>
            <h2 className="text-2xl font-bold leading-tight text-white md:text-3xl">
              Mental, behavioral and social change.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Outcomes are the mental, relational and behavioral changes
              members experience associated with their engagement with the
              program. Ethos adopts the Outcome Questionnaire 45.2 — a 45-item
              validated instrument — to assess mental, behavioral and social
              health.
            </p>
          </div>
        </Container>
      </section>

      {/* Clinical chart blocks */}
      {clinicalCharts.map((chart, i) => (
        <ChartBlock
          key={chart.heading}
          {...chart}
          backdrop={i % 2 === 0 ? 'page' : 'primary'}
          reversed={i % 2 === 1}
        />
      ))}

      <StatTileRow
        eyebrow="Other health indicators — 3, 6 and 12 months post-program"
        tiles={postProgramCounts}
        caption={postProgramCaption}
        backdrop="primary"
      />

      {/* Life-outcome chart blocks (continue alternating with the clinical ones) */}
      {lifeOutcomeCharts.map((chart, i) => {
        const offset = clinicalCharts.length + i;
        return (
          <ChartBlock
            key={chart.heading}
            {...chart}
            backdrop={offset % 2 === 0 ? 'page' : 'primary'}
            reversed={offset % 2 === 1}
          />
        );
      })}

      <ReportDownloads
        eyebrow="Reports"
        heading="Ethos Recovery believes that outcomes matter."
        body="We proudly use Petree Consulting to track our outcomes. Download the full reports for 2023 and 2020 below."
        reports={reports}
      />

      <CtaBanner
        eyebrow="Ready to begin?"
        heading="See what sustained recovery looks like."
        subheading="Talk with our team to learn how Ethos fits your family's path."
      />
    </>
  );
}
