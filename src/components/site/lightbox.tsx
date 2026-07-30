"use client";

import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useTransform,
} from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;
const CLOSE_ANIMATION_MS = 220;

// The "fit to screen" shrink has to happen via the same CSS transform used
// for pinch-zoom, not via a max-width/max-height box constraint — otherwise
// mobile browsers rasterize the image at that small on-screen size, and
// zooming just stretches the already-small raster (blurry), regardless of
// how conservatively the zoom cap below is calculated. Rendering the <img>
// at its full native pixel dimensions and scaling *down* to fit means
// zooming back in reveals more of an already-full-resolution raster instead.
function computeFitScale(
  natural: { width: number; height: number },
  viewport: { width: number; height: number },
  frame: "phone" | undefined,
) {
  if (frame === "phone") {
    const maxWidth = viewport.width < 640 ? 300 : 340;
    const maxHeight = viewport.height * 0.7;
    return Math.min(maxWidth / natural.width, maxHeight / natural.height);
  }
  const maxWidth = viewport.width * 0.95;
  const maxHeight = viewport.height * 0.95;
  return Math.min(maxWidth / natural.width, maxHeight / natural.height);
}

// Pinch-to-zoom / double-tap-to-zoom tuning. Screenshots are captured at
// phone resolution, so a generous max zoom actually helps legibility instead
// of just showing pixelation.
const MAX_ZOOM = 4;
const DOUBLE_TAP_ZOOM = 2.5;
// However high-res a screenshot is, zooming past its native pixel density
// just upsamples it — never actually shows more detail, only a softer,
// blurrier version of what's already visible. Every image gets capped at
// (roughly) its own native-resolution ceiling instead of one flat max, so
// zoom never invites the user into a blurry dead end; it just stops where
// real clarity does. This floor keeps the gesture from feeling disabled on
// the handful of screens whose source files are natively small.
const MIN_USEFUL_ZOOM = 1.4;
const DOUBLE_TAP_MAX_DELAY_MS = 300;
const DOUBLE_TAP_MAX_DIST_PX = 40;
const TAP_MAX_DURATION_MS = 250;
const TAP_MAX_MOVEMENT_PX = 10;
const DISMISS_CLOSE_OFFSET_PX = 120;
const DISMISS_CLOSE_VELOCITY_PXS = 600;
const ZOOM_SPRING = { type: "spring", stiffness: 400, damping: 35 } as const;

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
//
// onClick is *also* wired up — but only as a fallback for keyboard
// activation (Enter/Space), which fires a click with no preceding
// pointerdown. For an actual pointer press both events fire for the same
// interaction, so onClick has to know the pointerdown already handled it
// and skip — otherwise every mouse/touch press called onActivate twice
// (e.g. navigating by 2 screenshots instead of 1 on a single arrow tap).
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
  const handledByPointerRef = useRef(false);

  return (
    <button
      type="button"
      onPointerDown={() => {
        handledByPointerRef.current = true;
        onActivate();
      }}
      onClick={() => {
        if (handledByPointerRef.current) {
          handledByPointerRef.current = false;
          return;
        }
        onActivate();
      }}
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

  // Pinch-zoom / pan / double-tap state. These live at the Lightbox level
  // (not on the image itself) because dismiss-swipe (dragY, above) and
  // zoom/pan need to share one pointer gesture pipeline: a single-finger
  // drag means "swipe to dismiss" when the image is at 1x, but "pan around"
  // once the user has zoomed in.
  const zoomScale = useMotionValue(1);
  const panX = useMotionValue(0);
  const panY = useMotionValue(0);
  const entranceScale = useMotionValue(0.94);
  // The image element is rendered at its native pixel dimensions (see
  // naturalSize below) and shrunk to fit the viewport via this factor,
  // folded into the same transform pinch-zoom uses — see computeFitScale.
  const fitScaleRef = useRef(1);
  // Kept as a separate motion value multiplied into the final scale, rather
  // than driving `scale` directly via the `animate` prop, so the mount/exit
  // "pop" transition never fights with live pinch-zoom updates.
  const displayScale = useTransform([entranceScale, zoomScale], (latest) => {
    const [entrance, zoom] = latest as number[];
    return fitScaleRef.current * entrance * zoom;
  });
  const combinedY = useTransform([dragY, panY], (latest) => {
    const [dismiss, pan] = latest as number[];
    return dismiss + pan;
  });

  const [isZoomed, setIsZoomed] = useState(false);
  useMotionValueEvent(zoomScale, "change", (value) => setIsZoomed(value > 1.01));

  // Null until the current image's onLoad fires, so we know its true native
  // pixel dimensions before ever laying it out — see computeFitScale above.
  const [naturalSize, setNaturalSize] = useState<{
    width: number;
    height: number;
  } | null>(null);
  const [viewport, setViewport] = useState<{ width: number; height: number } | null>(
    null,
  );

  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const pointersRef = useRef(new Map<number, { x: number; y: number }>());
  const gestureModeRef = useRef<"idle" | "pinch" | "pan" | "dismiss">("idle");
  const gestureStartRef = useRef({
    scale: 1,
    panX: 0,
    panY: 0,
    dist: 0,
    mid: { x: 0, y: 0 },
    pointer: { x: 0, y: 0 },
  });
  const baseSizeRef = useRef<{ width: number; height: number } | null>(null);
  const maxScaleRef = useRef<number | null>(null);
  const tapStartRef = useRef<{ time: number; point: { x: number; y: number } } | null>(
    null,
  );
  const lastTapRef = useRef<{ time: number; point: { x: number; y: number } } | null>(
    null,
  );
  const lastMoveRef = useRef<{ time: number; y: number } | null>(null);

  useEffect(() => {
    animate(entranceScale, open ? 1 : 0.96, { duration: 0.22, ease: EASE });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    function updateViewport() {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    }
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  // Recompute the fit-to-screen scale and the zoom cap the moment we know
  // the current image's real dimensions (or the viewport changes size) —
  // both the display transform (via fitScaleRef) and getMaxZoom() below
  // read directly off known numbers instead of measuring the DOM.
  useEffect(() => {
    if (!naturalSize || !viewport) return;
    const fit = computeFitScale(naturalSize, viewport, lastItem.current?.frame);
    fitScaleRef.current = fit;

    const dpr = window.devicePixelRatio || 1;
    const idealMax = 1 / (fit * dpr);
    maxScaleRef.current = Math.min(MAX_ZOOM, Math.max(MIN_USEFUL_ZOOM, idealMax));
    baseSizeRef.current = null;
  }, [naturalSize, viewport]);

  // `touch-action: none` alone doesn't reliably stop iOS Safari's native
  // pinch-zoom-the-page gesture — Safari's multi-touch gesture recognizer
  // can still partially engage, especially when a pinch's second finger
  // lands outside the (often narrow) image and onto the surrounding
  // backdrop. Because the case study modal underneath is `position: fixed`
  // (pinned to the layout viewport, not the visual one), letting that
  // native zoom engage at all could leave the modal appearing scrolled up
  // once the lightbox closed. A real, non-passive `touchmove` listener
  // that preventDefaults on any multi-touch move is the standard, more
  // reliable cross-browser fix — React's synthetic pointer events don't
  // give the browser this signal early enough for Safari to honor it.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const blockPinch = (event: TouchEvent) => {
      if (event.touches.length > 1) event.preventDefault();
    };
    el.addEventListener("touchstart", blockPinch, { passive: false });
    el.addEventListener("touchmove", blockPinch, { passive: false });
    return () => {
      el.removeEventListener("touchstart", blockPinch);
      el.removeEventListener("touchmove", blockPinch);
    };
  }, []);

  // Reset zoom whenever the visible image changes, or the lightbox
  // opens/closes — otherwise a zoomed-in screenshot would stay zoomed when
  // navigating to the next one, or shrink from 2.5x instead of 1x on close.
  useEffect(() => {
    zoomScale.set(1);
    panX.set(0);
    panY.set(0);
    dragY.set(0);
    baseSizeRef.current = null;
    maxScaleRef.current = null;
    pointersRef.current.clear();
    gestureModeRef.current = "idle";
    tapStartRef.current = null;
    lastTapRef.current = null;
    setIsZoomed(false);
    setNaturalSize(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, open]);

  // getBoundingClientRect() returns the *painted* (post-transform) box, so
  // it's only accurate to derive the image's unscaled (zoomScale === 1)
  // footprint the first time a gesture starts. Cached per image so later
  // pinch/pan events can keep using it as zoomScale changes. The zoom cap
  // itself (maxScaleRef) is computed separately, directly from the known
  // native size and fit scale — see the effect above — since it doesn't
  // depend on anything this measurement provides.
  function getBaseSize() {
    if (baseSizeRef.current) return baseSizeRef.current;
    const el = imgRef.current;
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const scale = zoomScale.get() || 1;
    const size = { width: rect.width / scale, height: rect.height / scale };
    baseSizeRef.current = size;
    return size;
  }

  function getMaxZoom() {
    return maxScaleRef.current ?? MAX_ZOOM;
  }

  function clampPan(value: number, scale: number, axis: "x" | "y") {
    const base = getBaseSize();
    if (!base) return value;
    const size = axis === "x" ? base.width : base.height;
    const max = Math.max(0, (size * (scale - 1)) / 2);
    return Math.min(max, Math.max(-max, value));
  }

  function resetZoom() {
    animate(zoomScale, 1, ZOOM_SPRING);
    animate(panX, 0, ZOOM_SPRING);
    animate(panY, 0, ZOOM_SPRING);
  }

  function toggleZoom(point: { x: number; y: number }) {
    const el = imgRef.current;
    if (!el) return;
    if (zoomScale.get() > 1.01) {
      resetZoom();
      return;
    }
    const rect = el.getBoundingClientRect();
    const dx = point.x - (rect.left + rect.width / 2);
    const dy = point.y - (rect.top + rect.height / 2);
    const targetScale = Math.min(DOUBLE_TAP_ZOOM, getMaxZoom());
    // Keep the tapped point stationary on screen as the image scales up
    // around its own center: target offset = distance-from-center * (1 - scale).
    const targetX = clampPan(dx * (1 - targetScale), targetScale, "x");
    const targetY = clampPan(dy * (1 - targetScale), targetScale, "y");
    const springIn = { type: "spring", stiffness: 300, damping: 30 } as const;
    animate(zoomScale, targetScale, springIn);
    animate(panX, targetX, springIn);
    animate(panY, targetY, springIn);
  }

  function handlePointerDown(e: ReactPointerEvent<HTMLImageElement>) {
    imgRef.current?.setPointerCapture(e.pointerId);
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    tapStartRef.current = { time: Date.now(), point: { x: e.clientX, y: e.clientY } };

    const pts = Array.from(pointersRef.current.values());
    if (pts.length === 2) {
      const [a, b] = pts;
      gestureModeRef.current = "pinch";
      gestureStartRef.current = {
        scale: zoomScale.get(),
        panX: panX.get(),
        panY: panY.get(),
        dist: Math.hypot(a.x - b.x, a.y - b.y),
        mid: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
        pointer: pts[0],
      };
    } else if (pts.length === 1) {
      gestureModeRef.current = zoomScale.get() > 1.01 ? "pan" : "dismiss";
      gestureStartRef.current = {
        scale: zoomScale.get(),
        panX: panX.get(),
        panY: panY.get(),
        dist: 0,
        mid: { x: 0, y: 0 },
        pointer: pts[0],
      };
      lastMoveRef.current = { time: Date.now(), y: pts[0].y };
    }
  }

  function handlePointerMove(e: ReactPointerEvent<HTMLImageElement>) {
    if (!pointersRef.current.has(e.pointerId)) return;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = Array.from(pointersRef.current.values());
    const start = gestureStartRef.current;
    const mode = gestureModeRef.current;

    if (mode === "pinch" && pts.length === 2) {
      e.preventDefault();
      const [a, b] = pts;
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const nextScale = Math.min(
        getMaxZoom(),
        Math.max(1, start.scale * (dist / (start.dist || dist))),
      );
      zoomScale.set(nextScale);
      panX.set(clampPan(start.panX + (mid.x - start.mid.x), nextScale, "x"));
      panY.set(clampPan(start.panY + (mid.y - start.mid.y), nextScale, "y"));
    } else if (mode === "pan" && pts.length === 1) {
      e.preventDefault();
      const dx = pts[0].x - start.pointer.x;
      const dy = pts[0].y - start.pointer.y;
      const scale = zoomScale.get();
      panX.set(clampPan(start.panX + dx, scale, "x"));
      panY.set(clampPan(start.panY + dy, scale, "y"));
    } else if (mode === "dismiss" && pts.length === 1) {
      const dy = pts[0].y - start.pointer.y;
      dragY.set(dy * 0.8);
      lastMoveRef.current = { time: Date.now(), y: pts[0].y };
    }

    if (tapStartRef.current) {
      const moved = Math.hypot(
        e.clientX - tapStartRef.current.point.x,
        e.clientY - tapStartRef.current.point.y,
      );
      if (moved > TAP_MAX_MOVEMENT_PX) tapStartRef.current = null;
    }
  }

  function handlePointerUp(e: ReactPointerEvent<HTMLImageElement>) {
    const wasMode = gestureModeRef.current;
    const wasSingle = pointersRef.current.size === 1;
    pointersRef.current.delete(e.pointerId);
    const remaining = pointersRef.current.size;

    if (wasMode === "dismiss" && remaining === 0) {
      const finalY = dragY.get();
      let velocity = 0;
      if (lastMoveRef.current) {
        const dt = Date.now() - lastMoveRef.current.time;
        if (dt > 0) velocity = ((e.clientY - lastMoveRef.current.y) / dt) * 1000;
      }
      if (
        Math.abs(finalY) > DISMISS_CLOSE_OFFSET_PX ||
        Math.abs(velocity) > DISMISS_CLOSE_VELOCITY_PXS
      ) {
        onClose();
      } else {
        animate(dragY, 0, { type: "spring", stiffness: 500, damping: 40 });
      }
    }

    if ((wasMode === "pinch" || wasMode === "pan") && remaining === 1) {
      // One finger lifted off a pinch — keep going as a single-finger pan
      // instead of snapping back, so the gesture feels continuous.
      gestureModeRef.current = "pan";
      const remainingPointer = Array.from(pointersRef.current.values())[0];
      gestureStartRef.current = {
        scale: zoomScale.get(),
        panX: panX.get(),
        panY: panY.get(),
        dist: 0,
        mid: { x: 0, y: 0 },
        pointer: remainingPointer,
      };
    } else if (remaining === 0) {
      if ((wasMode === "pinch" || wasMode === "pan") && zoomScale.get() < 1.02) {
        resetZoom();
      }
      gestureModeRef.current = "idle";

      if (wasSingle && tapStartRef.current) {
        const duration = Date.now() - tapStartRef.current.time;
        const tapPoint = tapStartRef.current.point;
        if (duration < TAP_MAX_DURATION_MS) {
          const last = lastTapRef.current;
          if (
            last &&
            Date.now() - last.time < DOUBLE_TAP_MAX_DELAY_MS &&
            Math.hypot(tapPoint.x - last.point.x, tapPoint.y - last.point.y) <
              DOUBLE_TAP_MAX_DIST_PX
          ) {
            lastTapRef.current = null;
            toggleZoom(tapPoint);
          } else {
            lastTapRef.current = { time: Date.now(), point: tapPoint };
          }
        }
      }
    }
    tapStartRef.current = null;
  }

  function handlePointerCancel(e: ReactPointerEvent<HTMLImageElement>) {
    pointersRef.current.delete(e.pointerId);
    tapStartRef.current = null;
    if (pointersRef.current.size === 0) {
      gestureModeRef.current = "idle";
      if (zoomScale.get() < 1.02) resetZoom();
      animate(dragY, 0, { type: "spring", stiffness: 500, damping: 40 });
    }
  }

  if (!mounted || !rendered) return null;

  const item = lastItem.current;
  if (!item) return null;
  const activeIndex = lastIndex.current;

  return createPortal(
    <div
      ref={containerRef}
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
      style={{ transitionDuration: `${CLOSE_ANIMATION_MS}ms`, touchAction: "none" }}
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

      {!naturalSize && (
        <div
          aria-hidden
          className="absolute inset-0 z-[5] flex items-center justify-center"
        >
          <div
            className="size-10 animate-spin rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, var(--grad-violet), var(--grad-fuchsia), var(--grad-orange), var(--grad-violet))",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            }}
          />
        </div>
      )}

      <motion.img
        key={item.src}
        ref={imgRef}
        src={item.src}
        alt={item.alt}
        draggable={false}
        onLoad={(e) => {
          const el = e.currentTarget;
          setNaturalSize({ width: el.naturalWidth, height: el.naturalHeight });
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: open && naturalSize ? 1 : 0 }}
        transition={{ duration: 0.22, ease: EASE }}
        style={{
          x: panX,
          y: combinedY,
          scale: displayScale,
          touchAction: "none",
          width: naturalSize?.width,
          height: naturalSize?.height,
          pointerEvents: naturalSize ? "auto" : "none",
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
        className={cn(
          "relative z-[5] shrink-0 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10",
          isZoomed ? "cursor-grab active:cursor-grabbing" : "cursor-zoom-in",
          item.frame === "phone" ? "rounded-[2.25rem]" : "rounded-lg sm:rounded-xl",
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
