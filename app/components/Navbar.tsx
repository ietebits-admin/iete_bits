

"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Home, Info, Mail, Users, Calendar, Layers, Menu, X, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { icon: Home, label: "Home", route: "/" },
    { icon: Info, label: "About", route: "/about" },
    { icon: Users, label: "Members", route: "/members" },
    { icon: GraduationCap, label: "Alumni", route: "/alumni" },
    { icon: Calendar, label: "Events", route: "/alumni" },
    { icon: Layers, label: "Domains", route: "/domains" },
    { icon: Mail, label: "Contact", route: "/contact" },
  ];

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50
        w-[96%] sm:w-[94%] max-w-7xl
        transition-all duration-500
        opacity-100 translate-y-0
      `}
    >
      <div className="flex items-stretch gap-2 sm:gap-4">
        <div
          className="
            flex-[3] flex items-center justify-between
            pl-2 pr-3 sm:px-5 md:px-6
            py-2 sm:py-2.5
            rounded-xl sm:rounded-2xl
            border border-white/20
            bg-white/10 backdrop-blur-2xl
            shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          "
        >
          <img
            src="/logo1.png"
            alt="Logo"
            className="
              w-9 h-9 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
              rounded-lg sm:rounded-xl
              object-contain
              border border-white/20
              p-1
              bg-white/10
            "
          />

          <div className="hidden md:flex items-center gap-1 lg:gap-3">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={index} href={item.route}>
                  <button
                    className="
                      flex items-center gap-2
                      px-2 lg:px-4
                      py-2
                      rounded-xl
                      text-white/80
                      transition-all duration-300
                      hover:text-white hover:bg-white/10
                      hover:scale-105
                    "
                  >
                    <Icon className="w-4 h-4 lg:w-5 h-5" />
                    <span className="text-xs lg:text-sm font-medium tracking-wide whitespace-nowrap">
                      {item.label}
                    </span>
                  </button>
                </Link>
              );
            })}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/20 bg-white/10 text-white"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div 
          className="
            flex-[1.2] sm:flex-none flex items-center justify-center gap-2 sm:gap-4
            px-3 sm:px-8
            rounded-xl sm:rounded-2xl
            border border-white/20
            bg-white/15 backdrop-blur-3xl
            shadow-[0_8px_30px_rgba(0,0,0,0.4)]
            shrink-0
          "
        >
          <img
            src="/tu_logo.png"
            alt="TU Logo"
            className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 object-contain shrink-0 drop-shadow-lg"
          />
          <span className="text-white font-bold text-[10px] xs:text-xs sm:text-lg md:text-xl tracking-tighter whitespace-nowrap">
            Tech Udbhav
          </span>
        </div>
      </div>

      <div
        className={`
          md:hidden mt-2
          rounded-xl border border-white/20
          bg-white/10 backdrop-blur-2xl
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="flex flex-col divide-y divide-white/10">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.route} onClick={() => setMenuOpen(false)}>
                <div
                  className="
                    flex items-center gap-3
                    px-5 py-4
                    text-white/90
                    transition-all duration-200
                    hover:bg-white/20
                  "
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium tracking-wide">
                    {item.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;