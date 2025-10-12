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

// Logos array excluding team5.png and team16.png
const logos = [
  { src: "/team2.png", alt: "Team 2", width: 100, height: 40 },
  { src: "/team3.png", alt: "Team 3", width: 100, height: 40 },
  { src: "/team4.png", alt: "Team 4", width: 100, height: 40 },
  { src: "/team6.png", alt: "Team 6", width: 100, height: 40 },
  { src: "/team7.png", alt: "Team 7", width: 100, height: 40 },
  { src: "/team8.png", alt: "Team 8", width: 100, height: 40 },
  { src: "/team9.png", alt: "Team 9", width: 100, height: 40 },
  { src: "/team10.png", alt: "Team 10", width: 100, height: 40 },
  { src: "/team11.png", alt: "Team 11", width: 100, height: 40 },
  { src: "/team12.png", alt: "Team 12", width: 100, height: 40 },
  { src: "/team13.png", alt: "Team 13", width: 100, height: 40 },
  { src: "/team14.png", alt: "Team 14", width: 100, height: 40 },
  { src: "/team15.png", alt: "Team 15", width: 100, height: 40 },
  { src: "/team17.png", alt: "Team 17", width: 100, height: 40 },
]

export default function HomeTestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  const next = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") prev()
      if (e.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [])

  return (
    <section className="relative py-12 bg-gray-50 text-gray-800 overflow-hidden w-full">
      {/* Logos - infinite scroll */}
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-12 justify-center w-full"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 transform transition-transform duration-300 hover:scale-110"
            >
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

      {/* Testimonials */}
      <div className="relative max-w-5xl mx-auto mt-10">
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-8 text-base md:text-lg italic leading-relaxed relative flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <div className="flex-1 text-center md:text-left">
              “{testimonials[current].quote}”
              <footer className="mt-3 text-gray-600 font-medium text-sm md:text-base">
                – {testimonials[current].author}
              </footer>
            </div>

            {/* Arrows */}
            <div className="flex gap-2 mt-4 md:mt-0">
              <button
                onClick={prev}
                className="bg-white text-gray-600 border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition-transform hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon fontSize="small" />
              </button>
              <button
                onClick={next}
                className="bg-white text-gray-600 border border-gray-200 rounded-full p-2 shadow hover:bg-gray-50 transition-transform hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon fontSize="small" />
              </button>
            </div>
          </motion.blockquote>
        </AnimatePresence>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-4 gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === current ? "bg-blue-600" : "bg-gray-300 hover:bg-blue-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
