import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { PostListing } from '@/components/blog/PostListing';
import { business } from '@/data/business';
import { tags, postsByTag, page, pageCount } from '@/lib/posts';

export function generateStaticParams() {
  return tags().map((t) => ({ slug: t.slug }));
}

function term(slug: string) {
  return tags().find((t) => t.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<'/post/tag/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const t = term(slug);
  if (!t) return {};
  return {
    title: `${t.name} Articles`,
    description: `Articles tagged ${t.name} from the Ethos Recovery blog.`,
    alternates: { canonical: `/post/tag/${slug}/` },
  };
}

export default async function Page({ params }: PageProps<'/post/tag/[slug]'>) {
  const { slug } = await params;
  const t = term(slug);
  if (!t) notFound();

  const posts = postsByTag(slug);
  const total = pageCount(posts.length);
  const basePath = `/post/tag/${slug}/`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: t.name, href: basePath },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{
          url: `${business.url}${basePath}`,
          title: `${t.name} Articles`,
          description: `Articles tagged ${t.name}.`,
        }}
        breadcrumbs={crumbs.map((cr) => ({
          name: cr.name,
          url: `${business.url}${cr.href}`,
        }))}
      />
      <Breadcrumbs items={crumbs} />
      <PostListing
        eyebrow="Tag"
        title={`#${t.name}`}
        posts={page(posts, 1)}
        basePath={basePath}
        current={1}
        totalPages={total}
      />
    </>
  );
}
