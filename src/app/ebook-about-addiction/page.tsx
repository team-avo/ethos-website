import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'A Guide to Sober Living';
const description =
  'What sober living is, how it works, and how to choose the right home. A free guide for families from Ethos Recovery in Los Angeles.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/ebook-about-addiction/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'A Guide to Sober Living', href: '/ebook-about-addiction/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/ebook-about-addiction/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Free guide"
        h1="A guide to sober living."
        lead="What sober living is, how it works, and how to choose the right home. A free guide for families — written in plain language, grounded in what we've learned running a sober-living community in Los Angeles."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                Inside the guide
              </p>
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                What the guide covers.
              </h2>
              <ul className="space-y-3 text-base text-muted md:text-lg">
                <li>What sober living is — and what it isn&apos;t</li>
                <li>Who it tends to fit, and who it doesn&apos;t</li>
                <li>How a well-run home works day to day</li>
                <li>Sober living vs. rehab, halfway houses, transitional living</li>
                <li>How long people usually stay</li>
                <li>How to choose a home — the questions to ask</li>
              </ul>
            </div>
            <div className="lg:col-span-3">
              <iframe
                title="Request the sober-living guide"
                src="https://api.leadconnectorhq.com/widget/form/dkmP3hSqhgz3T7IWTaBQ"
                className="h-[700px] w-full rounded-2xl border border-ink bg-card"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Why we wrote it
            </p>
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Clear answers for families making a hard decision.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Families landing on a sober-living decision are usually tired,
              hopeful and skeptical all at once. The guide is designed for
              them — short, honest, and oriented around the real questions
              they have. No jargon, no sales pitch.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Questions?"
        heading="Rather talk it through?"
        subheading="Our team is happy to walk you through the options over the phone."
      />
    </>
  );
}
