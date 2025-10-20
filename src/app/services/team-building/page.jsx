"use client"
import Link from "next/link"
import TechBackground from "@/components/tech/tech-background"
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined"
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined"
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

export default function TeamBuildingPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12">
      <div className="grid items-start gap-8 md:grid-cols-[1.2fr,1fr]">
        {/* Left: Content */}
        <section>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">Team-Building Solutions</h1>
          <p className="mt-3 text-muted-foreground">
            Build a consistent, high-output revenue team through screening, continuity, and rapid onboarding.
          </p>

          {/* Cards */}
          <div className="mt-6 grid gap-4">
            <ServiceItem
              Icon={FactCheckOutlinedIcon}
              title="Smart Screening System – Hire Right, Every Time"
              bullets={[
                "Identify true performers early",
                "Avoid hiring mismatches",
                "Make confident, data-backed decisions",
              ]}
              description="Evaluate real capabilities before hiring so you can stop wasting time and salary on wrong hires."
            />
            <ServiceItem
              Icon={AutorenewOutlinedIcon}
              title="Revenue Team Continuity – Keep Your Sales Engine Running"
              bullets={[
                "End hiring chaos & turnover",
                "Build a stable, high-output team",
                "Quarterly insights, RCA, and growth roadmap",
              ]}
              description="We manage hiring, retention, motivation, and quarterly audits so your revenue team stays consistent and accountable."
            />
            <ServiceItem
              Icon={RocketLaunchOutlinedIcon}
              title="30-Day Onboarding – Make New Hires Productive Fast"
              bullets={[
                "Accelerated product, process, and pitch training",
                "Structured readiness assessments",
                "Faster revenue contribution (save 60+ days)",
              ]}
              description="Get new hires market-ready in 30 days — not 90 — across levels."
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#ask"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <HelpOutlineIcon className="-ml-0.5 mr-2 !h-4 !w-4" />
              {"Get 1 Business Query Solved Free!"}
            </Link>
            <p className="text-xs text-muted-foreground">No pitch. Get an actionable answer within 24 hours.</p>
          </div>
        </section>

        {/* Right: Visual */}
        <aside className="relative isolate h-[420px] overflow-hidden rounded-xl border border-border bg-card">
          <TechBackground />
          <div className="relative z-10 flex h-full flex-col items-center justify-center">
            <div className="rounded-lg border border-border bg-background/60 p-4 backdrop-blur">
              <h3 className="text-sm font-semibold text-foreground">Screening Snapshot</h3>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li>• Capability Score: 87%</li>
                <li>• Pitch Clarity: Advanced</li>
                <li>• Role Fit: High</li>
                <li>• Risk Flags: 0</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

function ServiceItem({ Icon, title, bullets, description }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-3 flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {Icon ? <Icon fontSize="small" className="!h-4 !w-4" /> : null}
        </div>
        <div>
          <h3 className="text-pretty text-base font-semibold text-foreground">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
        {bullets?.map((b, i) => (
          <li key={i} className="inline-flex items-start gap-2 text-sm text-foreground">
            <CheckCircleOutlineIcon className="mt-0.5 !h-4 !w-4 text-primary" />
            <span className="text-pretty">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
