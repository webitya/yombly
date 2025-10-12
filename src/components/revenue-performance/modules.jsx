"use client"

import CheckCircleIcon from "@mui/icons-material/CheckCircle"

const modules = [
  {
    name: "Value Narrative & Discovery",
    summary: "From pain signals to quantified business impact and priority.",
  },
  {
    name: "Qualification & Stage Hygiene",
    summary: "Objective criteria, exits, and healthy pipeline standards.",
  },
  {
    name: "Mutual Action Plans",
    summary: "Shared timelines, milestones, and multi-threaded ownership.",
  },
  {
    name: "Competitive Strategy",
    summary: "Trap-setting, flank protection, and economic buyer alignment.",
  },
  {
    name: "Executive Communication",
    summary: "Concise updates, risk clarity, and crisp asks.",
  },
]

export default function Modules() {
  return (
    <section id="modules" className="w-full bg-emerald-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Enablement modules aligned to outcomes</h2>
        <p className="mt-2 max-w-2xl text-slate-700">
          Short, practical, and reinforced in the field—no theory without application.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {modules.map((m) => (
            <div key={m.name} className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-white p-4">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white">
                <CheckCircleIcon fontSize="inherit" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{m.name}</h3>
                <p className="text-sm text-slate-700">{m.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
