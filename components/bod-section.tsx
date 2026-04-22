"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"
import ChromaGrid from "./ui/ChromaGrid"
import { title } from "process"
import { link } from "fs"
import { Linkedin } from "lucide-react"
// import { Linkedin } from "lucide-react"
// import { FaLinkedin } from "react-icons/fa6";


//
// 🔹 DATA (15 CARDS)
//
const bod = [
  {
    image: "/Adarsh.jpg",
    title: "Adarsh Kumar",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/adarsh-kumar-abb0a3259/",
    borderColor: "#3B82F6",
    gradient: "",
         },
      
  {
    image: "/sashwat.jpeg",
    title: "Kumar Shaswat",
    subtitle: "Electronics and Communication",
    linkedin: "https://www.linkedin.com/in/kumar-shaswat-6a1035250/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/simran.jpeg",
    title: "Simran",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/simran-bb9338258/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Shivam1.jpeg",
    title: "Shivam Singh",
    subtitle: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Anshika.jpeg",
    title: "Anshika Mishra",
    subtitle: "Metallurgical Engineering",
    linkedin: "https://www.linkedin.com/in/anshika-mishra-2a7641257/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/sashi.jpeg",
    title: "Sashi Shekhar Singh",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/sashi-sekhar-singh-858a5424a/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Anjali1.jpg",
    title: "Anjali Singh",
    subtitle: "Prod. & Ind. Engineering",
    linkedin: "https://www.linkedin.com/in/anjali-singh-58a58b257/",
    borderColor: "#3B82F6",
    gradient: "",
      },
  {
    image: "/Aquib.jpg",
    title: "Aquib Aftab",
    subtitle: "Computer Science Engineering",
    linkedin: "https://www.linkedin.com/in/aquib-aftab-65917b252/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Rudra.jpg",
    title: "Rudranil Ganguly",
    subtitle: "Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/rudranil-ganguly-305411254/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Mayank1.jpeg",
    title: "Kumar Mayank",
    subtitle: "Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/kumar-mayank-410660221/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Rahul.jpg",
    title: "Rahul Kr. Das",
    subtitle: "Electronics and Communication",
    linkedin: "https://www.linkedin.com/in/rahul-das-169596258/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Deepti.jpg",
    title: "Deepti Kumari",
    subtitle: "Chemical Engineering",
    linkedin: "https://www.linkedin.com/in/deepti-kumari-482049258/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Puspam.jpg",
    title: "Puspam Jha",
    subtitle: "Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/puspam-jha-44606a225/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/1.jpg",
    title: "Faizan Ahmad",
    subtitle: "Information Technology",
    linkedin: "https://www.linkedin.com/in/faizan-ahmad-473aa123b/",
    borderColor: "#3B82F6",
    gradient: "",
  },
   {
    image: "/sonali.jpeg",
    title: "Sonali Gorai",
    subtitle: "Electronics and Communication",
    linkedin: "https://www.linkedin.com/in/sonali-gorai-b0a631264/",
    borderColor: "#3B82F6",
    gradient: "",
  },
]

//
// 🔹 MAIN SECTION
//
export function Bodsection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)

  const finalText = "Architects of the Vision"

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
            Board of Directors
          </h2>
        </motion.div>

        {/* 🔹 GRID */}
        <div className="relative">
          <ChromaGrid items={bod} />
        </div>

      </div>
    </section>
  )
}