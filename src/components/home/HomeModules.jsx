"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PeopleIcon from "@mui/icons-material/People"
import SchoolIcon from "@mui/icons-material/School"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WorkIcon from "@mui/icons-material/Work"
import GroupIcon from "@mui/icons-material/Group"
import AccountTreeIcon from "@mui/icons-material/AccountTree"

const tabs = [
  {
    id: 1,
    title: "Team-Building Solutions",
    icon: <PeopleIcon />,
    image: "/hero.png",
  },
  {
    id: 2,
    title: "Mentoring Programs",
    icon: <SchoolIcon />,
    image: "/hero.png",
  },
  {
    id: 3,
    title: "Build Your Next Leaders",
    icon: <LeaderboardIcon />,
    image: "/hero.png",
  },
]

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0)

  // Auto-change tab every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center w-full px-4 py-12 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-200 rounded-full blur-3xl opacity-40" />

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12 z-10">
        {tabs.map((tab, index) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveTab(index)}
            whileTap={{ scale: 0.96 }}
            animate={{
              scale: activeTab === index ? 1.05 : 1,
              backgroundColor:
                activeTab === index ? "#16a34a" : "rgba(255,255,255,0.8)",
              color: activeTab === index ? "#fff" : "#374151",
              boxShadow:
                activeTab === index
                  ? "0px 6px 16px rgba(22,163,74,0.4)"
                  : "0px 2px 6px rgba(0,0,0,0.05)",
            }}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-200 font-medium backdrop-blur-sm transition-all"
          >
            {tab.icon}
            {tab.title}
          </motion.button>
        ))}
      </div>

      {/* Animated Content */}
      <div className="relative w-full max-w-6xl z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid md:grid-cols-2 gap-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-gray-100"
          >
            {/* Left - Text */}
            <div className="flex flex-col justify-center">
              {activeTab === 0 && <TeamBuilding />}
              {activeTab === 1 && <MentoringPrograms />}
              {activeTab === 2 && <LeadershipProgram />}
            </div>

            {/* Right - Image */}
            <motion.img
              key={tabs[activeTab].image}
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full h-[350px] object-contain rounded-2xl drop-shadow-xl hover:scale-[1.02] transition-transform"
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
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Team-Building Solutions
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Build strong, high-performing teams with proven hiring and onboarding systems.
      </p>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <CheckCircleIcon className="text-green-600" />
          <span>Smart Screening System – Hire Right, Every Time</span>
        </li>
        <li className="flex items-center gap-3">
          <WorkIcon className="text-green-600" />
          <span>Revenue Team Continuity Service – Keep Your Sales Engine Running</span>
        </li>
        <li className="flex items-center gap-3">
          <GroupIcon className="text-green-600" />
          <span>30-Day Onboarding Program – Make New Hires Productive Fast</span>
        </li>
      </ul>
    </div>
  )
}

function MentoringPrograms() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Mentoring & Capability-Building Programs
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Continuous mentoring that transforms skills into consistent performance and measurable growth.
      </p>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <AccountTreeIcon className="text-green-600" />
          <span>Monthly mentoring for all team levels</span>
        </li>
        <li className="flex items-center gap-3">
          <WorkIcon className="text-green-600" />
          <span>Sales & Marketing Leadership Development</span>
        </li>
        <li className="flex items-center gap-3">
          <GroupIcon className="text-green-600" />
          <span>Continuous learning culture creation</span>
        </li>
      </ul>
    </div>
  )
}

function LeadershipProgram() {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Build Your Next Leaders Program
      </h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Transform promising managers into future business leaders — in 12 months.
      </p>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center gap-3">
          <LeaderboardIcon className="text-green-600" />
          <span>Leadership Audit: Identify high-potential team members</span>
        </li>
        <li className="flex items-center gap-3">
          <SchoolIcon className="text-green-600" />
          <span>Capability Development: Strategy, P&L, Negotiation Skills</span>
        </li>
        <li className="flex items-center gap-3">
          <WorkIcon className="text-green-600" />
          <span>On-the-Job Projects: Quarterly Leadership Assignments</span>
        </li>
        <li className="flex items-center gap-3">
          <GroupIcon className="text-green-600" />
          <span>Mentorship & Coaching: Monthly 1:1 Sessions</span>
        </li>
        <li className="flex items-center gap-3">
          <CheckCircleIcon className="text-green-600" />
          <span>Founder Alignment: Ownership Transfer & Growth Roadmap</span>
        </li>
      </ul>
    </div>
  )
}
