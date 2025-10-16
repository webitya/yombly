"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import SmsIcon from "@mui/icons-material/Sms"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import WorkIcon from "@mui/icons-material/Work"
import GroupIcon from "@mui/icons-material/Group"
import SchoolIcon from "@mui/icons-material/School"
import LeaderboardIcon from "@mui/icons-material/Leaderboard"
import AccountTreeIcon from "@mui/icons-material/AccountTree"
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects"
import PeopleIcon from "@mui/icons-material/People"
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded"
import ExpandLessRoundedIcon from "@mui/icons-material/ExpandLessRounded"

const TABS = [
  { id: 0, title: "Revenue Team Building Solution", icon: PeopleIcon },
  { id: 1, title: "Mentoring", icon: SchoolIcon },
  { id: 2, title: "LeaderShip Developement", icon: LeaderboardIcon },
  { id: 3, title: "Sales Performance Enablement", icon: EmojiObjectsIcon },
]

const TAB_MESSAGES = [
  "Learning that doesn’t stay in the classroom.Our Monthly Mentoring & Capability-Building Programs turn knowledge into measurable performance — helping your teams execute better, lead stronger, and deliver results. From junior executives mastering outreach and time planning to sales managers driving teams, hiring right, and forecasting with precision — we build capability that compounds every month. Outcome: Sharper skills. Stronger teams. Sustainable growth.",
  "Learning that doesn’t stay in the classroom.Our Monthly Mentoring & Capability-Building Programs turn knowledge into measurable performance — helping your teams execute better, lead stronger, and deliver results. From junior executives mastering outreach and time planning to sales managers driving teams, hiring right, and forecasting with precision — we build capability that compounds every month. Outcome: Sharper skills. Stronger teams. Sustainable growth",
  "Turn your top managers into growth-driving leaders — in just 12 months. The “Build Your Next Leaders” Program helps ₹10–100 Cr organizations create a self-sustaining growth engine through leadership audits, capability development, real-world projects, and hands-on mentoring. While your team learns to think like owners, you gain time to focus on scaling — not supervising. Outcome: Your business grows — even when you’re not in every meeting",
  "Hiring top talent isn’t the finish line — it’s just the start. We help your sales and revenue teams sustain performance through a Performance Enablement System that keeps growth on track. By combining Performance Intelligence, Skill Enablement, and Performance Acceleration Support, we don’t just track performance — we transform it. Outcome: Consistent results. Stronger teams. Predictable revenue growth.",
]

