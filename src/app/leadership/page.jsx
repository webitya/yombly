
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import InsightsIcon from "@mui/icons-material/Insights"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import GroupsIcon from "@mui/icons-material/Groups"
import ScheduleIcon from "@mui/icons-material/Schedule"
import VerifiedIcon from "@mui/icons-material/Verified"
import TimelineIcon from "@mui/icons-material/Timeline"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function LeadershipDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Header />
      {/* Hero */}
      <header className="bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/30 px-3 py-1 text-sm font-medium">
            <VerifiedIcon fontSize="small" className="text-white" />
            <span>12-Month Leadership Development</span>
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Build Your Next Leaders — Transform Managers into Strategic, Accountable, Growth-Focused Leaders
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-blue-100">
            Designed for organizations scaling from ₹15 Cr to ₹100 Cr. Equip high-potential managers to drive revenue,
            scale operations independently, and make founder-level decisions with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Request Program Brochure
            </a>
            <a
              href="#leadership-audit"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Schedule a Leadership Audit
            </a>
          </div>
        </div>
      </header>

      {/* KPI Stats */}
      <section aria-labelledby="kpi-heading" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 id="kpi-heading" className="sr-only">
          Program KPIs
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <TrendingUpIcon className="text-blue-600" />
              <p className="text-sm font-medium text-slate-500">Revenue-Focused Projects</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">Quarterly</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <ScheduleIcon className="text-blue-600" />
              <p className="text-sm font-medium text-slate-500">1:1 Mentoring</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">Monthly</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <GroupsIcon className="text-blue-600" />
              <p className="text-sm font-medium text-slate-500">HiPo Identification</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">2–3 Managers</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <div className="flex items-center gap-3">
              <FactCheckIcon className="text-blue-600" />
              <p className="text-sm font-medium text-slate-500">Founder Reviews</p>
            </div>
            <p className="mt-3 text-2xl font-bold text-slate-900">Quarterly</p>
          </div>
        </div>
      </section>

      {/* Overview + Who it's for */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <LeaderboardIcon className="text-blue-600" />
              Program Overview
            </h2>
            <p className="mt-3 text-slate-600">
              Over 12 months, we combine structured learning, practical exposure, and personalized mentoring to
              transform managers into business leaders capable of strategic thinking and operational execution.
            </p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-5 text-slate-700">
              <li>Structured curriculum across strategy, finance, and leadership</li>
              <li>Real-world projects aligned to revenue and business KPIs</li>
              <li>Monthly 1:1 and group mentoring with experienced leaders</li>
            </ul>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <AssignmentTurnedInIcon className="text-blue-600" />
              Who It’s For
            </h2>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                <p className="text-slate-700">High-potential managers ready for leadership roles</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                <p className="text-slate-700">Organizations building a self-sustaining growth engine</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-blue-600" />
                <p className="text-slate-700">Founders who want to delegate with confidence</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-slate-900">Program Deliverables</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <FactCheckIcon className="text-blue-600" />
              1) Leadership Audit
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Identify 2–3 high-potential managers</li>
              <li>Data-driven assessments of leadership readiness</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <TimelineIcon className="text-blue-600" />
              2) Capability Development
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Strategy formulation and execution</li>
              <li>P&amp;L management and financial decision-making</li>
              <li>Negotiation and stakeholder management</li>
              <li>Growth mindset and adaptive leadership</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <TrendingUpIcon className="text-blue-600" />
              3) On-the-Job Projects
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Quarterly revenue-focused assignments</li>
              <li>Practical projects aligned to business KPIs</li>
              <li>Feedback loops to refine leadership style</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <GroupsIcon className="text-blue-600" />
              4) Mentorship &amp; Coaching
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Monthly 1:1 mentoring sessions</li>
              <li>Group mentoring and peer learning</li>
              <li>Personalized development plans</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <AssignmentTurnedInIcon className="text-blue-600" />
              5) Founder Alignment
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Quarterly review sessions with founders</li>
              <li>Track delegation, accountability, and decision-making</li>
              <li>Build trust for independent operations</li>
            </ul>
          </div>

          <div className="rounded-lg border border-slate-200 bg-white p-6">
            <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
              <InsightsIcon className="text-blue-600" />
              Program Outcome
            </h3>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
              <li>Leaders who drive revenue and results</li>
              <li>Managers skilled in strategy and operations</li>
              <li>A leadership pipeline that supports long-term growth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-slate-900">How the 12-Month Journey Works</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-4">
          {[
            { step: "Q1", title: "Leadership Audit", desc: "Identify HiPos and build development plans." },
            { step: "Q2", title: "Capability Build", desc: "Strategy, P&L, stakeholder management." },
            { step: "Q3", title: "Revenue Projects", desc: "Execute assignments linked to KPIs." },
            { step: "Q4", title: "Ownership Transfer", desc: "Founder reviews and independence." },
          ].map((s, i) => (
            <div key={i} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">{s.step}</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Program: Feature → Benefit */}
      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-slate-900">Why Choose Our Program</h2>
        <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
          <div className="grid grid-cols-1 bg-slate-50 text-sm font-semibold text-slate-700 sm:grid-cols-2">
            <div className="px-4 py-3">Feature</div>
            <div className="px-4 py-3">Benefit</div>
          </div>
          <div className="divide-y divide-slate-200 text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="px-4 py-3">12-Month Structured Journey</div>
              <div className="px-4 py-3">Balanced learning, practice, and mentoring</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="px-4 py-3">High-Potential Identification</div>
              <div className="px-4 py-3">Focus resources on managers who can scale</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="px-4 py-3">Revenue-Focused Projects</div>
              <div className="px-4 py-3">Apply learning directly to business outcomes</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="px-4 py-3">1:1 Mentoring &amp; Group Coaching</div>
              <div className="px-4 py-3">Personalized guidance for faster growth</div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="px-4 py-3">Founder Alignment &amp; Ownership Transfer</div>
              <div className="px-4 py-3">Build trust and autonomy in your leadership team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <p className="text-pretty text-lg text-slate-800">
            “Our managers now think and act like business leaders. The structured journey, real projects, and founder
            alignment helped us delegate and scale without losing momentum.”
          </p>
          <p className="mt-4 text-sm font-medium text-slate-600">— Founder, Growth-Stage Company</p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-blue-600 p-8 text-white sm:p-10">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl">Ready to Build Your Next Leaders?</h2>
          <p className="mt-2 max-w-2xl text-blue-100">
            Identify your next set of leaders and put them on a 12-month transformation journey.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Request Program Brochure
            </a>
            <a
              id="leadership-audit"
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Schedule a Leadership Audit
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
