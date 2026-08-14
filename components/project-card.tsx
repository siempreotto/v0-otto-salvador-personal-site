import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  oneLiner: string
  tags: string[]
  href: string
}

export function ProjectCard({ title, oneLiner, tags, href }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 bg-card border border-border p-6 transition-colors hover:border-accent/60 hover:bg-card/80"
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-[17px] font-semibold tracking-[0.03em] text-foreground group-hover:text-accent transition-colors">
          {title}
        </h2>
        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" strokeWidth={2} />
      </div>

      <p className="text-[14px] text-foreground-muted leading-[1.7] flex-1">
        {oneLiner}
      </p>

      <div className="flex flex-wrap gap-2 pt-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-medium tracking-[0.08em] uppercase bg-muted text-muted-foreground px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}
