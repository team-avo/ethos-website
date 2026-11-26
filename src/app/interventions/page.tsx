import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Interventions: Everything You Need to Know';
const description =
  'A practical guide to interventions — what they are, when they help, the three main approaches (Johnson, Invitational, Family Systemic), and how to plan one with professional support.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/interventions/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Interventions', href: '/interventions/' },
];

const sections = [
  {
    h2: 'What is an intervention?',
    body: 'An intervention is a structured meeting where family and friends confront a loved one about their addiction and present a clear path into treatment. It is not an ambush — it is a planned conversation with defined outcomes and a professional to guide it.',
  },
  {
    h2: 'Why have one',
    body: 'Interventions can break through the denial and isolation that keeps addiction in place. When executed well, they move the conversation from "there is no problem" to "treatment starts today." When executed poorly, they can reinforce the shame that fuels the addiction. This is why professional support matters.',
  },
  {
    h2: 'The three main approaches',
    body: 'The Johnson Model is the classic confrontation format — direct, scripted, and rehearsed. The Invitational Model (ARISE) is a more collaborative, multi-session approach with the person included from the outset. The Family Systemic Model treats addiction as a family dynamic and brings the whole system into the room. The right approach depends on the person, the family, and the clinician.',
  },
  {
    h2: 'How to plan one',
    body: 'Work with a licensed interventionist. Choose participants carefully — fewer people, closer relationships, lower drama. Rehearse what each person will say and what consequences they are prepared to hold. Secure a treatment bed in advance. Pick a neutral time and place. Follow through on the plan whatever the outcome in the room.',
  },
] as const;

export default async function InterventionsPage() {
  'use cache';
  const canonicalUrl = `${business.url}/interventions/`;
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
        h1="Interventions: everything you need to know."
        lead="If you have a loved one struggling with addiction, you might be considering an intervention. This guide explains what interventions are, the three main approaches (Johnson, Invitational, and Family Systemic), the evidence behind them, and how to plan one well — with professional support."
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
        eyebrow="Need guidance?"
        heading="Talk with someone who has done this before."
        subheading="Our team can help you think through whether an intervention is the right step — and what comes after."
      />
    </>
  );
}
