"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import { Orbitron } from "next/font/google";
import EventsSection from "./page-components/Events";
import Contact from "./page-components/Contact";
import Footer from "./components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

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

      <section className="relative w-full h-screen flex flex-col justify-end pb-[15vh] md:pb-[20vh] overflow-hidden shrink-0">
        <div className="absolute inset-0 z-0">
          <StarField />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
        </div>

        <div className="relative z-40 text-center w-full px-4 sm:px-6">
          <h1
            className="uppercase tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.35em] 
                       text-transparent text-[12vw] sm:text-[10vw] md:text-[8vw] 
                       leading-none font-black"
            style={{ WebkitTextStroke: "1px white" }}
          >
            {text1}
          </h1>

          <h2
            className="mt-4 sm:mt-6 uppercase tracking-[0.2em] sm:tracking-[0.4em] md:tracking-[0.5em] 
                       text-transparent text-[6vw] sm:text-[5vw] md:text-[4vw] 
                       font-bold flex justify-center items-center"
            style={{ WebkitTextStroke: "0.5px rgba(255,255,255,0.8)" }}
          >
            {text2}
            <span className="ml-1 sm:ml-2 animate-pulse w-[2px] sm:w-[3px] h-[0.7em] bg-white inline-block" />
          </h2>
        </div>
      </section>

      <div className="relative z-40 bg-black flex flex-col w-full">
        <div className="w-full">
          <EventsSection />
        </div>

        <div className="w-full relative py-12 md:py-0">
          <Contact />
        </div>

        <div className="w-full relative z-50">
          <Footer />
        </div>
      </div>
      
    </main>
  );
}