// Not linked on the site for now; kept so it is easy to bring back.
export const resumeUrl =
  "https://drive.google.com/file/d/1-sp5w34U0J1q715w7g0Nytt7hEl1gxd0/view?usp=sharing";

export const email = "ayushsaxena823@gmail.com";

export const socials = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ayush-saxena-b5b099203/" },
  { label: "GitHub", url: "https://github.com/optimm" },
  { label: "X", url: "https://x.com/AyushSaxena823" },
  { label: "Instagram", url: "https://www.instagram.com/ayushsaxenaa__/" },
];

// One colour per kind of work, used the same way in the hero map, Work and Skills.
export const categories = {
  ai: { label: "AI and LLMs", short: "AI", color: "var(--c-ai)" },
  systems: { label: "Backend and distributed systems", short: "Systems", color: "var(--c-systems)" },
  platform: { label: "Platform and architecture", short: "Platform", color: "var(--c-platform)" },
  infra: { label: "Data and infra", short: "Infra", color: "var(--c-infra)" },
  frontend: { label: "Product and frontend", short: "Product", color: "var(--c-frontend)" },
};

export const heroPhrases = [
  // U+2011 non-breaking hyphens keep hyphenated words like "low-latency" on one line.
  "high‑scale, low‑latency systems.",
  "multi‑tenant AI platforms.",
  "distributed systems.",
  "products thousands rely on every day.",
  "AI that cuts costs, not corners.",
];

// Short proof points under the hero call to action.
export const heroProof = [
  {
    label: "Work featured in The Times of India",
    url: "https://timesofindia.indiatimes.com/business/india-business/meesho-launches-voicebot-to-cut-customer-support-costs-by-one-fourth/articleshow/115706660.cms",
  },
  { label: "Speaker at Meesho BharatConf '25" },
  { label: "Top 44 of 10,350 in Summer of Bitcoin" },
];

export const expertise = [
  {
    kind: "systems",
    title: "Distributed systems",
    text: "High-throughput, low-latency services that stay up under load, with event-driven design, caching and graceful fallbacks.",
    keywords: "Microservices, gRPC, Kafka, Redis, observability",
  },
  {
    kind: "ai",
    title: "AI and LLM systems",
    text: "LLM products running in production: retrieval, agents and DAG orchestration, model routing with fallbacks, evaluation, and real-time voice with ASR and TTS.",
    keywords: "LLMs, RAG, agents, routing, evals, voice",
  },
  {
    kind: "platform",
    title: "Platform and architecture",
    text: "Multi-tenant platforms, config and experimentation systems and rule engines that other teams build on.",
    keywords: "System design, multi-tenancy, A/B testing",
  },
  {
    kind: "frontend",
    title: "Product and frontend",
    text: "Dashboards and internal tools built with the people who use them every day, not just for them.",
    keywords: "React, TypeScript, NestJS",
  },
];

