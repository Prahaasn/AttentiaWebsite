"use client";

import { motion } from "framer-motion";
import { Quote, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { GradientText } from "@/components/ui/GradientText";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";

const pressItems = [
  {
    source: "CBS News",
    quote: "Over 97% accurate in detecting distracted and drowsy driving.",
    description: "Featured coverage on teen-built safety technology",
  },
  {
    source: "TechCrunch",
    quote: "The next generation of driver safety is here.",
    description: "CES 2026 Innovation Award Nominee",
  },
  {
    source: "Forbes",
    quote: "Making professional-grade safety accessible to every family.",
    description: "Top 10 Automotive Startups to Watch",
  },
];

const stats = [
  { value: "97%", label: "Detection Accuracy" },
  { value: "< 1s", label: "Alert Response" },
  { value: "50K+", label: "Pre-orders" },
];

export function Press() {
  return (
    <Section id="press" background="dark" padding="lg" className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-accent-pink/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-primary-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Section Header */}
        <FadeIn className="text-center mb-12 md:mb-16 px-4 sm:px-6">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-primary-purple uppercase mb-3 md:mb-4">
            In The Press
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            What They&apos;re <GradientText>Saying</GradientText>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Recognized by leading publications for innovation in driver safety.
          </p>
        </FadeIn>

        {/* Press Quotes Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 px-4 sm:px-6">
          {pressItems.map((item, index) => (
            <StaggerItem key={index}>
              <motion.div
                whileHover={{ y: -4 }}
                className="h-full p-6 rounded-2xl bg-dark-card/50 border border-white/5 hover:border-primary-purple/20 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-primary-purple/40 mb-4" />
                <p className="text-white text-lg font-medium mb-4 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-auto">
                  <p className="text-primary-purple font-semibold">{item.source}</p>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Stats Row */}
        <FadeIn>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 px-4 sm:px-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Press Kit CTA */}
        <FadeIn className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <span>Download Press Kit</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </Section>
  );
}
