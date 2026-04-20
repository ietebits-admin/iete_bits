"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import { Orbitron } from "next/font/google";
import EventsSection from "./page-components/Events";
// import Contact from "./page-components/Contact";
import Footer from "./components/Footer";


const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const IETEButton = () => {
  return (
    <div className="relative group">
      {/* Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition duration-500 animate-gradient bg-[length:200%_auto]" />

      {/* Button */}
      <div className="relative px-4 py-1.5 sm:px-5 sm:py-2 bg-black/80 backdrop-blur-xl rounded-lg border border-blue-400/40 shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-500">

        <div className="flex items-center gap-2">

          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-blue-400 text-xs sm:text-sm"
          >
            ✦
          </motion.span>

          <p className="text-xs sm:text-sm md:text-base font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-[length:200%_auto] animate-gradient">
            IETE Students' Forum
          </p>

          <motion.span
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="text-cyan-300 text-xs sm:text-sm"
          >
            ✦
          </motion.span>

        </div>
      </div>
    </div>
  );
};
const StarField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-black">
      <div
        className="star-layer animate-slow-scroll"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 20px 30px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 150px 50px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)), radial-gradient(1px 1px at 100px 250px, #77b5fe, rgba(0,0,0,0))",
          backgroundSize: "250px 250px",
          filter: "drop-shadow(0 0 2px rgba(255,255,255,0.8))",
        }}
      />
      <div
        className="star-layer animate-mid-scroll opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(2px 2px at 100px 150px, #fff, rgba(0,0,0,0)), radial-gradient(2.5px 2.5px at 200px 300px, #fff, rgba(0,0,0,0)), radial-gradient(1.5px 1.5px at 50px 200px, #89cff0, rgba(0,0,0,0))",
          backgroundSize: "350px 350px",
          filter: "drop-shadow(0 0 5px rgba(255,255,255,0.6))",
        }}
      />
      <div
        className="star-layer animate-fast-scroll opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(3px 3px at 50px 50px, #fff, rgba(0,0,0,0)), radial-gradient(2px 2px at 120px 120px, #fff, rgba(0,0,0,0))",
          backgroundSize: "200px 200px",
          filter: "drop-shadow(0 0 8px rgba(255,255,255,0.9))",
        }}
      />
      <style jsx>{`
        .star-layer {
          position: absolute;
          inset: -500px;
          background-repeat: repeat;
        }
        @keyframes scroll {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }
        .animate-slow-scroll { animation: scroll 120s linear infinite; }
        .animate-mid-scroll { animation: scroll 70s linear infinite; }
        .animate-fast-scroll { animation: scroll 40s linear infinite; }
      `}</style>
    </div>
  );
};

export default function Home() {
  const line1 = "WELCOMES";
  const line2 = "BATCH 2K25";

  const [isClient, setIsClient] = useState(false);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [step, setStep] = useState(0);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const totalLength = line1.length + line2.length;
    if (step >= totalLength) return;

    const timeout = setTimeout(() => {
      if (step < line1.length) {
        setText1(line1.slice(0, step + 1));
      } else {
        setText2(line2.slice(0, step - line1.length + 1));
      }
      setStep((s) => s + 1);
    }, 85);

    return () => clearTimeout(timeout);
  }, [step, isClient]);

  if (!isClient) return null;

  return (
    <main className={`bg-black text-white min-h-screen flex flex-col ${orbitron.className}`}>
      
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>

      <div className="hidden lg:block">
        <SocialSidebar />
      </div>

      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden shrink-0">
     
        <div className="absolute inset-0 z-0">
          <StarField />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
        </div>
<div className="container mx-auto px-6 relative z-40 flex flex-col items-center justify-center pt-24 sm:pt-28 md:pt-32">
  {/* ✅ BUTTON (in normal flow) */}
  <div className="mb-4 sm:mb-6 md:mb-8">
    <IETEButton />
  </div>

  {/* ✅ ROBOT */}
  <motion.div
    initial={{ opacity: 0, x: -30 }}
    animate={{ opacity: 1, x: -50 }} 
    transition={{ duration: 0.8 }}
    className="w-full flex justify-center lg:pr-20"
  >
            <motion.img
              src="/robo1.png" 
              alt="robot visual"
              className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[420px] drop-shadow-[0_0_40px_rgba(99,102,241,0.5)]"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <div className="w-full flex flex-col items-center text-center mt-4 md:mt-0">
            <h1
              className="uppercase tracking-[0.05em] sm:tracking-[0.15em] md:tracking-[0.25em] 
                         text-transparent text-[11vw] sm:text-[9vw] lg:text-[7.5vw] 
                         leading-none font-black"
              style={{ WebkitTextStroke: "1px white" }}
            >
              {text1}
            </h1>

            <h2
              className="mt-2 sm:mt-4 uppercase tracking-[0.1em] sm:tracking-[0.25em] 
                         text-transparent text-[6vw] sm:text-[5vw] lg:text-[3.8vw] 
                         font-bold flex items-center justify-center whitespace-nowrap"
              style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.8)" }}
            >
              {text2}
              <span className="ml-1 sm:ml-2 animate-pulse w-[2px] sm:w-[3px] h-[0.7em] bg-white inline-block" />
            </h2>
          </div>
        </div>
      </section>

      <div className="relative z-40 bg-black flex flex-col w-full">
        <div className="w-full">
          <EventsSection />
        </div>
{/* 
        <div className="w-full relative py-12 md:py-0">
          <Contact />
        </div> */}

        <div className="w-full relative z-50">
          <Footer />
        </div>
      </div>
      
    </main>
  );
}