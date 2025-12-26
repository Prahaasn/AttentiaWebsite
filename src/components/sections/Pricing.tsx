"use client";

import { Check, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/motion";

const features = [
  "Attentia Device",
  "iOS & Android App",
  "Lifetime Software Updates",
  "Real-Time Alerts",
  "Trip History & Analytics",
  "Family Sharing (up to 5)",
  "Free US Shipping",
];

export function Pricing() {
  return (
    <Section id="pricing" background="gray" padding="lg">
      {/* Section Header */}
      <FadeIn className="text-center mb-16">
        <p className="text-sm font-semibold tracking-wider text-primary-purple uppercase mb-4">
          Pricing
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          One Device. One Price.{" "}
          <GradientText>Lifetime Safety.</GradientText>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          No subscriptions. No hidden fees. Just professional-grade safety at an
          unbeatable price.
        </p>
      </FadeIn>

      {/* Pricing Card */}
      <FadeIn className="max-w-lg mx-auto">
        <Card
          variant="solid"
          hover={false}
          className="relative overflow-hidden shadow-2xl"
        >
          {/* Popular badge */}
          <div className="absolute top-4 right-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-primary text-white text-sm font-medium">
              <Star className="w-4 h-4" />
              Early Bird
            </span>
          </div>

          <div className="pt-8">
            <h3 className="text-2xl font-bold mb-2">Attentia</h3>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl md:text-6xl font-bold gradient-text">
                $165
              </span>
            </div>
            <p className="text-gray-500 mb-8">One-time purchase</p>

            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="primary" size="lg" className="w-full">
              Pre-order Coming Soon
            </Button>

            <p className="text-center text-sm text-gray-500 mt-4">
              Launching at CES 2026. Ships January 2026.
            </p>
          </div>
        </Card>
      </FadeIn>
    </Section>
  );
}
