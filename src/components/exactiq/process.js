import Section from "./section"

const steps = [
  {
    title: "Market Listening",
    desc: "Extract data from real conversations, behaviors, and signals.",
  },
  {
    title: "Smart Synthesis",
    desc: "Clean, validate, and connect scattered insights.",
  },
  {
    title: "Action Mapping",
    desc: "Convert raw intelligence into sales/marketing playbooks.",
  },
  {
    title: "Delivery",
    desc: "Insights presented as clear, executive-ready dashboards/reports.",
  },
]

export default function Process() {
  return (
    <Section id="process" title="How ExactIQ Works" subtitle="A clear flow from raw signal to executive-ready insight.">
      <div className="grid gap-4 md:grid-cols-4">
        {steps.map((s, idx) => (
          <div key={s.title} className="rounded-md border border-border bg-card p-4">
            <div className="text-sm font-semibold text-foreground">
              {idx + 1}. {s.title}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <img
          src="/process-cycle-listen-synthesize-map-deliver.jpg"
          alt="Cycle diagram showing Listen → Synthesize → Map → Deliver"
          className="w-full rounded-md border border-border"
        />
      </div>
    </Section>
  )
}
