"use client"

import Link from "next/link"
import CaseCarousel from "@/components/sales-syllabus/case-carousel"
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded"
import PlayCircleFilledRounded from "@mui/icons-material/PlayCircleFilledRounded"

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Background gradient shapes */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-10%] left-[-10%] h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/30 via-pink-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-purple-400/20 via-primary/30 to-transparent blur-3xl" />
      </div>

      {/* Content wrapper with glassmorphism */}
      <div className="mx-auto  px-6 py-12 md:py-20 md:min-h-[90vh] flex items-center">
        <div className="grid items-center gap-10 md:grid-cols-2 bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12  border-white/20">
          
          {/* Left Content */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold tracking-tight md:text-4xl leading-snug text-foreground">
              Master Sales & Marketing Decision-Making
              <br className="hidden md:block" />
              Through Real-World Cases
            </h1>

            <p className="text-muted-foreground text-base md:text-lg">
              Skip the theory. Learn directly from proven strategies used by
              real companies—solving actual sales & marketing challenges.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 pt-3">
              <Link
                href="#sample-case"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-md transition hover:scale-105 hover:shadow-lg"
              >
                <PlayCircleFilledRounded fontSize="small" />
                Explore Sample Case
              </Link>

              <Link
                href="#apply"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-md transition hover:bg-white/20 hover:scale-105"
              >
                Join a Cohort
                <ArrowForwardIosRounded fontSize="small" />
              </Link>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/20 bg-white/5 backdrop-blur-md">
            <CaseCarousel />
          </div>
        </div>
      </div>
    </header>
  )
}
