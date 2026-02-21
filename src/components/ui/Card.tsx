"use client";

import { forwardRef, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "light" | "dark" | "outline";
  hover?: boolean;
  children: React.ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", hover = true, className, children, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-[#e5e7eb] rounded-3xl p-8",
      light: "bg-[#f5f6f8] rounded-3xl p-8",
      dark: "bg-[#191f2d] text-white rounded-3xl p-8",
      outline: "bg-transparent border border-[#e5e7eb] rounded-3xl p-8",
    };

    const hoverStyles = hover
      ? "transition-all duration-200 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)]"
      : "";

    return (
      <div
        ref={ref}
        className={cn(variants[variant], hoverStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export { Card };
