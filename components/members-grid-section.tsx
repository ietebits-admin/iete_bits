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
const officeBearers = [
  {
    image: "/aditya.jpeg",
    title: "Aditya Raj",
    subtitle: "Chairperson",
    linkedin: "https://www.linkedin.com/in/aditya-raj-461a31274",
    borderColor: "#3B82F6",
    gradient: "",
         },
      
  {
    image: "/amit.jpeg",
    title: "Amit Gupta",
    subtitle: "General Secretary",
    linkedin: "https://www.linkedin.com/in/amit-kumar-gupta-2b163a292",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/rishita.jpg",
    title: "Rishita Raj",
    subtitle: "Vice Chairperson",
    linkedin: "https://www.linkedin.com/in/rishita-raj-836b13290",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/ab.jpg",
    title: "Ayush Bhagat",
    subtitle: "Vice Chairperson",
    linkedin: "https://www.linkedin.com/in/ayush-k-bhagat",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/kashish.jpeg",
    title: "Kashish Kumari",
    subtitle: "Joint Secretary",
    linkedin: "https://in.linkedin.com/in/kashish-kumari-898771327",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/roushan.jpeg",
    title: "Roushan Raj",
    subtitle: "Technical Head",
    linkedin: "https://www.linkedin.com/in/roushan-raj-cmd007",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/punam.jpeg",
    title: "Punam Kumari",
    subtitle: "Technical Secretary",
    linkedin: "https://www.linkedin.com/in/punam-kumari-b17b0a282",
    borderColor: "#3B82F6",
    gradient: "",
      },
  {
    image: "/neeraj.jpeg",
    title: "Neeraj Kachhap",
    subtitle: "Event Management Head",
    linkedin: "https://www.linkedin.com/in/neeraj-kachhap-081911303",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/aakriti.jpg",
    title: "Aakriti Paul",
    subtitle: "Creative and Design Head",
    linkedin: "https://www.linkedin.com/in/aakriti-paul-04626a316",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/shakshree.jpg",
    title: "Sakshee Dubey",
    subtitle: "Head of Alumni Affairs",
    linkedin: "https://www.linkedin.com/in/sakshee-dubey-0b3459291",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/abishek.jpg",
    title: "Abhishek Prasad",
    subtitle: "Treasurer and Sponsorship Head",
    linkedin: "https://www.linkedin.com/in/09abhishek-prasad",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Anukriti.jpg",
    title: "Anukriti Kumari",
    subtitle: "Joint Treasurer",
    linkedin: "https://www.linkedin.com/in/anukriti-kumari-bb5625290",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/ankit.jpg",
    title: "Ankit Yadav",
    subtitle: "Media and Marketing Head",
    linkedin: "https://www.linkedin.com/in/ankit-yadav-b95a35290",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/vishnu.jpg",
    title: "Vishnu Singh",
    subtitle: "Public Relation Officer",
    linkedin: "https://www.linkedin.com/in/vishnu-singh-a88a93290",
    borderColor: "#3B82F6",
    gradient: "",
  },
   {
    image: "/warsha.jpg",
    title: "Warsha Karketta",
    subtitle: "Public Relation Officer",
    linkedin: "https://www.linkedin.com/in/warsha-kerketta-840192291",
    borderColor: "#3B82F6",
    gradient: "",
  },
]

//
// 🔹 MAIN SECTION
//
export function MembersGridSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)

  const finalText = "Leading the vision of IETE"

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
            Office Bearers
          </h2>
        </motion.div>

        {/* 🔹 GRID */}
        <div className="relative">
          <ChromaGrid items={officeBearers} />
        </div>

      </div>
    </section>
  )
}