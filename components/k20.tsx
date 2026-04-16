// "use client"

// import { motion } from "framer-motion"
// import { useInView } from "@/hooks/use-in-view"
// import { useEffect, useState } from "react"
// import ChromaGrid from "./ui/ChromaGrid"

// const nextGen20Members = [
//   {
//     image: "/Rajat.jpg",
//     title: "Rajat Choudhary",
//     subtitle: "GlobalLogical Hitachi",
//     linkedin: "https://linkedin.com/in/aditya",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Mukund.jpg",
//     title: "Mukund Parashar",
//     subtitle: "Tata Steel",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Megha.jpg",
//     title: "Megha",
//     subtitle: "TCS Digital",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Rana.jpg",
//     title: "Rana Randeep",
//     subtitle: "Vedanta",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Muskan.jpg",
//     title: "Muskan Naaz",
//     subtitle: "HUL",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Sandeep.jpg",
//     title: "Sandeep Kr. Hembrom",
//     subtitle: "TCS Ninja",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Shreya.jpg",
//     title: "Shreya Prabha",
//     subtitle: "Technip Energies",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Vaidehi.jpg",
//     title: "Vaidehi Singh",
//     subtitle: "Tata Steel",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Vijay.jpg",
//     title: "Vijay Lowada",
//     subtitle: "TCS Ninja",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Aman.jpg",
//     title: "Aman Kr. Singh",
//     subtitle: "TCS Digital",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Avinav.jpg",
//     title: "Avinav Raj Singh",
//     subtitle: "Ecolab",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Aniket.jpg",
//     title: "Aniket Kr. Gupta",
//     subtitle: "Tata Steel",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Manisha.jpg",
//     title: "Manisha Kumari",
//     subtitle: "Tata Steel",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
//   {
//     image: "/Ruma.jpg",
//     title: "Ruma Rupal",
//     subtitle: "Higher Studies",
//     borderColor: "#3B82F6",
//     gradient: "",
//   },
// ]

// export function NextGen20Section() {
//   const { ref, isInView } = useInView({ threshold: 0.1 })

//   const [scrambledText, setScrambledText] = useState("")
//   const [hasAnimated, setHasAnimated] = useState(false)

//   const finalText = "Alumni 2K20"

//   const chars =
//     "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

//   //
//   // 🔹 SCRAMBLE EFFECT
//   //
//   useEffect(() => {
//     if (isInView && !hasAnimated) {
//       let iteration = 0

//       const interval = setInterval(() => {
//         setScrambledText(
//           finalText
//             .split("")
//             .map((char, index) => {
//               if (index < iteration) return finalText[index]
//               return chars[Math.floor(Math.random() * chars.length)]
//             })
//             .join("")
//         )

//         if (iteration >= finalText.length) {
//           clearInterval(interval)
//           setHasAnimated(true)
//         }

//         iteration += 1
//       }, 55)

//       return () => clearInterval(interval)
//     }
//   }, [isInView, hasAnimated])

//   //
//   // 🔹 UI
//   //
//   return (
//     <section ref={ref} className="relative py-32 px-4">
//       <div className="max-w-7xl mx-auto">

//         {/* 🔥 HERO STYLE BADGE */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.5, rotateX: -20 }}
//           animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
//           className="inline-block mb-8 w-full text-center"
//         >
//           <div className="relative group inline-block">
//             <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />

//             <div className="relative px-4 py-1.5 bg-gradient-to-br from-background/95 via-background/90 to-background/95 backdrop-blur-2xl rounded-lg border border-primary/40 shadow-[0_0_20px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.1)] transition-all duration-500 hover:scale-105 hover:-translate-y-1">
//               <div className="flex items-center gap-1.5">

//                 <motion.span
//                   animate={{ rotate: 360 }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                   className="text-primary text-sm"
//                 >
//                   ✦
//                 </motion.span>

