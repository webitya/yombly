"use client"

import { CheckCircle } from "@mui/icons-material"

export default function WhyYombly() {
  const points = [
    "One platform, multiple growth levers",
    "No fragmented vendors or broken systems",
    "Scalable for founders & enterprise teams",
  ]

  return (
    <section className="relative bg-white py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8 text-center space-y-8">
        {/* Heading */}
        <div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Why <span className="text-indigo-700">Yombly?</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Today, sales growth is fragmented—hiring, training, and intelligence 
            all run through multiple vendors, creating silos and chaos. 
            Yombly unifies these critical functions into one seamless platform.
          </p>
        </div>

        {/* Bullet Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {points.map((point, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition bg-white"
            >
              <CheckCircle className="text-green-600" fontSize="small" />
              <p className="text-sm md:text-base text-gray-700 font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
