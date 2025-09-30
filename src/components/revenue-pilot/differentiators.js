import Section from "./section"

export default function Differentiators() {
  const points = [
    "Not theory, not reports — tangible systems inside your business.",
    "Built in 90 days — not dragged out for years.",
    "Backed by 6 months of support — so implementation sticks.",
  ]
  return (
    <Section id="different" title="What Makes Revenue Pilot Different">
      <div className="grid gap-4">
        {points.map((p) => (
          <div key={p} className="rounded-lg border border-border bg-background p-5">
            <p className="text-sm md:text-base">{p}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
