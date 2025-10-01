"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden px-4 md:px-16 bg-gradient-to-br from-indigo-100/20 via-purple-50/10 to-blue-100/10">
      
      {/* Background blurred shapes */}
      <div className="absolute top-[-10%] left-[-5%] w-[25vw] h-[25vw] rounded-full blur-[100px] opacity-40 -z-10 bg-gradient-to-tr from-purple-400/40 via-pink-300/30 to-indigo-400/40" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30vw] h-[30vw] rounded-full blur-[100px] opacity-40 -z-10 bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-purple-400/40" />
      <div className="absolute top-1/2 left-1/4 w-[15vw] h-[15vw] rounded-full blur-[80px] opacity-30 -z-10 bg-gradient-to-r from-yellow-200/30 via-green-200/20 to-pink-200/30" />

      {/* Main content */}
      <div className="relative z-10 w-full  grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center text-center md:text-left">
        
        {/* Left text */}
        <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-10 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            ExactIQ: Real-World Market Intelligence, Zero Guesswork
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            ExactIQ delivers raw, accurate, and actionable intelligence from the market—helping you solve sales and
            marketing inefficiencies with 100% precision. We’ve already helped 100+ organizations cut through
            assumptions and unlock growth with insights that are ground-truth, not guesswork.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center md:justify-start">
            <Link
              href="#cta"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full sm:w-auto"
            >
              Get Market Intelligence
            </Link>
            <Link
              href="#impact"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full sm:w-auto"
            >
              See a Sample Report
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="relative w-full flex justify-center md:justify-end">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-2 md:p-4 w-full max-w-md">
            <img
              src="/abstract-data-pulse-radar-to-dashboard.jpg"
              alt="Abstract data pulse visual flowing into a clear dashboard"
              className="w-full rounded-md border border-white/30"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
