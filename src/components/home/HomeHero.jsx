"use client";

import Image from "next/image";
import Link from "next/link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white text-gray-900 overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/20 via-purple-50/10 to-blue-100/10 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-4 md:space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight">
            Build, Grow & Future-Proof{" "}
            <span className="text-indigo-700">Your Sales & Marketing Teams</span>
          </h1>

          <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto md:mx-0">
            Yombly helps companies hire the right-fit sales & marketing talent, continuously
            upskill them with real-world market intelligence, and keep teams future-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
            <Link
              href="/start-revenue"
              className="px-5 py-2 text-sm md:text-base font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md transition transform hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">
                <RocketLaunchIcon fontSize="small" /> Start Journey
              </span>
            </Link>

            <Link
              href="/book-demo"
              className="px-5 py-2 text-sm md:text-base font-semibold rounded-lg border border-indigo-300 text-indigo-700 hover:bg-indigo-50 transition transform hover:-translate-y-0.5"
            >
              Book Demo
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end relative">
          <div className="absolute -top-8 -left-4 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-50 via-white to-purple-50 rounded-full blur-3xl opacity-50 -z-10"></div>
          <Image
            src="/abstract-dashboard-showing-unified-modules-hiring-.jpg"
            alt="Integrated Platform Dashboard"
            width={400}
            height={350}
            className="rounded-xl shadow-2xl border border-indigo-100"
            priority
          />
        </div>
      </div>

      {/* Scroll Mouse Design */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-8 z-20">
        <div className="w-7 h-12 rounded-[14px] border-2 border-gray-400 flex items-start justify-center p-[6px]">
          <span className="block w-1.5 h-1.5 rounded-full bg-gray-500 animate-scroll-dot" />
        </div>
      </div>

      {/* Scroll animation */}
      <style jsx>{`
        @keyframes scrollDot {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(8px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(14px);
            opacity: 0;
          }
        }

        .animate-scroll-dot {
          animation: scrollDot 1.6s infinite;
        }
      `}</style>
    </section>
  );
}
