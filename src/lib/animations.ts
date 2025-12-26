import { Variants } from "framer-motion";

// Custom easing function (smooth ease-out)
export const customEase = [0.25, 0.1, 0.25, 1] as const;

// Fade up animation variant
export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
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
      duration: 0.5,
      ease: customEase,
    },
  },
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: customEase,
    },
  },
};

// Stagger container variant
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// Stagger container with faster stagger
export const staggerContainerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

// Card hover animation
export const cardHover = {
  scale: 1.02,
  y: -8,
  transition: {
    duration: 0.3,
    ease: customEase,
  },
};

// Button hover/tap animations
export const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: customEase,
  },
};

export const buttonTap = {
  scale: 0.98,
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
    },
  },
};

// Viewport settings for whileInView
export const viewportSettings = {
  once: true,
  margin: "-100px" as const,
};
