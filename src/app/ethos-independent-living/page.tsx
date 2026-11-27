import type { Metadata } from 'next';
import { ArticlePage } from '@/components/sections/ArticlePage';
import { getPage } from '@/lib/pages';

const slug = 'ethos-independent-living';
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
      schemaTypes={['LocalBusiness', 'BreadcrumbList', 'Service', 'Place']}
      service={{
        name: 'Ethos Recovery Transitional Living',
        description:
          'The most autonomous level of Ethos sober living, in West Adams, with private rooms and continued peer support.',
      }}
    />
  );
}
