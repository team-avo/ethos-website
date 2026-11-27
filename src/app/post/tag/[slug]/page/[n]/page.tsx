import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { PostListing } from '@/components/blog/PostListing';
import { business } from '@/data/business';
import { tags, postsByTag, page, pageCount } from '@/lib/posts';

export function generateStaticParams() {
  const params: { slug: string; n: string }[] = [];
  for (const t of tags()) {
    const total = pageCount(postsByTag(t.slug).length);
    for (let n = 2; n <= total; n++) params.push({ slug: t.slug, n: String(n) });
  }
  return params.length ? params : [{ slug: tags()[0].slug, n: '2' }];
}

function term(slug: string) {
  return tags().find((t) => t.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<'/post/tag/[slug]/page/[n]'>): Promise<Metadata> {
  const { slug, n } = await params;
  const t = term(slug);
  if (!t) return {};
  return {
    title: `${t.name} Articles – Page ${n}`,
    description: `Articles tagged ${t.name} from the Ethos Recovery blog.`,
    alternates: { canonical: `/post/tag/${slug}/page/${n}/` },
  };
}

export default async function Page({
  params,
}: PageProps<'/post/tag/[slug]/page/[n]'>) {
  const { slug, n } = await params;
  const t = term(slug);
  if (!t) notFound();
  const current = Number(n);
  const posts = postsByTag(slug);
  const total = pageCount(posts.length);
  if (!Number.isInteger(current) || current < 2 || current > total) notFound();

  const basePath = `/post/tag/${slug}/`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: t.name, href: basePath },
    { name: `Page ${current}`, href: `${basePath}page/${current}/` },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{
          url: `${business.url}${basePath}page/${current}/`,
          title: `${t.name} Articles – Page ${current}`,
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
        posts={page(posts, current)}
        basePath={basePath}
        current={current}
        totalPages={total}
      />
    </>
  );
}
