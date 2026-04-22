"use client"

import { motion } from "framer-motion"
import { useInView } from "@/hooks/use-in-view"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap"

export function PanIndiaSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const mapRef = useRef<HTMLDivElement>(null)

  const [scrambledText, setScrambledText] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)
  const [mounted, setMounted] = useState(false)

  const finalText = "Nationwide Presence"
  const chars =
    "!@#$%^&*()_+-=[]{}|;:,.<>?/~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  // ✅ Fix hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  // ✅ Scramble effect (runs only on client)
  useEffect(() => {
    if (mounted && isInView && !hasAnimated) {
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
  }, [mounted, isInView, hasAnimated])

  // ✅ Map animation
  useEffect(() => {
    if (mounted && isInView && mapRef.current) {
      gsap.fromTo(
        mapRef.current,
        { scale: 0.92, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power3.out",
        }
      )
    }
  }, [mounted, isInView])

  return (
    <section ref={ref} className="relative py-32 px-4 mb-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={false}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >

          {/* 🔥 HEADER WITH ROTATING STARS */}
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-block mb-6"
          >
            <div className="relative group perspective-1000">
              
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-75" />

              <div className="relative px-4 py-1.5 bg-background/90 backdrop-blur-xl rounded-lg border border-primary/40">
                <div className="flex items-center gap-1.5">

                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-primary text-sm"
                  >
                    ✦
                  </motion.span>

                  <p className="text-sm md:text-base font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                    {mounted ? (scrambledText || finalText) : finalText}
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

          <h3 className="text-5xl md:text-6xl font-bold mb-16 font-heading">
            IETE is All Around India
          </h3>

          {/* ✅ CLEAN IMAGE MAP */}
          <motion.div
            initial={false}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2 }}
            className="relative max-w-4xl mx-auto mb-12"
          >
            <div ref={mapRef} className="w-full flex justify-center">
              <img
                src="/indbg.png"   // 👉 keep your image in /public
                alt="India Map"
                className="w-full max-w-[500px] object-contain opacity-90"
              />
            </div>
          </motion.div>

          {/* 🔥 STATS */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 w-full max-w-5xl mx-auto mb-8">
            <StatBox number="64" label="Centres" suffix="+" delay={0.6} isInView={isInView} />
            <StatBox number="1.25" label="Members" suffix="L+" delay={0.8} isInView={isInView} />
            <StatBox number="70" label="Years" suffix="+" delay={1.0} isInView={isInView} />
          </div>

        </motion.div>
      </div>
    </section>
  )
}

function StatBox({
  number,
  label,
  suffix = "",
  delay,
  isInView,
}: {
  number: string
  label: string
  suffix?: string
  delay: number
  isInView: boolean
}) {
  const boxRef = useRef<HTMLDivElement>(null)
  const [scrambledNumber, setScrambledNumber] = useState("")
  const [hasAnimated, setHasAnimated] = useState(false)

  const chars =
    "0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/~ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let iteration = 0
      const displayText = number + suffix

      const interval = setInterval(() => {
        setScrambledNumber(
          displayText
            .split("")
            .map((char, index) => {
              if (index < iteration) return displayText[index]
              return chars[Math.floor(Math.random() * chars.length)]
            })
            .join("")
        )

        if (iteration >= displayText.length) {
          clearInterval(interval)
          setHasAnimated(true)
        }

        iteration += 1
      }, 100)

      return () => clearInterval(interval)
    }
  }, [isInView, number, suffix, hasAnimated])

  return (
    <motion.div
      ref={boxRef}
      initial={false}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      whileHover={{ scale: 1.05 }}
      className="w-full rounded-2xl p-6 backdrop-blur-sm border border-primary/30"
    >
      <div className="text-4xl font-bold text-primary mb-2">
        {scrambledNumber || number + suffix}
      </div>
      <div className="text-sm text-muted-foreground uppercase">
        {label}
      </div>
    </motion.div>
  )
}