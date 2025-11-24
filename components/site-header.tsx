"use client"
import { Menu, ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LinkWrapper } from "./link-wrapper"

const menuItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/aboutus" },
  { name: "Careers", href: "/careers" },
  { name: "Engagement", href: "/engagement" },
]

const offeringItems = [
  { name: "Management and Business Consulting", href: "/offerings/management-and-business-consulting" },
  { name: "IT Consulting", href: "/offerings/it-services" },
  { name: "Bespoke Application Development", href: "/offerings/bespoke-application-development" },
  { name: "Training", href: "/offerings/training" },
]

export function SiteHeader() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="container flex h-20 items-center justify-between px-4">
        <LinkWrapper href="/" className="flex items-center">
          <img src="/images/skanda_logo.png" alt="Skanda - Experience Expertise" className="h-10 md:h-12 w-auto" />
        </LinkWrapper>

        <nav className="hidden md:flex items-center h-full">
          <ul className="flex space-x-8 h-full items-center">
            {menuItems.map((item) => (
              <li key={item.name} className="h-full flex items-center">
                <LinkWrapper
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors h-full flex items-center"
                >
                  {item.name}
                </LinkWrapper>
              </li>
            ))}

            {/* Hoverable Dropdown */}
            <li
              className="relative h-full flex items-center"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors h-full">
                Offerings <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {isHovering && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 z-50">
                  {offeringItems.map((item) => (
                    <LinkWrapper
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500"
                    >
                      {item.name}
                    </LinkWrapper>
                  ))}
                </div>
              )}
            </li>

            <li className="h-full flex items-center">
              <LinkWrapper
                href="/contactus"
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors h-full flex items-center"
              >
                Contact Us
              </LinkWrapper>
            </li>
          </ul>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6 text-gray-700" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <nav className="flex flex-col space-y-4 mt-8">
              {menuItems.map((item) => (
                <LinkWrapper
                  key={item.name}
                  href={item.href}
                  className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  {item.name}
                </LinkWrapper>
              ))}
              <div className="space-y-3">
                <p className="text-lg font-medium text-gray-700">Offerings</p>
                <div className="pl-4 space-y-3 border-l-2 border-orange-500">
                  {offeringItems.map((item) => (
                    <LinkWrapper
                      key={item.name}
                      href={item.href}
                      className="block text-base text-gray-600 hover:text-orange-500 transition-colors"
                    >
                      {item.name}
                    </LinkWrapper>
                  ))}
                </div>
              </div>
              <LinkWrapper
                href="/contactus"
                className="text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                Contact Us
              </LinkWrapper>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
