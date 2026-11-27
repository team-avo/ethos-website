import type { Metadata } from 'next';
import { ArticlePage } from '@/components/sections/ArticlePage';
import { getPage } from '@/lib/pages';

const slug = 'ethos-recovery-apartments';
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
        name: 'Ethos Recovery Apartments',
        description:
          'Mid-level structured sober living in Culver City with drug testing, service coordination and peer support.',
      }}
    />
  );
}
