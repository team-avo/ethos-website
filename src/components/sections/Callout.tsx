import { Container } from '@/components/ui/Container';
import { callouts } from '@/data/programs';

export function Callout() {
  return (
    <section className="bg-primary">
      <Container className="grid gap-12 py-20 md:py-28 lg:grid-cols-3">
        {callouts.map((item, i) => (
          <div key={item.title} className="flex flex-col gap-4">
            <span className="text-5xl font-bold leading-none text-highlight">
              0{i + 1}
            </span>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              {item.title}
            </h3>
            <p className="text-base leading-relaxed text-muted">{item.body}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
