import Section from "./section"

export default function Story() {
  return (
    <Section id="story" title="Our Story">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 text-sm leading-relaxed md:text-base">
          <p>
            We started Yombly after seeing the same pattern repeat across companies: wrong hires slowing growth, sales
            leaders making decisions on outdated or incomplete data, and teams spending energy in silos instead of
            selling.
          </p>
          <p>
            Revenue success shouldn’t depend on guesswork or luck. We built Yombly to give leaders a unified growth
            platform—where hiring, training, and intelligence finally work together.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-center rounded-md bg-muted p-8">
            <span className="text-sm text-muted-foreground">{'"Fragmented → Unified"'} journey visual placeholder</span>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            A single platform replaces scattered vendors and systems.
          </p>
        </div>
      </div>
    </Section>
  )
}
