"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import AnimatedSection, { itemVariants } from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <motion.div variants={itemVariants}>
            <span className="font-mono text-xs text-mint-neon uppercase tracking-widest">
              Contact
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Let&apos;s Build Something
            </h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-5 text-base text-gray-400 leading-relaxed max-w-xl mx-auto"
          >
            If you&apos;re building GTM systems and want automation +
            execution, let&apos;s talk.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="mailto:bassettmitchell7@gmail.com"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-electric text-white font-semibold text-sm shadow-glow-indigo hover:shadow-glow-indigo-lg hover:scale-105 transition-all duration-300"
            >
              <Mail size={16} />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/mitchell-bassett-50ab791b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-indigo-electric/50 hover:shadow-glow-indigo transition-all duration-300"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-gray-400 font-mono">
                Open for select 2026 collaborations
              </span>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}
