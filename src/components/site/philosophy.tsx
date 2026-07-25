import { Quote } from "lucide-react";
import { PHILOSOPHY } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

export function Philosophy() {
  return (
    <section className="relative mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
      <Reveal>
        <Quote className="text-gradient mx-auto size-8" />
        <p className="font-display mt-6 text-2xl leading-snug font-medium text-balance sm:text-3xl">
          &ldquo;{PHILOSOPHY.quote}&rdquo;
        </p>
        <div className="font-accent text-gradient mt-6 text-lg italic">
          — {PHILOSOPHY.attribution}
        </div>
      </Reveal>
    </section>
  );
}
