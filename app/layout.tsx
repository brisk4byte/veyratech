import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "VEYRA TECH - Comprehensive HR Solutions & Recruitment Services",
  description: "VEYRA TECH - Professional HR Solutions Company. We provide recruitment, staffing, payroll management, and HR consulting services. Empowering organizations with skilled manpower and strategic workforce management solutions.",
  keywords: "HR solutions, recruitment, staffing, payroll management, HR consulting, workforce management, Veyra Tech",
  generator: "VEYRA TECH",
  authors: [{ name: "VEYRA TECH" }],
  creator: "VEYRA TECH",
  publisher: "VEYRA TECH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "VEYRA TECH - Professional HR Solutions & Recruitment Services",
    description: "VEYRA TECH provides comprehensive HR solutions including recruitment, staffing, payroll management, and HR consulting. Empowering organizations with skilled manpower and strategic workforce management solutions.",
    url: "https://veyratech.in",
    siteName: "VEYRA TECH",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "VEYRA TECH - HR Solutions Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VEYRA TECH - Professional HR Solutions & Recruitment Services",
    description: "VEYRA TECH provides comprehensive HR solutions including recruitment, staffing, payroll management, and HR consulting. Empowering organizations with skilled manpower and strategic workforce management solutions.",
    images: ["/logo/Logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#1F5D96",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VEYRA TECH",
    "description": "Professional HR Solutions Company providing recruitment, staffing, payroll management, and HR consulting services",
    "url": "https://veyratech.in",
    "logo": "https://veyratech.in/logo/Logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Recruitment Solutions",
        "description": "Permanent & Contract Staffing, Executive Search & Head Hunting, Industry-Specific Hiring Solutions"
      },
      {
        "@type": "Service", 
        "name": "HR Management",
        "description": "Payroll & Compliance Management, HR Consulting & Advisory, Training & Development Programs"
      },
      {
        "@type": "Service",
        "name": "Staffing Services", 
        "description": "Employee Outsourcing, Contractual Staffing, Project-based Workforce Solutions"
      }
    ]
  }

  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
