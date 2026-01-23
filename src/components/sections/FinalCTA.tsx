"use client";

import { Mail, Phone } from "lucide-react";
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] bg-primary-blue/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 sm:w-72 sm:h-72 md:w-[500px] md:h-[500px] bg-primary-purple/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-accent-pink/10 rounded-full blur-[200px] pointer-events-none" />

      <FadeIn className="relative z-10 text-center px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          Ready to <GradientText>Drive Safer?</GradientText>
        </h2>
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 sm:mb-12">
          Join thousands of families who trust Attentia to keep their loved ones
          safe on the road. Be among the first when we launch at CES 2026.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button variant="primary" size="lg" className="w-full sm:w-auto">
            Preorder Coming Soon
          </Button>
        </div>

        {/* Contact */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-500">
          <a
            href="mailto:prahaasn2145@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Mail className="w-4 h-4" />
            prahaasn2145@gmail.com
          </a>
          <a
            href="tel:9843779723"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            (984) 377-9723
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
