"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on non-touch devices
    const hasHover = window.matchMedia("(hover: hover)").matches;
    if (!hasHover) return;

    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9998]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <div
        className="w-[300px] h-[300px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.4) 0%, rgba(45,212,191,0.2) 40%, transparent 70%)",
          filter: "blur(40px)",
          mixBlendMode: "screen",
        }}
      />
    </motion.div>
  );
}
