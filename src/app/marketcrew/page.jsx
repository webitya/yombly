/* MarketCrew page per outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import Hero from "@/components/marketcrew/hero"
import Why from "@/components/marketcrew/why"
import Advantage from "@/components/marketcrew/advantage"
import HowItWorks from "@/components/marketcrew/how-it-works"
import Impact from "@/components/marketcrew/impact"
import CTA from "@/components/marketcrew/cta"

export default function MarketCrewPage() {
  return (
    <main>
      <Header />
           <Hero />
      <Why />
      <Advantage />
      <HowItWorks />
      <Impact />
      <CTA />
      <Footer />
    </main>
  )
}
