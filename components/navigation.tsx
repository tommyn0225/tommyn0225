"use client"

import { useState, useEffect } from "react"
import { Shield, Github } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-sm border-b-2 border-foreground" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors border-2 border-foreground px-3 py-1.5 hover:bg-foreground hover:text-background"
          >
            <Shield className="w-4 h-4" />
            <span className="font-bold text-sm tracking-wider">TOMMY_NGUYEN</span>
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={() => scrollToSection("about")}
              className="text-xs px-3 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors border border-foreground tracking-wider"
            >
              [ABOUT]
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-xs px-3 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors border border-foreground tracking-wider"
            >
              [EXPERIENCE]
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-xs px-3 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors border border-foreground tracking-wider"
            >
              [PROJECTS]
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-xs px-3 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors border border-foreground tracking-wider"
            >
              [CONTACT]
            </button>
            <a
              href="https://github.com/tommyn0225"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 border border-foreground hover:bg-foreground hover:text-background transition-colors ml-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
