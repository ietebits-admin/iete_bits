'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Reusable animated icon component
const PulsingSparkle = () => (
  <motion.svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      rotate: [0, 10, -10, 0]
    }}
    transition={{
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    }}
    className="relative z-10"
  >
    <path
      d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
);

export default function ContactIntro({ onClick, orbitron }: any) {
  const [isHovered, setIsHovered] = useState(false);

  // Parent container variants for staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animating
        delayChildren: 0.1, // Initial delay
      },
    },
    exit: { opacity: 0, x: -80 },
  };

  // sexy floating/entrance variants for standard items
  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      rotateX: -30 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: { 
        type: 'spring', 
        damping: 15, 
        stiffness: 100 
      }
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
      className="max-w-md perspective-1000" // Added perspective for 3D effect
    >
      {/* 🏷️ TOP PILL BADGE WITH SHINE HOVER & 3D TILT */}
      <motion.div
        variants={itemVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.05,
          rotateY: 10, // sexy 3D tilt
          z: 50,
          transition: { type: 'spring', stiffness: 300, damping: 10 }
        }}
        className="relative inline-flex items-center gap-4 px-6 py-3 mb-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl cursor-pointer overflow-hidden group"
      >
        {/* 🔥 Same Hover Shine/Glow Effect as the Main Button */}
        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300" />
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* The New SVG (Sparkle) */}
        <div className="relative flex items-center justify-center">
          <PulsingSparkle />
          {/* subtle glow behind the icon */}
          <div className="absolute inset-0 rounded-full bg-white/10 blur-md" />
        </div>

        {/* Text */}
        <span className="relative z-10 text-base font-medium tracking-tight text-white/90">
          Drop us a line
        </span>
      </motion.div>

      {/* 🔥 HEADING */}
      <motion.h1
        variants={itemVariants}
        className={`${orbitron} text-6xl font-bold mb-7 leading-tight`}
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
          CONTACT
        </span>
        <br />
        <span className="text-white/80">US</span>
      </motion.h1>

      {/* ✨ DESCRIPTION */}
      <motion.p
        variants={itemVariants}
        className="text-white/60 mb-12 text-lg leading-relaxed font-light"
      >
        Let’s create something extraordinary together.
        Connect with our core team and start your journey.
      </motion.p>

      {/* 🚀 MAIN BUTTON */}
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        variants={itemVariants}
        className="relative group px-9 py-4 rounded-xl border border-white/20 overflow-hidden bg-black/30 backdrop-blur-lg"
      >
        {/* Glow */}
        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300" />

        {/* Shine Sweep */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Text */}
        <span className="relative z-10 tracking-wide text-white/95 font-medium">
          CONTACT DETAILS →
        </span>
      </motion.button>

      {/* 🔵 SUBTLE DIVIDER WITH UNIQUE SCALE ANIMATION */}
      <motion.div
        variants={{
          hidden: { opacity: 0, scaleX: 0, originX: 0 },
          visible: { 
            opacity: 1, 
            scaleX: 1, 
            transition: { 
              delay: 1.2, // appear last
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] // sleek custom ease
            }
          },
        }}
        className="mt-14 h-px w-36 bg-gradient-to-r from-transparent via-white/40 to-transparent"
      />
    </motion.div>
  );
}