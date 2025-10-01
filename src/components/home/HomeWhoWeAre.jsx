"use client";

import Image from "next/image";

export default function HomeWhoWeAre() {
  return (
    <section className="relative py-20 bg-gray-50 overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Who{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
              We Are
            </span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We are on a mission to make <span className="font-semibold text-indigo-700">revenue success predictable.</span>{" "}
            Hiring, training, and market intelligence are often fragmented.{" "}
            Yombly solves this by creating a{" "}
            <span className="font-semibold text-purple-600">single platform of truth</span> — helping organizations
            boost productivity, reduce inefficiencies, and accelerate growth.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="flex justify-center md:justify-end w-full max-w-full">
          <Image
            src="/images/team-illustration.png"
            alt="Who We Are"
            width={460}
            height={340}
            className="rounded-2xl shadow-xl border border-indigo-100 max-w-full h-auto"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>

      </div>
    </section>
  );
}
