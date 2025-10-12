"use client"

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

export default function Cta() {
  return (
    <section id="contact" className="w-full bg-slate-900 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-6 lg:py-20">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
              <LocalOfferIcon fontSize="inherit" />
              Tailored to your motion
            </p>
            <h2 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
              Ready to tie enablement to revenue?
            </h2>
            <p className="mt-2 text-slate-300">
              Let’s align on outcomes, pick the right modules, and set the inspection rhythm.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#top"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Book a discovery call
              <ArrowOutwardIcon fontSize="small" className="ml-1" />
            </a>
            <a
              href="#kpis"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              View outcomes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
