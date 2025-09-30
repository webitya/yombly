import Section from "./section"

const steps = [
  {
    title: "Discover & Align",
    text: "Deep-dive into your current stack, pipeline, and goals to align on the growth model.",
  },
  {
    title: "Install & Enable",
    text: "Implement processes, dashboards, and weekly cadence. Train your team in real workflows.",
  },
  {
    title: "Operate & Scale",
    text: "Iterate through weekly problem-solving cycles and transition ownership to your team.",
  },
]

export default function Process() {
  return (
    <Section id="process" title="Our Process">
      <ol className="grid gap-6 md:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-lg border border-border p-5">
            <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-sm">
              {i + 1}
            </div>
            <h3 className="text-base font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm opacity-90">{s.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
