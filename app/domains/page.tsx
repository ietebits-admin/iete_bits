"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { Orbitron } from "next/font/google";
import Navbar from "../components/Navbar";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const domains = [
  {
    title: "WEB DEVELOPMENT",
    scramble: "HYPER-SCALABLE V8 OPTIMIZATION",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M7 8l-4 4 4 4M17 8l4 4-4 4M14 4l-4 16" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Orchestrating distributed micro-frontends with low-latency edge computing. Implementing WebAssembly-driven bottlenecks reduction and isomorphic rendering patterns."
  },
  {
    title: "VIDEO EDITING",
    scramble: "TEMPORAL NON-LINEAR WARPING",
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "Advanced chroma-subsampling and LUT-based volumetric lighting. Utilizing CUDA-accelerated denoising pipelines and multi-threaded rasterization."
  },
  {
    title: "IOT & ROBOTICS",
    scramble: "KINEMATIC SINGULARITY ANALYSIS",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    description: "Integrating Real-Time Operating Systems (RTOS) with PID-controlled feedback loops. Engineering sensor fusion matrices for IMU telemetry and MQTT mesh networking."
  },
  {
    title: "COMPETITIVE PROGRAMMING",
    scramble: "AMORTIZED COMPLEXITY HEURISTICS",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    description: "Decoding NP-Hard paradigms through dynamic programming and segment tree optimization. Engineering bitwise manipulation strategies to achieve O(1) space-time convergence."
  },
  {
    title: "AI/ML",
    scramble: "LATENT SPACE BACKPROPAGATION",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1600",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "Implementing Transformer-based attention mechanisms and generative adversarial manifolds. Leveraging stochastic gradient descent to navigate high-dimensional distributions."
  },
];

const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState(text);
  const chars = "!@#$%^&*()_+<>?:{}|";

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span className="scramble-font">{display}</span>;
};

