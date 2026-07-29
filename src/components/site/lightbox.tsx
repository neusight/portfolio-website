"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useTransform } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const CLOSE_ANIMATION_MS = 220;

export type LightboxItem = {
  src: string;
  alt: string;
  title: string;
  body: string;
  // Phone screenshots are natively small — blowing them up to fill the
  // screen would just show the pixelation, so they get a modest, deliberate
  // size instead. Everything else (browser screens, mural/map boards) is
  // high-res enough to go full-screen.
  frame?: "phone";
};

// The case study modal underneath is a Radix Dialog, which traps focus
// inside itself. This lightbox renders in its own portal outside that
// trap, so the *first* click on one of its controls doubles as the
// interaction Radix's focus scope reacts to (yanking focus back inside the
// trapped dialog) — the click needs a second press to actually register.
// Firing on pointerdown instead of click runs before that correction, so a
// single press works everywhere, including touch.
function LightboxButton({
  onActivate,
  ariaLabel,
  className,
  size = "size-10",
  children,
}: {
  onActivate: () => void;
  ariaLabel: string;
  className?: string;
  size?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onPointerDown={onActivate}
      onClick={onActivate}
      aria-label={ariaLabel}
      className={cn(
        "gradient-border absolute z-20 rounded-full p-px shadow-[0_4px_16px_-4px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      <span
        className={cn(
          "flex items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-black/55",
          size,
        )}
      >
        {children}
      </span>
    </button>
  );
}

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}) {
  // Portals need a browser document, which isn't available during the
  // static export's server render — bail until mounted client-side.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const open = index !== null;

  // Whether the overlay stays visible for the closing fade is decoupled
  // from whether it's mounted at all — this is deliberate. Relying on a
  // framer-motion exit-complete callback to trigger the actual unmount
  // proved unreliable (the animation is requestAnimationFrame-driven, which
  // browsers can throttle/pause, e.g. on a backgrounded tab — see the
  // gotcha in AGENTS.md about rAF pausing). A plain setTimeout doesn't
  // depend on that callback ever firing, so the overlay always disappears
  // on a bounded timer regardless. More importantly, pointer-events is
  // switched off the instant `open` goes false, so even if the fade-out
  // itself is running slow for any reason, the very first click already
  // stopped it from blocking whatever's underneath — no second click
  // needed.
  const [rendered, setRendered] = useState(false);
  const lastItem = useRef<LightboxItem | null>(null);
  const lastIndex = useRef(0);
  if (open && index !== null) {
    lastItem.current = items[index];
    lastIndex.current = index;
  }

  useEffect(() => {
    if (open) {
      setRendered(true);
      return;
    }
    if (!rendered) return;
    const timer = setTimeout(() => setRendered(false), CLOSE_ANIMATION_MS);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    if (!open || index === null) return;

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") {
        onNavigate((index! - 1 + items.length) % items.length);
      }
      if (event.key === "ArrowRight") {
        onNavigate((index! + 1) % items.length);
      }
    }

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, index, items.length, onClose, onNavigate]);

  const dragY = useMotionValue(0);
  const backdropOpacity = useTransform(dragY, [-220, 0, 220], [0.35, 1, 0.35]);

  if (!mounted || !rendered) return null;

  const item = lastItem.current;
  if (!item) return null;
  const activeIndex = lastIndex.current;

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 z-[70] flex items-center justify-center p-2 transition-opacity sm:p-6",
        // The Radix dialog underneath sets `pointer-events: none` directly
        // on <body> while it's open, to make the page behind it inert.
        // That's an inherited CSS property, and this overlay is portaled
        // to document.body too — so without an explicit override here, it
        // silently inherits "none" from body whenever Radix happens to
        // have set it, regardless of this element's own open/closed state.
        // That's what made the close button's first click land or not
        // land seemingly at random.
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      style={{ transitionDuration: `${CLOSE_ANIMATION_MS}ms` }}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      // This overlay lives in its own portal, outside the case study
      // modal's Radix Dialog — which traps focus and treats any pointerdown
      // outside its own DOM subtree as a request to dismiss *it*. Without
      // this, that global (document-level) listener can intercept the very
      // first press on one of this overlay's own controls, so closing
      // needs a second click before it "really" registers. Stopping
      // propagation here keeps the event from ever reaching Radix's
      // document-level listener, while this element's own children (the
      // buttons) still get the event first, on the way up.
      onPointerDown={(event) => event.stopPropagation()}
    >
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-black/95 backdrop-blur-md"
        style={{ opacity: backdropOpacity }}
        onPointerDown={onClose}
      />

      <LightboxButton
        onActivate={onClose}
        ariaLabel="Close"
        className="top-4 right-4 sm:top-6 sm:right-6"
      >
        <X className="size-5" />
      </LightboxButton>

      {items.length > 1 && (
        <>
          <LightboxButton
            onActivate={() =>
              onNavigate((activeIndex - 1 + items.length) % items.length)
            }
            ariaLabel="Previous image"
            className="top-1/2 left-2 -translate-y-1/2 sm:left-5"
            size="size-10 sm:size-12"
          >
            <ChevronLeft className="size-5 sm:size-6" />
          </LightboxButton>
          <LightboxButton
            onActivate={() => onNavigate((activeIndex + 1) % items.length)}
            ariaLabel="Next image"
            className="top-1/2 right-2 -translate-y-1/2 sm:right-5"
            size="size-10 sm:size-12"
          >
            <ChevronRight className="size-5 sm:size-6" />
          </LightboxButton>
        </>
      )}

      <motion.img
        key={item.src}
        src={item.src}
        alt={item.alt}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.96 }}
        transition={{ duration: 0.22, ease: EASE }}
        drag="y"
        style={{ y: dragY }}
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.6}
        onDragEnd={(_, info) => {
          if (Math.abs(info.offset.y) > 120 || Math.abs(info.velocity.y) > 600) {
            onClose();
          }
        }}
        className={cn(
          "relative z-[5] object-contain shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10",
          item.frame === "phone"
            ? "max-h-[70vh] max-w-[300px] rounded-[2.25rem] sm:max-w-[340px]"
            : "max-h-[95vh] max-w-[95vw] rounded-lg sm:rounded-xl",
        )}
      />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : 12 }}
        transition={{ delay: open ? 0.1 : 0, duration: 0.3, ease: EASE }}
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center bg-gradient-to-t from-black/85 via-black/40 to-transparent px-6 pt-16 pb-5 text-center sm:pb-7"
      >
        <h4 className="text-sm font-semibold text-white">{item.title}</h4>
        <p className="mt-1 max-w-md text-xs leading-relaxed text-white/65">
          {item.body}
        </p>
        {items.length > 1 && (
          <p className="mt-2 text-xs text-white/40">
            {activeIndex + 1} / {items.length}
          </p>
        )}
      </motion.div>
    </div>,
    document.body,
  );
}
