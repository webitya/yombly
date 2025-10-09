"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

// MUI icons
import CloseIcon from "@mui/icons-material/Close"
import ExpandLessIcon from "@mui/icons-material/ExpandLess"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices"
import ContactMailIcon from "@mui/icons-material/ContactMail"
import ArticleIcon from "@mui/icons-material/Article"
import FolderSharedIcon from "@mui/icons-material/FolderShared"
import SummarizeIcon from "@mui/icons-material/Summarize"
// Service icons
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium"
import GroupsIcon from "@mui/icons-material/Groups"
import SchoolIcon from "@mui/icons-material/School"

export default function MobileDrawer({ open, setOpen, navLinks = [], servicesLinks = [] }) {
  const pathname = usePathname()
  const [expanded, setExpanded] = useState(null)

  // Defaults for Services when not provided
  const defaultServices = [
    { href: "/leadership", label: "Leadership", icon: <WorkspacePremiumIcon fontSize="small" /> },
    { href: "/mentoring", label: "Mentoring", icon: <SchoolIcon fontSize="small" /> },
    { href: "/team-building", label: "Team Building", icon: <GroupsIcon fontSize="small" /> },
  ]
  const services = servicesLinks && servicesLinks.length ? servicesLinks : defaultServices

  // Static Resources (aligns with the read-only drawer spec)
  const resourcesLinks = [
    { href: "/blogs", label: "Blogs", icon: <ArticleIcon fontSize="small" /> },
    { href: "/resources", label: "Free Resources", icon: <FolderSharedIcon fontSize="small" /> },
    { href: "/case-studies", label: "Case Studies", icon: <SummarizeIcon fontSize="small" /> },
  ]

  // Provide a solid default order for nav on mobile if caller doesn't pass anything
  const baseNav = [
    { href: "/", label: "Home", icon: <HomeIcon fontSize="small" /> },
    { href: "/about", label: "About", icon: <InfoIcon fontSize="small" /> },
    { type: "dropdown", label: "Services", icon: <MiscellaneousServicesIcon fontSize="small" /> },
    { type: "dropdown", label: "Resources", icon: <ArticleIcon fontSize="small" /> },
    { href: "/contact", label: "Contact", icon: <ContactMailIcon fontSize="small" /> },
  ]
  const finalNav = navLinks && navLinks.length ? navLinks : baseNav

  const toggleExpand = (label) => setExpanded((prev) => (prev === label ? null : label))

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-[88%] max-w-[360px] bg-[#0A0F1C] text-white
        border-l border-cyan-700/40 shadow-2xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-cyan-900/40">
          <div className="text-sm text-gray-300">Menu</div>
          <button
            aria-label="Close Menu"
            onClick={() => setOpen(false)}
            className="text-cyan-300 hover:text-cyan-400 transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Branding */}
        <div className="px-6 py-4 border-b border-cyan-900/40">
          <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            YOMBLY
          </h2>
          <p className="text-xs text-gray-400 mt-1">Navigate quickly with the menu below.</p>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto">
          <ul className="space-y-2">
            {finalNav.map((link, idx) => {
              if (link.type === "dropdown") {
                const isServices = link.label?.toLowerCase() === "services"
                const dropdownLinks = isServices ? services : resourcesLinks
                const isExpanded = expanded === link.label

                const isAnyActive = dropdownLinks?.some((d) => d.href && pathname.startsWith(d.href)) || false

                return (
                  <li key={`${link.label}-${idx}`} className="rounded-md">
                    <button
                      onClick={() => toggleExpand(link.label)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all
                        ${isAnyActive ? "bg-cyan-600/20 text-cyan-300" : "hover:bg-cyan-800/30 text-gray-300 hover:text-cyan-200"}
                      `}
                    >
                      <span className="flex items-center gap-3">
                        {link.icon}
                        {link.label}
                      </span>
                      {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </button>

                    {isExpanded && (
                      <ul className="mt-2 ml-3 pl-3 border-l border-cyan-800 space-y-1">
                        {dropdownLinks.map((s, i) => {
                          const active = pathname === s.href
                          return (
                            <li key={s.href || `${s.label}-${i}`}>
                              <Link
                                href={s.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors
                                  ${active ? "text-cyan-300 font-semibold bg-cyan-600/10" : "text-gray-400 hover:text-cyan-200 hover:bg-cyan-900/20"}
                                `}
                              >
                                {s.icon}
                                {s.label}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    )}
                  </li>
                )
              }

              // Regular links
              const isActive = pathname === link.href
              return (
                <li key={link.href || `${link.label}-${idx}`}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all
                      ${isActive ? "bg-cyan-600/20 text-cyan-300 font-semibold" : "text-gray-300 hover:text-cyan-200 hover:bg-cyan-800/30"}
                    `}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              )
            })}

            {/* Utility/CTA links */}
            <li className="pt-2">
              <Link
                href="/tickets/track"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md border border-cyan-700 text-cyan-200 hover:bg-cyan-900/30 transition"
              >
                Track Ticket
              </Link>
            </li>
            <li>
              <Link
                href="/free-question"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-md hover:opacity-90 transition"
              >
                Ask 1 Free Question
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto px-6 py-4 text-xs text-gray-500 border-t border-cyan-900/40">
          © {new Date().getFullYear()} Yombly. All rights reserved.
        </div>
      </aside>
    </div>
  )
}
