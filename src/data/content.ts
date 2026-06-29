/* ============================================================
   axiomate — site content (single source of truth)
   Edit copy, services, FAQs, and contact details here.
   ============================================================ */

import type { IconName } from "../lib/icons";

export const site = {
  name: "axiomate",
  domain: "axiomate.io", // TODO: set your real domain
  url: "https://axiomate.io",
  tagline: "Systems that compound.",
  description:
    "axiomate designs, builds, and operates the cloud, automation, and AI systems that help ambitious teams move faster with less overhead.",
  ogImage: "/og-image.png",

  /* --- Where leads go --- */
  contact: {
    // TODO: replace with your free key from https://web3forms.com (takes 30s)
    web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
    email: "akworks247@gmail.com", // TODO: switch to a branded address e.g. hello@axiomate.io
    // TODO: paste your scheduling link (Calendly, Cal.com, etc.)
    bookingUrl: "#contact",
    location: "Remote-first · Working worldwide",
    responseTime: "We reply within 1 business day.",
  },

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/axiomate", icon: "linkedin" as IconName },
    { label: "X", href: "https://x.com/axiomate", icon: "x" as IconName },
    { label: "GitHub", href: "https://github.com/axiomate", icon: "github" as IconName },
  ],
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Why us", href: "#why" },
    { label: "Outcomes", href: "#outcomes" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Book a call", href: "#contact" },
};

export const hero = {
  eyebrow: "Cloud · Automation · AI",
  // headlineLead + headlineAccent renders the accent in a gradient
  headlineLead: "Engineer the systems that",
  headlineAccent: "run themselves.",
  sub: "axiomate designs, builds, and operates the cloud infrastructure, automation, and AI that let ambitious teams move faster — with less manual work and lower overhead.",
  primaryCta: { label: "Book a discovery call", href: "#contact" },
  secondaryCta: { label: "Explore services", href: "#services" },
  proof: ["Senior engineers only", "Cloud-native by default", "Security-first"],
};

export const marquee = {
  label: "Cloud-native across the stack you already trust",
  items: [
    "AWS",
    "Google Cloud",
    "Microsoft Azure",
    "Kubernetes",
    "Terraform",
    "Docker",
    "GitHub Actions",
    "Snowflake",
    "PostgreSQL",
    "OpenAI",
    "Anthropic",
    "n8n",
    "Datadog",
    "Cloudflare",
  ],
};

export interface Service {
  icon: IconName;
  pillar: "Cloud" | "Automation" | "AI";
  title: string;
  tagline: string;
  description: string;
  tags: string[];
}

export const services: { eyebrow: string; title: string; lead: string; items: Service[] } = {
  eyebrow: "What we do",
  title: "Three disciplines, one operating system for your business",
  lead: "We combine cloud engineering, automation, and applied AI into systems that remove friction end-to-end — not point tools that create more of it.",
  items: [
    {
      icon: "cloud",
      pillar: "Cloud",
      title: "Cloud Architecture & Migration",
      tagline: "Land in the cloud the right way.",
      description:
        "Well-architected, cost-aware foundations on AWS, GCP, or Azure — designed for the scale you're heading toward, then migrated without the drama.",
      tags: ["AWS", "GCP", "Azure", "Migration"],
    },
    {
      icon: "devops",
      pillar: "Cloud",
      title: "DevOps & Platform Engineering",
      tagline: "Ship continuously, sleep at night.",
      description:
        "CI/CD, infrastructure-as-code, containers, and observability wired into golden paths your team can move fast on — safely.",
      tags: ["Terraform", "Kubernetes", "CI/CD", "Observability"],
    },
    {
      icon: "automation",
      pillar: "Automation",
      title: "Workflow & Process Automation",
      tagline: "Delete the busywork.",
      description:
        "We connect your tools and automate the repetitive, manual work quietly draining your team's hours — reliably, with humans in the loop where it matters.",
      tags: ["n8n", "Integrations", "APIs", "RPA"],
    },
    {
      icon: "data",
      pillar: "Automation",
      title: "Data & Integration Pipelines",
      tagline: "One source of truth.",
      description:
        "Dependable pipelines that move and model your data so every system — and every model — is working from the same numbers.",
      tags: ["ETL / ELT", "Warehousing", "Events", "APIs"],
    },
    {
      icon: "ai",
      pillar: "AI",
      title: "AI & LLM Solutions",
      tagline: "AI that ships, not demos.",
      description:
        "Production assistants, retrieval (RAG), and agentic workflows wired into your real data and processes — measured, monitored, and safe.",
      tags: ["RAG", "Agents", "LLMOps", "Evals"],
    },
    {
      icon: "activity",
      pillar: "Cloud",
      title: "Managed Cloud & SRE",
      tagline: "We run it with you.",
      description:
        "Once you're live, we monitor, harden, and optimize — incident response, cost control, and continuous security so the system keeps paying off.",
      tags: ["24/7", "Cost", "Security", "Reliability"],
    },
  ],
};

export interface Step {
  no: string;
  title: string;
  description: string;
  icon: IconName;
}

export const process: { eyebrow: string; title: string; lead: string; steps: Step[] } = {
  eyebrow: "How we work",
  title: "A clear path from bottleneck to autonomous system",
  lead: "No black boxes. You always know what we're building, why, what it costs, and when it lands.",
  steps: [
    {
      no: "01",
      title: "Discover",
      description:
        "We map your systems, goals, and bottlenecks — and pinpoint where cloud, automation, and AI will move the needle fastest.",
      icon: "search",
    },
    {
      no: "02",
      title: "Architect",
      description:
        "You get a clear blueprint: scope, architecture, cost, and milestones. No ambiguity, no scope creep.",
      icon: "blueprint",
    },
    {
      no: "03",
      title: "Build & Automate",
      description:
        "We implement in tight, visible iterations — integrating with the tools you already run instead of replacing everything.",
      icon: "build",
    },
    {
      no: "04",
      title: "Operate & Optimize",
      description:
        "We monitor, harden, and keep improving so the system compounds in value long after launch.",
      icon: "gauge",
    },
  ],
};

