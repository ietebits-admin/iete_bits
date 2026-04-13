"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"
import ChromaGrid from "./ui/ChromaGrid"

const nextGenMembers = [
  {
    image: "/pr.jpg",
    title: "Member 1",
    subtitle: "Core Team",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 2",
    subtitle: "Tech Team",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 3",
    subtitle: "Design Team",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 4",
    subtitle: "Core Team",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 5",
    subtitle: "Tech Team",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 6",
    subtitle: "Design Team",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 7",
    subtitle: "Core Team",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 8",
    subtitle: "Tech Team",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 9",
    subtitle: "Design Team",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 10",
    subtitle: "Core Team",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 11",
    subtitle: "Tech Team",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 12",
    subtitle: "Design Team",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 13",
    subtitle: "Core Team",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 14",
    subtitle: "Tech Team",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
  },
  {
    image: "/pr.jpg",
    title: "Member 15",
    subtitle: "Design Team",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
  },
]

export function NextGenSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)

  const finalText = "The future of innovation"

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
          className="text-center mb-14"
        >
          <h2 className="text-5xl md:text-6xl font-bold font-heading">
            Next Gen
          </h2>
        </motion.div>

        {/* 🔹 GRID */}
        <div className="relative">
          <ChromaGrid items={nextGenMembers} />
        </div>

      </div>
    </section>
  )
}