"use client";

import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { CAPABILITIES, TOOLS } from "@/content/stack";

export default function StackGrid() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <AnimatedSection>
          <SectionHeading
            label="Stack"
            title="What I Work With"
            description="I don't just use tools — I build systems that connect them."
          />
        </AnimatedSection>

        {/* Row 1: Core Capabilities */}
        <AnimatedSection staggerChildren={0.08}>
          <motion.p
            variants={itemVariants}
            className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-5"
          >
            Core Capabilities
          </motion.p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CAPABILITIES.map((cap) => (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="rounded-xl bg-white/[0.02] border border-white/10 p-6 hover:border-indigo-electric/20 transition-all duration-300"
              >
                <h3 className="text-sm font-bold text-white mb-3 tracking-tight">
                  {cap.title}
                </h3>
                <ul className="space-y-2">
                  {cap.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-indigo-electric mt-1.5 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* Divider */}
        <div className="my-12 border-t border-white/5" />

        {/* Row 2: Tools & Platforms */}
        <AnimatedSection staggerChildren={0.06}>
          <motion.p
            variants={itemVariants}
            className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-5"
          >
            Tools &amp; Platforms
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="rounded-xl bg-white/[0.02] border border-white/10 p-6 sm:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {TOOLS.map((category) => (
                <div key={category.label}>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2.5">
                    {category.label}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {category.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-medium text-gray-300 bg-white/[0.04] border border-white/10 hover:border-indigo-electric/30 hover:text-white transition-all duration-200"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
