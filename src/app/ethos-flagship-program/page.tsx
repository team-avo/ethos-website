import type { Metadata } from 'next';
import { ArticlePage } from '@/components/sections/ArticlePage';
import { getPage } from '@/lib/pages';

const slug = 'ethos-flagship-program';
const data = getPage(slug)!;

export const metadata: Metadata = {
  title: { absolute: data.seoTitle },
  description: data.seoDescription,
  alternates: { canonical: `/${slug}/` },
};

export default async function Page() {
  'use cache';
  return (
    <ArticlePage
      slug={slug}
      crumbs={[
        { name: 'Home', href: '/' },
        { name: data.title, href: `/${slug}/` },
      ]}
      schemaTypes={['LocalBusiness', 'BreadcrumbList', 'Service']}
      service={{
        name: 'Ethos Flagship Program',
        description:
          'Structured sober living for men in Los Angeles with the most support — accountability, 12-step integration and daily routine.',
      }}
    />
  );
}
