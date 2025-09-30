/* MarketCrew page per outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import Hero from "@/components/revenue-pilot/hero"
import Highlights from "@/components/revenue-pilot/highlights"
import Pain from "@/components/revenue-pilot/pain"
import Solution from "@/components/revenue-pilot/solution"
import Phases from "@/components/revenue-pilot/phases"
import Outcomes from "@/components/revenue-pilot/outcomes"
import Differentiators from "@/components/revenue-pilot/differentiators"
import Process from "@/components/revenue-pilot/process"
import Stats from "@/components/revenue-pilot/stats"
import Testimonials from "@/components/revenue-pilot/testimonials"
import Faqs from "@/components/revenue-pilot/faqs"
import Cta from "@/components/revenue-pilot/cta"

export default function RevenuePilot() {
  return (
    <main>
      <Header />
          <Hero />
      <Highlights />
      <Pain />
      <Solution />
      <Phases />
      <Outcomes />
      <Differentiators />
      <Process />
      <Stats />
      <Testimonials />
      <Faqs />
      <Cta />
      <Footer />
    </main>
  )
}
