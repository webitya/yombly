import GlassCard from "../../components/glass-card"

export default function MarketCrewFeatures() {
  const feats = ["30+ Quality Checks", "Sales Assessments", "Market‑Readiness Index", "Insights Before Hiring"]
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 grid md:grid-cols-4 gap-6">
      {feats.map((t) => (
        <GlassCard key={t}>
          <h3 className="font-semibold">{t}</h3>
        </GlassCard>
      ))}
    </section>
  )
}
