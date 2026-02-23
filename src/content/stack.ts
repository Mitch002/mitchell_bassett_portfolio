export interface StackCategory {
  label: string;
  tools: string[];
}

export const STACK: StackCategory[] = [
  { label: "CRM & Lifecycle", tools: ["HubSpot"] },
  { label: "Analytics", tools: ["GA4"] },
  { label: "Paid", tools: ["Meta Business Suite"] },
  { label: "Automation", tools: ["n8n", "Python", "AI APIs"] },
  { label: "Ops", tools: ["Notion", "ClickUp"] },
  { label: "Build & Design", tools: ["Next.js", "Figma"] },
];
