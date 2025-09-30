export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="w-full">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        {title ? (
          <header className="mb-6 md:mb-8">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
            {subtitle ? (
              <p className="mt-3 text-balance text-sm leading-relaxed text-muted-foreground md:text-base">{subtitle}</p>
            ) : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}
