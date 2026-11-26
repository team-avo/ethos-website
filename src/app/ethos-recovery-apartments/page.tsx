import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Ethos Recovery Apartments';
const description =
  'Mid-level structured sober living apartments in Culver City, minutes from Venice Beach. Designed for men ready to embrace more independence while still benefiting from essential recovery services.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ethos-recovery-apartments/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/ethos-recovery-apartments/' },
];

const amenities = [
  'Weekly case management check-ins',
  'Random drug & alcohol testing',
  'Peer accountability community',
  'Single or double-occupancy rooms',
  'Furnished units, utilities included',
  'Close to meetings, work, and the beach',
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/ethos-recovery-apartments/`;
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
          name: 'Ethos Recovery Apartments',
          description,
          serviceType: 'Sober Living Apartments',
          areaServed: 'Los Angeles',
        }}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Mid-level structure"
        h1="Supportive living in the heart of Los Angeles."
        lead="Nestled in Culver City — four miles from Venice Beach — the Ethos Recovery Apartments offer a supportive living experience in the heart of LA. A prime location at the center of Southern California's cultural life, paired with the structure of a true recovery community."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              The tier
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Mid-level structure for growing independence.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              As part of the Ethos Recovery system, the Apartments represent our
              mid-level structured residence — designed for individuals ready to
              embrace more independence while still benefiting from essential
              recovery services. With rooms available in single or double
              occupancy, residents enjoy greater autonomy as they transition
              toward a fully independent life in recovery.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-5xl space-y-10">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                What&apos;s included
              </p>
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
                Services and amenities for your recovery journey.
              </h2>
              <p className="text-base leading-relaxed text-muted md:text-lg">
                Every resident receives access to the services and amenities
                necessary to sustain sobriety and promote personal growth. Food
                and personal toiletries are supplied by residents.
              </p>
            </div>
            <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {amenities.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-ink bg-card p-6 text-sm font-medium text-white"
                >
                  <span className="mr-3 text-highlight">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Culver City
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Live in the heart of Los Angeles.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              The Ethos Recovery Apartments place you where the excitement of
              the city meets the serenity of the coastline. You&apos;re minutes
              from Venice Beach, and immersed in a cultural hub of restaurants,
              art galleries, and outdoor activities that make recovery in Los
              Angeles truly uplifting.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Ready for more independence?"
        heading="Schedule a tour of the Apartments."
        subheading="Talk with our team to see if the mid-level tier is the right next step for you or your loved one."
      />
    </>
  );
}
