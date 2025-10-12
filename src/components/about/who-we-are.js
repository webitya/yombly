"use client";

import { motion } from "framer-motion";
import Section from "./section";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import GroupsIcon from "@mui/icons-material/Groups";

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-br from-[#f6f9ff] via-[#eef3ff] to-[#ffffff]">
      {/* 🔵 Animated subtle gradient blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-tr from-blue-300/25 via-sky-200/20 to-cyan-200/20 blur-[100px] -z-10"
        animate={{ x: [0, 20, 0], y: [0, 15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-br from-indigo-200/20 via-sky-100/20 to-blue-200/30 blur-[100px] -z-10"
        animate={{ x: [0, -15, 0], y: [0, -10, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🧩 Section Wrapper */}
      <Section id="who" title="Who We Are">
        <div className="grid gap-10 md:grid-cols-2 items-center max-w-6xl mx-auto px-4 md:px-0">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
              Empowering businesses with{" "}
              <span className="text-blue-600">strategy, structure & scalability.</span>
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <BusinessCenterIcon className="text-blue-600 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Partnered with <strong>100+ organizations</strong> across diverse industries.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUpIcon className="text-blue-600 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Built and scaled <strong>sales engines</strong> from ground zero to multi-crore revenues.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <QueryStatsIcon className="text-blue-600 mt-0.5" />
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  Eliminated inefficiencies with <strong>data-driven, repeatable growth systems.</strong>
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Team Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl border border-blue-100/60 bg-white/60 backdrop-blur-sm shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-8"
          >
            {/* Glow accent */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-100/30 via-transparent to-cyan-100/30 blur-2xl opacity-70 -z-10"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="flex flex-col items-center justify-center text-center space-y-4">
              <div className="flex items-center justify-center gap-3 rounded-xl bg-gradient-to-br from-blue-50 via-white to-sky-50 border border-blue-100 p-10 w-full">
                <GroupsIcon className="text-blue-600 text-4xl" />
              </div>
              <p className="text-gray-500 text-sm font-medium">
                Authentic, founder-led SaaS expertise driving real impact.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
    </section>
  );
}
