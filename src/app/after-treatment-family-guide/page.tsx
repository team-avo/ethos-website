import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'After Treatment: A Family Planning Guide for the First 90 Days';
const description =
  'What to plan before discharge, and what to expect in the months that follow. A planning guide for families of men leaving treatment.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/after-treatment-family-guide/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'After Treatment', href: '/after-treatment-family-guide/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/after-treatment-family-guide/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Planning guide"
        h1="After treatment: the first 90 days."
        lead="What to plan before discharge, and what to expect in the months that follow. A planning guide for families of men leaving treatment."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Why the first 90 days matter
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Finishing treatment is a milestone — not the finish line.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Finishing treatment is a real milestone. It&apos;s also the
              point where the structure of a program ends and ordinary life
              starts again — work or school, money, old friends, free time.
              Many families find these first months harder than they
              expected, not because treatment failed, but because staying
              sober in daily life is a different skill from getting sober in
              a program.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              The two weeks that matter most
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Start planning before the discharge date — not after.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Have the hard conversations with the treatment team while
              he&apos;s still in care. Ask what the aftercare plan is, what
              kind of structure he&apos;ll need, and what signals mean he
              needs more support. Decide where he&apos;ll live before he
              leaves, not on the day of discharge.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Month by month
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Routine, then responsibility, then independence.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              The first month is about routine — sleep, meals, meetings, a
              structured day. The second is about adding responsibility —
              work, school or volunteering. The third is about checking
              whether the structure can start to loosen without the whole
              system wobbling. Each month earns the next.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              A place to practice
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Sober living, while recovery is still new.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Sober living gives someone a substance-free place to practice
              work, routines and accountability while recovery is still new.
              It isn&apos;t right for everyone, and it isn&apos;t a
              substitute for clinical care when that&apos;s needed — but for
              many families, it&apos;s the bridge between treatment and
              fully independent life.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Unsure how much structure he still needs?"
        heading="Let's talk through the options."
        subheading="If your son is leaving treatment and you're weighing what comes next, our team can walk you through the options."
      />
    </>
  );
}
