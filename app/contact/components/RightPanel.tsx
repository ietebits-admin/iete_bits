'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Send, Sparkles } from 'lucide-react';

export default function RightPanel({ showDetails }: any) {
  const formChildVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex items-center justify-center w-full px-4 sm:px-6 md:px-10 perspective-1000 md:perspective-2000 py-10">
      <AnimatePresence mode="wait">
        {!showDetails ? (
          <motion.div
            key="form-panel"
            initial={{ opacity: 0, rotateY: -20, scale: 0.95 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: 20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="relative w-full max-w-[420px] min-h-[500px] h-auto rounded-3xl border border-white/10 backdrop-blur-3xl bg-white/[0.02] shadow-2xl overflow-hidden group p-6 sm:p-8 flex flex-col justify-center"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition duration-1000" />
            </div>

            <motion.div 
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
              className="relative z-10 flex flex-col items-center w-full"
            >
              <motion.div variants={formChildVariants} className="mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60">
                <Sparkles className="w-3 h-3 text-white/80" />
                Leave a message
              </motion.div>

              <div className="w-full space-y-4">
                {[
                  { placeholder: "Name...", type: "text" },
                  { placeholder: "Email...", type: "email" },
                  { placeholder: "Your Message...", type: "textarea" }
                ].map((field, idx) => (
                  <motion.div key={idx} variants={formChildVariants}>
                    {field.type === "textarea" ? (
                      <textarea
                        placeholder={field.placeholder}
                        rows={4}
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-4 focus:ring-white/5 transition-all duration-300 backdrop-blur-md resize-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 focus:bg-white/[0.06] focus:ring-4 focus:ring-white/5 transition-all duration-300 backdrop-blur-md text-sm sm:text-base"
                      />
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.button 
                variants={formChildVariants}
                whileHover={{ scale: 1.01, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-6 w-full py-4 rounded-2xl border border-white/20 text-white text-sm sm:text-base font-medium flex items-center justify-center gap-3 bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:border-white/40 transition-all shadow-xl group/btn"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 text-white/60 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="logo-panel"
            initial={{ opacity: 0, rotateY: 20, scale: 0.9 }}
            animate={{ opacity: 1, rotateY: 0, scale: 1 }}
            exit={{ opacity: 0, rotateY: -20, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
            className="w-full max-w-[420px] aspect-square flex items-center justify-center rounded-3xl border border-white/5 bg-transparent relative overflow-hidden"
          >
            <motion.div 
              className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/logo1.png"
                alt="IETE Logo"
                fill
                className="object-contain" 
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}