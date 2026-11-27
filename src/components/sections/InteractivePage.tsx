import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { RawHtml } from '@/components/sections/RawHtml';
import { business } from '@/data/business';
import { getPage } from '@/lib/pages';

/**
 * Self-contained interactive WordPress pages (quizzes / scorecards / the
 * professional overview). Renders the page's own markup + styles and executes
 * its inline scripts client-side via RawHtml, wrapped in the site chrome.
 */
export function InteractivePage({ slug }: { slug: string }) {
  const data = getPage(slug);
  if (!data) notFound();

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: data.title, href: `/${slug}/` },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: `${business.url}/${slug}/`, title: data.title, description: data.seoDescription }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
      />
      <Breadcrumbs items={crumbs} />
      <RawHtml html={data.html} />
    </>
  );
}
