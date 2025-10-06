"use client";

import Image from "next/image";
import Link from "next/link";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import StarsIcon from "@mui/icons-material/Stars";
import EmailIcon from "@mui/icons-material/Email";
import PsychologyIcon from "@mui/icons-material/Psychology";
import GroupWorkIcon from "@mui/icons-material/GroupWork";
import InsightsIcon from "@mui/icons-material/Insights";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#F6F7FF] via-[#FAFAFF] to-[#FFFFFF] overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[-15%] left-[-15%] w-[35vw] h-[35vw] bg-gradient-to-r from-[#6E54FF]/40 to-[#3DD1E7]/40 rounded-full blur-[100px] animate-blob1 opacity-50" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] bg-gradient-to-tr from-[#3DD1E7]/30 via-[#7B5CFF]/30 to-[#A48BFF]/30 rounded-full blur-[120px] animate-blob2 opacity-60" />

      <div className="absolute inset-0 backdrop-blur-[70px] bg-white/10 pointer-events-none" />

      {/* Main grid */}
      <div className="relative z-10 container mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left space-y-5 animate-fadeUp">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-[#5C4EFF]/15 to-[#3DD1E7]/15 border border-[#5C4EFF]/30 text-xs md:text-sm font-medium text-[#101010] shadow-sm shadow-[#5C4EFF]/20">
            <StarsIcon fontSize="small" className="text-[#5C4EFF]" /> Growth Platform
          </div>

          <h1 className="text-2xl md:text-4xl xl:text-5xl font-extrabold leading-snug text-[#0A0A0A] drop-shadow-[0_1px_1px_rgba(92,78,255,0.2)]">
            Empower{" "}
            <span className="bg-gradient-to-r from-[#6E54FF] via-[#4C8BFF] to-[#3DD1E7] text-transparent bg-clip-text animate-gradientMove">
              Smarter Sales & Marketing Teams
            </span>
          </h1>

          <p className="text-[#303030] text-sm md:text-base max-w-md mx-auto md:mx-0 leading-relaxed">
            Yombly helps companies hire the right-fit sales & marketing talent, continuously upskill them with real-world market intelligence, and keep teams future-ready.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-3">
            <Link
              href="/start-revenue"
              className="px-6 py-2.5 text-sm md:text-base font-semibold rounded-xl bg-gradient-to-r from-[#5C4EFF] to-[#3DD1E7] hover:opacity-90 text-white shadow-lg shadow-[#5C4EFF]/30 transition-transform transform hover:-translate-y-1"
            >
              <span className="inline-flex items-center gap-2">
                <RocketLaunchIcon fontSize="small" /> Start Journey
              </span>
            </Link>
            <Link
              href="/book-demo"
              className="px-6 py-2.5 text-sm md:text-base font-semibold rounded-xl border border-[#5C4EFF]/40 text-[#101010] hover:bg-[#5C4EFF]/10 transition-transform transform hover:-translate-y-1"
            >
              Book Demo
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative flex justify-center md:justify-end animate-fadeIn">
          {/* Accent Glow */}
          <div className="absolute -top-6 -left-6 w-[120%] h-[120%] bg-gradient-to-tr from-[#A48BFF]/40 via-[#E1E6FF]/50 to-[#3DD1E7]/30 rounded-full blur-3xl opacity-70 -z-10 animate-pulse-slow"></div>

          {/* Image Container */}
          <div className="relative w-fit">
            <Image
              src="/hero.png"
              alt="Hero illustration"
              width={380}
              height={320}
              className="rounded-2xl shadow-2xl border border-[#E5E4FF]/50 hover:scale-[1.03] transition-transform duration-500 relative z-10"
              priority
            />

            {/* Floating Pills - now spaced out properly and visible */}
            <div className="absolute z-20 -top-14 right-[-70px] animate-pill1">
              <Pill icon={<EmailIcon fontSize="small" />} text="Automated Emails" />
            </div>
            <div className="absolute z-20 bottom-[-30px] right-[-60px] animate-pill2">
              <Pill icon={<PsychologyIcon fontSize="small" />} text="Smart Insights" />
            </div>
            <div className="absolute z-20 top-[35%] -left-[90px] animate-pill3">
              <Pill icon={<GroupWorkIcon fontSize="small" />} text="AI Matchmaking" />
            </div>
            <div className="absolute z-20 -bottom-16 left-[25%] animate-pill4">
              <Pill icon={<InsightsIcon fontSize="small" />} text="Data Analytics" />
            </div>
            <div className="absolute z-20 -top-12 left-[35%] animate-pill5">
              <Pill icon={<AutoGraphIcon fontSize="small" />} text="Growth Sync" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -15px) scale(1.05); }
        }
        @keyframes blob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-25px, 25px) scale(1.1); }
        }
        .animate-blob1 { animation: blob1 16s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 20s ease-in-out infinite; }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 1s ease-out; }

        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 1s ease-out 0.2s both; }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.03); }
        }
        .animate-pulse-slow { animation: pulseSlow 5s ease-in-out infinite; }

        @keyframes gradientMove {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        /* Pill floating animations */
        @keyframes pillFloat1 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
        @keyframes pillFloat2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
        @keyframes pillFloat3 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-14px); } }
        @keyframes pillFloat4 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(8px); } }
        @keyframes pillFloat5 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }

        .animate-pill1 { animation: pillFloat1 4s ease-in-out infinite; }
        .animate-pill2 { animation: pillFloat2 5s ease-in-out infinite; }
        .animate-pill3 { animation: pillFloat3 6s ease-in-out infinite; }
        .animate-pill4 { animation: pillFloat4 4.5s ease-in-out infinite; }
        .animate-pill5 { animation: pillFloat5 5.5s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function Pill({ icon, text }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-white/80 border border-[#CFCBFF]/50 rounded-full text-xs font-medium text-[#0A0A0A] shadow-md shadow-[#5C4EFF]/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300 whitespace-nowrap z-30">
      <span className="text-[#5C4EFF]">{icon}</span>
      {text}
    </div>
  );
}
