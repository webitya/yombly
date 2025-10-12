
import ChecklistIcon from "@mui/icons-material/Checklist"
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined"
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined"
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined"
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined"
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined"
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined"
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined"
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined"
import Header from "@/components/header"
import Footer from "@/components/footer"

const steps = [
  {
    title: "Define Objectives & Outcomes",
    bullets: [
      "Align L&D to revenue goals",
      "Ramp new hires faster",
      "Improve conversion & average deal size",
      "Set measurable KPIs (conversion, ramp time, velocity)",
    ],
    Icon: FactCheckOutlinedIcon,
  },
  {
    title: "Skill & Competency Audit",
    bullets: [
      "Map roles across GTM (SDR, Sales, Marketing, etc.)",
      "Assess current skills & gaps",
      "Build a role-based skill matrix",
    ],
    Icon: InsightsOutlinedIcon,
  },
  {
    title: "Role‑Specific Learning Paths",
    bullets: [
      "Sales & Marketing fundamentals",
      "Advanced skills: ABM, nurturing, strategic storytelling",
      "Soft skills with clear progression levels",
    ],
    Icon: SchoolOutlinedIcon,
  },
  {
    title: "Build Learning Modules",
    bullets: [
      "Workshops, micro‑learning, simulations",
      "Shadowing, role plays, applied practice",
      "Tools training (CRM, LinkedIn, Apollo, automation)",
    ],
    Icon: LibraryBooksOutlinedIcon,
  },
  {
    title: "Training Calendar",
    bullets: [
      "Weekly/monthly cadence",
      "Rotate focus: skills, tools, alignment",
      "On‑the‑job coaching & peer learning",
    ],
    Icon: CalendarMonthOutlinedIcon,
  },
  {
    title: "Integrate with Performance",
    bullets: [
      "Link learning to KPIs & dashboards",
      "Monitor application in CRM/analytics",
      "Regular reviews & RCA for missed targets",
    ],
    Icon: TimelineOutlinedIcon,
  },
  {
    title: "Knowledge Repository",
    bullets: [
      "Centralize materials, templates, case studies",
      "Maintain recordings of workshops & calls",
      "Ensure easy access for new hires",
    ],
    Icon: StorageOutlinedIcon,
  },
  {
    title: "Continuous Mentorship",
    bullets: [
      "Peer‑to‑peer learning & buddy systems",
      "Mentors for high‑potential performers",
      "Quarterly content updates",
    ],
    Icon: GroupOutlinedIcon,
  },
  {
    title: "Measure & Optimize",
    bullets: [
      "Track ramp time, conversion, response time",
      "Collect participant feedback",
      "Iterate modules & paths based on outcomes",
    ],
    Icon: AutoGraphOutlinedIcon,
  },
  {
    title: "Scale & Institutionalize",
    bullets: [
      "Standardize in hiring & onboarding",
      "Train internal champions",
      "Document for repeatability & consistency",
    ],
    Icon: RocketLaunchOutlinedIcon,
  },
]

export default function LearningAndDevelopmentPage() {
  return (
    <main className="bg-white text-slate-900">
      <Header />

      {/* Inline blue corporate hero */}
      <section className="bg-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <span className="inline-flex w-fit items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
              Services
            </span>
            <h1 className="text-balance text-3xl font-bold leading-tight sm:text-4xl">
              Learning & Development Structure
            </h1>
            <p className="max-w-3xl text-pretty text-sm leading-relaxed text-blue-100 sm:text-base">
              A practical, performance‑linked L&D system that drives revenue outcomes, accelerates ramp‑up, and scales
              across teams.
            </p>
            <div className="mt-2">
              <a
                href="#get-playbook"
                className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-blue-700"
              >
                Get the Playbook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs text-slate-500">Target Reduction</p>
            <p className="mt-1 text-2xl font-bold tracking-tight">30–50%</p>
            <p className="text-xs text-slate-500">Ramp‑up time</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs text-slate-500">Increase</p>
            <p className="mt-1 text-2xl font-bold tracking-tight">+10–20%</p>
            <p className="text-xs text-slate-500">Sales conversion</p>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs text-slate-500">Improvement</p>
            <p className="mt-1 text-2xl font-bold tracking-tight">Faster</p>
            <p className="text-xs text-slate-500">Lead‑to‑deal velocity</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => {
            const Icon = s.Icon || ChecklistIcon
            return (
              <div
                key={i}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="h-5 w-5 text-blue-600" aria-hidden="true" />
                  </span>
                  <h2 className="text-base font-semibold">{s.title}</h2>
                </div>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-50">
                        <ChecklistIcon className="h-3.5 w-3.5 text-blue-600" aria-hidden="true" />
                      </span>
                      <span className="text-sm leading-6 text-pretty text-slate-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
          <h3 className="text-lg font-semibold text-slate-900">Key Principles</h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Practical, applied, revenue‑tied learning",
              "Mix learning + doing; theory alone fails",
              "Use data‑driven insights to refine continuously",
              "Link learning to recognition & incentives",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-600">
                  <span className="sr-only">Checked</span>
                  <ChecklistIcon className="h-3.5 w-3.5 text-white" aria-hidden="true" />
                </span>
                <span className="text-sm leading-6 text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="get-playbook" className="bg-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-lg font-semibold">Ready to operationalize L&D?</h4>
              <p className="text-sm text-blue-100">
                Get the end‑to‑end playbook and start improving ramp‑up, conversion, and velocity.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white focus-visible:ring-offset-blue-700"
            >
              Download Playbook
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
