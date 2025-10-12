"use client"

import ScheduleIcon from "@mui/icons-material/Schedule"

const items = [
  { label: "Kickoff & Baseline", detail: "Leadership goals, KPI baselines, role mapping" },
  { label: "Month 1–2", detail: "Core modules delivered and reinforced in team cadence" },
  { label: "Month 3–4", detail: "Field coaching, deal inspection sprints, certification" },
  { label: "Quarterly", detail: "Business reviews: KPI movement and program ROI" },
]

export default function Calendar() {
  return (
    <section id="calendar" className="w-full bg-amber-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-white">
            <ScheduleIcon fontSize="small" />
          </span>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Cadence & calendar</h2>
        </div>
        <p className="mt-2 max-w-2xl text-slate-700">
          Enablement is a system—rituals and reviews keep momentum and tie effort to outcomes.
        </p>

        <ol className="mt-6 space-y-3">
          {items.map((i, idx) => (
            <li key={i.label} className="flex items-start gap-3 rounded-lg border border-amber-200 bg-white p-4">
              <div className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-bold text-white">
                {idx + 1}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{i.label}</p>
                <p className="text-sm text-slate-700">{i.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
