"use client";

import { motion } from "framer-motion";
import { TrendingUp, Workflow, MessageSquareText } from "lucide-react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";

const PROOF_POINTS = [
  {
    icon: TrendingUp,
    text: "64% lift in paid user acquisition (early testing)",
  },
  {
    icon: Workflow,
    text: "n8n + Python automation for monitoring, distribution, and reporting",
  },
  {
    icon: MessageSquareText,
    text: "Positioning + messaging frameworks to support early launches",
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
                key={point.text}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/5"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-electric/10 border border-indigo-electric/20 flex items-center justify-center">
                  <point.icon size={18} className="text-indigo-electric" />
                </div>
                <p className="text-sm text-gray-300 leading-relaxed font-medium">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
