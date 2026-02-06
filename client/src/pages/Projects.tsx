import { ArrowRight, MapPin, Users, DollarSign, Home, Building2, TrendingUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Projects() {
  const signatureProjects = [
    {
      name: "Eastside Market",
      location: "Cleveland, OH",
      description: "Full-scale grocery store addressing food insecurity and economic disinvestment in the Eastside community. Serves as a community anchor and catalyst for neighborhood revitalization.",
      type: "Community Anchor",
      icon: Building2
    },
    {
      name: "NEON Health Services Clinics",
      location: "Cleveland, OH",
      description: "Community health clinic development expanding access to primary healthcare in underserved neighborhoods.",
      type: "Healthcare Facility",
      icon: Users
    },
    {
      name: "Teaching Kitchen Initiatives",
      location: "Cleveland, OH",
      description: "Workforce training, nutrition education, and food entrepreneurship programs integrated with community development.",
      type: "Workforce Development",
      icon: TrendingUp
    },
    {
      name: "Veteran Housing Projects",
      location: "Cleveland, OH",
      description: "Stable housing solutions for veterans and low-to-moderate income populations.",
      type: "Housing",
      icon: Home
    },
    {
      name: "Salon Lofts",
      location: "Northeast, OH",
      description: "Mixed-use residential and commercial development combining residential units with ground-floor commercial space.",
      type: "Mixed-Use",
      icon: Building2
    },
    {
      name: "Urban Infill Development",
      location: "Pittsburgh, PA",
      description: "Rehabilitation of existing housing stock and ground-up residential construction on infill lots with flexible exit strategies.",
      type: "Residential",
      icon: Home
    }
  ];

  const projectTimeline = [
    {
      period: "1993 – 1999",
      title: "Urban Redevelopment Leadership",
      location: "Cleveland, Ohio",
      role: "Vice Chairman, Hough Area Partners in Progress",
      description: "Senior board leadership during one of Cleveland's most significant neighborhood revitalization efforts. Coordinated redevelopment and construction of 500+ single-family homes in the Hough community, stabilizing housing values and catalyzing reinvestment. Managed coordination with city agencies, nonprofit partners, lenders, and community stakeholders.",
      metrics: [
        { label: "Homes Delivered", value: "500+" },
        { label: "Scope", value: "Large-Scale Urban Renewal" }
      ]
    },
    {
      period: "2000 – 2020",
      title: "Private Residential Redevelopment",
      location: "Greater Cleveland, Ohio",
      role: "Developer & Principal",
      description: "Focused on distressed and transitional neighborhoods with end-to-end responsibility for acquisition, rehabilitation, financing, and disposition. Each project required strategic market analysis, creative financing structures, and disciplined execution.",
      metrics: [
        { label: "Homes Rehabilitated", value: "60+" },
        { label: "Focus", value: "Distressed Markets" }
      ]
    },
    {
      period: "Recent Years",
      title: "Community-Serving Development",
      location: "Cleveland, Ohio",
      role: "Principal Developer",
      description: "Developed anchor institutions addressing critical community needs: grocery access (Eastside Market), primary healthcare (NEON Clinics), workforce training (Teaching Kitchens), and stable housing (Veteran Housing). Each project required complex capital stacks combining bank/CDFI debt, municipal gap funding, grants, and philanthropic capital.",
      metrics: [
        { label: "Projects", value: "4 Major Initiatives" },
        { label: "Impact", value: "Community-Serving" }
      ]
    },
    {
      period: "Past 5 Years",
      title: "Mixed-Use Development",
      location: "Northeast, Ohio",
      role: "Developer & Entitlements Lead",
      description: "Salon Lofts project combining residential and commercial uses. Managed zoning, entitlements, financing, and execution oversight. Demonstrated ability to navigate complex regulatory environments and deliver mixed-use projects.",
      metrics: [
        { label: "Project Type", value: "Mixed-Use" },
        { label: "Scope", value: "Residential + Commercial" }
      ]
    },
    {
      period: "Recent & Ongoing",
      title: "Urban Infill Development",
      location: "Pittsburgh, Pennsylvania",
      role: "Developer",
      description: "Rehabilitation of existing housing stock combined with ground-up residential construction on adjacent infill lots. Flexible exit strategies (sale or refinance) provide multiple paths to value realization.",
      metrics: [
        { label: "Strategy", value: "Rehab + Ground-Up" },
        { label: "Exit Flexibility", value: "Sale or Refinance" }
      ]
    }
  ];

  const capitalStacks = [
    {
      title: "Large-Scale Urban Housing (P3 Model)",
      market: "Cleveland, Ohio",
      example: "Hough Area Partners in Progress (500+ homes)",
      sources: ["Public subsidy", "Construction debt", "Permanent financing", "Homebuyer equity"],
      outcome: "500+ homes delivered, neighborhood stabilization"
    },
    {
      title: "Private Rehab & Resale Model",
      market: "Greater Cleveland",
      example: "60+ Single-Family Rehabilitations",
      sources: ["Sponsor equity", "Acquisition/rehab financing", "Sale or refinance"],
      outcome: "60+ rehabilitated homes, market-rate returns"
    },
    {
      title: "Community Anchor Development",
      market: "Cleveland",
      example: "Eastside Market, NEON Clinics, Teaching Kitchens",
      sources: ["Bank/CDFI debt", "Municipal gap funding", "Grants", "Philanthropic capital"],
      outcome: "Community-serving anchors, lasting impact"
    },
    {
      title: "Mixed-Use Development",
      market: "Northeast, Ohio",
      example: "Salon Lofts",
      sources: ["Sponsor equity", "Construction loan", "Permanent refinance"],
      outcome: "Mixed-use development, commercial + residential"
    },
    {
      title: "Urban Infill (Rehab + Ground-Up)",
      market: "Pittsburgh, PA",
      example: "Infill Residential Development",
      sources: ["DSCR bridge", "Construction financing", "Sale or refinance"],
      outcome: "Flexible exit strategies, value creation"
    }
  ];

  const experienceSummary = [
    { metric: "40+", label: "Years in Urban Development" },
    { metric: "500+", label: "Homes Delivered (Hough Revitalization)" },
    { metric: "60+", label: "Homes Privately Rehabilitated" },
    { metric: "Multiple", label: "Community-Serving Anchor Projects" },
    { metric: "Domestic & International", label: "Development Experience" },
    { metric: "Complex", label: "Capital Structures & P3 Models" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663249654411/AhuotoaGdPharxut.jpg" 
            alt="Urban Planning" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="container relative z-10">
          <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Portfolio</span>
          <h1 className="font-heading text-5xl md:text-7xl mb-8 leading-tight">
            Delivered <span className="text-accent">Results</span>.<br />
            Built <span className="text-white/80">Communities</span>.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Over 40 years of development expertise across urban revitalization, community-serving anchors, and complex mixed-use projects. 500+ homes delivered. Countless lives improved.
          </p>
        </div>
      </section>

      {/* Signature Projects */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Featured Work</span>
            <h2 className="font-heading text-4xl text-primary">Signature Projects & Initiatives</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              Representative projects demonstrating our approach to community-serving development, complex capital structuring, and lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {signatureProjects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} className="p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-mono uppercase tracking-widest text-primary/60">{project.type}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-primary mb-2 group-hover:text-accent transition-colors">{project.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{project.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Timeline */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-3">Development Timeline</span>
            <h2 className="font-heading text-4xl">Project History & Leadership</h2>
            <p className="text-gray-300 font-light mt-4 max-w-2xl">
              A chronological overview of major development initiatives, demonstrating consistent execution across market cycles and project types.
            </p>
          </div>

          <div className="space-y-12">
            {projectTimeline.map((phase, idx) => (
              <div key={idx} className="p-8 border border-white/10 hover:border-accent transition-colors">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">Period</p>
                    <p className="font-heading text-2xl text-white">{phase.period}</p>
                  </div>
                  <div className="md:col-span-3">
                    <h3 className="font-heading text-2xl text-white mb-2">{phase.title}</h3>
                    <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">{phase.role}</p>
                    <p className="text-gray-300 font-light text-sm leading-relaxed mb-6">{phase.description}</p>
                    <div className="flex gap-8">
                      {phase.metrics.map((metric, midx) => (
                        <div key={midx}>
                          <p className="text-accent font-mono text-xs uppercase tracking-widest mb-1">{metric.label}</p>
                          <p className="text-white font-heading text-lg">{metric.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Summary */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Track Record</span>
            <h2 className="font-heading text-4xl text-primary">Experience Summary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experienceSummary.map((item, idx) => (
              <div key={idx} className="p-8 border border-border hover:border-accent transition-colors">
                <p className="text-accent font-heading text-4xl font-bold mb-2">{item.metric}</p>
                <p className="text-muted-foreground font-light text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capital Structures */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Deal Structures</span>
            <h2 className="font-heading text-4xl text-primary">Representative Capital Stacks</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              Complex projects require sophisticated capital structures. Below are representative models demonstrating our expertise in aligning diverse funding sources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capitalStacks.map((stack, idx) => (
              <div key={idx} className="p-8 bg-white border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl text-primary mb-2">{stack.title}</h3>
                <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">{stack.market}</p>
                <p className="text-muted-foreground font-light text-sm mb-6">{stack.example}</p>
                
                <div className="mb-6">
                  <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-3">Capital Sources</p>
                  <ul className="space-y-2">
                    {stack.sources.map((source, sidx) => (
                      <li key={sidx} className="flex items-start gap-2 text-muted-foreground text-sm font-light">
                        <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                        <span>{source}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-border pt-4">
                  <p className="text-primary font-semibold text-xs uppercase tracking-widest mb-2">Outcome</p>
                  <p className="text-muted-foreground font-light text-sm">{stack.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Experience */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Global Perspective</span>
              <h2 className="font-heading text-4xl md:text-5xl mb-6">International Development Experience</h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
                Beyond domestic development, our team brings international perspective and cross-border experience. Early exposure to emerging markets and strategic leadership in international development initiatives inform our approach to complex, multi-stakeholder projects.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-accent font-mono text-xs uppercase tracking-widest block flex-shrink-0 mt-1">China</span>
                  <p className="text-gray-400 font-light text-sm">Early international exposure and market development</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent font-mono text-xs uppercase tracking-widest block flex-shrink-0 mt-1">Africa</span>
                  <p className="text-gray-400 font-light text-sm">Managing Director, Friends of the African Union Opportunity Development Group</p>
                </div>
              </div>
            </div>
            <div className="relative h-80 bg-white/10 border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
                <p className="text-gray-400 font-light">Domestic & International Markets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Ready to Explore Partnership Opportunities?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Guardian Development Group brings proven execution, institutional expertise, and community-serving values to complex development challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-16 px-10 text-base uppercase tracking-widest font-bold">
              Start a Conversation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
