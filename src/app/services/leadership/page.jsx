"use client"
import Link from "next/link"
import TechBackground from "@/components/tech/tech-background"
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

export default function LeadershipPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12">
      <div className="grid items-start gap-8 md:grid-cols-[1.2fr,1fr]">
        {/* Left: Content */}
        <section>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">Build Your Next Leaders</h1>
          <p className="mt-3 text-muted-foreground">
            Transform promising managers into future business leaders in 12 months — create a self-sustaining growth
            engine.
          </p>

          <div className="mt-6 grid gap-4">
            <LeaderItem
              Icon={LeaderboardOutlinedIcon}
              title="Leadership Audit"
              bullets={["Identify 2–3 high-potential team members", "Map current strengths and development areas"]}
            />
            <LeaderItem
              Icon={PsychologyOutlinedIcon}
              title="Capability Development"
              bullets={["Strategy, P&L, negotiation, and growth mindset", "Structured curriculum with checkpoints"]}
            />
            <LeaderItem
              Icon={TimelineOutlinedIcon}
              title="On-the-Job Projects + Mentorship"
              bullets={[
                "Quarterly revenue-focused assignments",
                "Monthly 1:1 & group mentoring",
                "Founder alignment and ownership transfer",
              ]}
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Outcome: Your business scales even when you’re not in every meeting.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#ask"
              className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
            >
              <HelpOutlineIcon className="-ml-0.5 mr-2 !h-4 !w-4" />
              {"Ask 1 Free Question"}
            </Link>
            <p className="text-xs text-muted-foreground">Describe your leadership bottleneck; get a short playbook.</p>
          </div>
        </section>

        {/* Right: Visual */}
        <aside className="relative isolate h-[420px] overflow-hidden rounded-xl border border-border bg-card">
          <TechBackground />
          <div className="relative z-10 grid h-full place-items-center">
            <div className="rounded-lg border border-border bg-background/60 p-4 backdrop-blur">
              <h3 className="text-sm font-semibold text-foreground">12-Month Flow</h3>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li>• Q1: Audit + Foundations</li>
                <li>• Q2: Strategy + Execution</li>
                <li>• Q3: Ownership + Delegation</li>
                <li>• Q4: Scale + Autonomy</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

function LeaderItem({ Icon, title, bullets }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-2 flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {Icon ? <Icon fontSize="small" className="!h-4 !w-4" /> : null}
        </div>
        <h3 className="text-pretty text-base font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
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
