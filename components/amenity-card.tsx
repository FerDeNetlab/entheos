import type React from "react"

interface AmenityCardProps {
  icon: React.ReactNode
  title: string
}

export function AmenityCard({ icon, title }: AmenityCardProps) {
  return (
    <div className="flex flex-col items-center gap-1.5 p-2.5 md:p-3 rounded-sm bg-card/60 border border-border/20 hover:bg-card hover:border-accent/30 hover:shadow-sm transition-all duration-300 group">
      <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center text-accent transition-colors">
        {icon}
      </div>
      <p className="text-[10px] md:text-xs text-center text-foreground/70 group-hover:text-foreground/90 font-sans font-medium tracking-wide leading-tight transition-colors">
        {title}
      </p>
    </div>
  )
}
