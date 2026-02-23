"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Briefcase } from "lucide-react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";
import type { CaseStudy } from "@/content/work";

interface CaseStudyLayoutProps {
  study: CaseStudy;
  diagram?: ReactNode;
}

export default function CaseStudyLayout({
  study,
  diagram,
}: CaseStudyLayoutProps) {
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

        {/* A) Overview */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>Overview</SectionLabel>
            <p className="text-base text-gray-300 leading-relaxed">
              {study.overview}
            </p>
          </motion.div>
        </AnimatedSection>

        {/* B) Context */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>Context</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-3">
                  Stage
                </p>
                <p className="text-sm text-gray-300">{study.context.stage}</p>
              </div>
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-3">
                  Constraints
                </p>
                <ul className="space-y-2">
                  {study.context.constraints.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-600 mt-2 flex-shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 rounded-xl bg-white/[0.02] border border-white/10 p-6">
              <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-3">
                Goals
              </p>
              <ul className="space-y-2">
                {study.context.goals.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-2 text-sm text-gray-400"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-electric mt-2 flex-shrink-0" />
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* C) The System */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>The System</SectionLabel>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              {study.systemDescription}
            </p>
            {diagram && (
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-4">
                {diagram}
              </div>
            )}
          </motion.div>
        </AnimatedSection>

        {/* D) What I Built */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>What I Built</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {study.whatIBuilt.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl bg-white/[0.02] border border-white/10 p-6"
                >
                  <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-4">
                    {group.category}
                  </p>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                      >
                        <span className="w-1 h-1 rounded-full bg-indigo-electric mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* E) Experiments / Plays */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>Experiments &amp; Plays</SectionLabel>
            <div className="space-y-4">
              {study.experiments.map((exp) => (
                <div
                  key={exp.title}
                  className="rounded-xl bg-white/[0.02] border border-white/10 p-6"
                >
                  <h4 className="text-sm font-bold text-white mb-2">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* F) Results */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>Results</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-4">
                  Metrics
                </p>
                <ul className="space-y-2.5">
                  {study.results.metrics.map((m) => (
                    <li
                      key={m}
                      className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-mint-neon mt-2 flex-shrink-0" />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-white/[0.02] border border-white/10 p-6">
                <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-4">
                  Qualitative
                </p>
                <ul className="space-y-2.5">
                  {study.results.qualitative.map((q) => (
                    <li
                      key={q}
                      className="flex items-start gap-2 text-sm text-gray-300 leading-relaxed"
                    >
                      <span className="w-1 h-1 rounded-full bg-mint-neon mt-2 flex-shrink-0" />
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* G) Learnings */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>Learnings</SectionLabel>
            <div className="space-y-4">
              {study.learnings.map((learning, i) => (
                <div
                  key={i}
                  className="border-l-2 border-indigo-electric/30 pl-4"
                >
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {learning}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>

        {/* H) If I Had 30 More Days */}
        <AnimatedSection>
          <motion.div variants={itemVariants} className="mb-16">
            <SectionLabel>If I Had 30 More Days</SectionLabel>
            <ul className="space-y-3">
              {study.nextIterations.map((iter) => (
                <li
                  key={iter}
                  className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-indigo-electric/40" />
                  </span>
                  {iter}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatedSection>

        {/* I) Tooling */}
        <AnimatedSection>
          <motion.div variants={itemVariants}>
            <SectionLabel>Tooling</SectionLabel>
            <div className="flex flex-wrap gap-2">
              {study.tooling.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono text-gray-300 bg-white/[0.03] border border-white/10"
                >
                  {tool}
                </span>
              ))}
            </div>
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
