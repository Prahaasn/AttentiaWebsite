"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardHover } from "@/lib/animations";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  variant?: "glass" | "solid" | "outline";
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "glass", hover = true, className, children, ...props }, ref) => {
    const variants = {
      glass: "glass rounded-2xl p-6",
      solid: "bg-white rounded-2xl p-6 shadow-lg",
      outline: "bg-white border border-gray-200 rounded-2xl p-6",
    };

    return (
      <motion.div
        ref={ref}
        whileHover={hover ? cardHover : undefined}
        className={cn(variants[variant], className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

export { Card };
