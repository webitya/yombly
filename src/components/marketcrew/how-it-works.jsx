const steps = [
  {
    step: "01",
    title: "Define Success Profile",
    desc: "We map your Ideal Candidate Persona (ICP) based on sales goals, ATS, and your GTM model.",
  },
  {
    step: "02",
    title: "Deep-Screening Process",
    desc: "Behavioral, functional, and sales-scenario-based testing for every candidate.",
  },
  {
    step: "03",
    title: "Market Validation",
    desc: "We align candidate skills with real-world sales challenges in your industry.",
  },
  {
    step: "04",
    title: "Final Match & Onboarding",
    desc: "You don’t just get a hire — you get someone primed to contribute from Day 1.",
  },
]

export default function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold">How It Works</h2>
      <div className="mt-8 grid gap-4 md:grid-cols-4">
        {steps.map((s) => (
          <div key={s.step} className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Step {s.step}</span>
              <img src="/sales-process-icon.jpg" alt="Step icon" height={24} width={24} />
            </div>
            <h3 className="mt-3 font-medium">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 text-sm text-muted-foreground">
        Visual: a simple 4-step horizontal flow using the cards above.
      </div>
    </section>
  )
}
