"use client";

import { motion } from "framer-motion";

export default function SalesPerformanceEnablement() {
  const pillars = [
    {
      title: "Hiring",
      desc: "Ensures you bring in the right talent.",
      color: "#a855f7",
      bg: "linear-gradient(135deg, #f3e8ff, #faf5ff)",
      border: "#d8b4fe",
    },
    {
      title: "Performance Tracking",
      desc: "Ensures accountability and clarity.",
      color: "#3b82f6",
      bg: "linear-gradient(135deg, #dbeafe, #eff6ff)",
      border: "#93c5fd",
    },
    {
      title: "Sales Performance Enablement",
      desc: "Ensures continuous growth and adaptability.",
      color: "#fbbf24",
      bg: "linear-gradient(135deg, #fef3c7, #fff8e1)",
      border: "#fde68a",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-8 overflow-hidden">
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
        >
          Sales Performance Enablement
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto"
        >
          To build a consistently high-performing revenue team, three elements
          must work together in harmony: <strong>Hiring</strong> +{" "}
          <strong>Performance Tracking</strong> +{" "}
          <strong>Sales Performance Enablement.</strong>
        </motion.p>
      </div>

      {/* Compact Pillars */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {pillars.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            style={{
              background: p.bg,
              border: `1px solid ${p.border}`,
              boxShadow: `0 0 10px ${p.color}25`,
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-gray-800 text-xs sm:text-sm font-medium"
          >
            <span
              style={{
                backgroundColor: p.color,
                boxShadow: `0 0 5px ${p.color}80`,
              }}
              className="w-2.5 h-2.5 rounded-full"
            ></span>
            {p.title}
          </motion.div>
        ))}
      </div>

      {/* Description */}
      <div className="text-center text-gray-700 text-sm sm:text-base leading-7 max-w-4xl mx-auto">
        <p className="mb-3">
          A strong <strong>Sales Performance Ena structure</strong> empowers your organization to
          translate potential into performance — by equipping your sales and
          marketing teams with the skills, insights, and behaviors that drive
          revenue.
        </p>
        <p className="mb-3">
          Without continuous learning and clear performance management, even
          great hires lose momentum. For consistent growth, you need the right
          people, effective managers, and an intelligent{" "}
          <strong>Sales Performance Enablement system</strong> working together.
        </p>
        <p className="font-semibold text-gray-900">
          Miss any one of these — and performance will always remain
          inconsistent.
        </p>
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
        className="w-24 h-0.5 bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-400 mx-auto mt-10 rounded-full"
      ></motion.div>
    </section>
  );
}
