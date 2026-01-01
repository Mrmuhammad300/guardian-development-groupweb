import { Button } from "@/components/ui/button";
import { Link } from "wouter";

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
            <h1 className="font-heading text-5xl md:text-7xl mb-8">Stewards of Vision.</h1>
            <p className="text-2xl text-gray-300 font-light leading-relaxed">
              We are not just developers. We are fiduciaries of capital, community, and the built environment.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-24 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="font-heading text-3xl text-primary mb-6 sticky top-24">Our Origin</h2>
          </div>
          <div className="md:col-span-8 space-y-8 text-lg text-muted-foreground font-light leading-relaxed">
            <p>
              <strong className="text-primary font-medium">Guardian Development Group</strong> was founded in 1995 on a contrarian belief: that the most valuable opportunities in real estate are the ones others avoid due to complexity.
            </p>
            <p>
              While the market chased easy assets, we built our reputation on the difficult ones—brownfield sites, public-private partnerships, and multi-layered capital stacks. We learned that with enough discipline, transparency, and strategic foresight, "impossible" projects become the most rewarding.
            </p>
            <p>
              Today, we serve as a trusted partner to institutional investors, municipalities, and families who need more than a developer—they need a guardian for their interests.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-border pt-12">
              <div>
                <span className="block text-4xl font-heading text-primary mb-2">30+</span>
                <span className="text-sm font-mono uppercase tracking-widest">Years of Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-heading text-primary mb-2">100%</span>
                <span className="text-sm font-mono uppercase tracking-widest">Project Completion Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white border-y border-border">
        <div className="container">
          <div className="mb-16">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Leadership</span>
            <h2 className="font-heading text-4xl text-primary">The Partners</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Partner 1 */}
            <div className="group">
              <div className="aspect-[3/4] bg-secondary mb-6 relative overflow-hidden">
                <img src="/images/handshake-detail.jpg" alt="Partner" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500" />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-1">James Sterling</h3>
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Managing Principal</p>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                35 years in commercial development and finance. Former regional director for a major REIT. Specializes in capital structuring and entitlements.
              </p>
            </div>

            {/* Partner 2 */}
            <div className="group">
              <div className="aspect-[3/4] bg-secondary mb-6 relative overflow-hidden">
                <img src="/images/urban-planning.jpg" alt="Partner" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500" />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-1">Elena Vance</h3>
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Principal, Development</p>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Architect by training, developer by trade. Leads all project execution and design management. Expert in sustainable infrastructure.
              </p>
            </div>

            {/* Partner 3 */}
            <div className="group">
              <div className="aspect-[3/4] bg-secondary mb-6 relative overflow-hidden">
                <img src="/images/abstract-structure.jpg" alt="Partner" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-500" />
              </div>
              <h3 className="font-heading text-2xl text-primary mb-1">Robert Chen</h3>
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-4">Principal, Operations</p>
              <p className="text-muted-foreground font-light text-sm leading-relaxed">
                Ensures the "Guardian Standard" of reporting and governance. Background in forensic accounting and construction law.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Redux */}
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
