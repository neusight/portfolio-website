import { Download, Mail } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { LinkedinIcon } from "@/components/site/linkedin-icon";
import { SITE } from "@/lib/data";

function MailIcon({ className }: { className?: string }) {
  return <Mail className={className} stroke="url(#patent-gradient)" />;
}

function ResumeIcon({ className }: { className?: string }) {
  return <Download className={className} stroke="url(#patent-gradient)" />;
}

const LINKS = [
  {
    label: "LinkedIn",
    href: SITE.socials.find((s) => s.label === "LinkedIn")?.href ?? "#",
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${SITE.email}`,
    icon: MailIcon,
    external: false,
  },
  {
    label: "Resume",
    href: "/resume.pdf",
    icon: ResumeIcon,
    external: false,
    download: "Sean-Watkins-Resume.pdf",
  },
];

export function Socials() {
  return (
    <section
      aria-label="Elsewhere"
      className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-24"
    >
      <Reveal>
        <div className="flex flex-col items-center gap-6 border-t border-border/70 pt-14 text-center">
          <span className="text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Elsewhere
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noreferrer" } : {})}
                {...(link.download ? { download: link.download } : {})}
                className="group relative rounded-full p-px transition-transform duration-300 hover:-translate-y-0.5"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-3 -z-10 rounded-full opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60"
                  style={{ background: "var(--gradient-signature)" }}
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full border border-border/70 transition-opacity duration-300 group-hover:opacity-0"
                />
                <span
                  aria-hidden
                  className="absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "var(--gradient-signature)" }}
                />
                <span className="relative inline-flex items-center gap-2.5 rounded-full bg-card px-5 py-3 text-sm font-medium">
                  <link.icon className="size-4" />
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
