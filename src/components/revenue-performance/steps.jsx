"use client"

import FlagCircleIcon from "@mui/icons-material/FlagCircle"
import AssessmentIcon from "@mui/icons-material/Assessment"
import SchoolIcon from "@mui/icons-material/School"
import ViewModuleIcon from "@mui/icons-material/ViewModule"
import EventAvailableIcon from "@mui/icons-material/EventAvailable"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import FolderCopyIcon from "@mui/icons-material/FolderCopy"
import Diversity3Icon from "@mui/icons-material/Diversity3"
import InsightsIcon from "@mui/icons-material/Insights"
import DomainAddIcon from "@mui/icons-material/DomainAdd"

export default function Steps() {
  const steps = [
    {
      n: 1,
      title: "Define Objectives and Outcomes",
      icon: <FlagCircleIcon fontSize="small" />,
      points: [
        "Align to business goals: revenue, conversion, retention",
        "Set enablement objectives: ramp faster, improve AOV, align marketing",
        "Define measurable KPIs: conversion %, ramp time, lead velocity",
      ],
    },
    {
      n: 2,
      title: "Conduct Skill & Competency Audit",
      icon: <AssessmentIcon fontSize="small" />,
      points: [
        "Map roles: inside/field sales, SDR, marketing, content",
        "Assess: discovery, negotiation, storytelling, CRM usage",
        "Identify gaps, build role-based skill matrix",
      ],
    },
    {
      n: 3,
      title: "Design Role-Specific Learning Paths",
      icon: <SchoolIcon fontSize="small" />,
      points: [
        "Tracks: sales, marketing, advanced (ABS, nurturing, strategy)",
        "Include soft skills: communication, influence, time",
        "Levels: beginner → intermediate → advanced",
      ],
    },
    {
      n: 4,
      title: "Build Learning/Mentoring Modules",
      icon: <ViewModuleIcon fontSize="small" />,
      points: [
        "Formats: workshops, micro-learning, simulations, shadowing",
        "Practical exercises tied to real calls/campaigns/demos",
        "Tools: CRM, LinkedIn, Apollo, automation; include playbooks",
      ],
    },
    {
      n: 5,
      title: "Set Up a Training Calendar",
      icon: <EventAvailableIcon fontSize="small" />,
      points: [
        "Weekly/monthly cadence (1–2h learning + 1–2h practice)",
        "Rotate: sales, marketing, tools, alignment sessions",
        "Include on-the-job coaching and peer learning",
      ],
    },
    {
      n: 6,
      title: "Integrate Learning With Performance",
      icon: <TrendingUpIcon fontSize="small" />,
      points: [
        "Link outcomes to KPIs (conversion, response, closures)",
        "Use CRM/analytics to monitor application",
        "1:1s, team reviews, and RCA for misses",
      ],
    },
    {
      n: 7,
      title: "Create Knowledge Repository",
      icon: <FolderCopyIcon fontSize="small" />,
      points: [
        "Store scripts, templates, case studies, recordings",
        "Central, searchable, accessible for onboarding",
        "Keep materials versioned and current",
      ],
    },
    {
      n: 8,
      title: "Implement Continuous Learning & Mentorship",
      icon: <Diversity3Icon fontSize="small" />,
      points: [
        "Peer shadowing, buddy systems, knowledge sharing",
        "Mentor high-potential performers",
        "Quarterly updates based on market metrics; celebrate wins",
      ],
    },
    {
      n: 9,
      title: "Measure and Optimize",
      icon: <InsightsIcon fontSize="small" />,
      points: [
        "Track: ramp time, conversion rate, response time",
        "Gather participant feedback for relevance and gaps",
        "Adjust modules/paths/cadence based on data",
      ],
    },
    {
      n: 10,
      title: "Scale & Institutionalize",
      icon: <DomainAddIcon fontSize="small" />,
      points: [
        "Standardize into hiring & onboarding",
        "Train internal champions to run Sales Performance Enablement",
        "Document for repeatability and consistency",
      ],
    },
  ]

  return (
    <section id="steps" aria-labelledby="steps-title" className="w-full bg-stone-50 py-12">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6">
        <header className="mb-8">
          <h2 id="steps-title" className="text-balance text-2xl font-semibold text-slate-900 md:text-3xl">
            Step-by-Step L&amp;D Structure
          </h2>
          <p className="mt-2 text-pretty text-sm text-slate-600 md:text-base">
            A practical, measurable enablement flow tied directly to revenue outcomes.
          </p>
        </header>

        <ol className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {steps.map((s) => (
            <li key={s.n} className="rounded-lg border border-slate-200 bg-white p-4 transition hover:shadow-sm">
              <div className="flex items-start gap-3">
                <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-emerald-600 text-white">
                  {s.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">Step {s.n}</p>
                  <h3 className="mt-0.5 text-base font-semibold text-slate-900">{s.title}</h3>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                    {s.points.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-6 rounded-md border border-amber-200 bg-amber-50 px-4 py-3">
          <p className="text-sm text-slate-800">
            Key principles: keep learning practical and applied, use data to refine continuously, and link learning to
            recognition for engagement.
          </p>
        </div>
      </div>
    </section>
  )
}
