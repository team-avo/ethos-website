import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';

const title = 'Blog';
const description =
  'Articles, stories, and resources from the Ethos Recovery community.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: title, href: '/blog/' },
];

export default async function BlogPage() {
  'use cache';
  const canonicalUrl = `${business.url}/blog/`;
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: canonicalUrl, title, description }}
        breadcrumbs={crumbs.map((c) => ({ name: c.name, url: `${business.url}${c.href}` }))}
      />
      <Breadcrumbs items={crumbs} />
      <PageHero
        eyebrow="Writing from the community"
        h1="The Ethos Blog."
        lead="182 articles on sober living, recovery, mental health, and family. We are migrating the full archive from the current site — in the meantime, read the latest at ethosrecovery.com/blog."
      />
      <section className="bg-page border-t border-ink">
        <Container className="py-20 md:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <article
                key={n}
                className="rounded-2xl border border-ink bg-card p-8"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                  Coming soon
                </p>
                <p className="mt-4 text-base text-muted">
                  Blog article teaser.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>
      <CtaBanner
        eyebrow="Have a story?"
        heading="Have a story to share?"
        subheading="Our team is listening."
      />
    </>
  );
}
