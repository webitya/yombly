import LibraryBooksRounded from "@mui/icons-material/LibraryBooksRounded"
import TimelineRounded from "@mui/icons-material/TimelineRounded"
import AssignmentTurnedInRounded from "@mui/icons-material/AssignmentTurnedInRounded"
import GroupsRounded from "@mui/icons-material/GroupsRounded"
import ForumRounded from "@mui/icons-material/ForumRounded"
import SupportAgentRounded from "@mui/icons-material/SupportAgentRounded"

const features = [
  {
    title: "Curated Business Cases",
    desc: "Cases drawn from real companies & markets—failures & successes.",
    icon: LibraryBooksRounded,
  },
  {
    title: "Role-specific Modules",
    desc: "Tailored paths for Founders, Sales Heads, Marketing Managers, Leaders.",
    icon: TimelineRounded,
  },
  {
    title: "Hands-on Strategy Assignments",
    desc: "Apply lessons via assignments, mentorship, feedback.",
    icon: AssignmentTurnedInRounded,
  },
  {
    title: "Mentor Insights & Live Debriefs",
    desc: "Experts walk you through case decisions & outcomes.",
    icon: GroupsRounded,
  },
  {
    title: "Community & Peer Learning",
    desc: "Learn together with a cohort, share insights, get peer feedback.",
    icon: ForumRounded,
  },
  {
    title: "Ongoing Support",
    desc: "Guidance even after module completion: what to do in your company.",
    icon: SupportAgentRounded,
  },
]

export default function WhatYouGet() {
  return (
    <section aria-labelledby="what-title" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="what-title" className="text-2xl font-semibold md:text-3xl">
          What You Get
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="rounded-lg border border-border bg-card p-6 shadow-sm transition hover:shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                    <Icon fontSize="small" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
