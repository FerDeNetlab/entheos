"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Instagram, Facebook, Youtube } from "lucide-react"
import Image from "next/image"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  const TikTokIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background shadow-[0_4px_30px_rgba(0,0,0,0.12)] py-1.5"
          : "bg-gradient-to-b from-foreground/30 to-transparent py-5"
      }`}
      role="navigation"
      aria-label="Navegación principal"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          <button onClick={() => scrollToSection("hero")} className="flex items-center" aria-label="Ir al inicio">
            <Image
              src="/logos/logo-entheos.svg"
              alt="ENTHEOS"
              width={400}
              height={160}
              className={`transition-all duration-300 ${
                isScrolled ? "h-16 w-auto lg:h-20" : "h-32 w-auto lg:h-40 xl:h-48 brightness-0 invert"
              }`}
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 font-sans">
            {["amenidades", "modelos", "interiores", "ubicacion", "contacto"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-xs font-semibold transition-colors tracking-widest uppercase ${
                  isScrolled ? "text-foreground/70 hover:text-accent" : "text-white/90 hover:text-white"
                }`}
                aria-label={`Ir a sección de ${section}`}
              >
                {section === "ubicacion" ? "Ubicación" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <div className="flex items-center gap-3 ml-2">
              <a
                href="https://www.instagram.com/entheosmx?igsh=cXc0NDNjbG04djFi"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors`}
                aria-label="Visitar Instagram de ENTHEOS"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@entheosmx?_r=1&_t=ZS-923tNMtQnL7"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors`}
                aria-label="Visitar TikTok de ENTHEOS"
              >
                <TikTokIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/14MgKH54C2R/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors`}
                aria-label="Visitar Facebook de ENTHEOS"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@EntheosResidencial"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors`}
                aria-label="Visitar YouTube de ENTHEOS"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>

            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent text-white hover:bg-accent/90 font-semibold tracking-wider px-6 py-5 shadow-lg text-xs h-auto rounded-none uppercase ml-2"
              aria-label="Agendar tu visita"
            >
              Agenda tu visita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 flex flex-col gap-5 font-sans border-t border-border/40 pt-6 bg-background rounded-lg p-4 shadow-lg">
            {["amenidades", "modelos", "interiores", "ubicacion", "contacto"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors text-left tracking-widest uppercase"
                aria-label={`Ir a sección de ${section}`}
              >
                {section === "ubicacion" ? "Ubicación" : section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/entheosmx?igsh=cXc0NDNjbG04djFi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                aria-label="Visitar Instagram de ENTHEOS"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.tiktok.com/@entheosmx?_r=1&_t=ZS-923tNMtQnL7"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                aria-label="Visitar TikTok de ENTHEOS"
              >
                <TikTokIcon className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.facebook.com/share/14MgKH54C2R/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                aria-label="Visitar Facebook de ENTHEOS"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.youtube.com/@EntheosResidencial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                aria-label="Visitar YouTube de ENTHEOS"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
            </div>

            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent text-white hover:bg-accent/90 w-full font-semibold tracking-wider uppercase rounded-none"
              aria-label="Agendar tu visita"
            >
              Agenda tu visita
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}
