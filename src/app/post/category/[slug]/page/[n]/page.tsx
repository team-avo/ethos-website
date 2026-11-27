import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { PostListing } from '@/components/blog/PostListing';
import { business } from '@/data/business';
import { categories, postsByCategory, page, pageCount } from '@/lib/posts';

export function generateStaticParams() {
  const params: { slug: string; n: string }[] = [];
  for (const c of categories()) {
    const total = pageCount(postsByCategory(c.slug).length);
    for (let n = 2; n <= total; n++) params.push({ slug: c.slug, n: String(n) });
  }
  // cacheComponents requires at least one param.
  return params.length ? params : [{ slug: categories()[0].slug, n: '2' }];
}

function term(slug: string) {
  return categories().find((c) => c.slug === slug);
}

export async function generateMetadata({
  params,
}: PageProps<'/post/category/[slug]/page/[n]'>): Promise<Metadata> {
  const { slug, n } = await params;
  const c = term(slug);
  if (!c) return {};
  return {
    title: `${c.name} Articles – Page ${n}`,
    description: `Articles filed under ${c.name} from the Ethos Recovery blog.`,
    alternates: { canonical: `/post/category/${slug}/page/${n}/` },
  };
}

export default async function Page({
  params,
}: PageProps<'/post/category/[slug]/page/[n]'>) {
  const { slug, n } = await params;
  const c = term(slug);
  if (!c) notFound();
  const current = Number(n);
  const posts = postsByCategory(slug);
  const total = pageCount(posts.length);
  if (!Number.isInteger(current) || current < 2 || current > total) notFound();

  const basePath = `/post/category/${slug}/`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: c.name, href: basePath },
    { name: `Page ${current}`, href: `${basePath}page/${current}/` },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{
          url: `${business.url}${basePath}page/${current}/`,
          title: `${c.name} Articles – Page ${current}`,
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
        posts={page(posts, current)}
        basePath={basePath}
        current={current}
        totalPages={total}
        activeCategory={slug}
      />
    </>
  );
}
