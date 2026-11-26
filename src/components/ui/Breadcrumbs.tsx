import Link from 'next/link';
import { Container } from './Container';

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-primary">
      <Container className="py-4">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-muted">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-white">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-highlight">
                    {c.name}
                  </Link>
                )}
                {!isLast && <span className="text-subtle">/</span>}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
