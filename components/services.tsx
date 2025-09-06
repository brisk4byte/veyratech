import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Shield, FileText, Target, GraduationCap } from "lucide-react"

const services = [
  {
    title: "Recruitment Solutions",
    icon: Briefcase,
    description: "Permanent & Contract Staffing, Executive Search & Head Hunting, Industry-Specific Hiring Solutions",
  },
  {
    title: "Talent Acquisition Services",
    icon: Users,
    description: "Comprehensive recruitment and talent acquisition solutions for organizational growth",
  },
  {
    title: "Staffing Services",
    icon: Target,
    description: "Employee Outsourcing, Contractual Staffing, Project-based Workforce Solutions, Comprehensive Outsourcing",
  },
  {
    title: "HR Management",
    icon: FileText,
    description: "Payroll & Compliance Management, HR Consulting & Advisory, Training & Development Programs, Performance Management",
  },
  {
    title: "Payroll & Compliance",
    icon: Shield,
    description: "Complete payroll management and legal compliance solutions for businesses",
  },
  {
    title: "HR Consulting",
    icon: GraduationCap,
    description: "Strategic HR consulting and advisory services for organizational excellence",
  },
]

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 id="services-title" className="text-balance text-center text-2xl font-bold text-foreground md:text-3xl">
          Our Core Service Areas
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => (
            <Card
              key={s.title}
              className="rounded-2xl border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-sm"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <s.icon aria-hidden="true" className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg text-foreground">{s.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{s.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Service Breakdown */}
        <div className="mt-20 space-y-16">
          {/* Recruitment Services */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Recruitment Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Permanent and contract staffing solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Executive search and head hunting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Industry-specific hiring expertise</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-2">Comprehensive recruitment and talent acquisition solutions for organizational growth</h4>
            </div>
          </div>

          {/* Payroll & Compliance */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="bg-muted p-6 rounded-2xl order-2 lg:order-1">
              <h4 className="font-semibold text-foreground mb-2">Complete payroll management and legal compliance solutions for businesses</h4>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-foreground">Payroll Management</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Third-party payroll management services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Statutory and legal compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Employee benefits administration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* HR Consulting */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">HR Consulting</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>HR policy design and implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Organization structuring solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Compliance management and advisory</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-2">Strategic HR consulting and advisory services for organizational excellence</h4>
            </div>
          </div>

          {/* Staffing Excellence */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="bg-muted p-6 rounded-2xl order-2 lg:order-1">
              <h4 className="font-semibold text-foreground mb-2">Employee outsourcing and contractual staffing solutions for project-based workforce requirements</h4>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-foreground">Staffing Excellence</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Skilled manpower placement across industries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Project-based workforce solutions for scalability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Contractual staffing with compliance management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Development Programs */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Development Programs</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Comprehensive training and development programs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Performance management systems and frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Employee engagement initiatives and culture building</span>
                </li>
              </ul>
            </div>
            <div className="bg-muted p-6 rounded-2xl">
              <h4 className="font-semibold text-foreground mb-2">Training and development programs designed to enhance employee performance and engagement</h4>
            </div>
          </div>

          {/* Legal Compliance */}
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div className="bg-muted p-6 rounded-2xl order-2 lg:order-1">
              <h4 className="font-semibold text-foreground mb-2">Statutory compliance management and legal advisory services ensuring regulatory adherence for businesses</h4>
            </div>
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-foreground">Legal Compliance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Complete statutory and legal compliance management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Regulatory adherence and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span>Legal advisory for HR operations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-20">
          <h3 className="text-center text-3xl font-bold text-foreground mb-12">Why Choose Veyra Tech Solutions</h3>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">✓</span>
              </div>
              <h4 className="font-semibold text-foreground">End-to-End HR Functions</h4>
              <p className="text-sm text-muted-foreground">Complete HR solutions from recruitment to compliance</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">✓</span>
              </div>
              <h4 className="font-semibold text-foreground">Quality & Transparency</h4>
              <p className="text-sm text-muted-foreground">Transparent processes and quality-driven approach</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">✓</span>
              </div>
              <h4 className="font-semibold text-foreground">Customized Solutions</h4>
              <p className="text-sm text-muted-foreground">Tailored HR solutions for your business needs</p>
            </div>
            
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl font-bold text-primary">✓</span>
              </div>
              <h4 className="font-semibold text-foreground">Business Growth</h4>
              <p className="text-sm text-muted-foreground">Strategic HR solutions that drive business success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
