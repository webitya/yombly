import Header from "../../components/header"
import Footer from "../../components/footer"
import ContactForm from "../../components/contact-form"

export default function ContactPage() {
  return (
    <main>
      <Header />
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Contact Yombly</h1>
        <p className="mt-3 text-[var(--muted-foreground)]">
          Share your goals and context. We’ll reply soon with next steps.
        </p>
        <div className="mt-8 glass rounded-xl p-6">
          <ContactForm />
        </div>
      </section>
      <Footer />
    </main>
  )
}
