import Image from "next/image"
import NewsletterForm from "../../components/newsletter-form"
import GlassCard from "../../components/glass-card"
import { HiBadgeCheck } from "react-icons/hi"

export default function HomeHero() {
  return (
    <section className="relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Yombly — Revenue Productivity Platform",
            description: "Hire right. Upskill teams. Act on real market intelligence.",
            url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
            inLanguage: "en",
            publisher: { "@type": "Organization", name: "Yombly" },
          }),
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-100 via-white to-white" />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/70 backdrop-blur shadow-sm text-sm">
              <HiBadgeCheck className="text-blue-600" size={16} />
              <span className="text-slate-600">Unified Revenue Productivity</span>
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Build, Grow & Future‑Proof Your Sales and Marketing Teams
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Yombly helps you hire right-fit talent, upskill with real-world intelligence, and keep teams future‑ready.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                Start Your Revenue Journey
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-md border border-slate-200 hover:border-blue-600 transition"
              >
                Book a Demo
              </a>
            </div>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
          <div>
            <GlassCard className="relative">
              <Image
                src="/abstract-dashboard-showing-unified-modules-hiring-.jpg"
                alt="Unified modules dashboard"
                width={720}
                height={360}
                className="rounded-lg"
              />
              <div className="absolute -bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
                <div className="border border-slate-200 bg-white/70 backdrop-blur rounded-md px-3 py-2 text-xs">
                  Hiring
                </div>
                <div className="border border-slate-200 bg-white/70 backdrop-blur rounded-md px-3 py-2 text-xs">
                  Training
                </div>
                <div className="border border-slate-200 bg-white/70 backdrop-blur rounded-md px-3 py-2 text-xs">
                  Market Intelligence
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}
