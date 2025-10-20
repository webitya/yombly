"use client"
import Link from "next/link"
import CloudIcon from "@mui/icons-material/Cloud"
import ShieldIcon from "@mui/icons-material/Shield"
import QueryStatsIcon from "@mui/icons-material/QueryStats"
import EmailIcon from "@mui/icons-material/Email"
import PsychologyIcon from "@mui/icons-material/Psychology"
import GroupsIcon from "@mui/icons-material/Groups"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import { SchoolIcon, TrendingUpDownIcon } from "lucide-react"
import { motion } from "framer-motion";
import AIBadge from "@/data/demo"

export default function HeroSection() {
  return (
    <section className="relative isolate min-h-[72vh] lg:min-h-[90vh] overflow-hidden flex items-center justify-center bg-background text-foreground">
      {/* Animated grid lines */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-[size:48px_48px]"
          style={{ animation: "gridMove 22s linear infinite" }}
        />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_20%,rgba(0,112,243,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_80%,rgba(0,112,243,0.05)_0%,transparent_50%)]" />
      </div>

      {/* Scanner sweep */}
      <div
        className="pointer-events-none absolute inset-0 z-[1] mix-blend-multiply opacity-15"
        aria-hidden="true"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(0,112,243,0.06) 45%, transparent 55%)",
          backgroundSize: "100% 220%",
          animation: "scan 10s linear infinite",
        }}
      />

      {/* Glow orbs */}
      <div
        className="pointer-events-none absolute top-[-14%] left-[-8%] w-[42vw] h-[42vw] bg-gradient-to-r from-[#0070F3]/15 to-[#1A73E8]/10 rounded-full blur-[110px] z-0"
        style={{ animation: "float1 16s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute bottom-[-18%] right-[-10%] w-[46vw] h-[46vw] bg-gradient-to-tr from-[#1A73E8]/10 via-[#0070F3]/8 to-[#4DA3FF]/12 rounded-full blur-[130px] z-0"
        style={{ animation: "float2 20s ease-in-out infinite" }}
      />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center py-8">
        {/* Left */}
        <div className="text-center lg:text-left space-y-4" style={{ animation: "fadeUp 0.9s ease-out" }}>
<AIBadge/>




          <h1 className="text-[28px] md:text-[34px] lg:text-[38px] font-bold leading-tight text-balance">
            Build, Grow & Future-Proof{" "}
            <span
              className="bg-gradient-to-r from-[#0A66C2] via-[#2F8AF5] to-[#66A9FF] text-transparent bg-clip-text bg-[length:200%_auto]"
              style={{ animation: "gradientShift 6s ease infinite" }}
            >
              Your revenue Teams — All in One Platform
            </span>
          </h1>

          <p className="text-muted-foreground text-sm md:text-[15px] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            From smarter hiring to stronger performance — one continuous intelligence system.
          </p>

          {/* Feature Pills - compact */}
<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    justifyContent: "start",
  }}
>
  {/* Pill 1 */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 8px",
      borderRadius: "9999px",
      fontSize: "11.5px",
      fontWeight: 500,
      color: "#1f2937",
      background: "linear-gradient(135deg, #f3e8ff, #faf5ff)",
      border: "1px solid #d8b4fe",
      boxShadow: "0 0 6px rgba(216, 180, 254, 0.4)",
      // animation: "glow1 3s ease-in-out infinite",
    }}
  >
    <span
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#a855f7",
        display: "inline-block",
      }}
    ></span>
    Revenue Team Building
  </div>

  {/* Pill 2 */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 8px",
      borderRadius: "9999px",
      fontSize: "11.5px",
      fontWeight: 500,
      color: "#1f2937",
      background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
      border: "1px solid #93c5fd",
      boxShadow: "0 0 6px rgba(147, 197, 253, 0.4)",
      // animation: "glow2 3s ease-in-out infinite 0.3s",
    }}
  >
    <span
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#3b82f6",
        display: "inline-block",
      }}
    ></span>
    Training & Mentoring
  </div>

  {/* Pill 3 */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "4px 8px",
      borderRadius: "9999px",
      fontSize: "11.5px",
      fontWeight: 500,
      color: "#1f2937",
      background: "linear-gradient(135deg, #fef3c7, #fff8e1)",
      border: "1px solid #fde68a",
      boxShadow: "0 0 6px rgba(253, 230, 138, 0.4)",
      // animation: "glow3 3s ease-in-out infinite 0.6s",
    }}
  >
    <span
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "#fbbf24",
        display: "inline-block",
      }}
    ></span>
    Performance Optimization
  </div>

  {/* Keyframes for glow only */}
  <style>
    {`
      @keyframes glow1 {
        0%, 100% { box-shadow: 0 0 6px rgba(216, 180, 254, 0.4); }
        50% { box-shadow: 0 0 12px rgba(168, 85, 247, 0.7); }
      }
      @keyframes glow2 {
        0%, 100% { box-shadow: 0 0 6px rgba(147, 197, 253, 0.4); }
        50% { box-shadow: 0 0 12px rgba(59, 130, 246, 0.7); }
      }
      @keyframes glow3 {
        0%, 100% { box-shadow: 0 0 6px rgba(253, 230, 138, 0.4); }
        50% { box-shadow: 0 0 12px rgba(251, 191, 36, 0.7); }
      }
    `}
  </style>
