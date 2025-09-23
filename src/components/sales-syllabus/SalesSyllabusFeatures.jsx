import GlassCard from "../../components/glass-card"

export default function SalesSyllabusFeatures() {
  const items = [
    { t: "Curated Business Cases", d: "Real companies & markets—failures & successes." },
    { t: "Role-specific Modules", d: "Paths for Founders, Sales Heads, Marketers." },
    { t: "Mentor Debriefs", d: "Live sessions to walk through decisions & outcomes." },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 grid md:grid-cols-3 gap-6">
      {items.map((c) => (
        <GlassCard key={c.t}>
          <h3 className="font-semibold">{c.t}</h3>
          <p className="text-sm text-[var(--muted-foreground)] mt-2">{c.d}</p>
        </GlassCard>
      ))}
    </section>
  )
}
