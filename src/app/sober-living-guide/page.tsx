import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'What It Is Like Living in a Sober House: A Complete Guide';
const description =
  'A plain-language guide to sober living homes — what they are, how they differ from rehab and halfway houses, the rules, who should consider them, how long to stay, cost, and how to choose the right one.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/sober-living-guide/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Sober Living: A Complete Guide', href: '/sober-living-guide/' },
];

const sections = [
  {
    h2: 'What is a sober living home?',
    body: 'Sober living homes are alcohol- and drug-free environments where residents build or maintain sobriety. Through peer support, accountability, and daily structure, residents transition from treatment back into independent life — without the volatility that often triggers relapse.',
  },
  {
    h2: 'Sober houses vs. rehab and halfway houses',
    body: 'Rehab centers deliver clinical treatment under medical supervision. Halfway houses are usually court-mandated reentry programs. A sober living home sits between the two — voluntary, non-clinical, longer-term, and anchored in a resident community rather than a treatment schedule.',
  },
  {
    h2: 'Rules, accountability, and length of stay',
    body: 'Most sober homes share a core set of expectations: no substances on the property, regular drug testing, mandatory house meetings, and a commitment to work, school, or structured activity. Residents typically stay 90 days at minimum; one year or more is common and strongly associated with sustained recovery.',
  },
  {
    h2: 'How to choose the right home',
    body: 'Look for a licensed residence with a stated program philosophy, a clear code of conduct, qualified staff, and outcome data you can review. Visit in person, ask about peer culture, and talk with alumni before you commit.',
  },
] as const;

export default async function SoberLivingGuidePage() {
  'use cache';
  const canonicalUrl = `${business.url}/sober-living-guide/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Guide"
        h1="What it is like living in a sober house."
        lead="Sober living homes are alcohol- and drug-free environments where residents build or maintain sobriety. This guide covers what they are, how they differ from rehab and halfway houses, the rules you can expect, who should consider them, how long to stay, cost, and how to choose the right home."
      />
      {sections.map((s, i) => (
        <section
          key={s.h2}
          className={`${i % 2 === 0 ? 'bg-page' : 'bg-primary'} border-t border-ink`}
        >
          <Container className="py-20 md:py-24">
            <div className="max-w-3xl space-y-6">
              <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
                {s.h2}
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                {s.body}
              </p>
            </div>
          </Container>
        </section>
      ))}
      <CtaBanner
        eyebrow="Ready to begin?"
        heading="See if Ethos is the right fit."
        subheading="Talk with our team about our three programs and the community behind them."
      />
    </>
  );
}
