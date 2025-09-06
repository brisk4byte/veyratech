"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"

const jobs = [
  {
    title: "Senior Frontend Engineer",
    description: "Expert in developing responsive and scalable user interfaces utilizing modern frameworks and industry best practices to deliver optimal user experiences.",
  },
  {
    title: "Data Engineer",
    description: "Specialized in architecting and implementing comprehensive data pipelines, ETL processes, and robust data infrastructure solutions for enterprise applications.",
  },
  {
    title: "Cloud Security Specialist",
    description: "Ensuring comprehensive security measures across cloud platforms with expertise in compliance frameworks, threat detection methodologies, and risk management strategies.",
  },
  {
    title: "DevOps Engineer",
    description: "Streamlining development workflows through advanced automation, containerization technologies, and continuous integration practices to accelerate deployment cycles.",
  },
  {
    title: "Full Stack Developer",
    description: "Versatile developer proficient in both frontend and backend development with comprehensive understanding of modern web technologies and architectural patterns.",
  },
  {
    title: "Product Manager",
    description: "Leading product strategy and development initiatives from conception to market launch, ensuring strategic alignment with business objectives and user requirements.",
  },
  {
    title: "UI/UX Designer",
    description: "Creating intuitive and visually compelling user interfaces that enhance user engagement and drive measurable business outcomes.",
  },
  {
    title: "Machine Learning Engineer",
    description: "Developing and deploying sophisticated machine learning models and AI solutions to address complex business challenges and drive innovation initiatives.",
  },
]

export function Careers() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const scrollAmount = 400
      const newScrollLeft = direction === 'left' 
        ? container.scrollLeft - scrollAmount 
        : container.scrollLeft + scrollAmount
      
      container.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      })
    }
  }

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  return (
    <section id="careers" aria-labelledby="careers-title" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <h2 id="careers-title" className="text-balance text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          Our Core Competencies
        </h2>
        
        <p className="mt-3 sm:mt-4 md:mt-6 text-center text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover our comprehensive range of IT domains and technological expertise
        </p>

        <div className="relative mt-6 sm:mt-8 md:mt-12">
          {/* Left Arrow */}
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-2 rounded-full bg-white p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-[#1F5D96]" />
            </button>
          )}

          {/* Right Arrow */}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-2 rounded-full bg-white p-3 shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-[#1F5D96]" />
            </button>
          )}

          {/* Horizontal Scrolling Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide pb-4 sm:pb-6 md:pb-8 px-4 sm:px-6 md:px-8 scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              scrollBehavior: 'smooth'
            }}
          >
            {jobs.map((job, index) => (
              <Card
                key={job.title}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[320px] lg:min-w-[350px] rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 ease-out hover:shadow-lg"
              >
                <CardHeader className="pb-3 px-4 sm:px-5 md:px-6">
                  <CardTitle className="text-base sm:text-lg md:text-xl text-foreground leading-tight">{job.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-5 md:px-6 pb-4 sm:pb-5 md:pb-6">
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 md:mt-12 text-center">
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground">
            Interested in our professional services? Please contact us at{" "}
            <a href="mailto:Hr@veyratech.in" className="text-[#1F5D96] hover:underline font-medium">
              Hr@veyratech.in
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
