"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { SITE } from "@/lib/data";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function MenuIcon({ open }: { open: boolean }) {
  const bar = "absolute left-0 h-0.5 w-6 origin-center rounded-full";
  const gradient = { background: "var(--gradient-signature)" };

  return (
    <span className="relative block h-[18px] w-6">
      <motion.span
        className={`${bar} top-0`}
        style={gradient}
        animate={open ? { y: 8, rotate: 45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      />
      <motion.span
        className={`${bar} top-2`}
        style={gradient}
        animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.2, ease: EASE }}
      />
      <motion.span
        className={`${bar} top-4`}
        style={gradient}
        animate={open ? { y: -8, rotate: -45 } : { y: 0, rotate: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      />
    </span>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  function handleLinkClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) {
    event.preventDefault();
    setOpen(false);

    // Radix releases its body pointer-events lock once the close transition
    // actually finishes — that isn't on a fixed clock, so wait for the real
    // signal instead of guessing a delay (a guess-based timeout raced the
    // lock and silently ate the scroll before — see AGENTS.md gotchas).
    let done = false;
    const scrollToTarget = () => {
      if (done) return;
      done = true;
      observer.disconnect();
      document.querySelector(href)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, "", href);
    };

    const observer = new MutationObserver(() => {
      if (document.body.style.pointerEvents !== "none") {
        scrollToTarget();
      }
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });

    window.setTimeout(scrollToTarget, 600);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-black">
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
        <a
          href="#top"
          aria-label="Sean Watkins — home"
          className="col-start-1 justify-self-start"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/signature-mark.png"
            alt="Sean Watkins"
            className="mix-blend-screen h-8 w-auto"
          />
        </a>

        <nav className="col-start-2 hidden items-center gap-8 justify-self-center md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="col-start-3 flex items-center justify-self-end">
          <div className="hidden md:block">
            <Button asChild size="sm" className="gap-1.5">
              <a href={`mailto:${SITE.email}`}>
                Let&rsquo;s talk
                <ArrowUpRight className="size-3.5" />
              </a>
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <div className="md:hidden">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
              >
                <MenuIcon open={open} />
              </Button>
            </div>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="overflow-hidden bg-black"
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col gap-1 px-4 pt-6">
                {LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(event) => handleLinkClick(event, link.href)}
                    className="group relative rounded-md px-2 py-3 text-lg text-foreground transition-colors hover:bg-muted"
                  >
                    <span
                      aria-hidden
                      className="absolute top-1/2 left-0 h-0 w-[3px] -translate-y-1/2 rounded-full transition-all duration-300 group-hover:h-6"
                      style={{ background: "var(--gradient-signature)" }}
                    />
                    <span className="pl-2">{link.label}</span>
                  </a>
                ))}
              </nav>
              <div className="mt-auto px-4 pb-4">
                <SheetClose asChild>
                  <Button asChild className="w-full gap-1.5">
                    <a href={`mailto:${SITE.email}`}>
                      Let&rsquo;s talk
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
