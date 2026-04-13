"use client"

import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"

/* ================= TYPES ================= */

export interface ChromaItem {
  image: string
  title: string
  subtitle: string
  handle?: string
  location?: string
  borderColor?: string
  gradient?: string
  url?: string
}

export interface ChromaGridProps {
  items: ChromaItem[]
  className?: string
  radius?: number
  damping?: number
  fadeOut?: number
  ease?: string
}

/* ================= COMPONENT ================= */

const ChromaGrid: React.FC<ChromaGridProps> = ({
  items,
  className = "",
  radius = 250,
  damping = 0.4,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef<HTMLDivElement>(null)
  const fadeRef = useRef<HTMLDivElement>(null)

  const pos = useRef({ x: 0, y: 0 })

  // ✅ FIX: loose typing to avoid TS conflict
  const setX = useRef<((v: number) => void) | null>(null)
  const setY = useRef<((v: number) => void) | null>(null)

  /* ================= INIT ================= */
  useEffect(() => {
    const el = rootRef.current
    if (!el) return

    // ✅ FIX: cast GSAP setter properly
    setX.current = gsap.quickSetter(el, "--x", "px") as unknown as (v: number) => void
    setY.current = gsap.quickSetter(el, "--y", "px") as unknown as (v: number) => void

    const { width, height } = el.getBoundingClientRect()
    pos.current = { x: width / 2, y: height / 2 }

    // ✅ FIX: null-safe call
    setX.current?.(pos.current.x)
    setY.current?.(pos.current.y)
  }, [])

  /* ================= POINTER MOVE ================= */
  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x) // ✅ FIX
        setY.current?.(pos.current.y) // ✅ FIX
      },
      overwrite: true,
    })
  }

  const handleMove = (e: React.PointerEvent) => {
    const rect = rootRef.current?.getBoundingClientRect()
    if (!rect) return

    moveTo(e.clientX - rect.left, e.clientY - rect.top)

    gsap.to(fadeRef.current, {
      opacity: 0,
      duration: 0.25,
    })
  }

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
    })
  }

  /* ================= CARD HOVER ================= */
  const handleCardMove: React.MouseEventHandler<HTMLElement> = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()

    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`)
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`)
  }

  /* ================= RENDER ================= */
  return (
    <div
      ref={rootRef}
      className={`chroma-grid ${className}`}
      style={
        {
          "--r": `${radius}px`,
        } as React.CSSProperties
      }
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
    >
      {items.map((c, i) => (
        <article
          key={i}
          className="chroma-card"
          onMouseMove={handleCardMove}
          onClick={() => c.url && window.open(c.url, "_blank")}
          style={
            {
              "--card-border": c.borderColor || "#333",
              "--card-gradient": c.gradient || "linear-gradient(#111,#000)",
              cursor: c.url ? "pointer" : "default",
            } as React.CSSProperties
          }
        >
          <div className="chroma-img-wrapper">
            <img src={c.image} alt={c.title} />
          </div>

          <footer className="chroma-info">
            <h3 className="name">{c.title}</h3>
            {c.handle && <span className="handle">{c.handle}</span>}
            <p className="role">{c.subtitle}</p>
          </footer>
        </article>
      ))}

      <div className="chroma-overlay" />
      <div ref={fadeRef} className="chroma-fade" />
    </div>
  )
}

export default ChromaGrid