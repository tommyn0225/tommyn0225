"use client"

import { ArrowDown } from "lucide-react"
import Image from "next/image"
import { AnimatedBackground } from "./animated-background"

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-12 sm:py-0 overflow-hidden"
    >
      <AnimatedBackground />
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6 animate-fade-in-up bg-[#F5F5DC] backdrop-blur-sm p-4 sm:p-6 md:p-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="inline-block">
              <span className="text-xs sm:text-sm font-mono text-black border border-black px-2 py-1">
                [ CLOUD SECURITY ENGINEER ]
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Tommy Nguyen</h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed text-pretty font-mono">
              Computer Science student at UC Santa Cruz specializing in cloud security engineering and AWS
              infrastructure protection.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono bg-black text-[#F5F5DC] border border-black">
                AWS_CERTIFIED_SECURITY
              </span>
              <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono bg-black text-[#F5F5DC] border border-black">
                COMPTIA_SECURITY+
              </span>
              <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-mono bg-black text-[#F5F5DC] border border-black">
                STUDYING_CISSP
              </span>
            </div>
          </div>
          <div className="flex justify-center animate-fade-in-up animation-delay-200 order-first md:order-last">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden border-2 sm:border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] bg-[#F5F5DC]">
              <Image src="/images/headshot.png" alt="Tommy Nguyen" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 border-2 border-black bg-[#F5F5DC] p-2"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
      </button>
    </section>
  )
}
