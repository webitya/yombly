/* page scaffold using provided copy outline */
import Header from "../../components/header"
import Footer from "../../components/footer"
import Hero from "@/components/sales-syllabus/hero"
import WhyRealWorld from "@/components/sales-syllabus/why-real-world"
import WhatYouGet from "@/components/sales-syllabus/what-you-get"
import Journey from "@/components/sales-syllabus/journey"
import Outcomes from "@/components/sales-syllabus/outcomes"
import WhoIsFor from "@/components/sales-syllabus/who-is-for"
import Pricing from "@/components/sales-syllabus/pricing"
import FAQ from "@/components/sales-syllabus/faq"
import CTA from "@/components/sales-syllabus/cta"

export default function SalesSyllabusPage() {
  return (
    <main>
      <Header />
        <Hero />
      <WhyRealWorld />
      <WhatYouGet />
      <Journey />
      <Outcomes />
      <WhoIsFor />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}
