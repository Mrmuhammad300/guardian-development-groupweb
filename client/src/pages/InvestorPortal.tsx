import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Lock, Unlock, FileText, BarChart3, Shield, TrendingUp, ArrowRight } from "lucide-react";

export default function InvestorPortal() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    investorType: "",
    aum: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.organization && formData.investorType) {
      setIsUnlocked(true);
    }
  };

  const resources = [
    {
      title: "Track Record Summary",
      description: "A project-specific overview may be provided when verified materials are available for an authorized engagement.",
      icon: BarChart3,
      size: "Pending verification"
    },
    {
      title: "Risk Mitigation Framework",
      description: "Project-specific risk and diligence materials may be provided when verified and approved for release.",
      icon: Shield,
      size: "Pending verification"
    },
    {
      title: "Capital Stack Architecture",
      description: "Representative structures may be shared where appropriate; they are not a financing commitment or project outcome.",
      icon: TrendingUp,
      size: "Pending verification"
    },
    {
      title: "Development Platform Strategy",
      description: "An overview of GDG's development approach and current focus may be provided as materials are finalized.",
      icon: FileText,
      size: "Pending verification"
    },
    {
      title: "SiteSyncOS™ Integration Guide",
      description: "A project-specific overview of the proposed SiteSyncOS™ framework may be provided when available.",
      icon: FileText,
      size: "Pending verification"
    },
    {
      title: "Governance & Compliance Standards",
      description: "Project governance and documentation are defined by the engagement and applicable professional advisers.",
      icon: FileText,
      size: "Pending verification"
    }
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
          <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Institutional Access</span>
          <h1 className="font-heading text-5xl md:text-7xl mb-8 leading-tight">
            Investor <span className="text-accent">Portal</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl font-light leading-relaxed">
                  Request access to project-specific materials and development frameworks when they are available for an authorized engagement.
          </p>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-24 bg-white border-b border-border">
        <div className="container">
          {!isUnlocked ? (
            <div className="max-w-2xl mx-auto">
              <div className="p-12 border-2 border-primary bg-primary/5 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <Lock className="w-6 h-6 text-primary" />
                  <h2 className="font-heading text-3xl text-primary">Unlock Portal Access</h2>
                </div>
                <p className="text-muted-foreground font-light mb-8">
                  Submit your information to request access. Materials are shared only when relevant, verified, and approved for the applicable engagement.
                </p>

                <form onSubmit={handleUnlock} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@organization.com"
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Organization *</label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Your firm or organization"
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Investor Type *</label>
                    <select
                      name="investorType"
                      value={formData.investorType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-border bg-white text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                      required
                    >
                      <option value="">Select investor type</option>
                      <option value="institutional">Institutional Investor</option>
                      <option value="family-office">Family Office</option>
                      <option value="development-partner">Development Partner</option>
                      <option value="financial-advisor">Financial Advisor</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-primary mb-2">Assets Under Management (Optional)</label>
                    <input
                      type="text"
                      name="aum"
                      value={formData.aum}
                      onChange={handleInputChange}
                      placeholder="e.g., $500M+"
                      className="w-full px-4 py-3 border border-border bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-white hover:bg-accent hover:text-primary rounded-none h-14 text-base uppercase tracking-widest font-bold"
                  >
                  Request Portal Access
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground font-light mt-6 text-center">
                  Your information is secure and will only be used to provide portal access and relevant updates.
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Unlock className="w-6 h-6 text-accent" />
                <h2 className="font-heading text-3xl text-primary">Welcome, {formData.name}</h2>
              </div>
              <p className="text-muted-foreground font-light mb-12">
                Request recorded for <span className="text-primary font-semibold">{formData.organization}</span>. Available materials are listed below when approved for release.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {resources.map((resource, idx) => {
                  const Icon = resource.icon;
                  return (
                    <div key={idx} className="p-8 border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-mono text-muted-foreground">{resource.size}</span>
                      </div>
                      <h3 className="font-heading text-xl text-primary mb-3 group-hover:text-accent transition-colors">{resource.title}</h3>
                      <p className="text-muted-foreground font-light text-sm mb-6 leading-relaxed">{resource.description}</p>
                      <span className="inline-flex items-center text-muted-foreground font-semibold text-sm uppercase tracking-wider">
                        Materials pending approval
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Portal Features */}
      {!isUnlocked && (
        <section className="py-24 bg-secondary text-white">
          <div className="container">
            <div className="mb-16 text-center">
              <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-3">Portal Benefits</span>
              <h2 className="font-heading text-4xl mb-4">What's Included</h2>
              <p className="text-gray-300 font-light max-w-2xl mx-auto">
                The portal is intended for project-specific documentation and development frameworks. Public marketing copy is not a substitute for diligence materials or formal agreements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 border border-white/10 hover:border-accent transition-colors">
                <BarChart3 className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-xl text-white mb-3">Track Record & Performance</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Verified project materials, when available for the authorized engagement.
                </p>
              </div>

              <div className="p-8 border border-white/10 hover:border-accent transition-colors">
                <Shield className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-xl text-white mb-3">Risk Management Framework</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Project-specific risk, diligence, and governance materials where approved.
                </p>
              </div>

              <div className="p-8 border border-white/10 hover:border-accent transition-colors">
                <TrendingUp className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-xl text-white mb-3">Capital Structure Models</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Representative deal structures demonstrating Guardian's expertise in complex capital stacks and financing mechanisms.
                </p>
              </div>

              <div className="p-8 border border-white/10 hover:border-accent transition-colors">
                <FileText className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-heading text-xl text-white mb-3">Strategic Documentation</h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Platform strategy, governance standards, and SiteSyncOS™ integration guides for institutional-grade transparency.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container">
          <h2 className="font-heading text-4xl md:text-5xl mb-8">Ready to Explore Partnership Opportunities?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Guardian Development Group partners with institutional investors and development firms who share our commitment to truth, transparency, and disciplined execution.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-16 px-10 text-base uppercase tracking-widest font-bold">
              Schedule a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
