"use client";

import { motion } from "framer-motion";
import { Camera, Cpu, Wifi, Shield } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const specs = [
  { icon: Camera, label: "4K Camera", description: "Wide-angle lens" },
  { icon: Cpu, label: "Edge AI", description: "On-device processing" },
  { icon: Wifi, label: "Bluetooth 5.0", description: "Instant sync" },
  { icon: Shield, label: "Privacy First", description: "No cloud uploads" },
];

export function ProductShowcase() {
  return (
    <Section id="product" background="darker" padding="lg" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 md:mb-16 px-4 sm:px-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-purple uppercase mb-3 md:mb-4">
            The Product
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Meet <GradientText>Attentia Core</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            A compact, powerful device that mounts to your dashboard and keeps
            watch while you drive. Simple setup, instant protection.
          </p>
        </FadeIn>

        {/* Product Image Placeholder */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="relative max-w-4xl mx-auto">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-primary-purple/20 to-accent-pink/20 rounded-3xl blur-3xl scale-95" />

            {/* Product image container */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative bg-dark-card/50 border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden"
            >
              {/* Placeholder for product image */}
              <div className="aspect-video bg-gradient-to-br from-dark-lighter to-dark rounded-2xl flex items-center justify-center border border-white/5">
                <div className="text-center">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Camera className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>
                  <p className="text-gray-500 text-sm md:text-base">
                    Product Image Coming Soon
                  </p>
                  <p className="text-gray-600 text-xs mt-2">
                    Attentia Core on Dashboard
                  </p>
                </div>
              </div>

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary-purple/30 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent-pink/30 rounded-br-3xl" />
            </motion.div>
          </div>
        </FadeIn>

        {/* Specs Grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-6">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="text-center p-4 md:p-6 rounded-xl bg-dark-card/50 border border-white/5 hover:border-primary-purple/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-lg bg-gradient-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-purple" />
                  </div>
                  <p className="text-sm md:text-base font-semibold text-white mb-1">
                    {spec.label}
                  </p>
                  <p className="text-xs md:text-sm text-gray-500">
                    {spec.description}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
