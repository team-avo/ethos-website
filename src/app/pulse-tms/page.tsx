import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Pulse TMS';
const description =
  'Pulse TMS is an independent provider of transcranial magnetic stimulation and medication management, and a community partner of Ethos Recovery.';

export const metadata: Metadata = {
  title: 'Community Partner: Pulse TMS',
  description,
  alternates: { canonical: '/pulse-tms/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/pulse-tms/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/pulse-tms/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Community partner"
        h1="Pulse TMS."
        lead="Pulse TMS is an independent provider of transcranial magnetic stimulation (TMS) and medication management, and a community partner of Ethos Recovery."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              What Pulse TMS provides
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Clinical psychiatric care, outside the sober-living frame.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Ethos Recovery is a non-clinical sober-living community and
              doesn&apos;t provide psychiatric care. Residents and families
              who want to explore TMS or medication management can contact
              Pulse TMS directly. Questions about appointments, eligibility
              and insurance coverage should go directly to Pulse TMS.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              How the partnership works
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Independent providers, shared commitment.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Some residents work with Pulse TMS clinicians during their time
              at Ethos; others come to Pulse TMS entirely on their own path.
              The two organizations are independent — Ethos provides the
              community and structure, Pulse TMS provides the clinical care.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Questions?"
        heading="Talk with the Ethos team."
        subheading="We can share how residents pair our community with outside clinical providers like Pulse TMS."
      />
    </>
  );
}
