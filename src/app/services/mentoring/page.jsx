"use client"
import Link from "next/link"
import TechBackground from "@/components/tech/tech-background"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

export default function MentoringPage() {
  return (
    <main className="relative mx-auto max-w-6xl px-5 py-12">
      <div className="grid items-start gap-8 md:grid-cols-[1.2fr,1fr]">
        {/* Left: Content */}
        <section>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">
            Mentoring & Capability-Building
          </h1>
          <p className="mt-3 text-muted-foreground">
            We don’t just train; we mentor continuously so learning converts into performance.
          </p>

          <div className="mt-6 grid gap-4">
            <MentorBlock
              Icon={GroupsOutlinedIcon}
              title="For Junior Executives (Client-Facing)"
              points={[
                "Outbound lead generation & account management",
                "Time planning & goal execution",
                "Sales conversation building & decision-maker outreach",
                "Email & content writing",
                "Prospecting, probing & planning",
              ]}
            />
            <MentorBlock
              Icon={ManageAccountsOutlinedIcon}
              title="For Sales/Marketing Managers"
              points={[
                "Team management & coaching",
                "Hiring & firing strategy",
                "Process and reporting system development",
                "Culture and motivation management",
                "Sales forecasting, pipeline management, and planning",
              ]}
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
            <p className="text-xs text-muted-foreground">Ask about a team challenge. Get a practical answer in 24h.</p>
          </div>
        </section>

        {/* Right: Visual */}
        <aside className="relative isolate h-[420px] overflow-hidden rounded-xl border border-border bg-card">
          <TechBackground />
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="rounded-lg border border-border bg-background/60 p-4 backdrop-blur">
              <h3 className="text-sm font-semibold text-foreground">Mentoring Rhythm</h3>
              <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                <li>• Monthly 1:1 + group sessions</li>
                <li>• Role-specific skill tracks</li>
                <li>• Performance-linked assignments</li>
                <li>• Review and feedback loops</li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}

function MentorBlock({ Icon, title, points }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="mb-2 flex items-start gap-3">
        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {Icon ? <Icon fontSize="small" className="!h-4 !w-4" /> : null}
        </div>
        <h3 className="text-pretty text-base font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="mt-2 grid gap-2 sm:grid-cols-2">
        {points?.map((p, i) => (
          <li key={i} className="inline-flex items-start gap-2 text-sm text-foreground">
            <CheckCircleOutlineIcon className="mt-0.5 !h-4 !w-4 text-primary" />
            <span className="text-pretty">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
