"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax and scale effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.05, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, -5]);

  return (
    <Section id="product" background="darker" padding="lg" className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-purple/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10" ref={containerRef}>
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

        {/* Product Image with Scroll Animation */}
        <FadeIn className="mb-12 md:mb-16">
          <div className="relative max-w-4xl mx-auto perspective-1000">
            {/* Blurred background glow */}
            <motion.div
              style={{ scale, opacity }}
              className="absolute inset-0 bg-gradient-to-r from-primary-blue/30 via-primary-purple/30 to-accent-pink/30 rounded-3xl blur-[60px] scale-110"
            />

            {/* Product image container with scroll effects */}
            <motion.div
              style={{ y, scale, rotateX, opacity }}
              className="relative"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue via-primary-purple to-accent-pink rounded-3xl opacity-20 blur-sm" />

              {/* Main image container */}
              <div className="relative bg-dark-card/80 border border-white/10 rounded-3xl p-4 md:p-6 overflow-hidden backdrop-blur-sm">
                {/* Inner gradient border effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary-blue/10 via-transparent to-accent-pink/10" />

                {/* Product image */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/device.jpg"
                    alt="Attentia Core Device on Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Subtle vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/30 via-transparent to-transparent" />
                </div>

                {/* Corner accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-primary-purple/30 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-accent-pink/30 rounded-br-3xl" />
              </div>
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
