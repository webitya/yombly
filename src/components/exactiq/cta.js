import Section from "./section"

export default function Cta() {
  return (
    <Section id="cta">
      <div className="rounded-md border border-border bg-card p-6 md:p-8">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Your market is talking. Are you listening?
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">
          Stop relying on assumptions—get the reality that drives results.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Request ExactIQ Demo"
          >
            Request ExactIQ Demo
          </a>
          <a
            href="#impact"
            className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Download Case Study"
          >
            Download Case Study
          </a>
        </div>
      </div>
    </Section>
  )
}
