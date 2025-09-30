import RouteRounded from "@mui/icons-material/RouteRounded"
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded"

const steps = [
  {
    title: "Diagnostic & Goal Mapping",
    desc: "Identify your current decision-making gaps, set learning goals.",
  },
  {
    title: "Case-Based Learning Modules",
    desc: "Go-to-Market, Customer Acquisition, Messaging, Pricing, Funnel, Scaling Teams.",
  },
  {
    title: "Real Assignments + Simulations",
    desc: "Put theory into practice. Simulate solving real problems with feedback.",
  },
  {
    title: "Mentorship & Debriefs",
    desc: "Weekly mentor sessions; peer review; live feedback.",
  },
  {
    title: "Implementation Blueprint",
    desc: "Leave with a blueprint to implement in your organization.",
  },
]

export default function Journey() {
  return (
    <section aria-labelledby="journey-title" className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <RouteRounded className="text-primary" />
          <h2 id="journey-title" className="text-2xl font-semibold md:text-3xl">
            Learning Journey / Program Flow
          </h2>
        </div>

        <ol className="mt-8 grid gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-lg border border-border bg-background p-5">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircleRounded fontSize="small" />
          <span>Includes weekly cadence and structured feedback loops.</span>
        </div>
      </div>
    </section>
  )
}
