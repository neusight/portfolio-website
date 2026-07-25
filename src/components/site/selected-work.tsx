import { CASE_STUDIES } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";
import { CaseStudyCard } from "@/components/site/case-study-card";

export function SelectedWork() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-accent text-gradient text-lg italic">
              Selected work
            </span>
            <h2 className="font-display mt-2 max-w-xl text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              A few problems worth telling you about.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Case studies from the last three years — 0→1 launches, systems
            work, and the occasional brand overhaul.
          </p>
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {CASE_STUDIES.map((study, i) => (
          <Reveal
            key={study.slug}
            delay={i * 0.08}
            className={i === 0 ? "sm:col-span-2" : undefined}
          >
            <CaseStudyCard study={study} featured={i === 0} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
