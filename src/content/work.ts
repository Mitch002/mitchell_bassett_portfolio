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
    slug: "full-funnel-revenue-automation-system",
    title: "Full-Funnel Revenue & Automation System",
    company: "Chiropractic Clinic (NDA)",
    role: "Growth & Automation Lead (Strategy + Execution)",
    timeframe: "Active Engagement",
    outcome:
      "Built a full lifecycle revenue engine — from paid traffic conversion through review acquisition and dormant contact reactivation.",
    description:
      "Took ownership of strategy and execution for the growth funnel. Built automation infrastructure across CRM, SMS, email, and review generation.",
    tags: ["Funnel Design", "Automation", "CRM", "Reactivation"],
    href: "/work/full-funnel-revenue-automation-system",
    gradient: "from-amber-600/20 to-orange-600/20",
  },
  {
    slug: "developer-ecosystem-gtm-engine",
    title: "Developer Ecosystem GTM Engine",
    company: "Confidential AI Infrastructure Client (NDA)",
    role: "GTM Lead (Contracted Team Lead)",
    timeframe: "3-Month Engagement",
    outcome:
      "Authored a 50-page GTM strategy, architected the acquisition funnel, and led execution — resulting in an overfilled hackathon with ~70% live attendance.",
    description:
      "Designed and executed the go-to-market strategy for a developer-focused AI platform launch, centered around hackathon activation and community acquisition.",
    tags: ["Developer GTM", "Hackathon", "Community", "Reactivation"],
    href: "/work/developer-ecosystem-gtm-engine",
    gradient: "from-indigo-600/20 to-violet-600/20",
  },
  {
    slug: "deep-tech-monetization-node-sale-gtm",
    title: "Deep Tech Monetization Architecture & Node Sale GTM",
    company: "Confidential zk Infrastructure Project (NDA)",
    role: "Primary GTM Lead",
    timeframe: "Pre-Launch Engagement",
    outcome:
      "Designed the complete node sale economics, pricing ladder, and launch infrastructure — ready for execution prior to public release.",
    description:
      "Led go-to-market strategy for a zk infrastructure project, building monetization architecture, investor narratives, and community funnels from scratch.",
    tags: ["Monetization", "Node Economics", "Positioning", "Funnel Design"],
    href: "/work/deep-tech-monetization-node-sale-gtm",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    slug: "consumer-growth-paid-conversion",
    title: "Consumer Growth & Paid Conversion Optimization",
    company: "Confidential Gamified Web3 Platform (NDA)",
    role: "Head of Marketing / Growth Lead",
    timeframe: "Active Engagement",
    outcome:
      "Increased paid user base by 64% through conversion-first strategy — reactivating warm users, targeted crypto acquisition, and community-driven competitions.",
    description:
      "Took over all marketing for a live gamified Web3 platform, shifting strategy from vanity metrics to paid conversion optimization.",
    tags: ["Conversion", "Reactivation", "Paid Acquisition", "Community"],
    href: "/work/consumer-growth-paid-conversion",
    gradient: "from-rose-600/20 to-pink-600/20",
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
  objective?: string;
  sections: {
    title: string;
    content: string;
    bullets?: string[];
    subsections?: {
      title: string;
      content?: string;
      bullets?: string[];
    }[];
  }[];
  demonstrates: string[];
  strategicTakeaway: {
    intro: string;
    points: string[];
    conclusion?: string;
  };
}

