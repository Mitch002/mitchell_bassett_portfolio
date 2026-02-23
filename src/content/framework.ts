export interface FrameworkItem {
  number: string;
  title: string;
  message: string;
  includes: string[];
  callout?: string;
  successMetric: string;
}

export const FRAMEWORK: FrameworkItem[] = [
  {
    number: "01",
    title: "Demand Capture & Acquisition",
    message: "If someone needs what you do today, can they find you?",
    includes: [
      "Paid testing and iteration",
      "Search intent and SEO foundations",
      "Landing page design and optimization",
      "Content distribution and channel selection",
    ],
    successMetric:
      "Qualified traffic increases without proportional spend increases",
  },
  {
    number: "02",
    title: "Conversion Infrastructure",
    message: "Leads are useless if they aren't converted.",
    includes: [
      "Instant follow-up and routing automation",
      "Lifecycle nurture sequences",
      "Reactivation workflows",
      "Funnel measurement and optimization",
    ],
    callout: "Most teams don't need more leads. They need better systems.",
    successMetric: "Lead-to-customer conversion rate improves consistently",
  },
  {
    number: "03",
    title: "Authority & Positioning",
    message:
      "When someone checks you out, do you look like the obvious choice?",
    includes: [
      "Social proof and case study development",
      "Messaging clarity and value prop testing",
      "Site credibility and trust signals",
      "Narrative consistency across channels",
    ],
    successMetric: "Shorter sales cycles and higher close rates",
  },
  {
    number: "04",
    title: "Expansion via Relationships",
    message: "The highest-value growth often comes from relationships.",
    includes: [
      "Partnership and referral loop design",
      "Stakeholder enablement materials",
      "Systemized outreach workflows",
      "Community-driven growth channels",
    ],
    callout: "We systemize relationships instead of hoping for them.",
    successMetric: "Referral and partner-sourced pipeline grows quarter over quarter",
  },
];
