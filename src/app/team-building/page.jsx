
import PsychologyIcon from "@mui/icons-material/Psychology"
import TimelineIcon from "@mui/icons-material/Timeline"
import AssessmentIcon from "@mui/icons-material/Assessment"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import SpeedIcon from "@mui/icons-material/Speed"
import DashboardIcon from "@mui/icons-material/Dashboard"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TeamBuildingPage() {
  return (
    <main className="bg-white">
      <Header />
      <section className="w-full bg-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <p className="text-sm uppercase tracking-wide text-blue-100">Services</p>
          <h1 className="mt-3 text-balance text-4xl font-bold sm:text-5xl">
            Build High-Performing Revenue Teams — Powered by AI & Real Intelligence
          </h1>
          <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-blue-100">
            From first interview to first sale — optimize every step with AI-powered screening, intent verification, and
            productivity acceleration.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              Request Demo
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Talk to an Expert
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900">70–80%</div>
            <p className="mt-1 text-sm text-slate-600">Reduction in hiring costs</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900">60+ days</div>
            <p className="mt-1 text-sm text-slate-600">Productivity time saved</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900">30 days</div>
            <p className="mt-1 text-sm text-slate-600">Ramp-up to productivity</p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div className="text-3xl font-bold text-slate-900">50+</div>
            <p className="mt-1 text-sm text-slate-600">Capability & behavior parameters</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Smart Screening */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <PsychologyIcon fontSize="small" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Talent Intelligence Report – Hire Right, Every Time</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              AI Capability Mapping across 50+ skill, behavioral, and cognitive parameters with role‑specific predictive
              fit and behavioral intelligence.
            </p>
            <ul className="mt-4 space-y-2">
              {["Identify top performers early", "Eliminate hiring mismatches", "Save time, cost, and effort"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </li>
                ),
              )}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <SpeedIcon className="h-5 w-5 text-blue-600" />
              <span>Outcome: Better hires. Faster decisions. Stronger teams.</span>
            </div>
          </div>

          {/* Intent-Verified Candidates */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <AssessmentIcon fontSize="small" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">Pre‑Screened & Intent‑Verified Candidates</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Every candidate is expert‑screened, assessed on 50+ parameters, intent‑verified via AI, and backed by a
              role‑specific Talent Intelligence Report.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Digital interaction tracking (response speed, tone analysis, clarity)",
                "Cross‑channel behavior scoring",
                "Email & platform‑confirmed interest",
                "AI-driven intent analysis on engagement cues",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <DashboardIcon className="h-5 w-5 text-blue-600" />
              <span>Impact: Interview only the most serious and aligned candidates.</span>
            </div>
          </div>

          {/* 30-Day Onboarding */}
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <TimelineIcon fontSize="small" />
              </div>
              <h2 className="text-lg font-semibold text-slate-900">30‑Day Onboarding Accelerator</h2>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Compress 90‑day productivity to 30 days with role‑specific simulation, pitch readiness, and manager
              dashboards that predict performance and time‑to‑readiness.
            </p>
            <ul className="mt-4 space-y-2">
              {[
                "Product knowledge & process familiarity",
                "Role‑specific skill simulation",
                "Pitch, objection handling & communication readiness",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-600" />
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <SpeedIcon className="h-5 w-5 text-blue-600" />
              <span>Outcome: Faster ramp‑up, quicker results, stronger ROI per hire.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-slate-900">How It Works</h3>
          <div className="mt-5 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-blue-700">01. AI Capability Mapping</div>
              <p className="text-sm leading-6 text-slate-600">
                Assess 50+ skill, behavioral, and cognitive parameters. Benchmark against your industry’s top
                performers.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-blue-700">02. Intent Verification</div>
              <p className="text-sm leading-6 text-slate-600">
                Track digital interactions, response speed, tone, and cross‑channel behavior to verify real interest.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="text-sm font-medium text-blue-700">03. 30‑Day Onboarding</div>
              <p className="text-sm leading-6 text-slate-600">
                Personalized paths adapt to individual pace; managers get dashboards for progress and capability gaps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h3 className="text-center text-2xl font-semibold text-slate-900">Why Choose Our AI Team‑Building System</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            ["AI‑Powered Screening", "Objective and scalable evaluation of real capability"],
            ["Intent Verification Engine", "Engage only with genuinely interested candidates"],
            ["Productivity Intelligence", "Predict and accelerate performance outcomes"],
            ["Unified Dashboard", "Full control from hiring to ramp‑up"],
            ["Faster ROI", "Save up to 70% hiring cost and 60+ days of productivity time"],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircleIcon className="mt-0.5 h-5 w-5 text-blue-600" />
                <div>
                  <div className="text-sm font-semibold text-slate-900">{title}</div>
                  <p className="mt-1 text-sm text-slate-600">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full bg-blue-700">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-xl bg-blue-600 p-8 shadow-sm">
            <h4 className="text-pretty text-2xl font-semibold text-white">Transform Hiring into Performance</h4>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-blue-100">
              From first interview to first sale — every step optimized by AI. Build your next winning revenue team with
              data, intelligence, and speed — not guesswork.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-blue-700 shadow-sm transition hover:bg-blue-50"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </main>
  )
}
