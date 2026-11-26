import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { partners } from '@/data/partners';

export function Partners() {
  return (
    <section className="bg-page">
      <Container className="py-20 md:py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Partners
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            Community partners.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {partners.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group flex flex-col justify-between rounded-2xl border border-ink bg-card p-8 transition hover:border-highlight"
            >
              <div className="flex h-24 items-center">
                <Image
                  src={p.logoSrc}
                  alt={p.logoAlt}
                  width={320}
                  height={120}
                  className="max-h-20 w-auto"
                />
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-xl font-semibold text-white">{p.name}</h3>
                <p className="text-sm leading-relaxed text-muted">{p.blurb}</p>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-highlight">
                Learn more
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
