import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = "A Parent's Guide To Addiction";
const description =
  "How can a parent help when their child has an addiction? A practical guide for families — starting with self-care, holding boundaries, finding the right treatment, and sustaining your own health while you support them.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/a-parents-guide-to-addiction/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: "A Parent's Guide", href: '/a-parents-guide-to-addiction/' },
];

const sections = [
  {
    h2: 'Start with your own oxygen mask',
    body: "The best way to help a loved one in addiction is to start with your own health. Parents are consumed with anguish and fear when a child is in crisis; that fear leads to sleepless nights, exhaustion, and poor decisions. The capacity to support your child is compromised when you let your own health decline. Self-care is not selfish — it is the foundation.",
  },
  {
    h2: 'Learn what addiction actually is',
    body: 'Addiction is a chronic brain disease, not a character defect or a lack of willpower. Understanding this changes how you respond. It replaces blame with clinical clarity, and it opens the door to evidence-based treatment instead of punishment or pleading.',
  },
  {
    h2: 'Hold loving boundaries',
    body: 'A boundary is not a punishment — it is a line you keep for your own health. "You cannot use substances in this house." "I will not give you money for drugs." Boundaries you enforce consistently create the environment in which a person can choose change. Boundaries you set and then abandon teach the opposite lesson.',
  },
  {
    h2: 'Find the right support',
    body: 'Work with a licensed clinician or interventionist. Join a family support group (Al-Anon, Nar-Anon, SMART Recovery Family & Friends). Look for a treatment program with a clear philosophy, published outcomes, and a long-term community — not just a 28-day detox. Recovery is a marathon, and you need people running it with you.',
  },
] as const;

export default async function ParentsGuidePage() {
  'use cache';
  const canonicalUrl = `${business.url}/a-parents-guide-to-addiction/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="For families"
        h1="A parent's guide to addiction."
        lead="How can a parent help when their child has an addiction? Many families find that a child's addiction is tearing them apart. This guide starts where it must — with your own oxygen mask — and walks through learning what addiction is, holding loving boundaries, and finding the right support for your family."
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
        eyebrow="You are not alone"
        heading="Talk with a family who has been where you are."
        subheading="Our team supports parents and families alongside the residents in our care."
      />
    </>
  );
}
