"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h1 className="text-balance text-3xl md:text-5xl font-semibold tracking-tight">
            Hire Right-Fit Sales &amp; Marketing Talent — Every Time
          </h1>
          <p className="text-pretty text-muted-foreground leading-relaxed">
            MarketCrew is Yombly’s meticulously designed hiring process for sales &amp; marketing roles. With 30+
            quality checks and proven frameworks, we ensure your hires aren’t just employees — they’re future revenue
            drivers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Start Hiring Smarter
            </Link>
            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        <div className="relative">
          {/* Visual: Funnel illustration with placeholders */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-2 w-1/4 rounded bg-primary/20" />
              <div className="h-2 w-1/5 rounded bg-primary/30" />
              <div className="h-2 w-1/6 rounded bg-primary/50" />
            </div>
            <img
              src="/funnel-diagram-for-hiring-process.jpg"
              alt="Hiring funnel visualization"
              className="w-full rounded border border-border"
              height={180}
              width={560}
            />
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
              <span className="rounded bg-muted px-2 py-1 text-center">Resumes In</span>
              <span className="rounded bg-muted px-2 py-1 text-center">Quality Checks</span>
              <span className="rounded bg-primary/10 px-2 py-1 text-center text-primary">
                Qualified, Market-Ready Talent
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
