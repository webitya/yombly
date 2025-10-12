"use client";

import { motion } from "framer-motion";
import Section from "./section";

const values = [
  {
    title: "Clarity over Chaos",
    desc: "We remove noise and provide leaders with data that drives decisions.",
  },
  {
    title: "Performance-first",
    desc: "Every strategy, hire, and insight ties directly back to measurable growth.",
  },
  {
    title: "Future-ready Teams",
    desc: "Sales never stands still—your talent and systems shouldn’t either.",
  },
  {
    title: "Unified Growth",
    desc: "No silos, no scattered vendors—just one source of truth that scales.",
  },
];

export default function Values() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-[#f7faff] via-[#eef4ff] to-[#ffffff]">
      {/* 🩵 Animated soft blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-sky-200/30 via-blue-200/20 to-cyan-200/25 blur-[100px] -z-10"
        animate={{ x: [0, 15, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-bl from-indigo-200/25 via-blue-100/25 to-sky-100/25 blur-[90px] -z-10"
        animate={{ x: [0, -15, 0], y: [0, -10, 0], scale: [1, 1.03, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <Section id="values" title="Our Values">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-xl border border-blue-100/60 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all p-6 cursor-default"
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100/20 via-transparent to-sky-100/20 opacity-0 group-hover:opacity-60 blur-2xl transition-all duration-700"
              />
              <h3 className="text-base font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}
