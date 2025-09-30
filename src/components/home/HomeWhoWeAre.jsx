"use client"

import Image from "next/image"

export default function HomeWhoWeAre() {
  return (
    <section className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              We Are
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are on a mission to make <span className="font-semibold text-indigo-700">revenue success predictable.</span>  
            Hiring, training, and market intelligence are often fragmented.  
            Yombly solves this by creating a{" "}
            <span className="font-semibold text-purple-600">single platform of truth</span> — helping organizations
            boost productivity, reduce inefficiencies, and accelerate growth.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/team-illustration.png" // replace with your illustration
            alt="Who We Are"
            width={460}
            height={340}
            className="rounded-2xl shadow-xl border border-indigo-100"
          />
        </div>
      </div>
    </section>
  )
}
