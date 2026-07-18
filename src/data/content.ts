/* ============================================================
   axiomate — site content (single source of truth)
   Edit copy, services, FAQs, and contact details here.

   Positioning: custom AI & automation tooling for US collections
   BPOs — built from real production work inside one.
   ============================================================ */

import type { IconName } from "../lib/icons";

export const site = {
  name: "axiomate",
  domain: "axiomate.tech",
  url: "https://axiomate.tech",
  tagline: "AI & automation for US collections BPOs",
  description:
    "axiomate builds custom AI and automation for US collections BPOs — agent training simulators, live-call assist, workflow automation, and CRM tooling — engineered by people who've run them on a real collections floor.",
  ogImage: "/og-image.png",

  /* --- Where leads go --- */
  contact: {
    // TODO: replace with your free key from https://web3forms.com (takes 30s)
    web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
    email: "akworks247@gmail.com", // TODO: switch to arsh@axiomate.tech (Zoho Mail free tier works)
    // TODO: paste your scheduling link (Calendly, Cal.com, etc.)
    bookingUrl: "#contact",
    location: "Remote-first · Serving US BPOs",
    responseTime: "We reply within 1 business day.",
  },

  social: [
    { label: "LinkedIn", href: "https://linkedin.com/company/axiomate", icon: "linkedin" as IconName },
    { label: "X", href: "https://x.com/axiomate", icon: "x" as IconName },
    { label: "GitHub", href: "https://github.com/axiomate-tech", icon: "github" as IconName },
  ],
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Audit", href: "#offer" },
    { label: "Why us", href: "#why" },
    { label: "Case studies", href: "#outcomes" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Book a call", href: "#contact" },
};

export const hero = {
  eyebrow: "Voice AI · Automation · CRM",
  // headlineLead + headlineAccent renders the accent in a gradient
  headlineLead: "AI & automation built for",
  headlineAccent: "collections BPOs.",
  sub: "Agent training voicebots, live-call assist, and workflow automation for US collections operations — engineered by people who've built them on a live collections floor, not another generic tool that doesn't know how collections runs.",
  primaryCta: { label: "Book a 20-min call", href: "#contact" },
  secondaryCta: { label: "See what we build", href: "#services" },
  proof: ["Built on a live US collections floor", "FDCPA-aware by default", "Fixed scope, fixed price"],
};

export const marquee = {
  label: "Fluent in the stack your floor already runs",
  items: [
    "Five9",
    "Genesys",
    "NICE CXone",
    "Twilio",
    "OpenAI",
    "Anthropic",
    "Vapi",
    "Retell AI",
    "Salesforce",
    "Chrome Extensions",
    "n8n",
    "AWS",
    "PostgreSQL",
    "Zapier",
  ],
};

export interface Service {
  icon: IconName;
  pillar: "AI" | "Automation" | "Ops";
  title: string;
  tagline: string;
  description: string;
  tags: string[];
}

export const services: { eyebrow: string; title: string; lead: string; items: Service[] } = {
  eyebrow: "What we build",
  title: "Tooling for the problems a collections floor actually has",
  lead: "Six offerings, all grown out of real builds inside a production US collections BPO — not an agency slide deck.",
  items: [
    {
      icon: "ai",
      pillar: "AI",
      title: "AI Voice Training Simulators",
      tagline: "Reps before the real thing.",
      description:
        "A voice AI that plays the consumer — angry, evasive, disputing — so new collectors practice objection handling, Mini-Miranda and disclosures, and de-escalation before they ever take a live call. Scored, repeatable, on demand.",
      tags: ["Voice AI", "Objection handling", "Mini-Miranda", "De-escalation"],
    },
    {
      icon: "search",
      pillar: "AI",
      title: "Live-Call Agent Assist",
      tagline: "Answers before the hold music.",
      description:
        "Chatbots and copilots that answer agent questions mid-call from your own knowledge base — client policies, plan rules, compliance language — so agents stop guessing or parking consumers on hold.",
      tags: ["RAG", "Knowledge base", "In-call support", "Compliance prompts"],
    },
    {
      icon: "automation",
      pillar: "Automation",
      title: "Agent Workflow Automation",
      tagline: "Kill the clicks between calls.",
      description:
        "Chrome extensions and integrations that pull account context into one view and automate the copy-paste between dashboards — cutting handle time and wrap time on tools you can't replace.",
      tags: ["Chrome extensions", "AHT", "Wrap time", "Legacy tools"],
    },
    {
      icon: "build",
      pillar: "Automation",
      title: "Collections CRM Customization",
      tagline: "Make the CRM match the floor.",
      description:
        "Queues, statuses, payment plans, compliance fields, client-specific workflows — we bend your CRM around how your floor actually collects, instead of forcing workarounds and spreadsheets.",
      tags: ["Custom workflows", "Queues", "Integrations", "Payment plans"],
    },
    {
      icon: "shield",
      pillar: "AI",
      title: "Compliance & QA Automation",
      tagline: "Every call checked, not a sample.",
      description:
        "AI-assisted QA that screens recordings for Mini-Miranda delivery, required disclosures, and risky language across 100% of calls — so problems surface before a complaint or an audit does.",
      tags: ["Call QA", "FDCPA", "Reg F", "Disclosures"],
    },
    {
      icon: "send",
      pillar: "AI",
      title: "Outbound Voice Automation",
      tagline: "Voicemails that earn callbacks.",
      description:
        "Answering-machine detection that drops a personalized, voice-cloned voicemail the moment it hears a machine — and routes to a live agent the moment it hears a human. More callbacks, zero wasted talk time.",
      tags: ["Voicemail drops", "AMD", "Voice cloning", "Live transfer"],
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
  title: "Start with an audit, not a leap of faith",
  lead: "Fixed scope, fixed price, no black boxes — you always know what we're building, why, and what it should return.",
  steps: [
    {
      no: "01",
      title: "Audit",
      description:
        "The Collections AI & Automation Audit: we map your top three productivity and compliance gaps — agent workflows, training, QA — and rank them by ROI.",
      icon: "search",
    },
    {
      no: "02",
      title: "Blueprint",
      description:
        "You get a fixed-scope build plan: what we'll build, what it costs, what it should save, and how compliance is handled. No ambiguity, no scope creep.",
      icon: "blueprint",
    },
    {
      no: "03",
      title: "Build & Pilot",
      description:
        "We build in tight, visible iterations and pilot with one team or queue first — proving the numbers on your floor before a floor-wide rollout.",
      icon: "build",
    },
    {
      no: "04",
      title: "Roll Out & Optimize",
      description:
        "We roll out, train supervisors, and keep measuring against your KPIs — handle time, ramp time, QA scores — so the tooling keeps paying off.",
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
  title: "We've worked the floor you're running",
  lead: "Why collections BPOs pick us over generalist agencies and yet another off-the-shelf tool.",
  items: [
    {
      icon: "users",
      title: "Collections-floor DNA",
      description:
        "Our builds come from inside a US collections BPO. We know Mini-Miranda from a wrap code — you'll never have to explain your world to us.",
    },
    {
      icon: "shield",
      title: "Compliance-aware by default",
      description:
        "FDCPA, Reg F, disclosures, and call-recording rules are design inputs from day one — and your compliance team signs off before anything goes live.",
    },
    {
      icon: "target",
      title: "Measured in your KPIs",
      description:
        "Success is handle time, ramp time, RPC rate, and QA scores — the numbers your ops review already tracks. Not tickets closed.",
    },
    {
      icon: "compass",
      title: "Built on your stack",
      description:
        "We integrate with your dialer and CRM — even the legacy ones — instead of selling you a rip-and-replace.",
    },
    {
      icon: "receipt",
      title: "Fixed scope, fixed price",
      description:
        "Audits and builds are quoted as fixed-price milestones. You'll never get a surprise invoice from us.",
    },
    {
      icon: "handover",
      title: "Your team keeps the keys",
      description:
        "Everything documented and handed over — code, prompts, dashboards. You're never locked into us to keep the lights on.",
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
  title: "Higher throughput. Faster ramp. Total QA coverage.",
  note: "The 40% is a measured result from a production automation build; the rest are representative targets we design against. Every audit includes ROI estimates specific to your floor.",
  items: [
    { value: 40, suffix: "%", label: "more conversations handled per agent — measured, not projected" },
    { value: 2, suffix: "×", label: "faster new-collector ramp with simulator training" },
    { value: 100, suffix: "%", label: "of calls QA-screened for compliance — not a 2% sample" },
    { value: 3, suffix: "", label: "ROI-ranked opportunities mapped in every audit" },
  ],
};

/* --- The productized entry offer (roadmap Phase 0, item 6) --- */
export const offer = {
  eyebrow: "The entry offer",
  title: "The Collections AI & Automation Audit",
  lead: "One fixed fee, about two weeks, zero disruption to your floor. Before you commit to any build, we map where your operation is losing hours and carrying compliance risk — and what fixing each gap is worth.",
  meta: ["Fixed fee — quoted upfront", "~2 weeks, fully remote", "No tooling changes required"],
  deliverablesTitle: "What you walk away with",
  deliverables: [
    "A structured review of your agent workflows, training, and QA process",
    "Your top 3 productivity & compliance gaps, mapped and prioritized",
    "A build plan with ROI estimates for every recommendation",
    "A report you can execute with us — or without us",
  ],
  cta: { label: "Book the audit", href: "#contact" },
  note: "If we don't find gaps worth fixing, we'll say exactly that — you get a clean bill of health, not an invented project.",
};

export interface CaseStudy {
  icon: IconName;
  tag: string;
  title: string;
  problem: string;
  build: string;
  result: string;
  quote: string;
  who: string;
}

/* Real builds from inside a production US collections BPO, with real
   (role-attributed) quotes. TODO: add named attribution + company once
   you have written permission. */
export const outcomes: { eyebrow: string; title: string; lead: string; items: CaseStudy[] } = {
  eyebrow: "Proof of work",
  title: "Built and used on a live collections floor",
  lead: "No concept decks. Three production builds inside a US collections BPO — with measured results, and the leaders who ran them on record.",
  items: [
    {
      icon: "automation",
      tag: "Automation · Chrome extension",
      title: "The extension that lifted conversations handled by 40%",
      problem:
        "Agents tracked notifications across multiple windows and channels at once, reading each one and typing every reply by hand — handle time ballooned and conversations slipped through.",
      build:
        "A Chrome extension that watches every channel, auto-opens the notification that needs attention next, and pre-types a suggested reply the agent can approve or edit — one workflow instead of window-juggling.",
      result:
        "40% more conversations handled per agent, with lower average handle time per notification.",
      quote:
        "We have beaten our competition by taking in more leads on a daily basis with the automation developed by Arsh.",
      who: "Senior Manager, Operations · US collections BPO",
    },
    {
      icon: "send",
      tag: "Voice AI · Outbound",
      title: "AI voicemails that bring consumers back",
      problem:
        "Most outbound attempts end at an answering machine. Generic one-size-fits-all voicemails earned few callbacks, and every manually-dropped message burned agent time.",
      build:
        "A tool that detects the answering machine as the call connects and drops a personalized, voice-cloned voicemail for that portfolio — and if a real human answers, hands the call straight to an agent.",
      result:
        "More callbacks per voicemail dropped — in whatever voice fits the portfolio — with zero agent minutes wasted talking to machines.",
      quote:
        "I could never believe AI could help us elevate our business before we got this tool implemented.",
      who: "Director, Portfolio Management · US collections BPO",
    },
    {
      icon: "build",
      tag: "CRM · Lead operations",
      title: "From Excel chaos to a CRM that runs the day",
      problem:
        "Lead data lived in Excel — no statuses, no task lists, no alerts. High-priority leads slipped through, and follow-up depended on whoever remembered.",
      build:
        "A CRM that tracks every lead and auto-creates each day's tasks from the lead's type and status, pushing notifications to the portal so high-priority accounts are always worked first.",
      result:
        "Daily task lists generated automatically and high-priority leads no longer lost — the floor works from the CRM, not from spreadsheets.",
      quote:
        "We now have better track of our leads than before, when we were doing it in Excel — moving to the CRM has improved efficiency in the process.",
      who: "Operations Manager · US collections BPO",
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
      q: "Do you only work with collections BPOs?",
      a: "Collections is home turf — it's where our builds ran in production and where we know the workflows and compliance pressure first-hand. The same tooling carries over to other BPO and contact-center operations (healthcare, CX outsourcing), and we take those on selectively.",
    },
    {
      q: "How do you handle FDCPA and compliance?",
      a: "As an engineering input, not an afterthought. Training simulators drill Mini-Miranda and required disclosures, QA automation screens every call, and workflows are built with Reg F in mind. We're engineers, not your lawyers — your compliance team reviews and signs off, and our job is to make that easy.",
    },
    {
      q: "Will this work with our dialer and CRM?",
      a: "Almost certainly. We build on top of what you already run — Five9, Genesys, NICE, Twilio, custom or legacy CRMs. Where a system can't be changed, Chrome extensions let us automate on top of it.",
    },
    {
      q: "Is consumer data safe with AI in the loop?",
      a: "Yes. Private deployments, least-privilege access, PII handling designed in from the start, and no training of third-party models on your data. We work inside your security review, not around it.",
    },
    {
      q: "What exactly is the audit?",
      a: "A fixed-fee engagement of roughly two weeks. We sit with your workflows, training, and QA, map the top three productivity and compliance gaps, and hand you a build plan with ROI estimates for each — yours to execute with us or without us.",
    },
    {
      q: "How do you price engagements?",
      a: "Audit first, at a small fixed fee. Builds are fixed-scope milestones — quoted per outcome, not per hour — with an optional monthly retainer for iteration and support after launch.",
    },
  ],
};

export const contact = {
  eyebrow: "Get started",
  title: "Map your floor's top three gaps",
  lead: "Tell us about your operation — seats, stack, where the hours go. We'll come back within a business day about a fixed-fee audit that maps your best automation and AI opportunities, ROI attached.",
  interests: [
    "AI & Automation Audit",
    "Agent training simulator",
    "Workflow automation / CRM",
    "Compliance & QA automation",
    "Something else",
  ],
};

export const footer = {
  blurb:
    "Custom AI and automation for US collections BPOs — training simulators, workflow automation, and CRM tooling, built by people who've run them on a live floor.",
  columns: [
    {
      title: "Services",
      links: [
        { label: "Training simulators", href: "#services" },
        { label: "Outbound voice automation", href: "#services" },
        { label: "Workflow automation", href: "#services" },
        { label: "CRM customization", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "The audit", href: "#offer" },
        { label: "Why axiomate", href: "#why" },
        { label: "How we work", href: "#process" },
        { label: "Case studies", href: "#outcomes" },
        { label: "FAQ", href: "#faq" },
      ],
    },
  ],
};
