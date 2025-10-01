"use client";

import Image from "next/image";
import Link from "next/link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-100/30 via-purple-50/20 to-blue-100/20 overflow-hidden">
      {/* Background Blobs / Shapes */}
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-r from-purple-400/40 to-indigo-400/40 rounded-full blur-[120px] opacity-50" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[45vw] h-[45vw] bg-gradient-to-tr from-blue-300/40 via-indigo-300/30 to-purple-400/40 rounded-full blur-[120px] opacity-50" />

      {/* Glassmorphism Overlay */}
      <div className="absolute inset-0 backdrop-blur-[60px] bg-white/30 pointer-events-none" />

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-5 md:space-y-7">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-tight drop-shadow-sm">
            Build, Grow & Future-Proof{" "}
            <span className="text-indigo-700">Your Sales & Marketing Teams</span>
          </h1>

          <p className="text-sm md:text-base text-gray-700 max-w-md mx-auto md:mx-0">
            Yombly helps companies hire the right-fit sales & marketing talent,
            continuously upskill them with real-world market intelligence, and
            keep teams future-ready.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
            <Link
              href="/start-revenue"
              className="px-6 py-2.5 text-sm md:text-base font-semibold rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-lg backdrop-blur-sm transition transform hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center gap-2">
                <RocketLaunchIcon fontSize="small" /> Start Journey
              </span>
            </Link>

            <Link
              href="/book-demo"
              className="px-6 py-2.5 text-sm md:text-base font-semibold rounded-lg border border-indigo-300 text-indigo-700 hover:bg-indigo-50 backdrop-blur-sm transition transform hover:-translate-y-0.5"
            >
              Book Demo
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end relative">
          {/* Floating Glow Behind Image */}
          <div className="absolute -top-8 -left-4 w-[120%] h-[120%] bg-gradient-to-tr from-indigo-200 via-white to-purple-200 rounded-full blur-3xl opacity-60 -z-10"></div>
          <Image
            src="/abstract-dashboard-showing-unified-modules-hiring-.jpg"
            alt="Integrated Platform Dashboard"
            width={420}
            height={360}
            className="rounded-xl shadow-2xl border border-indigo-100 backdrop-blur-sm"
            priority
          />
        </div>
      </div>

      {/* Scroll Mouse Indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-6 md:bottom-8 z-20">
        <div className="w-7 h-12 rounded-[14px] border-2 border-gray-400 flex items-start justify-center p-[6px] backdrop-blur-md bg-white/30 shadow-inner">
          <span className="block w-1.5 h-1.5 rounded-full bg-gray-600 animate-scroll-dot" />
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
