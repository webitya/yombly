"use client";

import { useEffect, useState } from "react";

export default function Logo() {
  const [isDarkBg, setIsDarkBg] = useState(true);

  // Detect background color mode (dark vs light)
  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const observer = new MutationObserver(() => {
      const bgColor = window.getComputedStyle(header).backgroundColor;
      const rgb = bgColor.match(/\d+/g);
      if (!rgb) return;
      const brightness =
        (parseInt(rgb[0]) * 299 +
          parseInt(rgb[1]) * 587 +
          parseInt(rgb[2]) * 114) /
        1000;
      setIsDarkBg(brightness < 128); // dark background → true
    });

    observer.observe(header, { attributes: true, attributeFilter: ["class"] });

    // Initial check
    const bgColor = window.getComputedStyle(header).backgroundColor;
    if (bgColor) {
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        const brightness =
          (parseInt(rgb[0]) * 299 +
            parseInt(rgb[1]) * 587 +
            parseInt(rgb[2]) * 114) /
          1000;
        setIsDarkBg(brightness < 128);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center">
      {/* Top Section: Bar + Text */}
      <div className="flex items-center space-x-2">
        {/* Vertical Bar */}
        <div
          className={`w-1 h-8 sm:h-10 rounded-full transition-all duration-300 ${
            isDarkBg ? "bg-cyan-400" : "bg-green-500"
          }`}
        ></div>

        {/* Brand Name */}
        <span
          className={`text-lg sm:text-2xl font-bold tracking-wide transition-colors duration-300 ${
            isDarkBg ? "text-white" : "text-gray-800"
          }`}
        >
          YOMBLY
        </span>
      </div>

      {/* Bottom Dots */}
      <div className="flex space-x-3 mt-0">
        <div
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow transition-colors duration-300 ${
            isDarkBg ? "bg-cyan-400" : "bg-green-600"
          }`}
        ></div>
        <div
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow transition-colors duration-300 ${
            isDarkBg ? "bg-cyan-300" : "bg-green-400"
          }`}
        ></div>
        <div
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow transition-colors duration-300 ${
            isDarkBg ? "bg-gray-100" : "bg-gray-900"
          }`}
        ></div>
      </div>
    </div>
  );
}
