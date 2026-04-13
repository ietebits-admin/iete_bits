import { HeroSection } from "@/components/hero-section"
import { MembersGridSection } from "@/components/members-grid-section"
import { NextGenSection } from "@/components/nextgen-section"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"
import ChromaGrid from "../../components/ui/ChromaGrid"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <MembersGridSection />
        <NextGenSection />
        <Footer />
      </div>
    </main>
  )
}
