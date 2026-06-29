import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.entheos.mx"
  const today = new Date().toISOString().split("T")[0]

  // Páginas estáticas principales
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ]

  // Ubicaciones objetivo
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

  // Tipos de propiedad
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

  // Intenciones de búsqueda
  const intentions = ["comprar", "invertir", "vivir", "adquirir", "compra-venta"]

  // Características específicas
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

  // Modelos de casa
  const models = ["emuna", "shejina", "beraja"]

  const dynamicPages: MetadataRoute.Sitemap = []

  // 1. Páginas por ubicación + tipo de propiedad
  locations.forEach((location) => {
    propertyTypes.forEach((type) => {
      dynamicPages.push({
        url: `${baseUrl}/${location}/${type}`,
        lastModified: today,
        changeFrequency: "weekly",
        priority: 0.9,
      })
    })
  })

  // 2. Páginas por ubicación + tipo + característica
  locations.forEach((location) => {
    propertyTypes.slice(0, 6).forEach((type) => {
      features.slice(0, 4).forEach((feature) => {
        dynamicPages.push({
          url: `${baseUrl}/${location}/${type}-${feature}`,
          lastModified: today,
          changeFrequency: "monthly",
          priority: 0.8,
        })
      })
    })
  })

  // 3. Páginas de intención + ubicación
  intentions.forEach((intention) => {
    locations.forEach((location) => {
      dynamicPages.push({
        url: `${baseUrl}/${intention}-casa-en-${location}`,
        lastModified: today,
        changeFrequency: "weekly",
        priority: 0.85,
      })
    })
  })

  // 4. Páginas de modelos en ubicaciones
  models.forEach((model) => {
    locations.slice(0, 4).forEach((location) => {
      dynamicPages.push({
        url: `${baseUrl}/modelo-${model}-${location}`,
        lastModified: today,
        changeFrequency: "monthly",
        priority: 0.8,
      })
    })
  })

  // 5. Páginas de guías y recursos
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

  guides.forEach((guide) => {
    dynamicPages.push({
      url: `${baseUrl}/${guide}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.75,
    })
  })

  // 6. Páginas comparativas
  const comparisons = ["emuna-vs-shejina", "emuna-vs-beraja", "shejina-vs-beraja", "comparar-modelos-entheos"]

  comparisons.forEach((comparison) => {
    dynamicPages.push({
      url: `${baseUrl}/comparar/${comparison}`,
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    })
  })

  // 7. Páginas de precios
  const priceRanges = [
    "casas-desde-2-millones",
    "casas-premium-accesibles",
    "casas-inversion-los-mochis",
    "precios-casas-entheos",
  ]

  priceRanges.forEach((priceRange) => {
    dynamicPages.push({
      url: `${baseUrl}/${priceRange}`,
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  })

  console.log(`[v0] Generated ${staticPages.length + dynamicPages.length} URLs for sitemap`)

  return [...staticPages, ...dynamicPages]
}
