import Section from "./section"

const industries = [
  { name: "SaaS", query: "saas logo placeholder" },
  { name: "Manufacturing", query: "manufacturing logo placeholder" },
  { name: "FMCG", query: "fmcg logo placeholder" },
  { name: "Tech", query: "tech logo placeholder" },
  { name: "B2B Services", query: "b2b services logo placeholder" },
]

export default function Industries() {
  return (
    <Section id="industries" title="Industries We Serve" subtitle="SaaS, Manufacturing, FMCG, Tech, and B2B Services.">
      <div className="grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
        {industries.map((i) => (
          <div
            key={i.name}
            className="flex h-16 items-center justify-center rounded-md border border-border bg-card p-3"
            aria-label={i.name}
            role="img"
          >
            <img
              src={`/.jpg?height=40&width=120&query=${encodeURIComponent(i.query)}`}
              alt={`${i.name} logo placeholder`}
              className="h-8 w-auto opacity-70"
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
