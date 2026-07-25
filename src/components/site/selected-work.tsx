import { Reveal } from "@/components/site/reveal";
import { WorkGate } from "@/components/site/work-gate";

export function SelectedWork() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-28">
      <Reveal>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Selected work
            </span>
            <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              A few problems worth telling you about.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Case studies from the last three years — 0→1 launches, systems
            work, and the occasional brand overhaul.
          </p>
        </div>
      </Reveal>

      <WorkGate />
    </section>
  );
}
