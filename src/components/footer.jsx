/* simple corporate footer with newsletter */
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="mx-auto max-w-7xl px-4 py-12 border-t border-[var(--border)]">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <h3 className="font-semibold text-lg">Yombly</h3>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              Unifying hiring, training, and market intelligence for revenue productivity.
            </p>
          </div>
          <div className="text-sm">
            <div className="font-medium mb-3">Product</div>
            <ul className="space-y-2">
              <li>
                <Link href="/marketcrew" className="hover:text-[var(--primary)]">
                  MarketCrew
                </Link>
              </li>
              <li>
                <Link href="/sales-syllabus" className="hover:text-[var(--primary)]">
                  Sales Syllabus
                </Link>
              </li>
              <li>
                <Link href="/exactiq" className="hover:text-[var(--primary)]">
                  ExactIQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-medium mb-3">Company</div>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-[var(--primary)]">
                  About
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--primary)]">
                  Contact
                </a>
              </li>
              <li>
                <Link href="/admin" className="hover:text-[var(--primary)]">
                  Admin
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-medium mb-3">Learn</div>
            <ul className="space-y-2">
              <li>
                <Link href="/blogs" className="hover:text-[var(--primary)]">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-[var(--primary)]">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-[var(--primary)]">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-medium mb-3">Support</div>
            <ul className="space-y-2">
              <li>
                <Link href="/tickets/track" className="hover:text-[var(--primary)]">
                  Track Ticket
                </Link>
              </li>
              <li>
                <Link href="/tickets/raise" className="hover:text-[var(--primary)]">
                  Raise Ticket
                </Link>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--primary)]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-[var(--muted-foreground)] mt-8">
          © {new Date().getFullYear()} Yombly. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