// Icons are SVGs in public/icons: brand marks from simple-icons (CC0) with the
// brand colour used on hover, plus a few drawn glyphs for concepts. Entries
// without an icon show a text mark. `kinds` link each tool to the focus areas.
export const tools = [
  { name: "LLMs", icon: "llm", kinds: ["ai"] },
  { name: "RAG", icon: "rag", kinds: ["ai"] },
  { name: "AI agents", icon: "agents", kinds: ["ai", "platform"] },
  { name: "Speech to text", icon: "asr", kinds: ["ai"] },
  { name: "Text to speech", icon: "tts", kinds: ["ai"] },
  { name: "Claude", icon: "claude", hex: "D97757", kinds: ["ai"] },
  { name: "Go", icon: "go", hex: "00ADD8", kinds: ["systems", "platform"] },
  { name: "Python", icon: "python", hex: "3776AB", kinds: ["systems", "ai", "platform"] },
  { name: "Java", icon: "openjdk", hex: "000000", kinds: ["systems"] },
  { name: "gRPC", mark: "gRPC", kinds: ["systems", "platform"] },
  { name: "Gin", icon: "gin", hex: "008ECF", kinds: ["systems"] },
  { name: "Spring Boot", icon: "springboot", hex: "6DB33F", kinds: ["systems"] },
  { name: "FastAPI", icon: "fastapi", hex: "009688", kinds: ["systems", "ai"] },
  { name: "Flask", icon: "flask", hex: "3BABC3", kinds: ["systems", "ai"] },
  { name: "Kafka", icon: "apachekafka", hex: "231F20", kinds: ["systems", "infra", "platform"] },
  { name: "Redis", icon: "redis", hex: "FF4438", kinds: ["infra", "systems", "platform"] },
  { name: "MongoDB", icon: "mongodb", hex: "47A248", kinds: ["infra", "platform"] },
  { name: "PostgreSQL", icon: "postgresql", hex: "4169E1", kinds: ["infra"] },
  { name: "Elasticsearch", icon: "elasticsearch", hex: "005571", kinds: ["infra"] },
  { name: "Docker", icon: "docker", hex: "2496ED", kinds: ["infra", "platform"] },
  { name: "AWS", mark: "AWS", kinds: ["infra", "platform"] },
  { name: "Jenkins", icon: "jenkins", hex: "D24939", kinds: ["infra"] },
  { name: "ArgoCD", icon: "argo", hex: "EF7B4D", kinds: ["infra", "platform"] },
  { name: "Grafana", icon: "grafana", hex: "F46800", kinds: ["infra", "platform"] },
  { name: "Git", icon: "git", hex: "F03C2E", kinds: ["infra", "frontend"] },
  { name: "TypeScript", icon: "typescript", hex: "3178C6", kinds: ["frontend"] },
  { name: "JavaScript", icon: "javascript", hex: "F7DF1E", kinds: ["frontend"] },
  { name: "React", icon: "react", hex: "61DAFB", kinds: ["frontend"] },
  { name: "Node.js", icon: "nodedotjs", hex: "5FA04E", kinds: ["frontend", "systems"] },
];

export const ProjectList = [
  {
    title: "DevHub",
    description: "A social platform for developers to showcase projects and connect with each other.",
    tech_stack: "React, Redux, Node.js, Express, MongoDB",
    github_url: "https://github.com/optimm/DevHub",
    demo_url: "https://devhubb.netlify.app/",
    demo_label: "Live site",
  },
  {
    title: "AlgoX",
    description: "A sorting algorithm visualizer with custom inputs, speed and array-size controls.",
    tech_stack: "React, CSS",
    github_url: "https://github.com/optimm/AlgoX",
    demo_url: "https://algox.netlify.app/",
    demo_label: "Live site",
  },
  {
    title: "Shoppy",
    description: "A full-stack shopping website and clothing store management system.",
    tech_stack: "React, Node.js, Express, MySQL",
    github_url: "https://github.com/optimm/shoppy",
    demo_url: "https://www.youtube.com/watch?v=CTgu2v0mg30&feature=youtu.be",
    demo_label: "Watch demo",
  },
  {
    title: "Findit",
    description: "A web app for finding nearby stores and facilities based on what you need.",
    tech_stack: "React, Redux",
    github_url: "https://github.com/optimm/store-app",
    demo_url: "https://findittt.netlify.app/",
    demo_label: "Live site",
  },
  {
    title: "NewsIt",
    description: "A cross-platform mobile app for news and articles.",
    tech_stack: "React Native, Context API",
    github_url: "https://github.com/optimm/Newsit",
    demo_url: "https://github.com/optimm/Newsit/blob/master/NewsIt.apk",
    demo_label: "Download APK",
  },
];

