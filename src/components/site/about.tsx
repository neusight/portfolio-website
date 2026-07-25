import { SKILLS } from "@/lib/data";
import { Reveal } from "@/components/site/reveal";

const MARQUEE_ITEMS = [
  "Figma",
  "Framer",
  "Linear",
  "React",
  "Tailwind CSS",
  "Arc",
  "Notion",
  "After Effects",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <span className="font-accent text-gradient text-lg italic">
            About
          </span>
          <h2 className="font-display mt-2 text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Nine years of turning ambiguity into shipped product.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I&rsquo;m a senior product designer who moves comfortably
              between strategy decks and component libraries. My favorite
              projects are the ones nobody has fully defined yet — new
              product lines, AI-native workflows, systems that have to hold
              together at scale.
            </p>
            <p>
              Before going deep on product, I spent years in brand and
              front-end development, which is why I obsess over the last
              10% most teams skip: motion, type rhythm, and the moment a
              product actually feels considered.
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
                Senior Product Designer, open to new roles
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-border/70 bg-card p-5"
              >
                <h3 className="font-display text-sm font-medium text-muted-foreground">
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

          <div className="relative mt-6 overflow-hidden rounded-2xl border border-border/70 bg-card py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-card to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-card to-transparent" />
            <div className="animate-marquee flex w-max gap-10">
              {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
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
      </div>
    </section>
  );
}
