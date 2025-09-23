/* homepage with hero, unified solution, modules, CTA, newsletter, contact using glassmorphism */
import Header from "../components/header"
import Footer from "../components/footer"
import HomeHero from "../components/home/HomeHero"
import HomeWhy from "../components/home/HomeWhy"
import HomeModules from "../components/home/HomeModules"
import HomeContact from "../components/home/HomeContact"

export const metadata = {
  title: "Yombly — Revenue Productivity Platform",
  description: "Hire right. Upskill teams. Act on real market intelligence.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Yombly — Revenue Productivity Platform",
    description: "Hire right. Upskill teams. Act on real market intelligence.",
    url: "/",
    images: ["/images/yombly-logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yombly — Revenue Productivity Platform",
    description: "Hire right. Upskill teams. Act on real market intelligence.",
    images: ["/images/yombly-logo.png"],
  },
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <HomeHero />
      <HomeWhy />
      <HomeModules />
      <HomeContact />
      <Footer />
    </main>
  )
}
