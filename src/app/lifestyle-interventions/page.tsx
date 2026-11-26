import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Lifestyle Interventions';
const description =
  'Lifestyle Interventions is an independent community partner of Ethos Recovery, offering case management, mentoring and integrative psychiatric support for long-term recovery.';

export const metadata: Metadata = {
  title: 'Community Partner: Lifestyle Interventions',
  description,
  alternates: { canonical: '/lifestyle-interventions/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/lifestyle-interventions/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/lifestyle-interventions/`;
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
        h1="Lifestyle Interventions."
        lead="An independent organization and community partner of Ethos Recovery — offering case management, mentoring and integrative psychiatric support for sustainable, long-term recovery."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Tailored Wellness Program
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Bridging the gap between short-term care and sustainable success.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Lifestyle Interventions sets a new standard in recovery with its
              Tailored Wellness Program (TWP) — fostering lasting therapist
              relationships, ensuring seamless continuity, and matching clients
              with best-fit professionals so individuals can build resilience
              and achieve long-term transformation through personalized,
              ongoing support.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Why the acute-care model falls short
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Short-term treatment, long-term gap.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              The acute-care model — typified by IOP and PHP programs — is
              built around short-term interventions. Those programs can be
              effective for immediate crises, but they often fail to provide
              the support individuals need once they leave the structured
              environment. Clients are stabilized but not fully equipped with
              the tools to manage recovery long-term, leading to high rates of
              relapse and recidivism.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Integrative Psychiatric Support
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Specialized psychiatric care, matched to each client.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              The Integrative Psychiatric Support (IPS) package provides
              specialized psychiatric care that integrates with the Tailored
              Wellness Program — designed for individuals with co-occurring
              disorders, complex mental-health needs, or those requiring
              medication management as part of their long-term recovery.
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
              Two independent organizations, one supportive path.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Ethos Recovery provides the sober-living community. The clinical
              coordination, mentoring and psychiatric support described above
              are provided by Lifestyle Interventions and its network of
              clinicians. Some families use Lifestyle Interventions alongside
              a resident&apos;s time at Ethos; its services are also available
              on their own. For questions about Lifestyle Interventions&apos;
              programs, contact Lifestyle Interventions directly.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Ready to begin?"
        heading="Explore the right fit for your recovery."
        subheading="Talk with the Ethos team about how our community and Lifestyle Interventions can work together."
      />
    </>
  );
}
