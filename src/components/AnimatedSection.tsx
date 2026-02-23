"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerChildren?: number;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: (custom: { delay: number; staggerChildren: number }) => ({
    opacity: 1,
    transition: {
      delay: custom.delay,
      staggerChildren: custom.staggerChildren,
      delayChildren: custom.delay,
    },
  }),
};

export const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  },
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
}: AnimatedSectionProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={{ delay, staggerChildren }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
