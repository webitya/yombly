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
  return (
    <main className="bg-white">
      <Header />
      {/* Hero */}
      <header className="bg-gradient-to-br from-purple-800 via-fuchsia-700 to-violet-800 text-white">
        <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Mentoring & Capability-Building
          </h1>
          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Continuous Learning. Real Growth. Measurable Performance.
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-fuchsia-100">
            Mentoring isn’t a one-time event — it’s a continuous journey. Our monthly, role-specific programs turn
            learning into measurable performance across your teams.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-purple-800 shadow-sm transition hover:bg-fuchsia-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Schedule Intro Call
            </a>
            <a
              href="#leadership-audit"
              className="inline-flex items-center justify-center rounded-md bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Ask 1 Free Question
            </a>
          </div>
        </div>
      </header>

      {/* How It Works */}
      <section className="mx-auto  px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">How It Works</h2>
          <p className="mt-2 text-slate-600">
            We deliver ongoing mentoring to ensure knowledge is applied, skills are honed, and business results improve.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Role-specific mentoring sessions every month",
              "Practical exercises, real-life problem-solving, and actionable takeaways",
              "Progress tracking to measure skill improvement and business impact",
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                <p className="text-sm text-slate-800">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md bg-purple-50 p-4 text-purple-800">
            <p className="text-sm">
              Outcome: Continuous growth, stronger performance, and a durable culture of learning.
            </p>
          </div>
        </div>
      </section>

      {/* Role-Based Mentoring */}
      <section className="mx-auto  px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Junior Executives */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <GroupIcon className="text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-900">Junior Executives Mentoring</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Build a solid foundation in sales & marketing. Learn fast, execute better, and deliver results.
            </p>
            <ul className="mt-4 grid gap-2">
              {[
                "Outbound lead generation & account management",
                "Time management, goal execution & prioritization",
                "Sales conversation building & decision-maker outreach",
                "Email, content writing & effective communication",
                "Prospecting, probing, and strategic planning",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-800">
                  <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md bg-purple-50 p-3 text-purple-800">
              <p className="text-sm">Impact: Faster ramp-up, better execution, higher contribution to revenue.</p>
            </div>
          </div>

          {/* Sales & Marketing Managers */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <ManageAccountsIcon className="text-purple-600" />
              <h3 className="text-lg font-semibold text-slate-900">Sales & Marketing Managers Mentoring</h3>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Develop leaders who drive performance across teams with strategic, leadership, and operational
              capabilities.
            </p>
            <ul className="mt-4 grid gap-2">
              {[
                "Team management & coaching skills",
                "Hiring & firing strategy, role allocation, succession planning",
                "Process design, reporting system, KPI tracking",
                "Culture, motivation, and engagement management",
                "Sales forecasting, pipeline management, strategic planning",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-slate-800">
                  <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-md bg-purple-50 p-3 text-purple-800">
              <p className="text-sm">Impact: High-performing teams, better decisions, improved outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cadence & Format */}
      <section className="mx-auto  px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Cadence & Format</h2>
          <p className="mt-2 text-slate-600">
            Designed to fit your operating rhythm while maximizing skill adoption and measurable performance.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900">
                <ScheduleIcon className="text-purple-600" />
                <p className="text-sm font-semibold">Monthly Sessions</p>
              </div>
              <p className="mt-1 text-sm text-slate-600">60–90 minutes per session with focused practice blocks.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900">
                <GroupIcon className="text-purple-600" />
                <p className="text-sm font-semibold">1:1 & Small Groups</p>
              </div>
              <p className="mt-1 text-sm text-slate-600">Blend of individual coaching and role-based cohorts.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <div className="flex items-center gap-2 text-slate-900">
                <CheckCircleIcon className="text-purple-600" />
                <p className="text-sm font-semibold">Actionable Artifacts</p>
              </div>
              <p className="mt-1 text-sm text-slate-600">Checklists, scripts, and templates for immediate use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability-Building Beyond Role-Specific */}
      <section className="mx-auto  px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <div className="flex items-center gap-2">
            <SchoolIcon className="text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">Capability-Building Beyond Role-Specific Skills</h2>
          </div>
          <p className="mt-2 text-sm text-slate-600">
            From individual contributors to managers — we cover advanced modules that compound capability.
          </p>
          <div className="mt-4 grid gap-2 md:grid-cols-2">
            {[
              "Negotiation & influencing skills",
              "Client relationship management",
              "Presentation & storytelling for business impact",
              "Analytical decision-making & problem-solving",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 rounded-md bg-white p-3 shadow-sm">
                <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                <span className="text-sm text-slate-800">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-md bg-purple-50 p-3 text-purple-800">
            <p className="text-sm">
              Outcome: Teams that are skilled, strategically capable, adaptable, and ready for growth challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Who It’s For */}
      <section className="mx-auto  px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-900">Who It’s For</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-2">
                <GroupIcon className="text-purple-600" />
                <p className="text-sm font-semibold text-slate-900">Junior Executives & ICs</p>
              </div>
              <ul className="mt-3 grid gap-2">
                {[
                  "New hires ramping into sales or marketing roles",
                  "ICs who need structure, accountability, and reps",
                  "Teams building core communication and prospecting skills",
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircleIcon className="mt-0.5 text-purple-600" fontSize="small" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-slate-200 p-4">
              <div className="flex items-center gap-2">
                <ManageAccountsIcon className="text-purple-600" />
                <p className="text-sm font-semibold text-slate-900">Sales & Marketing Managers</p>
              </div>
              <ul className="mt-3 grid gap-2">
                {[
                  "Leaders scaling multi-role GTM teams",
                  "Managers designing processes and reporting systems",
                  "Teams aiming for consistent, measurable performance",
                ].map((t, i) => (
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

      {/* Tracking Progress & Measuring Success */}
      <section className="mx-auto  px-4 pb-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2">
            <TimelineIcon className="text-purple-600" />
            <h2 className="text-xl font-semibold text-slate-900">Tracking Progress & Measuring Success</h2>
          </div>
          <ul className="mt-4 grid gap-2">
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
          <div className="mt-4 rounded-md bg-purple-50 p-3 text-purple-800">
            <p className="text-sm">Result: Mentoring becomes a performance accelerator—not just a training exercise.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Block */}
      <section className="mx-auto  px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-purple-50 p-6 sm:p-8">
          <blockquote className="text-slate-800">
            <p className="text-base leading-relaxed">
              “Within three months, our junior team was driving qualified pipeline independently, and managers had a
              reliable operating rhythm. The mentoring program directly lifted our conversion rates and forecast
              accuracy.”
            </p>
            <footer className="mt-4 text-sm text-purple-800">VP Revenue Operations, B2B SaaS</footer>
          </blockquote>
        </div>
      </section>

      {/* Why Choose Our Mentoring Programs */}
      <section className="mx-auto  px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-slate-900">Why Choose Our Mentoring Programs</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              ["Role-Specific Guidance", "Tailored sessions for every level and function"],
              ["Continuous Mentoring", "Skills reinforced every month for lasting impact"],
              ["Performance-Linked Learning", "Clear connection between learning & results"],
              ["Scalable Programs", "For teams of any size across locations"],
              ["Strategic Leadership Development", "Prepares managers to lead high-performing teams"],
            ].map(([title, desc], i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white p-4 shadow-sm">
                <VerifiedIcon className="mt-0.5 text-purple-600" fontSize="small" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{title}</p>
                  <p className="text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto  px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-r from-purple-800 via-fuchsia-700 to-violet-800 px-6 py-8 text-white md:px-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-balance text-2xl font-semibold">Transform Learning into Measurable Growth</h3>
              <p className="mt-1 text-fuchsia-100">
                From junior executives to managers, turn skills into performance and build a culture of continuous
                improvement.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:?subject=Schedule%20Intro%20Call%20-%20Mentoring%20Programs"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-purple-800 shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800"
              >
                Schedule Intro Call
              </a>
              <a
                href="mailto:?subject=Ask%201%20Free%20Question%20-%20Mentoring"
                className="inline-flex items-center justify-center rounded-md border border-white/80 bg-transparent px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-800"
              >
                Ask 1 Free Question
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
