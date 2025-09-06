"use client"

import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <h2 id="contact-title" className="text-balance text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Contact Information
        </h2>

        <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl rounded-2xl border border-border bg-card p-6 sm:p-8 md:p-10 shadow-sm">
            <div className="grid gap-4 sm:gap-6 md:gap-8 text-center">
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">Establish Communication</h3>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
                  Ready to explore exceptional IT opportunities or engage top-tier talent? Our team is prepared to assist you.
                </p>
              </div>

              <div className="space-y-4 sm:space-y-6 md:space-y-8">
                <div>
                  <h4 className="font-medium text-foreground mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Corporate Email</h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    Hr@veyratech.in
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">Corporate Headquarters</h4>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                    B wing 601 Meghna Shivam, Sector- 4, Karanjada, 12, Dombala, Panvel, Navi Mumbai, Maharashtra 410206
                  </p>
                </div>
              </div>

              <div className="pt-4 sm:pt-6 border-t border-border">
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
                  For professional inquiries, please utilize our corporate email address. We maintain a standard response time of 1-2 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
