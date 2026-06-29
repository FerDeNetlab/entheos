"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Navigation from "@/components/navigation"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AmenityCard } from "@/components/amenity-card"
import {
  Waves,
  TreePalm,
  Dumbbell,
  Users,
  ShieldCheck,
  Sparkles,
  Dog,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Box,
  Facebook,
  Flame,
  UtensilsCrossed,
  Bath,
  Flower2,
  Baby,
  Youtube,
} from "lucide-react"

// Agregado: Ícono de TikTok
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const amenityImages = [
    { src: "/images/asadores.jpg", alt: "Zona de Asadores - ENTHEOS Residencial Los Mochis" },
    { src: "/images/area-20ejercicio.jpg", alt: "Área de Ejercicio al aire libre - ENTHEOS Los Mochis" },
    { src: "/images/entrada-2002.jpg", alt: "Entrada principal con Cascada - ENTHEOS Residencial" },
    { src: "/images/parque-2002.jpg", alt: "Área de Juegos Infantiles - ENTHEOS Los Mochis" },
    { src: "/images/pet-20zone.jpg", alt: "Pet Zone - Área para mascotas ENTHEOS" },
    {
      src: "/images/pet-20zone-20y-20ejercicio.jpg",
      alt: "Zona de Mascotas y Ejercicio - ENTHEOS Residencial",
    },
    { src: "/images/parque.jpg", alt: "Parque Recreativo familiar - ENTHEOS Los Mochis" },
    { src: "/images/terraza.jpg", alt: "Terraza Social con alberca - ENTHEOS Residencial" },
    { src: "/images/area-20de-20juegos.jpg", alt: "Área de Juegos comunitaria - ENTHEOS Los Mochis" },
  ]

  const handleWhatsApp = () => {
    window.open("https://wa.me/526688293758?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20ENTHEOS", "_blank")
  }

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % amenityImages.length)
  }

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + amenityImages.length) % amenityImages.length)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus("success")
        ;(e.target as HTMLFormElement).reset()
        setTimeout(() => setSubmitStatus("idle"), 5000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("[v0] Form submission error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <WhatsAppButton />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/entheos-20casa-20004.jpeg"
            alt="ENTHEOS Residencial Premium en Los Mochis - Casas contemporáneas de lujo"
            fill
            className="object-cover"
            priority
            quality={75}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 text-center max-w-5xl pt-32 md:pt-36 lg:pt-40">
          <h1 className="font-serif text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white tracking-[0.3em] uppercase mb-4 drop-shadow-lg">
            un entorno de excelencia
          </h1>

          <p className="font-sans text-sm md:text-base text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            El nuevo ícono residencial de Los Mochis, diseñado para quienes buscan armonía, estilo y comodidad en cada
            detalle.
          </p>
        </div>

        <div className="relative z-10 container mx-auto px-6 lg:px-8 mt-auto pb-24">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent text-white hover:bg-accent/90 text-sm font-semibold tracking-widest shadow-xl px-10 h-14 rounded-none uppercase"
              onClick={() => document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Ver modelos de casas disponibles"
            >
              <Image
                src="/icons/ver-casas.svg"
                alt=""
                width={24}
                height={24}
                className="mr-3 brightness-0 invert"
                aria-hidden="true"
              />
              Ver modelos de casa
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-sm border-2 border-white text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm font-semibold tracking-widest px-10 h-14 rounded-none uppercase"
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              aria-label="Agendar una visita a ENTHEOS"
            >
              Agenda una visita
            </Button>
          </div>
        </div>
      </section>

      {/* AMENIDADES SECTION */}
      <section id="amenidades" className="editorial-section bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none">
          <Image
            src="/logos/imagotipo-marca-de-agua.svg"
            alt=""
            width={800}
            height={800}
            className="w-full max-w-4xl"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Amenidades</h2>
            <p className="editorial-subheading text-base md:text-lg text-foreground/70 leading-relaxed">
              Espacios pensados para tu bienestar y el de tu familia
            </p>
          </div>

          {/* Grid de amenidades compacto */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 md:gap-3 max-w-5xl mx-auto mb-12">
            <AmenityCard icon={<Waves size={20} strokeWidth={1.5} />} title="Alberca" />
            <AmenityCard icon={<Baby size={20} strokeWidth={1.5} />} title="Chapoteadero" />
            <AmenityCard icon={<Sparkles size={20} strokeWidth={1.5} />} title="Asoleaderos" />
            <AmenityCard icon={<Users size={20} strokeWidth={1.5} />} title="Área Lounge" />
            <AmenityCard icon={<ShieldCheck size={20} strokeWidth={1.5} />} title="Área Social" />
            <AmenityCard icon={<Bath size={20} strokeWidth={1.5} />} title="Baños" />
            <AmenityCard icon={<UtensilsCrossed size={20} strokeWidth={1.5} />} title="Zona BBQ" />
            <AmenityCard icon={<Flame size={20} strokeWidth={1.5} />} title="Fogatas" />
            <AmenityCard icon={<TreePalm size={20} strokeWidth={1.5} />} title="Picnic" />
            <AmenityCard icon={<Flower2 size={20} strokeWidth={1.5} />} title="Jardín" />
            <AmenityCard icon={<Baby size={20} strokeWidth={1.5} />} title="Juegos" />
            <AmenityCard icon={<Dumbbell size={20} strokeWidth={1.5} />} title="Gimnasio" />
            <AmenityCard icon={<Dog size={20} strokeWidth={1.5} />} title="Mascotas" />
            <AmenityCard icon={<Flame size={20} strokeWidth={1.5} />} title="Asadores" />
          </div>

          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-sm">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
              >
                {amenityImages.map((img, idx) => (
                  <div key={idx} className="flex-shrink-0 w-full relative aspect-[16/9]">
                    <Image
                      src={img.src || "/placeholder.svg"}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-white font-sans text-lg font-medium">{img.alt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Controles del carrusel */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Ver amenidad anterior"
            >
              <ChevronLeft className="text-primary" size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
              aria-label="Ver siguiente amenidad"
            >
              <ChevronRight className="text-primary" size={24} />
            </button>
            {/* Indicadores */}
            <div className="flex justify-center gap-2 mt-6">
              {amenityImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCarouselIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === carouselIndex ? "w-8 bg-accent" : "w-2 bg-foreground/30"
                  }`}
                  aria-label={`Ir a amenidad ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 bg-primary overflow-hidden">
        {/* Fondo con patrón geométrico 3D */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/90" />
        </div>

        {/* Elementos decorativos 3D flotantes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/10 rotate-45 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/30 rotate-12" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/5 -rotate-12" />
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-accent/20 rotate-45" />

        {/* Cubo 3D decorativo */}
        <div className="absolute top-1/2 right-20 -translate-y-1/2 hidden xl:block">
          <div className="relative w-40 h-40" style={{ perspective: "500px" }}>
            <div
              className="absolute inset-0 border-2 border-accent/40"
              style={{ transform: "rotateX(20deg) rotateY(-30deg)" }}
            />
            <div
              className="absolute inset-4 border border-white/20"
              style={{ transform: "rotateX(20deg) rotateY(-30deg) translateZ(20px)" }}
            />
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Ícono 3D animado */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-accent/40 flex items-center justify-center">
                    <Box className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                {/* Anillos animados */}
                <div
                  className="absolute inset-0 w-24 h-24 rounded-full border border-accent/30 animate-ping"
                  style={{ animationDuration: "2s" }}
                />
                <div
                  className="absolute -inset-4 w-32 h-32 rounded-full border border-white/10 animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
              </div>
            </div>

            {/* Subtítulo superior */}
            <p className="font-sans text-accent text-sm md:text-base tracking-[0.3em] uppercase mb-4 font-medium">
              Experiencia Inmersiva
            </p>

            {/* Título principal */}
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight">
              Vive tu experiencia
              <span className="block text-accent mt-2">ENTHEOS en Realidad Virtual    </span>
            </h2>

            {/* Descripción */}
            <p className="font-sans text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Explora cada rincón de tu futuro hogar con nuestro recorrido virtual interactivo. Camina por las
              amenidades, descubre los interiores y visualiza tu vida en ENTHEOS antes de dar el primer paso.
            </p>

            {/* Botón principal */}
            <button
              onClick={() => {
                const phoneNumber = "526688293758"
                const message = encodeURIComponent("Hola, me gustaría agendar una cita para conocer Entheos")
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
              }}
              className="inline-flex items-center gap-4 bg-accent hover:bg-accent/90 text-white font-sans font-semibold text-sm md:text-base tracking-wider uppercase px-10 py-5 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(184,134,11,0.4)] group"
              aria-label="Agenda tu cita para recorrido virtual"
            >
              <Box className="w-5 h-5 transition-transform group-hover:rotate-12" />
              <span>Agenda tu cita</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Características del recorrido */}
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl mx-auto">
              <div className="text-center">
                <div className="text-accent text-2xl md:text-3xl font-serif font-bold mb-1">360°</div>
                <div className="text-white/50 text-xs font-sans uppercase tracking-wider">Vista completa</div>
              </div>
              <div className="text-center border-x border-white/10 px-4">
                <div className="text-accent text-2xl md:text-3xl font-serif font-bold mb-1">HD</div>
                <div className="text-white/50 text-xs font-sans uppercase tracking-wider">Alta definición</div>
              </div>
              <div className="text-center">
                <div className="text-accent text-2xl md:text-3xl font-serif font-bold mb-1">24/7</div>
                <div className="text-white/50 text-xs font-sans uppercase tracking-wider">Disponible</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODELOS SECTION - TRES TARJETAS */}
      <section id="modelos" className="editorial-section bg-background relative">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.012] pointer-events-none">
          <Image
            src="/logos/imagotipo-marca-de-agua.svg"
            alt=""
            width={700}
            height={700}
            className="w-full max-w-3xl"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Modelos de Casas
            </h2>
            <p className="editorial-subheading text-base md:text-lg text-foreground/70 leading-relaxed">
              Diseño contemporáneo con materiales de alta calidad y distribuciones inteligentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            <article className="editorial-card rounded-sm overflow-hidden group">
              <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                <Image
                  src="/images/emuna-new.jpeg"
                  alt="Casa Modelo EMUNÁ - 144-165.5 m² con 3-4 recámaras en Los Mochis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-wide">EMUNÁ</h3>
                <ul className="space-y-1.5 text-foreground/70 font-sans text-sm mb-5">
                  <li>• Metrajes de 144 m² hasta 165.5 m²</li>
                  <li>• 3 y 4 Recámaras</li>
                  <li>• 3 baños completos</li>
                  <li>• 1 Medio baño</li>
                  <li>• Altura de 2.95 metros</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white font-semibold tracking-wider bg-transparent rounded-none uppercase text-sm"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Solicitar información sobre modelo EMUNÁ"
                >
                  Solicitar información
                </Button>
              </div>
            </article>

            <article className="editorial-card rounded-sm overflow-hidden group">
              <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                <Image
                  src="/images/shejina-new.jpeg"
                  alt="Casa Modelo SHEJINÁ - 144-165.5 m² con 3-4 recámaras en Los Mochis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-wide">SHEJINÁ</h3>
                <ul className="space-y-1.5 text-foreground/70 font-sans text-sm mb-5">
                  <li>• Metrajes de 144 m² hasta 165.5 m²</li>
                  <li>• 3 y 4 Recámaras</li>
                  <li>• 3 baños completos</li>
                  <li>• 1 Medio baño</li>
                  <li>• Altura de 2.95 metros</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white font-semibold tracking-wider bg-transparent rounded-none uppercase text-sm"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Solicitar información sobre modelo SHEJINÁ"
                >
                  Solicitar información
                </Button>
              </div>
            </article>

            <article className="editorial-card rounded-sm overflow-hidden group md:col-span-2 lg:col-span-1">
              <div className="relative h-[320px] md:h-[380px] overflow-hidden">
                <Image
                  src="/images/beraja-new.jpeg"
                  alt="Casa Modelo BERAJÁ - 144-165.5 m² con 3-4 recámaras en Los Mochis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 bg-card">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3 tracking-wide">BERAJÁ</h3>
                <ul className="space-y-1.5 text-foreground/70 font-sans text-sm mb-5">
                  <li>• Metrajes de 144 m² hasta 165.5 m²</li>
                  <li>• 3 y 4 Recámaras</li>
                  <li>• 3 baños completos</li>
                  <li>• 1 Medio baño</li>
                  <li>• Altura de 2.95 metros</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent hover:text-white font-semibold tracking-wider bg-transparent rounded-none uppercase text-sm"
                  onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                  aria-label="Solicitar información sobre modelo BERAJÁ"
                >
                  Solicitar información
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* INTERIORES SECTION - DISEÑO EDITORIAL DOS COLUMNAS */}
      <section id="interiores" className="editorial-section bg-secondary/30 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] pointer-events-none">
          <Image
            src="/logos/imagotipo-marca-de-agua.svg"
            alt=""
            width={600}
            height={600}
            className="w-full max-w-2xl"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Descubre tu nueva casa
            </h2>
            <p className="editorial-subheading text-base md:text-lg text-foreground/70 leading-relaxed">
              Espacios diseñados con atención al detalle, donde la luz natural y la arquitectura se encuentran
            </p>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {/* Bloque 1: Imagen grande izquierda, texto derecha */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="editorial-card rounded-sm overflow-hidden">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/escalera.jpeg"
                    alt="Escalera y sala de estar moderna en casa ENTHEOS Los Mochis"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="lg:pl-8">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-wide">
                  Diseño que Inspira
                </h3>
                <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                  Cada espacio en ENTHEOS está pensado para maximizar la entrada de luz natural y crear ambientes que
                  invitan a la calma y la convivencia. Los acabados de primera calidad se combinan con una arquitectura
                  contemporánea que perdura en el tiempo.
                </p>
              </div>
            </div>

            {/* Bloque 2: Texto izquierda, imagen grande derecha */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:pr-8 order-2 lg:order-1">
                <h3 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6 tracking-wide">
                  Espacios para Vivir
                </h3>
                <p className="font-sans text-foreground/70 leading-relaxed mb-6">
                  Las áreas sociales de concepto abierto permiten una fluidez natural entre la cocina, el comedor y la
                  sala, creando el escenario perfecto para reuniones familiares y momentos de descanso.
                </p>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden order-1 lg:order-2">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/sala-02.jpeg"
                    alt="Sala y comedor de concepto abierto en casa ENTHEOS"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>

            {/* Grid de fotos adicionales */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/comedor.jpeg"
                    alt="Comedor elegante casa ENTHEOS Los Mochis"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/rec-ppal.jpeg"
                    alt="Recámara principal con vestidor ENTHEOS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/bano-ppal.jpeg"
                    alt="Baño principal de lujo casa ENTHEOS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/sala-de-tv.jpeg"
                    alt="Sala de TV y Family Room ENTHEOS Los Mochis"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/rec-jr01.jpeg"
                    alt="Recámara secundaria casa ENTHEOS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/comedor-cocina.jpeg"
                    alt="Cocina integral premium ENTHEOS Los Mochis"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/patio-2003.jpeg"
                    alt="Terraza exterior privada casa ENTHEOS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
              <div className="editorial-card rounded-sm overflow-hidden group">
                <div className="relative aspect-square">
                  <Image
                    src="/images/comedor-02.jpeg"
                    alt="Comedor con vista a terraza ENTHEOS"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UBICACIÓN SECTION */}
      <section id="ubicacion" className="editorial-section bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              Ubicación Estratégica
            </h2>
            <p className="editorial-subheading text-base md:text-lg text-foreground/70 leading-relaxed">
              En el corazón de Los Mochis, cerca de todo lo que necesitas
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            <div className="editorial-card rounded-sm overflow-hidden h-[400px] lg:h-[500px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.659697304867!2d-108.97652027258236!3d25.81479867584651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ba29a03a4be5f9%3A0x368de63b7eb51ca!2sENTHEOS%20-%20Entorno%20de%20Excelencia!5e0!3m2!1sen!2smx!4v1765218802359!5m2!1sen!2smx"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación ENTHEOS"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-5 tracking-wide">Vías de Acceso</h3>
                <ul className="space-y-3 font-sans">
                  <li className="flex items-start gap-3 text-foreground/75">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-sm">Blvd. Adolfo López Mateos</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/75">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-sm">Blvd. Antonio Rosales</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/75">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-sm">Blvd. Jiquilipan</span>
                  </li>
                  <li className="flex items-start gap-3 text-foreground/75">
                    <MapPin size={18} className="mt-1 flex-shrink-0 text-accent" strokeWidth={1.5} />
                    <span className="text-sm">Calle Santos Degollado</span>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-5 tracking-wide">
                  Puntos de Interés
                </h3>
                <ul className="space-y-2 text-sm text-foreground/75 font-sans">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Centros comerciales y plazas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Instituciones educativas de prestigio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Hospitales y clínicas especializadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Restaurantes y entretenimiento</span>
                  </li>
                </ul>
              </div>

              <Button
                onClick={() => window.open("https://maps.app.goo.gl/k3bDXqH3Na2VYM9Y6", "_blank")}
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-white font-semibold tracking-wider rounded-none uppercase text-sm"
                aria-label="Abrir ubicación en Google Maps"
              >
                <MapPin size={18} className="mr-2" />
                Ver en Google Maps
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ADAMOT SECTION */}
      <section className="editorial-section bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <Image src="/logos/imagotipo-marca-de-agua.svg" alt="" fill className="object-contain" loading="lazy" />
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-24 mb-12">
              <div className="flex-shrink-0">
                <Image
                  src="/logos/logo-entheos.svg"
                  alt="ENTHEOS"
                  width={500}
                  height={180}
                  className="h-32 w-auto md:h-40 lg:h-52 brightness-0 invert opacity-90"
                  loading="lazy"
                />
              </div>
              <div className="hidden sm:block w-px h-40 bg-primary-foreground/30"></div>
              <div className="flex-shrink-0">
                <Image
                  src="/logos/logo-adamot.svg"
                  alt="Adamot Desarrolladores"
                  width={500}
                  height={180}
                  className="h-32 w-auto md:h-40 lg:h-52 brightness-0 invert opacity-90"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="editorial-heading text-3xl md:text-4xl lg:text-5xl mb-6 text-balance">
                Donde la innovación y la exclusividad se encuentran
              </h2>

              <p className="editorial-subheading text-base md:text-lg leading-relaxed mb-5 opacity-90 max-w-3xl mx-auto">
                Adamot Desarrolladores cuenta con una visión estratégica para crear en Los Mochis un lugar único para
                vivir, elevar tu estilo de vida y construir comunidad.
              </p>

              <p className="font-sans text-sm md:text-base leading-relaxed opacity-75 max-w-2xl mx-auto">
                Cada proyecto es diseñado con atención al detalle, priorizando la calidad, la funcionalidad y el respeto
                por el entorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO SECTION */}
      <section id="contacto" className="editorial-section bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="editorial-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Contacto</h2>
              <p className="editorial-subheading text-base md:text-lg text-foreground/70 leading-relaxed">
                Estamos aquí para resolver todas tus dudas y ayudarte a encontrar tu hogar ideal
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 md:gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 tracking-wide">Información</h3>
                <div className="space-y-5 font-sans mb-8">
                  <div className="flex items-start gap-4">
                    <Mail size={22} className="mt-1 text-accent flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs text-foreground/60 mb-1 font-semibold tracking-wider uppercase">Email</p>
                      <a
                        href="mailto:ventas@entheos.mx"
                        className="text-foreground hover:text-accent transition-colors text-sm"
                      >
                        ventas@entheos.mx
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone size={22} className="mt-1 text-accent flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs text-foreground/60 mb-1 font-semibold tracking-wider uppercase">Teléfono</p>
                      <a
                        href="tel:+526688293758"
                        className="text-foreground hover:text-accent transition-colors text-sm"
                      >
                        +52 668 829 3758
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin size={22} className="mt-1 text-accent flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-xs text-foreground/60 mb-1 font-semibold tracking-wider uppercase">
                        Ubicación
                      </p>
                      <p className="text-foreground text-sm">Los Mochis, Sinaloa, México</p>
                    </div>
                  </div>
                </div>

                {/* Removed "Síguenos" section */}

                {/* WhatsApp Button */}
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white gap-3 font-semibold tracking-wider py-6 text-sm shadow-lg rounded-none uppercase"
                  aria-label="Chatea con un asesor por WhatsApp"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chatea con un Asesor
                </Button>
              </div>

              <div className="editorial-card rounded-sm p-7 md:p-8 bg-card shadow-lg">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-6 tracking-wide">
                  Solicita información
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                  {/* Hidden fields for Web3Forms */}
                  <input type="hidden" name="access_key" value="e3436997-c191-4ffb-8fff-1b580908bf7b" />
                  <input type="hidden" name="subject" value="Nueva solicitud desde Entheos.mx" />
                  <input type="hidden" name="from_name" value="Sitio Web Entheos" />
                  <input type="hidden" name="redirect" value="https://entheos.mx" />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-foreground/60 mb-1.5 block font-semibold tracking-wider uppercase">
                        Nombre
                      </label>
                      <Input
                        name="nombre"
                        placeholder="Tu nombre"
                        className="bg-background border-border h-11 text-sm rounded-none"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-xs text-foreground/60 mb-1.5 block font-semibold tracking-wider uppercase">
                        Apellido
                      </label>
                      <Input
                        name="apellido"
                        placeholder="Tu apellido"
                        className="bg-background border-border h-11 text-sm rounded-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-foreground/60 mb-1.5 block font-semibold tracking-wider uppercase">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      className="bg-background border-border h-11 text-sm rounded-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-foreground/60 mb-1.5 block font-semibold tracking-wider uppercase">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      name="telefono"
                      placeholder="+52 668 829 3758"
                      className="bg-background border-border h-11 text-sm rounded-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-xs text-foreground/60 mb-1.5 block font-semibold tracking-wider uppercase">
                      Modelo de interés
                    </label>
                    <select
                      name="modelo"
                      className="w-full h-11 px-3 bg-background border border-border text-sm rounded-none text-foreground"
                      required
                    >
                      <option value="">Selecciona un modelo</option>
                      <option value="Modelo EMUNÁ">Modelo EMUNÁ</option>
                      <option value="Modelo SHEJINÁ">Modelo SHEJINÁ</option>
                      <option value="Modelo BERAJÁ">Modelo BERAJÁ</option>
                      <option value="Todos los modelos">Todos los modelos</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs text-foreground/60 mb-1.5 block font-semibold tracking-wider uppercase">
                      Mensaje (opcional)
                    </label>
                    <Textarea
                      name="mensaje"
                      placeholder="¿Tienes alguna pregunta específica?"
                      className="bg-background border-border min-h-[100px] text-sm resize-none rounded-none"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-800 text-sm">
                      ¡Gracias! Tu solicitud ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.
                    </div>
                  )}
                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-800 text-sm">
                      Hubo un error al enviar tu solicitud. Por favor intenta nuevamente.
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-white hover:bg-accent/90 font-semibold tracking-wider py-6 text-sm shadow-md rounded-none uppercase mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-primary text-primary-foreground py-14">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 mb-10 text-center md:text-left">
              {/* Logo y descripción */}
              <div className="md:col-span-1 flex flex-col items-center md:items-start">
                <Image
                  src="/logos/logo-entheos.svg"
                  alt="ENTHEOS"
                  width={360}
                  height={120}
                  className="h-32 w-auto md:h-40 lg:h-48 brightness-0 invert opacity-90 mb-4"
                  loading="lazy"
                />
                <p className="font-sans text-sm opacity-70 leading-relaxed">
                  El nuevo ícono residencial de Los Mochis, diseñado para quienes buscan armonía, estilo y comodidad.
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-serif text-lg font-semibold mb-4 tracking-wide">Navegación</h4>
                <ul className="space-y-2 font-sans text-sm opacity-70">
                  <li>
                    <button
                      onClick={() => document.getElementById("amenidades")?.scrollIntoView({ behavior: "smooth" })}
                      className="hover:opacity-100 transition-opacity"
                    >
                      Amenidades
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => document.getElementById("modelos")?.scrollIntoView({ behavior: "smooth" })}
                      className="hover:opacity-100 transition-opacity"
                    >
                      Modelos
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => document.getElementById("interiores")?.scrollIntoView({ behavior: "smooth" })}
                      className="hover:opacity-100 transition-opacity"
                    >
                      Interiores
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => document.getElementById("ubicacion")?.scrollIntoView({ behavior: "smooth" })}
                      className="hover:opacity-100 transition-opacity"
                    >
                      Ubicación
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                      className="hover:opacity-100 transition-opacity"
                    >
                      Contacto
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contacto y redes */}
              <div className="flex flex-col items-center md:items-start">
                <h4 className="font-serif text-lg font-semibold mb-4 tracking-wide">Contacto</h4>
                <ul className="space-y-2 font-sans text-sm opacity-70 mb-4">
                  <li>ventas@entheos.mx</li>
                  <li>+52 668 829 3758</li>
                  <li>Los Mochis, Sinaloa</li>
                </ul>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/entheosmx?igsh=cXc0NDNjbG04djFi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                    aria-label="Instagram ENTHEOS"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@entheosmx?_r=1&_t=ZS-923tNMtQnL7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                    aria-label="TikTok ENTHEOS"
                  >
                    <TikTokIcon className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/14MgKH54C2R/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                    aria-label="Facebook ENTHEOS"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                  {/* Added YouTube link */}
                  <a
                    href="https://www.youtube.com/@EntheosResidencial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#b8860b] hover:bg-[#9a7209] flex items-center justify-center transition-colors"
                    aria-label="YouTube ENTHEOS"
                  >
                    <Youtube className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
