"use client";

import { Eye, Bell, Smartphone, Wrench, Moon, Shield } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Eye,
    title: "Real-Time AI Monitoring",
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
    title: "Mobile Dashboard",
    description:
      "Track trips, view analytics, and manage family accounts from your phone.",
    size: "normal",
  },
  {
    icon: Wrench,
    title: "5-Minute Install",
    description: "Dashboard mount, no wiring required. Just plug in and go.",
    size: "small",
  },
  {
    icon: Moon,
    title: "Day & Night Vision",
    description: "Infrared sensors work in any lighting condition.",
    size: "small",
  },
  {
    icon: Shield,
    title: "100% Private",
    description:
      "All processing happens on-device. No cloud. No data collection. Your privacy, protected.",
    size: "large",
    emphasized: true,
  },
];

export function Features() {
  return (
    <Section id="features" padding="lg">
      {/* Section Header */}
      <FadeIn className="text-center mb-16">
        <p className="text-sm font-semibold tracking-wider text-primary-purple uppercase mb-4">
          Features
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          Everything You Need.{" "}
          <GradientText>Nothing You Don&apos;t.</GradientText>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional-grade safety technology made simple and affordable.
        </p>
      </FadeIn>

      {/* Bento Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isLarge = feature.size === "large";

          return (
            <StaggerItem
              key={index}
              className={cn(isLarge && "md:col-span-2 lg:col-span-1")}
            >
              <Card
                variant={feature.emphasized ? "outline" : "glass"}
                className={cn(
                  "h-full",
                  feature.emphasized && "gradient-border"
                )}
              >
                <div className="flex flex-col h-full">
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                      feature.emphasized
                        ? "bg-gradient-primary"
                        : "bg-gray-100"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-6 h-6",
                        feature.emphasized ? "text-white" : "text-primary-purple"
                      )}
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </Card>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
