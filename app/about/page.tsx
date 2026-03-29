import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-mono">
      {/* Top guide line with label */}
      <div className="relative w-full pt-6 pb-4">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-border" />
        <div className="relative flex justify-center">
          <span className="bg-background px-3 text-[11px] tracking-[0.08em] text-cyan-600/70">
            #about
          </span>
        </div>
      </div>

      {/* Home button - top right */}
      <div className="absolute top-5 right-5 md:right-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 bg-white hover:bg-gray-50 border border-border px-3 py-1.5 text-[12px] tracking-[0.04em] text-foreground transition-colors"
        >
          <ArrowLeft className="w-3 h-3 text-accent" strokeWidth={2.5} />
          Home
        </Link>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1100px] px-5 md:px-6 lg:px-8 pt-8 pb-16">
        {/* Heading */}
        <h1 className="text-[clamp(38px,6vw,64px)] font-bold text-[#3f3f3f] tracking-[0.02em] mb-8 lg:mb-10">
          About me
        </h1>

        {/* Body copy */}
        <div className="text-[15px] md:text-[17px] lg:text-[18px] text-[#4f4f4f] leading-[1.95] space-y-6 max-w-none">
          <p>
            {"I'm a Catholic entrepreneur committed to leveraging technology to build a better world. With experience across fintech, e-commerce, digital marketing, and product management, I thrive on solving complex problems, thinking big, and delivering tangible results. My ambition is rooted in the common good and powered by a daily discipline of learning and improvement."}
          </p>

          <p>
            {"A lifelong tech enthusiast, I'm fascinated by how technology can transform lives—expanding access to services, enabling economic growth, and strengthening global connection. My journey in tech began at 13, when I attended Guatemala's largest tech meetup in early 2012. Since then, I've worked as a founder and Product Lead, and as a world class operator in Growth, Ops, and Recruitment."}
          </p>

          <p>
            {"I'm deeply passionate about mentoring and supporting others. I help entrepreneurs, companies, and startups with business modeling, product vision, growth strategy, and talent acquisition—always with a focus on impact and sustainability."}
          </p>

          <p>
            {"Since 2019, I've worked in various countries, building a strong network of collaborators and friends across Europe and Americas. I've also served as a lecturer in entrepreneurship and product development at universities in Guatemala and Ecuador, sharing what I've learned with the next generation of builders."}
          </p>

          <p>
            You can read more about my work and reflections on my{" "}
            <Link 
              href="/blog" 
              className="underline underline-offset-2 hover:text-accent transition-colors"
            >
              blog
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
