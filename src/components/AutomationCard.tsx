"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FlaskConical } from "lucide-react";
import { itemVariants } from "./AnimatedSection";
import type { AutomationItem } from "@/content/automations";

interface AutomationCardProps {
  item: AutomationItem;
}

export default function AutomationCard({ item }: AutomationCardProps) {
  const isDeployed = item.status === "Deployed";

  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-electric/30 hover:bg-white/[0.04] transition-all duration-500"
    >
      <div className="relative z-10">
        {/* Status badge */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider border ${
              isDeployed
                ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                : "text-amber-400 bg-amber-500/10 border-amber-500/20"
            }`}
          >
            {isDeployed ? (
              <CheckCircle2 size={10} />
            ) : (
              <FlaskConical size={10} />
            )}
            {item.status}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
          {item.title}
        </h3>

        {/* Impact */}
        <p className="text-sm text-gray-400 leading-relaxed mb-5">
          {item.impact}
        </p>

        {/* Workflow snapshot */}
        <div className="space-y-0">
          {item.steps.map((step, i) => (
            <div key={step} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-mono text-gray-500">
                    {i + 1}
                  </span>
                </div>
                {i < item.steps.length - 1 && (
                  <div className="w-px h-4 bg-white/10" />
                )}
              </div>
              <p className="text-xs text-gray-400 pt-1 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-white/5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-[9px] font-mono text-gray-500 bg-white/[0.03]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
