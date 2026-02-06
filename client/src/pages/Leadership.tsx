import { ArrowRight, Building2, Globe, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Leadership() {
  const capabilities = [
    {
      title: "Real Estate Development Strategy & Execution",
      description: "Feasibility analysis, site control structuring, and end-to-end project delivery across mixed-use, industrial, and sustainable developments.",
      icon: Building2
    },
    {
      title: "Capital Stack Design & Structuring",
      description: "Equity, debt, tax credits, and alternative financing mechanisms aligned with project cash flow and risk profile.",
      icon: Zap
    },
    {
      title: "Public-Private Partnerships & Strategic Alliances",
      description: "Complex multi-stakeholder coordination, fund development, and institutional capital alignment.",
      icon: Users
    },
    {
      title: "Sustainable Infrastructure & Energy Integration",
      description: "Renewable energy systems, microgrids, and resilient infrastructure deployment across real estate platforms.",
      icon: Globe
    }
  ];

  const entities = [
    {
      name: "Strategic Advisory Partnerships",
      description: "Collaboration with institutional investors, family offices, and development platforms through independent advisory relationships.",
      focus: "Capital alignment, deal structuring, risk mitigation"
    },
    {
      name: "Special Purpose Vehicles (SPVs)",
      description: "Project-specific entities designed to isolate risk, align incentives, and optimize tax and regulatory treatment.",
      focus: "Single or portfolio projects with distinct capital stacks"
    },
    {
      name: "Joint Venture Structures",
      description: "Co-development partnerships with complementary expertise, shared equity, and aligned governance frameworks.",
      focus: "Large-scale developments requiring operational and financial co-investment"
    },
    {
      name: "Platform Partnerships",
      description: "Long-term relationships with technology and innovation-driven organizations to integrate advanced execution frameworks.",
      focus: "SiteSyncOS™ integration, AI-driven project management, real-time capital tracking"
    }
  ];

  const trackRecord = [
    { metric: "$30M+", label: "Real Estate Projects Developed & Managed" },
    { metric: "500+", label: "Homes Delivered Through Urban Revitalization" },
    { metric: "60+", label: "Private Residential Rehabilitations" },
    { metric: "40+", label: "Years of Combined Development Experience" },
    { metric: "Multiple", label: "Community-Serving Anchor Developments" },
    { metric: "Domestic & International", label: "Development Platforms & Expertise" }
  ];

  const focusAreas = [
    {
      title: "Sustainable Mixed-Use & Industrial Developments",
      description: "Integrated real estate platforms combining residential, commercial, and industrial uses with sustainability-first design."
    },
    {
      title: "Energy-Integrated Real Estate & Microgrid Campuses",
      description: "Developments that embed renewable energy, microgrids, and distributed systems as core operational infrastructure."
    },
    {
      title: "Technology-Driven Manufacturing & Infrastructure Assets",
      description: "Advanced manufacturing, logistics, and infrastructure projects leveraging digital execution and AI-driven operations."
    },
    {
      title: "Long-Term, Cash-Flow-Oriented Development Platforms",
      description: "Institutional-grade platforms designed for stable returns, operational excellence, and multi-decade value creation."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663249654411/AhuotoaGdPharxut.jpg" alt="Urban Planning" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Leadership & Capabilities</span>
          <h1 className="font-heading text-5xl md:text-7xl mb-8 leading-tight">
            Built on <span className="text-accent">Expertise</span>.<br />
            Executed Through <span className="text-white/80">Strategic Partnerships</span>.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Guardian Development Group brings together decades of proven development expertise, institutional-grade capital structuring, and strategic partnerships to deliver complex, high-impact projects.
          </p>
        </div>
      </section>

      {/* Track Record */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Proven Track Record</span>
            <h2 className="font-heading text-4xl text-primary">Decades of Institutional-Grade Execution</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trackRecord.map((item, idx) => (
              <div key={idx} className="p-8 border border-border hover:border-accent transition-colors">
                <div className="text-accent font-heading text-4xl font-bold mb-2">{item.metric}</div>
                <p className="text-muted-foreground font-light text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-3">Operational Excellence</span>
            <h2 className="font-heading text-4xl">Core Capabilities</h2>
            <p className="text-gray-300 font-light mt-4 max-w-2xl">
              Guardian's team brings deep expertise across development strategy, capital structuring, and execution—enabling complex, multi-stakeholder projects to move decisively from vision to delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-8 border border-white/10 hover:border-accent transition-colors group">
                  <Icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-xl text-white mb-3">{cap.title}</h3>
                  <p className="text-gray-300 font-light text-sm leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Organizational Structures */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Strategic Framework</span>
            <h2 className="font-heading text-4xl text-primary">Organizational Structures & Partnerships</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              Guardian operates through strategically aligned entities and partnerships, each designed to optimize capital efficiency, risk management, and operational alignment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {entities.map((entity, idx) => (
              <div key={idx} className="p-8 bg-white border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl text-primary mb-3">{entity.name}</h3>
                <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">{entity.description}</p>
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-mono uppercase tracking-widest text-primary/60 mb-2">Focus Areas</p>
                  <p className="text-sm text-primary font-medium">{entity.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Focus */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Strategic Direction</span>
            <h2 className="font-heading text-4xl text-primary">Development Focus & Platform Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, idx) => (
              <div key={idx} className="p-8 border border-border hover:border-accent transition-colors">
                <h3 className="font-heading text-xl text-primary mb-4">{area.title}</h3>
                <p className="text-muted-foreground font-light text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Advisors */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-3">Strategic Partners</span>
            <h2 className="font-heading text-4xl">Institutional Advisory Network</h2>
            <p className="text-gray-300 font-light mt-4 max-w-2xl">
              Guardian collaborates with specialized advisory firms and strategic partners who bring complementary expertise in urban development, capital structuring, public-private partnerships, and international development.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-2xl text-white mb-4">Strategic Advisory Relationships</h3>
              <ul className="space-y-3 text-gray-300 font-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Urban development and redevelopment strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Capital stack design and fund development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Public-private partnership structuring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>International development perspective</span>
                </li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-2xl text-white mb-4">Complementary Expertise</h3>
              <ul className="space-y-3 text-gray-300 font-light text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Community-serving development and social impact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Mixed-use and infill development execution</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Affordable and workforce housing platforms</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Institutional capital alignment and compliance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Ready to Partner with Guardian?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            We bring institutional expertise, proven execution, and strategic partnerships to complex development challenges. Let's discuss how Guardian can deliver certainty to your project.
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
