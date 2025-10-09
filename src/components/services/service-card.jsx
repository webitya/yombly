"use client"
import Link from "next/link"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

export default function ServiceCard({ href, title, description, Icon }) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent"
    >
      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {Icon ? <Icon fontSize="small" className="!h-5 !w-5" /> : null}
      </div>
      <h3 className="text-pretty text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 inline-flex items-center text-sm font-medium text-primary">
        {"Explore"}
        <ChevronRightIcon className="ml-1 transition-transform group-hover:translate-x-0.5" fontSize="small" />
      </div>

      {/* Subtle grid accent */}
      <div className="pointer-events-none absolute inset-0 rounded-xl opacity-30">
        <div className="absolute -inset-[120%] animate-[gridMove_16s_linear_infinite] [background:repeating-linear-gradient(0deg,transparent_0px,transparent_18px,rgba(255,255,255,0.05)_18px,rgba(255,255,255,0.05)_19px),repeating-linear-gradient(90deg,transparent_0px,transparent_18px,rgba(255,255,255,0.05)_18px,rgba(255,255,255,0.05)_19px)]" />
      </div>
    </Link>
  )
}
