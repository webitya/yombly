import Section from "./section"

export default function Highlights() {
  const items = [
    "Simple, repeatable systems for lead generation",
    "Streamlined account management",
    "Performance tracking that actually works",
    "6 months of support until results show",
  ]
  return (
    <Section className="bg-muted/30" subtitle="What you get, without fluff.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it} className="rounded-lg border border-border bg-background p-5">
            <p className="text-sm md:text-base">{it}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
