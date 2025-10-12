"use client"

import InsightsIcon from "@mui/icons-material/Insights"
import ShowChartIcon from "@mui/icons-material/ShowChart"
import QueryStatsIcon from "@mui/icons-material/QueryStats"
import AssessmentIcon from "@mui/icons-material/Assessment"

const cards = [
  {
    title: "Pipeline growth",
    value: "↑ 18–25%",
    desc: "Improve opportunity creation and coverage in priority segments.",
    icon: ShowChartIcon,
  },
  {
    title: "Win rate lift",
    value: "+6–9 pts",
    desc: "Sharpen discovery, qualification, and differentiated value.",
    icon: InsightsIcon,
  },
  {
    title: "Sales velocity",
    value: "↓ cycle time",
    desc: "Remove friction with crisp stages, exits, and next steps.",
    icon: QueryStatsIcon,
  },
  {
    title: "Forecast accuracy",
    value: "±5%",
    desc: "Deal inspection rigor and objective commit standards.",
    icon: AssessmentIcon,
  },
]

export default function Kpis() {
  return (
    <section id="kpis" className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Outcomes you can measure</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          We connect enablement to the KPIs leadership cares about. Every initiative has a metric, owner, and inspection
          rhythm.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white">
                  <c.icon fontSize="small" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-700">{c.title}</p>
                  <p className="text-xs text-slate-500">{c.desc}</p>
                </div>
              </div>
              <p className="mt-4 text-2xl font-bold text-slate-900">{c.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
