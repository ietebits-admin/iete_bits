"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"
import ChromaGrid from "./ui/ChromaGrid"
import { MdEngineering } from "react-icons/md"

const nextGenMembers = [
  {
    image: "/akash1.jpg",
    title: "Akash Verma",
    subtitle: "Information Technology",
    linkedin: "https://www.linkedin.com/in/akash-verma-94191b331/",
    borderColor: "#10B981",
    gradient: "",
    //linear-gradient(145deg, #3B82F6, #000)
    //
  },
  {
    image: "/anish.jpg",
    title: "Anish Gupta",
    subtitle: "Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/anish-kumar-gupta-800a3b374/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/aryan.jpg",
    title: "Aryan Raj",
    subtitle: "Information Technology",
    linkedin: "https://www.linkedin.com/in/aryan-raj-0a1861324/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/bhumi.jpg",
    title: "Bhumi Agarwal",
    subtitle: "Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/bhumi-agarwal-b315a1334/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/gautam.jpg",
    title: "Gautam Kumar",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/gautam-kumar-a63489240/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/ranjan.jpg",
    title: "Harsh Ranjan",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/harsh-ranjan-7704a0340/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/kumar-adit.jpg",
    title: "Kumar Aditya",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/kumar-aditya-b60b2a344/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/kunal.jpeg",
    title: "Kunal Singh Marwaha",
    subtitle: "Electronics and Communication",
    linkedin: "https://www.linkedin.com/in/kunal-singh-marwaha/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/madhu.jpg",
    title: "Madhu Kumari",
    subtitle: "Civil Engineering",
    linkedin: "https://www.linkedin.com/in/madhu-mishra-971644335/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/madhulika.jpg",
    title: "Madhulika Kumari",
    subtitle: "Electronics and Communication",
    linkedin: "https://www.linkedin.com/in/madhulika-kumari-70abb1345/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/mithi.jpg",
    title: "Mithi Jha",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/mithi-jha-699b71288/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/palak.jpeg",
    title: "Palak Kumari Agarwal",
    subtitle: "Electronics and Communication",
    linkedin: "https://www.linkedin.com/in/palak-kumari-agarwal-ab9229317/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/rimisha.jpg",
    title: "Rimisha Kumari",
    subtitle: "Information Technology",
    linkedin: "https://www.linkedin.com/in/rimisha-kumari-67a2ba334/",
    borderColor: "#10B981",
    gradient: "",
  },
  {
    image: "/shashank.jpg",
    title: "Shashank Gupta",
    subtitle: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/shashank-gupta-230489338/",
    borderColor: "#10B981",
    gradient: "",
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
    <section ref={ref} className="relative py-16 md:py-32 px-4">
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