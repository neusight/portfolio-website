export function PatentGradientDefs() {
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <linearGradient id="patent-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "var(--grad-violet)" }} />
          <stop offset="52%" style={{ stopColor: "var(--grad-fuchsia)" }} />
          <stop offset="100%" style={{ stopColor: "var(--grad-orange)" }} />
        </linearGradient>
      </defs>
    </svg>
  );
}
