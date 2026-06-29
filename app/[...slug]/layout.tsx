import type React from "react"
import Navigation from "@/components/navigation"
import WhatsappButton from "@/components/whatsapp-button"

export default function DynamicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
      <WhatsappButton />
    </>
  )
}
