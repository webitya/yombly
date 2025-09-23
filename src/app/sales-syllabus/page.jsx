/* page scaffold using provided copy outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import SalesSyllabusHero from "../../components/sales-syllabus/SalesSyllabusHero"
import SalesSyllabusFeatures from "../../components/sales-syllabus/SalesSyllabusFeatures"

export default function SalesSyllabusPage() {
  return (
    <main>
      <Header />
      <SalesSyllabusHero />
      <SalesSyllabusFeatures />
      <Footer />
    </main>
  )
}
