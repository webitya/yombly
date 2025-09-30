const items = [
  {
    title: "30+ Quality Checks",
    desc: "From domain expertise to cultural fit, every candidate is rigorously vetted.",
  },
  {
    title: "Sales-Specific Assessments",
    desc: "Negotiation, prospecting, closing, and digital skills tailored to GTM realities.",
  },
  {
    title: "Market-Readiness Index",
    desc: "Ensures candidates can perform in today’s competitive landscape.",
  },
  {
    title: "Productivity Insights Report",
    desc: "Pre-hire insights because we’re confident in the outcomes.",
  },
]

export default function Advantage() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">The MarketCrew Advantage</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm"
              >
                ✓
              </span>
              <div>
                <h3 className="font-medium">{it.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
