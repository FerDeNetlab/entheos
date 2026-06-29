import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

export const metadata: Metadata = {
  title: "ENTHEOS – Casas Premium en Los Mochis, Sinaloa | Residencial de Lujo",
  description:
    "Descubre ENTHEOS, el residencial premium en Los Mochis con casas contemporáneas de 144-165.5 m², 3-4 recámaras, alberca, gimnasio y amenidades exclusivas. ¡Agenda tu visita!",
  keywords: [
    "casas en Los Mochis",
    "residencial premium Los Mochis",
    "casas en venta Sinaloa",
    "ENTHEOS residencial",
    "casas contemporáneas Los Mochis",
    "vivienda de lujo Sinaloa",
    "desarrollos inmobiliarios Los Mochis",
    "casas con alberca Los Mochis",
    "residencial con amenidades",
    "Adamot Desarrolladores",
  ],
  authors: [{ name: "Adamot Desarrolladores" }],
  creator: "Adamot Desarrolladores",
  publisher: "ENTHEOS Residencial",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://entheos.mx",
    siteName: "ENTHEOS Residencial",
    title: "ENTHEOS – Residencial Premium en Los Mochis | Casas de Lujo",
    description:
      "Vive la excelencia en Los Mochis. Casas contemporáneas de 144-165.5 m² con 3-4 recámaras, alberca, gimnasio y amenidades de primer nivel.",
    images: [
      {
        url: "/images/entheos-20casa-20004.jpeg",
        width: 1200,
        height: 630,
        alt: "ENTHEOS Residencial - Casas Premium en Los Mochis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ENTHEOS – Residencial Premium en Los Mochis",
    description: "Descubre casas contemporáneas con amenidades exclusivas en Los Mochis, Sinaloa.",
    images: ["/images/entheos-20casa-20004.jpeg"],
  },
  alternates: {
    canonical: "https://entheos.mx",
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/logos/imagotipo-entheos.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logos/imagotipo-entheos.svg",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#C9A05C",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="google-site-verification" content="bjcPkDsOOVTdgykFAZxamyW5J_dxs1yFGnhxiv9cWqo" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://googleads.g.doubleclick.net" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-17815473014" strategy="afterInteractive" />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17815473014');
          `}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '988486043370617');
            fbq('track', 'PageView');
          `}
        </Script><Script id="meta-lead-event" strategy="afterInteractive">
          {`
            document.addEventListener('submit', function() {
              if (typeof window.fbq !== 'undefined') {
                fbq('track', 'Lead');
              }
            });
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Nunito+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            name: "ENTHEOS Residencial",
            description:
              "Residencial premium en Los Mochis con casas contemporáneas de alta calidad y amenidades exclusivas",
            url: "https://entheos.mx",
            logo: "https://entheos.mx/logos/logo-entheos-full.svg",
            image: "https://entheos.mx/images/entheos-20casa-20004.jpeg",
            telephone: "+52-668-829-3758",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Los Mochis",
              addressLocality: "Los Mochis",
              addressRegion: "Sinaloa",
              addressCountry: "MX",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "25.791981",
              longitude: "-108.98638",
            },
            sameAs: [
              "https://www.instagram.com/entheosmx",
              "https://www.facebook.com/share/14MgKH54C2R/",
              "https://www.tiktok.com/@entheosmx",
            ],
            areaServed: {
              "@type": "City",
              name: "Los Mochis, Sinaloa",
            },
            priceRange: "$$$",
          })}
        </Script>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
