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
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-purple/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-16">
          <p className="text-sm font-semibold tracking-wider text-primary-purple uppercase mb-4">
            The Problem
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Distracted Driving Kills{" "}
            <GradientText>3,000+ People</GradientText> Every Year
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every day, about 8 Americans are killed in crashes involving
            distracted drivers. Traditional solutions are not enough.
          </p>
        </FadeIn>

        {/* Stats Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem
                key={index}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {item.stat}
                </p>
                <p className="text-sm text-gray-400">{item.label}</p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Solution Transition */}
        <FadeIn className="text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-primary">
            <span className="text-white font-semibold text-lg">
              Attentia changes that.
            </span>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
