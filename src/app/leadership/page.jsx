import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn"
import InsightsIcon from "@mui/icons-material/Insights"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import FactCheckIcon from "@mui/icons-material/FactCheck"
import GroupsIcon from "@mui/icons-material/Groups"
import ScheduleIcon from "@mui/icons-material/Schedule"
import VerifiedIcon from "@mui/icons-material/Verified"
import TimelineIcon from "@mui/icons-material/Timeline"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
import Header from "@/components/header"
import Footer from "@/components/footer"

function SiteHeader() {
  return (
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-40 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-sky-600 text-white text-sm font-bold">
            LD
          </span>
          <span className="text-sm font-semibold text-slate-800">Leadership Dev</span>
        </a>
        <nav className="hidden sm:flex items-center gap-5 text-sm">
          <a href="#overview" className="text-slate-600 hover:text-slate-900 transition">
            Overview
          </a>
          <a href="#deliverables" className="text-slate-600 hover:text-slate-900 transition">
            Deliverables
          </a>
          <a href="#timeline" className="text-slate-600 hover:text-slate-900 transition">
            Timeline
          </a>
          <a href="#why" className="text-slate-600 hover:text-slate-900 transition">
            Why Us
          </a>
          <a
            href="#cta"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-3 py-1.5 text-white hover:bg-slate-800 transition"
          >
            <VerifiedIcon fontSize="small" />
            <span>Get Brochure</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="w-full bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-300">© {new Date().getFullYear()} Leadership Development Program</p>
          <div className="text-xs text-slate-400">Built with soft colors and accessible UI.</div>
        </div>
      </div>
    </footer>
  )
}

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-white text-slate-900">
      <Header/>

      {/* Hero - Sky */}
      <section className="bg-sky-600 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium ring-1 ring-white/25">
            <VerifiedIcon fontSize="small" className="text-white" />
            <span>12-Month Leadership Development</span>
          </div>
          <h1 className="mt-6 text-balance text-3xl font-bold leading-tight sm:text-4xl">
            Transform Managers into Strategic, Accountable, Growth-Focused Leaders
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-sky-100">
            For organizations scaling from ₹15 Cr to ₹100 Cr. Equip high-potential managers to drive revenue, scale
            operations, and make founder-level decisions with confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Request Program Brochure
            </a>
            <a
              href="#leadership-audit"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Schedule a Leadership Audit
            </a>
          </div>
        </div>
      </section>

      {/* KPIs - Sky Tint */}
      <section aria-labelledby="kpi-heading" className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 id="kpi-heading" className="sr-only">
            Program KPIs
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3">
                <TrendingUpIcon className="text-sky-600" />
                <p className="text-sm font-medium text-slate-500">Revenue-Focused Projects</p>
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">Quarterly</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3">
                <ScheduleIcon className="text-sky-600" />
                <p className="text-sm font-medium text-slate-500">1:1 Mentoring</p>
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">Monthly</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3">
                <GroupsIcon className="text-sky-600" />
                <p className="text-sm font-medium text-slate-500">HiPo Identification</p>
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">2–3 Managers</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <div className="flex items-center gap-3">
                <FactCheckIcon className="text-sky-600" />
                <p className="text-sm font-medium text-slate-500">Founder Reviews</p>
              </div>
              <p className="mt-3 text-2xl font-bold text-slate-900">Quarterly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + Who - Emerald */}
      <section id="overview" className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <LeaderboardIcon className="text-emerald-600" />
                Program Overview
              </h2>
              <p className="mt-3 text-slate-700">
                A 12-month journey blending structured learning, on-the-job application, and personalized mentoring to
                build strategic, execution-ready leaders.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                <li>Curriculum across strategy, finance, and leadership</li>
                <li>Real projects aligned to revenue and business KPIs</li>
                <li>Monthly 1:1 and group mentoring with experts</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
                <AssignmentTurnedInIcon className="text-emerald-600" />
                Who It’s For
              </h2>
              <ul className="mt-3 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  <p className="text-slate-700">High-potential managers ready for leadership</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  <p className="text-slate-700">Teams building a self-sustaining growth engine</p>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-600" />
                  <p className="text-slate-700">Founders who want to delegate with confidence</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables - Rose */}
      <section id="deliverables" className="bg-rose-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-900">Program Deliverables</h2>
          <div className="mt-4 grid gap-6 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <FactCheckIcon className="text-rose-600" />
                1) Leadership Audit
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Identify 2–3 high-potential managers</li>
                <li>Data-driven readiness assessments</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <TimelineIcon className="text-rose-600" />
                2) Capability Development
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Strategy formulation and execution</li>
                <li>P&amp;L and financial decision-making</li>
                <li>Negotiation and stakeholder management</li>
                <li>Growth mindset and adaptive leadership</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <TrendingUpIcon className="text-rose-600" />
                3) On-the-Job Projects
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Quarterly revenue-focused assignments</li>
                <li>Practical projects tied to KPIs</li>
                <li>Feedback loops to refine leadership style</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <GroupsIcon className="text-rose-600" />
                4) Mentorship &amp; Coaching
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Monthly 1:1 mentoring</li>
                <li>Group coaching and peer learning</li>
                <li>Personalized development plans</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <AssignmentTurnedInIcon className="text-rose-600" />
                5) Founder Alignment
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Quarterly review with founders</li>
                <li>Track delegation and accountability</li>
                <li>Build trust for independent operations</li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm hover:shadow transition">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <InsightsIcon className="text-rose-600" />
                Program Outcome
              </h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700">
                <li>Leaders who drive revenue and results</li>
                <li>Managers skilled in strategy and operations</li>
                <li>A leadership pipeline for long-term growth</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline - Sky */}
      <section id="timeline" className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-900">How the 12-Month Journey Works</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {[
              { step: "Q1", title: "Leadership Audit", desc: "Identify HiPos and build plans." },
              { step: "Q2", title: "Capability Build", desc: "Strategy, P&L, stakeholder mgmt." },
              { step: "Q3", title: "Revenue Projects", desc: "Execute assignments linked to KPIs." },
              { step: "Q4", title: "Ownership Transfer", desc: "Founder reviews and independence." },
            ].map((s, i) => (
              <div key={i} className="rounded-lg bg-white p-5 shadow-sm hover:shadow transition">
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">{s.step}</p>
                <h3 className="mt-2 text-base font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose - Emerald */}
      <section id="why" className="bg-emerald-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-slate-900">Why Choose Our Program</h2>
          <div className="mt-4 overflow-hidden rounded-lg bg-white shadow-sm">
            <div className="grid grid-cols-1 bg-emerald-100/70 text-sm font-semibold text-emerald-900 sm:grid-cols-2">
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
        </div>
      </section>

      {/* Testimonial - Slate */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-white p-6 shadow-sm sm:p-8">
            <p className="text-pretty text-lg text-slate-800">
              “Our managers now think and act like business leaders. The structured journey, real projects, and founder
              alignment helped us delegate and scale without losing momentum.”
            </p>
            <p className="mt-4 text-sm font-medium text-slate-600">— Founder, Growth-Stage Company</p>
          </div>
        </div>
      </section>

      {/* CTA - Deeper Sky */}
      <section id="cta" className="bg-sky-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-balance text-2xl font-bold sm:text-3xl">Ready to Build Your Next Leaders?</h2>
          <p className="mt-2 max-w-2xl text-sky-100">
            Identify your next set of leaders and put them on a 12-month transformation journey.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-sky-700 shadow-sm transition hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Request Program Brochure
            </a>
            <a
              id="leadership-audit"
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              Schedule a Leadership Audit
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg ring-1 ring-sky-500/30 transition hover:bg-sky-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
      >
        <ArrowUpwardIcon fontSize="small" />
      </a>

     <Footer/>
    </main>
  )
}
