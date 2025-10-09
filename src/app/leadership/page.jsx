"use client"

import TechBackground from "../../components/tech/tech-background"
import ServiceCard from "../../components/services/service-card"

// MUI Icons
import VerifiedIcon from "@mui/icons-material/Verified"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import SpeedIcon from "@mui/icons-material/Speed"
import GroupsIcon from "@mui/icons-material/Groups"
import SecurityIcon from "@mui/icons-material/Security"
import PsychologyIcon from "@mui/icons-material/Psychology"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import InsightsIcon from "@mui/icons-material/Insights"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LeadershipPage() {
  return (
<>
<Header/>


    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 overflow-x-hidden">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Leadership Services</p>
          <h1 className="mt-2 text-pretty text-3xl font-semibold text-foreground sm:text-4xl">
            Build Your Next Leaders with Precision and Velocity
          </h1>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            A structured, outcomes-driven leadership program designed for fast-moving teams. We blend
            capability-building with live mentorship, so emerging leaders deliver measurable impact in 90 days.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:?subject=Ask%201%20Free%20Question%20-%20Leadership&body=Hi%2C%20I%20have%20a%20question%20about%20your%20Leadership%20services..."
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <HelpOutlineIcon fontSize="small" />
              <span>Ask 1 Free Question</span>
            </a>
            <a
              href="#curriculum"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card"
            >
              <MenuBookIcon fontSize="small" />
              <span>View Curriculum</span>
            </a>
          </div>

          {/* Proof points */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">90d</span>
              <p className="text-xs text-muted-foreground">Time to outcomes</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">3–5x</span>
              <p className="text-xs text-muted-foreground">Team leverage</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">NPS 70+</span>
              <p className="text-xs text-muted-foreground">Participant rating</p>
            </div>
          </div>
        </div>

        {/* Visual with tech background */}
        <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-border bg-card/50">
          <TechBackground />
          <img
            src="/executive-leadership-workshop-illustration.jpg"
            alt="Leadership program visualization"
            className="relative z-10 h-full w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="mt-14 grid gap-6 md:grid-cols-3">
        <ServiceCard
          title="Outcome-Focused"
          description="Ship a real leadership initiative within your team: hiring loop, strategic planning, or delivery acceleration."
          Icon={VerifiedIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Leadership%20Outcomes"
        />
        <ServiceCard
          title="Capability-Building"
          description="Practical frameworks and reps: decision quality, prioritization, influence without authority, and clear communication."
          Icon={PsychologyIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Leadership%20Capability"
        />
        <ServiceCard
          title="Velocity & Clarity"
          description="Remove friction, increase signal. Your new leaders learn to set tempo and reduce ambiguity for their teams."
          Icon={SpeedIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Leadership%20Velocity"
        />
      </section>

      {/* What you get */}
      <section id="curriculum" className="mt-14 rounded-xl border border-border bg-card/40 p-6 sm:p-8">
        <h2 className="text-balance text-2xl font-semibold text-foreground">What’s Included</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ul className="grid gap-3 text-foreground/90">
            {[
              { icon: AutoAwesomeIcon, text: "Leadership toolkit: playbooks, templates, and scripts for daily use" },
              { icon: GroupsIcon, text: "Small-cohort sessions for direct feedback and peer practice" },
              { icon: SecurityIcon, text: "Risk and escalation operating model with clear thresholds" },
              { icon: InsightsIcon, text: "Metrics pack: leading/lagging indicators and review cadence" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <item.icon fontSize="small" className="mt-0.5 text-primary" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <ul className="grid gap-3 text-foreground/90">
            {[
              { icon: RocketLaunchIcon, text: "90-day initiative with executive readout and impact narrative" },
              { icon: TrendingUpIcon, text: "Growth path: role scope, expectations, and promotion signals" },
              { icon: VerifiedIcon, text: "Stakeholder alignment: clarity on goals, risks, and trade-offs" },
              { icon: SpeedIcon, text: "Delivery acceleration via better priorities and decision-making" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <item.icon fontSize="small" className="mt-0.5 text-primary" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="mt-14">
        <h2 className="text-2xl font-semibold text-foreground">How It Works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {[
            { step: "01", title: "Assess", desc: "Current leadership baseline and target outcomes." },
            { step: "02", title: "Design", desc: "90-day plan, cadence, and success metrics." },
            { step: "03", title: "Execute", desc: "Live coaching, weekly checkpoints, course-correct early." },
            { step: "04", title: "Report", desc: "Executive readout with measurable impact and next steps." },
          ].map((s, i) => (
            <div key={i} className="rounded-lg border border-border bg-card/40 p-4">
              <p className="text-xs font-mono text-muted-foreground">{s.step}</p>
              <p className="mt-1 text-sm font-semibold text-foreground">{s.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
<Footer/>

</>
  )
}
