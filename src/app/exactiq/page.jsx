/* ExactIQ page per outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import ExactIQHero from "../../components/exactiq/ExactIQHero"
import ExactIQFeatures from "../../components/exactiq/ExactIQFeatures"

export default function ExactIQPage() {
  return (
    <main>
      <Header />
      <ExactIQHero />
      <ExactIQFeatures />
      <Footer />
    </main>
  )
}
