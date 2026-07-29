import { useState } from "react";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import type { CaseStudy } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Lightbox } from "@/components/site/lightbox";

const GRADIENTS: Record<CaseStudy["gradient"], string> = {
  signature:
    "linear-gradient(135deg, var(--grad-violet) 0%, var(--grad-fuchsia) 55%, var(--grad-orange) 100%)",
  cool: "linear-gradient(135deg, #6d5dfc 0%, #3e7bfa 55%, var(--grad-cyan) 100%)",
  warm: "linear-gradient(135deg, var(--grad-orange) 0%, var(--grad-fuchsia) 60%, var(--grad-violet) 100%)",
};

// A corner watermark needs to stay legible over anything behind it — a light
// screenshot, a photo, or a saturated gradient — so it carries its own soft
// dark halo rather than depending on context-specific backdrops.
function CornerMark({ mark }: { mark?: { src: string; alt: string } }) {
  if (!mark) return null;

  return (
    <div className="absolute bottom-4 left-4">
      <div
        aria-hidden
        className="absolute -inset-2.5 rounded-full bg-black/30 blur-md"
      />
      <img
        src={mark.src}
        alt=""
        aria-hidden
        className="relative h-7 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]"
      />
    </div>
  );
}

// The expand affordance — a hairline signature-gradient ring (same brand
// treatment as the site's other marks) around a glass badge. Stays visible
// (not hover-only) so it reads on touch devices, which have no hover state.
function ExpandBadge({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "gradient-border pointer-events-none absolute rounded-full p-px shadow-[0_4px_16px_-4px_rgba(0,0,0,0.6)] transition-transform duration-300 group-hover/screen:scale-110 group-focus-visible/screen:scale-110",
        className,
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-black/70 backdrop-blur-md transition-colors duration-300 group-hover/screen:bg-black/55 sm:size-9">
        <Maximize2 className="size-3.5 text-white sm:size-4" />
      </span>
    </span>
  );
}

// A screenshot the user can click/tap to open in the lightbox.
function ExpandableScreen({
  screen,
  onOpen,
  className,
  badgeClassName,
}: {
  screen: { src: string; alt: string };
  onOpen: () => void;
  className?: string;
  badgeClassName?: string;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`View ${screen.alt} larger`}
      className="group/screen relative block w-full cursor-zoom-in text-left"
    >
      <img
        src={screen.src}
        alt={screen.alt}
        loading="lazy"
        className={cn(
          "transition-[filter] duration-300 group-hover/screen:brightness-90",
          className,
        )}
      />
      <ExpandBadge className={badgeClassName} />
    </button>
  );
}

