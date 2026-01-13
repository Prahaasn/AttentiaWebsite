"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Camera, Cpu, Signal, Shield } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const specs = [
  { icon: Camera, label: "4K Camera", description: "Wide-angle lens" },
  { icon: Cpu, label: "Edge AI", description: "On-device processing" },
  { icon: Signal, label: "LTE Connected", description: "Nationwide coverage" },
  { icon: Shield, label: "Privacy First", description: "Encrypted data" },
];

export function ProductShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax and scale effects for the product
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [150, 0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.7, 1, 1, 0.9]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-15, 0, 10]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);

  // Glow animation
  const glowOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.3, 0.8, 0.3]);
  const glowScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.8, 1.2, 0.9]);

  return (
    <Section id="product" background="dark" padding="lg" className="relative overflow-hidden">
      {/* Multiple background glows for depth */}
      <motion.div
        style={{ opacity: glowOpacity, scale: glowScale }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-purple/20 rounded-full blur-[120px] pointer-events-none"
      />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary-blue/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[300px] h-[300px] bg-accent-pink/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10" ref={containerRef}>
        {/* Section Header */}
        <FadeIn className="text-center mb-16 md:mb-24 px-4 sm:px-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-purple uppercase mb-3 md:mb-4">
            The Device
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Meet <GradientText>Attentia Core</GradientText>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Compact. Powerful. Always watching the road so you don&apos;t have to.
          </p>
        </FadeIn>

        {/* Product Image with 3D Scroll Animation */}
        <div className="mb-16 md:mb-24 px-4" style={{ perspective: "1000px" }}>
          <motion.div
            style={{ y, scale, rotateX, rotateY, opacity }}
            className="relative max-w-lg mx-auto"
          >
            {/* Animated glow behind product */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 60px 20px rgba(139, 92, 246, 0.3)",
                  "0 0 80px 30px rgba(59, 130, 246, 0.3)",
                  "0 0 60px 20px rgba(236, 72, 153, 0.3)",
                  "0 0 60px 20px rgba(139, 92, 246, 0.3)",
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl"
            />

            {/* Reflection/shadow underneath */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-primary-purple/20 to-transparent blur-xl rounded-full" />

            {/* Product image */}
            <div className="relative">
              <Image
                src="/images/device.png"
                alt="Attentia Core Device"
                width={600}
                height={400}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Floating features around product on larger screens */}
        <FadeIn className="hidden lg:block absolute top-1/2 left-8 -translate-y-1/2">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-[180px]"
          >
            <Camera className="w-6 h-6 text-primary-blue mb-2" />
            <p className="text-sm font-semibold text-white">4K Wide Lens</p>
            <p className="text-xs text-gray-500">160° field of view</p>
          </motion.div>
        </FadeIn>

        <FadeIn className="hidden lg:block absolute top-1/2 right-8 -translate-y-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-[180px]"
          >
            <Signal className="w-6 h-6 text-primary-purple mb-2" />
            <p className="text-sm font-semibold text-white">LTE Built-in</p>
            <p className="text-xs text-gray-500">View stats anywhere</p>
          </motion.div>
        </FadeIn>

        {/* Specs Grid for mobile */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-4 sm:px-6 lg:mt-8">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="text-center p-4 md:p-6 rounded-xl bg-dark-card/50 border border-white/5 hover:border-primary-purple/30 hover:bg-dark-card/80 transition-all duration-300"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-primary-purple/20 to-primary-blue/20 flex items-center justify-center">
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
