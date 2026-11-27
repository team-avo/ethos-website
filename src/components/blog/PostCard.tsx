import Image from 'next/image';
import Link from 'next/link';
import type { PostMeta } from '@/lib/posts';
import { formatDate } from '@/lib/posts';

export function PostCard({ post }: { post: PostMeta }) {
  const href = `/post/${post.slug}/`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink bg-card transition hover:border-highlight">
      <Link
        href={href}
        className="relative block aspect-video w-full overflow-hidden bg-primary"
      >
        {post.featured && (
          <Image
            src={post.featured.src}
            alt={post.featured.alt}
            fill
            sizes="(min-width: 1024px) 400px, (min-width: 768px) 45vw, 90vw"
            className="object-cover transition duration-300 group-hover:scale-105"
          />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {post.category && (
          <Link
            href={`/post/category/${post.category.slug}/`}
            className="text-xs font-semibold uppercase tracking-[0.15em] text-highlight hover:underline"
          >
            {post.category.name}
          </Link>
        )}
        <h2 className="text-lg font-semibold leading-snug text-white">
          <Link href={href} className="hover:text-highlight">
            {post.title}
          </Link>
        </h2>
        <p className="text-xs text-subtle">
          By Ethos · {formatDate(post.date)}
        </p>
        <p className="line-clamp-4 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <Link
          href={href}
          className="mt-auto pt-2 text-sm font-semibold text-highlight hover:underline"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
