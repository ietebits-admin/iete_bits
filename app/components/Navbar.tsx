"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Home, Info, Mail, Users, Calendar, Layers, Menu, X } from "lucide-react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef<any>(null);

  const items = [
    { icon: Home, label: "Home", route: "/" },
    { icon: Info, label: "About", route: "/about" },
    { icon: Users, label: "Members", route: "/members" },
    { icon: Calendar, label: "Events", route: "/events" },
    { icon: Layers, label: "Domains", route: "/domains" },
    { icon: Mail, label: "Contact", route: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);

      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        if (!isHovered && !menuOpen) setVisible(false);
      }, 900);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHovered, menuOpen]);

  const showNavbar = visible || isHovered || menuOpen;

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        if (!menuOpen) setVisible(false);
      }}
      className={`
        fixed top-3 sm:top-4 left-1/2 -translate-x-1/2 z-50
        w-[96%] sm:w-[94%] md:w-[92%] max-w-6xl
        transition-all duration-500
        ${showNavbar
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-6 pointer-events-none"}
      `}
    >
      <div
        className="
          relative flex items-center justify-between
          px-3 sm:px-5 md:px-6
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
            p-1 sm:p-1.5
            bg-white/10
          "
        />

        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link key={index} href={item.route}>
                <button
                  className="
                    flex items-center gap-2
                    px-3 lg:px-4
                    py-2
                    rounded-xl
                    border border-white/10 text-white
                    transition-all duration-300
                    hover:border-white/40 hover:bg-white/10
                    hover:scale-105
                  "
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm tracking-wide whitespace-nowrap">
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
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
                    px-4 py-3
                    text-white
                    transition-all duration-200
                    hover:bg-white/10
                  "
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm tracking-wide">
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