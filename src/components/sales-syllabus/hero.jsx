"use client"

import CaseCarousel from "@/components/sales-syllabus/case-carousel"
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded"
import PlayCircleFilledRounded from "@mui/icons-material/PlayCircleFilledRounded"

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-pretty text-3xl font-semibold tracking-tight md:text-5xl">
              Master Sales & Marketing Decision-Making Through Real-World Business Cases
            </h1>
            <p className="mt-4 text-balance text-muted-foreground md:text-lg">
              Skip the theory. Gain clarity through actual, proven strategies from companies like yours— solving real
              sales & marketing challenges.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#sample-case"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-primary-foreground transition hover:opacity-90"
              >
                <PlayCircleFilledRounded fontSize="small" />
                <span>Explore Sample Case</span>
              </a>
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-foreground hover:bg-accent"
              >
                <span>Join a Cohort</span>
                <ArrowForwardIosRounded fontSize="small" />
              </a>
            </div>
          </div>
          <div className="relative">
            <CaseCarousel />
          </div>
        </div>
      </div>
    </header>
  )
}
