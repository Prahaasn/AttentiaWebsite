"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { fadeUp, fadeIn, viewportSettings } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  direction?: "up" | "none";
  delay?: number;
  children: React.ReactNode;
}

export function FadeIn({
  direction = "up",
  delay = 0,
  className,
  children,
  ...props
}: FadeInProps) {
  const variants = direction === "up" ? fadeUp : fadeIn;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={variants}
      transition={{ delay }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
