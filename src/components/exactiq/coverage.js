import Section from "./section"

const features = [
  {
    title: "Buyer Intelligence",
    desc: "What customers really want, their objections, and budget signals.",
  },
  {
    title: "Competitor Mapping",
    desc: "Who’s winning, where, and why.",
  },
  {
    title: "Channel Effectiveness",
    desc: "Which GTM channels are yielding ROI.",
  },
  {
    title: "Pricing Trends",
    desc: "Detect underpricing/overpricing risks before they hit revenue.",
  },
  {
    title: "Sales Process Gaps",
    desc: "Identify productivity leaks in your funnel.",
  },
]

export default function Coverage() {
  return (
    <Section
      id="coverage"
      title="What ExactIQ Covers"
      subtitle="Five core areas that turn market noise into clear, revenue-driving action."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {features.map((f) => (
          <div key={f.title} className="rounded-md border border-border bg-card p-4">
            <h3 className="text-sm font-semibold text-foreground">{f.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
