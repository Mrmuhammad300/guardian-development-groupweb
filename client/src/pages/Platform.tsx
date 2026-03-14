import { ArrowRight, Zap, Brain, Wrench, Cog } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function Platform() {
  const layers = [
    {
      name: "Business Development Concepts (BDC)",
      leader: "Led by Arthur Fayne Sr.",
      icon: Zap,
      description: "Capital Structuring & Institutional Engagement",
      details: [
        "Capital stack design and optimization",
        "Institutional investor alignment",
        "Deal structuring and fund development",
        "Preparation for institutional financing"
      ],
      color: "from-accent/20 to-accent/5"
    },
    {
      name: "Collective AI",
      leader: "Analytical Intelligence & Feasibility Modeling",
      icon: Brain,
      description: "Data-Driven Validation & Risk Assessment",
      details: [
        "Multi-dimensional feasibility analysis",
        "Real-time financial modeling",
        "Risk assessment and mitigation frameworks",
        "Cross-sector data integration"
      ],
      color: "from-blue-500/20 to-blue-500/5"
    },
    {
      name: "RRG / EnerGenius",
      leader: "Technical Infrastructure & Renewable Energy",
      icon: Wrench,
      description: "Technical Validation & System Design",
      details: [
        "Technical infrastructure architecture",
        "Renewable energy system integration",
        "Microgrid and distributed systems design",
        "Resilient infrastructure deployment"
      ],
      color: "from-green-500/20 to-green-500/5"
    },
    {
      name: "Guardian Development Group (GDG)",
      leader: "Execution & Operational Delivery",
      icon: Cog,
      description: "Project Management & Asset Delivery",
      details: [
        "Development execution and project management",
        "Operational asset delivery",
        "Stakeholder coordination and governance",
        "Long-term asset performance and optimization"
      ],
      color: "from-primary/20 to-primary/5"
    }
  ];

  const processSteps = [
    {
      number: "01",
      title: "Concept & Opportunity Identification",
      description: "Early-stage development concepts are identified and evaluated for institutional potential."
    },
    {
      number: "02",
      title: "Capital Structuring (BDC)",
      description: "BDC designs optimal capital stacks and prepares the opportunity for institutional financing."
    },
    {
      number: "03",
      title: "Analytical Validation (Collective AI)",
      description: "Rigorous feasibility analysis, financial modeling, and risk assessment validate institutional readiness."
    },
    {
      number: "04",
      title: "Technical Design (RRG / EnerGenius)",
      description: "Technical architecture is validated and optimized for resilience, sustainability, and performance."
    },
    {
      number: "05",
      title: "Execution & Delivery (GDG)",
      description: "Guardian executes the project, manages operations, and delivers institutional-grade assets."
    },
    {
      number: "06",
      title: "Long-Term Optimization",
      description: "Continuous monitoring, optimization, and value creation throughout the asset lifecycle."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663249654411/AhuotoaGdPharxut.jpg" alt="Platform Architecture" className="w-full h-full object-cover" />
        </div>
        <div className="container relative z-10">
          <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">How We Work</span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[1.1] mb-8">
            A Disciplined <span className="text-accent">Ecosystem</span>.<br />
            Institutional <span className="text-white/80">Excellence</span>.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
            Guardian operates within a multi-layered development platform where specialized entities bring complementary expertise to transform early-stage concepts into institutionally structured, technically validated, and financially viable investment opportunities.
          </p>
        </div>
      </section>

      {/* Four Layers */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Ecosystem Architecture</span>
            <h2 className="font-heading text-4xl text-primary">Four Layers of Expertise</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              Each layer brings specialized capabilities, ensuring every development opportunity is rigorously evaluated, optimally structured, technically sound, and expertly executed.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {layers.map((layer, idx) => {
              const Icon = layer.icon;
              return (
                <div key={idx} className={`p-8 border border-border bg-gradient-to-br ${layer.color} hover:shadow-lg transition-shadow`}>
                  <div className="flex items-start gap-4 mb-6">
                    <Icon className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-2xl text-primary mb-1">{layer.name}</h3>
                      <p className="text-sm font-mono uppercase tracking-widest text-primary/60">{layer.leader}</p>
                    </div>
                  </div>
                  <p className="text-accent font-semibold mb-4">{layer.description}</p>
                  <ul className="space-y-2">
                    {layer.details.map((detail, didx) => (
                      <li key={didx} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                        <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-24 bg-secondary text-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-3">Development Process</span>
            <h2 className="font-heading text-4xl">From Concept to Institutional Asset</h2>
            <p className="text-gray-300 font-light mt-4 max-w-2xl">
              A disciplined, six-phase process ensures every development opportunity is transformed into an institutionally structured, technically validated, and operationally excellent asset.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="p-8 border border-white/10 hover:border-accent transition-colors group">
                <div className="text-accent font-heading text-5xl font-bold mb-4 group-hover:text-white transition-colors">{step.number}</div>
                <h3 className="font-heading text-xl text-white mb-3">{step.title}</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">{step.description}</p>
                {idx < processSteps.length - 1 && (
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <ArrowRight className="h-4 w-4 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SiteSyncOS™ Integration */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Technology Platform</span>
            <h2 className="font-heading text-4xl text-primary">SiteSyncOS™: Unified Execution Platform</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              SiteSyncOS™, developed by Ahmad Muhammad and powered by Collective AI, integrates all four ecosystem layers into a single, unified execution platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl text-primary mb-6">Core Capabilities</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Spatial Intelligence</h4>
                  <p className="text-muted-foreground font-light text-sm">Real-time geographic data integration, site analysis, and infrastructure mapping.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Capital Stack Automation</h4>
                  <p className="text-muted-foreground font-light text-sm">Dynamic capital structure modeling, waterfall analysis, and investor return tracking.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">AI-Driven Project Management</h4>
                  <p className="text-muted-foreground font-light text-sm">Predictive analytics, risk assessment, and real-time project performance monitoring.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Investor Dashboard</h4>
                  <p className="text-muted-foreground font-light text-sm">Real-time portfolio visibility, financial updates, and milestone tracking.</p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-border p-8">
              <h3 className="font-heading text-2xl text-primary mb-6">Integrated Ecosystem</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">BDC Capital Structuring</p>
                    <p className="text-sm text-muted-foreground font-light">Optimal capital stack design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">Collective AI Analytics</p>
                    <p className="text-sm text-muted-foreground font-light">Data-driven validation & modeling</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <Wrench className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">RRG Technical Architecture</p>
                    <p className="text-sm text-muted-foreground font-light">Resilient infrastructure design</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Cog className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">GDG Execution</p>
                    <p className="text-sm text-muted-foreground font-light">Project delivery & operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Readiness */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Investor Alignment</span>
            <h2 className="font-heading text-4xl text-primary">Institutional-Grade Discipline</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Governance",
                items: ["Clear decision frameworks", "Stakeholder alignment", "Transparent reporting", "Compliance adherence"]
              },
              {
                title: "Risk Management",
                items: ["Multi-dimensional analysis", "Mitigation strategies", "Contingency planning", "Real-time monitoring"]
              },
              {
                title: "Financial Rigor",
                items: ["Structured capital stacks", "Conservative underwriting", "Waterfall clarity", "Return optimization"]
              },
              {
                title: "Operational Excellence",
                items: ["Execution discipline", "Performance tracking", "Continuous improvement", "Long-term value creation"]
              }
            ].map((category, idx) => (
              <div key={idx} className="p-8 border border-border hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-xl text-primary mb-6">{category.title}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-2 text-sm text-muted-foreground font-light">
                      <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Ready to Explore Our Platform?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Learn how our disciplined, multi-layered ecosystem transforms development concepts into institutional-grade assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/sitesync-os">
              <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-16 px-10 text-base uppercase tracking-widest font-bold">
                Explore SiteSyncOS™ <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary rounded-none h-16 px-10 text-base uppercase tracking-widest font-bold">
                Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