export const CASE_STUDIES: Record<string, CaseStudy> = {
  "full-funnel-revenue-automation-system": {
    slug: "full-funnel-revenue-automation-system",
    title: "Full-Funnel Revenue & Automation System",
    company: "Chiropractic Clinic (NDA)",
    role: "Growth & Automation Lead (Strategy + Execution)",
    timeframe: "Active Clinic, Paid Traffic Running",
    positioning:
      "Building a conversion system — not just running ads.",
    overview:
      "I joined an active chiropractic clinic to assist with growth and revenue optimization. The clinic was already running paid ads, but the system lacked cohesive funnel architecture, automation depth, conversion routing logic, structured review acquisition, reactivation systems, and lead segmentation discipline. I took ownership of strategy and execution for the growth funnel and built a full lifecycle revenue engine.",
    objective:
      "Increase appointment bookings and revenue by optimizing paid traffic conversion, improving lead follow-up, building automation systems, increasing review acquisition, reactivating dormant contacts, and eliminating lead leakage. This was not about running ads. It was about building a conversion system.",
    sections: [
      {
        title: "Top of Funnel — Paid Social",
        content:
          "Traffic was driven through Facebook Ads following a structured flow: Facebook Ad → Landing Page → Form Submission → Automated Conversion Engine. We developed and deployed two A/B tested landing pages to optimize offer messaging, layout, conversion rate, and form completion. Every form submission initiated a structured automation cascade.",
        bullets: [
          "Facebook Ads as primary traffic source",
          "Two A/B tested landing pages deployed",
          "Optimized offer messaging, layout, and conversion rate",
          "Every form submission triggered automated follow-up",
        ],
      },
      {
        title: "Lead Capture & Pipeline Automation",
        content:
          "Once a lead submitted a form, they were automatically added to the CRM pipeline (GoHighLevel), tagged and segmented, assigned to a new lead stage, and triggered into multi-step automation. No manual lead handling was required at the initial stage. Everything was automated.",
        bullets: [
          "Immediate SMS follow-up",
          "Email confirmation",
          "Internal team notifications",
          "Appointment reminder sequences",
          "Nurture campaigns until booking",
        ],
      },
      {
        title: "Lifecycle Automation",
        content:
          "This system extended beyond booking. After the second patient visit, a satisfaction rating automation triggered. Patients received a text asking: \"On a scale of 1–5, how would you rate your experience?\" Based on response, patients were routed to different workflows. This protected reputation while actively generating reviews.",
        subsections: [
          {
            title: "Review Routing Logic",
            bullets: [
              "4–5 rating → Routed to Google review campaign workflow",
              "1–3 rating → Routed to internal feedback request workflow",
              "Negative feedback triggered follow-up: \"What could we improve?\"",
            ],
          },
          {
            title: "Review Milestone",
            bullets: [
              "53 Google reviews at time of milestone push",
              "5.0 average rating (with one 4-star)",
              "Campaign built around surpassing 50 reviews to amplify social proof",
            ],
          },
        ],
      },
      {
        title: "Reactivation Campaign",
        content:
          "The clinic had a large number of old contacts. I built a structured reactivation engine that turned stale contacts into warm revenue opportunities. Every response triggered dynamic automation pathways.",
        bullets: [
          "Special promotional offers",
          "SMS + email sequences",
          "Conditional routing based on responses",
          "Non-response follow-up logic",
          "Segmentation by engagement level",
        ],
        subsections: [
          {
            title: "Lead Outcomes",
            bullets: [
              "Rebooked",
              "Routed to sales",
              "Triggered into nurture",
              "Or recycled based on status",
            ],
          },
        ],
      },
      {
        title: "Offer Engineering",
        content:
          "We structured promotions to reduce entry friction, increase initial bookings, and transition patients into higher-value treatment plans.",
        bullets: [
          "$47 Spinal Decompression",
          "$97 InvisaRed + InBody bundle",
          "Scarcity-based voucher campaigns",
        ],
      },
      {
        title: "Automation Infrastructure Highlights",
        content:
          "I personally built the complete automation infrastructure. The clinic transitioned from partial automation to a full revenue system.",
        subsections: [
          {
            title: "Systems Built",
            bullets: [
              "Landing pages",
              "GHL automation flows",
              "SMS sequences",
              "Email nurture systems",
              "Lead tagging architecture",
              "Pipeline stage logic",
              "Review generation workflows",
              "Reactivation campaign routing",
            ],
          },
          {
            title: "Every Lead Was",
            bullets: [
              "Tagged",
              "Segmented",
              "Tracked",
              "Routed dynamically",
              "Followed up automatically",
            ],
          },
        ],
      },
    ],
    demonstrates: [
      "Funnel design beyond paid traffic",
      "Lifecycle automation",
      "Conditional workflow branching",
      "CRM logic architecture",
      "A/B landing page optimization",
      "Review acquisition infrastructure",
      "Lead reactivation systems",
      "Revenue-first conversion design",
    ],
    strategicTakeaway: {
      intro: "Most clinics focus on generating leads. I focused on:",
      points: [
        "Maximizing conversion",
        "Automating follow-up",
        "Protecting reputation",
        "Leveraging social proof",
        "Monetizing dormant databases",
        "Building structured pipelines",
      ],
      conclusion:
        "The result was a scalable, automated patient acquisition system that reduced lead waste and improved appointment flow.",
    },
  },

  "developer-ecosystem-gtm-engine": {
    slug: "developer-ecosystem-gtm-engine",
    title: "Developer Ecosystem GTM Engine",
    company: "Confidential AI Infrastructure Client (NDA)",
    role: "GTM Lead (Contracted Team Lead)",
    timeframe: "3-Month Engagement",
    positioning:
      "Building a fully operational, repeatable developer acquisition system.",
    overview:
      "I was brought in to lead a contracted team responsible for designing and executing the go-to-market strategy for a new developer-focused launch platform in the AI ecosystem. The core objective was not brand awareness — it was to attract serious developers, get them building, and seed a technical ecosystem around the platform. Over a 3-month engagement, I authored a 50-page GTM strategy, architected the funnel, allocated budget, built the acquisition engine, and led execution across hackathon activation strategy, email reactivation campaigns, community acquisition, landing pages, automation workflows, paid targeting, influencer amplification, and event partnerships.",
    objective:
      "How do you attract serious technical builders with limited capital and fragmented infrastructure? Rather than run generic awareness campaigns, I designed the entire GTM strategy around an in-person hackathon. The hackathon functioned as a developer acquisition mechanism, a product activation filter, a high-intent conversion event, and ecosystem signaling to serious builders. This shifted GTM from passive marketing into behavior-driven conversion. Developers didn't just read about the platform. They built on it.",
    sections: [
      {
        title: "Awareness & Education",
        content:
          "I developed the core positioning and messaging framework and structured a funnel that prioritized technical credibility over hype. The messaging emphasized platform utility and builder-first positioning.",
        bullets: [
          "Targeted developer paid ads",
          "Influencer marketing",
          "Event amplification (including partnership exposure at TOKEN2049)",
          "Email reactivation campaigns",
          "Community outreach",
        ],
      },
      {
        title: "Hackathon Conversion Engine",
        content:
          "I built two custom landing pages that supported registration, information flow, confirmation sequences, reminder automations, abandoned registration follow-up, and pre-event educational drip campaigns. The primary conversion event was hackathon signup. The registration list ultimately became overfilled.",
        bullets: [
          "~70% live attendance for an in-person event — a strong show rate given constraints and limited paid spend",
          "Hundreds of developer signups driven through the funnel",
          "Overfilled registration list",
        ],
      },
      {
        title: "Global Email List Reactivation",
        content:
          "One of the highest leverage moves was reactivating a dormant global email database of 50,000+ contacts. The dataset was messy and underutilized. Despite imperfect data, this became one of the top-performing acquisition channels. Most hackathon signups were driven through owned distribution and community channels rather than paid ads, which dramatically increased capital efficiency.",
        bullets: [
          "Cleaned and segmented the data where possible",
          "Built targeted messaging streams",
          "Created educational nurture campaigns",
          "Launched hackathon invitations",
          "Implemented automated follow-ups",
          "Ran review and feedback flows",
        ],
      },
      {
        title: "Community Acquisition Strategy",
        content:
          "Because budget was limited, I engineered leverage instead of increasing spend. I identified expired developer Meetup groups in the hackathon's geographic region and acquired ownership for a minimal fee. This consolidated an ~800-member developer community. It was one of the highest-ROI channels in the campaign.",
        bullets: [
          "Reduced reliance on paid media",
          "Increased event credibility",
          "Generated high-intent signups",
          "Created local developer density for an in-person event",
        ],
      },
      {
        title: "Paid Media Strategy",
        content:
          "Paid ads were used conservatively and strategically. Most conversions did not come from cold paid traffic. The majority of signups were community-driven and owned-channel driven.",
        bullets: [
          "Target developers specifically",
          "Retarget interested prospects",
          "Reinforce community and email-driven campaigns",
        ],
      },
      {
        title: "Automation & Tracking Infrastructure",
        content:
          "I designed and implemented custom automation systems. No interaction went unmanaged.",
        bullets: [
          "Behavioral tagging",
          "Segmented email workflows",
          "Registration logic",
          "Reminder sequences",
          "Post-event follow-up paths",
          "Nurture campaigns for non-registrants",
          "Lifecycle segmentation",
        ],
        subsections: [
          {
            title: "Every Lead Entered a Defined Pathway",
            bullets: [
              "Registered",
              "Abandoned registration",
              "Attended",
              "No-show",
              "General subscriber",
              "Community member",
            ],
          },
        ],
      },
      {
        title: "Hackathon Outcome",
        content:
          "The event validated developer interest and generated a pipeline of technical builds. More importantly, it established a repeatable developer activation model for the platform moving forward.",
        bullets: [
          "Overfilled registration",
          "~70% in-person attendance rate",
          "Hundreds of developer signups",
          "Strong portfolio of projects built during the hackathon",
        ],
      },
      {
        title: "The 50-Page GTM Blueprint",
        content:
          "As part of this engagement, I authored a 50-page GTM plan. This was not a campaign deck. It was a full operational growth blueprint.",
        bullets: [
          "ICP and developer persona mapping",
          "Messaging framework",
          "Funnel architecture",
          "Channel sequencing",
          "Budget allocation",
          "Lifecycle automation",
          "Paid targeting design",
          "Community growth tactics",
          "Influencer integration",
          "Hackathon structure",
          "Post-event retention and activation",
          "Analytics and tracking framework",
        ],
      },
    ],
    demonstrates: [
      "Funnel engineering under capital constraints",
      "Large-scale email reactivation",
      "Database cleanup and segmentation strategy",
      "Community acquisition leverage",
      "Lifecycle automation design",
      "Event-driven acquisition systems",
      "Developer ecosystem activation",
    ],
    strategicTakeaway: {
      intro:
        "I didn't simply run marketing campaigns. I built infrastructure that connected awareness, activation, and build momentum into a coherent developer acquisition engine.",
      points: [
        "Funnel engineering under capital constraints",
        "Large-scale email reactivation",
        "Database cleanup and segmentation strategy",
        "Community acquisition leverage",
        "Lifecycle automation design",
        "Event-driven acquisition systems",
        "Developer ecosystem activation",
      ],
    },
  },

  "deep-tech-monetization-node-sale-gtm": {
    slug: "deep-tech-monetization-node-sale-gtm",
    title: "Deep Tech Monetization Architecture & Node Sale GTM",
    company: "Confidential zk Infrastructure Project (NDA)",
    role: "Primary GTM Lead",
    timeframe: "Pre-Launch (Testnet Not Live)",
    positioning:
      "Designing the economic and launch engine — not just marketing the project.",
    overview:
      "I led the go-to-market strategy for a confidential zk infrastructure project building within the TON ecosystem, positioning itself as a zkEVM Layer 2 solution. At the time of engagement, testnet was not yet live, no public sale infrastructure existed, no node pricing model existed, no structured investor narrative existed, and no community funnel was built. My responsibility was to design and prepare the complete monetization and launch infrastructure prior to public release. Although the node sale ultimately did not launch, I built the full economic and GTM system architecture ready for execution.",
    objective:
      "Design a monetization engine that would sell nodes strategically, create structured price appreciation, incentivize early participants, build technical credibility, attract node operators and investors, and sequence messaging correctly relative to product maturity. This was not a retail token launch. It was infrastructure monetization.",
    sections: [
      {
        title: "Narrative & Positioning Pivot",
        content:
          "I owned the positioning strategy. The original narrative lacked clarity and differentiation. I reframed the project around: zkEVM Layer 2 infrastructure within the TON ecosystem. I aligned content strategy to emphasize technical infrastructure over token speculation.",
        bullets: [
          "Technical authority framing",
          "Clear differentiation",
          "Alignment with Telegram/TON narrative momentum",
          "Avoidance of speculative hype framing",
        ],
      },
      {
        title: "Node Sale Economics Architecture",
        content:
          "I personally designed the node pricing model. The economic structure was engineered to balance scarcity, accessibility, and long-term revenue.",
        subsections: [
          {
            title: "Core Mechanics",
            bullets: [
              "Total Node Cap: 50,000",
              "Whitelist Allocation: 250 nodes (included in cap)",
              "Starting Price: ~$2,000 per node",
              "Progressive Price Escalation",
              "Final Target Price: ~$33,000 per node",
            ],
          },
          {
            title: "Pricing Ladder Design",
            bullets: [
              "Reward early operators",
              "Encourage velocity",
              "Create predictable appreciation",
              "Control scarcity perception",
            ],
          },
          {
            title: "Hosting Monetization Layer",
            content: "In addition to node ownership, I designed an optional cloud hosting model.",
            bullets: [
              "$7/month operational hosting option",
              "Discount incentives for 6–12 month prepay",
              "Created recurring revenue potential alongside node sales",
            ],
          },
        ],
      },
      {
        title: "Sale Infrastructure & Funnel Design",
        content:
          "Although I did not implement payment systems directly, I defined the technical requirements and handed execution specifications to the development team.",
        subsections: [
          {
            title: "Sale Infrastructure Preparation",
            bullets: [
              "Landing pages built",
              "Telegram groups structured as primary community hub",
              "QR-based acquisition system for live events",
              "Linktree routing to landing page, Telegram groups, and pitch materials",
            ],
          },
          {
            title: "Email Capture & Segmentation Strategy",
            content: "At in-person events, QR codes directed participants to gated materials requiring email submission. This turned real-world attention into trackable pipeline.",
            bullets: [
              "Lead tagging by source",
              "Event-based segmentation",
              "Drip campaigns post-event",
              "Investor vs node operator separation",
            ],
          },
        ],
      },
      {
        title: "Investor & Node Operator Pitch System",
        content:
          "I designed and authored all node sale pitch materials. I worked with the design team by providing content structure, visual direction, economic flow narrative, and slide hierarchy.",
        bullets: [
          "Node economics breakdown",
          "Revenue logic",
          "Scarcity modeling",
          "Roadmap sequencing",
          "Technical positioning slides",
        ],
        subsections: [
          {
            title: "Structured For",
            bullets: [
              "Direct investor conversations",
              "Conference-level outreach",
              "Strategic ecosystem positioning",
            ],
          },
        ],
      },
      {
        title: "Community Infrastructure",
        content:
          "Telegram was the primary community channel. Community was not treated as passive chat. It was treated as a conversion funnel.",
        bullets: [
          "Designed group structuring strategy",
          "Planned onboarding messaging",
          "Structured drip sequences tied to interest level",
          "Built segmentation logic for investors vs technical participants",
        ],
      },
      {
        title: "Influencer & Content Strategy",
        content:
          "Because testnet was not yet live, messaging emphasized technical potential, infrastructure vision, and zk architecture differentiation. This sequencing was deliberate risk mitigation.",
        bullets: [
          "Influencer outreach",
          "Content sequencing",
          "Announcement timing relative to product maturity",
          "Educational vs promotional balance",
          "Avoided overpromising, token speculation hype, and misaligned expectations",
        ],
      },
      {
        title: "Launch Readiness State",
        content:
          "By the end of my engagement, the full GTM monetization architecture was designed and ready for execution. The node sale did not ultimately launch. However, the complete system was built.",
        bullets: [
          "Node pricing structure complete",
          "Sale mechanics modeled",
          "Landing pages live",
          "Telegram funnel built",
          "QR acquisition system deployed",
          "Investor decks finalized",
          "Email capture + drip logic structured",
          "Content strategy aligned",
          "Influencer pipeline initiated",
        ],
      },
    ],
    demonstrates: [
      "Technical product positioning",
      "Scarcity-based monetization modeling",
      "Progressive price ladder design",
      "Recurring revenue layer integration",
      "Sale funnel engineering",
      "Investor-facing narrative construction",
      "Event-based lead capture mechanics",
      "Community funnel logic",
      "Pre-launch sequencing discipline",
    ],
    strategicTakeaway: {
      intro: "Pre-launch deep tech GTM requires:",
      points: [
        "Technical credibility",
        "Sequenced messaging",
        "Economic precision",
        "Funnel design prior to hype",
        "Controlled narrative timing",
      ],
      conclusion:
        "This engagement allowed me to design monetization infrastructure for a complex zk project before any sale was public.",
    },
  },

  "consumer-growth-paid-conversion": {
    slug: "consumer-growth-paid-conversion",
    title: "Consumer Growth & Paid Conversion Optimization",
    company: "Confidential Gamified Web3 Platform (NDA)",
    role: "Head of Marketing / Growth Lead",
    timeframe: "Live Product, Low Paid Conversion",
    positioning:
      "Building the monetization engine on top of an existing product.",
    overview:
      "I took over all marketing responsibilities for a gamified Web3 platform that had a live product, a working gamification system, a small number of paid verified users, an earlier influencer push that generated free signups, and a large portion of users who played once and never converted. The core issue was not awareness. It was conversion. The primary objective was clear: increase the number of paid verified users.",
    objective:
      "I shifted the strategy away from pure traffic growth, influencer-only acquisition, and passive engagement metrics — and toward paid user acquisition, paid conversion optimization, reactivation of existing warm users, and capital-efficient marketing. The mission was not \"more users.\" It was more paying users.",
    sections: [
      {
        title: "Reactivation of Existing Free Users",
        content:
          "One of the largest opportunities was the existing pool of free users who had played once, joined via influencer campaigns, and never upgraded to paid verification. Because we had Telegram notification access to this audience, I implemented a structured reactivation campaign. Instead of chasing cold audiences, I first monetized warm users. This became one of the most efficient sources of growth.",
        bullets: [
          "Targeted announcement sequences",
          "Community competitions",
          "Urgency-based messaging",
          "Paid verification positioning",
          "Incentive framing around participation and advantage",
        ],
      },
      {
        title: "Targeted Paid Acquisition (Crypto-Native Networks)",
        content:
          "I launched targeted paid campaigns specifically within crypto-native ad networks. Rather than broad awareness traffic, we targeted high-intent crypto users familiar with token farming ecosystems and community-driven participants. Paid was performance-focused — not mass awareness spend. The objective was always paid conversion.",
        bullets: [
          "High-intent crypto users",
          "Users familiar with token farming ecosystems",
          "Community-driven participants",
          "Performance-focused spend",
        ],
      },
      {
        title: "Community-Driven Competitions",
        content:
          "To increase urgency and engagement, I introduced structured community competitions. Community became a conversion lever rather than a passive chat channel.",
        bullets: [
          "Increase participation",
          "Increase perceived value of verification",
          "Create visible momentum inside the community",
          "Drive free users to upgrade",
        ],
      },
      {
        title: "Results",
        content:
          "Through this conversion-first strategy, growth was achieved through paid optimization, reactivation systems, community engagement, and targeted crypto acquisition channels. This was not dependent on a token launch or airdrop hype.",
        bullets: [
          "Paid user base increased by 64%",
          "Significant portion of growth came from reactivated free users",
          "Cold acquisition spend remained controlled",
          "Conversion became the dominant KPI over vanity metrics",
        ],
      },
      {
        title: "What Was Not Used",
        content:
          "The growth came from structured conversion mechanics — not artificial hype.",
        bullets: [
          "Did not launch a token",
          "Did not execute a public airdrop",
          "Did not depend on speculative token hype",
          "Did not inflate metrics with low-quality traffic",
          "Did not over-rely on influencers",
        ],
      },
    ],
    demonstrates: [
      "Conversion rate optimization",
      "Monetization of warm audience pools",
      "Telegram-based reactivation systems",
      "Crypto-native paid acquisition strategy",
      "Community-driven paid conversion",
      "Revenue-first thinking",
    ],
    strategicTakeaway: {
      intro:
        "In gamified Web3 products, the leverage is not always in driving new traffic. Often the highest ROI comes from:",
      points: [
        "Reactivating warm users",
        "Aligning incentives",
        "Structuring urgency",
        "Designing community momentum",
      ],
      conclusion:
        "This engagement demonstrates consumer growth mechanics applied in a capital-conscious, revenue-focused way.",
    },
  },
};
