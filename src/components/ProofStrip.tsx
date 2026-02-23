"use client";

import { motion } from "framer-motion";
import { GitBranch, Workflow, Target } from "lucide-react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";

const PROOF_POINTS = [
  {
    icon: GitBranch,
    title: "Lifecycle + Routing Infrastructure",
    body: "Defined lifecycle stages, routing rules, and follow-up logic to keep execution clean and measurable.",
  },
  {
    icon: Workflow,
    title: "Automation That Reduces Manual Ops",
    body: "Built n8n + Python workflows for monitoring, reporting, and operational handoffs across tools.",
  },
  {
    icon: Target,
    title: "Positioning → Execution Alignment",
    body: "Created messaging frameworks and asset readiness systems to support launches and early traction.",
  },
];

export default function ProofStrip() {
  return (
    <section className="relative py-16 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection staggerChildren={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROOF_POINTS.map((point) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-electric/10 border border-indigo-electric/20 flex items-center justify-center">
                  <point.icon size={18} className="text-indigo-electric" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white mb-1">
                    {point.title}
                  </p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {point.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
