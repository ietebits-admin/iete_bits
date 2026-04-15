'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const PulsingSparkle = () => (
  <motion.svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    animate={{
      scale: [1, 1.15, 1],
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, x: -40, transition: { duration: 0.3 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, rotateX: -20 },
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
      className="w-full max-w-lg perspective-1000 flex flex-col items-center md:items-start text-center md:text-left"
    >
      <motion.div
        variants={itemVariants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{
          scale: 1.05,
          rotateY: 10,
          z: 50,
          transition: { type: 'spring', stiffness: 300, damping: 10 }
        }}
        className="relative inline-flex items-center gap-3 px-6 py-2 mb-6 md:mb-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl cursor-pointer overflow-hidden group"
      >
        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300" />
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative flex items-center justify-center">
          <PulsingSparkle />
          <div className="absolute inset-0 rounded-full bg-white/10 blur-md" />
        </div>

        <span className="relative z-10 text-[12px] sm:text-sm font-medium tracking-tight text-white/90">
          Drop us a line
        </span>
      </motion.div>

      <motion.h1
        variants={itemVariants}
        className={`${orbitron} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 md:mb-7 leading-[1.1]`}
      >
        <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent animate-[shine_4s_linear_infinite]">
          CONTACT
        </span>
        <br />
        <span className="text-white/80">US</span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-white/60 mb-8 md:mb-12 text-base sm:text-lg leading-relaxed font-light max-w-sm sm:max-w-md"
      >
        Let’s create something extraordinary together.
        Connect with our core team and start your journey.
      </motion.p>

      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        variants={itemVariants}
        className="relative group px-7 py-3.5 sm:px-9 sm:py-4 rounded-xl border border-white/20 overflow-hidden bg-black/30 backdrop-blur-lg"
      >
        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300" />
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <span className="relative z-10 tracking-wide text-sm sm:text-base text-white/95 font-medium">
          CONTACT DETAILS →
        </span>
      </motion.button>

      <motion.div
        variants={{
          hidden: { opacity: 0, scaleX: 0, originX: 0 },
          visible: {
            opacity: 1,
            scaleX: 1,
            transition: {
              delay: 1.2,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }
          },
        }}
        className="mt-10 md:mt-14 h-px w-24 md:w-36 bg-gradient-to-r from-transparent via-white/40 to-transparent hidden md:block"
      />
    </motion.div>
  );
}