//                 <p className="text-sm md:text-base font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
//                   {scrambledText || finalText}
//                 </p>

//                 <motion.span
//                   animate={{ rotate: -360 }}
//                   transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                   className="text-accent text-sm"
//                 >
//                   ✦
//                 </motion.span>

//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* 🔹 HEADING */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-8 md:mb-14"
//         >
//           <h2 className="text-5xl md:text-6xl font-bold font-heading">
//             IETE 2K20
//           </h2>
//         </motion.div>

//         {/* 🔹 GRID */}
//         <div className="relative">
//           <ChromaGrid items={nextGen20Members} />
//         </div>

//       </div>
//     </section>
//   )
// }

"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useState } from "react"
import ChromaGrid from "./ui/ChromaGrid"
import { Linkedin } from "lucide-react"

const nextGen20Members = [
  {
    image: "/Rajat.jpg",
    title: "Rajat Choudhary",
    subtitle: "GlobalLogical Hitachi",
    linkedin: "https://www.linkedin.com/in/rajat1908/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Mukund.jpg",
    title: "Mukund Parashar",
    subtitle: "Tata Steel",
    linkedin: "https://www.linkedin.com/in/mukund-prashar-4a9168214/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Megha.jpg",
    title: "Megha",
    subtitle: "TCS Digital",
    linkedin: "https://www.linkedin.com/in/megha-singh-5a8ba41bb/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Rana.jpg",
    title: "Rana Randeep",
    subtitle: "Vedanta",
    linkedin: "https://www.linkedin.com/in/rana-randeep-ab0aa0202/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Muskan.jpg",
    title: "Muskan Naaz",
    subtitle: "HUL",
    linkedin: "https://www.linkedin.com/in/muskan-naaz-a112ba208/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Sandeep.jpg",
    title: "Sandeep Kr. Hembrom",
    subtitle: "TCS Ninja",
    linkedin: "https://www.linkedin.com/in/sandeephembrom/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Shreya.jpg",
    title: "Shreya Prabha",
    subtitle: "Technip Energies",
    linkedin: "https://www.linkedin.com/in/shreya-prabha-897b27197/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Vaidehi.jpg",
    title: "Vaidehi Singh",
    subtitle: "Tata Steel",
    linkedin: "https://www.linkedin.com/in/vaidehi-singh-a73186207/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Vijay.jpg",
    title: "Vijay Lowada",
    subtitle: "TCS Ninja",
    linkedin: "https://www.linkedin.com/in/vijay2002/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Aman.jpg",
    title: "Aman Kr. Singh",
    subtitle: "TCS Digital",
    linkedin: "https://www.linkedin.com/in/aman-singh-rajput-1b6b351bb",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Avinav.jpg",
    title: "Avinav Raj Singh",
    subtitle: "Ecolab",
    linkedin: "https://www.linkedin.com/in/avinav-raj-632641207/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Aniket.jpg",
    title: "Aniket Kr. Gupta",
    subtitle: "Tata Steel",
    linkedin: "https://www.linkedin.com/in/aniket-kumar-gupta-4469a1213/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Manisha.jpg",
    title: "Manisha Kumari",
    subtitle: "Tata Steel",
    linkedin: "https://www.linkedin.com/in/manisha-kumari-3a022a217/",
    borderColor: "#3B82F6",
    gradient: "",
  },
  {
    image: "/Ruma.jpg",
    title: "Ruma Rupal",
    subtitle: "Higher Studies",
    linkedin: "https://www.linkedin.com/in/ruma-rupal-56aa56236/",
    borderColor: "#3B82F6",
    gradient: "",
  },
]

export function NextGen20Section() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)

  const finalText = "Alumni 2K20"

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
            IETE 2K20
          </h2>
        </motion.div>

        {/* 🔹 GRID */}
        <div className="relative">
          <ChromaGrid items={nextGen20Members} />
        </div>

      </div>
    </section>
  )
}