import { Palette, Code2, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const PILLARS = [
  {
    icon: Palette,
    title: "Design",
    body: "Human-centered product design across web, mobile, and enterprise systems — from discovery through pixel-perfect execution.",
  },
  {
    icon: Code2,
    title: "Develop",
    body: "Front-end engineering chops to turn designs into working, production-ready software — not just static mockups handed off and hoped for.",
  },
  {
    icon: Sparkles,
    title: "Innovate with AI",
    body: "AI-assisted workflows — Claude, ChatGPT, Copilot, Figma AI — that accelerate research, documentation, and delivery without cutting corners on craft.",
  },
];

export function ValueProp() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Design + Engineering + AI
        </span>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          I don&rsquo;t just design solutions — I help build them.
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          I&rsquo;m revolutionizing how enterprise teams work by pairing
          product design with hands-on front-end development and modern AI
          tooling, so what ships is solid, enterprise-ready software — not
          just a Figma file.
        </p>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <Reveal
            key={pillar.title}
            delay={i * 0.08}
            className="rounded-2xl border border-border/70 bg-card p-6"
          >
            <pillar.icon className="mx-auto size-5 text-muted-foreground" />
            <h3 className="mt-4 text-center text-lg font-semibold">
              {pillar.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {pillar.body}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
