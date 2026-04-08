"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import SocialSidebar from "./components/SocialSidebar";
import { Orbitron } from "next/font/google";
import EventsSection from "./page-components/Events";
import ContactSection from "./page-components/Contact";
import Contact from "./page-components/Contact";
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
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-1000px);
          }
        }
        .animate-slow-scroll {
          animation: scroll 120s linear infinite;
        }
        .animate-mid-scroll {
          animation: scroll 70s linear infinite;
        }
        .animate-fast-scroll {
          animation: scroll 40s linear infinite;
        }
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
    <main className={`bg-black text-white ${orbitron.className}`}>

      {/* NAVBAR */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <SocialSidebar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full h-screen overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0 z-0">
          <StarField />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/40 z-10" />
        </div>

        {/* TEXT */}
        <div className="absolute bottom-[15vh] left-1/2 -translate-x-1/2 z-40 text-center w-full px-6">
          <h1
            className="uppercase tracking-[0.35em] text-transparent text-[8vw] leading-[0.9] font-black"
            style={{
              WebkitTextStroke: "1.5px white",
            }}
          >
            {text1}
          </h1>

          <h2
            className="mt-6 uppercase tracking-[0.5em] text-transparent text-[5vw] font-bold flex justify-center"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.8)",
            }}
          >
            {text2}
            <span className="ml-1 animate-pulse w-[3px] h-[0.8em] bg-white" />
          </h2>
        </div>
      </section>

      {/* ================= EVENTS SECTION ================= */}
      <EventsSection />
      <Contact />

      {/* ================= CONTACT (ADD NEXT) ================= */}
      {/* <ContactSection /> */}

    </main>
  );
}