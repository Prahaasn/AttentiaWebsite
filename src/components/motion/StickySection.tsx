"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useSpring, MotionValue } from "framer-motion";
import { springConfig } from "@/lib/scroll-animations";

interface StickySectionProps {
  children: ReactNode | ((progress: MotionValue<number>) => ReactNode);
  height?: string;
  className?: string;
}

export function StickySection({
  children,
  height = "300vh",
  className = "",
}: StickySectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  return (
    <div ref={containerRef} style={{ height }} className={className}>
      <div className="sticky top-0 h-screen overflow-hidden">
        {typeof children === "function" ? children(smoothProgress) : children}
      </div>
    </div>
  );
}
