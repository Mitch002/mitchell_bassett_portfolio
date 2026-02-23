"use client";

import { motion } from "framer-motion";
import AnimatedSection, { itemVariants } from "./AnimatedSection";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatedSection>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <p className="text-xs text-gray-600 font-mono">
              &copy; {new Date().getFullYear()} Mitchell Bassett
            </p>
            <p className="text-xs text-gray-600 font-mono">
              Built with Next.js, Tailwind &amp; Framer Motion
            </p>
          </motion.div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
