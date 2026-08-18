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
  liveUrl?: string;
  badge?: string;
};

export const MYOURLY_STUDY: CaseStudy = {
  slug: "myourly",
  title: "Ourly: coordination for co-parenting families, built solo end to end",
  client: "Independent",
  year: "2026",
  role: "Founder · Designer · Engineer",
  category: "0→1 · Personal Product",
  blurb:
    "A shared calendar, message thread, and expense ledger for co-parents, designed and built entirely on my own from product concept through a live, deployed multi-tenant application. Not client work: my own idea, my own code, running in production today.",
  tags: ["0→1", "Full-stack", "Family tech"],
  metric: { value: "Live", label: "solo-built & in production" },
  gradient: "cool",
  liveUrl: "https://myourly.app",
  badge: "Live product",
  logo: { src: "/myourly-lockup.png", alt: "Ourly", plate: true },
  mark: { src: "/myourly-icon.png", alt: "" },
  screens: [
    {
      src: "/myourly-calendar.png",
      alt: "Ourly shared calendar showing color-coded events per parent, including custody weekends, school pickups, and open houses",
      title: "A shared custody calendar",
      body: "Every parent gets their own color; pickups, custody weekends, and school events all live on one calendar instead of scattered across texts and separate apps.",
    },
    {
      src: "/myourly-ledger.png",
      alt: "Ourly shared ledger showing a $60 lunch expense request with approval status, and a form for requesting a new split",
      title: "Splitting shared expenses",
      body: "Request a split, tag who owes what, attach a receipt, and track approval. It replaces spreadsheet math and 'did you get my Venmo' texts with an auditable trail.",
    },
    {
      src: "/myourly-admin.png",
      alt: "Ourly Family Admin screen for managing family members, permissions, kids, and invites",
      title: "Family Admin",
      body: "Manage who has access, add kids so they show up as taggable options on the calendar, and invite the other household in, all from one settings surface.",
    },
    {
      src: "/myourly-stats.png",
      alt: "Ourly owner-only stats dashboard showing aggregate family, user, event, message, and expense counts with no individual names or content exposed",
      title: "Operating it as a real product",
      body: "Because this is a real multi-tenant app and not a personal script, there's an owner-only stats view for tracking adoption across every family account, deliberately stripped of message content, expense detail, and individual names.",
    },
  ],
  details: [
    {
      label: "The problem",
      body: "Coordinating pickups, school events, and shared costs across two households usually means the same information fragmented across texts, shared docs, and apps that weren't built for the job. This one is personal to me.",
    },
    {
      label: "What I built",
      body: "Designed and built Ourly end to end, solo: a shared calendar with per-parent color coding, a permanent family message thread, an expense-splitting ledger with request/approve flows, and family-admin controls for members and kids.",
    },
    {
      label: "Full-stack ownership",
      body: "Owned every layer myself: product decisions, UI design, and the code behind it, from auth and the multi-tenant data model to the live, deployed application at myourly.app.",
    },
    {
      label: "Shipping and operating it",
      body: "Live in production today, with its own owner-facing analytics for monitoring adoption across every family using it. Not a prototype sitting in Figma: a real running service.",
    },
  ],
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
    logo: {
      src: "/kroger-pricing-systems-mark.svg",
      alt: "A hub-and-spoke node diagram representing the many pricing workflows, teams, and data sources unified under one platform",
    },
    mark: { src: "/kroger-k-mark-photo-white.png", alt: "" },
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
    slug: "kroger-upmost-pricing",
    title: "Moving competitive price reviews from periodic to near-continuous",
    client: "Kroger",
    year: "Oct 2022 — Present",
    role: "Senior Product Designer",
    category: "Enterprise Product Design · Competitive Pricing",
    blurb:
      "Designed Upmost Pricing, a review workflow that raises the cadence of competitive price checks, surfacing suggested price actions, flagged issues, and execution status by product group so merchants can act the same day a competitor moves, instead of waiting on the next periodic cycle.",
    tags: ["Competitive pricing", "Enterprise", "Workflow design"],
    metric: { value: "Higher cadence", label: "competitive price reviews" },
    gradient: "warm",
    logo: {
      src: "/kroger-upmost-cadence-mark.svg",
      alt: "A row of tick marks spreading from sparse to tight, representing price reviews moving from periodic to near-continuous",
    },
    mark: { src: "/kroger-k-mark-photo-white.png", alt: "" },
    screens: [
      {
        src: "/kroger-upmost-program-hold.png",
        alt: "Upmost Pricing 'Program Hold' review screen showing three product groups with competitor and strategy variance, suggested price actions, flagged issues, and execution status",
        title: "Program Hold review queue",
        body: "The core review surface: each held product group shows how far Kroger's price sits from competitors and strategy, a suggested price action, and how many issues need resolving before it can move, so a merchant can clear a queue in minutes instead of days.",
      },
    ],
    details: [
      {
        label: "The gap",
        body: "Competitive price checks ran on a slow, periodic cycle. By the time a price change worked its way through review, competitors had often already moved again, leaving Kroger's shelf price stale.",
      },
      {
        label: "Design approach",
        body: "Designed the Program Hold review queue around suggested price actions, flagged issues, and execution status per product group, so merchants could see what changed and act the same day rather than batching decisions weekly.",
      },
      {
        label: "Systems thinking",
        body: "Built on the same enterprise pricing design system used across the broader Kroger pricing suite, keeping status colors, action patterns, and table conventions consistent for merchants moving between tools.",
      },
      {
        label: "Business impact",
        body: "Shortened the distance between a competitor's price move and Kroger's response, giving merchandising teams a faster, more confident path to staying in position on price.",
      },
    ],
  },
  {
    slug: "kroger-competitive-distance-dashboard",
    title: "Defining which competitors actually belong in the price comparison",
    client: "Kroger",
    year: "Oct 2022 — Present",
    role: "Senior Product Designer",
    category: "Enterprise Product Design · Rules Engine",
    blurb:
      "Designed the Competitive Distance Dashboard, part of Rules Studio, so pricing teams can configure drive-time thresholds globally, by division, or by individual competitor, and see the resulting store-to-store network on a map, keeping only competitors within a meaningful driving distance in the price comparison.",
    tags: ["Rules engine", "Enterprise", "Data visualization"],
    metric: { value: "500K+", label: "store pairs analyzed nationwide" },
    gradient: "signature",
    logo: {
      src: "/kroger-competitive-distance-radius-mark.svg",
      alt: "Concentric rings radiating from a center point, representing drive-time distance thresholds around a store",
    },
    mark: { src: "/kroger-k-mark-photo-white.png", alt: "" },
    screens: [
      {
        src: "/kroger-competitive-distance-thresholds.png",
        alt: "Threshold Configuration screen showing global, division, and competitor-level drive-time thresholds with approval status and effective dates",
        title: "Threshold configuration",
        body: "Global default, division-level, and competitor-specific drive-time thresholds, each with its own approval trail. The most specific rule always wins, so a pricing analyst can see exactly why a store pair is or isn't in play.",
      },
      {
        src: "/kroger-competitive-distance-network-map.png",
        alt: "Network Map screen showing a store's competitor connections color-coded by drive time, with filters for region, market reference, and status",
        title: "Network map",
        body: "The same thresholds plotted on a map: each line is a store-to-store connection color-coded by drive time, so a reviewer can visually confirm the rules are producing a sensible competitive set before signing off.",
      },
    ],
    details: [
      {
        label: "The problem",
        body: "Which competitor stores actually mattered for a price comparison was inconsistent. Straight-line distance doesn't reflect how customers really shop, and there was no shared, auditable rule for where to draw the line.",
      },
      {
        label: "Design approach",
        body: "Designed a threshold hierarchy of global default, division overrides, and competitor overrides, with the most specific rule always winning, plus a map view so a reviewer could visually sanity-check the network before approving it.",
      },
      {
        label: "Systems thinking",
        body: "Built as a shared capability inside Rules Studio, using the same configuration table and approval patterns as the platform's other rule types, so pricing analysts already familiar with the tool needed no extra onboarding.",
      },
      {
        label: "Business impact",
        body: "Gave pricing teams a defensible, auditable answer to 'why is this competitor in the comparison,' replacing ad hoc judgment calls with a rule anyone could inspect and approve.",
      },
    ],
  },
  {
    slug: "kroger-figma-training",
    title: "Lifting the team up with hands-on Figma training",
    client: "Kroger",
    year: "Oct 2022 — Present",
    role: "Senior Product Designer",
    category: "Employee Empowerment · Training",
    blurb:
      "Led a hands-on Figma training to close the gap between designers who already lived in the tool and teammates who didn't, walking the room through the Table Builder plugin so anyone could turn raw spreadsheet data into a production-ready table in seconds. Investing in the people around me has always mattered as much as the pixels: helping teammates get comfortable, capable, and confident in the tools they use every day.",
    tags: ["Leadership", "Mentorship", "Figma training"],
    metric: { value: "Team-wide", label: "Figma fluency" },
    gradient: "warm",
    logo: {
      src: "/kroger-training-lift-mark.svg",
      alt: "Several rays rising and fanning outward from a single shared point, each ending in a bright node, representing individuals growing from one shared training moment",
    },
    mark: { src: "/kroger-k-mark-photo-white.png", alt: "" },
    screens: [
      {
        src: "/kroger-figma-training-1.png",
        alt: "Training deck title slide, 'Table Trickery: Making your design life easier one table at a time'",
        title: "Setting the stage",
        body: "Opened with a clear promise, not a feature list. This session was going to make one specific, everyday pain point disappear: building tables in Figma by hand.",
      },
      {
        src: "/kroger-figma-training-2.png",
        alt: "Training deck slide introducing the Table Builder Figma plugin, showing its plugin page with 31.7k users",
        title: "Introducing Table Builder",
        body: "Introduced the plugin that does the heavy lifting: paste in spreadsheet data and it generates a fully built, real Figma table in seconds instead of minutes of manual cell-by-cell work.",
      },
      {
        src: "/kroger-figma-training-3.png",
        alt: "Training deck slide showing an Excel spreadsheet and copy/paste keyboard shortcuts",
        title: "Step one: copy the data",
        body: "Walked through the workflow live, starting from where everyone already was: switch to Excel, select the data, copy it. No new habits to learn before the payoff arrives.",
      },
      {
        src: "/kroger-figma-training-4.png",
        alt: "Training deck slide showing the Figma right-click menu with Plugins > Table Builder > Generate new table",
        title: "Step two: generate the table",
        body: "Right-click the table cell component, choose Plugins > Table Builder > Generate new table, and the room watched a blank component turn into a populated table in real time.",
      },
    ],
    details: [
      {
        label: "Leading by lifting others up",
        body: "Growth on a team comes from investing in the people, not just the work. I treat mentorship and enablement as core to being a senior designer, not a side project.",
      },
      {
        label: "Meeting people where they are",
        body: "Built the session around a real, relatable pain point instead of a generic feature tour, so it landed for teammates regardless of how much Figma experience they already had.",
      },
      {
        label: "Hands-on, not theoretical",
        body: "Walked the room through the workflow live, step by step: copy data from Excel, right-click a component, generate a table, so people left with a skill, not just notes.",
      },
      {
        label: "Impact",
        body: "Teammates left able to build production-ready tables in seconds instead of dreading them, one less piece of manual busywork standing between a designer and the actual design problem.",
      },
    ],
  },
  {
    slug: "kroger-ai-guild",
    title: "Leading a guild that makes AI adoption feel approachable",
    client: "Kroger",
    year: "Oct 2022 — Present",
    role: "Senior Product Designer",
    category: "Leadership · AI Enablement",
    blurb:
      "Lead and shaped an AI Guild that helps designers across the organization get comfortable putting AI into their actual work. I facilitate every session myself, running exercises biweekly and working through the specific, difficult problems designers are actually stuck on rather than a generic tour of tools. Designers register through an internal portal for sessions tailored to their team and ways of working.",
    tags: ["Leadership", "AI enablement", "Community"],
    metric: { value: "Biweekly", label: "AI guild sessions led" },
    gradient: "cool",
    logo: {
      src: "/kroger-ai-guild-ring-mark.svg",
      alt: "Six nodes connected in a ring, one slightly larger than the rest, representing a peer guild with a facilitator",
    },
    mark: { src: "/kroger-k-mark-photo-white.png", alt: "" },
    screens: [
      {
        src: "/kroger-ai-guild-mural.png",
        alt: "AI Guild board showing the guild roster and roles, role definitions, vision and purpose, and the seven-step AI Guild Path playbook",
        title: "The guild board",
        body: "The living reference for the guild: roster and roles, how each role is defined, our shared vision, and the playbook every session runs against. See the full board below.",
      },
    ],
    map: {
      src: "/kroger-ai-guild-mural.png",
      alt: "AI Guild board showing the guild roster and roles, role definitions, vision and purpose, and the seven-step AI Guild Path playbook",
      title: "Running the guild on a repeatable playbook",
      body: "Every session follows the same seven-step path: meet and listen, identify the problem statement, map the current workflow, identify the tools already in play, flag risks and guardrails, deliver a solution and measure impact, then gather feedback and uplifts. That consistency is what lets a biweekly cadence actually compound instead of starting from zero each time.",
    },
    details: [
      {
        label: "Leading the guild",
        body: "Shaped the guild's structure and roles and lead it directly. I facilitate every exercise myself rather than delegating the sessions I've designed.",
      },
      {
        label: "A cadence that compounds",
        body: "Biweekly sessions give designers a standing space to bring real, unresolved problems, so progress builds session over session instead of resetting each time.",
      },
      {
        label: "Tailored, not generic",
        body: "Designers register through an internal portal for sessions built around their specific team and ways of working, rather than a one-size-fits-all AI tour.",
      },
      {
        label: "Business impact",
        body: "Designers across the organization now bring AI into their actual workflows with confidence, guided by a repeatable, facilitator-led process rather than trial and error.",
      },
    ],
  },
  {
    slug: "kroger-dpm",
    title: "Building the project management platform Kroger's design org now runs on",
    client: "Kroger",
    year: "Oct 2022 — Present",
    role: "Senior Product Designer",
    category: "0→1 · Internal Tooling",
    blurb:
      "Identified a gap in how design and engineering teams tracked project health and capacity, and built Digital Project Manager (DPM) to close it: a full project management and team-bandwidth tracking suite where directors see manager-level capacity and managers see individual capacity, all in one connected view. After presenting DPM to a 160+ person organization to strong reception, it's now rolling out as the go-to internal project management tool across the organization.",
    tags: ["0→1", "Internal tooling", "Leadership"],
    metric: { value: "160+", label: "person org, now scaling company-wide" },
    gradient: "signature",
    logo: {
      src: "/kroger-dpm-scale-mark.svg",
      alt: "Five concentric squares expanding outward from a small solid center, representing a personal tool scaling into an org-wide platform",
    },
    mark: { src: "/kroger-k-mark-photo-white.png", alt: "" },
    screens: [
      {
        src: "/kroger-dpm-dashboard.png",
        alt: "DPM dashboard showing backlog, in-flight, due-soon, and completed project counts, with a phase breakdown across the design process",
        title: "Dashboard",
        body: "An at-a-glance view of every project in flight: backlog, due soon, recently completed, and a phase breakdown from discovery through handoff, so nothing depends on memory or a status-check meeting.",
      },
      {
        src: "/kroger-dpm-team-bandwidth.png",
        alt: "DPM team capacity view showing a manager's team utilization, capacity status, and each direct report's individual workload percentage",
        title: "Director and manager visibility",
        body: "Select a manager to see their team's utilization at a glance. Directors see manager-level rollups, managers see each direct report's individual capacity, so bandwidth conversations run on shared data instead of guesswork.",
      },
      {
        src: "/kroger-dpm-project-view.png",
        alt: "DPM individual project view showing status, priority, dates, estimate, linked Figma and Jira files, stakeholders, and checklist",
        title: "Every project, fully specified",
        body: "Status, priority, dates, effort estimate, linked Figma and Jira files, stakeholders, and edge cases live on the project itself instead of scattered across docs, chat threads, and tickets.",
      },
      {
        src: "/kroger-dpm-journal.png",
        alt: "DPM personal journal feature for capturing daily design decisions, meeting notes, and reflections, organized by year",
        title: "A personal record, built in",
        body: "A running journal for daily decisions, meeting notes, and rationale, organized by year: the context that normally lives nowhere and gets lost by the next design review.",
      },
    ],
    map: {
      src: "/kroger-dpm-business-case.png",
      alt: "Business case board covering DPM's current capabilities, use cases, what must be true to scale beyond one person, and how success is defined",
      title: "The pitch that got DPM approved to scale",
      body: "Before DPM could scale beyond me, it needed a real business case, not just a demo: the problem it solved, the cost model, what had to be true for a team and then an org to run on it (hosting, auth, security sign-off), and how success would be measured. This is the board I walked leadership through to get there.",
    },
    details: [
      {
        label: "Spotting the gap",
        body: "Generic project-management tools track engineering tickets, not the artifacts a design org actually needs: edge cases, accessibility notes, design rationale, and real bandwidth. I built DPM to close that gap, starting with my own workflow.",
      },
      {
        label: "Director and manager visibility",
        body: "A connected capacity view where directors see manager-level rollups and managers see each direct report's utilization and workload, so staffing decisions run on shared data instead of guesswork.",
      },
      {
        label: "Making the case to executives",
        body: "Took DPM from a personal tool to an approved platform by presenting a clear business case to leadership: hosting model, security review, cost, and how success would be measured, not just a walkthrough of features.",
      },
      {
        label: "Business impact",
        body: "Presented DPM to a 160+ person organization to strong reception; it's now rolling out as the organization's go-to project management and team-bandwidth tracking tool.",
      },
    ],
  },
  {
    slug: "kroger-freshprompt",
    title: "Building one workspace where designers prompt, code, and preview live",
    client: "Kroger",
    year: "Oct 2022 — Present",
    role: "Senior Product Designer",
    category: "0→1 · Internal Tooling",
    blurb:
      "Built FreshPrompt, an internal application that gives designers a single home base for working with Claude on the team's own Anthropic access, organizing AI projects and saved chats into folders, previewing a live localhost-style view of what they're building, and editing code directly in a built-in editor. Every project auto-generates its own changelog and project-memory files as work progresses, so context persists between sessions instead of living in someone's head. I'm currently extending FreshPrompt with a live, drag-and-drop, Figma-style canvas, so writing to AI, organizing work, and visually designing happen in one continuous workflow.",
    tags: ["0→1", "Internal tooling", "AI workflows"],
    metric: { value: "Auto-generated", label: "changelog & project memory" },
    gradient: "cool",
    logo: {
      src: "/kroger-freshprompt-panels-mark.svg",
      alt: "Three layered rounded panels fanning into one, representing chat, code, and canvas unified into a single workspace",
    },
    mark: { src: "/kroger-k-mark-photo-white.png", alt: "" },
    screens: [
      {
        src: "/kroger-freshprompt-welcome.png",
        alt: "FreshPrompt welcome screen with a 'Start a new chat' call to action and a Projects / My Computer toggle in the sidebar",
        title: "One home base for building with Claude",
        body: "The entry point for every designer on the team: a single place to start a chat or open a project, built directly on the org's own Anthropic access instead of a patchwork of personal tools.",
      },
      {
        src: "/kroger-freshprompt-projects.png",
        alt: "FreshPrompt project view showing chats and auto-tracked files including CHANGELOG.md, index.html, package.json, and README.md, with suggestion chips for common actions",
        title: "Projects, chats, and files in one place",
        body: "Projects hold their own chats and files. Claude saves everything here automatically, including an auto-generated changelog, and designers can also upload files, create new ones, or bring in an entire repo.",
      },
      {
        src: "/kroger-freshprompt-editor.png",
        alt: "FreshPrompt live code editor showing index.html source alongside a live rendered preview of the same page",
        title: "Live preview and a built-in code editor",
        body: "A live, localhost-style preview sits right next to a real code editor, so a designer can see exactly what they're building and reach in to adjust the code directly, without leaving the app.",
      },
    ],
    details: [
      {
        label: "One workspace, not five tabs",
        body: "Designers were piecing together a separate chat tool, code editor, and file manager to build anything with AI. FreshPrompt unifies prompting, project organization, live preview, and code editing into one workspace.",
      },
      {
        label: "Organized by design",
        body: "AI projects and saved chats live in folders instead of a flat, unsearchable history. Designers can upload files, create new ones in-app, or import an entire repo to keep working where their code already lives.",
      },
      {
        label: "Memory that keeps itself",
        body: "Every project auto-generates its own changelog and project-memory files as work happens, so decisions and progress persist between sessions instead of depending on someone's memory.",
      },
      {
        label: "What's next",
        body: "Extending FreshPrompt with a live, drag-and-drop, Figma-style canvas built directly into the application, so writing to AI, organizing work, and visually designing happen in one continuous workflow.",
      },
    ],
  },
  {
    slug: "climate-pros-design-system",
    title: "Building a design system and the team process around it",
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
        body: "The landing view for facilities teams: location health scores, alarm and work order resolution, and the most common alarm and intelligence events, all rolled up across every site with a map view for drilling into a single location.",
      },
      {
        src: "/climate-pros-reports.png",
        alt: "WatchTower account reports flow with a modal for creating a new scheduled report",
        title: "Account reports",
        body: "A guided flow for building recurring compliance reports: selecting recipients, a location, and a report type (like FDA hourly temperature logs) without leaving the page.",
      },
    ],
    map: {
      src: "/climate-pros-intelligence-map.png",
      alt: "Flow diagram mapping the WatchTower Intelligence module, from location selection through refrigerant leak detection and pressure event drill-down",
      title: "Mapping the intelligence layer",
      body: "Before touching Figma, I mapped how location intelligence should actually work: how a user moves from the dashboard into the Location Health Score and Refrigerant Leak Detection modules, and how the pressure-events table drills down into device-level charts. This flow became the shared reference for engineering and product throughout the build.",
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
      "Architecting a 0→1 mobile app: from a single flowchart to a 30-screen production system",
    client: "The Web and Marketing Bureau, LLC",
    year: "Oct 2020 — Apr 2021",
    role: "Senior User Experience Architect",
    category: "UX Architecture · 0→1 Mobile Product Design",
    blurb:
      "Owned end-to-end UX architecture for Chattic, a community-driven app for crowdsourcing the value of secondhand finds. Mapped the complete application flow before a single screen was drawn, then designed and specified a 30+ screen production system, including onboarding, a social valuation feed, guided item capture, and appraiser matching, while directing a team of designers across the agency's broader client roster.",
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
        body: "The first moment of the experience: the mark animates in, sets tone, and hands off to the home feed in under two seconds.",
      },
      {
        src: "/chattic-feeds.png",
        alt: "Chattic social feed showing community members asking what their found items are worth",
        title: "Social valuation feed",
        body: "The core loop: a member posts a found or inherited item and the community weighs in on what it's worth, part marketplace, part social feed.",
      },
      {
        src: "/chattic-post.png",
        alt: "Chattic item posting flow with fields for item details and a post button",
        title: "Item capture & posting",
        body: "A guided capture flow: photograph the item, add context, and flag whether you're selling or just curious, before it goes live to the community.",
      },
    ],
    map: {
      src: "/chattic-journey-map.png",
      alt: "Application flowchart for Chattic mapping the splash screen, home screen navigation, and every core user path",
      title: "Mapping the app before designing it",
      body: "Before any screen took shape, I flowcharted the full application: every nav path, state, and decision point, so the client could sign off on scope before design began. That map became the backbone for the 30+ screen system that followed.",
    },
    details: [
      {
        label: "Product architecture",
        body: "Mapped the complete application flow, including navigation, screen states, and interaction logic, turning an ambiguous app concept into a buildable specification.",
      },
      {
        label: "System design",
        body: "Designed a 30+ screen production system in Adobe XD using reusable components and grids, covering onboarding, the social feed, item capture, and appraiser matching.",
      },
      {
        label: "Brand & UI",
        body: "Translated the client's brand identity into a cohesive mobile UI: typography, color, and iconography consistent across every screen and state.",
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
        body: "The shipped design: quick-action cards color-coded by severity (blue, amber, red, green) so an operator can gauge line health without reading a label, backed by a live WIP tracker spanning every station on the GE9X production line.",
      },
      {
        src: "/ge-cockpit-buttons.png",
        alt: "Earlier version of the GE Digital Cockpit dashboard with all quick-action cards in a single blue color",
        title: "Where it started",
        body: "The original layout used a single accent color for every action card. Recoloring each card by severity turned a glance-and-guess interface into one operators could scan in under a second, a small change with an outsized impact on shop-floor speed.",
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
    body: "Partner with Product, Engineering, and Data Science before opening Figma. Most bad products solve the wrong problem beautifully.",
  },
  {
    step: "02",
    title: "Put AI to work",
    body: "Use Claude, ChatGPT, Copilot, and Figma AI to accelerate research, documentation, and exploration, without cutting corners on craft.",
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
    title: "Principal Designer, AT&T (managed Sean directly at Kroger)",
  },
  {
    quote:
      "One of the best UI/UX and product designers I've had the honor of working with. Once he's on your team, your UI stories go by in a breeze, and he proactively advises on best practices, layouts, components — you name it. He's the complete package on the product side and an absolute pleasure to work alongside.",
    name: "Ruben Singh Dangol",
    title: "Full Stack Developer: Spring Boot, SQL, Angular, Kafka, React",
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
