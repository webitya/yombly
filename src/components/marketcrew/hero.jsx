"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-16 bg-gradient-to-br from-indigo-100/20 via-purple-50/10 to-blue-100/10">
      
      {/* Background floating shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full blur-[120px] opacity-40 -z-10 bg-gradient-to-tr from-purple-400/40 via-pink-300/30 to-indigo-400/40" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full blur-[120px] opacity-40 -z-10 bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-purple-400/40" />
      <div className="absolute top-1/2 left-1/4 w-[20vw] h-[20vw] rounded-full blur-[100px] opacity-30 -z-10 bg-gradient-to-r from-yellow-200/30 via-green-200/20 to-pink-200/30" />

      {/* Content */}
      <div className="relative z-10 w-full  grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center text-center md:text-left overflow-hidden">
        
        {/* Left Content */}
        <div className="space-y-6 p-6 md:p-10 bg-white/20 backdrop-blur-md rounded-2xl w-full">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-foreground">
            Hire Right-Fit Sales &amp; Marketing Talent — Every Time
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            MarketCrew is Yombly’s meticulously designed hiring process for sales &amp; marketing roles. With 30+ quality
            checks and proven frameworks, we ensure your hires aren’t just employees — they’re future revenue drivers.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-auto"
            >
              Start Hiring Smarter
            </Link>
            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-md border border-border bg-white/20 backdrop-blur-sm px-5 py-3 text-sm font-medium text-foreground transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50 w-full sm:w-auto"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-6 w-full max-w-md">
            {/* Funnel placeholder bars */}
            <div className="mb-4 flex items-center justify-between gap-2">
              <div className="h-2 w-1/4 rounded bg-primary/20" />
              <div className="h-2 w-1/5 rounded bg-primary/30" />
              <div className="h-2 w-1/6 rounded bg-primary/50" />
            </div>
            
            <img
              src="/funnel-diagram-for-hiring-process.jpg"
              alt="Hiring funnel visualization"
              className="w-full rounded-lg border border-white/30"
              height={180}
              width={560}
            />

            {/* Funnel labels */}
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-muted-foreground">
              <span className="rounded bg-muted px-2 py-1 text-center">Resumes In</span>
              <span className="rounded bg-muted px-2 py-1 text-center">Quality Checks</span>
              <span className="rounded bg-primary/20 px-2 py-1 text-center text-primary">
                Qualified, Market-Ready Talent
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
