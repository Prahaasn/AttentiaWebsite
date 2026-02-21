"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

export function FinalCTA() {
  return (
    <section className="bg-black py-20 md:py-28 lg:py-32 relative">
      {/* Subtle blue glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(24,111,241,0.3) 0%, transparent 70%)",
        }}
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto px-6 lg:px-20 text-center relative z-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
        >
          Ready to <span className="text-[#186ff1]">Drive Safer?</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10"
        >
          Join thousands of families who trust Attentia to keep their loved ones
          safe on the road. Be among the first when we launch at CES 2026.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Preorder Coming Soon
          </Button>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 text-sm text-white/60"
        >
          <a
            href="mailto:prahaasn2145@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            prahaasn2145@gmail.com
          </a>
          <a
            href="tel:9843779723"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            (984) 377-9723
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
