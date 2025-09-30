"use client"

import { useEffect, useMemo, useState } from "react"
import BusinessCenterRounded from "@mui/icons-material/BusinessCenterRounded"
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded"
import ReportProblemRounded from "@mui/icons-material/ReportProblemRounded"

const CASES = [
  {
    company: "Acme SaaS (blurred)",
    problem: "Pricing confusion lowered conversion in mid-market",
    outcome: "Simplified tiering → +18% paid conversion in 60 days",
    icon: BusinessCenterRounded,
  },
  {
    company: "Fintech Co. (blurred)",
    problem: "ICP drift + misaligned GTM messaging",
    outcome: "Positioning refocus → 3× demo-to-opps in 1 quarter",
    icon: TrendingUpRounded,
  },
  {
    company: "B2B Services (blurred)",
    problem: "Attrition and long ramp in first-line sales",
    outcome: "Role clarity + enablement → 25% faster ramp",
    icon: ReportProblemRounded,
  },
]

export default function CaseCarousel() {
  const [index, setIndex] = useState(0)
  const current = useMemo(() => CASES[index], [index])

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % CASES.length)
    }, 3500)
    return () => clearInterval(id)
  }, [])

  const Icon = current.icon

  return (
    <div id="sample-case" className="rounded-lg border border-border bg-card p-6 shadow-sm" aria-live="polite">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
          <Icon />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">Case Snapshot</p>
          <h3 className="mt-1 line-clamp-1 text-lg font-medium">{current.company}</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Problem:</span> {current.problem}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Outcome:</span> {current.outcome}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1">
          {CASES.map((_, i) => (
            <span
              key={i}
              aria-hidden
              className={[
                "h-1.5 w-6 rounded-full bg-muted transition-all",
                i === index ? "bg-primary" : "opacity-60",
              ].join(" ")}
            />
          ))}
        </div>
        <div className="text-xs text-muted-foreground">Swipe/Wait to browse</div>
      </div>
    </div>
  )
}
