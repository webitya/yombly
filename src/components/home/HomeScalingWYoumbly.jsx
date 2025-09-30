"use client"

import Link from "next/link"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export default function HomeScalingWithYombly() {
  const points = [
    "Hire your first sales team the right way",
    "Train them with market-proven strategies",
    "Build repeatable revenue playbooks",
    "Gain confidence in scale decisions",
  ]

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-5xl text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
          Scaling with <span className="text-indigo-700">Yombly</span>
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          As founders and leaders, scaling isn’t about more people—it’s about
          sharper processes, smarter hiring, and better data. Yombly equips you
          to:
        </p>

        {/* Bullet Points */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto text-left mb-10">
          {points.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-800 text-sm md:text-base"
            >
              <span className="text-indigo-600 text-lg">✅</span>
              {point}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-xl bg-indigo-700 text-white font-medium hover:bg-indigo-800 transition shadow-md hover:shadow-lg"
        >
          Talk to a Growth Advisor
          <ArrowForwardIcon fontSize="small" className="ml-2" />
        </Link>
      </div>
    </section>
  )
}
