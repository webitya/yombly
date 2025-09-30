import Section from "./section"

export default function WhoWeAre() {
  return (
    <Section id="who" title="Who We Are">
      <div className="grid gap-6 md:grid-cols-2">
        <ul className="list-disc space-y-2 pl-5 marker:text-primary text-sm md:text-base">
          <li>Worked with 100+ organizations across industries</li>
          <li>Built and scaled sales engines from ground zero to multi-crore revenues</li>
          <li>Solved inefficiencies that block growth with data-driven, proven methods</li>
        </ul>
        <div className="rounded-lg border border-border bg-card p-5">
          <div className="flex items-center justify-center rounded-md bg-muted p-8">
            <span className="text-sm text-muted-foreground">Founders / team snapshot placeholder</span>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">Authentic, founder-led, SaaS credibility.</p>
        </div>
      </div>
    </Section>
  )
}
