export interface Capability {
  title: string;
  bullets: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    title: "GTM Systems Design",
    bullets: [
      "Build end-to-end GTM infrastructure: acquisition → conversion → retention",
      "Define lifecycle stages, handoffs, and qualification criteria",
    ],
  },
  {
    title: "Lifecycle, CRM & Routing",
    bullets: [
      "CRM setup + pipeline structure",
      "Lead capture → follow-up → nurture → assignment logic",
      "Missed lead recovery, reactivation, and scoring triggers",
    ],
  },
  {
    title: "Automation & AI Workflows",
    bullets: [
      "Workflow orchestration with n8n",
      "Python for data cleanup, enrichment, transforms",
      "AI-assisted summarization, tagging, drafting, and reporting",
      "Webhooks & API integrations",
    ],
  },
  {
    title: "Measurement & Experimentation",
    bullets: [
      "Event + funnel thinking (what to track, why it matters)",
      "UTM discipline, conversion tracking, weekly reporting loops",
      "Early-stage experimentation: optimize for signal, not vanity metrics",
    ],
  },
  {
    title: "Positioning to Execution",
    bullets: [
      "Turn positioning into usable assets: landing pages, emails, ads, proof",
      "SEO research and content planning",
      "Market + competitor research for messaging clarity",
    ],
  },
  {
    title: "Operating Rhythm & Coordination",
    bullets: [
      "Build operating systems in Notion/ClickUp",
      "Weekly priorities, reporting, cross-functional coordination",
      "Founder-friendly updates and learnings",
    ],
  },
];

export interface ToolCategory {
  label: string;
  tools: string[];
}

export const TOOLS: ToolCategory[] = [
  { label: "CRM & Lifecycle", tools: ["HubSpot", "GoHighLevel"] },
  { label: "Analytics & Tracking", tools: ["GA4", "Google Search Console"] },
  {
    label: "Paid & Distribution",
    tools: ["Meta Business Suite"],
  },
  {
    label: "Automation & Technical",
    tools: ["n8n", "Python", "AI APIs", "Webhooks & API Integrations"],
  },
  { label: "SEO & Research", tools: ["SEMrush", "Ahrefs"] },
  { label: "Ops & Documentation", tools: ["Notion", "ClickUp"] },
  {
    label: "Build & Design",
    tools: ["Next.js", "Tailwind CSS", "Framer Motion", "Figma"],
  },
];
