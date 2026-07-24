import { LucideMountainSnow } from "lucide-react"
import MobileMenu from "./MobileMenu"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Results", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

const Navbar = () => {
  return (
    <header>
      <nav className="sticky top-0 z-50 border-b border-sidebar-border bg-sidebar">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a
            href="#"
            aria-label="NorthPeak Digital home"
            className="flex items-center gap-2 text-xl font-bold tracking-wider transition-opacity hover:opacity-80 md:text-2xl"
          >
            <LucideMountainSnow aria-hidden="true" />
            <span>NorthPeak</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden h-full md:flex">
            {navLinks.map((navLink) => (
              <a
                key={navLink.label}
                href={navLink.href}
                className="flex items-center px-6 font-bold tracking-wider transition-colors hover:bg-sidebar-accent"
              >
                {navLink.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
