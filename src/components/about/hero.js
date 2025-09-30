import Section from "./section"

export default function Hero() {
  return (
    <Section id="hero">
      <div className="flex flex-col items-start gap-6 rounded-lg border border-border bg-card p-6 md:p-10">
        <h1 className="text-pretty text-3xl font-bold tracking-tight md:text-5xl">
          We exist to make revenue success predictable.
        </h1>
        <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Hiring, training, and market intelligence are fragmented. Organizations juggle multiple vendors, chaotic
          systems, and scattered truths—leading to wasted effort, low productivity, and slow growth.
          <br className="hidden md:block" />
          <span className="block mt-3">
            Yombly unifies these critical functions into one platform for revenue productivity.
          </span>
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Talk to Us
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </Section>
  )
}
