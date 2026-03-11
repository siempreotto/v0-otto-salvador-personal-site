import { LinkButton } from "@/components/link-button"
import { ProfileSection } from "@/components/profile-section"
import {
  User,
  MessageSquare,
  Award,
  Linkedin,
  Youtube,
  Github,
  BookOpen,
  Mail,
  Twitter,
  Instagram,
  Rocket,
  Calendar,
  FolderOpen,
  Code,
} from "lucide-react"

const links = [
  { label: "About", icon: User, href: "#about" },
  { label: "Testimonials", icon: MessageSquare, href: "#testimonials" },
  { label: "My track record", icon: Award, href: "#track-record" },
  { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { label: "Public Relations", icon: Youtube, href: "#pr" },
  { label: "GitHub", icon: Github, href: "https://github.com" },
  { label: "Blog", icon: BookOpen, href: "#blog" },
  { label: "Email", icon: Mail, href: "mailto:hello@example.com" },
  { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { label: "Product Hunt", icon: Rocket, href: "https://producthunt.com" },
  { label: "Calendly", icon: Calendar, href: "https://calendly.com" },
  { label: "Certificates", icon: FolderOpen, href: "#certificates" },
  { label: "Portfolio", icon: Code, href: "#portfolio" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Links Grid */}
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <LinkButton
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>

          {/* Profile Photo */}
          <ProfileSection />
        </div>
      </div>
    </main>
  )
}
