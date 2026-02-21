"use client";

import { motion } from "framer-motion";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const deviceFeatures = [
  "Attentia DM-1 Device",
  "Dashboard Mount Kit",
  "USB-C Power Cable",
  "Quick Start Guide",
  "Free US Shipping",
];

const subscriptionFeatures = [
  "Real-time AI monitoring",
  "iOS & Android App",
  "Trip history & analytics",
  "Family sharing (up to 5)",
  "Cloud backup & sync",
  "Priority support",
  "Lifetime software updates",
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-black py-20 md:py-28 lg:py-32">
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
            Pricing
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white"
          >
            Simple, <span className="text-[#186ff1]">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            One device, one low monthly fee. Everything you need for safer driving.
          </motion.p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Device Card */}
            <motion.div
              variants={fadeUp}
              className="relative p-8 rounded-3xl bg-[#111] border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                Attentia Device
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-bold text-[#186ff1]">$165</span>
              </div>
              <p className="text-white/50 text-sm mb-6">One-time purchase</p>

              <ul className="space-y-3">
                {deviceFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#186ff1]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#186ff1]" />
                    </div>
                    <span className="text-sm text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Subscription Card */}
            <motion.div
              variants={fadeUp}
              className="relative p-8 rounded-3xl bg-[#111] border-2 border-[#186ff1]"
            >
              {/* Popular badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#186ff1] text-white text-sm font-medium">
                  <Star className="w-3.5 h-3.5" />
                  Recommended
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 mt-2">
                Attentia Pro
              </h3>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-5xl font-bold text-[#186ff1]">$3.99</span>
                <span className="text-white/50">/month</span>
              </div>
              <p className="text-white/50 text-sm mb-6">Cancel anytime</p>

              <ul className="space-y-3">
                {subscriptionFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#10B981]/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-[#10B981]" />
                    </div>
                    <span className="text-sm text-white/60">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Combined CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
            className="mt-10"
          >
            <div className="text-center p-8 rounded-3xl bg-[#111] border border-white/10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#186ff1]" />
                <span className="text-sm font-semibold text-white">Launch Special</span>
              </div>
              <p className="text-3xl font-bold text-white mb-2">
                $165 + $3.99/mo
              </p>
              <p className="text-white/50 text-sm mb-6">
                Get the device and unlock all Pro features
              </p>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Preorder Coming Soon
              </Button>
              <p className="mt-4 text-xs text-white/40">
                Launching at CES 2026 • Ships August 2026 • 30-day money-back guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
