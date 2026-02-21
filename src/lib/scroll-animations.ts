import { useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { RefObject } from "react";

// Smooth spring config for perfectly.so-style buttery animations
export const springConfig = {
  stiffness: 80,
  damping: 25,
  restDelta: 0.001,
};

// Faster spring for more responsive elements
export const springConfigFast = {
  stiffness: 200,
  damping: 40,
  restDelta: 0.001,
};

/**
 * Hook for sticky scroll sections
 * Returns scroll progress from 0-1 as you scroll through the container
 */
export function useStickyScroll(containerRef: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return {
    scrollYProgress,
    smoothProgress: useSpring(scrollYProgress, springConfig),
  };
}

/**
 * Hook for element reveal based on viewport position
 * Fades in/out and scales as element enters/exits viewport
 */
export function useScrollReveal(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  return {
    opacity: useSpring(opacity, springConfig),
    scale: useSpring(scale, springConfig),
    y: useSpring(y, springConfig),
  };
}

/**
 * Hook for progress-based animations (0-100% through section)
 * Use for sticky sections where content changes based on scroll position
 */
export function useScrollProgress(ref: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return {
    progress: scrollYProgress,
    smoothProgress: useSpring(scrollYProgress, springConfig),
  };
}

/**
 * Hook for image zoom on scroll (Apple product page style)
 * Image zooms in as you scroll toward center
 */
export function useScrollZoom(
  ref: RefObject<HTMLElement | null>,
  minScale = 1,
  maxScale = 1.2
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [minScale, maxScale]);

  return {
    scale: useSpring(scale, springConfig),
  };
}

/**
 * Hook for parallax effect
 * Element moves at different rate than scroll
 */
export function useParallax(
  ref: RefObject<HTMLElement | null>,
  speed = 0.5,
  direction: "up" | "down" = "up"
) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const multiplier = direction === "up" ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 200 * speed * multiplier]
  );

  return {
    y: useSpring(y, springConfig),
  };
}

/**
 * Transform helper for creating phased animations
 * Maps scroll progress to opacity/position for different content phases
 */
export function createPhaseTransforms(
  progress: MotionValue<number>,
  phases: { start: number; end: number }[]
) {
  return phases.map(({ start, end }) => ({
    opacity: useTransform(
      progress,
      [start - 0.1, start, end, end + 0.1],
      [0, 1, 1, 0]
    ),
    y: useTransform(
      progress,
      [start - 0.1, start, end, end + 0.1],
      [50, 0, 0, -50]
    ),
  }));
}

// Animation variants for staggered text reveal
export const textRevealVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

// Animation variants for fade up
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Animation variants for scale in
export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
