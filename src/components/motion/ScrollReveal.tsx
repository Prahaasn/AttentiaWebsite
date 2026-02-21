"use client";

import { useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/lib/scroll-animations";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
}

export function ScrollReveal({ children, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { opacity, scale, y } = useScrollReveal(ref);

  return (
    <motion.div ref={ref} style={{ opacity, scale, y }} className={className}>
      {children}
    </motion.div>
  );
}
