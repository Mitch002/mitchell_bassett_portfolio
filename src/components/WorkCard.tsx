"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { itemVariants } from "./AnimatedSection";
import type { WorkItem } from "@/content/work";

interface WorkCardProps {
  item: WorkItem;
}

export default function WorkCard({ item }: WorkCardProps) {
  const Wrapper = item.href ? "a" : "div";
  const linkProps = item.href
    ? { href: item.href }
    : {};

  return (
    <motion.div variants={itemVariants}>
      <Wrapper
        {...linkProps}
        className={`group block relative rounded-2xl overflow-hidden
          bg-white/[0.02] border border-white/10 p-6 sm:p-8
          hover:border-indigo-electric/30 hover:bg-white/[0.04]
          transition-all duration-500 ${item.href ? "cursor-pointer" : ""}`}
      >
        {/* Gradient accent */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}
        />

        <div className="relative z-10">
          {/* Top row: company + timeframe */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-mint-neon uppercase tracking-widest">
                {item.company}
              </span>
              <span className="w-px h-3 bg-white/20" />
              <span className="text-xs font-mono text-gray-500">
                {item.timeframe}
              </span>
            </div>
            {item.href && (
              <ArrowUpRight
                size={16}
                className="text-gray-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            )}
          </div>

          {/* Title + role */}
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 tracking-tight">
            {item.title}
          </h3>
          <p className="text-sm text-gray-400 font-medium mb-3">{item.role}</p>

          {/* Outcome */}
          <p className="text-sm text-gray-300 leading-relaxed mb-4">
            {item.outcome}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider text-gray-400 bg-white/[0.04] border border-white/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Wrapper>
    </motion.div>
  );
}
