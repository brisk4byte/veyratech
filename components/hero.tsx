"use client"

import { Button } from "@/components/ui/button"

export function Hero() {

  return (
    <section aria-label="Hero" className="w-full min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 md:py-16 lg:py-20 w-full">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          <h1 className="text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground">
            Veyra Tech
          </h1>
          <h2 className="text-balance text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight text-primary">
            Comprehensive HR Solutions
          </h2>
          <p className="text-pretty text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-3xl">
            Empowering organizations with skilled manpower, seamless HR operations, and strategic workforce management solutions
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <a href="#contact">
              <Button className="w-full sm:w-auto rounded-2xl px-4 sm:px-6 py-3 sm:py-5 text-sm sm:text-base font-semibold transition-opacity hover:opacity-90">
                Book a consultation
              </Button>
            </a>
            <a
              href="#services"
              className="text-sm font-semibold text-muted-foreground underline-offset-4 hover:underline"
            >
              Our services
            </a>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm sm:text-lg font-bold">
              01
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">About Veyra Tech</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Company overview and professional background</p>
          </div>
          
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm sm:text-lg font-bold">
              02
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Core Services</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Comprehensive HR solution offerings</p>
          </div>
          
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm sm:text-lg font-bold">
              03
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Partnership Benefits</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Why choose Veyra Tech solutions</p>
          </div>
          
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto text-sm sm:text-lg font-bold">
              04
            </div>
            <h3 className="font-semibold text-foreground text-sm sm:text-base">Contact Information</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Connect with our expert team</p>
          </div>
        </div>
      </div>
    </section>
  )
}
