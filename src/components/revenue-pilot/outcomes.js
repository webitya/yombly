import Section from "./section"

export default function Outcomes() {
  const blocks = [
    {
      title: "For Founders",
      text: "Step out of firefighting and finally get predictability.",
    },
    {
      title: "For Sales Teams",
      text: "Clear steps, no guesswork, more wins.",
    },
    {
      title: "For Investors / Stakeholders",
      text: 'Confidence in ROI — "If I invest ₹1, I know when and how it comes back."',
    },
  ]
  return (
    <Section id="outcomes" title="Why This Matters">
      <div className="grid gap-6 md:grid-cols-3">
        {blocks.map((b) => (
          <div key={b.title} className="rounded-lg border border-border p-5">
            <h3 className="text-base font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm opacity-90">{b.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
