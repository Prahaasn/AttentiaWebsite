"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050508] to-[#0a0a0a]" />

      {/* Subtle purple glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[600px] rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(124,58,237,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto text-center px-6 lg:px-20 py-20 md:py-32 relative z-10"
      >
        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight text-white"
        >
          AI That Keeps{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F97316] bg-clip-text text-transparent">Eyes on the Road</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          Teen-built AI keeping you focused on the road. Real-time distraction
          detection with instant alerts. Starting at just{" "}
          <span className="text-white font-semibold">$165</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Preorder Coming Soon
          </Button>
          <a href="https://youtu.be/NSdL9WxIHMs" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="ghost" size="lg" className="w-full text-white border-white/20 hover:bg-white/10">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </a>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-white/60"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#10B981] rounded-full" />
            <span>97% Detection Accuracy</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
          <span>Ships August 2026</span>
          <div className="hidden sm:block w-1 h-1 bg-white/30 rounded-full" />
          <span>30-Day Money Back</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
