import { HeroSection } from "@/components/alumni-hero-section"
import { NextGen21Section } from "@/components/k21"
import { NextGen20Section } from "@/components/k20"
import { NextGen19Section } from "@/components/k19"
import { NextGen18Section } from "@/components/k18"
import { NextGen17Section } from "@/components/k17"
import { NextGen16Section } from "@/components/k16"
import { NextGen15Section } from "@/components/k15" 
import { NextGen14Section } from "@/components/k14" 
import { NextGen13Section } from "@/components/k13"
import { NextGen12Section } from "@/components/k12"
import { NextGen11Section } from "@/components/k11"
import { NextGen10Section } from "@/components/k10"
import { NextGen9Section } from "@/components/k9"
import { NextGen8Section } from "@/components/k8"
import { NextGen7Section } from "@/components/k7"
// import { AnimatedBackground } from "@/components/animated-background"
// import { Footer } from "@/components/footer"
// import ChromaGrid from "../../components/ui/ChromaGrid"
// import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"
// import ChromaGrid from "../../components/ui/ChromaGrid"
import Navbar from "../components/Navbar"

import dynamic from "next/dynamic";


// const AnimatedBackground = dynamic(
//   () => import("@/components/animated-background").then(mod => mod.AnimatedBackground),
//   { ssr: false }
// );

// const ChromaGrid = dynamic(
//   () => import("../../components/ui/ChromaGrid"),
//   { ssr: false }
// );

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* <AnimatedBackground /> */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <NextGen21Section />
        <NextGen20Section />
        <NextGen19Section />
        <NextGen18Section />
        <NextGen17Section />
        <NextGen16Section />
        <NextGen15Section />
        <NextGen14Section />
        <NextGen13Section />
        <NextGen12Section />
        <NextGen11Section />
        <NextGen10Section />
        <NextGen9Section />
        <NextGen8Section />
        <NextGen7Section />
        <Footer />
        {/* <Footer /> */}
      </div>
    </main>
  )
}