export interface Feature {
  icon: IconName;
  title: string;
  description: string;
}

export const why: { eyebrow: string; title: string; lead: string; items: Feature[] } = {
  eyebrow: "Why axiomate",
  title: "Built like a senior team, priced like a partner",
  lead: "The reasons teams pick us over a generic agency or another contractor.",
  items: [
    {
      icon: "users",
      title: "Senior engineers only",
      description:
        "The people who scope your project build it. No hand-offs to juniors, no learning on your budget.",
    },
    {
      icon: "target",
      title: "Outcome-driven",
      description:
        "We measure success in hours saved, cost cut, and revenue unlocked — not tickets closed.",
    },
    {
      icon: "shield",
      title: "Security & reliability first",
      description:
        "Least-privilege, encrypted, observable, and well-architected from day one — not bolted on later.",
    },
    {
      icon: "compass",
      title: "Vendor-neutral",
      description:
        "We pick the right cloud and the right AI provider for you — never the one we happen to resell.",
    },
    {
      icon: "receipt",
      title: "Transparent pricing",
      description:
        "Fixed-scope milestones with clear costs. You'll never get a surprise invoice from us.",
    },
    {
      icon: "handover",
      title: "Knowledge transfer",
      description:
        "We document everything and hand it over. You're never locked into us to keep the lights on.",
    },
  ],
};

export interface Stat {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export const stats: { eyebrow: string; title: string; note: string; items: Stat[] } = {
  eyebrow: "Outcomes we engineer for",
  title: "Less manual work. Lower cost. Faster delivery.",
  note: "Representative target outcomes from cloud, automation, and AI engagements. Results vary by scope.",
  items: [
    { value: 60, suffix: "%+", label: "of manual, repetitive work eliminated" },
    { value: 3, prefix: "", suffix: "×", label: "faster delivery with automated pipelines" },
    { value: 40, suffix: "%", label: "average cloud cost reduction" },
    { value: 99.9, suffix: "%", label: "uptime targets on managed systems" },
  ],
};

export interface Testimonial {
  quote: string;
  role: string;
  company: string;
}

/* NOTE: placeholder, role-based attributions — replace with real,
   named client quotes (with permission) before launch. */
export const outcomes: { eyebrow: string; title: string; lead: string; items: Testimonial[] } = {
  eyebrow: "In their words",
  title: "Teams move faster when the systems do the heavy lifting",
  lead: "A sample of the kind of impact we aim for on every engagement.",
  items: [
    {
      quote:
        "They automated a reconciliation process that used to eat two days a week. It now runs untouched, and we trust the numbers more than we did when a human did it.",
      role: "Head of Operations",
      company: "B2B SaaS · Series B",
    },
    {
      quote:
        "Our cloud bill dropped sharply and deploys went from a weekly event to something we do before lunch. The hand-off docs were genuinely excellent.",
      role: "VP Engineering",
      company: "Fintech scale-up",
    },
    {
      quote:
        "We'd been burned by AI 'pilots' that never shipped. axiomate put a real assistant in front of our support team — wired to our data — in weeks.",
      role: "Director of Customer Experience",
      company: "E-commerce",
    },
  ],
};

export interface Faq {
  q: string;
  a: string;
}

export const faq: { eyebrow: string; title: string; items: Faq[] } = {
  eyebrow: "Questions",
  title: "Everything you might be wondering",
  items: [
    {
      q: "What size of company do you work with?",
      a: "From early-stage startups to mid-market scale-ups. Engagements range from a single focused automation to a full cloud, data, and AI build — we scope to where you are.",
    },
    {
      q: "How quickly can we start, and when do we see value?",
      a: "Discovery usually begins within days. For most projects you'll see meaningful results in weeks, not months — we deliver in tight iterations rather than one big-bang launch.",
    },
    {
      q: "Which clouds and tools do you use?",
      a: "We're vendor-neutral. We work across AWS, Google Cloud, and Azure, and integrate with the automation and AI platforms that fit your stack — not whatever we'd profit from reselling.",
    },
    {
      q: "Is our data safe when you build AI features?",
      a: "Yes. We use private deployments, scope access with least-privilege, and never train third-party models on your data. Security and data governance are designed in from day one.",
    },
    {
      q: "Do you offer ongoing support after launch?",
      a: "We do. Many clients keep us on a managed/SRE retainer for monitoring, incident response, cost optimization, and continuous improvement — but you're never locked in.",
    },
    {
      q: "How do you price engagements?",
      a: "Fixed-scope projects with clear milestones and costs, plus optional monthly retainers for ongoing work. You'll always know what you're paying for before we start.",
    },
  ],
};

export const contact = {
  eyebrow: "Get started",
  title: "Let's build your unfair advantage",
  lead: "Tell us where you're stuck. We'll come back with a clear, no-pressure plan for the cloud, automation, or AI work that would move the needle most.",
  interests: ["Cloud", "Automation", "AI", "Not sure yet / Multiple"],
};

export const footer = {
  blurb:
    "Cloud, automation, and AI solutions for teams that want to move faster with less overhead.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Cloud architecture", href: "#services" },
        { label: "DevOps & platform", href: "#services" },
        { label: "Process automation", href: "#services" },
        { label: "AI & LLM solutions", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Why axiomate", href: "#why" },
        { label: "How we work", href: "#process" },
        { label: "Outcomes", href: "#outcomes" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
};
