'use client';

import { motion, Variants } from 'framer-motion';
import { Mail, Users, ArrowLeft, Copy } from 'lucide-react';

type GeneralCard = {
  type: 'general';
  icon: React.ReactNode;
  title: string;
  email: string;
  phone: string;
};

type InductionCard = {
  type: 'induction';
  icon: React.ReactNode;
  title: string;
  people: {
    name: string;
    phone: string;
  }[];
};

type Card = GeneralCard | InductionCard;

export default function ContactDetails({ onBack }: { onBack: () => void }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
    exit: { opacity: 0, y: 20 },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', damping: 18, stiffness: 120 },
    },
  };

  const cards: Card[] = [
    {
      type: 'general',
      icon: <Mail className="w-5 h-5 text-white/70" />,
      title: 'General Queries',
      email: 'contact@ietebits.com',
      phone: '+91 9142040066',
    },
    {
      type: 'induction',
      icon: <Users className="w-5 h-5 text-white/70" />,
      title: 'Inductions & Support',
      people: [
        { name: 'Aditya Raj', phone: '+91 9142040066' },
        { name: 'Amit Kumar Gupta', phone: '+91 6200983787' },
      ],
    },
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10"
    >
      <div className="relative">
        <div className="absolute -top-32 -right-20 w-40 sm:w-80 h-40 sm:h-80 bg-blue-500/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-32 -left-20 w-40 sm:w-80 h-40 sm:h-80 bg-white/10 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

        <motion.div variants={cardVariants} className="mb-8 md:mb-14 text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
            Get in <span className="text-white/40 italic font-light">Touch</span>
          </h2>
          <p className="text-white/50 text-xs sm:text-base mt-3 max-w-md mx-auto md:mx-0 leading-relaxed">
            Let’s connect — whether it’s collaboration, queries, or just a hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 items-stretch">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="relative group isolate h-full"
            >
              <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-white/10 to-transparent" />
              <div className="relative z-10 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 p-5 sm:p-8 overflow-hidden h-full flex flex-col">
                
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 ease-in-out" />
                </div>

                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-4 sm:mb-6">
                  {card.icon}
                </div>

                <p className="text-white/30 text-[10px] sm:text-xs tracking-[0.25em] uppercase mb-4 sm:mb-5">
                  {card.title}
                </p>

                {card.type === 'general' && (
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-white text-sm sm:text-lg break-all font-medium">
                          {card.email}
                        </p>
                        <button
                          onClick={() => copyToClipboard(card.email)}
                          className="p-2 hover:bg-white/5 rounded-lg transition shrink-0"
                        >
                          <Copy className="w-4 h-4 text-white/40 hover:text-white" />
                        </button>
                      </div>
                      <p className="text-white/60 mt-1 sm:mt-2 text-xs sm:text-sm">
                        {card.phone}
                      </p>
                    </div>
                  </div>
                )}

                {card.type === 'induction' && (
                  <div className="space-y-4 sm:space-y-5 flex-1">
                    {card.people.map((p, i) => (
                      <div key={i} className="group/item flex items-center justify-between gap-2">
                        <div>
                          <p className="text-white text-sm sm:text-base font-medium group-hover/item:translate-x-1 transition duration-300">
                            {p.name}
                          </p>
                          <p className="text-white/50 text-[11px] sm:text-sm">{p.phone}</p>
                        </div>
                        <button
                          onClick={() => copyToClipboard(p.phone)}
                          className="p-2 hover:bg-white/5 rounded-lg transition shrink-0"
                        >
                          <Copy className="w-4 h-4 text-white/40 hover:text-white" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={cardVariants} className="mt-10 md:mt-14 flex justify-center md:justify-start">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/40 hover:text-white transition group text-[10px] sm:text-sm tracking-widest uppercase py-2"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform duration-300" />
            <span>Go Back</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}