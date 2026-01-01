import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Layers, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center border-b border-border overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-architecture.jpg" 
            alt="Guardian Development Group Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-20">
          <div className="lg:col-span-8">
            <div className="inline-block mb-6 border-l-2 border-accent pl-4">
              <span className="text-accent font-mono uppercase tracking-widest text-sm">
                Est. 2025 &mdash; Institutional Grade Development
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.9] tracking-tight mb-8">
              Built on <span className="text-accent">Truth</span>.<br />
              Executed with <span className="text-white/80">Precision</span>.
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 border-l border-white/20 pl-6 ml-2">
              We protect value by building with truth, transparency, and disciplined execution. Where others build assets, Guardian builds certainty.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ml-2">
              <Link href="/projects">
                <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                  View Our Work
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Decorative Technical Data Block */}
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-end items-end pb-10">
            <div className="bg-primary/90 backdrop-blur-sm border border-white/10 p-6 w-full max-w-xs">
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4">
                <span className="text-accent font-mono text-xs uppercase">System Status</span>
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <div className="space-y-4 font-mono text-xs text-gray-400">
                <div className="flex justify-between">
                  <span>CAPITAL DEPLOYED</span>
                  <span className="text-white">$2.4B+</span>
                </div>
                <div className="flex justify-between">
                  <span>PROJECTS COMPLETED</span>
                  <span className="text-white">140+</span>
                </div>
                <div className="flex justify-between">
                  <span>SECTORS</span>
                  <span className="text-white">MIXED/IND/PUB</span>
                </div>
                <div className="flex justify-between">
                  <span>AVG. TIMELINE</span>
                  <span className="text-white">36 MO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement / Introduction */}
      <section className="py-24 bg-background border-b border-border">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative">
            <div className="aspect-[4/5] bg-secondary relative overflow-hidden">
               <img 
                src="/images/abstract-structure.jpg" 
                alt="Abstract Structural Detail" 
                className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-0 left-0 w-full h-full border border-white/10 m-4 pointer-events-none"></div>
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-8">
              Complexity Is Our Discipline.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Guardian Development Group was formed on a simple principle: <strong className="text-primary font-medium">complex projects demand truthful leadership.</strong>
              </p>
              <p>
                With more than 40 years of combined strategic and operational experience, our team has led developments across multiple sectors—projects involving layered financing, regulatory scrutiny, public-private coordination, and long-term operational considerations.
              </p>
              <p>
                In an industry where opacity often creates risk, Guardian operates differently. We believe transparency is not a liability—it is a strategic advantage.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="border-t border-primary/20 pt-4">
                <h3 className="font-heading text-xl text-primary mb-2">The Steward</h3>
                <p className="text-sm text-muted-foreground">Protector of capital, community, and vision.</p>
              </div>
              <div className="border-t border-primary/20 pt-4">
                <h3 className="font-heading text-xl text-primary mb-2">The Architect</h3>
                <p className="text-sm text-muted-foreground">Builder of complex systems others avoid.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values (The Guardian Creed) */}
      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
        
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
            <div>
              <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-2">Our Ethos</span>
              <h2 className="font-heading text-4xl text-white">The Guardian Creed</h2>
            </div>
            <p className="text-gray-400 max-w-md text-right mt-4 md:mt-0 font-light">
              Principles that guide every decision, every drawing, and every dollar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              {
                title: "Truth Over Convenience",
                desc: "We communicate honestly—especially when it’s difficult.",
                icon: <Shield className="w-8 h-8 text-accent mb-4" />
              },
              {
                title: "Transparency by Design",
                desc: "Our processes, reporting, and governance are structured for clarity, not concealment.",
                icon: <Layers className="w-8 h-8 text-accent mb-4" />
              },
              {
                title: "Execution Is Integrity",
                desc: "Promises mean nothing without delivery. We specialize where others hesitate.",
                icon: <BarChart3 className="w-8 h-8 text-accent mb-4" />
              }
            ].map((value, i) => (
              <div key={i} className="bg-secondary p-10 hover:bg-white/5 transition-colors group">
                <div className="opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {value.icon}
                </div>
                <h3 className="font-heading text-2xl text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Architecture */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Capabilities</span>
            <h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">Services Architecture</h2>
            <p className="text-muted-foreground text-lg font-light">
              We provide development leadership, strategic advisory, and owner’s representation to ensure projects move forward with clarity and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="group border border-border bg-white p-8 hover:border-accent transition-colors duration-300 relative">
              <div className="absolute top-0 right-0 bg-secondary text-white font-mono text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">01</div>
              <h3 className="font-heading text-2xl text-primary mb-4 group-hover:text-accent transition-colors">Complex Real Estate & Infrastructure</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Mixed-use developments</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Industrial & logistics assets</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Public-private partnerships</li>
              </ul>
              <Link href="/expertise">
                <a className="inline-flex items-center text-primary font-semibold text-sm uppercase tracking-wider hover:text-accent transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group border border-border bg-white p-8 hover:border-accent transition-colors duration-300 relative">
              <div className="absolute top-0 right-0 bg-secondary text-white font-mono text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">02</div>
              <h3 className="font-heading text-2xl text-primary mb-4 group-hover:text-accent transition-colors">Strategic Development Advisory</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Project feasibility & risk assessment</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Capital stack structuring</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Regulatory & entitlement navigation</li>
              </ul>
              <Link href="/expertise">
                <a className="inline-flex items-center text-primary font-semibold text-sm uppercase tracking-wider hover:text-accent transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group border border-border bg-white p-8 hover:border-accent transition-colors duration-300 relative">
              <div className="absolute top-0 right-0 bg-secondary text-white font-mono text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">03</div>
              <h3 className="font-heading text-2xl text-primary mb-4 group-hover:text-accent transition-colors">Owner’s Representation</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Transparent reporting frameworks</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Budget & timeline governance</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Vendor and contractor accountability</li>
              </ul>
              <Link href="/expertise">
                <a className="inline-flex items-center text-primary font-semibold text-sm uppercase tracking-wider hover:text-accent transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Link>
            </div>

            {/* Service 4 */}
            <div className="group border border-border bg-white p-8 hover:border-accent transition-colors duration-300 relative">
              <div className="absolute top-0 right-0 bg-secondary text-white font-mono text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">04</div>
              <h3 className="font-heading text-2xl text-primary mb-4 group-hover:text-accent transition-colors">Long-Term Asset Strategy</h3>
              <ul className="space-y-3 text-muted-foreground mb-8">
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Operational readiness</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Portfolio optimization</li>
                <li className="flex items-start gap-2"><span className="text-accent mt-1.5 h-1.5 w-1.5 bg-accent rounded-full block"></span>Exit strategy alignment</li>
              </ul>
              <Link href="/expertise">
                <a className="inline-flex items-center text-primary font-semibold text-sm uppercase tracking-wider hover:text-accent transition-colors">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src="/images/urban-planning.jpg" alt="Urban Planning" className="w-full h-full object-cover mix-blend-overlay" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Ready to Build Certainty?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Guardian Development Group is not for everyone. We partner with institutional investors, family offices, and public agencies who value truth and precision.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-16 px-10 text-base uppercase tracking-widest font-bold">
              Start the Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
