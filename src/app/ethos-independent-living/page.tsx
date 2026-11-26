import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Transitional Living';
const description =
  'Ethos Recovery Transitional Living — a peer-supported, community-based residence for men ready for more autonomy in long-term recovery. West Adams, Los Angeles.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ethos-independent-living/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Transitional Living', href: '/ethos-independent-living/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/ethos-independent-living/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList', 'Service', 'Place']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
        service={{
          name: 'Ethos Recovery Transitional Living',
          description,
          serviceType: 'Transitional Sober Living',
          areaServed: 'Los Angeles',
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="The lowest-structure tier"
        h1="Transitional Living for men in West Adams."
        lead="A private, community-based residence for men ready to step into a more autonomous stage of their recovery. Located in West Adams, Los Angeles — an 8-bedroom, 6-bathroom home built around independence, personal responsibility, and long-term sobriety."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Community-focused recovery
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Long-term, community-focused recovery in West Adams.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Welcome to Ethos Recovery Transitional Living, a sober,
              peer-supported environment for men who have built a solid
              foundation in recovery and are looking for a community-based
              living arrangement with peers who share that same commitment.
              This is the lowest-structure tier within the Ethos Recovery
              system — built for individuals who are ready for more autonomy
              while still valuing the accountability of a shared home.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Admission
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Abstinence-based, with the right support in place.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              This residence is abstinence-based. Men with less than six months
              in recovery are welcome to apply, provided they are actively
              participating in a PHP or IOP program, or have recently completed
              a higher level of care appropriate to their needs. Depending on
              individual circumstances, additional case management or recovery
              mentoring may be required.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Is this the right step?
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Is more independence the right next step?
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              A readiness checklist for men in recovery, and the families
              supporting them. It isn&apos;t a test or an assessment — and
              there&apos;s no score. Ethos Recovery is a non-clinical sober
              living community; this checklist isn&apos;t a clinical assessment
              either. Just a plain-language tool to help you think through the
              next move with your team.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Ready for the next tier?"
        heading="See if Transitional Living is the right fit."
        subheading="Talk with our team about admission and what the day-to-day looks like in West Adams."
      />
    </>
  );
}
