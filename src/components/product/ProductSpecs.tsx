"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Wifi, Battery, Maximize2, Box, HardDrive, Shield } from "lucide-react";
import { fadeUp, staggerContainer, viewportSettings } from "@/lib/animations";

const specs = [
  { icon: Maximize2, label: "Dimensions", value: "98 × 58 × 32mm", description: "Compact design fits any dashboard" },
  { icon: Box, label: "Weight", value: "89g", description: "Lightweight, no sag or vibration" },
  { icon: Camera, label: "Camera", value: "Sony IMX219", description: "2MP infrared, 77° field of view" },
  { icon: Cpu, label: "Processor", value: "Quad-core ARM", description: "On-device AI, zero latency" },
  { icon: Wifi, label: "Connectivity", value: "LTE + BT 5.0", description: "Always connected, anywhere" },
  { icon: Battery, label: "Power", value: "USB-C 15W", description: "Clean single-cable install" },
  { icon: HardDrive, label: "Storage", value: "8GB Flash", description: "Local data, cloud sync" },
  { icon: Shield, label: "Privacy", value: "On-Device", description: "Video never leaves device" },
];

export function ProductSpecs() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#186ff1] text-sm font-semibold tracking-[0.2em] uppercase mb-4"
          >
            Specifications
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight"
          >
            Built Different
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.label}
                variants={fadeUp}
                className="bg-[#111] border border-white/10 rounded-3xl p-8 hover:border-[#186ff1]/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#186ff1]/10 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-[#186ff1]" />
                </div>
                <p className="text-white/50 text-sm mb-1">{spec.label}</p>
                <p className="text-2xl font-bold text-white mb-2">{spec.value}</p>
                <p className="text-white/60 text-sm">{spec.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
