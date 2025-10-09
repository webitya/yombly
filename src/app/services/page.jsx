"use client"
import ServiceCard from "@/components/services/service-card"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined"
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined"

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-12">
      <header className="mb-8">
        <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground">Services</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Practical, performance-focused programs to hire right, uplevel your team, and develop future leaders.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <ServiceCard
          href="/services/team-building"
          title="Team-Building Solutions"
          description="Smart Screening, Revenue Team Continuity, and 30-Day Onboarding to build a consistent, high-output revenue team."
          Icon={GroupsOutlinedIcon}
        />
        <ServiceCard
          href="/services/mentoring"
          title="Mentoring & Capability-Building"
          description="Monthly mentoring programs that turn training into performance for executives and managers."
          Icon={ManageAccountsOutlinedIcon}
        />
        <ServiceCard
          href="/services/leadership"
          title="Build Your Next Leaders"
          description="A 12-month leadership program that creates autonomous growth leaders and a self-sustaining engine."
          Icon={LeaderboardOutlinedIcon}
        />
      </section>
    </main>
  )
}
