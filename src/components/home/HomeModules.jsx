"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PeopleIcon from "@mui/icons-material/People"
import SchoolIcon from "@mui/icons-material/School"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WorkIcon from "@mui/icons-material/Work"
import GroupIcon from "@mui/icons-material/Group"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"
import PuzzleIcon from "@mui/icons-material/Extension"
import TargetIcon from "@mui/icons-material/TrackChanges"

const tabs = [
  { id: 1, title: "Team-Building", icon: <PeopleIcon />, image: "/hero.png" },
  { id: 2, title: "Mentoring", icon: <SchoolIcon />, image: "/hero.png" },
  { id: 3, title: "Leadership", icon: <LeaderboardIcon />, image: "/hero.png" },
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const intervalRef = useRef(null)
  const timeoutRef = useRef(null)

  const startAutoRotate = () => {
    intervalRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 5000) // ⏱️ changed to 5 seconds
  }

  useEffect(() => {
    startAutoRotate()
    return () => {
      clearInterval(intervalRef.current)
      clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleTabClick = (index) => {
    setActiveTab(index)
    clearInterval(intervalRef.current)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => startAutoRotate(), 180000)
  }

  return (
    <div className="flex flex-col items-center w-full px-3 py-8 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabClick(index)}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: activeTab === index ? 1.05 : 1,
              backgroundColor: activeTab === index ? "#1e3a8a" : "#ffffff",
              color: activeTab === index ? "#ffffff" : "#1e3a8a",
              boxShadow:
                activeTab === index
                  ? "0 4px 10px rgba(30,58,138,0.25)"
                  : "0 1px 3px rgba(0,0,0,0.1)",
            }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium transition-all duration-300 hover:shadow-sm hover:bg-blue-50"
          >
            {tab.icon}
            <span>{tab.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <div className="relative w-full max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-4 bg-white/80 backdrop-blur-lg rounded-2xl shadow-md p-5 border border-gray-100"
          >
            <div className="flex flex-col justify-start space-y-2 overflow-y-auto max-h-[400px] pr-1 scrollbar-thin scrollbar-thumb-blue-300">
              {activeTab === 0 && <TeamBuilding />}
              {activeTab === 1 && <MentoringPrograms />}
              {activeTab === 2 && <LeadershipProgram />}
            </div>

            <motion.img
              key={tabs[activeTab].image}
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
              className="w-full h-64 md:h-72 object-contain rounded-xl shadow-sm"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ---------- CONTENT SECTIONS ---------- */
function TeamBuilding() {
  return (
    <div className="text-gray-700 text-[13.5px] leading-relaxed space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Team-Building Solutions</h2>

      <div>
        <p className="font-medium">1. Smart Screening System – Hire Right, Every Time</p>
        <p>Stop wasting time and salary on wrong hires. Our Screening Solution helps you evaluate real capabilities before hiring, so you make confident, data-backed hiring decisions — not guesses.</p>
        <ul className="list-disc pl-5 text-blue-700 space-y-0.5">
          <li><CheckCircleIcon fontSize="small" className="inline mr-1" /> Identify true performers early</li>
          <li><CheckCircleIcon fontSize="small" className="inline mr-1" /> Avoid hiring mismatches</li>
          <li><CheckCircleIcon fontSize="small" className="inline mr-1" /> Save time, cost, and effort in recruitment</li>
        </ul>
      </div>

      <div>
        <p className="font-medium">2. Revenue Team Continuity Service – Keep Your Sales Engine Running</p>
        <p>We manage your sales team hiring, retention, motivation and quarterly performance audits (RCA) to ensure your revenue team stays consistent and accountable.</p>
        <ul className="list-disc pl-5 text-blue-700 space-y-0.5">
          <li><WorkIcon fontSize="small" className="inline mr-1" /> End hiring chaos & turnover</li>
          <li><WorkIcon fontSize="small" className="inline mr-1" /> Build a stable, high-output sales team</li>
          <li><WorkIcon fontSize="small" className="inline mr-1" /> Quarterly actionable insights & growth roadmap</li>
        </ul>
      </div>

      <div>
        <p className="font-medium">3. 30-Day Onboarding Program – Make New Hires Productive Fast</p>
        <p>Most new sales hires take 3 months to become productive. Our Onboarding Process gets them market-ready in 30 days — saving 60+ days of salary per hire across levels.</p>
        <ul className="list-disc pl-5 text-blue-700 space-y-0.5">
          <li><GroupIcon fontSize="small" className="inline mr-1" /> Accelerated training on product, process & pitch</li>
          <li><GroupIcon fontSize="small" className="inline mr-1" /> Structured assessments to ensure readiness</li>
          <li><GroupIcon fontSize="small" className="inline mr-1" /> Proven framework for faster revenue contribution</li>
        </ul>
      </div>
    </div>
  )
}

function MentoringPrograms() {
  return (
    <div className="text-gray-700 text-[13.5px] leading-relaxed space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Mentoring & Capability-Building Programs</h2>

      <p className="font-medium">Monthly Mentoring Sessions – Real Growth for Every Level</p>
      <p>We mentor your team continuously so learning converts into performance.</p>

      <p className="font-medium"><PuzzleIcon fontSize="small" className="inline mr-1" /> Junior Executives</p>
      <ul className="list-disc pl-5 text-blue-700 space-y-0.5">
        <li><WorkIcon fontSize="small" className="inline mr-1" /> Outbound lead generation & account management</li>
        <li><WorkIcon fontSize="small" className="inline mr-1" /> Time planning & goal execution</li>
        <li><WorkIcon fontSize="small" className="inline mr-1" /> Sales conversation building & decision-maker outreach</li>
        <li><WorkIcon fontSize="small" className="inline mr-1" /> Email & content writing</li>
        <li><WorkIcon fontSize="small" className="inline mr-1" /> Prospecting, probing & planning</li>
      </ul>

      <p className="font-medium"><TargetIcon fontSize="small" className="inline mr-1" /> Sales/Marketing Managers</p>
      <ul className="list-disc pl-5 text-blue-700 space-y-0.5">
        <li><AccountTreeIcon fontSize="small" className="inline mr-1" /> Team management & coaching skills</li>
        <li><AccountTreeIcon fontSize="small" className="inline mr-1" /> Hiring & firing strategy</li>
        <li><AccountTreeIcon fontSize="small" className="inline mr-1" /> Process and reporting system development</li>
        <li><AccountTreeIcon fontSize="small" className="inline mr-1" /> Culture and motivation management</li>
        <li><AccountTreeIcon fontSize="small" className="inline mr-1" /> Sales forecasting, pipeline management, and planning</li>
      </ul>
    </div>
  )
}

function LeadershipProgram() {
  return (
    <div className="text-gray-700 text-[13.5px] leading-relaxed space-y-2">
      <h2 className="text-lg font-semibold text-gray-800">Build Your Next Leaders Program</h2>
      <p>Transform promising managers into future business leaders — in 12 months. Ideal for organizations between ₹15 Cr to ₹100 Cr aiming to create a self-sustaining growth engine.</p>

      <p className="font-medium">Deliverables (12-Month Leadership Program):</p>
      <ul className="list-disc pl-5 text-blue-700 space-y-0.5">
        <li><LeaderboardIcon fontSize="small" className="inline mr-1" /> Leadership Audit: Identify 2–3 high-potential team members.</li>
        <li><SchoolIcon fontSize="small" className="inline mr-1" /> Capability Development: Structured curriculum covering strategy, P&L, negotiation, and growth mindset.</li>
        <li><WorkIcon fontSize="small" className="inline mr-1" /> On-the-Job Projects: Quarterly revenue-focused assignments to test leadership skills.</li>
        <li><GroupIcon fontSize="small" className="inline mr-1" /> Mentorship & Coaching: Monthly 1:1 & group mentoring.</li>
        <li><EmojiObjectsIcon fontSize="small" className="inline mr-1" /> Founder Alignment: Quarterly reviews to ensure delegation & ownership transfer.</li>
      </ul>

      <p><EmojiObjectsIcon fontSize="small" className="inline mr-1" /> Outcome: Your business can scale — even when you’re not in every meeting.</p>
    </div>
  )
}
