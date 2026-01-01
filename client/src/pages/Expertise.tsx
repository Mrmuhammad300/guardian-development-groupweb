import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check, ArrowRight } from "lucide-react";

export default function Expertise() {
  const services = [
    {
      id: "01",
      title: "Complex Real Estate & Infrastructure",
      description: "We handle developments that others find too risky or complicated. From mixed-use districts to critical infrastructure, we manage the entire lifecycle.",
      capabilities: [
        "Mixed-use developments",
        "Industrial & logistics assets",
        "Sustainable & technology-driven projects",
        "Public-private partnerships (P3)",
        "Brownfield redevelopment"
      ]
    },
    {
      id: "02",
      title: "Strategic Development Advisory",
      description: "Before a shovel hits the ground, we ensure the project is viable, funded, and legally sound. We turn vision into a bankable roadmap.",
      capabilities: [
        "Project feasibility & risk assessment",
        "Capital stack structuring & financing",
        "Regulatory & entitlement navigation",
        "Stakeholder coordination & community engagement",
        "Zoning analysis"
      ]
    },
    {
      id: "03",
      title: "Owner’s Representation",
      description: "We act as the owner's eyes and ears, ensuring that contractors, architects, and vendors deliver on their promises without budget creep.",
      capabilities: [
        "Transparent reporting frameworks",
        "Budget & timeline governance",
        "Vendor and contractor accountability",
        "Quality assurance & control",
        "Change order management"
      ]
    },
    {
      id: "04",
      title: "Long-Term Asset Strategy",
      description: "Development doesn't end at construction. We plan for the operational life of the asset, ensuring long-term value preservation.",
      capabilities: [
        "Operational readiness planning",
        "Portfolio optimization",
        "Exit strategy alignment",
        "Asset repositioning",
        "Sustainability performance monitoring"
      ]
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-secondary text-white py-20 border-b border-white/10">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Our Capabilities</span>
            <h1 className="font-heading text-5xl md:text-6xl mb-6">Built for Complexity.</h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed border-l border-accent pl-6">
              Guardian Development Group specializes in complex, multi-layered developments that require regulatory navigation, multi-stakeholder alignment, and creative capital structuring.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border pt-16 first:border-t-0 first:pt-0">
                <div className="lg:col-span-4">
                  <span className="text-9xl font-heading text-border/40 block leading-none -mt-4 mb-4 select-none">
                    {service.id}
                  </span>
                  <h2 className="text-3xl font-heading text-primary mb-4">{service.title}</h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-muted-foreground font-light mb-8 max-w-2xl">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.capabilities.map((cap, idx) => (
                      <div key={idx} className="flex items-start gap-3 group">
                        <div className="mt-1 h-5 w-5 border border-accent flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                          <Check className="h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <span className="text-primary/80">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology / Process */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-4xl text-primary mb-6">The Guardian Standard</h2>
              <p className="text-muted-foreground mb-8 font-light leading-relaxed">
                We don't just manage projects; we steward them. Our methodology is built on a foundation of absolute transparency and rigorous discipline.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-secondary text-white flex items-center justify-center font-mono text-lg flex-shrink-0">01</div>
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-2">Discovery & Truth</h3>
                    <p className="text-sm text-muted-foreground">We start by uncovering every constraint and risk. No sugar-coating, just data.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-secondary text-white flex items-center justify-center font-mono text-lg flex-shrink-0">02</div>
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-2">Strategic Architecture</h3>
                    <p className="text-sm text-muted-foreground">We design the deal structure, the team, and the plan with the same precision as the building itself.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="h-12 w-12 bg-secondary text-white flex items-center justify-center font-mono text-lg flex-shrink-0">03</div>
                  <div>
                    <h3 className="font-heading text-xl text-primary mb-2">Disciplined Execution</h3>
                    <p className="text-sm text-muted-foreground">We execute with a relentless focus on the critical path, reporting truthfully at every milestone.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px] bg-secondary p-8 flex items-center justify-center">
                <div className="absolute inset-0 border border-white/10 m-4"></div>
                <div className="text-center">
                    <span className="block text-accent font-mono text-6xl mb-4">100%</span>
                    <span className="block text-white font-heading text-2xl uppercase tracking-widest">Transparency</span>
                    <span className="block text-gray-500 text-sm mt-4 max-w-xs mx-auto">Our clients have 24/7 access to project financials, schedules, and risk logs.</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-heading text-3xl md:text-4xl mb-8">Have a complex project in mind?</h2>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
              Discuss Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
