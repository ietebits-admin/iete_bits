"use client";

import { useState } from "react";

type Props = {
  title: string;
  image: string;
   details: string;
  participation: string;
  outcome: string;
};

export default function EventCard({
  title,
  image,
 details,
  participation,
  outcome,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-[90%] md:w-[390px] group perspective">

      {/* 🔥 BLUE GLOW */}
      <div className="absolute -inset-[3px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 
      bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.7),transparent_70%)] blur-xl" />

      {/* 🔥 BORDER */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-blue-400/60 transition duration-300" />

      {/* 🔥 CARD */}
      <div
        className="relative w-full h-[380px] md:h-[450px] rounded-2xl bg-black overflow-hidden
        transition-all duration-300 transform-gpu
        group-hover:-translate-y-4 group-hover:scale-[1.05]
        group-hover:shadow-[0_0_50px_rgba(59,130,246,0.7)]
        group-hover:rotateX-6 group-hover:rotateY-6"
      >

        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          className="className=w-full h-full object-cover bg-black"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/30" />

        {/* TEXT */}
<div className="absolute bottom-0 left-0 w-full z-20 
group-hover:-translate-y-1 transition duration-300">

  <div className="w-full px-4 py-4 
  bg-gradient-to-t from-black/70 via-black/30 to-transparent 
  backdrop-blur-md border-t border-white/20 rounded-b-2xl">

    <h2 className="text-sm font-semibold text-white tracking-wide text-center">
      {title}
    </h2>

  </div>

</div>

        {/* 3 DOTS (HIDE ON HOVER) */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white z-30 transition duration-300 group-hover:opacity-100"
        >
          ⋮
        </button>

        {/* EXPAND PANEL */}
        <div
          className="absolute inset-0 z-30 transition-all duration-500"
          style={{
            clipPath: open
              ? "circle(75% at 50% 50%)"
              : "circle(0% at 100% 0%)",
          }}
        >
          <div className="absolute inset-0 backdrop-blur-xl bg-black/60" />

         <div className="relative z-40 flex flex-col justify-center items-center h-full text-white px-6 text-center">

  <button
    onClick={() => setOpen(false)}
    className="absolute top-4 right-4 text-white text-xl"
  >
    ✕
  </button>

  <h2 className="text-xl font-semibold mb-3"></h2>

  {/* DESCRIPTION */}
  <p className="text-sm text-gray-300 mb-4 leading-relaxed">
    {details}
  </p>

  {/* PARTICIPATION */}
  <div className="w-full mb-3 p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
    <p className="text-xs text-gray-400 uppercase"></p>
    <p className="text-xl bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">{participation}</p>
  </div>

  {/* OUTCOME */}
  <div className="w-full mb-4 p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10">
    <p className="text-xs text-gray-400 uppercase"></p>
    <p className="text-sm">{outcome}</p>
  </div>

</div>
        </div>

      </div>
    </div>
  );
}