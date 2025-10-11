"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// MUI icons
import CloseIcon from "@mui/icons-material/Close";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArticleIcon from "@mui/icons-material/Article";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import SummarizeIcon from "@mui/icons-material/Summarize";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";

export default function MobileDrawer({ open, setOpen, navLinks = [], servicesLinks = [] }) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(null);

  const defaultServices = [
    { href: "/leadership", label: "Leadership", icon: <WorkspacePremiumIcon fontSize="small" /> },
    { href: "/mentoring", label: "Mentoring", icon: <SchoolIcon fontSize="small" /> },
    { href: "/team-building", label: "Team Building", icon: <GroupsIcon fontSize="small" /> },
  ];
  const services = servicesLinks && servicesLinks.length ? servicesLinks : defaultServices;

  const resourcesLinks = [
    { href: "/blogs", label: "Blogs", icon: <ArticleIcon fontSize="small" /> },
    { href: "/resources", label: "Free Resources", icon: <FolderSharedIcon fontSize="small" /> },
    { href: "/case-studies", label: "Case Studies", icon: <SummarizeIcon fontSize="small" /> },
  ];

  const baseNav = [
    { href: "/", label: "Home", icon: <HomeIcon fontSize="small" /> },
    { href: "/about", label: "About", icon: <InfoIcon fontSize="small" /> },
    { type: "dropdown", label: "Services", icon: <MiscellaneousServicesIcon fontSize="small" /> },
    { type: "dropdown", label: "Resources", icon: <ArticleIcon fontSize="small" /> },
    { href: "/contact", label: "Contact", icon: <ContactMailIcon fontSize="small" /> },
  ];
  const finalNav = navLinks && navLinks.length ? navLinks : baseNav;

  const toggleExpand = (label) => setExpanded((prev) => (prev === label ? null : label));

  return (
    <div
      className={`fixed inset-0 z-[60] transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-[88%] max-w-[360px] bg-gradient-to-b from-white via-sky-50 to-blue-50
        text-gray-800 border-l border-blue-200 shadow-2xl transform transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-blue-200">
          <div className="text-sm text-gray-500 font-medium">Menu</div>
          <button
            aria-label="Close Menu"
            onClick={() => setOpen(false)}
            className="text-blue-500 hover:text-blue-600 transition"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Branding */}
        <div className="px-6 py-4 border-b border-blue-200">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
            YOMBLY
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Navigate quickly and explore our business services.
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-4 overflow-y-auto">
          <ul className="space-y-2">
            {finalNav.map((link, idx) => {
              if (link.type === "dropdown") {
                const isServices = link.label?.toLowerCase() === "services";
                const dropdownLinks = isServices ? services : resourcesLinks;
                const isExpanded = expanded === link.label;

                const isAnyActive =
                  dropdownLinks?.some((d) => d.href && pathname.startsWith(d.href)) || false;

                return (
                  <li key={`${link.label}-${idx}`} className="rounded-md">
                    <button
                      onClick={() => toggleExpand(link.label)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md transition-all
                        ${
                          isAnyActive
                            ? "bg-blue-100 text-blue-600 font-semibold"
                            : "hover:bg-blue-50 text-gray-700"
                        }`}
                    >
                      <span className="flex items-center gap-3">{link.icon}{link.label}</span>
                      {isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </button>

                    {isExpanded && (
                      <ul className="mt-2 ml-3 pl-3 border-l border-blue-200 space-y-1">
                        {dropdownLinks.map((s, i) => {
                          const active = pathname === s.href;
                          return (
                            <li key={s.href || `${s.label}-${i}`}>
                              <Link
                                href={s.href}
                                onClick={() => setOpen(false)}
                                className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-sm transition-colors
                                  ${
                                    active
                                      ? "text-blue-600 bg-blue-100 font-semibold"
                                      : "text-gray-600 hover:text-blue-500 hover:bg-blue-50"
                                  }`}
                              >
                                {s.icon}
                                {s.label}
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              }

              // Regular links
              const isActive = pathname === link.href;
              return (
                <li key={link.href || `${link.label}-${idx}`}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-3 px-3 py-2 rounded-md transition-all
                      ${
                        isActive
                          ? "bg-blue-100 text-blue-600 font-semibold"
                          : "text-gray-700 hover:bg-blue-50 hover:text-blue-500"
                      }`}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              );
            })}

            {/* CTA Buttons */}
            <li className="pt-3">
              <Link
                href="/tickets/track"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md border border-blue-300 text-blue-600 hover:bg-blue-50 transition text-center font-medium"
              >
                Track Ticket
              </Link>
            </li>
            <li>
              <Link
                href="/free-question"
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-sm hover:opacity-90 transition text-center"
              >
                Ask 1 Free Question
              </Link>
            </li>
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-auto px-6 py-4 text-xs text-gray-500 border-t border-blue-200">
          © {new Date().getFullYear()} <span className="font-medium text-blue-500">Yombly</span>. All rights reserved.
        </div>
      </aside>
    </div>
  );
}
