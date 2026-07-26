"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-black pt-16 pb-12"
    >
      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 text-center sm:px-8">
        <motion.img
          src="/hero-header.png"
          alt="Sean K. Watkins — Design, AI, Innovate"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mix-blend-screen h-auto w-full max-w-md sm:max-w-xl lg:max-w-2xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase"
        >
          Design <span className="text-gradient">•</span>{" "}
          <span className="text-gradient">AI</span>{" "}
          <span className="text-gradient">•</span> Innovate
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-sm tracking-[0.2em] text-muted-foreground uppercase"
        >
          {SITE.role} · {SITE.location}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
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

        <motion.a
          href="#work"
          aria-label="Scroll to work"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 hidden flex-col items-center gap-2 text-xs text-muted-foreground sm:flex"
        >
          <span>Scroll</span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-3.5" />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
