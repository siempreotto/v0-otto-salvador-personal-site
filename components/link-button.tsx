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
      className="group inline-flex items-center gap-2.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:border-brand hover:shadow-sm"
    >
      <Icon className="h-4 w-4 text-brand" />
      <span>{label}</span>
    </Link>
  )
}
