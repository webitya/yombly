"use client"

import TechBackground from "../../components/tech/tech-background"
import ServiceCard from "../../components/services/service-card"

// MUI Icons
import GroupsIcon from "@mui/icons-material/Groups"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import VerifiedIcon from "@mui/icons-material/Verified"
import SpeedIcon from "@mui/icons-material/Speed"
import PsychologyIcon from "@mui/icons-material/Psychology"
import SecurityIcon from "@mui/icons-material/Security"
import InsightsIcon from "@mui/icons-material/Insights"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TeamBuildingPage() {
  return (
  <>
  
  <Header/>
  <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 overflow-x-hidden">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Team-Building</p>
          <h1 className="mt-2 text-pretty text-3xl font-semibold text-foreground sm:text-4xl">
            Team-Building that Scales: Clarity, Autonomy, and Delivery
          </h1>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            We design operating models that align teams around outcomes. Clear priorities, fast feedback, and simple
            rituals that keep momentum high and rework low.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:?subject=Ask%201%20Free%20Question%20-%20Team%20Building&body=Hi%2C%20I%20have%20a%20question%20about%20your%20Team-Building%20services..."
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <HelpOutlineIcon fontSize="small" />
              <span>Ask 1 Free Question</span>
            </a>
            <a
              href="#operating-model"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card"
            >
              <FactCheckIcon fontSize="small" />
              <span>Operating Model</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">4–6 wks</span>
              <p className="text-xs text-muted-foreground">Initial rollout</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">20–40%</span>
              <p className="text-xs text-muted-foreground">Cycle time gain</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">-30%</span>
              <p className="text-xs text-muted-foreground">Meeting time</p>
            </div>
          </div>
        </div>

        {/* Visual with tech background */}
        <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-border bg-card/50">
          <TechBackground />
          <img
            src="/team-operating-model-diagram.jpg"
            alt="Team building operating model visualization"
            className="relative z-10 h-full w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Pillars */}
      <section id="operating-model" className="mt-14 grid gap-6 md:grid-cols-3">
        <ServiceCard
          title="Clarity"
          description="Define outcomes, priorities, and decision rights for every team."
          Icon={VerifiedIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Clarity"
        />
        <ServiceCard
          title="Autonomy"
          description="Reduce dependency drag with sensible interfaces and guardrails."
          Icon={SecurityIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Autonomy"
        />
        <ServiceCard
          title="Delivery"
          description="Shorten cycles, increase feedback, and remove friction."
          Icon={SpeedIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Delivery"
        />
      </section>

      {/* Deliverables */}
      <section className="mt-14 rounded-xl border border-border bg-card/40 p-6 sm:p-8">
        <h2 className="text-balance text-2xl font-semibold text-foreground">Deliverables</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ul className="grid gap-3 text-foreground/90">
            {[
              { icon: GroupsIcon, text: "Team topology, interfaces, and ownership maps" },
              { icon: InsightsIcon, text: "Flow metrics (cycle time, throughput, WIP) and dashboards" },
              { icon: PsychologyIcon, text: "Decision logs and post-mortem templates" },
              { icon: AutoAwesomeIcon, text: "Communication templates for async updates" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <item.icon fontSize="small" className="mt-0.5 text-primary" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <ul className="grid gap-3 text-foreground/90">
            {[
              { icon: RocketLaunchIcon, text: "30–60–90 day rollout plan with milestones" },
              { icon: VerifiedIcon, text: "Operating model playbook and ownership charter" },
              { icon: SpeedIcon, text: "Rituals: planning, review, retro, and escalation cadence" },
              { icon: SecurityIcon, text: "Risk register with thresholds and mitigation playbooks" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <item.icon fontSize="small" className="mt-0.5 text-primary" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>

  <Footer/>
  </>
  )
}
