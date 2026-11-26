import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Mental Health Support';
const description =
  'Ethos is a non-clinical sober-living community. How we support residents&apos; mental wellness through routine, activity and community, alongside outside care.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/mental-health-support/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/mental-health-support/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/mental-health-support/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Daily wellness"
        h1="Mental health support."
        lead="Ethos Recovery is a non-clinical sober-living community for men. We don't diagnose or treat mental-health conditions — we provide the daily structure, community and accountability that support recovery alongside outside clinical care."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Physical health and wellness
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Taking care of the body is part of taking care of the mind.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              One way we support residents&apos; overall well-being is through
              physical health and wellness. Many residents find that
              activities like exercise, yoga, meditation and ice baths help
              them manage stress — simple daily routines that reinforce the
              recovery they&apos;re building.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Adventure-based activity
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Challenge, confidence, and self-awareness.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              The Ethos community offers adventure-based activities that
              encourage personal growth and self-discovery — outdoor
              expeditions, team-building exercises, and other experiential
              outings. These challenge residents to step outside their
              comfort zones and help them build resilience, confidence and
              self-awareness.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Clinical care when needed
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              A supportive community alongside outside providers.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Substance use and mental health often show up together, and
              there is rarely a single cause behind destructive behavior.
              When a resident needs clinical support, Ethos helps connect
              him with outside providers through our referral network — so
              he can get that care while staying part of a supportive, sober
              community.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Ready to talk?"
        heading="Learn how Ethos complements clinical care."
        subheading="Our team can walk you through our community and introduce you to the outside providers our residents work with."
      />
    </>
  );
}
