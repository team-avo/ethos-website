import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { programs } from '@/data/programs';

export function ProgramsGrid() {
  return (
    <section className="bg-page">
      <Container className="py-20 md:py-28">
        <div className="mb-14 max-w-4xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Three levels of support
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Structured support, balanced independence, and community-focused recovery across Los Angeles.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col justify-between rounded-2xl border border-ink bg-card p-8 transition hover:border-highlight"
            >
              <div className="space-y-4">
                <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-primary px-3 text-sm font-semibold text-highlight">
                  0{p.index}
                </span>
                <h3 className="text-xl font-semibold text-white md:text-2xl">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{p.description}</p>
              </div>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
                Explore program
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current transition group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M5 12h12l-5-5 1.4-1.4L21 12l-7.6 7.4L12 18l5-6H5z" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
