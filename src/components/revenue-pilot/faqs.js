import Section from "./section"

export default function Faqs() {
  const faqs = [
    {
      q: "Do you replace our CRM or tools?",
      a: "No. We standardize your processes and visibility using what you already have, adding lightweight pieces only if required.",
    },
    {
      q: "When do we see results?",
      a: "You’ll feel operating clarity in weeks. A predictable engine is live in 90 days, then scaled over the following 6 months.",
    },
    {
      q: "Who owns the system?",
      a: "You do. We coach your team so the system runs without dependency on any single person.",
    },
  ]
  return (
    <Section id="faqs" title="FAQs">
      <div className="grid gap-4">
        {faqs.map((f) => (
          <details key={f.q} className="rounded-lg border border-border bg-background p-5">
            <summary className="cursor-pointer text-base font-medium">{f.q}</summary>
            <p className="mt-2 text-sm opacity-90">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
