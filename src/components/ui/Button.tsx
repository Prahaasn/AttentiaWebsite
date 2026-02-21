"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

    const variants = {
      primary:
        "bg-gradient-to-r from-[#7C3AED] via-[#D946EF] to-[#F97316] text-white hover:opacity-90 focus:ring-[#7C3AED]",
      secondary:
        "bg-white text-[#191f2d] border border-[#e5e7eb] hover:bg-[#f5f6f8] focus:ring-[#191f2d]",
      ghost:
        "bg-transparent text-[#191f2d] hover:bg-[#f5f6f8] focus:ring-[#191f2d]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
