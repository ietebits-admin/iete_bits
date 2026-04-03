'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Users, ArrowLeft, Copy } from 'lucide-react';

export default function ContactDetails({ onBack }: any) {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -10 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-4xl mx-auto px-4 perspective-1000"
    >
      <div className="relative">
        {/* 🌫️ Enhanced Ambient Glow */}
        <div className="pointer-events-none absolute -top-40 -right-20 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full animate-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -left-20 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />

        {/* 🔥 HEADER */}
        <motion.div variants={cardVariants} className="mb-12">
          <h2 className="text-4xl font-bold text-white tracking-tight flex items-center gap-3">
            Get in <span className="text-white/40 font-light italic">Touch</span>
          </h2>
          <p className="text-white/40 text-sm mt-3 max-w-sm leading-relaxed">
            Whether you're looking for a collaboration or just want to say hi, our doors are always open.
          </p>
        </motion.div>

        {/* 📱 CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* LEFT: GENERAL QUERIES */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, rotateY: 5, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group cursor-pointer"
          >
            {/* Metallic Shine Sweep */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 ease-in-out" />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white/70" />
              </div>
              
              <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                General Queries
              </p>

              <div className="flex items-center justify-between group/text">
                <p className="text-white text-xl font-medium tracking-tight">
                  contact@ietebits.com
                </p>
                <Copy className="w-4 h-4 text-white/0 group-hover/text:text-white/40 transition-all" />
              </div>

              <p className="text-white/60 mt-2 text-base font-light">
                +91 9142040066
              </p>
            </div>
          </motion.div>

          {/* RIGHT: INDUCTIONS */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, rotateY: -5, transition: { duration: 0.2 } }}
            className="relative p-8 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden group cursor-pointer"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000 ease-in-out" />
            </div>

            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-5 h-5 text-white/70" />
              </div>

              <p className="text-white/30 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                Inductions & Support
              </p>

              <div className="space-y-6">
                <div className="group/item">
                  <p className="text-white text-lg font-medium tracking-wide group-hover/item:translate-x-1 transition-transform">
                    Aditya Raj
                  </p>
                  <p className="text-white/50 text-sm font-light">+91 9142040066</p>
                </div>

                <div className="group/item">
                  <p className="text-white text-lg font-medium tracking-wide group-hover/item:translate-x-1 transition-transform">
                    Amit Kumar Gupta
                  </p>
                  <p className="text-white/50 text-sm font-light">+91 6200983787</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 🔙 BACK BUTTON WITH ANIMATED ARROW */}
        <motion.div variants={cardVariants} className="mt-16">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/30 hover:text-white transition-all group text-sm tracking-widest uppercase font-bold"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
            <span>Go Back</span>
            <span className="block h-[1px] w-0 group-hover:w-full bg-white/50 transition-all duration-500" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}