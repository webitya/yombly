"use client"

import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"

export default function Hero() {
  return (
    <header className="w-full bg-slate-900 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-6 lg:py-20">
        <div className="max-w-2xl">
          <p className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300">
            <TrendingUpIcon fontSize="inherit" />
            Revenue Performance Enablement
          </p>
          <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
            Equip your go-to-market teams to hit and exceed revenue targets
          </h1>
          <p className="mt-4 text-slate-300 md:text-lg">
            A structured enablement system that builds capability, reinforces behavior, and ties outcomes to measurable
            revenue KPIs.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Book a discovery call
              <ArrowOutwardIcon fontSize="small" className="ml-1" />
            </a>
            <a
              href="#kpis"
              className="inline-flex items-center justify-center rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              Explore outcomes
            </a>
          </div>
        </div>

        <div className="relative mt-8 w-full max-w-md overflow-hidden rounded-lg border border-slate-800 bg-slate-800/40 p-5 md:mt-0 md:max-w-md">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-md bg-slate-800 p-4">
              <p className="text-xs text-slate-300">Ramp time</p>
              <p className="mt-1 text-2xl font-bold">-25%</p>
            </div>
            <div className="rounded-md bg-slate-800 p-4">
              <p className="text-xs text-slate-300">Win rate</p>
              <p className="mt-1 text-2xl font-bold">+6–9 pts</p>
            </div>
            <div className="rounded-md bg-slate-800 p-4">
              <p className="text-xs text-slate-300">Pipeline hygiene</p>
              <p className="mt-1 text-2xl font-bold">+31%</p>
            </div>
            <div className="rounded-md bg-slate-800 p-4">
              <p className="text-xs text-slate-300">Forecast accuracy</p>
              <p className="mt-1 text-2xl font-bold">±5%</p>
            </div>
          </div>
          <span className="sr-only">Impact cards showing improvements in key KPIs.</span>
        </div>
      </div>
    </header>
  )
}
