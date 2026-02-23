"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./AnimatedSection";
import type { FrameworkItem } from "@/content/framework";

interface SystemCardProps {
  item: FrameworkItem;
}

export default function SystemCard({ item }: SystemCardProps) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/10 p-6 sm:p-8 hover:border-indigo-electric/20 transition-all duration-500"
    >
      {/* Number */}
      <span className="text-5xl font-bold text-white/[0.04] absolute top-4 right-6 font-mono select-none">
        {item.number}
      </span>

      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
          {item.title}
        </h3>

        {/* Message */}
        <p className="text-sm text-indigo-electric font-medium italic mb-4">
          &ldquo;{item.message}&rdquo;
        </p>

        {/* Includes */}
        <ul className="space-y-2 mb-4">
          {item.includes.map((inc) => (
            <li
              key={inc}
              className="flex items-start gap-2 text-sm text-gray-400"
            >
              <span className="w-1 h-1 rounded-full bg-mint-neon mt-2 flex-shrink-0" />
              {inc}
            </li>
          ))}
        </ul>

        {/* Callout */}
        {item.callout && (
          <p className="text-xs text-mint-neon font-mono border-l-2 border-mint-neon/30 pl-3 mb-4">
            {item.callout}
          </p>
        )}

        {/* Success metric */}
        <div className="pt-4 border-t border-white/5">
          <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
            Success looks like
          </p>
          <p className="text-xs text-gray-400">{item.successMetric}</p>
        </div>
      </div>
    </motion.div>
  );
}
