"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { CountUp } from "@/components/motion/CountUp";
import { springConfig } from "@/lib/scroll-animations";

export function Problem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth progress for silky animations
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Phase 1: Opening statement (0-30%)
  const phase1Opacity = useTransform(smoothProgress, [0, 0.1, 0.25, 0.35], [0, 1, 1, 0]);
  const phase1Scale = useTransform(smoothProgress, [0, 0.1], [0.95, 1]);
  const phase1Y = useTransform(smoothProgress, [0.25, 0.35], [0, -50]);

  // Phase 2: Statistics reveal (30-65%)
  const phase2Opacity = useTransform(smoothProgress, [0.28, 0.38, 0.58, 0.68], [0, 1, 1, 0]);
  const phase2Y = useTransform(smoothProgress, [0.28, 0.38], [60, 0]);

  // Phase 3: Solution transition (65-100%)
  const phase3Opacity = useTransform(smoothProgress, [0.62, 0.75, 1], [0, 1, 1]);
  const phase3Y = useTransform(smoothProgress, [0.62, 0.75], [80, 0]);
  const phase3Scale = useTransform(smoothProgress, [0.62, 0.75], [0.9, 1]);

  // Blue glow intensity
  const glowOpacity = useTransform(smoothProgress, [0.3, 0.5, 0.7], [0, 0.6, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: "400vh" }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050508] to-black" />

        {/* Animated purple-pink glow */}
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(124,58,237,0.25) 0%, rgba(217,70,239,0.1) 30%, transparent 70%)",
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
            opacity: glowOpacity,
          }}
        />

        {/* Phase 1: Opening Hook */}
        <motion.div
          style={{
            opacity: phase1Opacity,
            scale: phase1Scale,
            y: phase1Y,
          }}
          className="absolute text-center px-6 max-w-5xl"
        >
          <p className="text-[#7C3AED] text-sm font-semibold tracking-[0.2em] uppercase mb-8">
            The Crisis
          </p>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] tracking-tight">
            All it takes is{" "}
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">3 seconds</span>
            <br />
            for someone to lose their life.
          </h2>
        </motion.div>

        {/* Phase 2: Statistics */}
        <motion.div
          style={{
            opacity: phase2Opacity,
            y: phase2Y,
          }}
          className="absolute w-full max-w-6xl px-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                <CountUp end={3000} suffix="+" duration={2.5} />
              </div>
              <p className="text-lg text-white/60">Lives lost every year</p>
            </div>

            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                <CountUp end={3} duration={2} />
                <span className="text-4xl md:text-5xl"> sec</span>
              </div>
              <p className="text-lg text-white/60">All it takes to lose a life</p>
            </div>

            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                <CountUp end={400} suffix="K" duration={2.5} />
              </div>
              <p className="text-lg text-white/60">Injuries annually</p>
            </div>
          </div>
        </motion.div>

        {/* Phase 3: Solution */}
        <motion.div
          style={{
            opacity: phase3Opacity,
            y: phase3Y,
            scale: phase3Scale,
          }}
          className="absolute text-center px-6 max-w-4xl"
        >
          <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            What if your car could
            <br />
            <span className="bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">watch for you?</span>
          </h3>
          <p className="text-xl md:text-2xl text-white/70 mb-10">
            Introducing Attentia DM-1
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="#product"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F97316] hover:opacity-90 text-white font-semibold rounded-full transition-opacity text-lg"
            >
              See how it works
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator (only visible at start) */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm flex flex-col items-center gap-2"
          style={{
            opacity: useTransform(smoothProgress, [0, 0.1], [1, 0]),
          }}
        >
          <span>Scroll</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
