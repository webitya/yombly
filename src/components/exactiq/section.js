export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {title ? (
          <header className="mb-6 md:mb-8">
            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground md:text-3xl">{title}</h2>
            {subtitle ? <p className="mt-2 max-w-2xl text-muted-foreground leading-relaxed">{subtitle}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}
