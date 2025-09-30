import Section from "./section"

function Pill({ children }) {
  return (
    <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground">{children}</span>
  )
}

export default function Journey() {
  return (
    <Section
      id="journey"
      title="From Fragmented to Unified"
      subtitle="Replace scattered vendors and chaotic systems with one platform for revenue productivity."
    >
      <div className="rounded-lg border border-border bg-card p-6">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Pill>Hiring vendor</Pill>
            <Pill>Training LMS</Pill>
            <Pill>Market intel</Pill>
            <Pill>Spreadsheets</Pill>
            <Pill>Point tools</Pill>
          </div>
          <div className="text-muted-foreground" aria-hidden="true">
            →
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">Yombly</span>
            <Pill>Unified truth</Pill>
            <Pill>Predictable growth</Pill>
            <Pill>Performance-first</Pill>
          </div>
        </div>
      </div>
    </Section>
  )
}
