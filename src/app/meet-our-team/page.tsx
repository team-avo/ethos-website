import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';
import { team } from '@/data/team';

const title = 'Meet Our Team';
const description =
  'The people behind Ethos Recovery — founders, case managers, and recovery mentors who make community the method.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/meet-our-team/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/meet-our-team/' },
];

export default async function Page() {
  'use cache';
  const canonicalUrl = `${business.url}/meet-our-team/`;
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
        eyebrow="Our team"
        h1="Meet the people behind Ethos."
        lead="A small team of mentors, case managers, and clinicians who make community the method. Several are themselves alumni of the program — they've walked the road residents are on."
      />

      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.slug}
                className="flex flex-col gap-4 rounded-2xl border border-ink bg-card p-6 transition hover:border-highlight"
              >
                <Link
                  href={`/team/${m.slug}/`}
                  className="relative block aspect-square w-full overflow-hidden rounded-xl border border-ink bg-primary"
                >
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 90vw"
                    className="object-cover object-top"
                  />
                </Link>
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    <Link href={`/team/${m.slug}/`} className="hover:text-highlight">
                      {m.name}
                    </Link>
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-muted">{m.excerpt}</p>
                <Link
                  href={`/team/${m.slug}/`}
                  className="mt-auto text-sm font-semibold text-highlight hover:underline"
                >
                  Read more: {m.name}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        eyebrow="Want to talk?"
        heading="Get in touch with our team."
        subheading="We'll walk you through our programs and help find the right fit for you or your loved one."
      />
    </>
  );
}
