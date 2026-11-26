import Image from 'next/image';
import { Container } from '@/components/ui/Container';

type Props = {
  eyebrow?: string;
  heading: string;
  scaleCaption?: string;
  body: string;
  chartSrc: string;
  chartAlt: string;
  backdrop?: 'page' | 'primary';
  reversed?: boolean;
};

export function ChartBlock({
  eyebrow,
  heading,
  scaleCaption,
  body,
  chartSrc,
  chartAlt,
  backdrop = 'page',
  reversed = false,
}: Props) {
  const bg = backdrop === 'primary' ? 'bg-primary' : 'bg-page';
  return (
    <section className={`${bg} border-t border-ink`}>
      <Container className="py-20 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div
            className={`space-y-5 ${
              reversed ? 'lg:order-2' : ''
            }`}
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-highlight">
                {eyebrow}
              </p>
            )}
            <h2 className="text-2xl font-bold leading-tight text-white md:text-4xl">
              {heading}
            </h2>
            {scaleCaption && (
              <span className="inline-flex items-center rounded-full border border-ink bg-card px-3 py-1 text-xs font-medium text-muted">
                {scaleCaption}
              </span>
            )}
            <p className="text-base leading-relaxed text-muted">{body}</p>
          </div>
          <div className={reversed ? 'lg:order-1' : ''}>
            <div className="overflow-hidden rounded-2xl border border-ink bg-white p-4">
              <Image
                src={chartSrc}
                alt={chartAlt}
                width={1200}
                height={720}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 600px, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
