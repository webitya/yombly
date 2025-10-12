"use client"

import BusinessCenterIcon from "@mui/icons-material/BusinessCenter"
import GroupsIcon from "@mui/icons-material/Groups"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"

const tracks = [
  {
    title: "Account Executives",
    icon: BusinessCenterIcon,
    points: [
      "Advanced discovery and problem mapping",
      "Mutual action plans and stage exit rigor",
      "Competitive strategy and ROI storytelling",
    ],
  },
  {
    title: "SDRs/BDRs",
    icon: GroupsIcon,
    points: [
      "ICP clarity and message-market fit",
      "Sequencing with purpose and intent",
      "Meeting quality and handoff excellence",
    ],
  },
  {
    title: "Frontline Managers",
    icon: ManageAccountsIcon,
    points: [
      "Deal inspection excellence and coaching",
      "Coverage planning and territory strategy",
      "Performance one-on-ones and enablement loops",
    ],
  },
]

export default function Tracks() {
  return (
    <section id="tracks" className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <h2 className="text-pretty text-2xl font-semibold md:text-3xl">Role-aligned tracks</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          Modular paths tuned for each revenue role—focused on behaviors that move numbers.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {tracks.map((t) => (
            <article
              key={t.title}
              className="rounded-lg border border-slate-200 bg-white p-5 transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-amber-500 text-white">
                  <t.icon fontSize="small" />
                </div>
                <h3 className="text-lg font-semibold">{t.title}</h3>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                {t.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
