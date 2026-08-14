import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProjectCard } from "@/components/project-card"

export const metadata: Metadata = {
  title: "Portfolio — Otto Salvador",
  description:
    "Personal and open-source projects built by Otto Salvador.",
}

const projects = [
  {
    title: "Knowledge GPT",
    oneLiner:
      "Chat de escritorio local que responde preguntas sobre tus PDFs con citas verificables — sin nube, sin suscripción, con tu propia API key.",
    tags: ["Tauri", "React", "TypeScript", "Rust", "SQLite"],
    href: "/portfolio/knowledgegpt",
  },
]

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      {/* Section guide line */}
      <div className="relative w-full pt-6 pb-4">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-[11px] tracking-[0.08em] text-cyan-600/70">
            #portfolio
          </span>
        </div>
      </div>

      {/* Home button */}
      <div className="absolute top-5 right-5 md:right-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-border px-3 py-1.5 text-[12px] tracking-[0.04em] text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3 text-accent" strokeWidth={2.5} />
          Home
        </Link>
      </div>

      <div className="mx-auto max-w-[1100px] px-5 md:px-6 lg:px-8 pt-8 pb-20">
        {/* Heading */}
        <h1 className="text-[clamp(38px,6vw,64px)] font-bold text-foreground tracking-[0.02em] mb-3">
          Portfolio
        </h1>
        <p className="text-[15px] md:text-[16px] text-foreground-muted leading-[1.75] mb-12 max-w-2xl">
          Personal and open-source projects. Tools I built to solve real problems — mostly my own.
        </p>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </main>
  )
}
