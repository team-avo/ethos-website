import { Container } from '@/components/ui/Container';

export type StatTile = {
  value: string;
  label: string;
  note?: string;
};

type Props = {
  eyebrow?: string;
  heading?: string;
  tiles: readonly StatTile[];
  caption?: string;
  backdrop?: 'primary' | 'page';
};

export function StatTileRow({
  eyebrow,
  heading,
  tiles,
  caption,
  backdrop = 'primary',
}: Props) {
  const bg = backdrop === 'primary' ? 'bg-primary' : 'bg-page';
  const cols =
    tiles.length === 3
      ? 'md:grid-cols-3'
      : tiles.length === 2
        ? 'md:grid-cols-2'
        : 'md:grid-cols-2 lg:grid-cols-4';
  return (
    <section className={bg}>
      <Container className="py-16 md:py-20">
        {(eyebrow || heading) && (
          <div className="mb-10 max-w-3xl space-y-3">
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2 className="text-2xl font-bold text-white md:text-4xl">
                {heading}
              </h2>
            )}
          </div>
        )}
        <div className={`grid gap-4 ${cols}`}>
          {tiles.map((t) => (
            <div
              key={t.label}
              className="flex flex-col gap-3 rounded-2xl border border-ink bg-card p-8"
            >
              <span className="text-5xl font-bold tracking-tight text-highlight md:text-6xl">
                {t.value}
              </span>
              <span className="text-sm font-medium text-white">{t.label}</span>
              {t.note && (
                <span className="text-xs text-subtle">{t.note}</span>
              )}
            </div>
          ))}
        </div>
        {caption && (
          <p className="mt-10 max-w-4xl text-base leading-relaxed text-muted md:text-lg">
            {caption}
          </p>
        )}
      </Container>
    </section>
  );
}
