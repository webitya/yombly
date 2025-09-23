/* MarketCrew page per outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import MarketCrewHero from "../../components/marketcrew/MarketCrewHero"
import MarketCrewFeatures from "../../components/marketcrew/MarketCrewFeatures"

export default function MarketCrewPage() {
  return (
    <main>
      <Header />
      <MarketCrewHero />
      <MarketCrewFeatures />
      <Footer />
    </main>
  )
}