const Particles = () => {
  const [particleList, setParticleList] = useState<any[]>([]);

  useEffect(() => {
    const generated = [...Array(60)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `-${Math.random() * 20}s`,
      opacity: Math.random() * 0.4 + 0.2,
    }));
    setParticleList(generated);
  }, []);

  return (
    

    <div className="particles-container">
      {particleList.map((p) => (
        <div 
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

const CarouselComponent = () => {
  const [items, setItems] = useState(domains);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const first = newArr.shift();
        if (first) newArr.push(first);
        return newArr;
      });
      setIsAnimating(true);
    }, 10);
  }, []);

  const handlePrev = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setItems((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
      setIsAnimating(true);
    }, 10);
  }, []);

  useEffect(() => {
    setIsAnimating(true);
    const autoSlide = setInterval(handleNext, 9000);
    return () => clearInterval(autoSlide);
  }, [handleNext]);

  return (
    <div className="carousel">
      <div className="list">
        {items.map((d, i) => (
          <div className="item" key={d.title}>
            <img src={d.image} alt={d.title} className="box-bg-img" />
            <div className="box-overlay" />

            <div className="big-icon-container">{d.icon}</div>
            
            <div className="content">
              <div className="title-scramble">
                <ScrambleText key={d.title} text={d.scramble} />
              </div>
              <div className="name">{d.title}</div>
              <div className="description">{d.description}</div>
            </div>

            <div className="box-label">
                <h3>{d.title}</h3>
                <div className="label-line" />
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button className="prev" onClick={handlePrev}>PREV</button>
        <button className="next" onClick={handleNext}>NEXT</button>
      </div>
      <div 
        className="timeRunning" 
        style={{ animation: isAnimating ? "runningTime 9s linear forwards" : "none" }}
      />
    </div>
  );
};

export default function Page() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div style={{ background: '#000', height: '100vh' }} />;

  return (
    <main className={orbitron.className}>
        <div className="fixed top-0 left-0 w-full z-[100]">
        <Navbar />
      </div>
      <style>{`
        body { margin: 0; background: #000; color: white; overflow-x: hidden; }
        
        .bg-grid {
          position: fixed; inset: 0;
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: clamp(30px, 5vw, 60px) clamp(30px, 5vw, 60px);
          z-index: -2;
          pointer-events: none;
        }

        .particles-container { position: fixed; inset: 0; z-index: -1; pointer-events: none; }
        .particle {
          position: absolute; background: #fff; border-radius: 50%;
          animation: floatUp linear infinite;
        }
        @keyframes floatUp {
          from { transform: translateY(110vh) translateX(0); opacity: 0; }
          20% { opacity: 1; }
          to { transform: translateY(-10vh) translateX(20px); opacity: 0; }
        }

        .carousel { width: 100vw; height: 100vh; position: relative; overflow: hidden; }

        .list .item {
          position: absolute; 
          width: clamp(160px, 20vw, 220px); 
          height: clamp(240px, 30vw, 320px);
          top: 75%; 
          left: 80%; 
          transform: translateY(-50%);
          border-radius: 12px; overflow: hidden;
          transition: 0.8s cubic-bezier(0.6, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #0a0a0a;
          z-index: 5;
        }

        /* Responsive Positions */
        .list .item:nth-child(1), .list .item:nth-child(2) {
          width: 100%; height: 100%; top: 0; left: 0;
          transform: none; border: none; border-radius: 0;
          background: transparent; z-index: 1;
        }

        .list .item:nth-child(3) { left: 50%; }
        .list .item:nth-child(4) { left: calc(50% + clamp(180px, 22vw, 240px)); }
        .list .item:nth-child(5) { left: calc(50% + clamp(360px, 44vw, 480px)); }

        .box-bg-img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; opacity: 0; transition: 0.6s; 
          filter: grayscale(1) brightness(0.4);
        }
        .item:nth-child(n+3) .box-bg-img { opacity: 1; }
        .item:nth-child(2) .box-bg-img {
            opacity: 0.3; filter: grayscale(0.2) blur(2px);
            animation: zoomIn 10s infinite alternate;
        }
        @keyframes zoomIn { from { transform: scale(1); } to { transform: scale(1.1); } }

        .content {
          position: absolute; 
          top: 45%; left: 5%;
          transform: translateY(-50%);
          width: 90%;
          max-width: 800px;
          z-index: 10;
          display: none;
        }
        .item:nth-child(2) .content { display: block; }

        /* Typography Responsiveness */
        .title-scramble { 
          letter-spacing: clamp(2px, 1vw, 6px); 
          font-size: clamp(10px, 1.5vw, 13px); 
          margin-bottom: 15px; opacity: 0.8;
        }
        .name { 
          font-size: clamp(32px, 8vw, 90px); 
          font-weight: 900; line-height: 0.9; 
          text-transform: uppercase;
          animation: titleReveal 0.8s ease-out forwards;
        }
        .description { 
          margin-top: clamp(20px, 4vh, 40px);
          font-size: clamp(13px, 1.2vw, 16px); 
          color: rgba(255, 255, 255, 0.7); 
          line-height: 1.6; max-width: 550px;
          border-left: 2px solid #fff; padding-left: clamp(15px, 2vw, 25px);
          animation: descReveal 0.8s ease-out 0.3s forwards; opacity: 0;
        }

        @keyframes titleReveal { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes descReveal { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }

        .big-icon-container {
          position: absolute; top: 50%; right: -5%; transform: translateY(-50%);
          width: 50vw; height: 50vw; color: rgba(255, 255, 255, 0.05); 
          z-index: 0; display: none;
        }
        .item:nth-child(2) .big-icon-container { display: block; }

        .arrows { 
          position: absolute; bottom: 8%; left: 5%; 
          display: flex; gap: 10px; z-index: 100; 
        }
        .arrows button {
          padding: clamp(8px, 1.5vw, 12px) clamp(15px, 2.5vw, 25px);
          background: rgba(255,255,255,0.1); color: #fff; border: 1px solid rgba(255,255,255,0.3);
          cursor: pointer; font-size: clamp(10px, 1vw, 12px); font-weight: 700;
          backdrop-filter: blur(5px); transition: 0.3s;
        }
        .arrows button:hover { background: #fff; color: #000; box-shadow: 0 0 20px rgba(255,255,255,0.4); }

        .box-label { position: absolute; bottom: 20px; left: 15px; opacity: 0; }
        .item:nth-child(n+3) .box-label { opacity: 1; }
        .box-label h3 { font-size: clamp(8px, 1vw, 10px); margin: 0; letter-spacing: 1px; }

        .timeRunning { position: absolute; top: 0; left: 0; height: 3px; background: #fff; z-index: 1000; }

        /* Mobile Adjustments */
        @media screen and (max-width: 768px) {
          .list .item:nth-child(3) { left: 40%; }
          .list .item:nth-child(4) { left: calc(40% + 170px); }
          .list .item:nth-child(5) { left: calc(40% + 340px); }
          .content { top: 40%; }
          .big-icon-container { width: 80vw; height: 80vw; right: -20%; opacity: 0.3; }
          .description { max-width: 90%; }
        }

        @media screen and (max-width: 480px) {
          .list .item:nth-child(n+3) { display: none; } /* Hide thumbnails on very small screens for better UX */
          .content { left: 5%; width: 90%; }
          .name { font-size: 40px; }
          .arrows { bottom: 5%; width: 90%; justify-content: center; left: 5%; }
          .arrows button { flex: 1; }
        }
      `}</style>

      <div className="bg-grid" />
      <Particles />
      <CarouselComponent />
    </main>
  );
}