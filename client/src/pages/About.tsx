import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Zap, Brain, Wrench, Cog, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white skew-x-12 transform translate-x-1/4"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Who We Are</span>
            <h1 className="font-heading text-5xl md:text-7xl mb-8">Execution Within a Disciplined Ecosystem.</h1>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">
              Guardian Development Group is the execution layer within an integrated, multi-entity development platform designed to transform early-stage concepts into institutionally structured, technically validated, and financially viable investment opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* The Ecosystem */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Our Platform</span>
            <h2 className="font-heading text-4xl text-primary">Four Layers of Institutional Excellence</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              Guardian operates within a disciplined ecosystem where specialized entities bring complementary expertise. Each layer is essential; together, they create institutional-grade development outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* BDC */}
            <div className="p-8 border border-border bg-gradient-to-br from-accent/20 to-accent/5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Zap className="h-10 w-10 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-1">Business Development Concepts (BDC)</h3>
                  <p className="text-sm font-mono uppercase tracking-widest text-primary/60">Led by Arthur Fayne Sr.</p>
                </div>
              </div>
              <p className="text-accent font-semibold mb-4">Capital Structuring & Institutional Engagement</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Optimal capital stack design and waterfall structuring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Institutional investor alignment and engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Preparation for institutional financing and fund development</span>
                </li>
              </ul>
            </div>

            {/* Collective AI */}
            <div className="p-8 border border-border bg-gradient-to-br from-blue-500/20 to-blue-500/5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Brain className="h-10 w-10 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-1">Collective AI</h3>
                  <p className="text-sm font-mono uppercase tracking-widest text-primary/60">Led by Ahmad Muhammad & John-Ross Moyler</p>
                </div>
              </div>
              <p className="text-blue-600 font-semibold mb-4">Analytical Intelligence & Risk Assessment</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Multi-dimensional feasibility analysis and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Real-time financial modeling and scenario analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Cross-sector data integration and risk mitigation frameworks</span>
                </li>
              </ul>
            </div>

            {/* RRG / EnerGenius */}
            <div className="p-8 border border-border bg-gradient-to-br from-green-500/20 to-green-500/5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Wrench className="h-10 w-10 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-1">RRG / EnerGenius</h3>
                  <p className="text-sm font-mono uppercase tracking-widest text-primary/60">Technical Infrastructure & Renewable Energy</p>
                </div>
              </div>
              <p className="text-green-600 font-semibold mb-4">Technical Validation & System Design</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Technical infrastructure architecture and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Renewable energy and microgrid system integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Resilient and sustainable infrastructure design</span>
                </li>
              </ul>
            </div>

            {/* GDG */}
            <div className="p-8 border border-border bg-gradient-to-br from-primary/20 to-primary/5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-6">
                <Cog className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading text-2xl text-primary mb-1">Guardian Development Group (GDG)</h3>
                  <p className="text-sm font-mono uppercase tracking-widest text-primary/60">Execution & Operational Delivery</p>
                </div>
              </div>
              <p className="text-primary font-semibold mb-4">Project Management & Asset Delivery</p>
              <ul className="space-y-2 text-sm text-muted-foreground font-light">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Development execution and project management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Operational asset delivery and stakeholder coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1.5 h-1 w-1 bg-primary rounded-full block flex-shrink-0"></span>
                  <span>Long-term asset performance and value optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="font-heading text-3xl text-primary mb-6 sticky top-24">Our Origin</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              <strong className="text-primary font-medium">Guardian Development Group</strong> was established in 2025 as the execution arm of a disciplined, multi-entity development platform. Built on 40+ years of combined institutional expertise, GDG transforms early-stage concepts into institutionally structured, technically validated, and operationally excellent assets.
            </p>
            <p>
              Our reputation is built on complexity—not despite it, but because of it. We excel where others hesitate: brownfield sites, public-private partnerships, multi-layered capital stacks, and infrastructure-integrated developments. We learned that with enough discipline, transparency, and strategic foresight, "impossible" projects become the most rewarding.
            </p>
            <p>
              Guardian serves as a trusted execution partner to institutional investors, municipalities, CDFIs, and families who need more than a developer—they need a guardian for their interests and a disciplined platform for their capital.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-border pt-12">
              <div>
                <span className="block text-4xl font-heading text-primary mb-2">40+</span>
                <span className="text-sm font-mono uppercase tracking-widest">Years of Combined Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-heading text-primary mb-2">100%</span>
                <span className="text-sm font-mono uppercase tracking-widest">Project Completion Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Capabilities */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Leadership</span>
            <h2 className="font-heading text-4xl text-primary">Institutional Expertise & Strategic Partnerships</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              Guardian's leadership brings 40+ years of combined development expertise, institutional capital structuring, and strategic partnerships across domestic and international markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-heading text-2xl text-primary mb-6">Core Capabilities</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Real Estate Development Strategy & Execution</h4>
                  <p className="text-muted-foreground font-light text-sm">Feasibility analysis, site control, entitlements, and disciplined project delivery.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Capital Stack Design & Structuring</h4>
                  <p className="text-muted-foreground font-light text-sm">Equity, debt, tax credits, and alternative financing optimization for institutional readiness.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Sustainable & Resilient Infrastructure</h4>
                  <p className="text-muted-foreground font-light text-sm">Renewable energy integration, microgrids, and technology-enabled construction.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Public-Private & Strategic Partnerships</h4>
                  <p className="text-muted-foreground font-light text-sm">Municipal alignment, investor engagement, and governance frameworks.</p>
                </div>
              </div>
            </div>

            <Link href="/leadership">
              <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-primary rounded-none h-16 px-8 text-base uppercase tracking-widest font-bold w-full">
                Explore Full Leadership & Capabilities <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SiteSyncOS™ */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-4">Technology Platform</span>
              <h2 className="font-heading text-4xl md:text-5xl mb-6 text-primary">SiteSyncOS™: Unified Execution</h2>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
                Developed by Ahmad Muhammad and powered by Collective AI, SiteSyncOS™ integrates all four ecosystem layers into a single, unified execution platform. Spatial intelligence, capital stack automation, AI-driven project management, and real-time investor dashboards—all designed for institutional-grade transparency and performance.
              </p>
              <Link href="/sitesync-os">
                <Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                  Explore SiteSyncOS™ →
                </Button>
              </Link>
            </div>
            <div className="relative h-80 bg-secondary border border-border flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-heading text-accent mb-4">∞</div>
                <p className="text-muted-foreground font-light">Unified Execution Platform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl mb-12">"Where others build assets, Guardian builds certainty."</h2>
          <div className="h-px w-24 bg-accent mx-auto mb-12"></div>
          <Link href="/contact">
            <Button size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
              Work With Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
