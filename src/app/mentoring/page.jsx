"use client"

import GroupIcon from "@mui/icons-material/Group"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import SchoolIcon from "@mui/icons-material/School"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import TimelineIcon from "@mui/icons-material/Timeline"
import ScheduleIcon from "@mui/icons-material/Schedule"
import VerifiedIcon from "@mui/icons-material/Verified"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MentoringPage() {
  const itemsHow = [
    "Role-specific mentoring sessions every month",
    "Practical exercises, real-life problem-solving, and actionable takeaways",
    "Progress tracking to measure skill improvement and business impact",
  ]

  const juniorExec = [
    "Outbound lead generation & account management",
    "Time management, goal execution & prioritization",
    "Sales conversation building & decision-maker outreach",
    "Email, content writing & effective communication",
    "Prospecting, probing, and strategic planning",
  ]

  const mgrMentor = [
    "Team management & coaching skills",
    "Hiring & firing strategy, role allocation, succession planning",
    "Process design, reporting system, KPI tracking",
    "Culture, motivation, and engagement management",
    "Sales forecasting, pipeline management, strategic planning",
  ]

  const advancedModules = [
    "Negotiation & influencing skills",
    "Client relationship management",
    "Presentation & storytelling for business impact",
    "Analytical decision-making & problem-solving",
  ]

  const whoICs = [
    "New hires ramping into sales or marketing roles",
    "ICs who need structure, accountability, and reps",
    "Teams building core communication and prospecting skills",
  ]

  const whoMgrs = [
    "Leaders scaling multi-role GTM teams",
    "Managers designing processes and reporting systems",
    "Teams aiming for consistent, measurable performance",
  ]

  const whyChoose = [
    ["Role-Specific Guidance", "Tailored sessions for every level and function"],
    ["Continuous Mentoring", "Skills reinforced every month for lasting impact"],
    ["Performance-Linked Learning", "Clear connection between learning & results"],
    ["Scalable Programs", "For teams of any size across locations"],
    ["Strategic Leadership Development", "Prepares managers to lead high-performing teams"],
  ]

  return (
    <main className="bg-white">
      <Header/>
      {/* HERO - tech gradient with grid overlay */}
      <header className="relative overflow-hidden bg-gradient-to-br from-purple-800 via-fuchsia-700 to-violet-800 text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 mix-blend-overlay">
          <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:28px_28px]" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 relative">
          <span className="inline-block rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-purple-50">
            Mentoring & Capability-Building
          </span>
          <h1 className="mt-4 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Continuous Learning. Real Growth. Measurable Performance.
          </h1>
          <p className="mt-3 max-w-2xl text-pretty text-purple-100">
            Mentoring isn’t a one-time event — it’s a continuous journey. Our monthly, role-specific programs turn
            learning into measurable performance across your teams.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="/contact" className="inline-flex">
              <button className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                Schedule Intro Call
              </button>
            </a>
            <a href="/tickets/raise" className="inline-flex">
              <button className="inline-flex items-center justify-center rounded-lg border border-white/80 bg-transparent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70">
                Ask 1 Free Question
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* HOW IT WORKS - soft light section */}
      <section className="border-t border-slate-200 bg-purple-50/60 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">How It Works</h2>
          <p className="mt-2 text-slate-700">
            We deliver ongoing mentoring to ensure knowledge is applied, skills are honed, and business results improve.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {itemsHow.map((text, i) => (
              <div key={i} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                  <p className="text-sm text-slate-800">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-md border border-purple-200 bg-purple-100/60 p-4 text-purple-900">
            <p className="text-sm">
              Outcome: Continuous growth, stronger performance, and a durable culture of learning.
            </p>
          </div>
        </div>
      </section>

      {/* ROLE-BASED MENTORING - clean white */}
      <section className="bg-white py-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {/* Junior Executives */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <GroupIcon className="text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-900">Junior Executives Mentoring</h3>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Build a solid foundation in sales & marketing. Learn fast, execute better, and deliver results.
            </p>
            <ul className="mt-4 grid list-none gap-2">
              {juniorExec.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-800">
                  <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md border border-purple-200 bg-purple-100/60 p-3 text-purple-900">
              <p className="text-sm">Impact: Faster ramp-up, better execution, higher contribution to revenue.</p>
            </div>
          </div>

          {/* Managers */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ManageAccountsIcon className="text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-900">Sales & Marketing Managers Mentoring</h3>
            </div>
            <p className="mt-2 text-sm text-slate-700">
              Develop leaders who drive performance across teams with strategic, leadership, and operational
              capabilities.
            </p>
            <ul className="mt-4 grid list-none gap-2">
              {mgrMentor.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-800">
                  <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md border border-purple-200 bg-purple-100/60 p-3 text-purple-900">
              <p className="text-sm">Impact: High-performing teams, better decisions, improved outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CADENCE & FORMAT - light stripes */}
      <section className="border-t border-slate-200 bg-[linear-gradient(180deg,#fbf8ff_0%,#f3eaff_100%)] bg-[length:100%_100%] [background-image:repeating-linear-gradient(45deg,rgba(124,58,237,0.06)_0,rgba(124,58,237,0.06)_2px,transparent_2px,transparent_12px)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">Cadence & Format</h2>
          <p className="mt-2 text-slate-700">
            Designed to fit your operating rhythm while maximizing skill adoption and measurable performance.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900">
                <ScheduleIcon className="text-purple-600" />
                <p className="text-sm font-semibold">Monthly Sessions</p>
              </div>
              <p className="mt-1 text-sm text-slate-700">60–90 minutes per session with focused practice blocks.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900">
                <GroupIcon className="text-purple-600" />
                <p className="text-sm font-semibold">1:1 & Small Groups</p>
              </div>
              <p className="mt-1 text-sm text-slate-700">Blend of individual coaching and role-based cohorts.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900">
                <CheckCircleIcon className="mt-0.5 text-purple-600" />
                <p className="text-sm font-semibold">Actionable Artifacts</p>
              </div>
              <p className="mt-1 text-sm text-slate-700">Checklists, scripts, and templates for immediate use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITY-BUILDING - light panel */}
      <section className="bg-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <SchoolIcon className="text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">Capability-Building Beyond Role-Specific Skills</h2>
          </div>
          <p className="mt-2 text-sm text-slate-700">
            From individual contributors to managers — we cover advanced modules that compound capability.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
            {advancedModules.map((item, i) => (
              <div key={i} className="rounded-md bg-white p-3 shadow-sm">
                <div className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                  <span className="text-sm text-slate-800">{item}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md border border-purple-200 bg-purple-100/60 p-3 text-purple-900">
            <p className="text-sm">
              Outcome: Teams that are skilled, strategically capable, adaptable, and ready for growth challenges.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IT’S FOR - white with bordered cards */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-900">Who It’s For</h2>
          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <GroupIcon className="text-purple-600" />
                <p className="text-sm font-semibold text-slate-900">Junior Executives & ICs</p>
              </div>
              <ul className="mt-3 grid list-none gap-2">
                {whoICs.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2">
                <ManageAccountsIcon className="text-purple-600" />
                <p className="text-sm font-semibold text-slate-900">Sales & Marketing Managers</p>
              </div>
              <ul className="mt-3 grid list-none gap-2">
                {whoMgrs.map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESS & SUCCESS - subtle gradient */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-white to-purple-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <TimelineIcon className="text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">Tracking Progress & Measuring Success</h2>
          </div>
          <ul className="mt-4 grid list-none gap-2">
            {[
              "Learning applied in real tasks",
              "Improvement in individual performance metrics",
              "Team contribution to revenue and targets",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-800">
                <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 rounded-md border border-purple-200 bg-purple-100/60 p-3 text-purple-900">
            <p className="text-sm">Result: Mentoring becomes a performance accelerator—not just a training exercise.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL - tinted panel */}
      <section className="bg-purple-100 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <blockquote className="rounded-2xl border border-purple-200 bg-purple-50 p-6 text-slate-800 shadow-sm">
            <p className="text-base leading-relaxed">
              “Within three months, our junior team was driving qualified pipeline independently, and managers had a
              reliable operating rhythm. The mentoring program directly lifted our conversion rates and forecast
              accuracy.”
            </p>
            <footer className="mt-3 text-sm text-purple-900">VP Revenue Operations, B2B SaaS</footer>
          </blockquote>
        </div>
      </section>

      {/* WHY CHOOSE - white with feature cards */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-slate-900">Why Choose Our Mentoring Programs</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
            {whyChoose.map(([title, desc], i) => (
              <div key={i} className="rounded-lg bg-white p-4 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-start gap-3">
                  <VerifiedIcon className="mt-0.5 text-purple-600" fontSize="small" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{title}</p>
                    <p className="text-sm text-slate-700">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA - bold gradient */}
      <section id="cta" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-gradient-to-r from-purple-800 via-fuchsia-700 to-violet-800 px-6 py-8 text-white shadow-lg md:px-10">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h3 className="text-balance text-2xl font-semibold">Transform Learning into Measurable Growth</h3>
                <p className="mt-1 text-purple-100">
                  From junior executives to managers, turn skills into performance and build a culture of continuous
                  improvement.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <a href="/contact" className="inline-flex">
                  <button className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800">
                    Schedule Intro Call
                  </button>
                </a>
                <a href="/tickets/raise" className="inline-flex">
                  <button className="inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800">
                    Ask 1 Free Question
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}
