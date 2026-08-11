"use client"

import { useState } from "react"

interface Company {
  name: string
  logo: string
  url: string
}

const companies: Company[] = [
  { name: "Cartful",             logo: "/cartful.png",             url: "https://cartful.com/" },
  { name: "Bridge for Billions", logo: "/bridge-for-billions.png", url: "https://www.bridgeforbillions.org/" },
  { name: "Soultime",            logo: "/soultime.png",            url: "https://www.soultime.com/" },
  { name: "MAX",                 logo: "/max.png",                 url: "https://www.max.com.gt/" },
  { name: "Blue Medical",        logo: "/blue-medical.png",        url: "https://mibluemedical.com/" },
  { name: "Sento",               logo: "/sento.png",               url: "https://www.sento-ai.com/" },
  { name: "Recaudar",            logo: "/recaudar.png",            url: "https://www.ottosalvador.com/" },
  { name: "Konversa",            logo: "/konversa.png",            url: "https://www.ottosalvador.com/" },
  { name: "The Product Firm",    logo: "/the-product-firm.png",    url: "https://www.ottosalvador.com/" },
]

function LogoList({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      className="flex shrink-0 items-center gap-12 lg:gap-16 py-6 px-6"
      {...(ariaHidden ? { "aria-hidden": "true" } : {})}
    >
      {companies.map((company) => (
        <li key={company.name} className="shrink-0">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={company.name}
            className="block cursor-pointer opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={company.logo}
              alt={company.name}
              className="w-32 md:w-40 h-auto object-contain"
            />
          </a>
        </li>
      ))}
    </ul>
  )
}

export function TrackRecordSection() {
  const [paused, setPaused] = useState(false)

  return (
    <section id="track-record" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-10">
        <h2 className="font-mono font-bold text-foreground text-[clamp(34px,4vw,48px)] text-center mb-4 tracking-wide">
          Track Record
        </h2>
        <p className="font-mono text-foreground-muted text-[15px] lg:text-[16px] text-center mb-12 lg:mb-16 max-w-2xl mx-auto leading-relaxed">
          Companies and teams I&apos;ve worked with across product, growth, operations, and execution.
        </p>
      </div>

      {/*
        Full-width marquee — overflow hidden + mask-image fades left/right edges.
        The track is rendered twice; animating translateX from 0 to -50% creates
        a seamless infinite loop. Pauses on hover so logos are easily clickable.
        prefers-reduced-motion: the CSS animation is disabled via globals.css if
        the user opts out of motion.
      */}
      <div
        className="relative overflow-hidden w-full"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Animated track */}
        <div
          className="flex w-max motion-safe:[animation:marquee_40s_linear_infinite]"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {/* Primary list — accessible */}
          <LogoList />
          {/* Duplicate list — hidden from screen readers so links aren't repeated */}
          <LogoList ariaHidden />
        </div>
      </div>
    </section>
  )
}
