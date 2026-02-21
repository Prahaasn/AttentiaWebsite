"use client";

import { motion } from "framer-motion";
import { Check, Box, Cpu, Camera, Wifi, Battery, HardDrive, Maximize2 } from "lucide-react";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const specs = [
  { icon: Maximize2, label: "Dimensions", value: "98 × 58 × 32mm" },
  { icon: Box, label: "Weight", value: "89g" },
  { icon: Camera, label: "Camera", value: "Sony IMX219 2MP IR" },
  { icon: Maximize2, label: "Field of View", value: "77° diagonal" },
  { icon: Cpu, label: "Processor", value: "Quad-core ARM Cortex-A53" },
  { icon: Wifi, label: "Connectivity", value: "LTE Cat-M1, Bluetooth 5.0" },
  { icon: Battery, label: "Power", value: "USB-C, 5V/3A (15W)" },
  { icon: HardDrive, label: "Storage", value: "8GB internal flash" },
];

const boxContents = [
  "Attentia DM-1 Device",
  "Dashboard mount with 3M adhesive",
  "USB-C power cable (3 meters)",
  "12V car adapter",
  "Quick start guide",
  "Mounting template",
];

const featureDeepDives = [
  {
    title: "On-Device AI Processing",
    description:
      "All AI inference happens locally on the device using our custom neural network optimized for the ARM processor. This means zero latency for alerts and complete privacy—your video never leaves the device.",
  },
  {
    title: "Infrared Night Vision",
    description:
      "Four 850nm IR LEDs provide invisible illumination for the camera, enabling full functionality in complete darkness. The infrared light is invisible to human eyes, so it won't affect your night vision while driving.",
  },
  {
    title: "Multi-Modal Alerts",
    description:
      "When distraction is detected, Attentia responds with a combination of audio beeps, LED bar color changes, and optional push notifications to connected devices. Alert sensitivity can be customized in the app.",
  },
  {
    title: "Always-Connected LTE",
    description:
      "Built-in cellular connectivity means you can check driving stats from anywhere. The LTE module uses minimal data (under 50MB/month) and is included in your subscription at no extra cost.",
  },
];

export function ProductDetails() {
  return (
    <section id="product-details" className="bg-black py-20 md:py-28 lg:py-32">
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
            Product Details
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white"
          >
            Built for <span className="text-[#186ff1]">Real-World Safety</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Every component is carefully chosen to deliver reliable, professional-grade
            driver monitoring.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Technical Specifications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Technical Specifications
            </h3>
            <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden">
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <div
                    key={spec.label}
                    className={`flex items-center justify-between p-4 ${
                      index !== specs.length - 1 ? "border-b border-white/10" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#186ff1]/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-[#186ff1]" />
                      </div>
                      <span className="text-white/60">{spec.label}</span>
                    </div>
                    <span className="font-medium text-white">{spec.value}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* What's in the Box */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings}
            variants={fadeUp}
          >
            <h3 className="text-2xl font-semibold mb-6 text-white">
              What&apos;s in the Box
            </h3>
            <div className="bg-[#111] rounded-2xl border border-white/10 p-6">
              <ul className="space-y-4">
                {boxContents.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#186ff1]/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#186ff1]" />
                    </div>
                    <span className="text-white/60">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-white/50">
                  <span className="font-medium text-white">Free shipping</span> on all
                  US orders. International shipping available.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Deep Dives */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="mt-16"
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-semibold mb-8 text-white text-center"
          >
            Technology Deep Dive
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featureDeepDives.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="bg-[#111] rounded-2xl border border-white/10 p-6 hover:border-[#186ff1]/50 transition-colors"
              >
                <h4 className="text-lg font-semibold mb-3 text-white">
                  {feature.title}
                </h4>
                <p className="text-white/60 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
