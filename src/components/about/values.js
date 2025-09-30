import Section from "./section"

const values = [
  {
    title: "Clarity over chaos",
    desc: "We cut noise and give leaders data they can act on.",
  },
  {
    title: "Performance-first",
    desc: "Every hire, training, and insight ties back to revenue.",
  },
  {
    title: "Future-ready teams",
    desc: "Sales never stands still—neither should your talent.",
  },
  {
    title: "Unified growth",
    desc: "No silos, no scattered vendors—just one source of truth.",
  },
]

export default function Values() {
  return (
    <Section id="values" title="Our Values">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
        {values.map((v) => (
          <div key={v.title} className="rounded-lg border border-border bg-card p-5">
            <h3 className="text-sm font-semibold">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
