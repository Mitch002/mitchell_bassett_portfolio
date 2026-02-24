export interface AutomationItem {
  title: string;
  outcome: string;
  impact: string;
  status: "Deployed" | "Concept";
  steps: string[];
  tags: string[];
  wide?: boolean;
}

export const AUTOMATIONS: AutomationItem[] = [
  {
    title: "Automated Lead Finder & Enrichment Engine",
    outcome: "Turns target criteria into scored, enriched leads with ready-to-send outreach.",
    impact:
      "Scrapes leads via API, enriches with additional data, generates custom outreach messages, scores by fit, and can send cold outreach directly — eliminating manual prospecting.",
    status: "Deployed",
    steps: [
      "Scrape leads for people or businesses via Apify APIs",
      "Enrich leads with additional data through secondary API calls",
      "Score all leads based on scraped information and fit criteria",
      "Generate custom outreach messages per lead",
      "Send cold outreach directly or notify internal team",
    ],
    tags: ["Python", "Apify APIs", "Lead Gen", "Outreach"],
  },
  {
    title: "Lifecycle Follow-up & Routing",
    outcome: "Ensures every lead gets fast follow-up and correct routing.",
    impact:
      "Automated the path from form submission to owner notification, reducing lead response time and manual triage.",
    status: "Deployed",
    steps: [
      "Capture form submission",
      "Categorize lead by segment and intent signals",
      "Route notification to appropriate owner",
      "Create follow-up task with context in CRM",
    ],
    tags: ["GoHighLevel", "Automation", "Lifecycle"],
  },
  {
    title: "AI GTM Signal Monitor",
    outcome: "Converts market noise into structured signals and themes.",
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
    outcome: "Routes high-intent users to sales and keeps everyone else nurtured.",
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
  {
    title: "Automated Weekly GTM Reporting",
    outcome: "Turns raw performance data into a weekly decision-ready brief.",
    impact:
      "Pulls metrics from analytics and campaign platforms, transforms and normalizes data, generates a formatted summary with highlights and next actions, and delivers to Notion, Slack, and email — eliminating manual reporting.",
    status: "Concept",
    steps: [
      "Pull GA4 + campaign metrics via APIs",
      "Transform and normalize with Python",
      "Generate formatted summary with highlights + next actions",
      "Deliver to Notion, Slack, and email",
    ],
    tags: ["Python", "GA4", "Reporting", "Automation"],
    wide: true,
  },
];
