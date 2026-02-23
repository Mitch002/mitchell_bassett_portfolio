"use client";

import { motion } from "framer-motion";
import { itemVariants } from "./AnimatedSection";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div variants={itemVariants} className="mb-12 max-w-2xl">
      <span className="font-mono text-xs text-mint-neon uppercase tracking-widest">
        {label}
      </span>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base text-gray-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
