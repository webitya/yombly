import Header from "../../components/header"
import Footer from "../../components/footer"
import ContactForm from "../../components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-100">
      <Header />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Let’s Discuss Your Growth Goals
          </h1>
          <p className="mt-3 text-gray-400 text-base">
            Share your objectives, and our team will respond within 24 hours with next steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mb-10 text-sm text-gray-300">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <h3 className="font-semibold text-white">📍 Location</h3>
            <p className="mt-1">Ranchi,Jharkhand, India</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <h3 className="font-semibold text-white">📧 Email</h3>
            <p className="mt-1">contact.yombly@gmail.com</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
            <h3 className="font-semibold text-white">⏰ Response</h3>
            <p className="mt-1">Within 24 hours</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-lg">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
