import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Home, MapPin, Star, TrendingUp, Phone } from "lucide-react"

export async function generateStaticParams() {
  const locations = [
    "los-mochis",
    "los-mochis-sinaloa",
    "topolobampo",
    "san-carlos-sonora",
    "sinaloa",
    "norte-de-sinaloa",
    "bahia-de-topolobampo",
    "cerca-de-la-playa",
  ]

  const propertyTypes = [
    "casas-premium",
    "casas-de-lujo",
    "residencial-premium",
    "casas-en-venta",
    "casas-nuevas",
    "casas-modernas",
    "residencial-privado",
    "casas-con-alberca",
    "casas-3-recamaras",
    "casas-4-recamaras",
    "casas-familiares",
    "vivienda-residencial",
  ]

  const intentions = ["comprar", "invertir", "vivir", "adquirir", "compra-venta"]
  const features = [
    "con-alberca",
    "con-gimnasio",
    "con-amenidades",
    "con-seguridad",
    "con-areas-verdes",
    "con-salon-de-eventos",
    "privado",
    "fraccionamiento-cerrado",
  ]
  const models = ["emuna", "shejina", "beraja"]
  const guides = [
    "guia-comprar-casa-los-mochis",
    "ventajas-vivir-los-mochis",
    "invertir-inmuebles-sinaloa",
    "casas-cerca-playa-sinaloa",
    "residenciales-premium-los-mochis",
    "fraccionamientos-cerrados-los-mochis",
    "amenidades-residenciales-premium",
    "financiamiento-casa-los-mochis",
    "plusvalia-los-mochis",
    "estilo-vida-los-mochis",
  ]

  const params: { slug: string[] }[] = []

  // Location + property type combinations
  locations.forEach((location) => {
    propertyTypes.forEach((type) => {
      params.push({ slug: [location, type] })
    })
  })

  // Location + property type + feature
  locations.forEach((location) => {
    propertyTypes.slice(0, 6).forEach((type) => {
      features.slice(0, 4).forEach((feature) => {
        params.push({ slug: [location, `${type}-${feature}`] })
      })
    })
  })

  // Intention + location
  intentions.forEach((intention) => {
    locations.forEach((location) => {
      params.push({ slug: [`${intention}-casa-en-${location}`] })
    })
  })

  // Model + location
  models.forEach((model) => {
    locations.slice(0, 4).forEach((location) => {
      params.push({ slug: [`modelo-${model}-${location}`] })
    })
  })

  // Guides
  guides.forEach((guide) => {
    params.push({ slug: [guide] })
  })

  // Comparisons
  params.push({ slug: ["comparar", "emuna-vs-shejina"] })
  params.push({ slug: ["comparar", "emuna-vs-beraja"] })
  params.push({ slug: ["comparar", "shejina-vs-beraja"] })
  params.push({ slug: ["comparar", "comparar-modelos-entheos"] })

  // Price ranges
  params.push({ slug: ["casas-desde-2-millones"] })
  params.push({ slug: ["casas-premium-accesibles"] })
  params.push({ slug: ["casas-inversion-los-mochis"] })
  params.push({ slug: ["precios-casas-entheos"] })

  return params
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const path = slug.join("/")

  // Create title and description based on slug
  const title = slug
    .join(" ")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const description = `Descubre ${title} en ENTHEOS Residencial. Casas premium en Los Mochis con amenidades exclusivas. ¡Agenda tu visita hoy!`

  return {
    title: `${title} | ENTHEOS Residencial`,
    description,
    keywords: `${slug.join(", ")}, entheos, casas premium, los mochis, sinaloa, residencial`,
    openGraph: {
      title: `${title} | ENTHEOS`,
      description,
      url: `https://www.entheos.mx/${path}`,
      siteName: "ENTHEOS Residencial",
      images: [
        {
          url: "https://www.entheos.mx/images/emuna-new.jpeg",
          width: 1200,
          height: 630,
          alt: "ENTHEOS Residencial Premium",
        },
      ],
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ENTHEOS`,
      description,
      images: ["https://www.entheos.mx/images/emuna-new.jpeg"],
    },
  }
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const path = slug.join("/")

  // Create readable title from slug
  const pageTitle = slug
    .join(" ")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/emuna-new.jpeg"
          alt="ENTHEOS Residencial"
          fill
          className="object-cover"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">{pageTitle}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pretty">
            Descubre tu hogar ideal en ENTHEOS Residencial Premium
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-[#E8B44C] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#E8B44C]/90 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Agenda tu Visita
          </Link>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#E8B44C]">ENTHEOS Residencial Premium</h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              ENTHEOS es el nuevo ícono residencial de Los Mochis, Sinaloa. Diseñado para quienes buscan armonía, estilo
              y comodidad en cada detalle. Nuestras casas premium ofrecen espacios modernos con acabados de primera
              calidad.
            </p>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Ubicado estratégicamente en Los Mochis, ENTHEOS te conecta con lo mejor de la ciudad mientras disfrutas de
              la tranquilidad de un fraccionamiento cerrado con seguridad 24/7.
            </p>
            <div className="space-y-3 mt-6">
              <div className="flex items-start gap-3">
                <Star className="w-5 h-5 text-[#E8B44C] mt-1 flex-shrink-0" />
                <p>Amenidades exclusivas: Alberca, gimnasio, áreas verdes y más</p>
              </div>
              <div className="flex items-start gap-3">
                <Home className="w-5 h-5 text-[#E8B44C] mt-1 flex-shrink-0" />
                <p>3 modelos únicos de casas: EMUNÁ, SHEJINÁ y BERAJÁ</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E8B44C] mt-1 flex-shrink-0" />
                <p>Ubicación privilegiada en Los Mochis, Sinaloa</p>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#E8B44C] mt-1 flex-shrink-0" />
                <p>Excelente plusvalía y oportunidad de inversión</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-4">Nuestros Modelos</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-[#E8B44C] pl-4">
                  <h4 className="font-bold text-lg">EMUNÁ</h4>
                  <p className="text-sm text-muted-foreground">144 m² - 165.5 m² • 3-4 Recámaras • 3 Baños completos</p>
                </div>
                <div className="border-l-4 border-[#E8B44C] pl-4">
                  <h4 className="font-bold text-lg">SHEJINÁ</h4>
                  <p className="text-sm text-muted-foreground">144 m² - 165.5 m² • 3-4 Recámaras • 3 Baños completos</p>
                </div>
                <div className="border-l-4 border-[#E8B44C] pl-4">
                  <h4 className="font-bold text-lg">BERAJÁ</h4>
                  <p className="text-sm text-muted-foreground">144 m² - 165.5 m² • 3-4 Recámaras • 3 Baños completos</p>
                </div>
              </div>
              <Link
                href="/#modelos"
                className="mt-6 inline-block w-full text-center bg-[#E8B44C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#E8B44C]/90 transition-colors"
              >
                Ver Todos los Modelos
              </Link>
            </div>

            <div className="bg-card rounded-lg p-6 border">
              <h3 className="text-2xl font-bold mb-4">¿Por qué Los Mochis?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Ciudad con excelente calidad de vida</li>
                <li>✓ Cercana a playas de Topolobampo</li>
                <li>✓ Zona económica en desarrollo</li>
                <li>✓ Clima cálido todo el año</li>
                <li>✓ Conexión con San Carlos, Sonora</li>
                <li>✓ Excelente infraestructura urbana</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#E8B44C] text-black py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para conocer tu futuro hogar?</h2>
          <p className="text-lg mb-8">
            Agenda una visita y descubre por qué ENTHEOS es el mejor residencial premium en Los Mochis
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-black/90 transition-colors"
            >
              Contactar Ahora
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Ir a Inicio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
