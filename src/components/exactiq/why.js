import Section from "./section"

export default function Why() {
  return (
    <Section
      id="why"
      title="Why ExactIQ?"
      subtitle="Most market research is too slow, too generic, or too far from reality."
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-foreground">
            Reports often show trends, not truth. Companies make big bets on data that’s outdated or irrelevant. Sales
            and marketing teams waste months chasing wrong directions.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-foreground">
            ExactIQ flips this by capturing intelligence directly from the field: customer conversations, competitor
            moves, channel shifts, pricing changes, real-time buyer signals.
          </p>
        </div>
      </div>
    </Section>
  )
}
