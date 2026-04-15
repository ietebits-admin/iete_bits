"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const ctaRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const [scrambledText, setScrambledText] = useState("")
  const finalText = "The backbone of IETE"
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

  useEffect(() => {
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

      if (iteration >= finalText.length) clearInterval(interval)
      iteration += 1
    }, 55)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center px-4 py-12 md:py-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateX: -20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
            className="inline-block mb-4 md:mb-6"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500 animate-gradient bg-[length:200%_auto]" />
              <div className="relative px-4 py-1.5 bg-background/95 backdrop-blur-2xl rounded-lg border border-primary/40">
                <div className="flex items-center gap-1.5">
                  <span className="text-primary text-sm">✦</span>
                  <p className="text-sm md:text-base font-heading font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
                    {scrambledText || finalText}
                  </p>
                  <span className="text-accent text-sm">✦</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading font-bold text-center mx-auto leading-[1.1] text-[clamp(2.5rem,8vw,6rem)]"
          >
            <span className="block md:inline text-glow">OUR</span>{" "}
            <span className="block md:inline text-glow">MEMBERS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto px-2"
          >
            Welcome to our Exciting realms of technology, coding, engineering and robotics. Discover, learn and collaborate with like minded individuals, pushing the boundries of innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}