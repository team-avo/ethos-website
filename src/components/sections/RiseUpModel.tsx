import { Container } from '@/components/ui/Container';
import { principles } from '@/data/principles';

export function RiseUpModel() {
  return (
    <section className="bg-page">
      <Container className="py-20 md:py-28">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            The model
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl">
            The <span className="text-highlight">R.I.S.E. UP</span> model of recovery.
          </h2>
          <p className="text-base leading-relaxed text-muted md:text-lg">
            A transformative recovery experience grounded in our unique R.I.S.E.
            UP model — designed to support individuals facing challenges related
            to mental health and substance abuse. Resilience, inspiration, sobriety,
            exercise, and upward progress — the key principles for sustainable recovery.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <article
              key={p.letter}
              className="flex flex-col gap-4 rounded-2xl border border-ink bg-card p-8 transition hover:border-highlight"
            >
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-2xl font-bold text-highlight">
                {p.letter}
              </span>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{p.body}</p>
            </article>
          ))}
        </div>

        {/* Closers */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              The Ethos Recovery Workbook
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              A practical companion tool used alongside the R.I.S.E. UP model.
              Structured exercises that help residents put the principles into
              daily practice.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Why choose Ethos Recovery?
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              Community-first philosophy, licensed recovery residences in Los
              Angeles, and non-clinical interventions rooted in character and
              accountability — not just abstinence.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-lg font-semibold text-white">
              Embrace change and rise up
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              Contact us today to learn more about our Flagship Program and
              schedule a tour of our Culver City community.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
