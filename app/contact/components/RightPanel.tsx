'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Send, Sparkles } from 'lucide-react';

export default function RightPanel({ showDetails }: any) {
  // Animation Variants for the Form Elements
  const formChildVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex items-center justify-center px-10 perspective-2000">
      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="form-panel"
            initial={{ opacity: 0, rotateY: -30, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 30, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-md h-[480px] rounded-3xl border border-white/10 backdrop-blur-3xl bg-white/[0.02] shadow-[0_0_50px_-12px_rgba(255,255,255,0.1)] overflow-hidden group"
          >
            {/* ✨ Dynamic Metallic Shine */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000" />
            </div>

            {/* 💎 Inner Content */}
            <motion.div 
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              className="relative z-10 flex flex-col items-center justify-center h-full px-8"
            >
              {/* TOP BADGE */}
              <motion.div variants={formChildVariants} className="mb-8 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] text-white/60">
                <Sparkles className="w-3 h-3 text-white/80" />
                Leave a message
              </motion.div>

              {/* INPUTS */}
              <div className="w-full space-y-5">
                {[
                  { placeholder: "Name...", type: "text" },
                  { placeholder: "Email...", type: "email" },
                  { placeholder: "Your Message...", type: "textarea" }
                ].map((field, idx) => (
                  <motion.div key={idx} variants={formChildVariants}>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-6 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 
                        focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-4 focus:ring-white/5 transition-all duration-300 backdrop-blur-md"
                    />
                  </motion.div>
                ))}
              </div>

              {/* SEND BUTTON */}
              <motion.button 
                variants={formChildVariants}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full py-4 rounded-2xl border border-white/20 text-white font-medium flex items-center justify-center gap-3
                  bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:border-white/40 transition-all shadow-xl group/btn"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 text-white/60 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="logo-panel"
            initial={{ opacity: 0, rotateY: 30, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -30, scale: 0.95 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-md h-[480px] flex items-center justify-center rounded-3xl border border-white/5 bg-transparent relative overflow-hidden"
          >
            {/* Background Glow removed for a cleaner look */}
            
            <motion.div 
              className="relative w-64 h-64"
            >
              {/* Glow Ring removed */}
              <Image
                src="/logo.png"
                alt="IETE Logo"
                fill
                className="object-contain" // Effects and drop-shadows removed
                priority
              />
            </motion.div>

            {/* Subtle Text removed for maximum cleanliness */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}