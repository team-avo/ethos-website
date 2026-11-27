import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { PostListing } from '@/components/blog/PostListing';
import { business } from '@/data/business';
import { allPosts, page, pageCount } from '@/lib/posts';

const title = 'Ethos Journal';
const description =
  'Articles on addiction, recovery, mental health and sober living from the Ethos Recovery community.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/blog/' },
};

const crumbs = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog/' },
];

export default async function Page() {
  'use cache';
  const posts = allPosts();
  const total = pageCount(posts.length);
  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: `${business.url}/blog/`, title, description }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
      />
      <Breadcrumbs items={crumbs} />
      <PostListing
        eyebrow="Blog"
        title={title}
        lead={description}
        posts={page(posts, 1)}
        basePath="/blog/"
        current={1}
        totalPages={total}
      />
    </>
  );
}
