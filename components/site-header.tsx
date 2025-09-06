"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const linkBase =
    "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"

  const mobileLinkBase =
    "block w-full text-base font-medium text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-4 py-3"

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "border-b border-border" : ""
      }`}
      role="banner"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-2 sm:py-3" aria-label="Main navigation">
          <Link href="#" className="flex items-center gap-2 sm:gap-3" aria-label="Home">
            <Image
              src="/logo/Logo.png"
              alt="VEYRA Corporate Logo"
              width={40}
              height={40}
              className="h-7 w-7 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
            />
            <span className="text-sm sm:text-base lg:text-lg font-semibold text-[#1F5D96]">VEYRA</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-4 lg:gap-6 xl:gap-8 xl:flex">
            <li>
              <a href="#" className={linkBase}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={linkBase}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className={linkBase}>
                Services
              </a>
            </li>
            <li>
              <a href="#careers" className={linkBase}>
                Careers
              </a>
            </li>
            <li>
              <a href="#contact" className={linkBase}>
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="xl:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
            <div className="py-3 space-y-1">
              <a href="#" className={mobileLinkBase} onClick={closeMobileMenu}>
                Home
              </a>
              <a href="#about" className={mobileLinkBase} onClick={closeMobileMenu}>
                About
              </a>
              <a href="#services" className={mobileLinkBase} onClick={closeMobileMenu}>
                Services
              </a>
              <a href="#careers" className={mobileLinkBase} onClick={closeMobileMenu}>
                Careers
              </a>
              <a href="#contact" className={mobileLinkBase} onClick={closeMobileMenu}>
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
