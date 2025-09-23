import ContactForm from "../../components/contact-form"

export default function HomeContact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 pb-24">
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        <div>
          <h2 className="text-2xl font-semibold">Talk to a Growth Advisor</h2>
          <p className="mt-2 text-slate-600">Tell us about your goals. We’ll reach you soon.</p>
          <div className="mt-6 rounded-xl p-6 border border-slate-200 bg-white shadow-sm">
            <ContactForm />
          </div>
        </div>
        <div className="rounded-xl p-6 border border-slate-200 bg-white shadow-sm">
          <h3 className="font-semibold">Trusted by forward-thinking teams</h3>
          <p className="text-sm text-slate-600 mt-2">Add client logos in grayscale to showcase credibility.</p>
          <div className="mt-4 grid grid-cols-3 gap-3 opacity-70">
            <div className="h-12 bg-slate-200 rounded" />
            <div className="h-12 bg-slate-200 rounded" />
            <div className="h-12 bg-slate-200 rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
