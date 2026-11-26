import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { Callout } from '@/components/sections/Callout';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'The Ethos Difference';
const description =
  'Ethos Recovery is a structured recovery community for men in Los Angeles. A social model rooted in peer support, lifestyle change, and character development — not just abstaining.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/the-ethos-difference/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/the-ethos-difference/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/the-ethos-difference/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Our approach"
        h1="The Ethos difference."
        lead="Ethos Recovery is a structured recovery community for men located in Los Angeles, with a minimum commitment of three months. Members who graduate from the program often stay a year or longer — not because they have to, but because the community keeps pulling them forward."
      />

      <Callout />

      <section className="bg-primary border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              Our method
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              Community is our method.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Ethos Structured Sober Living is a thriving community of men in
              recovery, situated in the heart of West Los Angeles. Our purpose
              is to facilitate long-term sobriety by fostering accountability,
              camaraderie, and character development — by providing a
              supportive environment where residents work together to reinforce
              positive lifestyle change.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="max-w-3xl space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
              How we live
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              We are our brother&apos;s keeper.
            </h2>
            <p className="text-base leading-relaxed text-muted md:text-lg">
              Ethos house members attend nightly dinners together, as a family,
              and a weekly Unity house meeting to discuss any issues that come
              up. All house members actively work a 12-step program with their
              sponsors, participate in outside meetings, and take part in a
              weekly house outing of their choice. The result is a tight-knit
              community where accountability is cultural, not imposed.
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Ready to begin?"
        heading="See what structured community recovery looks like."
        subheading="Talk with our team about the Flagship Program and the three tiers that follow."
      />
    </>
  );
}
