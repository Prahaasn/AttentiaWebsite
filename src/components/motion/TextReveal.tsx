"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightColor?: string;
}

export function TextReveal({
  text,
  className = "",
  highlightWords = [],
  highlightColor = "#186ff1",
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "start 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word
            key={i}
            word={word}
            range={[start, end]}
            progress={scrollYProgress}
            isHighlight={highlightWords.includes(word.replace(/[.,!?]/g, ""))}
            highlightColor={highlightColor}
          />
        );
      })}
    </div>
  );
}

interface WordProps {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  isHighlight: boolean;
  highlightColor: string;
}

function Word({ word, range, progress, isHighlight, highlightColor }: WordProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-2">
      <span style={{ color: isHighlight ? highlightColor : "inherit" }}>
        {word}
      </span>
    </motion.span>
  );
}
