export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
            <h2 id="about-title" className="text-balance text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              About Veyra Tech
            </h2>
            
          <div className="space-y-4 max-w-4xl">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Incorporation</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base md:text-lg">
                Professionally managed startup incorporated under Companies Act, 2013 with focus on comprehensive HR solutions
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Objective</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base md:text-lg">
                Empowering organizations with skilled manpower, seamless HR operations, and strategic workforce management excellence
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Expertise</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground text-sm sm:text-base md:text-lg">
                Company limited by shares delivering customized human resource solutions tailored for business growth
              </p>
            </div>
          </div>
        </div>

        {/* Vision and Strategic Planning */}
        <div className="mt-20 space-y-16">
          {/* Vision */}
          <div className="text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              To become a trusted partner for organizations by providing innovative and result-driven HR solutions that help businesses grow and employees thrive
            </p>
          </div>

          {/* Strategic Planning and Development */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Strategic Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive HR policy design and implementation with organization structuring solutions. We provide compliance management services and strategic workforce planning to ensure your business operates efficiently with proper regulatory adherence and organizational excellence.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-2">Strategic HR Planning</h4>
              <p className="text-sm text-muted-foreground">
                Comprehensive HR policy design and implementation with organization structuring solutions. We provide compliance management services and strategic workforce planning to ensure your business operates efficiently with proper regulatory adherence and organizational excellence.
              </p>
            </div>
          </div>

          {/* Employee Development */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="bg-muted p-6 rounded-2xl order-2 lg:order-1">
              <h4 className="font-semibold text-foreground mb-2">Employee Development</h4>
              <p className="text-sm text-muted-foreground">
                Training and development programs designed to enhance employee performance and engagement. Our initiatives include performance management systems, employee engagement programs, and skill development workshops that contribute to organizational growth and employee satisfaction.
              </p>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-foreground">Training & Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Training and development programs designed to enhance employee performance and engagement. Our initiatives include performance management systems, employee engagement programs, and skill development workshops that contribute to organizational growth and employee satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
