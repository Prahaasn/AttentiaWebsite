"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Eye, Brain, Bell, Shield } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Always Watching",
    description: "Infrared camera monitors your face 24/7, even in complete darkness. Four 850nm LEDs provide invisible illumination that won't affect your night vision.",
  },
  {
    icon: Brain,
    title: "Edge AI Processing",
    description: "All AI inference happens locally on the device. No video ever leaves your car. Our custom neural network is optimized for the ARM processor, delivering sub-100ms response times.",
  },
  {
    icon: Bell,
    title: "Multi-Modal Alerts",
    description: "When distraction is detected, Attentia responds instantly with audio beeps, LED color changes, and optional push notifications to family members.",
  },
  {
    icon: Shield,
    title: "Privacy by Design",
    description: "Your video feed is processed in real-time and immediately discarded. Only anonymized driving statistics are stored. You control who sees your data.",
  },
];

export function ProductFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decorations */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 right-10 w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
      >
        <div className="w-full h-full bg-gradient-to-br from-[#186ff1] to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[#186ff1] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Technology
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Intelligence at the Edge
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Advanced AI that runs entirely on-device, protecting your privacy while keeping you safe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-[#111] border border-white/10 rounded-3xl p-10 hover:border-[#186ff1]/30 transition-all group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#186ff1]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#186ff1]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#186ff1]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
