"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"
import ChromaGrid from "./ui/ChromaGrid"

const k15Members = [
  {
    image: "/img5.jpeg",
    title: "Subham Bose",
    subtitle: "IIM Nagpur",
    linkedin:"https://www.linkedin.com/in/subham-bose/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/img6.jpeg",
    title: "Kundan Kumar",
    subtitle: "Wipro",
    linkedin: "linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/img7.jpg",
    title: "Rajeev Ranjan Raj",
    subtitle: "Tata Steel",
    linkedin: "https://www.linkedin.com/in/rajeev-ranjan-raj-14a414121",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/img8.jpg",
    title: "Naveen kumar",
    subtitle: "Cognizant",
    linkedin: "https://www.linkedin.com/in/naveenkumar227",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/img9.jpg",
    title: "Abhishek Tiwari",
    subtitle: "Wipro",
    linkedin: "https://in.linkedin.com/in/abhishek-tiwari-b0b3b83a",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/img10.jpg",
    title: "Srijan Bharadwaj",
    subtitle: "TCS",
    linkedin: "https://www.linkedin.com/in/srijan-bharadwaj-497366211/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Saket Kumar",
    subtitle: "Salesforce",
    linkedin: "linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Jyoti Singh",
    subtitle: "",
    linkedin: "linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Anupriya Sheetu",
    subtitle: "Design Team",
    linkedin: "https://www.linkedin.com/in/anupriya-sheetu-11668015a/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Kaushik Nilay",
    subtitle: "",
    linkedin: "linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Sushmit Anshu",
    subtitle: "",
    linkedin: "linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Badal Sahu",
    subtitle: "",
    linkedin: "linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Vivek Sahu",
    subtitle: "",
    linkedin: "linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "",
    title: "Kumar Vishist",
    subtitle: "",
    linkedin: "https://www.linkedin.com/in/kumar-vishist-2005bb124/",
    borderColor: "#3B82F6",
    gradient: "",
  },
]

export function NextGen15Section() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)

  const finalText = "Alumni 2K15"

  const chars =
    "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  //
  // 🔹 SCRAMBLE EFFECT
  //
  useEffect(() => {
    if (isInView && !hasAnimated) {
      let iteration = 0

      const interval = setInterval(() => {
        setScrambledText(
          finalText
            .split("")
            .map((char, index) => {
              if (index < iteration) return finalText[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
        )

        if (iteration >= finalText.length) {
          clearInterval(interval)
          setHasAnimated(true)
        }

        iteration += 1
      }, 55)

      return () => clearInterval(interval)
    }
  }, [isInView, hasAnimated])

  //
  // 🔹 UI
  //
  return (
    <section ref={ref} className="relative py-32 px-4">
      <div className="max-w-7xl mx-auto">

        {/* 🔥 HERO STYLE BADGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateX: -20 }}
          animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
          className="inline-block mb-8 w-full text-center"
        >
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />

            <div className="relative px-4 py-1.5 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-2xl rounded-lg border border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 hover:scale-105 hover:-translate-y-1">
              <div className="flex items-center gap-1.5">

                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-primary text-sm"
                >
                  ✦
                </motion.span>

                <p className="text-sm md:text-base font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                  {scrambledText || finalText}
                </p>

                <motion.span
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="text-accent text-sm"
                >
                  ✦
                </motion.span>

              </div>
            </div>
          </div>
        </motion.div>

        {/* 🔹 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading">
            IETE 2K15
          </h2>
        </motion.div>

        {/* 🔹 GRID */}
        <div className="relative">
          <ChromaGrid items={k15Members} />
        </div>

      </div>
    </section>
  )
}