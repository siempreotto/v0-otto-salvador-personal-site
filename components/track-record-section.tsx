"use client"

import { useEffect, useRef, useState } from "react"

interface Company {
  name: string
  logo: string
}

const companies: Company[] = [
  { name: "Stripe", logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" },
  { name: "Shopify", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/512px-Shopify_logo_2018.svg.png" },
  { name: "Notion", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
  { name: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "Linear", logo: "https://asset.brandfetch.io/iduDa181eM/idYYbqOlKi.png" },
  { name: "Vercel", logo: "https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png" },
  { name: "Supabase", logo: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png" },
  { name: "Planetscale", logo: "https://asset.brandfetch.io/idnN-nKP1W/idlCY5Ofsl.png" },
]

export function TrackRecordSection() {
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const speed = 0.5

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += speed
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  // Duplicate logos for seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section id="track-record" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-10">
        <h2 className="font-mono font-bold text-foreground text-[clamp(34px,4vw,48px)] text-center mb-4 tracking-wide">
          Track Record
        </h2>
        <p className="font-mono text-foreground-muted text-[15px] lg:text-[16px] text-center mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed">
          Companies and teams I&apos;ve worked with across product, growth, operations, and execution.
        </p>

        {/* Logo Marquee */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollRef}
            className="flex gap-12 lg:gap-16 overflow-x-hidden py-8"
          >
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center h-12 lg:h-14 px-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-auto max-w-[120px] lg:max-w-[140px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
