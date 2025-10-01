"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-16 bg-gradient-to-br from-indigo-100/20 via-purple-50/10 to-blue-100/10 border-b border-border">

      {/* Background blurred shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-[25vw] h-[25vw] rounded-full blur-[100px] opacity-40 -z-10 bg-gradient-to-tr from-purple-400/40 via-pink-300/30 to-indigo-400/40" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-40 -z-10 bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-purple-400/40" />
      <div className="absolute top-1/2 left-1/4 w-[15vw] h-[15vw] rounded-full blur-[80px] opacity-30 -z-10 bg-gradient-to-r from-yellow-200/30 via-green-200/20 to-pink-200/30" />

      {/* Main content */}
      <div className="relative z-10 w-full  grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center justify-center text-center md:text-left">

        {/* Left Text */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-10 space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
            Revenue Pilot
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground opacity-90 leading-relaxed">
            End the chaos. Build your sales growth engine in 90 days — then scale with 6 months of hands-on support until results show.
          </p>

          <ul className="mt-6 grid gap-2 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-primary" />
              No more missed deals
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-primary" />
              No more unclear ROI
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-[6px] inline-block h-2 w-2 rounded-full bg-primary" />
              No more firefighting
            </li>
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="#book"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 w-full sm:w-auto"
            >
              Make My Sales Predictable
            </Link>
            <Link
              href="#solution"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-accent w-full sm:w-auto"
            >
              See How It Works
            </Link>
          </div>
        </div>

        {/* Right Image + caption below */}
        <div className="relative w-full flex flex-col items-center md:items-end">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 md:p-4 w-full max-w-md">
            <img
              src="/dashboard-sales-forecast-visual.jpg"
              alt="Forecasting dashboard preview showing a predictable revenue trendline"
              className="w-full rounded-lg border border-white/30"
            />
          </div>
          <p className="mt-2 text-start md:text-right text-xs opacity-70">
            From fragmented efforts to a predictable revenue engine
          </p>
        </div>

      </div>
    </section>
  );
}
