import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { PostListing } from '@/components/blog/PostListing';
import { business } from '@/data/business';
import { categories, postsByCategory, page, pageCount } from '@/lib/posts';

export function generateStaticParams() {
  return categories().map((c) => ({ slug: c.slug }));
}

function term(slug: string) {
  return categories().find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<'/post/category/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const c = term(slug);
  if (!c) return {};
  return {
    title: `${c.name} Articles`,
    description: `Articles filed under ${c.name} from the Ethos Recovery blog.`,
    alternates: { canonical: `/post/category/${slug}/` },
  };
}

export default async function Page({
  params,
}: PageProps<'/post/category/[slug]'>) {
  const { slug } = await params;
  const c = term(slug);
  if (!c) notFound();

  const posts = postsByCategory(slug);
  const total = pageCount(posts.length);
  const basePath = `/post/category/${slug}/`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: c.name, href: basePath },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{
          url: `${business.url}${basePath}`,
          title: `${c.name} Articles`,
          description: `Articles filed under ${c.name}.`,
        }}
        breadcrumbs={crumbs.map((cr) => ({
          name: cr.name,
          url: `${business.url}${cr.href}`,
        }))}
      />
      <Breadcrumbs items={crumbs} />
      <PostListing
        eyebrow="Category"
        title={c.name}
        posts={page(posts, 1)}
        basePath={basePath}
        current={1}
        totalPages={total}
        activeCategory={slug}
      />
    </>
  );
}
