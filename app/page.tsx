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
        {/* Header and Introduction */}
        <header className="mb-12 lg:mb-16">
          <h1 className="text-5xl lg:text-6xl font-serif font-bold text-foreground text-center mb-6 tracking-tight">
            Otto Salvador
          </h1>
          <p className="text-foreground/80 text-lg leading-relaxed max-w-4xl mx-auto text-justify">
            {"I'm a Catholic entrepreneur and product leader committed to building technology that serves people and the common good. I've led 0→1 launches and scaled products across fintech, e-commerce, and other industries, owning the full lifecycle from discovery and strategy through execution and growth. Certified in Growth and Product Management, I specialize in turning complex problems into clear roadmaps, aligning teams around impact, and driving measurable results. I love bold visions—but I'm even more obsessed with disciplined execution, continuous learning, and making things that genuinely improve people's lives."}
          </p>
        </header>

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
