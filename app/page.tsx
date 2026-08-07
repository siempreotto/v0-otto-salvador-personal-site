import { LinkButton } from "@/components/link-button"
import { ProfileSection } from "@/components/profile-section"
import { TrackRecordSection } from "@/components/track-record-section"
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

// Button rows matching original Carrd layout
const buttonRows = [
  [
    { label: "About", icon: User, href: "/about" },
    { label: "Testimonials", icon: MessageSquare, href: "/testimonials" },
    { label: "My track record", icon: Award, href: "#track-record" },
  ],
  [
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { label: "Public Relations", icon: Youtube, href: "#pr" },
    { label: "GitHub", icon: Github, href: "https://github.com" },
  ],
  [
    { label: "Blog", icon: BookOpen, href: "#blog" },
    { label: "Email", icon: Mail, href: "mailto:hello@example.com" },
    { label: "Twitter", icon: Twitter, href: "https://twitter.com" },
  ],
  [
    { label: "Instagram", icon: Instagram, href: "https://instagram.com" },
    { label: "Product Hunt", icon: Rocket, href: "https://producthunt.com" },
    { label: "Calendly", icon: Calendar, href: "https://calendly.com" },
  ],
  [
    { label: "Certificates", icon: FolderOpen, href: "#certificates" },
    { label: "Portfolio", icon: Code, href: "/portfolio" },
  ],
]

// Flat list for mobile
const allLinks = buttonRows.flat()

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background scroll-smooth">
      {/* Hero Section */}
      <section className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-10 py-10 lg:py-14">
        {/* Header */}
        <header className="mb-8 lg:mb-10">
          <h1 className="text-[clamp(48px,5vw,64px)] font-bold text-foreground text-center mb-5 tracking-[0.04em]">
            Otto Salvador
          </h1>
          <p className="text-foreground-muted text-[17px] lg:text-[18px] leading-[1.9] max-w-none text-left">
            {"I'm a Catholic entrepreneur and product leader committed to building technology that serves people and the common good. I've led 0→1 launches and scaled products across fintech, e-commerce, and other industries, owning the full lifecycle from discovery and strategy through execution and growth. Certified in Growth and Product Management, I specialize in turning complex problems into clear roadmaps, aligning teams around impact, and driving measurable results. I love bold visions—but I'm even more obsessed with disciplined execution, continuous learning, and making things that genuinely improve people's lives."}
          </p>
        </header>

        {/* Lower two-column section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-center justify-center">
          {/* Desktop: Button cluster */}
          <div className="hidden lg:flex flex-col gap-2 flex-shrink-0">
            {buttonRows.map((row, rowIndex) => (
              <div 
                key={rowIndex} 
                className={`flex gap-2 ${rowIndex === buttonRows.length - 1 ? 'justify-center' : ''}`}
              >
                {row.map((link) => (
                  <LinkButton
                    key={link.label}
                    href={link.href}
                    icon={link.icon}
                    label={link.label}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Profile Photo */}
          <ProfileSection />

          {/* Mobile: Button grid */}
          <div className="lg:hidden grid grid-cols-2 gap-2 w-full">
            {allLinks.map((link) => (
              <LinkButton
                key={link.label}
                href={link.href}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-10">
        <hr className="border-border" />
      </div>

      {/* Track Record Section */}
      <TrackRecordSection />
    </main>
  )
}
