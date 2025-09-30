import StarRounded from "@mui/icons-material/StarRounded"
import TrendingUpRounded from "@mui/icons-material/TrendingUpRounded"
import ShieldRounded from "@mui/icons-material/ShieldRounded"

export default function Outcomes() {
  return (
    <section aria-labelledby="outcomes-title" className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 id="outcomes-title" className="text-2xl font-semibold md:text-3xl">
          Outcomes / Impact
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <StarRounded className="text-primary" />
              <h3 className="font-medium">95%+ Success Rating</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">From past participants across functions and stages.</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <TrendingUpRounded className="text-primary" />
              <h3 className="font-medium">3× Decision Confidence</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Alumni reported a 3× boost in confidence post-course.</p>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center gap-2">
              <ShieldRounded className="text-primary" />
              <h3 className="font-medium">Fewer Costly Mistakes</h3>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Reduce mis-hires, wrong positioning, and wasted GTM spends.
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
          Add client logos and real quotes here for social proof.
        </div>
      </div>
    </section>
  )
}
