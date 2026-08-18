import { Reveal } from "@/components/site/reveal";
import { CaseStudyCard } from "@/components/site/case-study-card";
import { MYOURLY_STUDY } from "@/lib/data";

export function FeaturedBuild() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-16 pb-4 sm:px-8 sm:pt-28 sm:pb-8">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Featured build
            </span>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Something I built and shipped on my own.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            No password required. This one&rsquo;s a real, live product,
            outside of any client relationship.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-12">
        <CaseStudyCard study={MYOURLY_STUDY} featured />
      </Reveal>
    </section>
  );
}
