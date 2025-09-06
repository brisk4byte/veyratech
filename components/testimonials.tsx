"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote: "TechRecruit delivered stellar candidates in under two weeks. Our team has never hired faster.",
    name: "Alex P.",
    role: "VP Engineering, SaaS Co.",
  },
  {
    quote: "Their understanding of data roles is top notch. Great experience from start to finish.",
    name: "Riya M.",
    role: "Head of Data, Fintech",
  },
  {
    quote: "We scaled our security team confidently thanks to their rigorous vetting process.",
    name: "Daniel S.",
    role: "CISO, HealthTech",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[index]

  return (
    <section aria-labelledby="testimonials-title" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 id="testimonials-title" className="text-balance text-center text-2xl font-bold md:text-3xl text-foreground">
          What clients say
        </h2>

        <div className="mx-auto mt-8 max-w-3xl">
          <Card className="rounded-2xl border-border bg-card/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <blockquote className="text-pretty text-lg leading-relaxed text-foreground/90" aria-live="polite">
                “{t.quote}”
              </blockquote>
              <div className="mt-6 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">{t.name}</span>
                {" · "}
                <span>{t.role}</span>
              </div>

              <div className="mt-6 flex items-center justify-end gap-2">
                <Button aria-label="Previous testimonial" variant="ghost" className="rounded-2xl" onClick={prev}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button aria-label="Next testimonial" variant="ghost" className="rounded-2xl" onClick={next}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
