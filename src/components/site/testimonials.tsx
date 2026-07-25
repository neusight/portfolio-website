import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

export function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-28">
      <Reveal>
        <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Word on the street
        </span>
        <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          What it&rsquo;s like to work together.
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <Reveal
            key={t.name}
            delay={i * 0.08}
            className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6"
          >
            <Quote className="text-muted-foreground size-6" />
            <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 text-sm">
              <div className="font-semibold">{t.name}</div>
              <div className="text-muted-foreground">{t.title}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
