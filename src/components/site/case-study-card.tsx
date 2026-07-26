import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const GRADIENTS: Record<CaseStudy["gradient"], string> = {
  signature:
    "linear-gradient(135deg, var(--grad-violet) 0%, var(--grad-fuchsia) 55%, var(--grad-orange) 100%)",
  cool: "linear-gradient(135deg, #6d5dfc 0%, #3e7bfa 55%, var(--grad-cyan) 100%)",
  warm: "linear-gradient(135deg, var(--grad-orange) 0%, var(--grad-fuchsia) 60%, var(--grad-violet) 100%)",
};

function CoverArt({
  study,
  featured,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        featured ? "aspect-[16/9]" : "aspect-[4/3]",
      )}
      style={{ background: GRADIENTS[study.gradient] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
      <div className="absolute inset-0 opacity-90 mix-blend-overlay [background-image:radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:14px_14px]" />

      <div className="absolute inset-0 flex items-end p-5">
        <div className="group-hover:-translate-y-1 w-full space-y-2 rounded-xl border border-white/25 bg-white/10 p-3 backdrop-blur-md transition-transform duration-500">
          <div className="h-1.5 w-2/3 rounded-full bg-white/60" />
          <div className="h-1.5 w-1/3 rounded-full bg-white/35" />
          <div className="flex gap-1.5 pt-1">
            <div className="h-6 flex-1 rounded-md bg-white/20" />
            <div className="h-6 flex-1 rounded-md bg-white/30" />
            <div className="h-6 flex-1 rounded-md bg-white/15" />
          </div>
        </div>
      </div>

      <div className="group-hover:translate-x-0 group-hover:opacity-100 absolute top-4 right-4 flex size-9 -translate-x-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300">
        <ArrowUpRight className="size-4" />
      </div>
    </div>
  );
}

export function CaseStudyCard({
  study,
  featured = false,
}: {
  study: CaseStudy;
  featured?: boolean;
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "group relative flex w-full flex-col overflow-hidden rounded-3xl border-gradient-card text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]",
            featured && "sm:col-span-2",
          )}
        >
          <CoverArt study={study} featured={featured} />

          <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{study.category}</span>
              <span>{study.year}</span>
            </div>
            <h3 className="text-xl leading-snug font-semibold text-balance sm:text-2xl">
              {study.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {study.client} — {study.blurb}
            </p>
            <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
              <div className="flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border-gradient-card px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-right">
                <div className="text-base font-semibold text-foreground">
                  {study.metric.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {study.metric.label}
                </div>
              </div>
            </div>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent
        showCloseButton
        className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border-border/70 bg-card p-0 sm:max-w-2xl"
      >
        <DialogTitle className="sr-only">{study.title}</DialogTitle>

        <CoverArt study={study} featured />

        <div className="flex flex-col gap-6 p-6 sm:p-8">
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <span>{study.category}</span>
              <span>{study.year}</span>
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              {study.title}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {study.client} · {study.role}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-foreground/90">
            {study.blurb}
          </p>

          <div className="grid grid-cols-1 gap-4 border-t border-border/70 pt-6 sm:grid-cols-2">
            {study.details.map((detail) => (
              <div key={detail.label}>
                <h3 className="text-sm font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  {detail.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                  {detail.body}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-6">
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border-gradient-card px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="text-right">
              <div className="text-base font-semibold text-foreground">
                {study.metric.value}
              </div>
              <div className="text-xs text-muted-foreground">
                {study.metric.label}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
