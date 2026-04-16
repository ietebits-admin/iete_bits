"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const text1 = "OUR";
const text2 = "EVENTS";

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
};
export default function EventHero() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden px-6 md:px-16">

  
{/* <video
  autoPlay
  loop
  muted
  playsInline
  className="fixed inset-0 w-full h-full object-cover -z-10"
>
  <source src="/events/animation6.mp4" type="video/mp4" />
</video> */}

{/* 🔥 OVERLAYS (ALSO FIXED) */}
<div className="fixed inset-0 bg-black/10 -z-10" />
<div className="fixed inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 -z-10" />
<div className="fixed inset-0 backdrop-blur-[1px] -z-10" />

      {/* 🔥 MAIN CONTAINER */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl mx-auto">

        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >

          {/* TAG */}
          <div className="inline-block mb-6 px-5 py-1.5 border border-white/20 rounded-full text-sm text-white/80 backdrop-blur-md">
            ✨ Tech Udbhav: Our Annual Techno-Management Fest
          </div>

          {/* HEADING */}
          <h1 className="text-5xl md:text-7xl font-extrabold orbitron leading-tight mb-6 tracking-wide">

  {/* OUR */}
  <div className="flex">
    {text1.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i}
        initial="hidden"
        animate="visible"
        variants={letterVariant}
        className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(168,85,247,0.8)]"
      >
        {char}
      </motion.span>
    ))}
  </div>

  {/* EVENTS */}
  <div className="flex mt-2">
    {text2.split("").map((char, i) => (
      <motion.span
        key={i}
        custom={i + text1.length}
        initial="hidden"
        animate="visible"
        variants={letterVariant}
        className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
      >
        {char}
      </motion.span>
    ))}
  </div>

</h1>

          {/* SUBTEXT */}
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            Explore a dynamic lineup of events crafted to ignite innovation,
            challenge creativity, and elevate your technical excellence.
          </p>

          {/* BUTTON */}
      <button
  onClick={() => {
    const section = document.getElementById("year-2k25");
    if (!section) return;

    const yOffset = -80;
    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }}
  className="px-8 py-3 rounded-xl 
  bg-white/10 backdrop-blur-md border border-white/20
  hover:scale-105 transition duration-300
  shadow-[0_0_40px_rgba(99,102,241,0.6)]"
>
  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 
  bg-clip-text text-transparent font-semibold text-lg tracking-wide
  drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]">
    Explore Events
  </span>
</button>

        </motion.div>

        {/* 🔥 RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center md:justify-end"
        >

          <motion.img
            src="/events/image.png" 
            alt="event visual"
            className="w-[450px] md:w-[650px] drop-shadow-[0_0_40px_rgba(99,102,241,0.6)]"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

        </motion.div>

      </div>
    </section>
  );
}