"use client";

export default function Logo() {
  return (
    <div className="flex flex-col items-center">
      {/* Top Section: Bar + Text */}
      <div className="flex items-center space-x-2">
        {/* Vertical Bar */}
        <div className="w-1 h-8 bg-green-500 rounded-full sm:h-10"></div>

        {/* Brand Name */}
        <span className="text-lg sm:text-2xl font-bold tracking-wide text-gray-800">
          YOMBLY
        </span>
      </div>

      {/* Bottom Dots */}
      <div className="flex space-x-3 mt-0">
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-600 shadow"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-400 shadow"></div>
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-900 shadow"></div>
      </div>
    </div>
  );
}
