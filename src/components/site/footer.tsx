import { Reveal } from "@/components/site/reveal";
import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative">
      <div className="mx-auto flex max-w-6xl justify-center px-5 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12">
        <Reveal>
          <div
            role="img"
            aria-label="Sean K. Watkins — Product Design Portfolio"
            className="w-48 sm:w-64"
            style={{
              aspectRatio: "1247 / 564",
              backgroundImage: "var(--gradient-signature)",
              WebkitMaskImage: "url(/footer-mark.png)",
              maskImage: "url(/footer-mark.png)",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskPosition: "center",
            }}
          />
        </Reveal>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. Designed and built with
            intent.
          </p>
          <a href="#top" className="transition-colors hover:text-foreground">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
