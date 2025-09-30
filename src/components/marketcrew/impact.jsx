const logos = [
  { name: "Acme", src: "/generic-company-logo.png" },
  { name: "Nimbus", src: "/nimbus-logo.jpg" },
  { name: "Stellar", src: "/stellar-logo.jpg" },
  { name: "Quanta", src: "/quanta-logo.jpg" },
  { name: "Vertex", src: "/vertex-logo.jpg" },
]

const testimonials = [
  {
    quote:
      "MarketCrew helped us hire an AE who hit 120% of quota in her first full quarter. The screening depth was unmatched.",
    author: "VP Sales, B2B SaaS",
  },
  {
    quote: "Our ramp time dropped dramatically. Candidates came in understanding our ICP and messaging from day one.",
    author: "Founder, Growth-stage Startup",
  },
]

export default function Impact() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold">Impact of MarketCrew</h2>
          <ul className="mt-6 space-y-3 text-muted-foreground">
            <li>• 80%+ hiring success rate vs industry average of ~50%</li>
            <li>• Reduced time-to-productivity by 40%</li>
            <li>• Trusted by startups, SMEs, and scaling enterprises</li>
          </ul>

          <div className="mt-8 rounded-lg border border-border bg-card p-4">
            <div className="flex flex-wrap items-center justify-center gap-6">
              {logos.map((l) => (
                <img
                  key={l.name}
                  src={l.src || "/placeholder.svg"}
                  alt={"Client logo: " + l.name}
                  height={28}
                  width={100}
                  className="opacity-80"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-lg border border-border bg-card p-5">
              <blockquote className="text-pretty">“{t.quote}”</blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
