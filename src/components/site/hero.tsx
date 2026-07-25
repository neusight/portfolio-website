"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "@/components/site/gradient-mesh";
import { SITE, STATS } from "@/lib/data";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const handlePointerMove = (event: React.MouseEvent<HTMLElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handlePointerMove}
      className="relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden pt-16"
      style={
        {
          "--spot-x": "50%",
          "--spot-y": "20%",
        } as React.CSSProperties
      }
    >
      <GradientMesh className="opacity-80" />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(600px circle at var(--spot-x) var(--spot-y), color-mix(in oklch, var(--grad-violet) 18%, transparent), transparent 70%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/60 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
          </span>
          {SITE.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-6 max-w-4xl text-5xl leading-[1.04] font-medium tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Product design that turns{" "}
          <span className="font-accent text-gradient italic">complexity</span>{" "}
          into products people trust.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 max-w-xl text-lg text-muted-foreground"
        >
          {SITE.blurb} Currently {SITE.role.toLowerCase()} focused on 0→1
          bets, design systems, and the occasional impossible AI problem.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Button asChild size="lg" className="gap-1.5 px-5">
            <a href="#work">
              View selected work
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-1.5 px-5">
            <a href={`mailto:${SITE.email}`}>
              <Sparkles className="size-4" />
              Start a conversation
            </a>
          </Button>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                {stat.value}
              </dd>
              <div className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.dl>
      </div>

      <motion.a
        href="#work"
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground sm:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
