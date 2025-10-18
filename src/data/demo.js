"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AIBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F3F6FF] via-[#EEF3FF] to-[#F3F6FF] border border-[#D0DCFF]/60 shadow-[0_0_15px_rgba(175,195,255,0.35)] backdrop-blur-md hover:shadow-[0_0_25px_rgba(175,195,255,0.5)] transition-all duration-500 hover:scale-[1.03]"
    >
      {/* Transparent logo with soft aura */}
      <div className="relative flex items-center justify-center w-6 h-6">
        {/* Outer subtle aura (not touching logo background) */}
        <motion.div
          className="absolute inset-0 rounded-full blur-lg"
          style={{ background: "radial-gradient(circle, rgba(175,195,255,0.35) 0%, transparent 70%)" }}
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Transparent background logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 6, -6, 0],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="relative w-5 h-5"
        >
          <Image
            src="/logoai.webp"
            alt="AI Logo"
            fill
            className="object-contain bg-transparent"
            priority
          />
        </motion.div>
      </div>

      {/* Text */}
      <span className="text-[#3245E8] text-sm font-semibold leading-none tracking-tight select-none">
        AI Revenue Productivity Platform
      </span>
    </motion.div>
  );
}
