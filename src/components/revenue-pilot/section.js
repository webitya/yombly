export default function Section({ id, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`w-full py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {title ? (
          <header className="mb-8 md:mb-12">
            <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
            {subtitle ? <p className="mt-3 text-pretty text-base md:text-lg opacity-80">{subtitle}</p> : null}
          </header>
        ) : null}
        {children}
      </div>
    </section>
  )
}
