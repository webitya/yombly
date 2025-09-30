/* About page per outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import Hero from "@/components/about/hero"
import Mission from "@/components/about/mission"
import Story from "@/components/about/story"
import WhoWeAre from "@/components/about/who-we-are"
import Values from "@/components/about/values"
import Industries from "@/components/about/industries"
import Journey from "@/components/about/journey"
import CTA from "@/components/about/cta"

export default function AboutPage() {
  return (
    <main>
      <Header />
       <Hero />
      <Mission />
      <Story />
      <WhoWeAre />
      <Industries />
      <Journey />
      <Values />
      <CTA />
      <Footer />
    </main>
  )
}
