"use client";

import { motion } from "framer-motion";
import { Package, Bluetooth, Car } from "lucide-react";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Mount",
    description:
      "Attach Attentia to your dashboard with the included mount. No tools or wiring needed.",
  },
  {
    number: "02",
    icon: Bluetooth,
    title: "Connect",
    description:
      "Download the free app and pair your device via Bluetooth in seconds.",
  },
  {
    number: "03",
    icon: Car,
    title: "Drive",
    description:
      "Start driving. Attentia monitors and alerts you automatically. It just works.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-black py-20 md:py-28 lg:py-32">
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
            How It Works
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-white"
          >
            Up and Running in <span className="text-[#186ff1]">Minutes</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-lg text-white/60 max-w-2xl mx-auto"
          >
            Getting started is easy. No complicated setup, just simple protection.
          </motion.p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative"
        >
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-[2px] bg-white/10" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="text-center relative"
              >
                {/* Step Circle */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#111] border border-white/10 flex items-center justify-center relative z-10">
                    <Icon className="w-8 h-8 text-[#186ff1]" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#186ff1] flex items-center justify-center text-white text-sm font-bold z-20">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-white/60 max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
