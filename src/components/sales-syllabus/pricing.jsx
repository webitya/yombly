"use client"

import Link from "next/link"
import CreditCardRounded from "@mui/icons-material/CreditCardRounded"
import CheckRounded from "@mui/icons-material/CheckRounded"

const tiers = [
  {
    name: "Cohort Lite",
    features: ["Select cases", "Community access", "Weekly review call"],
    link: "/contact?plan=lite",
  },
  {
    name: "Cohort Pro",
    features: [
      "All cases",
      "Mentor debriefs",
      "Assignments + feedback",
      "Implementation blueprint",
    ],
    highlight: true,
    link: "/contact?plan=pro",
  },
  {
    name: "Team Plan",
    features: [
      "Role-specific tracks",
      "Private debriefs",
      "On-call guidance",
    ],
    link: "/contact?plan=team",
  },
]

export default function Plans() {
  return (
    <section aria-labelledby="plans-title" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <CreditCardRounded className="text-primary" />
          <h2 id="plans-title" className="text-2xl font-semibold md:text-3xl">
            Plans
          </h2>
        </div>
        <p className="mt-2 text-muted-foreground">
          Flexible programs to match your learning journey and team needs.
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "rounded-2xl border p-6 shadow-sm transition hover:shadow-md",
                t.highlight
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-foreground",
              ].join(" ")}
            >
              <h3 className="text-lg font-semibold">{t.name}</h3>

              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckRounded
                      fontSize="small"
                      className={t.highlight ? "text-primary-foreground" : "text-primary"}
                    />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={t.link}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition hover:opacity-90 
                ${t.highlight ? "bg-white text-primary" : "bg-primary text-primary-foreground"}`}
              >
                Choose {t.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
