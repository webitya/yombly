import Section from "./section"

export default function Pain() {
  return (
    <Section
      id="problem"
      title="Running sales in an SME is exhausting"
      subtitle="Growth depends on effort, not predictability."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-pretty opacity-90">
            Every month feels like starting from zero — no steady pipeline. Deals slip through cracks in chats and
            spreadsheets, or because a star performer didn’t follow up in time.
          </p>
          <p className="text-pretty opacity-90">
            The founder is still the best salesperson, but the team can’t scale results without them. Marketing spends
            and sales chases leads… yet no one knows what’s actually working.
          </p>
          <p className="text-pretty opacity-90">
            Revenue looks okay today, but the growth curve is flat — and that’s scary.
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h3 className="text-lg font-medium">If this sounds familiar, you are not alone.</h3>
          <ul className="mt-3 list-disc pl-5 text-sm leading-relaxed opacity-90">
            <li>Inconsistent pipeline and ad-hoc follow-ups</li>
            <li>Hero-based selling that doesn’t scale</li>
            <li>Unclear ROI across marketing and sales</li>
            <li>Fragmented tools and manual reporting</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}
