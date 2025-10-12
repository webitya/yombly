"use client";

import { motion } from "framer-motion";
import { MailOutline, CalendarToday } from "@mui/icons-material";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-[#f6faff] via-[#edf4ff] to-[#ffffff] text-center">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-15%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-blue-200/40 via-sky-100/30 to-indigo-200/40 blur-[120px] -z-10"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-15%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-indigo-200/30 via-blue-100/25 to-sky-200/25 blur-[100px] -z-10"
        animate={{ x: [0, -15, 0], y: [0, -10, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Ready to build a predictable revenue engine?
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          We’re here to help you design the sales productivity system your company deserves.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 text-white px-6 py-3 text-sm md:text-base font-medium shadow-md hover:bg-blue-700 transition-all"
          >
            <MailOutline fontSize="small" />
            Talk to Us
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-blue-200 bg-white px-6 py-3 text-sm md:text-base font-medium text-blue-700 hover:bg-blue-50 transition-all"
          >
            <CalendarToday fontSize="small" />
            Book a Consultation
          </motion.a>
        </div>
      </div>
    </section>
  );
}
