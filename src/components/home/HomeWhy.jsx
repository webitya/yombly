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
      icon: <RocketLaunchIcon className="text-indigo-400" fontSize="medium" />,
    },
    {
      text: "No more fragmented vendors or broken workflows",
      icon: (
        <IntegrationInstructionsIcon
          className="text-purple-400"
          fontSize="medium"
        />
      ),
    },
    {
      text: "Future-ready intelligence for founders & enterprises",
      icon: <LanIcon className="text-blue-400" fontSize="medium" />,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % points.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [points.length]);

  return (
    <section className="relative bg-[#060a13] text-gray-100 py-16 md:py-20 overflow-hidden">
      {/* ✨ Animated Tech Grid Background */}
      <div className="absolute inset-0 -z-10">
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(99,102,241,0.25) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            transform: "translateY(0px)",
            animation: "gridMove 20s linear infinite",
          }}
        ></div>

        {/* Gradient lights */}
        <div className="absolute top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-gradient-to-br from-indigo-600/30 via-blue-600/20 to-purple-600/20 blur-[180px] animate-pulse" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-gradient-to-tr from-purple-600/30 via-blue-600/20 to-indigo-600/20 blur-[180px] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto px-6 md:px-10 text-center space-y-10">
        {/* Heading */}
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Why{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Yombly?
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The unified growth engine that connects hiring, training, and
            performance into one intelligent ecosystem — designed for the next
            generation of scalable teams.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 max-w-5xl mx-auto">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0.7, scale: 0.96 }}
              animate={
                activeIndex === index
                  ? { opacity: 1, scale: 1.05 }
                  : { opacity: 0.85, scale: 0.98 }
              }
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-5 md:p-7 flex flex-col items-center text-center transition-all duration-700 hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] ${
                activeIndex === index
                  ? "border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                  : ""
              }`}
            >
              {activeIndex === index && (
                <motion.div
                  key="progress"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute top-0 left-0 w-full h-[2px] origin-left bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-t-xl"
                />
              )}

              <div className="mb-3 p-2.5 bg-gradient-to-tr from-indigo-500/10 via-blue-500/10 to-purple-500/10 rounded-full border border-white/10">
                {point.icon}
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={point.text}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                  className="text-sm md:text-base font-medium text-gray-200"
                >
                  {point.text}
                </motion.p>
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 🔁 Inline keyframe simulation */}
      <style>{`
        @keyframes gridMove {
          0% { background-position: 0px 0px; }
          100% { background-position: 60px 60px; }
        }
      `}</style>
    </section>
  );
}
