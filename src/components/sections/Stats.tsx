"use client";

import { Section } from "@/components/ui/Section";
import { CountUp, StaggerContainer, StaggerItem } from "@/components/motion";

const stats = [
  { value: 90, suffix: "%", label: "Reduction in distracted incidents" },
  { value: 125, prefix: "$", label: "One-time purchase" },
  { value: 24, suffix: "/7", label: "Continuous monitoring" },
  { value: 1, prefix: "<", suffix: "s", label: "Alert response time" },
];

export function Stats() {
  return (
    <Section background="gradient" padding="lg" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-2xl" />
        <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/20 rounded-full blur-2xl" />
      </div>

      <StaggerContainer className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6">
        {stats.map((stat, index) => (
          <StaggerItem key={index} className="text-center py-2 sm:py-0">
            <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2">
              <CountUp
                end={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                duration={2.5}
              />
            </div>
            <p className="text-white/80 text-xs sm:text-sm md:text-base leading-tight">{stat.label}</p>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
