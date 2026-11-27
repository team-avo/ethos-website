import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { PostListing } from '@/components/blog/PostListing';
import { business } from '@/data/business';
import { allPosts, page, pageCount } from '@/lib/posts';

const title = 'Ethos Journal';
const description =
  'Articles on addiction, recovery, mental health and sober living from the Ethos Recovery community.';

export function generateStaticParams() {
  const total = pageCount(allPosts().length);
  // Page 1 lives at /blog/; generate 2..N here.
  const params = [];
  for (let n = 2; n <= total; n++) params.push({ n: String(n) });
  // generateStaticParams must return at least one param under cacheComponents.
  return params.length ? params : [{ n: '2' }];
}

export async function generateMetadata({
  params,
}: PageProps<'/blog/page/[n]'>): Promise<Metadata> {
  const { n } = await params;
  return {
    title: `${title} – Page ${n}`,
    description,
    alternates: { canonical: `/blog/page/${n}/` },
  };
}

export default async function Page({ params }: PageProps<'/blog/page/[n]'>) {
  const { n } = await params;
  const current = Number(n);
  const posts = allPosts();
  const total = pageCount(posts.length);
  if (!Number.isInteger(current) || current < 2 || current > total) notFound();

  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: `Page ${current}`, href: `/blog/page/${current}/` },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList']}
        page={{ url: `${business.url}/blog/page/${current}/`, title, description }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
      />
      <Breadcrumbs items={crumbs} />
      <PostListing
        eyebrow="Blog"
        title={title}
        posts={page(posts, current)}
        basePath="/blog/"
        current={current}
        totalPages={total}
      />
    </>
  );
}
