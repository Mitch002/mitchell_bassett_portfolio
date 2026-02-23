"use client";

import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { STACK } from "@/content/stack";

export default function StackGrid() {
  return (
    <section id="stack" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <SectionHeading label="Stack" title="Tools I Use" />
        </AnimatedSection>

        <AnimatedSection staggerChildren={0.08}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {STACK.map((category) => (
              <motion.div
                key={category.label}
                variants={itemVariants}
                className="rounded-xl bg-white/[0.02] border border-white/10 p-5 hover:border-indigo-electric/20 transition-all duration-300"
              >
                <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-3">
                  {category.label}
                </p>
                <div className="space-y-1.5">
                  {category.tools.map((tool) => (
                    <p
                      key={tool}
                      className="text-sm text-gray-300 font-medium"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
