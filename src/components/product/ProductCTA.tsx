"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Check } from "lucide-react";

const benefits = [
  "30-day money-back guarantee",
  "2-year manufacturer warranty",
  "Free US shipping",
  "Ships August 2026",
];

export function ProductCTA() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      {/* Blue glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(24,111,241,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-[#186ff1] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Ready to Drive Safer?
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Join families who trust Attentia to keep their loved ones safe on the road.
          </p>

          {/* Pricing */}
          <div className="bg-[#111] border border-white/10 rounded-3xl p-10 mb-10 max-w-lg mx-auto">
            <div className="flex items-baseline justify-center gap-4 mb-2">
              <span className="text-5xl font-bold text-white">$165</span>
              <span className="text-white/50">device</span>
              <span className="text-white/30">+</span>
              <span className="text-3xl font-bold text-white">$3.99</span>
              <span className="text-white/50">/mo</span>
            </div>
            <p className="text-white/40 text-sm mb-8">
              One-time purchase + subscription
            </p>

            <Button variant="primary" size="lg" className="w-full mb-6">
              Preorder Coming Soon
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <ul className="grid grid-cols-2 gap-3 text-left">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-white/60 text-sm">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
