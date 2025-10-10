"use client";

import Image from "next/image";

export default function HomeWhoWeAre() {
  return (
    <section className="relative py-12 bg-gradient-to-b from-sky-100 to-blue-50 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-4 max-w-md">
          <h2 className="text-3xl md:text-3xl font-bold leading-snug">
            Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
              We Are
            </span>
          </h2>
          <p className="text-base text-gray-700 leading-relaxed">
            We are on a mission to make{" "}
            <span className="font-semibold text-indigo-700">revenue success predictable.</span> 
            Hiring, training, and market intelligence are often fragmented.{" "}
            Yombly solves this by creating a{" "}
            <span className="font-semibold text-purple-600">single platform of truth</span> — helping organizations
            boost productivity, reduce inefficiencies, and accelerate growth.
          </p>
        </div>

        {/* Right Illustration - Compact */}
        <div className="flex justify-center md:justify-end w-full max-w-[300px]">
          <Image
            src="/dashboard-sales-forecast-visual.jpg"
            alt="Who We Are"
            width={300}
            height={220}
            className="rounded-xl shadow-lg border border-indigo-100 max-w-full h-auto transition-transform duration-500 hover:scale-105"
            style={{ objectFit: "contain" }}
          />
        </div>

      </div>
    </section>
  );
}
