import Section from "./section"

export default function Hero() {
  return (
    <Section id="top" className="border-b border-border">
      <div className="grid items-center gap-8 md:grid-cols-2 md:gap-10">
        <div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">Revenue Pilot</h1>
          <p className="mt-4 text-pretty text-base md:text-lg opacity-90">
            End the chaos. Build your sales growth engine in 90 days — then scale with 6 months of hands-on support
            until results show.
          </p>
          <ul className="mt-6 grid gap-2 text-sm md:text-base">
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-[6px] inline-block h-2 w-2 rounded-full bg-primary" />
              <span>No more missed deals</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-[6px] inline-block h-2 w-2 rounded-full bg-primary" />
              <span>No more unclear ROI</span>
            </li>
            <li className="flex items-start gap-3">
              <span aria-hidden="true" className="mt-[6px] inline-block h-2 w-2 rounded-full bg-primary" />
              <span>No more firefighting</span>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Make My Sales Predictable
            </a>
            <a
              href="#solution"
              className="inline-flex items-center justify-center rounded-md border border-border px-5 py-3 text-sm font-medium"
            >
              See How It Works
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/dashboard-sales-forecast-visual.jpg"
            alt="Forecasting dashboard preview showing a predictable revenue trendline"
            className="h-auto w-full rounded-lg border border-border"
          />
          <p className="mt-3 text-center text-xs opacity-70">From fragmented efforts to a predictable revenue engine</p>
        </div>
      </div>
    </Section>
  )
}
