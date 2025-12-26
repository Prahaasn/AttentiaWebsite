"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />

      {/* Floating Orbs - smaller on mobile */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-0 w-48 h-48 md:w-72 md:h-72 md:top-20 md:left-10 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-10 right-0 w-64 h-64 md:w-96 md:h-96 md:bottom-20 md:right-10 bg-primary-purple/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-pink/10 rounded-full blur-3xl pointer-events-none"
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
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-[1.15] tracking-tight"
        >
          AI That Keeps{" "}
          <GradientText>Eyes on the Road</GradientText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed"
        >
          Attentia uses advanced AI to detect distracted driving in real-time,
          alerting drivers before accidents happen. Professional-grade safety
          for just $165.
        </motion.p>

        {/* CTA Button - full width on mobile */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center px-4 sm:px-0"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Pre-order Soon
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>

        {/* Trust indicator */}
        <motion.p
          variants={fadeUp}
          className="mt-6 md:mt-8 text-xs sm:text-sm text-gray-500"
        >
          No subscription required. Ships January 2026.
        </motion.p>
      </motion.div>

      {/* Scroll indicator - hidden on very small screens */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
