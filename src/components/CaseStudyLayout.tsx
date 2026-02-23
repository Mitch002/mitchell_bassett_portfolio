"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Briefcase } from "lucide-react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";
import type { CaseStudy } from "@/content/work";

interface CaseStudyLayoutProps {
  study: CaseStudy;
}

export default function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-12">
            <a
              href="/#work"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors font-medium"
            >
              <ArrowLeft size={14} />
              Back to Home
            </a>
          </motion.div>
        </AnimatedSection>

        {/* Header */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-12">
            <span className="font-mono text-xs text-mint-neon uppercase tracking-widest">
              {study.company} &mdash; Case Study
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              {study.title}
            </h1>
            <p className="mt-4 text-lg text-indigo-electric font-medium italic">
              {study.positioning}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">
              <span className="inline-flex items-center gap-1.5">
                <Briefcase size={14} />
                {study.role}
              </span>
              <span className="w-px h-4 bg-white/20" />
              <span className="inline-flex items-center gap-1.5">
                <Clock size={14} />
                {study.timeframe}
              </span>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Overview */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-base text-gray-300 leading-relaxed">
              {study.overview}
            </p>
          </motion.div>
        </AnimatedSection>

        {/* Objective (optional) */}
        {study.objective && (
          <AnimatedSection>
            <motion.div variants={itemVariants} className="mb-16">
              <SectionLabel>Objective</SectionLabel>
              <p className="text-base text-gray-300 leading-relaxed">
                {study.objective}
              </p>
            </motion.div>
          </AnimatedSection>
        )}

        {/* Dynamic Sections */}
        {study.sections.map((section, idx) => (
          <AnimatedSection key={idx}>
            <motion.div variants={itemVariants} className="mb-16">
              <SectionLabel>
                {idx + 1}. {section.title}
              </SectionLabel>
              <p className="text-base text-gray-300 leading-relaxed mb-4">
                {section.content}
              </p>

              {/* Section-level bullets */}
              {section.bullets && section.bullets.length > 0 && (
                <ul className="space-y-2 mb-4">
                  {section.bullets.map((bullet, bi) => (
                    <li
                      key={bi}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-indigo-electric mt-2 flex-shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {section.subsections.map((sub, si) => (
                    <div
                      key={si}
                      className="rounded-xl bg-white/[0.02] border border-white/10 p-6"
                    >
                      <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-3">
                        {sub.title}
                      </p>
                      {sub.content && (
                        <p className="text-sm text-gray-300 leading-relaxed mb-3">
                          {sub.content}
                        </p>
                      )}
                      {sub.bullets && sub.bullets.length > 0 && (
                        <ul className="space-y-2">
                          {sub.bullets.map((b, sbi) => (
                            <li
                              key={sbi}
                              className="flex items-start gap-2 text-sm text-gray-400"
                            >
                              <span className="w-1 h-1 rounded-full bg-mint-neon mt-2 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatedSection>
        ))}

        {/* Why This Demonstrates GTM Engineering */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>Why This Demonstrates GTM Engineering</SectionLabel>
            <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
              <ul className="space-y-2.5">
                {study.demonstrates.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-electric mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Strategic Takeaway */}
        <AnimatedSection>
          <motion.div variants={itemVariants}>
            <SectionLabel>Strategic Takeaway</SectionLabel>
            <p className="text-base text-gray-300 leading-relaxed mb-4">
              {study.strategicTakeaway.intro}
            </p>
            <ul className="space-y-2.5 mb-4">
              {study.strategicTakeaway.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-indigo-electric/40" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            {study.strategicTakeaway.conclusion && (
              <p className="text-base text-gray-300 leading-relaxed italic border-l-2 border-mint-neon/30 pl-4">
                {study.strategicTakeaway.conclusion}
              </p>
            )}
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-xs font-mono text-mint-neon uppercase tracking-widest mb-4 pb-2 border-b border-white/5">
      {children}
    </h3>
  );
}
