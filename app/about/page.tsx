import { HeroSection } from "@/components/hero-section"
import { ParentBodySection } from "@/components/parent-body-section"
import { ObjectivesSection } from "@/components/objectives-section"
import { ProfessorsSection } from "@/components/professors-section"
import { PanIndiaSection } from "@/components/pan-india-section"
import { AnimatedBackground } from "@/components/animated-background"
import  Footer  from "../components/Footer"
import Navbar from "../components/Navbar"

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Navbar />
        </div>
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <ParentBodySection />
        <ObjectivesSection />
        <ProfessorsSection />
        <PanIndiaSection />
        <Footer />
      </div>
    </main>
  )
}
