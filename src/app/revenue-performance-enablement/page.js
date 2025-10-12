"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"

// MUI Icons
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"

import Hero from "@/components/revenue-performance/hero"
import Toc from "@/components/revenue-performance/toc"
import Kpis from "@/components/revenue-performance/kpis"
import Tracks from "@/components/revenue-performance/tracks"
import Modules from "@/components/revenue-performance/modules"
import Calendar from "@/components/revenue-performance/calendar"
import KpiLinkages from "@/components/revenue-performance/kpi-linkages"
import Principles from "@/components/revenue-performance/principles"
import Testimonials from "@/components/revenue-performance/testimonials"
import Cta from "@/components/revenue-performance/cta"
import Steps from "@/components/revenue-performance/steps"

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <Header />

      {/* Anchor for back-to-top */}
      <span id="top" className="sr-only">
        Top of page
      </span>

      {/* Hero */}
      <Hero />

      {/* TOC in container for alignment */}
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <Toc />
      </div>

      {/* Sections */}
      <main>
        {/* Steps section */}
        <Steps />
        <Kpis />
        <Tracks />
        <Modules />
        <Calendar />
        <KpiLinkages />
        <Principles />
        <Testimonials />
        <Cta />
      </main>

      {/* Back to top FAB */}
      <a
        href="#top"
        aria-label="Back to top"
        className="fixed bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-md transition hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <ArrowUpwardIcon fontSize="small" />
      </a>

      {/* Footer */}
      <Footer />
    </div>
  )
}
