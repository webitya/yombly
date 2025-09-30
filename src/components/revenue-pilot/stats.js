import Section from "./section"

export default function Stats() {
  const items = [
    { k: "90 Days", v: "to operating engine" },
    { k: "6 Months", v: "hands-on scale support" },
    { k: "100%", v: "clarity on ROI drivers" },
    { k: "Weekly", v: "operating cadence" },
  ]
  return (
    <Section className="bg-muted/30" subtitle="Proof-oriented operating metrics, not vanity numbers.">
      <div className="grid gap-4 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.k} className="rounded-lg border border-border bg-background p-6 text-center">
            <div className="text-2xl font-semibold">{it.k}</div>
            <div className="mt-1 text-sm opacity-80">{it.v}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
