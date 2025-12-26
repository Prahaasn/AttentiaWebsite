"use client";

import { AlertTriangle, Smartphone, Clock, Eye } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const stats = [
  {
    icon: AlertTriangle,
    stat: "3,000+",
    label: "Deaths per year from distracted driving",
  },
  {
    icon: Smartphone,
    stat: "8%",
    label: "Of all fatal crashes involve phone use",
  },
  {
    icon: Clock,
    stat: "5 sec",
    label: "Average time eyes are off the road when texting",
  },
  {
    icon: Eye,
    stat: "400K",
    label: "Injuries annually from distracted driving",
  },
];

export function Problem() {
  return (
    <Section background="dark" padding="lg" className="relative overflow-hidden">
      {/* Background decoration - smaller on mobile */}
      <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-primary-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 md:mb-16">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-purple uppercase mb-3 md:mb-4">
            The Problem
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Distracted Driving Kills{" "}
            <GradientText>3,000+ People</GradientText> Every Year
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Every day, about 8 Americans are killed in crashes involving
            distracted drivers. Traditional solutions are not enough.
          </p>
        </FadeIn>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-16">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={index}
                className="text-center p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-primary mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                  {item.stat}
                </p>
                <p className="text-xs sm:text-sm text-gray-400 leading-tight">{item.label}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Solution Transition */}
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-primary">
            <span className="text-white font-semibold text-base sm:text-lg">
              Attentia changes that.
            </span>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
