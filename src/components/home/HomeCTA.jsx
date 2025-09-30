"use client"

import Link from "next/link"

export default function HomeFooterCTA() {
  return (
    <section className="relative py-16 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-700 text-white">
      <div className="container mx-auto px-6 text-center space-y-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          🚀 Ready to scale your sales with confidence?
        </h2>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/get-started"
            className="px-6 py-3 rounded-xl font-semibold bg-white text-indigo-700 hover:bg-gray-100 shadow-md transition"
          >
            Get Started
          </Link>
          <Link
            href="/book-consultation"
            className="px-6 py-3 rounded-xl font-semibold border border-white/60 text-white hover:bg-white/10 transition"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}
