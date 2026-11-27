import type { Metadata } from 'next';
import { ArticlePage } from '@/components/sections/ArticlePage';
import { getPage } from '@/lib/pages';

const slug = 'privacy-policy';
const data = getPage(slug)!;

export const metadata: Metadata = {
  title: { absolute: data.seoTitle },
  description: data.seoDescription || undefined,
  alternates: { canonical: `/${slug}/` },
};

export default async function Page() {
  'use cache';
  return (
    <ArticlePage
      slug={slug}
      showCta={false}
      crumbs={[
        { name: 'Home', href: '/' },
        { name: data.title, href: `/${slug}/` },
      ]}
    />
  );
}