</div>



          {/* CTAs - compact */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-1">
            <Link
              href="/contact"
              className="group relative px-6 py-2.5 text-sm md:text-base font-semibold rounded-md bg-gradient-to-r from-[#0A66C2] to-[#2F8AF5] hover:from-[#004182] hover:to-[#0A66C2] text-white shadow-lg shadow-[#0A66C2]/35 transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl hover:shadow-[#0A66C2]/45"
            >
              <span className="flex items-center gap-2">
                <RocketLaunchIcon fontSize="small" />
                Start Journey
              </span>
            </Link>
            <Link
              href="/tickets/raise"
              className="group relative px-6 py-2.5 text-sm md:text-base font-semibold rounded-md border-2 border-[#0A66C2]/50 text-[#2F8AF5] hover:bg-[#0A66C2]/10 hover:border-[#0A66C2] transition-all duration-300 transform hover:scale-[1.03]"
            >
              <span className="flex items-center gap-2">
                <HelpOutlineIcon fontSize="small" />
                Get 1 Business Query Solved Free!
              </span>
            </Link>
          </div>

          {/* Stats - compact */}
          <div className="grid grid-cols-3 gap-3 pt-4 max-w-md mx-auto lg:mx-0">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-blue-600">500+</div>
              <div className="text-xs md:text-[13px] text-muted-foreground mt-0.5">Enterprises</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-blue-600">99%</div>
              <div className="text-xs md:text-[13px] text-muted-foreground mt-0.5">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-xs md:text-[13px] text-muted-foreground mt-0.5">Support</div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="relative z-10 flex justify-center lg:justify-end" style={{ animation: "fadeIn 1s ease-out" }}>
          {/* Glow behind image */}
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#0A66C2]/30 via-[#004182]/20 to-[#2F8AF5]/30 rounded-2xl blur-3xl opacity-60"
            style={{ animation: "pulse 3.8s ease-in-out infinite" }}
          />
          <div className="relative">
            {/* Techy animated background layers behind the image */}
            <div className="pointer-events-none absolute inset-0 z-[2]">
              <div
                className="absolute inset-0 opacity-70 bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)] bg-[size:24px_24px]"
                style={{
                  animation: "gridMove 18s linear infinite",
                  maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 35%, black 60%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 35%, black 60%)",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#2F8AF5]/30 w-[540px] h-[540px] md:w-[600px] md:h-[600px]"
                style={{ animation: "rotateSlow 24s linear infinite" }}
                aria-hidden="true"
              />
              <div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#0A66C2]/25 w-[440px] h-[440px]"
                style={{ animation: "rotateSlow 18s linear reverse infinite" }}
                aria-hidden="true"
              />

              {/* Circuit lines: horizontal + vertical dashed flows */}
              <div
                className="absolute left-0 right-0 top-[15%] h-[2px] opacity-60"
                style={{
                  background: "repeating-linear-gradient(90deg, rgba(10,102,194,0.55) 0 14px, transparent 14px 30px)",
                  animation: "dashMoveX 10s linear infinite",
                }}
                aria-hidden="true"
              />
              <div
                className="absolute left-[10%] bottom-[18%] w-[2px] top-[12%] opacity-60"
                style={{
                  background: "repeating-linear-gradient(180deg, rgba(10,102,194,0.6) 0 14px, transparent 14px 30px)",
                  animation: "dashMoveY 12s linear infinite",
                }}
                aria-hidden="true"
              />

              {/* Micro particles */}
              <span
                className="absolute w-1 h-1 rounded-full bg-[#2F8AF5]/90 blur-[0.5px] left-[12%] top-[22%]"
                style={{ animation: "drift 8s ease-in-out infinite" }}
              />
              <span
                className="absolute w-1 h-1 rounded-full bg-[#66A9FF]/90 blur-[0.5px] left-[76%] top-[12%]"
                style={{ animation: "drift 7s 0.5s ease-in-out infinite" }}
              />
              <span
                className="absolute w-1 h-1 rounded-full bg-[#2F8AF5]/80 blur-[0.5px] left-[82%] top-[64%]"
                style={{ animation: "drift 9s 0.2s ease-in-out infinite" }}
              />
              <span
                className="absolute w-1 h-1 rounded-full bg-[#66A9FF]/80 blur-[0.5px] left-[18%] top-[70%]"
                style={{ animation: "drift 10s 0.8s ease-in-out infinite" }}
              />
              <span
                className="absolute w-1 h-1 rounded-full bg-[#2F8AF5]/90 blur-[0.5px] left-[44%] top-[8%]"
                style={{ animation: "drift 8.5s 1.1s ease-in-out infinite" }}
              />
            </div>

            <div className="relative z-10 rounded-xl overflow-hidden  transition-all duration-500   backdrop-blur-sm">
              <img
                src="/homeherof.webp"
                alt="Enterprise AI dashboard preview"
                className="w-auto h-auto max-w-[780px] md:max-w-[840px] lg:max-w-[840px] max-h-[70vh] object-contain"
              />
              {/* Scanner overlay */}
              {/* <div
                className="pointer-events-none absolute inset-0"
                aria-hidden="true"
                style={{
                  background: "linear-gradient(180deg, transparent 0%, rgba(10,102,194,0.12) 45%, transparent 55%)",
                  backgroundSize: "100% 200%",
                  animation: "scan 3.5s linear infinite",
                  mixBlendMode: "screen",
                }}
              /> */}
            </div>
            {/* Floating feature chips remain */}
        <div
  className="absolute z-20 top-[-14px] right-[-32px] hidden lg:block"
  style={{ animation: "floatCard 4s ease-in-out 0s infinite" }}
>
  <div className="flex items-center gap-2 px-3 py-2 bg-white/70 border border-blue-200 rounded-full text-xs font-medium text-gray-700 shadow-md shadow-blue-100 backdrop-blur-sm hover:scale-[1.05] transition-transform duration-300 whitespace-nowrap">
    <span className="text-blue-500">
      <EmailIcon fontSize="small" />
    </span>
    <span>AI Based Mentoring</span>
  </div>
</div>

          <div
  className="absolute z-20 bottom-[-14px] right-[-32px] hidden lg:block"
  style={{ animation: "floatCard 4s ease-in-out 0.25s infinite" }}
>
  <div className="flex items-center gap-2 px-3 py-2 bg-white/70 border border-blue-200 rounded-full text-xs font-medium text-gray-700 shadow-md shadow-blue-100 backdrop-blur-sm hover:scale-[1.05] transition-transform duration-300 whitespace-nowrap">
    <span className="text-blue-500">
      <PsychologyIcon fontSize="small" />
    </span>
    <span>Smart Insights</span>
  </div>
</div>

           <div
  className="absolute z-20 top-[36%] left-[-56px] hidden lg:block"
  style={{ animation: "floatCard 4s ease-in-out 0.5s infinite" }}
>
  <div className="flex items-center gap-2 px-3 py-2 bg-white/70 border border-blue-200 rounded-full text-xs font-medium text-gray-700 shadow-md shadow-blue-100 backdrop-blur-sm hover:scale-[1.05] transition-transform duration-300 whitespace-nowrap">
    <span className="text-blue-500">
      <GroupsIcon fontSize="small" />
    </span>
    <span>AI Matchmaking</span>
  </div>
</div>
<div
  className="absolute z-20 bottom-[-20px] left-[16%] hidden lg:block"
  style={{ animation: "floatCard 4s ease-in-out 0.75s infinite" }}
>
  <div className="flex items-center gap-2 px-3 py-2 bg-white/70 border border-blue-200 rounded-full text-xs font-medium text-gray-700 shadow-md shadow-blue-100 backdrop-blur-sm hover:scale-[1.05] transition-transform duration-300 whitespace-nowrap">
    <span className="text-blue-500">
      <QueryStatsIcon fontSize="small" />
    </span>
    <span>Data Analytics</span>
  </div>
</div>

          <div
  className="absolute z-20 top-[-8px] left-[26%] hidden lg:block"
  style={{ animation: "floatCard 4s ease-in-out 1s infinite" }}
>
  <div className="flex items-center gap-2 px-3 py-2 bg-white/70 border border-blue-200 rounded-full text-xs font-medium text-gray-700 shadow-md shadow-blue-100 backdrop-blur-sm hover:scale-[1.05] transition-transform duration-300 whitespace-nowrap">
    <span className="text-blue-500">
      <RocketLaunchIcon fontSize="small" />
    </span>
    <span>Growth Sync</span>
  </div>
</div>

          </div>
        </div>
      </div>

      {/* Restore animation keyframes used by the techy background */}
      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(28px, -18px) scale(1.06); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 26px) scale(1.1); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(32px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.94); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 0.88; transform: scale(1.04); }
        }
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes gridMove {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 72px 72px, 72px 72px; }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scan {
          0% { background-position: 0% -100%; }
          100% { background-position: 0% 200%; }
        }
        @keyframes rotateSlow {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes dashMoveX {
          0% { background-position: 0 0; }
          100% { background-position: 600px 0; }
        }
        @keyframes dashMoveY {
          0% { background-position: 0 0; }
          100% { background-position: 0 600px; }
        }
        @keyframes drift {
          0% { transform: translate(0, 0) scale(1); opacity: 0.9; }
          50% { transform: translate(8px, -6px) scale(1.1); opacity: 1; }
          100% { transform: translate(0, 0) scale(1); opacity: 0.9; }
        }
      `}</style>
    </section>
  )
}
