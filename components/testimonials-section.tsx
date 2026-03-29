"use client"

import Image from "next/image"

interface Testimonial {
  name: string
  role: string
  company: string
  avatar: string
  quote: string
}

const testimonials: Testimonial[] = [
  {
    name: "María González",
    role: "VP of Product",
    company: "Fintech Startup",
    avatar: "https://i.pravatar.cc/150?img=1",
    quote: "Otto transformed our product strategy. His ability to align teams and drive measurable outcomes is exceptional.",
  },
  {
    name: "Carlos Mendoza",
    role: "CEO",
    company: "E-commerce Platform",
    avatar: "https://i.pravatar.cc/150?img=3",
    quote: "Working with Otto was a turning point for our company. He brought clarity to complex problems and delivered results.",
  },
  {
    name: "Ana Rodríguez",
    role: "Head of Growth",
    company: "SaaS Company",
    avatar: "https://i.pravatar.cc/150?img=5",
    quote: "His disciplined execution and strategic thinking helped us scale from 0 to 1. Highly recommend.",
  },
  {
    name: "Diego Fernández",
    role: "CTO",
    company: "Tech Startup",
    avatar: "https://i.pravatar.cc/150?img=8",
    quote: "Otto has a rare combination of technical understanding and product vision. A true partner in building great products.",
  },
  {
    name: "Laura Martínez",
    role: "Product Director",
    company: "Digital Agency",
    avatar: "https://i.pravatar.cc/150?img=9",
    quote: "His approach to roadmapping and team alignment is world-class. Otto delivers what he promises.",
  },
  {
    name: "Roberto Silva",
    role: "Founder",
    company: "Marketplace",
    avatar: "https://i.pravatar.cc/150?img=11",
    quote: "Otto helped us navigate critical growth decisions with confidence. His impact was immediate and lasting.",
  },
  {
    name: "Patricia López",
    role: "COO",
    company: "Operations Platform",
    avatar: "https://i.pravatar.cc/150?img=16",
    quote: "The clarity and focus Otto brings to product development is remarkable. He truly cares about impact.",
  },
  {
    name: "Miguel Torres",
    role: "Engineering Lead",
    company: "Fintech",
    avatar: "https://i.pravatar.cc/150?img=12",
    quote: "Otto bridges the gap between product and engineering like no one else. A pleasure to collaborate with.",
  },
  {
    name: "Sofia Ruiz",
    role: "Marketing Director",
    company: "Consumer App",
    avatar: "https://i.pravatar.cc/150?img=20",
    quote: "His data-driven approach and user empathy make him an invaluable product leader. Exceptional work.",
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col items-center text-center px-4 py-6">
      <div className="relative w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] mb-5">
        <Image
          src={testimonial.avatar}
          alt={testimonial.name}
          fill
          className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          unoptimized
        />
      </div>
      <h3 className="font-mono font-semibold text-foreground text-[15px] tracking-wide">
        {testimonial.name}
      </h3>
      <p className="font-mono text-foreground-muted text-[13px] mt-1 tracking-wide">
        {testimonial.role}, {testimonial.company}
      </p>
      <p className="font-mono text-foreground-muted text-[14px] leading-[1.8] mt-4 max-w-[280px]">
        {`"${testimonial.quote}"`}
      </p>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="mx-auto max-w-[1120px] px-5 md:px-8 lg:px-10">
        <h2 className="font-mono font-bold text-foreground text-[clamp(34px,4vw,48px)] text-center mb-12 lg:mb-16 tracking-wide">
          Testimonials
        </h2>
        
        {/* Desktop: 3 columns */}
        <div className="hidden lg:grid grid-cols-3 gap-x-8 gap-y-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-x-6 gap-y-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile: 1 column */}
        <div className="md:hidden flex flex-col gap-8">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
