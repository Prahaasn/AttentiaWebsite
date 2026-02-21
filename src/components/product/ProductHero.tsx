"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { springConfig } from "@/lib/scroll-animations";

// Import the DeviceSVG component from ProductShowcase
// Note: In a real scenario, we'd extract DeviceSVG to a shared component
function DeviceSVG({ variant }: { variant: "cream" | "black" }) {
  const c = variant === "cream";

  const colors = {
    bodyStop1: c ? "#F7F3EC" : "#2C2C30",
    bodyStop2: c ? "#F0ECE4" : "#262628",
    bodyStop3: c ? "#E8E3DA" : "#1E1E22",
    bodyStop4: c ? "#E0DBD0" : "#18181C",
    faceTop: c ? "#EFEBE3" : "#242428",
    faceBottom: c ? "#E5E0D6" : "#1C1C20",
    stroke: c ? "#D8D3C8" : "#3A3A40",
    strokeLight: c ? "#CCC7BC" : "#333338",
    edgeDark: c ? "#C5BFB3" : "#121214",
    edgeLight: c ? "#FAF8F5" : "#3A3A3E",
    highlight: c ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.08)",
    speakerBg: c ? "#D8D3C8" : "#2A2A2E",
    speakerDot: c ? "#A8A298" : "#48484E",
    ledHousing: c ? "#E8E3DA" : "#2A2A2E",
    textColor: c ? "#C8C3B8" : "#555558",
  };

  const id = `product-${variant}`;

  return (
    <svg viewBox="0 0 500 350" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <defs>
        <linearGradient id={`body-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.bodyStop1} />
          <stop offset="33%" stopColor={colors.bodyStop2} />
          <stop offset="66%" stopColor={colors.bodyStop3} />
          <stop offset="100%" stopColor={colors.bodyStop4} />
        </linearGradient>
        <linearGradient id={`face-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={colors.faceTop} />
          <stop offset="100%" stopColor={colors.faceBottom} />
        </linearGradient>
        <linearGradient id={`shine-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={c ? "rgba(255,255,255,0.65)" : "rgba(255,255,255,0.12)"} />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <linearGradient id={`ring-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#5A5A60" />
          <stop offset="25%" stopColor="#3A3A40" />
          <stop offset="75%" stopColor="#2A2A30" />
          <stop offset="100%" stopColor="#4A4A50" />
        </linearGradient>
        <radialGradient id={`barrel-${id}`} cx="45%" cy="35%" r="55%">
          <stop offset="0%" stopColor="#38363E" />
          <stop offset="50%" stopColor="#1E1C24" />
          <stop offset="100%" stopColor="#0E0C14" />
        </radialGradient>
        <radialGradient id={`glass-${id}`} cx="40%" cy="30%" r="60%">
          <stop offset="0%" stopColor="#201548" />
          <stop offset="50%" stopColor="#140E30" />
          <stop offset="100%" stopColor="#0C0824" />
        </radialGradient>
        <radialGradient id={`aperture-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0A0814" />
          <stop offset="100%" stopColor="#06041A" />
        </radialGradient>
        <radialGradient id={`reflect1-${id}`} cx="30%" cy="30%" r="50%">
          <stop offset="0%" stopColor="rgba(220,228,255,0.35)" />
          <stop offset="100%" stopColor="rgba(220,228,255,0)" />
        </radialGradient>
        <radialGradient id={`reflect2-${id}`} cx="70%" cy="70%" r="40%">
          <stop offset="0%" stopColor="rgba(180,190,235,0.18)" />
          <stop offset="100%" stopColor="rgba(180,190,235,0)" />
        </radialGradient>
        <radialGradient id={`irFill-${id}`} cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#481828" />
          <stop offset="100%" stopColor="#2C1018" />
        </radialGradient>
        <radialGradient id={`irGlow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(139,0,0,0.4)" />
          <stop offset="100%" stopColor="rgba(139,0,0,0)" />
        </radialGradient>
        <linearGradient id={`led-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,180,216,0.15)" />
          <stop offset="25%" stopColor="#00B8D8" />
          <stop offset="50%" stopColor="#00D4F8" />
          <stop offset="75%" stopColor="#00B8D8" />
          <stop offset="100%" stopColor="rgba(0,180,216,0.15)" />
        </linearGradient>
        <linearGradient id={`ledGlow-${id}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="rgba(0,212,248,0.6)" />
          <stop offset="100%" stopColor="rgba(0,212,248,0)" />
        </linearGradient>
        <filter id={`shadow-${id}`} x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="25" stdDeviation="20" floodColor="rgba(0,0,0,0.22)" />
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="rgba(0,0,0,0.12)" />
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="rgba(0,0,0,0.08)" />
        </filter>
        <filter id={`glow-${id}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id={`soft-${id}`} x="-5%" y="-5%" width="110%" height="110%">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>
      <g filter={`url(#shadow-${id})`}>
        <rect x="63" y="58" width="374" height="219" rx="22" fill={colors.edgeDark} />
        <rect x="60" y="55" width="380" height="220" rx="24" fill={`url(#body-${id})`} />
        <rect x="60" y="55" width="8" height="220" rx="4" fill={colors.edgeDark} opacity="0.5" />
        <rect x="432" y="55" width="8" height="220" rx="4" fill={colors.edgeLight} opacity={c ? "0.6" : "0.25"} />
        <rect x="75" y="57" width="350" height="12" rx="6" fill={`url(#shine-${id})`} />
        <rect x="80" y="268" width="340" height="4" rx="2" fill="rgba(0,0,0,0.08)" />
        <rect x="75" y="70" width="350" height="190" rx="18" fill={`url(#face-${id})`} stroke={colors.stroke} strokeWidth="1" />
        <rect x="85" y="72" width="330" height="4" rx="2" fill={colors.highlight} />
        <line x1="95" y1="180" x2="405" y2="180" stroke={colors.stroke} strokeWidth="1.5" opacity="0.7" />
        <line x1="95" y1="182" x2="405" y2="182" stroke="rgba(0,0,0,0.06)" strokeWidth="1" />
        <circle cx="250" cy="125" r="56" fill="rgba(0,0,0,0.12)" filter={`url(#soft-${id})`} />
        <circle cx="250" cy="123" r="54" fill={`url(#ring-${id})`} stroke={colors.strokeLight} strokeWidth="2.5" />
        <path d="M 202 98 A 52 52 0 0 1 298 98" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="250" cy="123" r="46" fill={`url(#barrel-${id})`} />
        <circle cx="250" cy="123" r="40" fill="none" stroke="rgba(30,28,36,0.8)" strokeWidth="1" />
        <circle cx="250" cy="123" r="36" fill={`url(#glass-${id})`} />
        <circle cx="250" cy="123" r="30" fill="none" stroke="rgba(40,38,58,0.5)" strokeWidth="0.8" />
        <circle cx="250" cy="123" r="14" fill={`url(#aperture-${id})`} stroke="#28263A" strokeWidth="0.5" />
        <ellipse cx="230" cy="105" rx="20" ry="14" fill={`url(#reflect1-${id})`} />
        <ellipse cx="270" cy="141" rx="12" ry="7" fill={`url(#reflect2-${id})`} />
        <circle cx="235" cy="110" r="3.5" fill="rgba(255,255,255,0.45)" />
        <circle cx="228" cy="118" r="1.5" fill="rgba(255,255,255,0.25)" />
        {[{ x: 165, y: 88 }, { x: 335, y: 88 }, { x: 165, y: 158 }, { x: 335, y: 158 }].map((pos, i) => (
          <g key={`ir-${i}`}>
            <circle cx={pos.x} cy={pos.y} r="18" fill={`url(#irGlow-${id})`} />
            <circle cx={pos.x} cy={pos.y} r="13" fill={colors.ledHousing} stroke={colors.stroke} strokeWidth="0.8" />
            <circle cx={pos.x} cy={pos.y} r="9" fill={`url(#irFill-${id})`} />
            <circle cx={pos.x} cy={pos.y} r="5" fill="#380E18" />
            <ellipse cx={pos.x - 2} cy={pos.y - 3} rx="3" ry="2" fill="rgba(255,255,255,0.12)" />
          </g>
        ))}
        <rect x="305" y="195" width="88" height="52" rx="10" fill={colors.speakerBg} stroke={colors.strokeLight} strokeWidth="0.5" />
        {Array.from({ length: 7 }, (_, row) =>
          Array.from({ length: 12 }, (_, col) => (
            <circle key={`dot-${row}-${col}`} cx={314 + col * 6.4 + (row % 2) * 3.2} cy={203 + row * 6.2} r="1.8" fill={colors.speakerDot} />
          ))
        )}
        <rect x="100" y="203" width="105" height="16" rx="8" fill={colors.strokeLight} />
        <rect x="104" y="206" width="97" height="10" rx="5" fill={`url(#ledGlow-${id})`} filter={`url(#glow-${id})`} opacity="0.5" />
        <rect x="106" y="208" width="93" height="6" rx="3" fill={`url(#led-${id})`} />
        <rect x="106" y="208" width="93" height="2.5" rx="1.25" fill="rgba(255,255,255,0.35)" />
        <text x="250" y="240" textAnchor="middle" fontSize="14" fontWeight="600" fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" fill={colors.textColor} letterSpacing="4">
          ATTENTIA
        </text>
        {[0, 1, 2, 3].map((i) => (
          <rect key={`btn-${i}`} x="438" y={100 + i * 28} width="5" height="14" rx="2.5" fill={colors.stroke} opacity="0.6" />
        ))}
        <rect x="235" y="268" width="30" height="5" rx="2.5" fill={colors.stroke} opacity="0.4" />
      </g>
    </svg>
  );
}

export function ProductHero() {
  const [selectedColor, setSelectedColor] = useState<"cream" | "black">("cream");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springConfig);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 1.15]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const y = useTransform(smoothProgress, [0, 0.5], [0, -100]);

  return (
    <section ref={containerRef} className="min-h-[200vh] relative bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050508] to-black" />

        {/* Blue glow behind device */}
        <div
          className="absolute w-[600px] h-[400px] rounded-full opacity-30 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(24,111,241,0.3) 0%, transparent 70%)",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Content */}
        <motion.div
          style={{ scale, opacity, y }}
          className="relative z-10 text-center px-6"
        >
          <p className="text-[#186ff1] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Introducing
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
            Attentia DM-1
          </h1>

          {/* Device */}
          <div className="max-w-2xl mx-auto mb-10">
            <DeviceSVG variant={selectedColor} />
          </div>

          {/* Color Switcher */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={() => setSelectedColor("cream")}
              className={`w-12 h-12 rounded-full border-2 transition-all ${
                selectedColor === "cream"
                  ? "border-[#186ff1] ring-2 ring-[#186ff1]/50"
                  : "border-white/20 hover:border-white/40"
              }`}
              style={{ background: "linear-gradient(145deg, #F7F3EC, #E0DBD0)" }}
            />
            <button
              onClick={() => setSelectedColor("black")}
              className={`w-12 h-12 rounded-full border-2 transition-all ${
                selectedColor === "black"
                  ? "border-[#186ff1] ring-2 ring-[#186ff1]/50"
                  : "border-white/20 hover:border-white/40"
              }`}
              style={{ background: "linear-gradient(145deg, #2C2C30, #161618)" }}
            />
          </div>
          <p className="text-white/60 mt-3">
            {selectedColor === "cream" ? "Warm Cream" : "Stealth Black"}
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 text-white/40 text-sm flex flex-col items-center gap-2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span>Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
