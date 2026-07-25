import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GradientMesh } from "@/components/site/gradient-mesh";
import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-border/70 bg-card px-6 py-16 text-center sm:px-16 sm:py-24">
          <GradientMesh className="opacity-50" />
          <div className="relative">
            <span className="font-accent text-gradient text-lg italic">
              Let&rsquo;s build something worth shipping
            </span>
            <h2 className="font-display mx-auto mt-3 max-w-2xl text-4xl font-medium tracking-tight text-balance sm:text-5xl">
              Hiring a senior product designer?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              {SITE.availability}. I&rsquo;m happiest on teams tackling
              genuinely hard product problems — say hello.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="gap-1.5 px-6">
                <a href={`mailto:${SITE.email}`}>
                  {SITE.email}
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {SITE.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-foreground"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
