import Link from "next/link"

export default function CTA() {
  return (
    <section id="cta" className="container mx-auto px-4 py-16">
      <div className="rounded-xl border border-border bg-card p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-balance">
              Ready to hire your next revenue champion?
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Don’t gamble with your sales team. Let MarketCrew bring you right-fit, market-ready talent.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href="#book"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Book a Consultation
            </Link>
            <Link
              href="#download"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Download Process PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
