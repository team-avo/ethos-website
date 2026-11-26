import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Substance Abuse Support';
const description =
  'How Ethos Recovery supports men recovering from substance use: a non-clinical, structured sober-living community in Los Angeles built on peer accountability.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/substance-abuse-support/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/substance-abuse-support/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/substance-abuse-support/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="How we help"
        h1="Substance abuse support."
        lead="Ethos Recovery is a non-clinical sober-living community for men, not a treatment center. Our community-based approach gives residents the space and support to look at the underlying issues driving addiction and build the tools to handle them."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              The underlying issues
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Addiction rarely stands alone.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Addiction often goes along with trauma, unresolved emotional
              pain, or a lack of purpose and direction. We encourage
              participation in 12-step programs, exposure to challenging
              situations, and a focus on community support and engagement —
              because a strong support network is one of the strongest
              signals of sustainable recovery.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Community as the method
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Peer accountability, every day.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Residents live together, eat together and hold each other
              accountable. Daily house meetings, shared chores and group
              activities build the habits of mutual support — the same
              habits that carry recovery forward after someone leaves the
              program.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Outside clinical care
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Referrals when more is needed.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Ethos doesn&apos;t replace clinical treatment. When a resident
              needs medical or psychiatric care, we connect him with trusted
              outside providers through our referral network — so he can
              stay part of the community while getting the care he needs.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Ready to begin?"
        heading="Explore the Ethos community."
        subheading="Talk with our team about whether structured sober living is the right next step for recovery."
      />
    </>
  );
}
