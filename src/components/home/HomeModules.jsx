"use client"

import Link from "next/link"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

export default function CoreModules() {
  const modules = [
    {
      title: "MarketCrew",
      subtitle: "A hiring engine for sales & marketing talent.",
      points: [
        "30+ quality checks",
        "Productivity Insights Report Before Hiring",
        "Designed to maximize hiring success",
      ],
      href: "/marketcrew",
    },
    {
      title: "Sales Syllabus",
      subtitle: "A real-world, case-based learning system.",
      points: [
        "Business cases, not theory",
        "Built for founders & leaders",
        "Smarter decision-making through proven playbooks",
      ],
      href: "/sales-syllabus",
    },
    {
      title: "Revenue Pilot",
      subtitle: "Your 90-day sales growth engine.",
      points: [
        "Complete performance management system",
        "Define → Measure → Improve sales productivity",
        "Proven to accelerate revenue scaling",
      ],
      href: "/revenue-pilot",
    },
    {
      title: "Exact IQ",
      subtitle: "Real-world market intelligence for accurate decisions.",
      points: [
        "Solved 100+ organizational inefficiencies",
        "100% precision in sales & marketing insights",
        "Custom intelligence → faster growth decisions",
      ],
      href: "/exact-iq",
    },
  ]

  return (
    <section className="relative bg-gray-50 py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            The <span className="text-indigo-700">Core Modules</span>
          </h2>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* Title + Subtitle */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-600">{module.subtitle}</p>
              </div>

              {/* Bullet Points */}
              <ul className="mt-4 space-y-2">
                {module.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-sm text-gray-700"
                  >
                    <span className="text-indigo-600">🔹</span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="mt-5">
                <Link
                  href={module.href}
                  className="inline-flex items-center text-sm font-medium text-indigo-700 hover:text-indigo-900 transition"
                >
                  Explore <ArrowForwardIcon fontSize="small" className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
