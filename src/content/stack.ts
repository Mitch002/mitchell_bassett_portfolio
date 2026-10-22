export interface Capability {
  title: string;
  bullets: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    title: "Growth Strategy & Acquisition",
    bullets: [
      "Market research, positioning, offer development, and channel planning",
      "Paid campaign strategy, creative testing, and lead generation",
    ],
  },
  {
    title: "Lifecycle, CRM & Routing",
    bullets: [
      "GoHighLevel workflows, pipeline structure, and segmentation",
      "Lead capture, qualification, follow-up, nurture, and appointment logic",
      "Email and SMS sequences, routing, and reactivation",
    ],
  },
  {
    title: "Automation & AI Workflows",
    bullets: [
      "n8n and Python workflows for marketing operations",
      "AI-assisted research, monitoring, content, and reporting",
      "Webhooks and API integrations",
    ],
  },
  {
    title: "Measurement & Experimentation",
    bullets: [
      "Meta Pixel, Conversions API, GA4, GTM, and RedTrack",
      "Event deduplication, UTMs, click IDs, and attribution troubleshooting",
      "Funnel analysis, landing page tests, and performance reporting",
    ],
  },
  {
    title: "Positioning to Execution",
    bullets: [
      "Translate technical products and business needs into clear messages",
      "Build landing pages, ads, emails, and creative briefs",
      "Use market and competitor research to sharpen positioning",
    ],
  },
  {
    title: "Operating Rhythm & Coordination",
    bullets: [
      "Business owner, founder, and client communication",
      "Coordinate media buyers, developers, and vendors",
      "Document workflows and improve repeatable processes",
    ],
  },
];

export interface ToolCategory {
  label: string;
  tools: string[];
}

export const TOOLS: ToolCategory[] = [
  { label: "CRM & Lifecycle", tools: ["GoHighLevel", "HubSpot exposure", "Mailchimp"] },
  { label: "Analytics & Tracking", tools: ["GA4", "Google Tag Manager", "Meta Pixel", "Meta Conversions API", "RedTrack"] },
  {
    label: "Paid & Distribution",
    tools: ["Meta Ads", "Google Ads", "Meta Business Suite"],
  },
  {
    label: "Automation & Technical",
    tools: ["n8n", "Python", "Webhooks", "API integrations"],
  },
  { label: "Web & Funnel Development", tools: ["GoHighLevel funnels", "HTML", "CSS", "JavaScript", "WordPress", "Elementor"] },
  { label: "Ops & Documentation", tools: ["Notion", "ClickUp"] },
  { label: "Additional technical exposure", tools: ["Next.js", "Node.js", "Supabase", "GitHub", "AI APIs"] },
];
