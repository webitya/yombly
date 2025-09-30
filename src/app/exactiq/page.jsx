/* ExactIQ page per outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import Hero from "../../components/exactiq/hero"
import Why from "../../components/exactiq/why"
import Differentiators from "../../components/exactiq/differentiators"
import Coverage from "../../components/exactiq/coverage"
import Process from "../../components/exactiq/process"
import Impact from "../../components/exactiq/impact"
import Cta from "../../components/exactiq/cta"

export default function ExactIQPage() {
  return (
    <main>
      <Header />
           <Hero />
      <Why />
      <Differentiators />
      <Coverage />
      <Process />
      <Impact />
      <Cta />
      <Footer />
    </main>
  )
}