function CoverArt({
  study,
  featured,
  context,
}: {
  study: CaseStudy;
  featured?: boolean;
  context: "card" | "modal";
}) {
  const aspect = featured ? "aspect-[16/9]" : "aspect-[4/3]";

  if (context === "modal" && study.logo) {
    return (
      <div
        className={cn("relative w-full shrink-0 overflow-hidden", aspect)}
        style={{ background: GRADIENTS[study.gradient] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
        <div className="absolute inset-0 opacity-90 mix-blend-overlay [background-image:radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="absolute inset-0 flex items-center justify-center p-10">
          {study.logo.plate ? (
            <div className="rounded-3xl bg-white/95 p-6 shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:p-8">
              <img
                src={study.logo.src}
                alt={study.logo.alt}
                className="w-full max-w-[10rem] sm:max-w-[11rem]"
              />
            </div>
          ) : (
            <img
              src={study.logo.src}
              alt={study.logo.alt}
              className="w-full max-w-[15rem] drop-shadow-[0_8px_24px_rgba(0,0,0,0.25)] sm:max-w-[17rem]"
            />
          )}
        </div>
      </div>
    );
  }

  if (context === "card" && study.screensLayout === "phone" && study.logo) {
    return (
      <div
        className={cn("relative w-full shrink-0 overflow-hidden", aspect)}
        style={{ background: GRADIENTS[study.gradient] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
        <div className="absolute inset-0 opacity-90 mix-blend-overlay [background-image:radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="absolute inset-0 flex items-center justify-center p-8">
          {study.logo.plate ? (
            <div className="group-hover:-translate-y-1 rounded-3xl bg-white/95 p-7 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500 sm:p-8">
              <img
                src={study.logo.src}
                alt={study.logo.alt}
                className="w-full max-w-[9rem] sm:max-w-[10rem]"
              />
            </div>
          ) : (
            <img
              src={study.logo.src}
              alt={study.logo.alt}
              className="group-hover:-translate-y-1 w-full max-w-[13rem] drop-shadow-[0_12px_28px_rgba(0,0,0,0.3)] transition-transform duration-500 sm:max-w-[15rem]"
            />
          )}
        </div>

        <div className="group-hover:translate-x-0 group-hover:opacity-100 absolute top-4 right-4 flex size-9 -translate-x-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    );
  }

  if (context === "card" && study.screensLayout === "phone" && study.screens?.[0]) {
    const screen = study.screens[0];
    return (
      <div
        className={cn("relative w-full shrink-0 overflow-hidden", aspect)}
        style={{ background: GRADIENTS[study.gradient] }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_45%)]" />
        <div className="absolute inset-0 opacity-90 mix-blend-overlay [background-image:radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:14px_14px]" />
        <div className="absolute inset-0 flex items-center justify-center py-6">
          <img
            src={screen.src}
            alt={screen.alt}
            loading="lazy"
            className="group-hover:-translate-y-1 h-full w-auto rounded-lg shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] transition-transform duration-500"
          />
        </div>

        <div className="group-hover:translate-x-0 group-hover:opacity-100 absolute top-4 right-4 flex size-9 -translate-x-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    );
  }

  if (context === "card" && study.screens?.[0]) {
    const screen = study.screens[0];
    return (
      <div className={cn("relative w-full shrink-0 overflow-hidden bg-black", aspect)}>
        <img
          src={screen.src}
          alt={screen.alt}
          loading="lazy"
          className="group-hover:scale-[1.03] absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/10" />

        <CornerMark mark={study.mark} />

        <div className="group-hover:translate-x-0 group-hover:opacity-100 absolute top-4 right-4 flex size-9 -translate-x-1 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-md transition-all duration-300">
          <ArrowUpRight className="size-4" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn("relative w-full shrink-0 overflow-hidden", aspect)}
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

      <CornerMark mark={study.mark} />

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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  // The map/mural (if present) renders before the screens and occupies
  // lightbox index 0, so every screen's index shifts by one to match.
  const mapOffset = study.map ? 1 : 0;
  const lightboxItems = [
    ...(study.map
      ? [{ ...study.map, frame: undefined as "phone" | undefined }]
      : []),
    ...(study.screens ?? []).map((screen) => ({
      ...screen,
      frame: study.screensLayout === "phone" ? ("phone" as const) : undefined,
    })),
  ];

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
          <CoverArt study={study} featured={featured} context="card" />

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
              <div className="ml-auto text-right">
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
        // The close button is rendered by DialogContent itself as an
        // absolutely-positioned sibling of these children — if THIS element
        // were also the scrolling container (as it used to be, via
        // max-h/overflow-y-auto here), the X scrolls away with the content
        // instead of staying pinned to the dialog's corner, becoming
        // unreachable once scrolled more than a couple screens down (it's
        // positioned relative to the scrolled content's own box, not the
        // viewport). The actual scrolling now happens on the inner wrapper
        // below instead, so DialogContent's own box — and the X anchored to
        // it — never moves.
        className="w-full max-w-2xl overflow-hidden rounded-3xl border-border/70 bg-card p-0 sm:max-w-2xl"
        // The lightbox renders in its own portal outside this dialog's DOM,
        // so Radix's own outside-click detection (which runs in the
        // capture phase — nothing inside this component tree can outrun
        // it) sees every click on the lightbox as a click "outside" this
        // dialog and reacts to it, eating the click before the lightbox's
        // own handler gets a clean first try. Telling Radix to ignore
        // outside interactions while the lightbox is open fixes that at
        // the source instead of fighting event propagation.
        onPointerDownOutside={(event) => {
          if (lightboxIndex !== null) event.preventDefault();
        }}
      >
        <DialogTitle className="sr-only">{study.title}</DialogTitle>

        <div className="max-h-[85vh] min-w-0 overflow-y-auto">
          <CoverArt study={study} featured context="modal" />

          <div className="flex min-w-0 flex-col gap-8 p-6 pt-10 sm:p-8 sm:pt-14">
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

            <div className="grid grid-cols-1 gap-4 border-t border-border/70 pt-20 sm:grid-cols-2">
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

            {study.map && (
              <div className="flex flex-col gap-3 border-t border-border/70 pt-6">
                <h3 className="text-sm font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  Process
                </h3>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {study.map.title}
                  </h4>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {study.map.body}
                  </p>
                </div>
                <div className="group/screen relative overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_20px_50px_-25px_rgba(0,0,0,0.5)]">
                  <div className="overflow-x-auto overflow-y-hidden">
                    <img
                      src={study.map.src}
                      alt={study.map.alt}
                      loading="lazy"
                      className="h-auto w-[1400px] max-w-none"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(0)}
                    aria-label={`View ${study.map.alt} larger`}
                    className="absolute right-3 bottom-3 cursor-zoom-in"
                  >
                    <ExpandBadge className="static" />
                  </button>
                </div>
              </div>
            )}

            {study.screens && study.screens.length > 0 && (
              <div className="flex flex-col gap-5 border-t border-border/70 pt-6">
                <h3 className="text-sm font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                  Screens
                </h3>

                {study.screensLayout === "phone" ? (
                  <div className="flex flex-wrap gap-6">
                    {study.screens.map((screen, i) => (
                      <div
                        key={screen.src}
                        className="flex w-36 flex-col gap-3 sm:w-40"
                      >
                        <div className="overflow-hidden rounded-xl border border-border/70 bg-white shadow-[0_20px_50px_-25px_rgba(0,0,0,0.5)]">
                          <ExpandableScreen
                            screen={screen}
                            onOpen={() => setLightboxIndex(i + mapOffset)}
                            className="w-full"
                            badgeClassName="right-2 bottom-2"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground">
                            {screen.title}
                          </h4>
                          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                            {screen.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  study.screens.map((screen, i) => (
                    <div key={screen.src} className="flex flex-col gap-3">
                      <div className="overflow-hidden rounded-2xl border border-border/70 bg-black shadow-[0_20px_50px_-25px_rgba(0,0,0,0.5)]">
                        <div className="flex items-center gap-1.5 border-b border-white/10 bg-neutral-900 px-3.5 py-2.5">
                          <span className="size-2.5 rounded-full bg-white/20" />
                          <span className="size-2.5 rounded-full bg-white/20" />
                          <span className="size-2.5 rounded-full bg-white/20" />
                        </div>
                        <ExpandableScreen
                          screen={screen}
                          onOpen={() => setLightboxIndex(i + mapOffset)}
                          className="w-full"
                          badgeClassName="right-3 bottom-3"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">
                          {screen.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {screen.body}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

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
        </div>
      </DialogContent>

      {lightboxItems.length > 0 && (
        <Lightbox
          items={lightboxItems}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </Dialog>
  );
}
