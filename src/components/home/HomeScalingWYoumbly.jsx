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
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-950 via-slate-950 to-indigo-950 py-20 text-white">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-indigo-500/30 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ x: [0, -80, 0], y: [0, 80, 0], scale: [1.1, 0.9, 1.1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-15%] right-[5%] w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[180px]"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-blue-500/20 rounded-full blur-[140px]"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-10 max-w-6xl text-center relative">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-300 via-blue-400 to-purple-400 bg-clip-text text-transparent"
        >
          Scaling with <span className="text-indigo-300">Yombly</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-3xl mx-auto mb-10 text-sm md:text-base"
        >
          Scaling isn’t about more people—it’s about sharper processes, smarter
          hiring, and better data. Yombly equips you to:
        </motion.p>

        {/* Bullet Points — Compact 1-Line */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-10"
        >
          {points.map((point, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex items-center justify-center gap-2 p-3 bg-white/10 backdrop-blur-xl rounded-xl border border-white/10 shadow-sm hover:shadow-lg hover:bg-white/20 transition-all duration-300"
            >
              <CheckCircleIcon className="text-indigo-300" fontSize="small" />
              <span className="text-gray-100 text-sm font-medium">
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
            className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 text-white font-medium text-sm md:text-base shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            Talk to a Growth Advisor
            <ArrowForwardIcon fontSize="small" className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
