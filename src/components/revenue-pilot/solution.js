import Section from "./section"

export default function Solution() {
  return (
    <Section
      id="solution"
      title="The Solution — Revenue Pilot"
      subtitle="We don’t give reports or theory. We install your growth engine — and stay until it works."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-lg border border-border p-5">
          <h3 className="text-base font-semibold">Lead Generation Process</h3>
          <p className="mt-2 text-sm opacity-90">Consistent opportunity flow with clear channels and SLAs.</p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h3 className="text-base font-semibold">Account Management Process</h3>
          <p className="mt-2 text-sm opacity-90">
            Track every deal. Pipeline hygiene, next steps, and stage definitions that stick.
          </p>
        </div>
        <div className="rounded-lg border border-border p-5">
          <h3 className="text-base font-semibold">Performance Tracking Process</h3>
          <p className="mt-2 text-sm opacity-90">
            Transparent dashboards for sales + marketing ROI, so you know what works.
          </p>
        </div>
      </div>
    </Section>
  )
}
