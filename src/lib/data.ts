export const SITE = {
  name: "Sean Watkins",
  role: "Senior Product Designer",
  location: "Based in the US · working worldwide",
  availability: "Open to new roles, Q3 2026",
  email: "hello@example.com",
  blurb:
    "I design systems-led products for teams that need to move fast without breaking trust — from 0-to-1 bets to the messy middle of scaling a platform.",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
    { label: "Read.cv", href: "https://read.cv" },
    { label: "X", href: "https://x.com" },
  ],
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: string;
  blurb: string;
  tags: string[];
  metric: { value: string; label: string };
  gradient: "signature" | "cool" | "warm";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "northwind-checkout",
    title: "Rebuilding checkout for a 9-figure marketplace",
    client: "Northwind Labs",
    year: "2025",
    category: "Product Design · Design Systems",
    blurb:
      "Led the redesign of a checkout flow used by 40k merchants, cutting steps from 7 to 3 and rebuilding it on a new token-based design system.",
    tags: ["0→1", "Design systems", "Growth"],
    metric: { value: "+18%", label: "checkout conversion" },
    gradient: "signature",
  },
  {
    slug: "arclight-copilot",
    title: "Designing an AI copilot for financial analysts",
    client: "Arclight",
    year: "2024–2025",
    category: "AI / ML Product",
    blurb:
      "Defined the interaction model for a copilot embedded in a legacy analyst workflow — from prompt affordances to trust and citation UX.",
    tags: ["AI UX", "0→1", "Enterprise"],
    metric: { value: "6 wks", label: "concept to GA" },
    gradient: "cool",
  },
  {
    slug: "ledger-mobile",
    title: "A mobile-first rebuild of a 12 year old dashboard",
    client: "Ledger & Co.",
    year: "2024",
    category: "Mobile · IA",
    blurb:
      "Untangled a decade of feature sprawl into a mobile-first information architecture, shipped as a native app with a 40-screen design system.",
    tags: ["Mobile", "IA", "Design systems"],
    metric: { value: "4.8★", label: "app store rating" },
    gradient: "warm",
  },
  {
    slug: "fieldnote-brand",
    title: "Repositioning a dev-tools brand for enterprise",
    client: "Fieldnote",
    year: "2023",
    category: "Brand · Web · Product",
    blurb:
      "Partnered with founders to move upmarket — new visual identity, marketing site, and the product polish to back it up in the first 90 days.",
    tags: ["Brand", "Marketing site", "Founder-led"],
    metric: { value: "3x", label: "enterprise pipeline" },
    gradient: "signature",
  },
];

export const SKILLS = [
  {
    category: "Craft",
    items: ["Interaction design", "Design systems", "Prototyping", "Motion & micro-interaction"],
  },
  {
    category: "Strategy",
    items: ["0→1 product bets", "Design ops", "Research synthesis", "Roadmapping"],
  },
  {
    category: "Tools",
    items: ["Figma", "Framer", "Linear", "React / Tailwind"],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Frame the real problem",
    body: "Sit with support tickets, sales calls, and data before opening Figma. Most bad products solve the wrong problem beautifully.",
  },
  {
    step: "02",
    title: "Sketch wide, then narrow",
    body: "Explore more directions than feel comfortable, then kill most of them fast — in the room, with engineering and PM in the loop.",
  },
  {
    step: "03",
    title: "Build the system, not the screen",
    body: "Every flow becomes reusable patterns and tokens, so the tenth feature ships as fast as the first.",
  },
  {
    step: "04",
    title: "Ship, measure, cut",
    body: "Instrument what matters, watch it in the wild, and be willing to cut the thing you designed if the data says so.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Sean is the rare designer who can sit in a boardroom and a Figma file with the same fluency. The checkout work paid for itself in six weeks.",
    name: "Priya Nandan",
    title: "VP Product, Northwind Labs",
  },
  {
    quote:
      "We handed Sean an impossible AI UX problem and got back something analysts actually trust. That's the whole ballgame.",
    name: "Marcus Feld",
    title: "Head of Design, Arclight",
  },
  {
    quote:
      "Every system Sean ships outlives the project. Two years later teams are still building on the same foundations.",
    name: "Elena Cho",
    title: "CTO, Ledger & Co.",
  },
];

export const STATS = [
  { value: "9+", label: "years in product design" },
  { value: "30+", label: "shipped products" },
  { value: "4", label: "design systems built from zero" },
  { value: "$120M+", label: "revenue influenced" },
];
