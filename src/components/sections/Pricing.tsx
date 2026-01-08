"use client";

import { Check, Star, Zap } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/motion";

const deviceFeatures = [
  "Attentia Core Device",
  "Dashboard Mount Kit",
  "USB-C Power Cable",
  "Quick Start Guide",
  "Free US Shipping",
];

const subscriptionFeatures = [
  "Real-time AI monitoring",
  "iOS & Android App",
  "Trip history & analytics",
  "Family sharing (up to 5)",
  "Cloud backup & sync",
  "Priority support",
  "Lifetime software updates",
];

export function Pricing() {
  return (
    <Section id="pricing" background="darker" padding="lg" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-purple/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 md:mb-16 px-4 sm:px-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-purple uppercase mb-3 md:mb-4">
            Pricing
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Simple, <GradientText>Transparent</GradientText> Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            One device, one low monthly fee. Everything you need for safer driving.
          </p>
        </FadeIn>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Device Card */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-dark-card/50 border border-white/10">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Attentia Device
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl font-bold gradient-text">
                    $125
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-6">One-time purchase</p>

                <ul className="space-y-3 mb-6">
                  {deviceFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-purple/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-primary-purple" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subscription Card */}
              <div className="relative p-6 sm:p-8 rounded-2xl bg-dark-card border border-primary-purple/30 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
                {/* Popular badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-white text-xs sm:text-sm font-medium shadow-lg">
                    <Star className="w-3.5 h-3.5" />
                    Recommended
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 mt-2">
                  Attentia Pro
                </h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl sm:text-5xl font-bold gradient-text">
                    $3.99
                  </span>
                  <span className="text-gray-400">/month</span>
                </div>
                <p className="text-gray-500 text-sm mb-6">Cancel anytime</p>

                <ul className="space-y-3 mb-6">
                  {subscriptionFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Combined CTA */}
          <FadeIn className="mt-10">
            <div className="text-center p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary-blue/10 via-primary-purple/10 to-accent-pink/10 border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-accent-pink" />
                <span className="text-sm font-semibold text-white">Launch Special</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                $125 + $3.99/mo
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Get the device and unlock all Pro features
              </p>
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Pre-order Now
              </Button>
              <p className="mt-4 text-xs text-gray-500">
                Launching at CES 2026 • Ships August 2026 • 30-day money-back guarantee
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
