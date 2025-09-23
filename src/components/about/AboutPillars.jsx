import GlassCard from "../../components/glass-card"

export default function AboutPillars() {
  const pillars = ["Clarity over chaos", "Performance-first", "Future-ready teams", "Unified growth"]
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 grid md:grid-cols-3 gap-6">
      {pillars.map((t) => (
        <GlassCard key={t}>
          <h3 className="font-semibold">{t}</h3>
        </GlassCard>
      ))}
    </section>
  )
}
