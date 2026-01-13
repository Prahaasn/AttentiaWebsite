"use client";

import { Eye, Bell, Smartphone, Signal, Moon, Shield } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Eye,
    title: "Real-Time Detection",
    description:
      "Advanced computer vision detects drowsiness, phone use, and distraction in milliseconds. Our AI never blinks.",
    size: "large",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Audio and visual warnings the moment attention drifts from the road.",
    size: "normal",
  },
  {
    icon: Smartphone,
    title: "Parent Dashboard",
    description:
      "Track trips, view analytics, and manage family accounts from your phone.",
    size: "normal",
  },
  {
    icon: Moon,
    title: "Night Vision",
    description: "Infrared sensors work in any lighting condition, 24/7.",
    size: "small",
  },
  {
    icon: Signal,
    title: "LTE Connected",
    description: "Built-in cellular lets you view driving stats from anywhere in the country.",
    size: "small",
  },
  {
    icon: Shield,
    title: "Affordable",
    description:
      "Enterprise-level safety at just $125. Professional protection for every family.",
    size: "large",
    emphasized: true,
  },
];

export function Features() {
  return (
    <Section id="features" background="dark" padding="lg" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-purple/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-10 md:mb-16 px-4 sm:px-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-purple uppercase mb-3 md:mb-4">
            Features
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Everything You Need.{" "}
            <GradientText>Nothing You Don&apos;t.</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Professional-grade safety technology made simple and affordable.
          </p>
        </FadeIn>

        {/* Bento Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-4 sm:px-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";

            return (
              <StaggerItem
                key={index}
                className={cn(isLarge && "sm:col-span-2 lg:col-span-1")}
              >
                <Card
                  variant={feature.emphasized ? "glass" : "dark"}
                  glow={feature.emphasized}
                  className={cn(
                    "h-full",
                    feature.emphasized && "gradient-border"
                  )}
                >
                  <div className="flex flex-col h-full">
                    <div
                      className={cn(
                        "w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4",
                        feature.emphasized
                          ? "bg-gradient-primary"
                          : "bg-dark-lighter border border-white/10"
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-5 h-5 sm:w-6 sm:h-6",
                          feature.emphasized ? "text-white" : "text-primary-purple"
                        )}
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-400 flex-grow">
                      {feature.description}
                    </p>
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </Section>
  );
}
