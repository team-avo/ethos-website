import { Container } from '@/components/ui/Container';

type Step = { index: string; title: string; body: string };

type Props = {
  eyebrow?: string;
  heading: string;
  steps: readonly Step[];
  narrative: string;
};

export function MethodologyIntro({ eyebrow, heading, steps, narrative }: Props) {
  return (
    <section className="bg-page">
      <Container className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3 space-y-8">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                {eyebrow}
              </p>
            )}
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl">
              {heading}
            </h2>
            <ol className="space-y-6">
              {steps.map((s) => (
                <li key={s.index} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-highlight">
                    {s.index}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-ink bg-card p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                About the community
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/85">
                {narrative}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
