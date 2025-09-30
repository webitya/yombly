import Section from "./section"

export default function Hero() {
  return (
    <Section id="hero">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
            ExactIQ: Real-World Market Intelligence, Zero Guesswork
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            ExactIQ delivers raw, accurate, and actionable intelligence from the market—helping you solve sales and
            marketing inefficiencies with 100% precision. We’ve already helped 100+ organizations cut through
            assumptions and unlock growth with insights that are ground-truth, not guesswork.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Get Market Intelligence
            </a>
            <a
              href="#impact"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              See a Sample Report
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="/abstract-data-pulse-radar-to-dashboard.jpg"
            alt="Abstract data pulse visual flowing into a clear dashboard"
            className="w-full rounded-md border border-border"
          />
        </div>
      </div>
    </Section>
  )
}
