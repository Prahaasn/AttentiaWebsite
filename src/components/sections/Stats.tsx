"use client";

import { motion } from "framer-motion";
import { CountUp } from "@/components/motion";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const stats = [
  { value: 90, suffix: "%", label: "Reduction in distracted incidents" },
  { value: 125, prefix: "$", label: "One-time purchase" },
  { value: 24, suffix: "/7", label: "Continuous monitoring" },
  { value: 1, prefix: "<", suffix: "s", label: "Alert response time" },
];

export function Stats() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-24 lg:py-28 relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#186ff1]/5 to-transparent pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportSettings}
        variants={staggerContainer}
        className="max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 relative z-10"
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={fadeUp}
            className="text-center"
          >
            <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 text-white">
              <CountUp
                end={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={2.5}
              />
            </div>
            <p className="text-white/60 text-sm md:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
