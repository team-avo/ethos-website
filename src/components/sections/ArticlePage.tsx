import { notFound } from 'next/navigation';
import { PageHero } from '@/components/sections/PageHero';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';
import { getPage } from '@/lib/pages';

type Crumb = { name: string; href: string };
type SchemaType = 'LocalBusiness' | 'WebSite' | 'BreadcrumbList' | 'Service' | 'Place';

/**
 * Renders a page faithfully from its ported WordPress body (content.rendered),
 * wrapped in the site chrome. Used by the article / guide / legal / partner /
 * support routes so every heading and paragraph from WordPress is preserved.
 */
export function ArticlePage({
  slug,
  crumbs,
  schemaTypes = ['LocalBusiness', 'BreadcrumbList'],
  service,
  showCta = true,
  lead,
  raw = false,
}: {
  slug: string;
  crumbs: Crumb[];
  schemaTypes?: SchemaType[];
  service?: { name: string; description: string };
  showCta?: boolean;
  lead?: string;
  /** Self-contained html-block pages: render their own markup/CSS as-is,
      without the PageHero or prose wrapper. */
  raw?: boolean;
}) {
  const pageData = getPage(slug);
  if (!pageData) notFound();

  const url = `${business.url}/${slug}/`;
  return (
    <>
      <SchemaOrg
        types={schemaTypes}
        page={{ url, title: pageData.title, description: pageData.seoDescription }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
        service={service}
      />
      <Breadcrumbs items={crumbs} />
      {raw ? (
        <div dangerouslySetInnerHTML={{ __html: pageData.html }} />
      ) : (
        <>
          <PageHero h1={pageData.title} lead={lead} />
          <section className="bg-page border-t border-ink">
            <Container className="py-12 md:py-16">
              <div
                className="prose-ethos wp-body"
                dangerouslySetInnerHTML={{ __html: pageData.html }}
              />
            </Container>
          </section>
        </>
      )}
      {showCta && (
        <CtaBanner
          eyebrow="Ready to talk?"
          heading="Community is our method."
          subheading="Reach out to learn how Ethos Recovery can support you or your loved one."
        />
      )}
    </>
  );
}
