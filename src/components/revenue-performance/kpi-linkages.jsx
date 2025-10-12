"use client"

import LinkIcon from "@mui/icons-material/Link"
import SellIcon from "@mui/icons-material/Sell"
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong"
import PersonSearchIcon from "@mui/icons-material/PersonSearch"

const rows = [
  {
    icon: PersonSearchIcon,
    lever: "Top-of-funnel quality",
    behavior: "ICP clarity, message-market fit, and purposeful sequencing",
    kpi: "Meetings → SQL rate, pipeline coverage",
  },
  {
    icon: SellIcon,
    lever: "Mid-funnel conversion",
    behavior: "Deal qualification, stage exits, and value narrative depth",
    kpi: "Stage-to-stage conversion, win rate",
  },
  {
    icon: ReceiptLongIcon,
    lever: "Forecast accuracy",
    behavior: "Objective commit standards and rigorous deal inspection",
    kpi: "Forecast variance, commit accuracy",
  },
]

export default function KpiLinkages() {
  return (
    <section id="kpi-linkages" className="w-full bg-stone-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-4 flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-600 text-white">
            <LinkIcon fontSize="small" />
          </span>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">KPI linkages</h2>
        </div>

        <div className="overflow-hidden rounded-lg border border-stone-200 bg-white">
          <table className="w-full table-fixed text-left text-sm">
            <thead className="bg-stone-100 text-slate-700">
              <tr>
                <th className="px-4 py-3">Lever</th>
                <th className="px-4 py-3">Behavior Focus</th>
                <th className="px-4 py-3">Measured by</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.lever} className="border-t border-stone-200">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-emerald-600 text-white">
                        <r.icon fontSize="inherit" />
                      </span>
                      <span className="font-semibold text-slate-900">{r.lever}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-700">{r.behavior}</td>
                  <td className="px-4 py-3 text-slate-700">{r.kpi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
