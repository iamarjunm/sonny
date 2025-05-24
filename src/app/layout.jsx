// app/layout.jsx
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})
const geistMono = Geist_Mono({
  variable: "--font-mono-geist",
  subsets: ["latin"],
})

export const metadata = {
  title: "Sonny Bet — Crypto-Powered Betting",
  description: "Play 4 thrilling games with crypto. Fast, secure & fun!",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable}
          flex flex-col h-full bg-[#0E0E0E] text-[#F3F3F3] antialiased
        `}
      >
        {/* Global Navigation */}
        <Navbar />
        <main className="flex-1 w-full py-8">
          {children}
        </main>

        {/* Global Footer*/}
        <Footer />
      </body>
    </html>
  )
}