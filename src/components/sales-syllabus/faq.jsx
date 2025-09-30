import HelpOutlineRounded from "@mui/icons-material/HelpOutlineRounded"

const faqs = [
  {
    q: "How is this different from traditional business schools or online courses?",
    a: "We teach through live business cases and outcomes, prioritizing what actually works in-market over abstract theory.",
  },
  {
    q: "How many hours per week required?",
    a: "Expect 3–5 hours including case study time, assignments, and live debriefs.",
  },
  {
    q: "Do you provide support after the course ends?",
    a: "Yes. We offer ongoing guidance tailored to what you should do next in your company.",
  },
  {
    q: "Can I apply learning to my industry?",
    a: "Absolutely. Cases span multiple industries; the frameworks and decisions translate across markets.",
  },
  {
    q: "What kind of credentials / certification do we receive?",
    a: "You’ll receive a certificate of completion and an implementation blueprint you can use internally.",
  },
]

export default function FAQ() {
  return (
    <section aria-labelledby="faq-title" className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center gap-3">
          <HelpOutlineRounded className="text-primary" />
          <h2 id="faq-title" className="text-2xl font-semibold md:text-3xl">
            FAQ
          </h2>
        </div>

        <div className="mt-6 divide-y divide-border rounded-lg border border-border">
          {faqs.map((item) => (
            <details key={item.q} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between px-5 py-4 hover:bg-accent">
                <span className="font-medium">{item.q}</span>
                <span className="text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <div className="px-5 pb-5 text-muted-foreground">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
