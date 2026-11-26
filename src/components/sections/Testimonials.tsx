'use client';

import { useCallback, useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { StarRow } from '@/components/ui/StarRow';
import { testimonials } from '@/data/testimonials';

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = useCallback(
    () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length),
    [],
  );
  const next = useCallback(
    () => setActive((i) => (i + 1) % testimonials.length),
    [],
  );

  // Autoplay
  useEffect(() => {
    const id = window.setInterval(next, 8000);
    return () => window.clearInterval(id);
  }, [next]);

  const current = testimonials[active];

  return (
    <section
      className="relative isolate overflow-hidden bg-page"
      aria-label="Testimonials"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/testimonials-bg.png)' }}
      />
      <div className="absolute inset-0 -z-10 bg-primary/80" aria-hidden="true" />

      <Container className="py-20 md:py-28">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
            Stories from the community
          </p>
          <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
            What are people saying about Ethos.
          </h2>
        </div>

        <div className="relative">
          <article
            key={active}
            className="mx-auto max-w-3xl rounded-2xl border border-ink bg-card p-8 shadow-xl md:p-12"
          >
            <div className="mb-6 flex items-center justify-between">
              <StarRow count={current.stars} />
              <span className="text-xs font-semibold uppercase tracking-wider text-subtle">
                {active + 1} / {testimonials.length}
              </span>
            </div>
            <blockquote className="text-base leading-relaxed text-white/90 md:text-lg">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <footer className="mt-6 text-sm font-semibold text-highlight">
              — {current.author}
            </footer>
          </article>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-ink bg-card p-3 text-white transition hover:border-highlight hover:text-highlight"
              aria-label="Previous testimonial"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M15 18l-6-6 6-6 1.4 1.4L11.8 12l4.6 4.6z" />
              </svg>
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? 'w-8 bg-highlight' : 'w-2 bg-ink hover:bg-stone'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={next}
              className="rounded-full border border-ink bg-card p-3 text-white transition hover:border-highlight hover:text-highlight"
              aria-label="Next testimonial"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M9 6l6 6-6 6-1.4-1.4L12.2 12 7.6 7.4z" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
