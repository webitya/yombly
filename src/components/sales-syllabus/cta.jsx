import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded"
import ArrowForwardIosRounded from "@mui/icons-material/ArrowForwardIosRounded"

export default function CTA() {
  return (
    <section id="apply" aria-labelledby="cta-title" className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <div className="flex items-center justify-center gap-2">
            <RocketLaunchRounded className="text-primary" />
            <h2 id="cta-title" className="text-2xl font-semibold md:text-3xl">
              Ready to Make Smarter Decisions?
            </h2>
          </div>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-muted-foreground">
            Let’s build your strategic edge in sales & marketing.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-primary-foreground hover:opacity-90"
            >
              Apply Now
              <ArrowForwardIosRounded fontSize="small" />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 hover:bg-accent"
            >
              Schedule a Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
