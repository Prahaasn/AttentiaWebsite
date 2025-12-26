"use client";

import { Package, Bluetooth, Car } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "Mount",
    description:
      "Attach Attentia to your dashboard with the included mount. No tools or wiring needed.",
  },
  {
    number: "02",
    icon: Bluetooth,
    title: "Connect",
    description:
      "Download the free app and pair your device via Bluetooth in seconds.",
  },
  {
    number: "03",
    icon: Car,
    title: "Drive",
    description:
      "Start driving. Attentia monitors and alerts you automatically. It just works.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" background="gray" padding="lg">
      {/* Section Header */}
      <FadeIn className="text-center mb-10 md:mb-16 px-4 sm:px-6">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-purple uppercase mb-3 md:mb-4">
          How It Works
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Up and Running in <GradientText>Minutes</GradientText>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Getting started is easy. No complicated setup, no subscriptions, no
          hassle.
        </p>
      </FadeIn>

      {/* Steps */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative px-4 sm:px-6">
        {/* Connection Line (Desktop) */}
        <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary-blue via-primary-purple to-accent-pink" />

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <StaggerItem key={index} className="relative">
              <div className="text-center">
                {/* Step Circle */}
                <div className="relative inline-flex mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg flex items-center justify-center relative z-10">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-purple" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white text-xs sm:text-sm font-bold z-20">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
