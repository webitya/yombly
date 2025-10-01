"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden px-4 md:px-16 bg-gradient-to-br from-indigo-100/20 via-purple-50/10 to-blue-100/10">
      {/* Background gradient blobs with more colors */}
      <div className="absolute top-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full blur-[120px] opacity-50 -z-10 
                      bg-gradient-to-tr from-purple-400/40 via-pink-300/30 to-indigo-400/40" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35vw] h-[35vw] rounded-full blur-[120px] opacity-50 -z-10 
                      bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-purple-400/40" />
      <div className="absolute top-1/2 left-1/4 w-[20vw] h-[20vw] rounded-full blur-[100px] opacity-30 -z-10 
                      bg-gradient-to-r from-yellow-200/30 via-green-200/20 to-pink-200/30" />

      {/* Content */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">
        {/* Left Text Content */}
        <div className="space-y-6 bg-white/20 backdrop-blur-md rounded-2xl p-6 md:p-10 w-full">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            We exist to make revenue success predictable.
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Hiring, training, and market intelligence are fragmented. Organizations juggle multiple vendors, chaotic
            systems, and scattered truths—leading to wasted effort, low productivity, and slow growth.
            <br className="hidden md:block" />
            <span className="block mt-3">
              Yombly unifies these critical functions into one platform for revenue productivity.
            </span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 w-full sm:w-auto"
            >
              Talk to Us
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted w-full sm:w-auto"
            >
              Book a Consultation
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center md:justify-end w-full overflow-hidden">
          <div className="absolute -top-8 -left-4 w-[100%] h-[100%] bg-gradient-to-tr from-indigo-200 via-white to-purple-200 rounded-full blur-3xl opacity-50 -z-10" />
          <Image
            src="/abstract-dashboard-showing-unified-modules-hiring-.jpg"
            alt="Revenue Platform Dashboard"
            width={420}
            height={360}
            className="rounded-xl border border-white/20 backdrop-blur-sm"
            priority
          />
        </div>
      </div>
    </section>
  );
}
