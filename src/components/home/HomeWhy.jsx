"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import LanIcon from "@mui/icons-material/Lan";

export default function WhyYombly() {
  const points = [
    {
      text: "One unified platform for scalable growth",
      icon: <RocketLaunchIcon className="text-sky-500" fontSize="medium" />,
    },
    {
      text: "No more fragmented vendors or broken workflows",
      icon: (
        <IntegrationInstructionsIcon
          className="text-indigo-500"
          fontSize="medium"
        />
      ),
    },
    {
      text: "Future-ready intelligence for founders & enterprises",
      icon: <LanIcon className="text-pink-500" fontSize="medium" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [points.length]);

  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-indigo-50 to-pink-50 text-gray-800 py-14 md:py-18 overflow-hidden">
      {/* ✨ Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh style glows */}
        <div className="absolute top-[10%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-sky-200/60 via-blue-100/50 to-indigo-100/40 blur-[160px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] bg-gradient-to-tr from-pink-200/50 via-purple-100/40 to-sky-100/40 blur-[160px]" />

        {/* Subtle moving grid */}
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            animation: "gridMove 40s linear infinite",
          }}
        ></div>
      </div>

      {/* 💡 Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
              Yombly?
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A single intelligent platform that brings your team’s hiring,
            training, and growth together — simple, connected, and future-ready.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.8, y: 15 }}
              animate={
                activeIndex === index
                  ? { opacity: 1, y: 0, scale: 1.03 }
                  : { opacity: 0.9, y: 0, scale: 1 }
              }
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`relative bg-white/80 backdrop-blur-xl border border-gray-100 rounded-xl p-5 md:p-6 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_6px_25px_rgba(0,0,0,0.07)] transition-all duration-500 ${
                activeIndex === index
                  ? "border-sky-300 shadow-[0_0_25px_rgba(56,189,248,0.2)]"
                  : ""
              }`}
            >
              {activeIndex === index && (
                <motion.div
                  key="progress"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-[2px] origin-left bg-gradient-to-r from-sky-400 via-indigo-400 to-pink-400 rounded-t-xl"
                />
              )}

              <div className="mb-3 p-2.5 bg-gradient-to-tr from-sky-100 via-indigo-100 to-pink-100 rounded-full border border-gray-100 shadow-sm">
                {point.icon}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={point.text}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.5 }}
                  className="text-sm md:text-base font-medium text-gray-700 leading-snug"
                >
                  {point.text}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 70px 70px; }
        }
      `}</style>
    </section>
  );
}
