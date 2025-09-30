import Section from "./section"

function PhaseCard({ phase, title, points, duration }) {
  return (
    <div className="relative rounded-lg border border-border bg-background p-5">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wide opacity-70">{phase}</span>
        <span className="rounded-full border border-border px-2 py-1 text-xs opacity-80">{duration}</span>
      </div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed opacity-90">
        {points.map((p) => (
          <li key={p}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Phases() {
  return (
    <Section
      id="phases"
      title="Two Phases: Build → Scale"
      subtitle="We set the foundation in 90 days and then help your team scale the results over 6 months."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <PhaseCard
          phase="Phase 1"
          title="Build (90 Days)"
          duration="~90 days"
          points={[
            "Design and implement lead-gen process",
            "Define pipeline stages and hygiene rules",
            "Install reporting with north-star KPIs",
            "Enable weekly operating cadence",
          ]}
        />
        <PhaseCard
          phase="Phase 2"
          title="Scale (6 Months)"
          duration="6 months"
          points={[
            "Weekly problem-solving cycles to remove roadblocks",
            "Ongoing dashboard iteration and visibility",
            "Coaching for independent operations",
            "Change management to make it stick",
          ]}
        />
      </div>
    </Section>
  )
}
