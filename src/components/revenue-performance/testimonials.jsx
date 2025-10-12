"use client"

import FormatQuoteIcon from "@mui/icons-material/FormatQuote"

export default function Testimonials() {
  return (
    <section id="testimonials" className="w-full bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mb-6 flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-500 text-white">
            <FormatQuoteIcon fontSize="small" />
          </span>
          <h2 className="text-pretty text-2xl font-semibold md:text-3xl">What leaders say</h2>
        </div>

        <blockquote className="rounded-lg border border-slate-200 bg-white p-6 text-slate-800">
          <p className="text-lg leading-relaxed">
            “Within one quarter we saw cleaner pipeline, faster cycles, and more confident managers. The enablement
            system actually changed our operating rhythm.”
          </p>
          <footer className="mt-4 text-sm text-slate-600">— VP Sales, Enterprise SaaS</footer>
        </blockquote>
      </div>
    </section>
  )
}
