"use client";

import { motion } from "framer-motion";
import StarRoundedIcon from "@mui/icons-material/StarRounded"; // You can replace this with any MUI icon

export default function AIBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#F3F6FF] via-[#EEF3FF] to-[#F3F6FF] border border-[#D0DCFF]/60 shadow-[0_0_15px_rgba(175,195,255,0.35)] backdrop-blur-md hover:shadow-[0_0_25px_rgba(175,195,255,0.5)] transition-all duration-500 hover:scale-[1.03]"
    >
      {/* Icon */}
      <div className="relative flex items-center justify-center w-6 h-6">
        {/* Soft glow animation */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#AFC3FF]/50 blur-md"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />

        {/* Animated MUI icon */}
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
        >
          <StarRoundedIcon sx={{ fontSize: 20, color: "#3245E8" }} />
        </motion.div>
      </div>

      {/* Text */}
      <span className="text-[#3245E8] text-sm font-semibold leading-none tracking-tight select-none">
        AI Revenue Productivity Platform
      </span>
    </motion.div>
  );
}
