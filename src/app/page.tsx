import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-start justify-center gap-8 px-6 py-24">
        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-600">
          In development
        </span>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Ethos is being rebuilt.
        </h1>

        <p className="max-w-2xl text-lg text-zinc-600 md:text-xl">
          A faster, lighter, design-system-first Ethos website is on the way. Replacing the
          existing WordPress build on a modern Next.js stack.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-4">
          <Link
            href="https://github.com/team-avo/ethos-website"
            className="rounded-lg bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            View repo
          </Link>
          <a
            href="mailto:hello@ethos.example"
            className="rounded-lg border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50"
          >
            Get in touch
          </a>
        </div>

        <footer className="pt-16 text-xs text-zinc-400">
          <p>© {new Date().getFullYear()} Ethos. Built on Next.js + Tailwind.</p>
        </footer>
      </section>
    </main>
  );
}
