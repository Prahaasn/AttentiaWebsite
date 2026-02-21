import { Variants } from "framer-motion";

// Custom easing function (smooth ease-out)
export const customEase = [0.25, 0.1, 0.25, 1] as const;

// Fade up animation variant - subtle
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: customEase,
    },
  },
};

// Fade in animation (no movement)
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: customEase,
    },
  },
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: customEase,
    },
  },
};

// Stagger container variant
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Stagger container with faster stagger
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.03,
    },
  },
};

// Viewport settings for whileInView
export const viewportSettings = {
  once: true,
  margin: "-50px" as const,
};
