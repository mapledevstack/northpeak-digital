import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
]

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <button
            aria-label="Open navigation menu"
            className="rounded-md p-2 transition-colors hover:bg-sidebar-accent"
          />
        }
      >
        <Menu className="h-6 w-6" />
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetTitle className="left mb-8 p-4 text-xl font-bold">
          NorthPeak
        </SheetTitle>

        <div className="flex flex-col">
          {navLinks.map((link) => (
            <SheetClose
              key={link.label}
              render={
                <a
                  href={link.href}
                  className="rounded-md px-4 py-3 font-semibold tracking-wide transition-colors hover:bg-sidebar-accent"
                />
              }
            >
              {link.label}
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
