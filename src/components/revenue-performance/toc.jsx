"use client"

import ListAltIcon from "@mui/icons-material/ListAlt"

export default function Toc() {
  const items = [
    { label: "Steps", href: "#steps" },
    { label: "KPIs & Outcomes", href: "#kpis" },
    { label: "Role Tracks", href: "#tracks" },
    { label: "Enablement Modules", href: "#modules" },
    { label: "Cadence & Calendar", href: "#calendar" },
    { label: "KPI Linkages", href: "#kpi-linkages" },
    { label: "Principles", href: "#principles" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Get Started", href: "#contact" },
  ]
  return (
    <nav aria-label="Page sections" className="my-6 rounded-lg border border-slate-200 bg-slate-50 p-3">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
        <ListAltIcon fontSize="small" />
        Quick navigation
      </div>
      <ul className="flex w-full flex-wrap items-center gap-2">
        {items.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
