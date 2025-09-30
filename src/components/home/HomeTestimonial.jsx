"use client"

import Image from "next/image"
import { useState } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

const testimonials = [
  {
    quote:
      "Yombly transformed how we built our sales team. In 90 days, we went from chaos to clarity, and revenue started moving consistently.",
    author: "CEO, SaaS Company",
  },
  {
    quote:
      "The hiring + training modules helped us onboard reps faster. Our ramp-up time dropped by 40%.",
    author: "VP Sales, Tech Startup",
  },
  {
    quote:
      "Finally, a platform that keeps teams future-ready with real-world intelligence. Game changer!",
    author: "Founder, Marketing Agency",
  },
]

export default function HomeTestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  return (
    <section className="relative py-16 bg-gray-50 text-gray-900">
      <div className="container mx-auto px-6 text-center space-y-12">
        {/* Trusted Logos */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-600">
            Trusted by forward-thinking companies
          </h2>
          <div className="flex flex-wrap justify-center gap-6 grayscale opacity-80">
            <Image
              src="/logos/logo1.png"
              alt="Client Logo"
              width={120}
              height={50}
            />
            <Image
              src="/logos/logo2.png"
              alt="Client Logo"
              width={120}
              height={50}
            />
            <Image
              src="/logos/logo3.png"
              alt="Client Logo"
              width={120}
              height={50}
            />
            <Image
              src="/logos/logo4.png"
              alt="Client Logo"
              width={120}
              height={50}
            />
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <blockquote className="bg-white rounded-2xl shadow-lg border border-indigo-100 p-8 text-lg italic leading-relaxed">
            “{testimonials[current].quote}”
            <footer className="mt-4 text-indigo-700 font-semibold">
              – {testimonials[current].author}
            </footer>
          </blockquote>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-indigo-50"
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow hover:bg-indigo-50"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
