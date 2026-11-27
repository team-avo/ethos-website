import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { PageHero } from '@/components/sections/PageHero';
import { PostCard } from '@/components/blog/PostCard';
import { Pagination } from '@/components/blog/Pagination';
import type { PostMeta } from '@/lib/posts';
import { categories } from '@/lib/posts';

export function PostListing({
  eyebrow,
  title,
  lead,
  posts,
  basePath,
  current,
  totalPages,
  activeCategory,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  posts: PostMeta[];
  basePath: string;
  current: number;
  totalPages: number;
  activeCategory?: string;
}) {
  const cats = categories();
  return (
    <>
      <PageHero eyebrow={eyebrow} h1={title} lead={lead} />

      <section className="bg-page border-t border-ink">
        <Container className="py-14 md:py-20">
          {/* Category filter row (links to category archives) */}
          <nav
            aria-label="Categories"
            className="mb-10 flex flex-wrap gap-2"
          >
            <Link
              href="/blog/"
              className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                !activeCategory
                  ? 'border-highlight bg-highlight/10 text-highlight'
                  : 'border-ink text-muted hover:border-highlight hover:text-highlight'
              }`}
            >
              All
            </Link>
            {cats.map((c) => (
              <Link
                key={c.slug}
                href={`/post/category/${c.slug}/`}
                className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
                  activeCategory === c.slug
                    ? 'border-highlight bg-highlight/10 text-highlight'
                    : 'border-ink text-muted hover:border-highlight hover:text-highlight'
                }`}
              >
                {c.name}
              </Link>
            ))}
          </nav>

          {posts.length === 0 ? (
            <p className="text-muted">No posts found.</p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          )}

          <Pagination basePath={basePath} current={current} total={totalPages} />
        </Container>
      </section>
    </>
  );
}
