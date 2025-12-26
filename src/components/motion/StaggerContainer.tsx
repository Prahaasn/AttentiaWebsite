"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { viewportSettings } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StaggerContainerProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: React.ReactNode;
  staggerDelay?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportSettings}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
