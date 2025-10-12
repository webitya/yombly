"use client";

import { motion } from "framer-motion";
import Section from "./section";
import Image from "next/image";

// Logos array (excluding team5.png and team16.png)
const logos = [
  { src: "/team2.png", alt: "Team 2" },
  { src: "/team3.png", alt: "Team 3" },
  { src: "/team6.png", alt: "Team 6" },
  { src: "/team7.png", alt: "Team 7" },
  { src: "/team8.png", alt: "Team 8" },
  { src: "/team9.png", alt: "Team 9" },
  { src: "/team10.png", alt: "Team 10" },
  { src: "/team11.png", alt: "Team 11" },
  { src: "/team12.png", alt: "Team 12" },
  { src: "/team13.png", alt: "Team 13" },
  { src: "/team17.png", alt: "Team 17" },
];

export default function Industries() {
  return (
    <section className="relative overflow-hidden py-12 md:py-16 bg-gradient-to-br from-[#f7fbff] via-[#eef5ff] to-[#ffffff]">
      {/* Subtle animated radial gradient background */}
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
        <div className="overflow-hidden relative w-full flex justify-center">
          <motion.div
            className="flex gap-6 justify-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-32 h-20 flex items-center justify-center rounded-lg border border-blue-100/60 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all relative"
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={100}
                  height={100}
                  className="object-contain w-24 h-16 opacity-80 hover:opacity-100 transition-opacity duration-300 mx-auto"
                />
                {/* Subtle glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-200/20 via-sky-200/10 to-indigo-200/20 blur-2xl opacity-0 hover:opacity-70 transition-all duration-500"
                  animate={{ opacity: [0.2, 0.5, 0.2] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </section>
  );
}
