import Link from 'next/link';

export default async function HomePage() {
  'use cache';
  return (
    <main className="min-h-screen bg-page text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-8 px-6 py-24">
        <span className="rounded-full border border-ink bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-highlight">
          In development
        </span>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Ethos is being <span className="text-highlight">rebuilt</span>.
        </h1>

        <p className="max-w-2xl text-lg text-muted md:text-xl">
          A faster, lighter, design-system-first Ethos website is on the way —
          same brand, modern stack. Replacing the existing WordPress build on
          Next.js 16 with the design tokens lifted straight from the live site.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <Link
            href="https://github.com/team-avo/ethos-website"
            className="rounded-lg bg-cta px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
          >
            View repo
          </Link>
          <a
            href="https://www.ethosrecovery.com"
            className="rounded-lg border border-ink bg-card px-5 py-3 text-sm font-medium text-white transition hover:border-highlight"
          >
            Current site
          </a>
        </div>

        <footer className="pt-16 text-xs text-subtle">
          <p>© {new Date().getFullYear()} Ethos Recovery. Rebuilt on Next.js + Tailwind.</p>
        </footer>
      </section>
    </main>
  );
}