export const ExperienceList = [
  {
    company: "Meesho",
    years: "2024 – now",
    summary: "Intern to SDE 2 in 18 months.",
    current: true,
    roles: [
      {
        id: "sde-2",
        title: "Software Development Engineer 2",
        short: "SDE 2",
        period: "Jul 2025 - Present",
        stack: ["Go", "Python", "gRPC", "MongoDB", "Redis", "Kafka"],
        highlights: [
          {
            kind: "platform",
            featured: true,
            value: "0 → 30+",
            label: "enterprise clients",
            title: "Founding engineer, Meesho AI Services",
            text: "Architected the core multi-tenant AI platform behind voice, chat, agent assist and campaign management. It now handles 2.5M+ interactions a day and made AI Services a new business line for Meesho.",
          },
          {
            kind: "ai",
            value: "−35%",
            label: "average call handling time",
            title: "Agent-assist platform",
            text: "Real-time insights and guided actions for 2,000+ concurrent support agents, all in one interface, which also brought agent costs down.",
          },
          {
            kind: "platform",
            title: "No-code agent builder",
            text: "DAG-based orchestration on a config-driven CRM and data platform. 50+ product and business people launch agents themselves, with far less dependence on engineering, and new clients onboard much faster.",
          },
          {
            kind: "systems",
            value: "<1ms",
            label: "overhead at 1,000+ RPS",
            title: "Config, experiments and rules engine",
            text: "One platform for configuration, live A/B experiments and business-logic changes across 10+ services.",
          },
          {
            kind: "systems",
            value: "−75%",
            label: "LLM error rate",
            title: "Adaptive LLM routing",
            text: "Region selection and cross-model fallbacks that cut mean latency by 200ms and let the platform recover from provider incidents 90% faster.",
          },
          {
            kind: "ai",
            title: "Lower voice bot cost per call",
            text: "Reduced through a model experimentation platform and cross-model fallbacks, enabling faster evaluation and onboarding of new LLM, TTS and ASR models.",
          },
          {
            kind: "platform",
            title: "Leading the Execution Excellence pod",
            text: "Automating tenant onboarding, testing and RCA feedback loops, halving go-live timelines and multiplying the pilots each person can deliver.",
          },
        ],
      },
      {
        id: "sde-1",
        title: "Software Development Engineer 1",
        short: "SDE 1",
        period: "Jul 2024 - Jul 2025",
        stack: ["Python", "LLM", "RAG", "Flask", "Java", "Spring Boot", "Kafka", "Redis"],
        highlights: [
          {
            kind: "ai",
            value: "1M+",
            label: "calls a day",
            title: "India's first LLM voice bot at scale",
            text: "Customer support voice bot on a real-time ASR, LLM and TTS pipeline. Cost per call down 75%, handling time down 40%.",
          },
          {
            kind: "ai",
            title: "Multi-model RAG chatbot",
            text: "DAG-orchestrated chatbot with retrieval over support knowledge, handling 1M+ queries a day and routing each one to the lowest-cost capable model.",
          },
        ],
        press: [
          {
            outlet: "The Times of India",
            headline: "Meesho launches voicebot to cut customer support costs by one-fourth",
            about: "Coverage of the LLM voice bot I launched.",
            url: "https://timesofindia.indiatimes.com/business/india-business/meesho-launches-voicebot-to-cut-customer-support-costs-by-one-fourth/articleshow/115706660.cms",
          },
          {
            outlet: "Inc42",
            headline: "Meesho launches GenAI-powered voice bot for post-order queries",
            about: "On the launch and how the bot handles support calls.",
            url: "https://inc42.com/buzz/meesho-launches-genai-powered-voice-bot-for-post-order-queries/",
          },
        ],
      },
      {
        id: "intern",
        title: "Software Developer Intern",
        short: "Intern",
        period: "Jan 2024 - Jul 2024",
        stack: ["Java", "Spring Boot", "Kafka", "Redis", "Elasticsearch"],
        highlights: [
          {
            kind: "infra",
            value: "5M+",
            label: "requests a day",
            title: "Reverse shipment tracking, rebuilt",
            text: "Migrated the end-to-end flow from a legacy PHP monolith to an event-driven Java microservice.",
          },
          {
            kind: "ai",
            title: "GenAI catalogue enrichment",
            text: "Rebuilt the experimentation setup to run concurrent A/B tests on catalogue images, speeding up generative vision experiments for product discovery.",
          },
        ],
      },
    ],
  },
  {
    company: "Summer of Bitcoin, Eye of Satoshi",
    years: "2023",
    certificate:
      "https://drive.google.com/file/d/1yAZErlQMqWm-TkBjrWShaDGPJ4i3U-Ab/view?usp=sharing",
    roles: [
      {
        id: "sob",
        title: "Software Developer Intern",
        period: "May 2023 - Aug 2023",
        stack: ["TypeScript", "React", "NestJS", "Rust", "gRPC", "Docker"],
        highlights: [
          {
            kind: "frontend",
            value: "100+",
            label: "operators",
            title: "Open-source watchtower dashboard",
            text: "Operator dashboard for Eye of Satoshi, a Bitcoin Lightning watchtower, with real-time user, appointment and breach tracking. Also improved error handling in teos-cli.",
          },
        ],
      },
    ],
  },
  {
    company: "Probe AI",
    years: "2023",
    roles: [
      {
        id: "probe",
        title: "Software Developer Intern",
        period: "Apr 2023 - May 2023",
        stack: ["NestJS", "React", "LLM", "AWS", "Metabase"],
        highlights: [
          {
            kind: "ai",
            value: "85 → 94%",
            label: "SQL query accuracy",
            title: "Auto-fix for LLM-generated SQL",
            text: "Query auto-fix and dry runs for a database-aware text-to-SQL tool, plus support for MySQL, PostgreSQL, BigQuery and Snowflake side by side.",
          },
        ],
      },
    ],
  },
  {
    company: "Fyntune Solutions",
    years: "2022",
    certificate:
      "https://drive.google.com/file/d/1nrqwePMKE9kkETIBW1JKFjjUIW4DZFQx/view?usp=sharing",
    roles: [
      {
        id: "fyntune",
        title: "ReactJs Developer Intern",
        period: "Jun 2022 - Nov 2022",
        stack: ["React", "Redux"],
        highlights: [
          {
            kind: "frontend",
            title: "Insurance product front ends",
            text: "Worked across 10+ digital insurance products and led six launches, with a front-end rework and client-side caching that made pages load faster.",
          },
        ],
      },
    ],
  },
];

