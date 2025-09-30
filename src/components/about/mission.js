import Section from "./section"

export default function Mission() {
  return (
    <Section
      id="mission"
      title="Our Mission"
      subtitle="At Yombly, we’re on a mission to give organizations the clarity, talent, and intelligence they need to scale with confidence."
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        <ul className="list-disc space-y-2 pl-5 marker:text-primary">
          <li>Hire right-fit sales &amp; marketing talent</li>
          <li>Upskill teams with real-world, case-based learning</li>
          <li>Build performance management systems that actually drive results</li>
          <li>Access market intelligence that’s close to reality, not guesswork</li>
        </ul>
        <div className="rounded-lg border border-dashed border-border p-5">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why it matters</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Revenue teams deserve one source of truth. Yombly aligns hiring, training, and intelligence so leaders can
            act with clarity—and teams can focus on selling.
          </p>
        </div>
      </div>
    </Section>
  )
}
