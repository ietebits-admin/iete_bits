import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Orbitron } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// ✅ FIXED: same font setup as old code
const _orbitron = Orbitron({ subsets: ["latin"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "IETE",
  description:
    "Learn about IETE Students Forum at BIT Sindri - India's leading professional society for Electronics, Telecommunication & IT advancement since 1953.",
  icons: {
  icon: [
    { url: "/ieteLogo.png", type: "image/png" },
  ],
},
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased ${_orbitron.variable}`}>
        {children}
        {/* <Analytics /> */}
      </body>
    </html>
  )
}