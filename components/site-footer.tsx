import Link from "next/link"
import Image from "next/image"
import { Linkedin, Twitter, Facebook } from "lucide-react"

export function SiteFooter() {
  const linkClass = "text-sm hover:underline underline-offset-4 transition-colors"
  return (
    <footer className="border-t border-[#5A9749] border-2">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:gap-8 md:flex-row">
          <div className="flex items-center gap-2 sm:gap-3">
            <Image
              src="/logo/Logo.png"
              alt="VEYRA Corporate Logo"
              width={32}
              height={32}
              className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8"
            />
            <span className="text-xs sm:text-sm font-semibold text-[#1F5D96]">
              VEYRA
            </span>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <li>
              <Link href="#" className={linkClass} style={{ color: "#1F5D96" }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className={linkClass} style={{ color: "#1F5D96" }}>
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className={linkClass} style={{ color: "#1F5D96" }}>
                Services
              </Link>
            </li>
            <li>
              <Link href="#careers" className={linkClass} style={{ color: "#1F5D96" }}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="#contact" className={linkClass} style={{ color: "#1F5D96" }}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#" aria-label="LinkedIn Professional Network" className="p-1.5 sm:p-2" title="LinkedIn">
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#5A9749" }} />
            </a>
            <a href="#" aria-label="Twitter Corporate Account" className="p-1.5 sm:p-2" title="Twitter">
              <Twitter className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#5A9749" }} />
            </a>
            <a href="#" aria-label="Facebook Business Page" className="p-1.5 sm:p-2" title="Facebook">
              <Facebook className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#5A9749" }} />
            </a>
          </div>
        </div>

        <p className="mt-3 sm:mt-4 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} VEYRA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
