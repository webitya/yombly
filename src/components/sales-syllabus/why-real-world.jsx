import InsightsRounded from "@mui/icons-material/InsightsRounded"

export default function WhyRealWorld() {
  return (
    <section aria-labelledby="why-title" className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-3">
          <InsightsRounded className="text-primary" />
          <h2 id="why-title" className="text-2xl font-semibold md:text-3xl">
            Why Real-World Learning Matters
          </h2>
        </div>

        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>Most “training programs” give you frameworks—but not how they survived (or failed) in reality.</p>
          <p>
            Business decisions are messy: pricing wars, misaligned GTMs, changing buyer behaviors, attrition, etc.
            Theory alone doesn’t prepare you.
          </p>
          <p>
            With Sales Syllabus, you avoid costly mistakes by learning what actually works, backed by live case studies
            and business outcomes.
          </p>
        </div>
      </div>
    </section>
  )
}
