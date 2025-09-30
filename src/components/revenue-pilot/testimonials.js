import Section from "./section"

export default function Testimonials() {
  const t = [
    {
      quote: "We finally stopped guessing. The weekly cadence and dashboards changed how we operate.",
      author: "Growth Lead, B2B SaaS",
    },
    {
      quote: "Deals no longer slip. The pipeline rules and coaching gave us predictable movement.",
      author: "Head of Sales, Services Firm",
    },
  ]
  return (
    <Section id="testimonials" title="What Clients Say">
      <div className="grid gap-6 md:grid-cols-2">
        {t.map((x, idx) => (
          <figure key={idx} className="rounded-lg border border-border bg-background p-5">
            <blockquote className="text-pretty text-sm md:text-base">&ldquo;{x.quote}&rdquo;</blockquote>
            <figcaption className="mt-3 text-xs opacity-70">{x.author}</figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}
