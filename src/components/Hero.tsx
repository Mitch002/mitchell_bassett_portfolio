"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Download } from "lucide-react";

function AnimatedGrid() {
  const gridLines = 12;
  const dots: { x: number; y: number; delay: number }[] = [];

  for (let i = 0; i <= gridLines; i++) {
    for (let j = 0; j <= gridLines; j++) {
      dots.push({
        x: (i / gridLines) * 100,
        y: (j / gridLines) * 100,
        delay: (i + j) * 0.1,
      });
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: gridLines + 1 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-white/[0.03]"
          style={{ top: `${(i / gridLines) * 100}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
        />
      ))}
      {Array.from({ length: gridLines + 1 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-white/[0.03]"
          style={{ left: `${(i / gridLines) * 100}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
        />
      ))}
      {dots
        .filter((_, i) => i % 4 === 0)
        .map((dot, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full bg-indigo-electric/20"
            style={{ left: `${dot.x}%`, top: `${dot.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.5, 0.2], scale: [0, 1.2, 1] }}
            transition={{
              duration: 2.5,
              delay: dot.delay,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 4,
            }}
          />
        ))}
      <div className="absolute inset-0 bg-gradient-to-t from-bg-deep via-transparent to-bg-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg-deep via-transparent to-bg-deep" />
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedGrid />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full text-xs font-mono font-medium text-mint-neon border border-mint-neon/30 bg-mint-neon/5">
            GTM Systems &bull; Automation &bull; Execution
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          Growth Systems for{" "}
          <span className="text-gradient">Modern GTM.</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I build end-to-end GTM systems: lifecycle, automation,
          experimentation, reporting, and market-ready execution.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-electric text-white font-semibold text-sm shadow-glow-indigo hover:shadow-glow-indigo-lg hover:scale-105 transition-all duration-300"
          >
            View My Proof
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/20 text-white font-semibold text-sm hover:border-indigo-electric/50 hover:shadow-glow-indigo transition-all duration-300"
          >
            <MessageCircle size={16} />
            Let&apos;s Talk
          </a>
          <a
            href="/Mitchell_Bassett_GTM_Operations_AI_Automation_Resume.pdf"
            download
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 font-medium"
          >
            <Download size={14} />
            Download CV
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