export default function ServicesTabs() {
  const [active, setActive] = useState(2) // start on the third to show "active" styling
  const [expanded, setExpanded] = useState(true)
  const intervalRef = useRef(null)
  const pauseRef = useRef(null)
  const durationSec = 5

  const start = () => {
    stop()
    intervalRef.current = setInterval(() => {
      setActive((p) => (p + 1) % TABS.length)
    }, durationSec * 1000)
  }

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    const media = typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)") : null
    if (!media?.matches) start()
    return stop
  }, [])

  const onTabClick = (idx) => {
    setActive(idx)
    stop()
    if (pauseRef.current) clearTimeout(pauseRef.current)
    // pause auto-rotate for 3 minutes after manual interaction
    pauseRef.current = setTimeout(() => start(), 180000)
  }

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault()
      onTabClick((active + 1) % TABS.length)
    } else if (e.key === "ArrowLeft") {
      e.preventDefault()
      onTabClick((active - 1 + TABS.length) % TABS.length)
    }
  }

  const toggleExpand = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="relative w-full py-10">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 opacity-[0.35] bg-[radial-gradient(60%_50%_at_10%_0%,rgba(99,102,241,0.10),transparent_70%),radial-gradient(40%_40%_at_100%_10%,rgba(147,197,253,0.12),transparent_70%)]" />
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>
      <div
        role="tablist"
        aria-label="Services"
        onKeyDown={onKeyDown}
        className="mx-auto flex md:grid md:grid-cols-4 gap-2.5 md:gap-3 max-w-6xl py-3 px-2 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-1"
      >
        {TABS.map((t, idx) => {
          const Icon = t.icon
          const isActive = active === idx
          return (
            <motion.button
              key={t.id}
              role="tab"
              aria-selected={isActive}
              aria-controls={`tab-panel-${idx}`}
              onClick={() => onTabClick(idx)}
              whileTap={{ scale: 0.985 }}
              className={[
                "group relative py-2 snap-start shrink-0 w-[80%] min-w-[230px] md:w-full md:min-w-0 rounded-2xl border",
                "bg-background text-foreground/80",
                "px-3 py-2 md:px-4 md:py-3 text-left shadow-sm transition-colors",
                "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400",
                isActive
                  ? "border-indigo-500/50 ring-1 ring-indigo-500/40 shadow-[0_8px_30px_rgb(99_102_241/0.14)]"
                  : "border-foreground/8 hover:bg-foreground/[0.02]",
              ].join(" ")}
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 0.25 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: "radial-gradient(60% 70% at 50% 0%, rgba(99,102,241,0.35), transparent 70%)",
                }}
              />
              <div className="flex items-center gap-3">
                <span
                  className={[
                    "inline-flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-xl",
                    isActive ? "bg-indigo-600 text-white shadow-md" : "bg-foreground/[0.06] text-indigo-700",
                  ].join(" ")}
                >
                  <Icon fontSize="small" />
                </span>
                <div className="min-w-0">
                  <p
                    className={[
                      "text-[13px] md:text-[15px] font-semibold text-balance",
                      isActive ? "text-foreground" : "text-foreground/80",
                    ].join(" ")}
                  >
                    {t.title}
                  </p>
                  <div className="mt-1.5 md:mt-1.5 h-[1.5px] w-full rounded-full bg-foreground/10 overflow-hidden">
                    {isActive && (
                      <motion.span
                        key={`underline-${idx}-${active}`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: durationSec, ease: "easeInOut" }}
                        className="block h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500"
                      />
                    )}
                  </div>
                </div>
              </div>
              {t.comingSoon && (
                <span className="absolute right-3 top-3 rounded-full bg-foreground/5 px-2 py-0.5 text-[11px] font-medium text-foreground/70">
                  Coming soon
                </span>
              )}
            </motion.button>
          )
        })}
      </div>

      <div className="mx-auto mt-5 md:mt-6 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative grid md:grid-cols-2 items-stretch gap-3.5 md:gap-5 rounded-3xl border border-foreground/10 bg-foreground/[0.03] p-4 md:p-5 shadow-sm min-h-[320px] md:min-h-[380px]"
          >
            <div className="pointer-events-none absolute -inset-1 rounded-[1.6rem] bg-foreground/[0.02]" />
            {/* Left: keep detailed per-tab content */}
            <div
              id={`tab-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`tab-${active}`}
              className="flex h-full flex-col justify-start"
            >
              {active === 0 && <TeamBuilding />}
              {active === 1 && <MentoringPrograms />}
              {active === 2 && <LeadershipProgram />}
              {active === 3 && <LDStructure />}

              <div className="mt-4 md:mt-5">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
                >
                  <CheckCircleIcon fontSize="small" />
                  {"Schedule a demo"}
                </button>
              </div>
            </div>

            {/* Right: unique curved card with per-tab message */}
            <div className="relative h-full flex items-center">
              <CurvedCard title={TABS[active].title} content={TAB_MESSAGES[active]} variant={active} />
              <div className="pointer-events-none absolute -inset-6 md:-inset-10 bg-[radial-gradient(60%_50%_at_100%_10%,_rgba(99,102,241,0.18),_transparent_60%)]" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

/* ---------- CONTENT (adapted from the original file, JS only) ---------- */
function Section({ title, children }) {
  return (
    <div className="mb-4 last:mb-0">
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{title}</h3>
      <div className="text-[13.5px] leading-relaxed text-foreground/80 space-y-2">{children}</div>
    </div>
  )
}

function Bullet({ icon: Icon, children }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 text-indigo-600/90">
        <Icon fontSize="small" />
      </span>
      <span>{children}</span>
    </li>
  )
}

function TeamBuilding() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Section title="Revenue team building solution">
        <p className="font-medium">Smart Screening – Hire Right, Every Time</p>
        <ul className="ml-4 list-disc space-y-1">
          <Bullet icon={CheckCircleIcon}>Identify top performers early</Bullet>
          <Bullet icon={CheckCircleIcon}>Eliminate hiring mismatches</Bullet>
          <Bullet icon={CheckCircleIcon}>Save time, cost, and effort</Bullet>
        </ul>
        <p className="mt-2 text-foreground/80">Outcome: Better hires, faster decisions, stronger teams.</p>
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
          >
            <ExpandMoreRoundedIcon fontSize="small" /> More details
          </button>
        )}
        {open && (
          <>
            <Section title="Pre‑Screened & Intent‑Verified Candidates">
              <p>
                Ready‑to‑interview candidates assessed on 50+ parameters with Role‑Specific Talent Intelligence Reports
                and verified intent.
              </p>
              <p className="mt-2 font-semibold">Includes</p>
              <ul className="ml-4 list-disc space-y-1">
                <Bullet icon={WorkIcon}>50+ parameter competency assessment</Bullet>
                <Bullet icon={WorkIcon}>Expert‑led screening</Bullet>
                <Bullet icon={WorkIcon}>Standardized report</Bullet>
                <Bullet icon={WorkIcon}>Verified interest</Bullet>
              </ul>
              <p className="mt-2 text-foreground/80">Impact: Faster closures and up to 70–80% cost savings.</p>
            </Section>

            <Section title="30‑Day Onboarding Accelerator">
              <ul className="ml-4 list-disc space-y-1">
                <Bullet icon={GroupIcon}>Product knowledge</Bullet>
                <Bullet icon={GroupIcon}>Process mastery</Bullet>
                <Bullet icon={GroupIcon}>Pitch & performance readiness</Bullet>
              </ul>
            </Section>

            <button
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
            >
              <ExpandLessRoundedIcon fontSize="small" /> Show less
            </button>
          </>
        )}
      </Section>
    </div>
  )
}

function MentoringPrograms() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Section title="Mentoring & Capability-Building Programs">
        <p className="font-medium">Monthly mentoring that converts learning into performance.</p>
      </Section>
      <Section title="For Junior Executives">
        <ul className="ml-4 list-disc space-y-1">
          <Bullet icon={WorkIcon}>Outbound & account management</Bullet>
          <Bullet icon={WorkIcon}>Time planning & execution</Bullet>
          <Bullet icon={WorkIcon}>Decision‑maker outreach</Bullet>
        </ul>
      </Section>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
        >
          <ExpandMoreRoundedIcon fontSize="small" /> More details
        </button>
      )}
      {open && (
        <>
          <Section title="For Sales/Marketing Managers">
            <ul className="ml-4 list-disc space-y-1">
              <Bullet icon={AccountTreeIcon}>Team management & coaching</Bullet>
              <Bullet icon={AccountTreeIcon}>Hiring strategy</Bullet>
              <Bullet icon={AccountTreeIcon}>Process & reporting systems</Bullet>
              <Bullet icon={AccountTreeIcon}>Culture & motivation</Bullet>
              <Bullet icon={AccountTreeIcon}>Forecasting & pipeline planning</Bullet>
            </ul>
          </Section>
          <button
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
          >
            <ExpandLessRoundedIcon fontSize="small" /> Show less
          </button>
        </>
      )}
    </div>
  )
}

function LeadershipProgram() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Section title="Build Your Next Leaders">
        <p>Transform managers into future business leaders in 12 months.</p>
          <p>Transform Managers into Strategic, Accountable, Growth-Focused Leaders</p>
        <p>For organizations scaling from ₹15 Cr to ₹100 Cr. Equip high-potential managers to drive revenue, scale operations, and make founder-level decisions with confidence.</p>

      </Section>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
        >
          <ExpandMoreRoundedIcon fontSize="small" /> View deliverables
        </button>
      )}
      {open && (
        <>
          <Section title="Program Deliverables">
            <ul className="ml-4 list-disc space-y-1">
              <Bullet icon={LeaderboardIcon}>Leadership audit (identify 2–3 HiPos)</Bullet>
              <Bullet icon={SchoolIcon}>Capability dev: strategy, P&amp;L, negotiation</Bullet>
              <Bullet icon={WorkIcon}>Quarterly on‑the‑job projects</Bullet>
              <Bullet icon={GroupIcon}>Monthly 1:1 & group mentoring</Bullet>
              <Bullet icon={EmojiObjectsIcon}>Founder alignment & ownership transfer</Bullet>
            </ul>
            <p className="mt-2 flex items-start gap-2">
              <EmojiObjectsIcon fontSize="small" className="text-indigo-600/90" />
              <span>Outcome: Scale even without being in every meeting.</span>
            </p>
          </Section>
          <button
            onClick={() => setOpen(false)}
            className="mt-1 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
          >
            <ExpandLessRoundedIcon fontSize="small" /> Show less
          </button>
        </>
      )}
    </div>
  )
}

function LDStructure() {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Section title="Sales performance enablement">
        <p className="font-medium">
          We help your sales and revenue teams sustain performance through a Performance Enablement System — it tracks
          performance, identifies capability gaps, and provides timely skill interventions to keep revenue growth on
          track
        </p>
        <p className="mt-2">
          Recruiting top talent is only the first step.The real test begins after hiring — sustaining performance over
          time.
        </p>
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
          >
            <ExpandMoreRoundedIcon fontSize="small" /> More details
          </button>
        )}
        {open && (
          <>
            <p className="mt-2 text-foreground/80">Revenue Performance enablement/System includes:-</p>
            <ul className="ml-4 list-disc space-y-1">
              <Bullet icon={PeopleIcon}>Right talent in</Bullet>
              <Bullet icon={AccountTreeIcon}>Accountability via tracking</Bullet>
              <Bullet icon={SchoolIcon}>Continuous capability growth</Bullet>
            </ul>
            <button
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center gap-1 text-[13px] font-medium text-indigo-700 hover:underline"
            >
              <ExpandLessRoundedIcon fontSize="small" /> Show less
            </button>
          </>
        )}
      </Section>
    </div>
  )
}

/* ---------- Right column chat mock to resemble the demo ---------- */
function ChatMock() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -4, 0] }}
      transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      className="relative w-full"
    >
      <div className="relative mx-auto w-full max-w-md rounded-2xl border border-foreground/10 bg-background shadow-[0_20px_60px_rgba(99,102,241,0.12)]">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-foreground/10 px-4 py-3">
          <img
            src={"/placeholder.svg?height=32&width=32&query=profile_pic"}
            alt="Melissa Hammond"
            className="h-8 w-8 rounded-full object-cover"
          />
          <p className="font-semibold text-foreground">Melissa Hammond</p>
        </div>
        {/* Messages */}
        <div className="space-y-2.5 px-4 py-4">
          <Bubble who="them">Hi, Melissa! Thanks for taking the time to chat with me.</Bubble>
          <Bubble who="me">Hi Alex! I&apos;m doing well, thanks. How can I help?</Bubble>
          <Bubble who="them">
            Glad to hear! I wanted to connect because I saw your team has been expanding lately.
          </Bubble>
        </div>
        {/* Footer composer */}
        <div className="flex items-center gap-2 border-t border-foreground/10 bg-foreground/[0.02] px-3 py-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white">
            <SmsIcon fontSize="inherit" />
          </span>
          <div className="flex-1">
            <div className="rounded-lg bg-background px-3 py-2 text-sm text-foreground/70 shadow-inner">
              {"Hi, Melissa! Thanks for taking the time to chat..."}
            </div>
          </div>
          <div className="flex -space-x-2">
            <img src="/avatar-1.jpg" alt="avatar" className="h-6 w-6 rounded-full border border-background" />
            <img src="/avatar-2.jpg" alt="avatar" className="h-6 w-6 rounded-full border border-background" />
            <img src="/avatar-3.jpg" alt="avatar" className="h-6 w-6 rounded-full border border-background" />
          </div>
        </div>
      </div>
      {/* soft side/floor light */}
      <div className="pointer-events-none absolute -inset-6 md:-inset-10 bg-[radial-gradient(60%_50%_at_100%_10%,_rgba(99,102,241,0.18),_transparent_60%)]" />
    </motion.div>
  )
}

function Bubble({ who = "them", children }) {
  const isMe = who === "me"
  return (
    <div className={["flex", isMe ? "justify-end" : "justify-start"].join(" ")}>
      <div
        className={[
          "max-w-[80%] rounded-xl px-3 py-2 text-sm",
          isMe
            ? "bg-background border border-foreground/10 text-foreground shadow-sm"
            : "bg-indigo-50 text-indigo-900 border border-indigo-100",
        ].join(" ")}
      >
        {children}
      </div>
    </div>
  )
}

function CurvedCard({ title, content, variant = 0 }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-foreground/10 bg-background p-5 md:p-7 shadow-sm">
      {/* Decorative curves - solid neutrals for accessibility, unique per variant */}
      {variant === 0 && (
        <>
          <span aria-hidden className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-foreground/5" />
          <span aria-hidden className="absolute -top-8 left-20 h-16 w-16 rounded-full border border-foreground/10" />
        </>
      )}
      {variant === 1 && (
        <>
          <span aria-hidden className="absolute -bottom-16 -right-16 h-44 w-44 rounded-full bg-foreground/5" />
          <span
            aria-hidden
            className="absolute bottom-6 right-20 h-14 w-28 rounded-[2rem] border border-foreground/10"
          />
        </>
      )}
      {variant === 2 && (
        <>
          <span aria-hidden className="absolute -top-10 right-6 h-28 w-28 rounded-[2rem] bg-foreground/5 rotate-6" />
          <span aria-hidden className="absolute top-16 -right-8 h-24 w-24 rounded-full border border-foreground/10" />
        </>
      )}
      {variant === 3 && (
        <>
          <span
            aria-hidden
            className="absolute top-1/2 -left-16 h-36 w-36 -translate-y-1/2 rounded-full bg-foreground/5"
          />
          <span
            aria-hidden
            className="absolute top-1/2 left-24 h-10 w-28 -translate-y-1/2 rounded-[2rem] border border-foreground/10"
          />
        </>
      )}

      <h3 className="text-xl md:text-2xl font-bold text-foreground text-balance">{title}</h3>
      <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-foreground/80 text-pretty">{content}</p>
    </div>
  )
}
