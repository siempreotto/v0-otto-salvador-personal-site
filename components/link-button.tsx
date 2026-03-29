import { type LucideIcon } from "lucide-react"
import Link from "next/link"

interface LinkButtonProps {
  href: string
  icon: LucideIcon
  label: string
}

export function LinkButton({ href, icon: Icon, label }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-[4px] bg-white/90 px-4 py-2.5 text-[12px] font-medium tracking-[0.12em] text-foreground uppercase transition-opacity hover:opacity-70"
    >
      <Icon className="h-4 w-4 text-brand" strokeWidth={2} />
      <span>{label}</span>
    </Link>
  )
}
