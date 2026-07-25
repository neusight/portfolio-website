import { GradientMesh } from "@/components/site/gradient-mesh";
import { Reveal } from "@/components/site/reveal";
import { ContactForm } from "@/components/site/contact-form";
import { SITE } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-28">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-border/70 bg-card px-6 py-16 text-center sm:px-16 sm:py-24">
          <GradientMesh className="opacity-50" />
          <div className="relative">
            <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              Let&rsquo;s build something worth shipping
            </span>
            <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Hiring a senior product designer?
            </h2>
            <p className="mx-auto mt-5 max-w-md text-muted-foreground">
              {SITE.availability}. I&rsquo;m happiest on teams tackling
              genuinely hard product problems — say hello.
            </p>

            <div className="mx-auto mt-10 max-w-2xl">
              <ContactForm />
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
