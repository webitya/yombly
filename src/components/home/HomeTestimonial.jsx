"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { motion, AnimatePresence } from "framer-motion"

// Testimonials array
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

// Logos array of objects
const logos = [
  { src: "/logos/logo1.png", alt: "Logo 1", width: 120, height: 50 },
  { src: "/logos/logo2.png", alt: "Logo 2", width: 120, height: 50 },
  { src: "/logos/logo3.png", alt: "Logo 3", width: 120, height: 50 },
  { src: "/logos/logo4.png", alt: "Logo 4", width: 120, height: 50 },
]

export default function HomeTestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  // Keyboard controls
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <section className="relative py-16 bg-white text-gray-800 overflow-hidden">
      <div className="container mx-auto px-6 space-y-12">
        {/* Infinite Moving Logos */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-12 justify-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-gradient-to-r from-white/90 to-gray-50 rounded-3xl shadow-lg border border-gray-100 p-8 text-lg italic leading-relaxed relative"
            >
              “{testimonials[current].quote}”
              <footer className="mt-4 text-gray-700 font-medium">
                – {testimonials[current].author}
              </footer>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute -left-12 top-1/2 -translate-y-1/2 bg-white text-gray-600 border border-gray-200 rounded-full p-3 shadow hover:bg-gray-50 transition"
              >
                <ChevronLeftIcon fontSize="large" />
              </button>
              <button
                onClick={next}
                className="absolute -right-12 top-1/2 -translate-y-1/2 bg-white text-gray-600 border border-gray-200 rounded-full p-3 shadow hover:bg-gray-50 transition"
              >
                <ChevronRightIcon fontSize="large" />
              </button>
            </motion.blockquote>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
