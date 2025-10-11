"use client";

import { useEffect, useState } from "react";

export default function Logo() {
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [initialized, setInitialized] = useState(false); // 👈 ensures no flicker

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const checkBg = () => {
      const bgColor = window.getComputedStyle(header).backgroundColor;
      const rgb = bgColor?.match(/\d+/g);
      if (!rgb) return;

      const brightness =
        (parseInt(rgb[0]) * 299 +
          parseInt(rgb[1]) * 587 +
          parseInt(rgb[2]) * 114) / 1000;

      setIsDarkBg(brightness < 130);
      setInitialized(true);
    };

    // Run immediately once
    checkBg();

    const observer = new MutationObserver(checkBg);
    observer.observe(header, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  // Use a safe default (dark text) before initialization
  const textColorClass = !initialized
    ? "text-white"
    : isDarkBg
    ? "text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
    : "text-white";

  return (
    <div className="flex flex-col items-center group transition-all duration-500">
      {/* Top Section: Accent Bar + Brand Text */}
      <div className="flex items-center space-x-2">
        {/* Accent Bar */}
        <div
          className={`w-1.5 h-8 sm:h-10 rounded-full transition-all duration-300 shadow-sm ${
            isDarkBg
              ? "bg-gradient-to-b from-cyan-400 to-blue-400"
              : "bg-gradient-to-b from-sky-500 to-blue-600"
          }`}
        ></div>

        {/* Brand Name */}
        <span
          className={`text-2xl sm:text-3xl font-extrabold tracking-wide transition-all duration-300 text-black`}
        >
          YOMBLY
        </span>
      </div>

      {/* Accent Dots */}
      <div className="flex space-x-2 mt-1">
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isDarkBg ? "bg-cyan-400" : "bg-sky-500"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isDarkBg ? "bg-blue-400" : "bg-teal-500"
          }`}
        ></div>
        <div
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            isDarkBg ? "bg-gray-200" : "bg-gray-800"
          }`}
        ></div>
      </div>
    </div>
  );
}
