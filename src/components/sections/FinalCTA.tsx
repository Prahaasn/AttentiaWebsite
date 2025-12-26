"use client";

import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn } from "@/components/motion";

export function FinalCTA() {
  return (
    <Section
      background="dark"
      padding="lg"
      className="relative overflow-hidden"
    >
      {/* Background decoration - smaller on mobile */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary-blue/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-primary-purple/20 rounded-full blur-3xl pointer-events-none" />

      <FadeIn className="relative z-10 text-center px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          Ready to <GradientText>Drive Safer?</GradientText>
        </h2>
        <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto mb-8 sm:mb-10">
          Be among the first to experience AI-powered driver safety when we
          launch at CES 2026.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Pre-order Coming Soon
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
        <p className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500">
          Have questions?{" "}
          <a
            href="mailto:hello@attentiadrive.com"
            className="text-primary-purple hover:underline"
          >
            Contact us
          </a>
        </p>
      </FadeIn>
    </Section>
  );
}
