"use client";

import { useEffect, useState } from "react";
import {
  RocketLaunch,
  IntegrationInstructions,
  Lan,
} from "@mui/icons-material";

export default function WhyYombly() {
  const points = [
    {
      text: "One unified platform for scalable growth",
      icon: <RocketLaunch className="text-indigo-600" fontSize="medium" />,
    },
    {
      text: "No more fragmented vendors or broken workflows",
      icon: (
        <IntegrationInstructions
          className="text-purple-600"
          fontSize="medium"
        />
      ),
    },
    {
      text: "Future-ready intelligence for founders & enterprises",
      icon: <Lan className="text-blue-600" fontSize="medium" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Smooth forward-only looping
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [points.length]);

  return (
    <section className="relative bg-gradient-to-b from-white via-indigo-50/40 to-white py-12 md:py-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-32 -right-32 w-[40vw] h-[40vw] bg-gradient-to-tr from-indigo-300/20 via-purple-300/20 to-blue-300/20 blur-[100px] rounded-full -z-10" />
      <div className="absolute bottom-[-25%] left-[-15%] w-[35vw] h-[35vw] bg-gradient-to-tr from-blue-300/15 via-indigo-200/15 to-purple-200/15 blur-[100px] rounded-full -z-10" />

      <div className="mx-auto px-6 md:px-10 text-center relative z-10 space-y-12">
        {/* Heading */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Yombly?
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Yombly unifies hiring, training, and performance intelligence into
            one connected ecosystem — empowering founders and teams to scale
            with precision.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <div
              key={index}
              className={`relative bg-white/70 backdrop-blur-lg border border-white/40 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeIndex === index
                  ? "scale-[1.05] shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  : "scale-[0.97] opacity-75"
              }`}
            >
              {/* Glow loader line */}
              {activeIndex === index && (
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent animate-glow" />
                </div>
              )}

              {/* Icon */}
              <div className="mb-4 p-3 bg-gradient-to-tr from-indigo-100 via-purple-100 to-blue-100 rounded-full shadow-inner">
                {point.icon}
              </div>

              {/* Text */}
              <p className="text-base md:text-lg font-semibold text-gray-800 leading-snug">
                {point.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Glow Animation */}
      <style jsx>{`
        @keyframes glow {
          0% {
            transform: translateX(-100%);
            opacity: 0.2;
          }
          50% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0.2;
          }
        }
        .animate-glow {
          animation: glow 3.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
