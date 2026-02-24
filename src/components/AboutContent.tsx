"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono text-mint-neon uppercase tracking-widest mb-3">
      {children}
    </p>
  );
}

export default function AboutContent() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <AnimatedSection>
          <motion.div
            variants={itemVariants}
            className="flex flex-col md:flex-row items-center gap-10 mb-20"
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 flex-shrink-0">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-electric/20 to-mint-neon/20 blur-2xl" />
              <Image
                src="/IMG_6196.jpg"
                alt="Mitchell Bassett"
                width={256}
                height={256}
                className="relative rounded-2xl border border-white/10 object-cover w-full h-full"
                priority
              />
            </div>
            <div>
              <span className="font-mono text-xs text-mint-neon uppercase tracking-widest">
                About
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
                Builder at Core<span className="text-indigo-electric">.</span>
              </h1>
              <p className="mt-4 text-lg text-gray-400 leading-relaxed max-w-xl">
                Not just in work. In life.
              </p>
              <p className="mt-4 text-base text-gray-300 leading-relaxed max-w-xl">
                I&apos;m wired to understand how things work beneath the surface.
                Whether it&apos;s systems, strategy, or a piece of land with
                hidden history under it.
              </p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Row 1: Foundations + Personal OS */}
        <AnimatedSection staggerChildren={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Foundations */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8"
            >
              <SectionLabel>Foundations</SectionLabel>
              <p className="text-xs text-gray-500 font-mono mb-4">
                What anchors me
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Faith shapes how I approach discipline and responsibility.",
                  "My wife comes first. Family over everything else.",
                  "Integrity over image.",
                  "Long term over short term.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-electric mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-300 italic border-l-2 border-mint-neon/30 pl-4">
                I don&apos;t build for attention. I build for durability.
              </p>
            </motion.div>

            {/* Personal Operating System */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8"
            >
              <SectionLabel>Personal Operating System</SectionLabel>
              <p className="text-xs text-gray-500 font-mono mb-4">
                How I&apos;m wired
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Self taught by default",
                  "Learn fast, execute faster",
                  "Obsessed with improving systems",
                  "Comfortable figuring things out alone",
                  "Relentless when locked onto a goal",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-indigo-electric mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="space-y-1 text-sm text-gray-300 italic border-l-2 border-mint-neon/30 pl-4">
                <p>If I don&apos;t know how to do something, I learn it.</p>
                <p>If something is broken, I fix it.</p>
                <p>If there&apos;s a better way, I&apos;ll find it.</p>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Row 2: Outside of Work + Where It Came From */}
        <AnimatedSection staggerChildren={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {/* Outside of Work */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8"
            >
              <SectionLabel>Outside of Work</SectionLabel>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Growth isn&apos;t just professional for me. It&apos;s personal.
                You&apos;ll usually find me:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Metal detecting (I like finding what's hidden)",
                  "Fishing (best way to think clearly)",
                  "Learning about AI and emerging tech",
                  "Playing board games (strategy without stakes)",
                  "Spending time with family",
                  "Hanging out with my two dogs",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed"
                  >
                    <span className="w-1 h-1 rounded-full bg-mint-neon mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-300 italic border-l-2 border-indigo-electric/30 pl-4">
                I genuinely enjoy building, learning, and understanding how
                things connect. That doesn&apos;t turn off at 5 PM.
              </p>
            </motion.div>

            {/* Where It All Came From */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8"
            >
              <SectionLabel>Where It All Came From</SectionLabel>
              <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                <p>
                  Before working in tech and GTM, I was doing linework. Long
                  physical days. Learning business at night.
                </p>
                <p>
                  I didn&apos;t come from a traditional marketing track. No
                  formal tech path. No corporate grooming.
                </p>
                <p className="text-gray-300 font-medium">I built my way in.</p>
                <ul className="space-y-2">
                  {[
                    "Paid for courses",
                    "Tested relentlessly",
                    "Followed curiosity",
                    "Said yes to hard opportunities",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-electric mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p>That background shaped how I work now:</p>
                <ul className="space-y-2">
                  {[
                    'Nothing feels "too technical."',
                    "Nothing feels beneath me.",
                    "Effort isn't optional.",
                    "Ownership is assumed.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-mint-neon mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </AnimatedSection>

        {/* Row 3: What Matters Most (full width) */}
        <AnimatedSection>
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 mb-4"
          >
            <SectionLabel>What Matters Most</SectionLabel>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Success to me isn&apos;t just professional output. It&apos;s:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              {[
                "Being disciplined",
                "Being consistent",
                "Providing for my family",
                "Continuing to grow",
                "Staying grounded while building forward",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <span className="w-5 h-5 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-sm bg-indigo-electric/40" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <div className="space-y-1 text-sm text-gray-300 italic border-l-2 border-mint-neon/30 pl-4">
              <p>Ambition doesn&apos;t mean neglect.</p>
              <p>Progress doesn&apos;t mean ego.</p>
            </div>
          </motion.div>
        </AnimatedSection>

        {/* Row 4: Currently (full width) */}
        <AnimatedSection>
          <motion.div
            variants={itemVariants}
            className="rounded-2xl bg-white/[0.02] border border-white/10 p-6 sm:p-8 mb-16"
          >
            <SectionLabel>Currently</SectionLabel>
            <p className="text-xs text-gray-500 font-mono mb-4">Focused on</p>
            <ul className="space-y-3">
              {[
                "Becoming technically sharper every year",
                "Expanding AI fluency",
                "Building systems that actually hold",
                "Staying physically and mentally disciplined",
                "Protecting what matters most",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed"
                >
                  <span className="w-5 h-5 rounded-md bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-sm bg-mint-neon/40" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatedSection>

        {/* Bottom CTA */}
        <AnimatedSection>
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4"
          >
            <p className="text-sm text-gray-500 font-mono">
              If you&apos;re building something meaningful, let&apos;s connect.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="/#work"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-electric text-white font-semibold text-sm shadow-glow-indigo hover:shadow-glow-indigo-lg hover:scale-105 transition-all duration-300"
              >
                Back to Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-indigo-electric/50 hover:shadow-glow-indigo transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </div>
  );
}
