export const SITE = {
  name: "Sean Watkins",
  role: "Senior Product Designer",
  location: "Cincinnati, OH · open to remote",
  availability: "Open to new roles, Q3 2026",
  email: "seankwatkins@gmail.com",
  blurb:
    "Strategic product designer and collaborator with 15+ years of experience building enterprise products, leading cross-functional teams, and leveraging AI to solve real business problems.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sean-watkins-7a176a36",
    },
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
    slug: "kroger-pricing",
    title: "Enterprise pricing experiences for a Fortune 500 retailer",
    client: "Kroger",
    year: "Oct 2022 — Present",
    category: "Enterprise Product Design · AI Innovation",
    blurb:
      "Leading enterprise pricing experiences used by merchandising organizations, partnering with Product, Engineering, Pricing Strategy, Data Science, and executives to define product vision and roadmap. Introduced AI-assisted workflows using Claude, ChatGPT, Copilot, and Figma to accelerate research, documentation, and design exploration.",
    tags: ["Design systems", "AI workflows", "Enterprise"],
    metric: { value: "AI-assisted", label: "research & design workflows" },
    gradient: "signature",
  },
  {
    slug: "climate-pros-design-system",
    title: "Building a design system — and the team process around it",
    client: "Climate Pros, LLC",
    year: "Apr 2021 — Oct 2022",
    category: "UX Design · Design Systems",
    blurb:
      "Designed and launched core web applications and the Climate Pros Design System from the ground up, establishing scalable UX processes and partnering closely with the Product Owner and Engineering through every sprint.",
    tags: ["0→1", "Design systems", "Agile"],
    metric: { value: "0→1", label: "design system built from scratch" },
    gradient: "cool",
  },
  {
    slug: "web-marketing-bureau-ux",
    title: "Directing UX strategy across a multi-client agency roster",
    client: "The Web and Marketing Bureau, LLC",
    year: "Oct 2020 — Apr 2021",
    category: "UX Architecture · Team Leadership",
    blurb:
      "Directed UX strategy across multiple client websites and applications, leading a team of designers to create intuitive, conversion-focused experiences for enterprise clients.",
    tags: ["UX strategy", "Team leadership", "Client partnership"],
    metric: { value: "3", label: "designers managed & mentored" },
    gradient: "warm",
  },
  {
    slug: "belcan-aerospace",
    title: "Shipping mission-critical interfaces for aerospace clients",
    client: "Belcan",
    year: "Oct 2018 — Oct 2020",
    category: "Front-End · UX Engineering",
    blurb:
      "Developed user interfaces and prototypes, collaborated with stakeholders, and owned QA testing to ensure high quality standards across internal and external web applications.",
    tags: ["UI development", "QA", "Agile delivery"],
    metric: { value: "2", label: "major aerospace apps launched" },
    gradient: "cool",
  },
];

export const SKILLS = [
  {
    category: "Craft",
    items: [
      "Enterprise product design",
      "Design systems & libraries",
      "Prototyping & interaction design",
      "Information architecture",
    ],
  },
  {
    category: "Strategy",
    items: [
      "Product strategy & roadmapping",
      "User research & insights",
      "Journey mapping & service design",
      "Stakeholder management",
    ],
  },
  {
    category: "AI + Leadership",
    items: [
      "Claude, ChatGPT & Copilot",
      "Prompt engineering",
      "AI workflow automation",
      "Executive communication",
    ],
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Frame the real problem",
    body: "Partner with Product, Engineering, and Data Science before opening Figma — most bad products solve the wrong problem beautifully.",
  },
  {
    step: "02",
    title: "Put AI to work",
    body: "Use Claude, ChatGPT, Copilot, and Figma AI to accelerate research, documentation, and exploration — without cutting corners on craft.",
  },
  {
    step: "03",
    title: "Build the system, not the screen",
    body: "Expand reusable components and UX patterns so the tenth flow ships as fast and consistently as the first.",
  },
  {
    step: "04",
    title: "Prove the business impact",
    body: "Translate complex workflows into intuitive experiences, then show the usability, adoption, and decision-making gains that follow.",
  },
];

export const PHILOSOPHY = {
  quote:
    "I bridge the gap between business strategy and user needs to create experiences that drive results, adoption, and long-term value.",
  attribution: "Sean Watkins",
};

export const TOOLS = [
  "Figma",
  "Claude",
  "ChatGPT",
  "Copilot",
  "Jira",
  "Miro",
  "Confluence",
  "Airtable",
  "Productboard",
  "Notion",
  "VS Code",
  "Power BI",
];

export const STATS = [
  { value: "15+", label: "years designing digital products" },
  { value: "7+", label: "enterprise platforms shipped" },
  { value: "10K+", label: "users impacted" },
  { value: "2x+", label: "productivity impact via AI + systems" },
];
