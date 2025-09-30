import Section from "./section"

export default function Cta() {
  return (
    <Section
      id="book"
      className="border-t border-border"
      title="Book a Discovery Call"
      subtitle="Let’s show you how Revenue Pilot makes your growth predictable."
    >
      <div className="flex flex-col items-start justify-between gap-4 rounded-lg border border-border bg-background p-6 md:flex-row md:items-center">
        <div>
          <p className="text-pretty opacity-90">
            If your sales still depends on effort, luck, or the founder’s push — it’s time to fix the engine.
          </p>
        </div>
        <a
          href="#top"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
        >
          Get Started
        </a>
      </div>
    </Section>
  )
}
