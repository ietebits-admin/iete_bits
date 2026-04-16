"use client";
import { HeroSection } from "@/components/member-hero-section"
import { Bodsection } from "@/components/bod-section"
import { MembersGridSection } from "@/components/members-grid-section"
import { NextGenSection } from "@/components/nextgen-section"
// import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"
// import ChromaGrid from "../../components/ui/ChromaGrid"
import Navbar from "../components/Navbar"

import dynamic from "next/dynamic";


const AnimatedBackground = dynamic(
  () => import("@/components/animated-background").then(mod => mod.AnimatedBackground),
  { ssr: false }
);

const ChromaGrid = dynamic(
  () => import("../../components/ui/ChromaGrid"),
  { ssr: false }
);

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <Bodsection />
        <MembersGridSection />
        <NextGenSection />
        <Footer />
      </div>
    </main>
  )
}
