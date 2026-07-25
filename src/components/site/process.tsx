import { PROCESS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

export function Process() {
  return (
    <section
      id="process"
      className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-28"
    >
      <Reveal>
        <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          How I work
        </span>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          A process built for products that can&rsquo;t afford a redo.
        </h2>
      </Reveal>

      <div className="relative mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border/70 bg-border/70 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((item, i) => (
          <Reveal
            key={item.step}
            delay={i * 0.08}
            className="group relative bg-card p-7"
          >
            <span className="text-muted-foreground/40 text-3xl font-semibold">
              {item.step}
            </span>
            <h3 className="mt-5 text-lg font-semibold">
              {item.title}
            </h3>
            <p className="mt-2.5 text-sm text-muted-foreground">
              {item.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
