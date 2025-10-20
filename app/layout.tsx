import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://veyratech.in"),
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
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/",
  },
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
  // verification: {
  //   google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  //   other: {
  //     "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
  //   },
  // },
}

export const viewport: Viewport = {
  themeColor: "#1F5D96",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "VEYRA TECH",
      "description": "Professional HR Solutions Company providing recruitment, staffing, payroll management, and HR consulting services. Empowering organizations with skilled manpower and strategic workforce management solutions.",
      "url": "https://veyratech.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://veyratech.in/favicon-48x48.png",
        "width": 48,
        "height": 48
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/veyra-tech",
        "https://twitter.com/veyratech"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN",
        "addressRegion": "India"
      },
      "foundingDate": "2024",
      "industry": "Human Resources",
      "serviceType": ["HR Solutions", "Recruitment", "Staffing"],
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "VEYRA TECH Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Recruitment Solutions",
              "description": "Permanent & Contract Staffing, Executive Search & Head Hunting, Industry-Specific Hiring Solutions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "HR Management",
              "description": "Payroll & Compliance Management, HR Consulting & Advisory, Training & Development Programs"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Staffing Services",
              "description": "Employee Outsourcing, Contractual Staffing, Project-based Workforce Solutions"
            }
          }
        ]
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "VEYRA TECH",
      "url": "https://veyratech.in",
      "description": "Professional HR Solutions & Recruitment Services",
      "publisher": {
        "@type": "Organization",
        "name": "VEYRA TECH"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://veyratech.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]

  return (
    <html lang="en" className="antialiased scroll-smooth">
      <head>
        {/* Additional favicon links for better compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#1F5D96" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="theme-color" content="#1F5D96" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {jsonLd.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
