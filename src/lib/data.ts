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
    title: "Directing UX strategy across a multi-client agency roster",
    client: "The Web and Marketing Bureau, LLC",
    year: "Oct 2020 — Apr 2021",
    role: "Senior User Experience Architect",
    category: "UX Architecture · Team Leadership",
    blurb:
      "Directed UX strategy across multiple client websites and applications, leading a team of designers to create intuitive, conversion-focused experiences for enterprise clients.",
    tags: ["UX strategy", "Team leadership", "Client partnership"],
    metric: { value: "3", label: "designers managed & mentored" },
    gradient: "warm",
    details: [
      {
        label: "UX strategy",
        body: "Directed UX strategy across multiple client websites and applications using Sketch and Figma.",
      },
      {
        label: "Team leadership",
        body: "Managed and mentored a team of 3 UI designers, driving quality, consistency, and professional growth.",
      },
      {
        label: "Client partnership",
        body: "Gathered requirements, defined project scope, and delivered solutions that exceeded client goals.",
      },
      {
        label: "Agile delivery",
        body: "Organized and led daily scrum meetings to ensure timely delivery and clear communication.",
      },
    ],
  },
  {
    slug: "belcan-aerospace",
    title: "Shipping mission-critical interfaces for aerospace clients",
    client: "Belcan",
    year: "Oct 2018 — Oct 2020",
    role: "Front End Developer / UX Engineer",
    category: "Front-End · UX Engineering",
    blurb:
      "Developed user interfaces and prototypes, collaborated with stakeholders, and owned QA testing to ensure high quality standards across internal and external web applications.",
    tags: ["UI development", "QA", "Agile delivery"],
    metric: { value: "2", label: "major aerospace apps launched" },
    gradient: "cool",
    details: [
      {
        label: "UI/UX development",
        body: "Designed and developed high-end client interfaces, ensuring intuitive and engaging experiences.",
      },
      {
        label: "Collaboration",
        body: "Partnered with business owners and developers on new software initiatives.",
      },
      {
        label: "Quality assurance",
        body: "Owned QA testing for internal and external applications, improving quality and reliability.",
      },
      {
        label: "Agile delivery",
        body: "Successfully launched two major aerospace applications through iterative agile sprints.",
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
