import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Zap, Map, Brain, DollarSign, Shield, Gauge } from "lucide-react";

export default function SiteSyncOS() {
  const capabilities = [
    {
      icon: Zap,
      title: "Unified Execution Fabric",
      description: "One operating system from land acquisition to exit—no fragmented tooling, no manual coordination."
    },
    {
      icon: Map,
      title: "Spatial Intelligence",
      description: "GIS-native workflows with parcel-level insights, geo-tagged documents, and construction progress visualization."
    },
    {
      icon: Brain,
      title: "AI Decision Support",
      description: "Predictive agents forecast delays, capital risk, and bottlenecks before they impact your timeline."
    },
    {
      icon: DollarSign,
      title: "Real-Time Finance",
      description: "AI-CFO per project. Capital stacks, draw schedules, and IRR models update automatically as construction progresses."
    },
    {
      icon: Shield,
      title: "Compliance by Design",
      description: "Permits, zoning, audits, and stakeholder reporting baked into every workflow—no manual submission packets."
    },
    {
      icon: Gauge,
      title: "Scalable Governance",
      description: "Works for a single project or a thousand-project portfolio. Enterprise-grade security and audit trails."
    }
  ];

  const integrations = [
    {
      name: "ArcGIS Enterprise",
      role: "Spatial Intelligence Layer",
      useCases: ["Parcel-level navigation", "Geo-tagged workflows", "Zoning & entitlement overlays", "Construction progress by location"]
    },
    {
      name: "Abacus.AI",
      role: "Predictive Intelligence",
      useCases: ["RFI delay prediction", "Submittal approval forecasting", "Change order impact analysis", "Bottleneck detection"]
    },
    {
      name: "n8n",
      role: "Orchestration & Automation",
      useCases: ["Event-driven workflows", "Automated approvals", "Stakeholder reporting", "Cross-platform sync"]
    },
    {
      name: "Binary Loom",
      role: "AI Execution",
      useCases: ["Agent-driven SDLC", "Continuous deployment", "Infrastructure automation", "Vibe Coding validation"]
    }
  ];

  const phases = [
    {
      number: "01",
      title: "Spatial Enablement",
      description: "ArcGIS Enterprise integration, map-based navigation, geo-tagged workflows"
    },
    {
      number: "02",
      title: "AI Augmentation",
      description: "Abacus AI agents, predictive dashboards, risk and delay forecasting"
    },
    {
      number: "03",
      title: "Capital & Compliance OS",
      description: "Draw schedules, capital stack automation, lender-grade reporting"
    },
    {
      number: "04",
      title: "Ecosystem Expansion",
      description: "Partner APIs, marketplace integrations, digital twin handoff"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-primary to-secondary text-white py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-6 border-l-2 border-accent pl-4">
              <span className="text-accent font-mono uppercase tracking-widest text-sm">
                The Operating System for Development
              </span>
            </div>
            <h1 className="font-heading text-6xl md:text-7xl mb-8 leading-tight">
              SiteSyncOS
            </h1>
            <p className="text-2xl text-gray-300 font-light leading-relaxed mb-10 max-w-3xl">
              Where project execution, financial intelligence, and AI agents operate as one unified system. Land to intelligence. Projects to predictions. Execution to confidence.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="#capabilities">
                <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                  Explore Capabilities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" className="bg-transparent border border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                  Request Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl text-primary mb-8">The Problem with Legacy Tools</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-2 w-2 bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Fragmented Software Stacks</h3>
                  <p className="text-muted-foreground font-light">Project management, GIS, finance, and AI tools don't speak to each other.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Financial Blind Spots</h3>
                  <p className="text-muted-foreground font-light">Capital models disconnect from construction reality. Surprises happen at milestone reviews.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Slow Compliance Cycles</h3>
                  <p className="text-muted-foreground font-light">Manual permit tracking, spreadsheet-based reporting, audit surprises.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-2 w-2 bg-accent mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-bold text-primary mb-1">Manual Coordination</h3>
                  <p className="text-muted-foreground font-light">Stakeholders (lenders, cities, partners) lack real-time visibility into project health.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-secondary p-12 text-white relative">
            <div className="absolute inset-0 border border-white/10 m-4"></div>
            <div className="relative z-10">
              <span className="block text-accent font-mono text-5xl mb-4 font-bold">40–60%</span>
              <span className="block text-xl font-heading mb-6">Faster Project Launch</span>
              <p className="text-gray-400 text-sm font-light mb-8">SiteSyncOS reduces project launch time by 40–60% through unified workflows and predictive intelligence.</p>
              <hr className="border-white/20 my-6" />
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span>Capital Inefficiency ↓</span>
                  <span className="font-bold">30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Compliance Cycle Time ↓</span>
                  <span className="font-bold">50%</span>
                </div>
                <div className="flex justify-between">
                  <span>Manual Coordination ↓</span>
                  <span className="font-bold">70%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section id="capabilities" className="py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Core Capabilities</span>
            <h2 className="font-heading text-4xl text-primary">Built for Real-World Development</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div key={idx} className="p-8 border border-border hover:border-accent transition-colors group">
                  <Icon className="h-8 w-8 text-accent mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-heading text-xl text-primary mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integration Architecture */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Integration Model</span>
            <h2 className="font-heading text-4xl text-primary">Best-Use-Case Architecture</h2>
            <p className="text-muted-foreground font-light mt-4 max-w-2xl">
              SiteSyncOS integrates best-of-breed tools at each layer—spatial, predictive, financial, and operational—while maintaining a unified system of record.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrations.map((integration, idx) => (
              <div key={idx} className="p-8 bg-white border border-border hover:shadow-lg transition-shadow">
                <div className="mb-4">
                  <h3 className="font-heading text-2xl text-primary mb-1">{integration.name}</h3>
                  <p className="text-accent font-mono text-xs uppercase tracking-widest">{integration.role}</p>
                </div>
                <div className="space-y-3">
                  {integration.useCases.map((useCase, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-1.5 w-1.5 bg-accent mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground font-light">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Roadmap */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Roadmap</span>
            <h2 className="font-heading text-4xl text-primary">Phased Deployment Strategy</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="p-8 bg-secondary text-white h-full flex flex-col">
                  <span className="text-6xl font-heading text-accent/30 mb-4">{phase.number}</span>
                  <h3 className="font-heading text-xl mb-4">{phase.title}</h3>
                  <p className="text-gray-300 font-light text-sm flex-grow">{phase.description}</p>
                </div>
                {idx < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-accent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl text-primary mb-6">What Sets SiteSyncOS Apart</h2>
            <p className="text-muted-foreground font-light text-lg">
              Unlike traditional platforms that bolt AI onto existing workflows, SiteSyncOS is built from the ground up as an operating system where spatial intelligence, financial models, and predictive agents are native.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-2xl text-primary mb-6">Traditional Approach</h3>
              <div className="space-y-4">
                <div className="p-4 bg-white border border-border/50">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Document-Centric</p>
                  <p className="text-sm text-muted-foreground">Workflows organized around PDFs and spreadsheets</p>
                </div>
                <div className="p-4 bg-white border border-border/50">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Reactive</p>
                  <p className="text-sm text-muted-foreground">Problems surface at milestone reviews</p>
                </div>
                <div className="p-4 bg-white border border-border/50">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Siloed Tools</p>
                  <p className="text-sm text-muted-foreground">GIS, finance, and project management don't integrate</p>
                </div>
                <div className="p-4 bg-white border border-border/50">
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Static Models</p>
                  <p className="text-sm text-muted-foreground">Financial forecasts disconnect from reality</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-accent mb-6">SiteSyncOS</h3>
              <div className="space-y-4">
                <div className="p-4 bg-accent/10 border border-accent">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Site-Centric</p>
                  <p className="text-sm text-primary font-medium">Workflows organized around real-world conditions</p>
                </div>
                <div className="p-4 bg-accent/10 border border-accent">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Predictive</p>
                  <p className="text-sm text-primary font-medium">AI forecasts risks and delays before they occur</p>
                </div>
                <div className="p-4 bg-accent/10 border border-accent">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Unified OS</p>
                  <p className="text-sm text-primary font-medium">Spatial, financial, and operational data integrated</p>
                </div>
                <div className="p-4 bg-accent/10 border border-accent">
                  <p className="font-mono text-xs uppercase tracking-widest text-accent mb-2">Living Models</p>
                  <p className="text-sm text-primary font-medium">Financial forecasts update with construction progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Who Benefits</span>
            <h2 className="font-heading text-4xl text-primary">Built for Every Stakeholder</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-12 bg-secondary text-white">
              <h3 className="font-heading text-2xl mb-6">Developers & Sponsors</h3>
              <ul className="space-y-4 font-light text-gray-300">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Unified control from land acquisition to exit</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Real-time capital visibility and risk posture</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Predictive insights to avoid cost overruns</span>
                </li>
              </ul>
            </div>

            <div className="p-12 bg-secondary text-white">
              <h3 className="font-heading text-2xl mb-6">Lenders & Investors</h3>
              <ul className="space-y-4 font-light text-gray-300">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>24/7 project health and financial transparency</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Automated draw readiness and compliance reporting</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Risk scoring and early warning systems</span>
                </li>
              </ul>
            </div>

            <div className="p-12 bg-secondary text-white">
              <h3 className="font-heading text-2xl mb-6">Cities & Public Agencies</h3>
              <ul className="space-y-4 font-light text-gray-300">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Automated permit and compliance tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Real-time project progress and community impact visibility</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Audit-ready documentation and reporting</span>
                </li>
              </ul>
            </div>

            <div className="p-12 bg-secondary text-white">
              <h3 className="font-heading text-2xl mb-6">Construction Teams</h3>
              <ul className="space-y-4 font-light text-gray-300">
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Fewer surprises, clearer priorities</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Geo-tagged workflows and milestone tracking</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent">→</span>
                  <span>Automated RFI and submittal coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Ready to Transform Your Development Process?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            See how SiteSyncOS unifies execution, capital, and intelligence for complex projects.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
              Request a Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
