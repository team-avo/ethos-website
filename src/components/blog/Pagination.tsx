import Link from 'next/link';

/**
 * Builds page URLs for a listing. Page 1 is the base path; pages 2+ append
 * `page/<n>/`. Matches the WordPress scheme:
 *   /blog/ , /blog/page/2/
 *   /post/category/addiction/ , /post/category/addiction/page/2/
 */
export function hrefForPage(basePath: string, n: number): string {
  return n <= 1 ? basePath : `${basePath}page/${n}/`;
}

export function Pagination({
  basePath,
  current,
  total,
}: {
  basePath: string;
  current: number;
  total: number;
}) {
  if (total <= 1) return null;
  const pages = Array.from({ length: total }, (_, i) => i + 1);

  return (
    <nav
      aria-label="Pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {current > 1 && (
        <Link
          href={hrefForPage(basePath, current - 1)}
          rel="prev"
          className="rounded-full border border-ink px-4 py-2 text-sm font-semibold text-white transition hover:border-highlight hover:text-highlight"
        >
          ← Prev
        </Link>
      )}
      {pages.map((n) =>
        n === current ? (
          <span
            key={n}
            aria-current="page"
            className="rounded-full bg-cta px-4 py-2 text-sm font-semibold text-white"
          >
            {n}
          </span>
        ) : (
          <Link
            key={n}
            href={hrefForPage(basePath, n)}
            className="rounded-full border border-ink px-4 py-2 text-sm font-semibold text-white transition hover:border-highlight hover:text-highlight"
          >
            {n}
          </Link>
        ),
      )}
      {current < total && (
        <Link
          href={hrefForPage(basePath, current + 1)}
          rel="next"
          className="rounded-full border border-ink px-4 py-2 text-sm font-semibold text-white transition hover:border-highlight hover:text-highlight"
        >
          Next →
        </Link>
      )}
    </nav>
  );
}
