export interface AutomationItem {
  title: string;
  impact: string;
  status: "Deployed" | "Concept";
  steps: string[];
  tags: string[];
}

export const AUTOMATIONS: AutomationItem[] = [
  {
    title: "Automated Weekly GTM Reporting",
    impact:
      "Eliminated manual reporting by pulling metrics, transforming data, and delivering exec summaries automatically.",
    status: "Deployed",
    steps: [
      "Pull GA4 + campaign metrics via APIs",
      "Transform and normalize with Python",
      "Generate formatted summary with highlights + next actions",
      "Deliver to Notion, Slack, and email",
    ],
    tags: ["n8n", "Python", "GA4", "Reporting"],
  },
  {
    title: "Lifecycle Follow-up & Routing",
    impact:
      "Automated the path from form submission to owner notification, reducing lead response time and manual triage.",
    status: "Deployed",
    steps: [
      "Capture form submission + enrich via API",
      "Categorize lead by segment and intent signals",
      "Route notification to appropriate owner",
      "Create follow-up task with context in CRM",
    ],
    tags: ["HubSpot", "n8n", "Automation", "Lifecycle"],
  },
  {
    title: "AI GTM Signal Monitor",
    impact:
      "Surfaces competitive moves, product reviews, and social mentions into a daily brief — no manual scanning required.",
    status: "Concept",
    steps: [
      "Collect signals: product reviews, competitor pages, social mentions",
      "AI-powered summarization and theme tagging",
      "Score by relevance and urgency",
      "Publish daily signal brief to Notion/Slack",
    ],
    tags: ["AI APIs", "Python", "n8n", "Monitoring"],
  },
  {
    title: "Trial-to-Sales Trigger Router",
    impact:
      "Detects product usage patterns during trial and routes high-intent users to sales or nurture sequences automatically.",
    status: "Concept",
    steps: [
      "Detect product behavior events during trial period",
      "Score user based on activation and engagement signals",
      "Route high-score to sales notification, low-score to nurture",
      "Log outcomes for model refinement",
    ],
    tags: ["Lifecycle", "Automation", "CRM", "AI"],
  },
];
