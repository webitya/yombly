import GlassCard from "../../components/glass-card"

export default function HomeModules() {
  const modules = [
    { title: "MarketCrew", desc: "Hire right-fit sales & marketing talent.", href: "/marketcrew" },
    { title: "Sales Syllabus", desc: "Real-world, case-based learning.", href: "/sales-syllabus" },
    { title: "Revenue Pilot", desc: "90-day sales growth engine.", href: "/sales-syllabus" },
    { title: "ExactIQ", desc: "Ground-truth market intelligence.", href: "/exactiq" },
  ]
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((m) => (
          <GlassCard key={m.title}>
            <h4 className="font-semibold">{m.title}</h4>
            <p className="text-sm mt-1">{m.desc}</p>
            <a href={m.href} className="mt-4 inline-block hover:text-blue transition">
              {"Explore →"}
            </a>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
