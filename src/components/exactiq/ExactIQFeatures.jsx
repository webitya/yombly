import GlassCard from "../../components/glass-card"

export default function ExactIQFeatures() {
  const items = [
    "Buyer Intelligence",
    "Competitor Mapping",
    "Channel Effectiveness",
    "Pricing Trends",
    "Sales Process Gaps",
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 grid md:grid-cols-3 gap-6">
      {items.map((t) => (
        <GlassCard key={t}>
          <h3 className="font-semibold">{t}</h3>
        </GlassCard>
      ))}
    </section>
  )
}
