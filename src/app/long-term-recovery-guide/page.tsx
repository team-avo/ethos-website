import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'What Is Long-Term Recovery from Substance Abuse?';
const description =
  'Recovery from substance abuse does not happen in one day. It is a lifestyle stage that unfolds across precontemplation, contemplation, preparation, action, maintenance, and termination — and the first year matters most.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/long-term-recovery-guide/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Long-Term Recovery', href: '/long-term-recovery-guide/' },
];

const sections = [
  {
    h2: 'Recovery is a lifestyle, not an event',
    body: 'When someone overcomes the acute phase of addiction and regains their health, they enter remission. Recovery begins only when a person voluntarily carries the positive behaviors they learned in treatment into daily life — and keeps them there.',
  },
  {
    h2: 'The stages of recovery',
    body: 'The clinical model describes six stages: precontemplation (unaware), contemplation (considering change), preparation (making a plan), action (doing the work), maintenance (sustaining the change), and termination (the behavior is permanent). Most people cycle through these more than once before termination holds.',
  },
  {
    h2: 'What recovery looks like at one day, one month, one year',
    body: 'In the first 24 hours, the body begins clearing substances and acute withdrawal starts. By one month, sleep and appetite stabilize and the hardest cravings ease. By one year, new patterns — work, relationships, physical health — are established. Each milestone matters; none of them are the finish line.',
  },
  {
    h2: 'Why the environment carries the recovery',
    body: 'Long-term recovery depends less on willpower than on the environment surrounding the person. A community of peers in recovery, a structured daily routine, accountability, and purpose work together to keep the gains in place. Isolation is the single strongest predictor of relapse.',
  },
] as const;

export default async function LongTermRecoveryGuidePage() {
  'use cache';
  const canonicalUrl = `${business.url}/long-term-recovery-guide/`;
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
        h1="What long-term recovery actually looks like."
        lead="Recovery from substance abuse does not happen in one day — it is a complete lifestyle stage that unfolds over months and years. This guide walks through the clinical stages of recovery, what the first day, month, and year typically look like, and why the environment around the person carries most of the work."
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
        heading="Recovery is a community."
        subheading="Talk with our team about what sustained recovery looks like at Ethos."
      />
    </>
  );
}
