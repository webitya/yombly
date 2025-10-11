"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function HomeScalingWithYombly() {
  const points = [
    "Hire your first sales team the right way",
    "Train them with market-proven strategies",
    "Build repeatable revenue playbooks",
    "Gain confidence in scale decisions",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-50 to-pink-50 py-16 md:py-20 text-gray-800">
      {/* 🌈 Animated soft orbs background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[10%] w-[350px] h-[350px] bg-sky-300/30 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ x: [0, -70, 0], y: [0, 70, 0], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[5%] w-[400px] h-[400px] bg-indigo-300/25 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-pink-300/25 rounded-full blur-[140px]"
        />
      </div>

      {/* 💼 Content */}
      <div className="container mx-auto px-6 md:px-10 max-w-6xl text-center relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-indigo-600 to-pink-600 bg-clip-text text-transparent"
        >
          Scaling with{" "}
          <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Yombly
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-3xl mx-auto mb-10 text-sm md:text-base leading-relaxed"
        >
          Scaling isn’t about more people — it’s about sharper processes,
          smarter hiring, and stronger data foundations. Yombly empowers you to:
        </motion.p>

        {/* Bullet Points */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10"
        >
          {points.map((point, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center justify-center gap-2 p-4 bg-white/70 backdrop-blur-xl rounded-xl border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_20px_rgba(56,189,248,0.15)] hover:scale-[1.02] transition-all duration-400"
            >
              <CheckCircleIcon className="text-sky-500" fontSize="small" />
              <span className="text-gray-700 text-sm font-medium">
                {point}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-pink-500 text-white font-medium text-sm md:text-base shadow-md hover:shadow-lg hover:scale-[1.05] transition-all duration-300"
          >
            Talk to a Growth Advisor
            <ArrowForwardIcon fontSize="small" className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
