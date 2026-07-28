export const SITE = {
  name: "Sean Watkins",
  role: "Senior Product Designer",
  location: "Cincinnati, OH",
  availability: "Open to new roles, Q3 2026",
  email: "seankwatkins@gmail.com",
  blurb:
    "Strategic product designer and collaborator with 15+ years of experience building enterprise products, leading cross-functional teams, and leveraging AI to solve real business problems.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/seankwatkins/",
    },
  ],
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  year: string;
  role: string;
  category: string;
  blurb: string;
  tags: string[];
  metric: { value: string; label: string };
  gradient: "signature" | "cool" | "warm";
  details: { label: string; body: string }[];
  logo?: { src: string; alt: string; plate?: boolean };
  mark?: { src: string; alt: string };
  screens?: { src: string; alt: string; title: string; body: string }[];
  screensLayout?: "browser" | "phone";
  map?: { src: string; alt: string; title: string; body: string };
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "kroger-pricing",
    title: "Enterprise pricing experiences for a Fortune 500 retailer",
    client: "Kroger",
    year: "Oct 2022 — Present",
    role: "Senior Product Designer",
    category: "Enterprise Product Design · AI Innovation",
    blurb:
      "Leading enterprise pricing experiences used by merchandising organizations, partnering with Product, Engineering, Pricing Strategy, Data Science, and executives to define product vision and roadmap. Introduced AI-assisted workflows using Claude, ChatGPT, Copilot, and Figma to accelerate research, documentation, and design exploration.",
    tags: ["Design systems", "AI workflows", "Enterprise"],
    metric: { value: "AI-assisted", label: "research & design workflows" },
    gradient: "signature",
    details: [
      {
        label: "Product strategy",
        body: "Led enterprise pricing experiences supporting merchandising organizations, partnering with Product Management, Engineering, Pricing Strategy, and executives to define future product direction.",
      },
      {
        label: "AI innovation",
        body: "Introduced AI-assisted workflows using Claude, ChatGPT, Copilot, and Figma that accelerated research, documentation, and design exploration while improving team efficiency.",
      },
      {
        label: "Systems thinking",
        body: "Expanded enterprise design systems, reusable components, and UX patterns that improved consistency across pricing applications.",
      },
      {
        label: "Business impact",
        body: "Translated complex pricing workflows into intuitive experiences that improved usability, collaboration, and decision making.",
      },
    ],
  },
  {
    slug: "climate-pros-design-system",
    title: "Building a design system — and the team process around it",
    client: "Climate Pros, LLC",
    year: "Apr 2021 — Oct 2022",
    role: "Senior User Experience Designer",
    category: "UX Design · Design Systems",
    blurb:
      "Designed and launched core web applications and the Climate Pros Design System from the ground up, establishing scalable UX processes and partnering closely with the Product Owner and Engineering through every sprint.",
    tags: ["0→1", "Design systems", "Agile"],
    metric: { value: "0→1", label: "design system built from scratch" },
    gradient: "cool",
    logo: { src: "/watchtower-logo-white.png", alt: "WatchTower, powered by Climate Pros" },
    mark: { src: "/watchtower-mark-white.png", alt: "" },
    screens: [
      {
        src: "/climate-pros-dashboard.png",
        alt: "WatchTower account dashboard showing location health scores, alarm resolution, work orders, and a location health map",
        title: "Account dashboard",
        body: "The landing view for facilities teams — location health scores, alarm and work order resolution, and the most common alarm and intelligence events, all rolled up across every site with a map view for drilling into a single location.",
      },
      {
        src: "/climate-pros-reports.png",
        alt: "WatchTower account reports flow with a modal for creating a new scheduled report",
        title: "Account reports",
        body: "A guided flow for building recurring compliance reports — selecting recipients, a location, and a report type (like FDA hourly temperature logs) without leaving the page.",
      },
    ],
    map: {
      src: "/climate-pros-intelligence-map.png",
      alt: "Flow diagram mapping the WatchTower Intelligence module, from location selection through refrigerant leak detection and pressure event drill-down",
      title: "Mapping the intelligence layer",
      body: "Before touching Figma, I mapped how location intelligence should actually work — how a user moves from the dashboard into the Location Health Score and Refrigerant Leak Detection modules, and how the pressure-events table drills down into device-level charts. This flow became the shared reference for engineering and product throughout the build.",
    },
    details: [
      {
        label: "End-to-end design",
        body: "Led design from discovery through production for mission-critical web applications across the organization.",
      },
      {
        label: "Design system",
        body: "Built and maintained the Climate Pros Design System in Figma, creating a foundation for consistency and scale.",
      },
      {
        label: "Agile collaboration",
        body: "Partnered with the product owner and engineering team through sprints to deliver features on time and on target.",
      },
      {
        label: "Stakeholder alignment",
        body: "Facilitated stakeholder meetings and usability testing to ensure product awareness and alignment across teams.",
      },
    ],
  },
  {
    slug: "web-marketing-bureau-ux",
    title:
      "Architecting a 0→1 mobile app — from a single flowchart to a 30-screen production system",
    client: "The Web and Marketing Bureau, LLC",
    year: "Oct 2020 — Apr 2021",
    role: "Senior User Experience Architect",
    category: "UX Architecture · 0→1 Mobile Product Design",
    blurb:
      "Owned end-to-end UX architecture for Chattic, a community-driven app for crowdsourcing the value of secondhand finds. Mapped the complete application flow before a single screen was drawn, then designed and specified a 30+ screen production system — onboarding, a social valuation feed, guided item capture, and appraiser matching — while directing a team of designers across the agency's broader client roster.",
    tags: ["0→1", "Mobile UX", "Team leadership"],
    metric: { value: "30+", label: "screens architected end-to-end" },
    gradient: "warm",
    logo: { src: "/chattic-logo.png", alt: "Chattic", plate: true },
    screensLayout: "phone",
    screens: [
      {
        src: "/chattic-splash.png",
        alt: "Chattic splash screen with the brand mark on a blue gradient background",
        title: "Splash & brand entry",
        body: "The first moment of the experience — the mark animates in, sets tone, and hands off to the home feed in under two seconds.",
      },
      {
        src: "/chattic-feeds.png",
        alt: "Chattic social feed showing community members asking what their found items are worth",
        title: "Social valuation feed",
        body: "The core loop: a member posts a found or inherited item and the community weighs in on what it's worth — part marketplace, part social feed.",
      },
      {
        src: "/chattic-post.png",
        alt: "Chattic item posting flow with fields for item details and a post button",
        title: "Item capture & posting",
        body: "A guided capture flow — photograph the item, add context, and flag whether you're selling or just curious — before it goes live to the community.",
      },
    ],
    map: {
      src: "/chattic-journey-map.png",
      alt: "Application flowchart for Chattic mapping the splash screen, home screen navigation, and every core user path",
      title: "Mapping the app before designing it",
      body: "Before any screen took shape, I flowcharted the full application — every nav path, state, and decision point — so the client could sign off on scope before design began. That map became the backbone for the 30+ screen system that followed.",
    },
    details: [
      {
        label: "Product architecture",
        body: "Mapped the complete application flow — navigation, screen states, and interaction logic — turning an ambiguous app concept into a buildable specification.",
      },
      {
        label: "System design",
        body: "Designed a 30+ screen production system in Adobe XD using reusable components and grids, covering onboarding, the social feed, item capture, and appraiser matching.",
      },
      {
        label: "Brand & UI",
        body: "Translated the client's brand identity into a cohesive mobile UI — typography, color, and iconography consistent across every screen and state.",
      },
      {
        label: "Team leadership",
        body: "Directed and mentored a team of 3 UI designers across the agency's client roster, reviewing work for quality and consistency at delivery.",
      },
    ],
  },
  {
    slug: "belcan-aerospace",
    title:
      "Building a real-time production dashboard for GE's jet engine manufacturing line",
    client: "Belcan",
    year: "Oct 2018 — Oct 2020",
    role: "Front End Developer / UX Engineer",
    category: "Front-End Engineering · Manufacturing UX",
    blurb:
      "Built the GE Digital Cockpit, a real-time work-in-progress tracker for GE9X jet engine component manufacturing, translating a 25+ station production line into a dashboard shop-floor operators could read at a glance. Iterated the interface from a flat, single-color action layout to a severity-coded system, and owned QA across internal and external releases.",
    tags: ["Front-end engineering", "Manufacturing UX", "QA"],
    metric: { value: "25+", label: "production stations tracked live" },
    gradient: "cool",
    logo: { src: "/ge-logo-mark.png", alt: "GE", plate: true },
    mark: { src: "/ge-logo-mark.png", alt: "" },
    screens: [
      {
        src: "/ge-cockpit-dashboard.png",
        alt: "GE Digital Cockpit dashboard with color-coded status cards and a live WIP tracker chart across every production station",
        title: "Color-coded status cards",
        body: "The shipped design — quick-action cards color-coded by severity (blue, amber, red, green) so an operator can gauge line health without reading a label, backed by a live WIP tracker spanning every station on the GE9X production line.",
      },
      {
        src: "/ge-cockpit-buttons.png",
        alt: "Earlier version of the GE Digital Cockpit dashboard with all quick-action cards in a single blue color",
        title: "Where it started",
        body: "The original layout used a single accent color for every action card. Recoloring each card by severity turned a glance-and-guess interface into one operators could scan in under a second — a small change with an outsized impact on shop-floor speed.",
      },
    ],
    details: [
      {
        label: "Front-end engineering",
        body: "Built the GE Digital Cockpit end-to-end, rendering live WIP data across 25+ production stations for GE's GE9X engine program.",
      },
      {
        label: "Interaction design",
        body: "Iterated the quick-action cards from a single-color layout to a severity-coded system, giving operators an at-a-glance read on messages, parts in WIP, parts out of WIP, and completions.",
      },
      {
        label: "Quality assurance",
        body: "Owned QA testing across internal and external releases, catching regressions before they reached the shop floor.",
      },
      {
        label: "Cross-functional delivery",
        body: "Partnered with GE stakeholders and Belcan engineering through agile sprints to ship two major aerospace applications.",
      },
    ],
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
      "Delivery & time management",
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

export const TESTIMONIALS = [
  {
    quote:
      "Sean is a very motivated, passionate, and proactive designer. I was always impressed by his ability to build relationships with stakeholders and become a trusted partner. Sean is always open to feedback and looking for opportunities to make his designs better for his end users and the business. He also has experience in front-end development and project management, which allowed him to contribute value to the team beyond product design. He worked in a very complex space within Kroger — pricing systems — and did a great job managing the complexity and strong personalities.",
    name: "Brooke Neace",
    title: "Principal Designer, AT&T — managed Sean directly at Kroger",
  },
  {
    quote:
      "One of the best UI/UX and product designers I've had the honor of working with. Once he's on your team, your UI stories go by in a breeze, and he proactively advises on best practices, layouts, components — you name it. He's the complete package on the product side and an absolute pleasure to work alongside.",
    name: "Ruben Singh Dangol",
    title: "Full Stack Developer — Spring Boot, SQL, Angular, Kafka, React",
  },
  {
    quote:
      "Sean is my go-to resource for technical & digital projects. He's always willing to help with any request for our clients & offers excellent insights to complete projects on time & in budget. Sean is a candidate you can rely on & I would (and do) recommend his services to anyone.",
    name: "Kristen Williams-Mueller",
    title: "Results-driven consultant, business & digital strategy",
  },
];

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
