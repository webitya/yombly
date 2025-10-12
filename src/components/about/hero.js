"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowForward } from "@mui/icons-material";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden px-6 md:px-16 bg-gradient-to-br from-[#e9f2ff] via-[#f8fbff] to-[#ffffff]">
      {/* 🔵 Animated Gradient Blobs */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tr from-blue-400/30 via-sky-300/20 to-cyan-400/30 blur-[120px] -z-10"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-sky-200/30 via-blue-300/30 to-indigo-300/20 blur-[120px] -z-10"
        animate={{ x: [0, -15, 0], y: [0, -20, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ✅ Main Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-8 w-full max-w-7xl">
        {/* LEFT SIDE CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-5 text-center md:text-left"
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900 tracking-tight">
            Unifying teams for predictable <span className="text-blue-600">revenue growth</span>.
          </h1>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
            Yombly integrates hiring, learning, and intelligence into one streamlined ecosystem — designed to boost
            performance, clarity, and measurable results.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all"
            >
              Talk to Us <ArrowForward className="ml-2" fontSize="small" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center rounded-md border border-blue-600 text-blue-700 hover:bg-blue-50 px-6 py-2.5 text-sm font-medium transition-all"
            >
              Book a Consultation
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative rounded-xl overflow-hidden border border-blue-100 bg-white shadow-md">
            <Image
              src="/abstract-dashboard-showing-unified-modules-hiring-.jpg"
              alt="Unified Revenue Platform"
              width={440}
              height={340}
              className="rounded-xl"
              priority
            />
            <motion.div
              className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-400"
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
