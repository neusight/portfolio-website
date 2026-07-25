import { SITE } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-border/70">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Designed and built with
          intent.
        </p>
        <a href="#top" className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
