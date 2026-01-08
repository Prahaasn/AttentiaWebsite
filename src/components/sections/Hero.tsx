"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-60" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Floating Orbs with enhanced glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-48 h-48 md:w-96 md:h-96 md:top-10 md:-left-20 bg-primary-blue/30 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-10 right-0 w-64 h-64 md:w-[500px] md:h-[500px] md:bottom-0 md:-right-20 bg-primary-purple/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-accent-pink/15 rounded-full blur-[150px] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 container-tight text-center px-5 sm:px-6 py-20 md:py-32"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6 md:mb-8">
          <Badge variant="gradient">Launching at CES 2026</Badge>
        </motion.div>

        {/* Headline - responsive text sizing */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 md:mb-8 leading-[1.1] tracking-tight"
        >
          AI That Keeps{" "}
          <br className="hidden sm:block" />
          <GradientText>Eyes on the Road</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 md:mb-12 leading-relaxed"
        >
          Teen-built AI keeping you focused on the road. Real-time distraction
          detection with instant alerts. Starting at just{" "}
          <span className="text-white font-semibold">$125</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Pre-order Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>97% Detection Accuracy</span>
          </div>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
          <span>Ships January 2026</span>
          <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full" />
          <span>30-Day Money Back</span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-gray-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
