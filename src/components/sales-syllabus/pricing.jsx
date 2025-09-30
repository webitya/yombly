import CreditCardRounded from "@mui/icons-material/CreditCardRounded"
import CheckRounded from "@mui/icons-material/CheckRounded"

const tiers = [
  {
    name: "Cohort Lite",
    price: "$499",
    features: ["Select cases", "Community access", "Weekly review call"],
  },
  {
    name: "Cohort Pro",
    price: "$1,499",
    features: ["All cases", "Mentor debriefs", "Assignments + feedback", "Implementation blueprint"],
    highlight: true,
  },
  {
    name: "Team Plan",
    price: "Custom",
    features: ["Role-specific tracks", "Private debriefs", "On-call guidance"],
  },
]

export default function Pricing() {
  return (
    <section aria-labelledby="pricing-title" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <CreditCardRounded className="text-primary" />
          <h2 id="pricing-title" className="text-2xl font-semibold md:text-3xl">
            Pricing / Plans
          </h2>
        </div>
        <p className="mt-2 text-muted-foreground">
          Outline cohorts or subscription models. Early bird offers / money-back / satisfaction guarantee.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={[
                "rounded-lg border p-6 shadow-sm",
                t.highlight ? "border-primary bg-accent" : "border-border bg-card",
              ].join(" ")}
            >
              <h3 className="text-lg font-medium">{t.name}</h3>
              <div className="mt-2 text-3xl font-semibold">{t.price}</div>
              <ul className="mt-4 space-y-2">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckRounded fontSize="small" className="text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#apply"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90"
              >
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
