"use client"

import VerifiedIcon from "@mui/icons-material/Verified"

const items = [
  "Business outcomes first, then content.",
  "Reinforcement beats one-off events.",
  "Managers are the force multiplier.",
  "Every initiative has an owner and KPI.",
  "Enablement is a system, not a sprint.",
]

export default function Principles() {
  return (
    <section id="principles" className="w-full bg-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
            <VerifiedIcon fontSize="small" />
          </span>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Operating principles</h2>
        </div>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {items.map((i, idx) => (
            <li key={idx} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
              <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white">
                {idx + 1}
              </span>
              <p className="text-sm text-slate-800">{i}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
