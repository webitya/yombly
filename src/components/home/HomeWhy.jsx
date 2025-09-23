import GlassCard from "../../components/glass-card"
import { FaChartLine, FaUsersCog, FaGraduationCap } from "react-icons/fa"

export default function HomeWhy() {
  const items = [
    { icon: FaUsersCog, title: "One Platform", desc: "Hiring, training, and intelligence unified—no silos, no chaos." },
    { icon: FaGraduationCap, title: "Real-World Learning", desc: "Case-based upskilling to keep teams future-ready." },
    { icon: FaChartLine, title: "Revenue Outcomes", desc: "Define → Measure → Improve productivity with clarity." },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => {
          const I = it.icon
          return (
            <GlassCard key={it.title}>
              <div className="flex items-center gap-3">
                <I className="text-blue-600 text-xl" />
                <h3 className="font-semibold">{it.title}</h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </GlassCard>
          )
        })}
      </div>
    </section>
  )
}
