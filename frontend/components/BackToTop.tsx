"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      setShow(v > 0.15);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: show ? 1 : 0,
        scale: show ? 1 : 0.8,
      }}
      transition={{ duration: 0.25, ease: "easeOut" as const }}
    >
      {/* Progress ring */}
      <svg
        className="absolute -inset-1 -rotate-90 pointer-events-none"
        width="56"
        height="56"
        viewBox="0 0 56 56"
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="rgb(229,231,235)"
          strokeWidth="2"
        />
        <motion.circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          className="text-primary"
          style={{ pathLength: scaleY }}
        />
      </svg>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-border/50 text-text-muted hover:text-primary hover:shadow-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/30"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </motion.div>
  );
}
