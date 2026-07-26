import { SKILLS, STATS, TOOLS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-28">
      <Reveal>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              About
            </span>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              15+ years turning ambiguity into shipped enterprise product.
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-muted-foreground">
              <p>
                I&rsquo;m a strategic product designer and collaborator who
                has spent the last 15+ years building enterprise products,
                leading cross-functional teams, and leveraging AI to solve
                real business problems. Most recently I&rsquo;ve led
                enterprise pricing experiences at Kroger, partnering with
                Product, Engineering, Pricing Strategy, Data Science, and
                executives to define product vision and roadmap.
              </p>
              <p>
                &ldquo;I bridge the gap between business strategy and user
                needs to create experiences that drive results, adoption,
                and long-term value.&rdquo; That&rsquo;s shown up as design
                systems built from zero, AI-assisted workflows that speed up
                research and documentation, and enterprise UX that holds
                together at scale.
              </p>
              <p>
                I operate beyond the boundaries of a typical product team —
                bringing leadership, systems-level thinking, and a bias for
                building over waiting. When an organization has a gap in its
                toolkit, I close it myself, standing up in-house tooling
                instead of stalling on procurement. And in fast-moving,
                high-stakes environments, time isn&rsquo;t a constraint I
                manage around — it&rsquo;s a discipline I own, which is why
                the initiatives I lead ship on schedule.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div
                aria-hidden
                className="relative flex size-16 items-center justify-center rounded-2xl text-lg font-semibold text-white"
                style={{ background: "var(--gradient-signature)" }}
              >
                SW
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
              </div>
              <div className="text-sm">
                <div className="font-medium">Sean Watkins</div>
                <div className="text-muted-foreground">
                  Senior Product Designer · Cincinnati, OH
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-6 -z-10 rounded-[2.5rem] opacity-40 blur-3xl"
              style={{ background: "var(--gradient-signature)" }}
            />
            <img
              src="/about-graphic.png"
              alt="Sean's approach: AI to design to develop"
              className="w-full rounded-3xl border border-border/70 shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border/70 pt-10 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {stat.value}
              </dd>
              <div className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal delay={0.12} className="mt-14 border-t border-border/70 pt-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-border/70 bg-card p-5"
            >
              <h3 className="text-sm font-semibold tracking-[0.1em] text-muted-foreground uppercase">
                {group.category}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <span className="mt-10 block text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          Toolkit
        </span>

        <div className="relative mt-4 overflow-hidden rounded-2xl border border-border/70 bg-card py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
          <div className="animate-marquee flex w-max gap-10">
            {[...TOOLS, ...TOOLS].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-sm text-muted-foreground"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
