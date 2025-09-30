import Section from "./section"

const items = [
  {
    title: "Direct-from-market insights",
    desc: "No desk-research fluff.",
  },
  {
    title: "Real-time accuracy",
    desc: "Intelligence that reflects today, not last quarter.",
  },
  {
    title: "Sales & marketing focus",
    desc: "We track only what drives pipeline and revenue.",
  },
  {
    title: "100+ inefficiencies solved",
    desc: "Across industries, GTM models, and geographies.",
  },
]

export default function Differentiators() {
  return (
    <Section id="different" title="What Makes It Different">
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((it) => (
          <div key={it.title} className="rounded-md border border-border bg-card p-4" role="listitem">
            <h3 className="text-sm font-semibold text-foreground">{it.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <img
          src="/dashboard-cards-competitor-pricing-buyer-shift-cha.jpg"
          alt="Dashboard cards: Competitor Pricing Movement, Buyer Behavior Shift, Channel Effectiveness Score"
          className="w-full rounded-md border border-border"
        />
      </div>
    </Section>
  )
}
