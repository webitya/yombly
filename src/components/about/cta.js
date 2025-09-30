import Section from "./section"

export default function CTA() {
  return (
    <Section
      id="contact"
      title="Ready to build a predictable revenue engine?"
      subtitle="We’re here to help you build the sales productivity engine your company deserves."
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row">
        <a
          href="mailto:hello@yombly.com"
          className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Talk to Us
        </a>
        <a
          href="#"
          className="inline-flex items-center justify-center rounded-md border border-border bg-secondary px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Book a Consultation
        </a>
      </div>
    </Section>
  )
}
