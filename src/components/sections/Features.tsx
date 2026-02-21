"use client";

import { motion } from "framer-motion";
import { Eye, Bell, Smartphone, Signal, Moon, Shield } from "lucide-react";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const features = [
  {
    icon: Eye,
    title: "Real-Time Detection",
    description:
      "Advanced computer vision detects drowsiness, phone use, and distraction in milliseconds. Our AI never blinks.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Audio and visual warnings the moment attention drifts from the road.",
  },
  {
    icon: Smartphone,
    title: "Parent Dashboard",
    description:
      "Track trips, view analytics, and manage family accounts from your phone.",
  },
  {
    icon: Moon,
    title: "Night Vision",
    description: "Infrared sensors work in any lighting condition, 24/7.",
  },
  {
    icon: Signal,
    title: "LTE Connected",
    description: "Built-in cellular lets you view driving stats from anywhere in the country.",
  },
  {
    icon: Shield,
    title: "Affordable Safety",
    description:
      "Enterprise-level safety at just $165. Professional protection for every family.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-[#0a0a0a] py-20 md:py-28 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="text-center mb-12 md:mb-16"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold tracking-wider text-[#186ff1] uppercase mb-4"
          >
            Features
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white"
          >
            Everything You Need.{" "}
            <span className="text-[#186ff1]">Nothing You Don&apos;t.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Professional-grade safety technology made simple and affordable.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="bg-[#111] border border-white/10 rounded-3xl p-8 transition-all duration-200 hover:border-[#186ff1]/50"
              >
                <div className="w-12 h-12 rounded-xl bg-[#186ff1]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#186ff1]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-white/60">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
