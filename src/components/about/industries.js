"use client";

import { motion } from "framer-motion";
import Section from "./section";

const industries = [
  { name: "SaaS", query: "saas logo placeholder" },
  { name: "Manufacturing", query: "manufacturing logo placeholder" },
  { name: "FMCG", query: "fmcg logo placeholder" },
  { name: "Tech", query: "tech logo placeholder" },
  { name: "B2B Services", query: "b2b services logo placeholder" },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-br from-[#f7fbff] via-[#eef5ff] to-[#ffffff]">
      {/* 🌐 Subtle animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(180,210,255,0.2),transparent_70%)] -z-10"
        animate={{ opacity: [0.5, 0.7, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Section
        id="industries"
        title="Industries We Serve"
        subtitle="Powering growth for SaaS, Manufacturing, FMCG, Tech, and B2B organizations."
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="relative group flex h-14 sm:h-16 items-center justify-center rounded-lg border border-blue-100/60 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-200/20 via-sky-200/10 to-indigo-200/20 blur-2xl opacity-0 group-hover:opacity-80 transition-all duration-500 -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Placeholder Logo (replace with real logos later) */}
              <img
                src={`/.jpg?height=40&width=120&query=${encodeURIComponent(industry.query)}`}
                alt={`${industry.name} logo`}
                className="h-7 sm:h-8 w-auto opacity-70 grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>
      </Section>
    </section>
  );
}
