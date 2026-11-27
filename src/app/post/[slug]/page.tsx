import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { SchemaOrg } from '@/components/seo/SchemaOrg';
import { business } from '@/data/business';
import { allSlugs, getPost, formatDate } from '@/lib/posts';

export function generateStaticParams() {
  return allSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<'/post/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription,
    alternates: { canonical: `/post/${slug}/` },
    openGraph: {
      type: 'article',
      title: post.seoTitle,
      description: post.seoDescription,
      url: `${business.url}/post/${slug}/`,
      ...(post.featured && { images: [post.featured.src] }),
    },
  };
}

export default async function Page({ params }: PageProps<'/post/[slug]'>) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${business.url}/post/${slug}/`;
  const crumbs = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog/' },
    { name: post.title, href: `/post/${slug}/` },
  ];

  return (
    <>
      <SchemaOrg
        types={['LocalBusiness', 'BreadcrumbList', 'Article']}
        page={{ url, title: post.title, description: post.seoDescription }}
        breadcrumbs={crumbs.map((c) => ({
          name: c.name,
          url: `${business.url}${c.href}`,
        }))}
        article={{
          headline: post.title,
          description: post.seoDescription,
          author: { type: 'Organization', name: business.name },
          datePublished: post.date,
          dateModified: post.modified,
          ...(post.featured && { image: `${business.url}${post.featured.src}` }),
          ...(post.category && { about: post.category.name }),
        }}
      />
      <Breadcrumbs items={crumbs} />

      {/* Featured image hero (live heights: 240px mobile / 480px larger) */}
      {post.featured && (
        <div
          className="relative w-full bg-primary"
          style={{ height: 'var(--ethos-height-post-image)' }}
        >
          <Image
            src={post.featured.src}
            alt={post.featured.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      )}

      <article className="bg-page border-t border-ink">
        <Container className="py-12 md:py-16">
          <div className="mx-auto max-w-[var(--ethos-max-width-content)]">
            {post.category && (
              <Link
                href={`/post/category/${post.category.slug}/`}
                className="text-xs font-semibold uppercase tracking-[0.15em] text-highlight hover:underline"
              >
                {post.category.name}
              </Link>
            )}
            <h1 className="mt-3 text-3xl font-bold leading-tight text-white md:text-4xl">
              {post.title}
            </h1>
            <p className="mt-3 text-sm text-subtle">
              By Ethos · {formatDate(post.date)}
            </p>

            <div
              className="prose-ethos mt-8"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />

            {post.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-ink pt-6">
                {post.tags.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/post/tag/${t.slug}/`}
                    className="rounded-full border border-ink px-3 py-1 text-xs font-semibold text-muted transition hover:border-highlight hover:text-highlight"
                  >
                    #{t.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </article>

      <CtaBanner
        eyebrow="Ready to talk?"
        heading="Community is our method."
        subheading="Reach out to learn how Ethos Recovery can support you or your loved one."
      />
    </>
  );
}
