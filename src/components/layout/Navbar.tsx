import { LucideMountainSnow } from "lucide-react"
import MobileMenu from "./MobileMenu"
import navLinks from "@/data/navLinks"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-sidebar-border bg-sidebar/50 backdrop-blur-sm">
        <div className="mx-auto flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#"
            aria-label="NorthPeak Digital home"
            className="flex items-center gap-2 text-xl font-bold tracking-wider transition-opacity hover:opacity-80 md:text-2xl"
          >
            <LucideMountainSnow aria-hidden="true" />
            <span>NorthPeak</span>
          </a>

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

          <div className="md:hidden">
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
