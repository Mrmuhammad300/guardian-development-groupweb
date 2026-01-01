import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Harbor District Redevelopment",
      location: "Boston, MA",
      sector: "Mixed-Use / Infrastructure",
      size: "2.4M sq ft",
      status: "In Progress",
      image: "/images/hero-architecture.jpg", // Reusing for demo
      description: "A $1.2B public-private partnership transforming a former industrial waterfront into a sustainable mixed-use district. Guardian is leading the master planning and entitlement process."
    },
    {
      id: 2,
      title: "Meridian Logistics Hub",
      location: "Savannah, GA",
      sector: "Industrial",
      size: "850k sq ft",
      status: "Completed 2023",
      image: "/images/abstract-structure.jpg", // Reusing for demo
      description: "Strategic development of a multi-modal logistics facility. Overcame complex soil remediation and wetland mitigation challenges to deliver on time and under budget."
    },
    {
      id: 3,
      title: "Civic Center Innovation Park",
      location: "Austin, TX",
      sector: "Public / Tech",
      size: "400k sq ft",
      status: "Entitlement Phase",
      image: "/images/urban-planning.jpg", // Reusing for demo
      description: "Partnering with the city to develop a tech-focused innovation hub. Guardian is serving as the Owner's Representative for the municipality."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8">
            <div className="max-w-2xl">
              <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-4">Selected Works</span>
              <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">Building Certainty.</h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                A portfolio of complex challenges solved with discipline. We don't just build buildings; we build value.
              </p>
            </div>
            <div className="flex gap-8 text-right font-mono text-sm text-muted-foreground hidden md:block">
              <div>
                <span className="block text-primary font-bold text-2xl">30+</span>
                <span>Years Exp.</span>
              </div>
              <div>
                <span className="block text-primary font-bold text-2xl">$2.4B</span>
                <span>Value Managed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-0">
        {projects.map((project, index) => (
          <div key={project.id} className="group relative grid grid-cols-1 md:grid-cols-2 min-h-[60vh] border-b border-border last:border-b-0">
            {/* Image Side */}
            <div className={`relative overflow-hidden h-[400px] md:h-auto ${index % 2 === 1 ? 'md:order-2' : ''}`}>
              <img 
                src={project.image} 
                alt={project.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Content Side */}
            <div className={`flex flex-col justify-center p-12 md:p-20 bg-background ${index % 2 === 1 ? 'md:order-1' : ''}`}>
              <div className="mb-6 flex items-center gap-4">
                <span className="px-3 py-1 border border-primary/20 text-xs font-mono uppercase tracking-wider text-primary">
                  {project.sector}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                  {project.status}
                </span>
              </div>
              
              <h2 className="font-heading text-4xl text-primary mb-2 group-hover:text-accent transition-colors">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-muted-foreground mb-6 uppercase tracking-widest">
                {project.location} &mdash; {project.size}
              </p>
              
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8 border-l border-border pl-6">
                {project.description}
              </p>

              <div>
                <Button variant="outline" className="group/btn border-primary text-primary hover:bg-primary hover:text-white rounded-none uppercase tracking-widest text-xs font-bold px-6">
                  View Case Study <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
        <div className="container relative z-10">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">See the full track record.</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto font-light">
            Request our detailed institutional qualifications deck for a deeper dive into our project history and financial performance.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-accent hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">
              Request Qualifications
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
