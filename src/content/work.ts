export interface WorkItem {
  slug: string;
  title: string;
  company: string;
  role: string;
  timeframe: string;
  outcome: string;
  description: string;
  tags: string[];
  href?: string;
  gradient: string;
}

export const WORK_ITEMS: WorkItem[] = [
  {
    slug: "vbrl-growth-experimentation-system",
    title: "Growth Experimentation System",
    company: "VBRL",
    role: "Growth Marketing & Marketing Ops Lead",
    timeframe: "Aug 2024 — Present",
    outcome: "64% increase in paid user acquisition during early testing",
    description:
      "Turned early-stage uncertainty into a repeatable experimentation loop. Built the backlog, measurement, reporting, and iteration systems from scratch.",
    tags: ["GTM", "Lifecycle", "Reporting", "Positioning"],
    href: "/work/vbrl-growth-experimentation-system",
    gradient: "from-indigo-600/20 to-violet-600/20",
  },
  {
    slug: "vbrl-ai-workflow-ops-system",
    title: "AI Workflow Ops System",
    company: "VBRL",
    role: "Growth Marketing & Marketing Ops Lead",
    timeframe: "Aug 2024 — Present",
    outcome:
      "Reduced manual ops and improved internal alignment via standardized reporting",
    description:
      "Operationalized GTM execution with AI-driven workflows. Built monitoring, content distribution support, and internal reporting pipelines.",
    tags: ["Automation", "AI", "Reporting", "Ops"],
    href: "/work/vbrl-ai-workflow-ops-system",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    slug: "riverbend-growth-systems",
    title: "Growth Systems & Automation",
    company: "Riverbend Digital Solutions",
    role: "Founder",
    timeframe: "Jan 2021 — Aug 2024",
    outcome:
      "Built repeatable growth systems for early-stage clients across multiple verticals",
    description:
      "Designed funnel and lifecycle systems, implemented marketing automation workflows, led rebranding initiatives, and established analytics foundations.",
    tags: ["Lifecycle", "Automation", "Positioning", "Analytics"],
    gradient: "from-amber-600/20 to-orange-600/20",
  },
];

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  role: string;
  timeframe: string;
  positioning: string;
  overview: string;
  context: {
    stage: string;
    constraints: string[];
    goals: string[];
  };
  systemDescription: string;
  whatIBuilt: {
    category: string;
    items: string[];
  }[];
  experiments: {
    title: string;
    description: string;
  }[];
  results: {
    metrics: string[];
    qualitative: string[];
  };
  learnings: string[];
  nextIterations: string[];
  tooling: string[];
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "vbrl-growth-experimentation-system": {
    slug: "vbrl-growth-experimentation-system",
    title: "Growth Experimentation System",
    company: "VBRL",
    role: "Growth Marketing & Marketing Ops Lead",
    timeframe: "Aug 2024 — Present",
    positioning:
      "Turning early-stage uncertainty into a repeatable experimentation loop.",
    overview:
      "VBRL needed to move from ad hoc growth tactics to a structured experimentation system. With limited budget, no established funnel data, and multiple AI products in early stages, every dollar and every test needed to generate signal. I designed and built the end-to-end experimentation infrastructure: from backlog prioritization to automated reporting.",
    context: {
      stage: "Early-stage AI product company, pre-scale",
      constraints: [
        "Resource constrained — small team, limited budget",
        "No established baseline metrics or funnel data",
        "Multiple products at different stages of readiness",
        "Need for signal quality over volume",
      ],
      goals: [
        "Build a repeatable process for running growth experiments",
        "Establish measurement infrastructure from scratch",
        "Improve paid user acquisition efficiency",
        "Create a feedback loop between experiments and product decisions",
      ],
    },
    systemDescription:
      "The system follows a continuous loop: inputs (market research, product signals, competitor analysis) feed an experiment backlog. Each experiment is scoped, prioritized, executed, and measured. Results flow into automated reporting that surfaces signals for the next cycle.",
    whatIBuilt: [
      {
        category: "Data & Measurement",
        items: [
          "Funnel measurement framework in GA4 with UTM taxonomy",
          "Custom event tracking for activation and conversion signals",
          "Baseline metrics dashboard for pre/post comparison",
        ],
      },
      {
        category: "Automation & Reporting",
        items: [
          "Weekly reporting automation (n8n + Python) delivering summaries to Notion and Slack",
          "Experiment status tracker with automated alerts on completion thresholds",
          "Campaign performance aggregation pipeline",
        ],
      },
      {
        category: "Lifecycle & Assets",
        items: [
          "Landing page iteration workflow: copy, layout, and asset readiness checklist",
          "Messaging framework tied to audience segments and experiment hypotheses",
          "Content readiness pipeline for launch-supporting assets",
        ],
      },
      {
        category: "Process & Operations",
        items: [
          "Experiment backlog and prioritization system in Notion/ClickUp",
          "ICE scoring framework adapted for early-stage constraints",
          "Cross-functional handoff process for experiment results",
        ],
      },
    ],
    experiments: [
      {
        title: "Paid Test Loop",
        description:
          "3 creative variants across 2 landing page versions, measuring activation rate as the primary signal. Iterated weekly based on cost-per-activation, not just CTR.",
      },
      {
        title: "Messaging Test Loop",
        description:
          "Mapped competitor narrative positioning, then tested 4 alternative value prop angles through organic + low-budget paid. Tracked which framing drove higher engagement and sign-up intent.",
      },
      {
        title: "Audience Validation",
        description:
          "Combined community engagement signals with low-budget paid targeting to validate audience segments before scaling spend.",
      },
    ],
    results: {
      metrics: [
        "64% increase in paid user acquisition during early testing phase",
        "Reduced experiment cycle time from ad hoc to structured weekly cadence",
      ],
      qualitative: [
        "Improved execution speed through automated reporting and clear prioritization",
        "Reduced manual reporting time — weekly summaries generated automatically",
        "Established a repeatable process that scaled across multiple product launches",
      ],
    },
    learnings: [
      "In early-stage, signal quality matters more than volume. I learned to design experiments that answer one question clearly, rather than testing many variables at once.",
      "Automated reporting changed the team dynamic. When results are visible and consistent, stakeholders trust the process and decisions happen faster.",
      "Messaging frameworks need to be living documents. The positioning that works in week 1 rarely survives contact with real user feedback.",
    ],
    nextIterations: [
      "Build a cohort analysis layer to track user quality beyond initial acquisition",
      "Implement multi-touch attribution to understand which experiment combinations drive conversion",
      "Create a self-serve experiment request system for product and sales teams",
      "Add predictive scoring to the backlog prioritization based on historical experiment outcomes",
    ],
    tooling: [
      "GA4",
      "n8n",
      "Python",
      "Notion",
      "ClickUp",
      "Meta Business Suite",
      "HubSpot",
    ],
  },
  "vbrl-ai-workflow-ops-system": {
    slug: "vbrl-ai-workflow-ops-system",
    title: "AI Workflow Ops System",
    company: "VBRL",
    role: "Growth Marketing & Marketing Ops Lead",
    timeframe: "Aug 2024 — Present",
    positioning:
      "Operationalizing GTM execution with AI-driven workflows.",
    overview:
      "As VBRL scaled its GTM efforts across multiple AI products, manual operations became a bottleneck. I designed and built a system of AI-driven workflows using n8n and Python that automated monitoring, content distribution support, and internal reporting — turning scattered manual processes into reliable, consistent operations.",
    context: {
      stage: "Early-stage, scaling GTM operations across multiple products",
      constraints: [
        "Small team handling multiple product lines simultaneously",
        "Manual monitoring and reporting consuming significant time",
        "Inconsistent internal communication on GTM progress",
        "Need for speed without adding headcount",
      ],
      goals: [
        "Automate repetitive monitoring and reporting tasks",
        "Standardize internal GTM communication",
        "Build a scalable ops layer that works across product lines",
        "Free up team capacity for strategic work",
      ],
    },
    systemDescription:
      "The system uses n8n as the orchestration layer, connecting data sources to Python transformation scripts, then routing outputs to the appropriate channels. Sources include analytics platforms, social channels, and internal tools. Outputs land in Notion dashboards, Slack channels, and email summaries.",
    whatIBuilt: [
      {
        category: "Monitoring & Alerts",
        items: [
          "Automated alerts from key channels: social mentions, community signals, and relevant competitor activity",
          "Threshold-based notifications for campaign performance anomalies",
          "Daily digest of key metrics and notable changes",
        ],
      },
      {
        category: "Content Distribution Support",
        items: [
          "Scheduling and formatting assistance for multi-channel content distribution",
          "Internal approval workflow for content assets before publication",
          "Asset tracking system to maintain version control and distribution status",
        ],
      },
      {
        category: "Internal Reporting",
        items: [
          "Automated pipeline: metrics collection, transformation, and summary generation",
          "Weekly executive briefing with highlights, blockers, and recommended next actions",
          "Standardized report templates that work across product lines",
        ],
      },
      {
        category: "Data Enrichment",
        items: [
          "Basic lead enrichment via API integrations where applicable",
          "Automated tagging and categorization of inbound signals",
          "Data normalization across tools for consistent reporting",
        ],
      },
    ],
    experiments: [
      {
        title: "Monitoring Automation",
        description:
          "Replaced manual daily check-ins across 5+ channels with an automated monitoring pipeline. Reduced time spent on status checks while improving signal coverage.",
      },
      {
        title: "Report Automation",
        description:
          "Built an n8n workflow that pulls data from GA4 and campaign platforms, runs Python transformations, and delivers a formatted weekly summary to Notion and Slack.",
      },
    ],
    results: {
      metrics: [
        "Reduced manual reporting time by automating weekly summaries end-to-end",
        "Expanded monitoring coverage across channels without additional headcount",
      ],
      qualitative: [
        "Improved speed and consistency of internal GTM communication",
        "Better internal alignment through standardized, automated reporting",
        "Freed team capacity for strategic work by eliminating repetitive ops tasks",
        "Created a reusable ops infrastructure that scales across product lines",
      ],
    },
    learnings: [
      "Start with the highest-friction manual process. The first automation you build should save the most time, which builds trust in the system.",
      "Standardized templates matter more than sophisticated automation. A simple, consistent report that ships every week beats a complex dashboard nobody checks.",
      "Error handling is critical in automation pipelines. I learned to build in fallbacks and notifications so failures are caught immediately, not discovered days later.",
    ],
    nextIterations: [
      "Add AI-powered summarization to the reporting pipeline for executive-ready briefs",
      "Build a feedback loop where report readers can flag items for deeper analysis",
      "Implement cross-product signal correlation to identify shared opportunities",
      "Create a self-healing pipeline that automatically retries failed data pulls",
    ],
    tooling: [
      "n8n",
      "Python",
      "AI APIs",
      "Notion",
      "Slack",
      "GA4",
      "HubSpot",
    ],
  },
};
