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

      {/* Ecosystem & Technology Leadership */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-3">Technology & Platform Leadership</span>
            <h2 className="font-heading text-4xl">SiteSyncOS™ Development & Ecosystem Integration</h2>
            <p className="text-gray-300 font-light mt-4 max-w-2xl">
              SiteSyncOS™, Guardian's unified execution platform, was developed by Ahmad Muhammad and is powered by Collective AI. The platform integrates spatial intelligence, real-time capital tracking, and AI-driven project management to transform development concepts into institutionally structured investment opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-2xl text-white mb-4">Ahmad Muhammad</h3>
              <p className="text-gray-300 font-light text-sm mb-4">Lead Developer, SiteSyncOS™</p>
              <p className="text-gray-300 font-light text-sm leading-relaxed mb-4">
                Director of Development at Guardian Development Group, Ahmad leads platform architecture, capital structuring, and institutional integration. His multidisciplinary background spanning engineering, manufacturing, and project management enables SiteSyncOS™ to bridge technical feasibility with financial performance.
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Core Expertise</p>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• Real estate development strategy & execution</li>
                  <li>• Capital stack design & institutional structuring</li>
                  <li>• Renewable energy & microgrid integration</li>
                  <li>• Risk management & operational alignment</li>
                </ul>
              </div>
            </div>
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-2xl text-white mb-4">Powered by Collective AI</h3>
              <p className="text-gray-300 font-light text-sm mb-4">Analytical Intelligence & Feasibility Modeling</p>
              <p className="text-gray-300 font-light text-sm leading-relaxed mb-4">
                Collective AI provides the analytical backbone for SiteSyncOS™, delivering feasibility modeling, risk assessment, and cross-sector data integration. This partnership ensures every development opportunity is validated through rigorous, data-driven analysis before institutional capital commitment.
              </p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Capabilities</p>
                <ul className="space-y-2 text-gray-300 font-light text-sm">
                  <li>• Multi-dimensional feasibility analysis</li>
                  <li>• Real-time financial modeling</li>
                  <li>• Risk assessment & mitigation frameworks</li>
                  <li>• Cross-sector data integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Advisors */}
      <section className="py-24 bg-primary text-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-3">Strategic Partners</span>
            <h2 className="font-heading text-4xl">Institutional Advisory Network</h2>
            <p className="text-gray-300 font-light mt-4 max-w-2xl">
              Guardian operates within a disciplined, multi-layered development ecosystem. Each partner brings specialized expertise to transform early-stage concepts into institutionally structured, technically validated, and financially viable investment opportunities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-xl text-white mb-3">Business Development Concepts (BDC)</h3>
              <p className="text-gray-300 font-light text-sm mb-3">Led by Arthur Fayne Sr.</p>
              <p className="text-gray-300 font-light text-sm leading-relaxed">Focuses on capital structuring, institutional engagement, and preparation of development opportunities for financing. BDC ensures every project is positioned for optimal capital stack design and investor alignment.</p>
            </div>
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-xl text-white mb-3">RRG / EnerGenius</h3>
              <p className="text-gray-300 font-light text-sm mb-3">Technical Infrastructure & Renewable Energy</p>
              <p className="text-gray-300 font-light text-sm leading-relaxed">Provides technical infrastructure architecture, renewable energy system integration, and resilient infrastructure design. Ensures developments are technically sound and future-ready.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-xl text-white mb-4">Guardian Development Group (GDG)</h3>
              <p className="text-gray-300 font-light text-sm mb-3">Execution & Operational Delivery</p>
              <p className="text-gray-300 font-light text-sm leading-relaxed mb-4">Oversees development execution, project management, and operational asset delivery. GDG transforms structured capital and technical validation into realized, performing assets.</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-mono uppercase tracking-widest text-accent mb-2">Process Flow</p>
                <p className="text-gray-300 font-light text-sm">Concept → Capital Structuring → Technical Validation → Operational Execution</p>
              </div>
            </div>
            <div className="p-8 border border-white/10 hover:border-accent transition-colors">
              <h3 className="font-heading text-xl text-white mb-4">Integrated Ecosystem Approach</h3>
              <p className="text-gray-300 font-light text-sm leading-relaxed">This disciplined, multi-layered structure ensures every development opportunity is:</p>
              <ul className="space-y-2 text-gray-300 font-light text-sm mt-4">
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Structured for institutional capital alignment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Validated through rigorous analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Designed with technical excellence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block flex-shrink-0"></span>
                  <span>Executed with operational discipline</span>
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
