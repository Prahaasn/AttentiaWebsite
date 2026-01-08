"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "glass" | "solid" | "outline" | "dark";
  hover?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "dark", hover = true, glow = false, className, children, ...props }, ref) => {
    const variants = {
      glass: "glass-card rounded-2xl p-6 transition-all duration-300",
      solid: "bg-dark-card rounded-2xl p-6 shadow-lg border border-white/10",
      outline: "bg-dark-card/50 border border-white/10 rounded-2xl p-6",
      dark: "bg-dark-card/80 border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-primary-purple/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? cardHover : undefined}
        className={cn(
          variants[variant],
          glow && "shadow-[0_0_30px_rgba(139,92,246,0.2)]",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