// Achievements section, strongest first. Kinds only pick the tile colour.
export const achievements = [
  { kind: "ai", value: "Speaker", label: "Meesho BharatConf '25", detail: "On scaling India's first GenAI voice bot." },
  { kind: "platform", value: "3rd", label: "HackMee 3.0", detail: "Out of 130+ teams, with a voice bot that tests other voice bots." },
  { kind: "systems", value: "2 awards", label: "Recognised at Meesho", detail: "Appreciation at the AI Services All-Hands 2025, and a Panchayat Award." },
  { kind: "infra", value: "Top 44", label: "Summer of Bitcoin 2023", detail: "Selected from 10,350 applicants." },
  { kind: "accent", value: "2034", label: "5★ on CodeChef", detail: "Maximum rating." },
  { kind: "frontend", value: "1438", label: "Specialist on Codeforces", detail: "Maximum rating." },
  { kind: "infra", value: "Knight", label: "LeetCode badge", detail: "700+ problems solved across platforms." },
  { kind: "ai", value: "1,000+", label: "Students supported", detail: "As UG Coordinator, Counselling Services at IIIT Jabalpur." },
];

export const BlogList = [
  {
    title: "What is Redis and how does it work internally",
    description: "A deep dive into Redis and how it works under the hood.",
    date: "March 2024",
    url: "https://medium.com/@ayushsaxena823/what-is-redis-and-how-does-it-work-cfe2853eb9a9",
    tags: ["Redis", "Architecture"],
    kind: "systems",
  },
  {
    title: "My Summer of Bitcoin Story",
    description:
      "My Summer of Bitcoin 2023 journey with Eye of Satoshi.",
    date: "August 2024",
    url: "https://medium.com/@ayushsaxena823/my-summer-of-bitcoin-story-4f576b03ad03",
    tags: ["Summer of Bitcoin", "Open source"],
    kind: "platform",
  },
];
