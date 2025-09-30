import PersonRounded from "@mui/icons-material/PersonRounded"

const items = [
  "Founders & Co-founders scaling their first sales/marketing teams",
  "Heads of Sales / Marketing who want to level up strategic thinking",
  "Business leaders making turnaround decisions",
  "Professionals transitioning into leadership roles",
]

export default function WhoIsFor() {
  return (
    <section aria-labelledby="who-title" className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3">
          <PersonRounded className="text-primary" />
          <h2 id="who-title" className="text-2xl font-semibold md:text-3xl">
            Who Is This For?
          </h2>
        </div>

        <ul className="mt-6 space-y-3">
          {items.map((text) => (
            <li key={text} className="flex items-start gap-3 rounded-lg border border-border bg-background p-4">
              <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-primary" />
              <p className="text-muted-foreground">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
