import Section from "./section"

export default function Impact() {
  return (
    <Section
      id="impact"
      title="Impact & Proof"
      subtitle="Evidence from organizations that turned market reality into pipeline growth."
    >
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-md border border-border bg-card p-4">
          <div className="text-2xl font-bold text-foreground">100+</div>
          <p className="mt-1 text-sm text-muted-foreground">Organizations’ inefficiencies fixed</p>
        </div>
        <div className="rounded-md border border-border bg-card p-4">
          <div className="text-2xl font-bold text-foreground">25–35%</div>
          <p className="mt-1 text-sm text-muted-foreground">Faster GTM adjustments with ExactIQ</p>
        </div>
        <div className="rounded-md border border-border bg-card p-4">
          <div className="text-2xl font-bold text-foreground">+40%</div>
          <p className="mt-1 text-sm text-muted-foreground">
            Pipeline growth in 1 quarter after ICP realignment (SaaS client)
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">Case Study: ICP Realignment</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            A SaaS client re-aligned ICP in 2 weeks using ExactIQ buyer intelligence → pipeline grew 40% in the
            following quarter.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">Client Logos</h3>
          <p className="mt-1 text-sm text-muted-foreground">Add 3–6 client logos here to reinforce trust.</p>
          <img
            src="/client-logos-row.jpg"
            alt="Client logos row"
            className="mt-3 w-full rounded-md border border-border"
          />
        </div>
      </div>
    </Section>
  )
}
