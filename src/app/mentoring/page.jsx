"use client"

import TechBackground from "../../components/tech/tech-background"
import ServiceCard from "../../components/services/service-card"

// MUI Icons
import SupportAgentIcon from "@mui/icons-material/SupportAgent"
import PsychologyIcon from "@mui/icons-material/Psychology"
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome"
import VerifiedIcon from "@mui/icons-material/Verified"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import InsightsIcon from "@mui/icons-material/Insights"
import SpeedIcon from "@mui/icons-material/Speed"
import SchoolIcon from "@mui/icons-material/School"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import MenuBookIcon from "@mui/icons-material/MenuBook"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MentoringPage() {
  return (
<>

<Header/>
    <main className="mx-auto max-w-6xl px-4 py-12 md:py-16 overflow-x-hidden">
      {/* Hero */}
      <section className="grid gap-10 md:grid-cols-2 md:gap-12">
        <div className="flex flex-col justify-center">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Mentoring & Capability</p>
          <h1 className="mt-2 text-pretty text-3xl font-semibold text-foreground sm:text-4xl">
            Mentoring that Compounds: Clarity, Confidence, and Better Decisions
          </h1>
          <p className="mt-4 text-pretty text-base text-muted-foreground sm:text-lg">
            1:1 and small-cohort mentoring with practical reps. We focus on decision quality, communication precision,
            and leadership behaviors that scale your impact quickly.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:?subject=Ask%201%20Free%20Question%20-%20Mentoring&body=Hi%2C%20I%20have%20a%20question%20about%20your%20Mentoring%20services..."
              className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              <HelpOutlineIcon fontSize="small" />
              <span>Ask 1 Free Question</span>
            </a>
            <a
              href="#tracks"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-4 py-2.5 text-sm font-medium text-foreground hover:bg-card"
            >
              <MenuBookIcon fontSize="small" />
              <span>View Tracks</span>
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">6–8</span>
              <p className="text-xs text-muted-foreground">Sessions / cohort</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">2–3</span>
              <p className="text-xs text-muted-foreground">Real projects</p>
            </div>
            <div className="rounded-lg border border-border bg-card/50 p-3 text-center">
              <span className="text-2xl font-semibold text-foreground">{">80%"}</span>
              <p className="text-xs text-muted-foreground">Skill retention</p>
            </div>
          </div>
        </div>

        {/* Visual with tech background */}
        <div className="relative min-h-[380px] overflow-hidden rounded-xl border border-border bg-card/50">
          <TechBackground />
          <img
            src="/mentoring-coaching-illustration.jpg"
            alt="Mentoring program visualization"
            className="relative z-10 h-full w-full rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Tracks */}
      <section id="tracks" className="mt-14 grid gap-6 md:grid-cols-3">
        <ServiceCard
          title="Decision Quality"
          description="Reduce rework and increase momentum with rigorous thinking frameworks."
          Icon={PsychologyIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Decision%20Quality"
        />
        <ServiceCard
          title="Communication Precision"
          description="Narratives that inform, align, and get buy-in faster."
          Icon={AutoAwesomeIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Communication"
        />
        <ServiceCard
          title="Leadership Behaviors"
          description="Signal clarity, set tempo, and lead through influence."
          Icon={VerifiedIcon}
          href="mailto:?subject=Ask%201%20Free%20Question%20-%20Leadership%20Behaviors"
        />
      </section>

      {/* Program components */}
      <section className="mt-14 rounded-xl border border-border bg-card/40 p-6 sm:p-8">
        <h2 className="text-balance text-2xl font-semibold text-foreground">Program Components</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ul className="grid gap-3 text-foreground/90">
            {[
              { icon: SupportAgentIcon, text: "1:1 mentoring sessions and async support between calls" },
              { icon: SchoolIcon, text: "Exercises, reps, and feedback loops to solidify behaviors" },
              { icon: SpeedIcon, text: "Momentum: cadence, constraints, and scope management" },
              { icon: InsightsIcon, text: "Progress signal and reflection prompts for compounding gains" },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <item.icon fontSize="small" className="mt-0.5 text-primary" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
          <ul className="grid gap-3 text-foreground/90">
            {[
              { icon: RocketLaunchIcon, text: "Apply skills to live initiatives, not hypotheticals" },
              { icon: VerifiedIcon, text: "Templates and checklists ready for your workflows" },
              { icon: PsychologyIcon, text: "Decision coaching: from uncertainty to crisp action" },
              { icon: AutoAwesomeIcon, text: "Narrative reviews for executive-ready comms" },
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
