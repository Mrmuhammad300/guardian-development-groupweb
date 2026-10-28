import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, BarChart3, Layers, MapPin } from "lucide-react";
import { Link } from "wouter";

const focusAreas = [
  {
    title: "Development planning",
    description: "Translate an initial opportunity into a coordinated development program, with site considerations, intended uses, phasing, and priorities clearly defined.",
  },
  {
    title: "Partner coordination",
    description: "Align landowners, sponsors, design professionals, infrastructure partners, and advisors around responsibilities, evidence, and milestones.",
  },
  {
    title: "Project execution",
    description: "Keep development activities connected through decisions, documentation, dependencies, and delivery milestones as the agreed scope advances.",
  },
];

const initiatives = [
  { name: "Bedford Sports & Tourism Platform", location: "Bedford, Nova Scotia", status: "Proposed development", description: "Sports, hospitality, recreation, and shared-energy concepts being evaluated as an integrated platform." },
  { name: "Mound Bayou Mississippi", location: "Mound Bayou, Mississippi", status: "Phased development planning", description: "Heritage-led planning connecting preservation, housing, hospitality, infrastructure, and local economic opportunity." },
  { name: "Akron Indoor Soccer", location: "Akron, Ohio", status: "Opportunity under evaluation", description: "A potential sports and recreation expansion involving facility improvements and a proposed multisport program." },
  { name: "M6 Portfolio", location: "Memphis, Tennessee", status: "Proposed acquisition & rehabilitation", description: "A proposed workforce-housing rehabilitation and stabilization program, subject to due diligence and project agreements." },
  { name: "1607 Manhattan St. Development", location: "Pittsburgh, Pennsylvania", status: "Rehabilitation & infill planning", description: "Residential rehabilitation and proposed infill construction supported by coordinated design, permitting, and construction planning." },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center border-b border-border overflow-hidden" data-hero-section>
        <div className="absolute inset-0 z-0">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663249654411/AhuotoaGdPharxut.jpg" alt="Conceptual urban planning and architecture" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-20">
          <div className="lg:col-span-8">
            <div className="inline-block mb-6 border-l-2 border-accent pl-4">
              <span className="text-accent font-mono uppercase tracking-widest text-sm">Purpose · Partnership · Progress</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-[0.9] tracking-tight mb-8">
              Building places.<br /><span className="text-accent">Creating lasting value.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-10 border-l border-white/20 pl-6 ml-2">
              Guardian Development Group brings partners, planning, and execution together to move complex development opportunities toward a coordinated plan.
            </p>
            <div className="flex flex-col md:flex-row gap-4 mt-12">
              <Link href="/projects"><Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">View the Pipeline <ArrowRight className="ml-2 h-4 w-4" /></Button></Link>
              <Link href="/about"><Button size="lg" className="bg-primary text-white hover:bg-accent hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">Who GDG Is</Button></Link>
              <Link href="/contact"><Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">Discuss a Project</Button></Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-4 flex-col justify-end items-end pb-10">
            <div className="bg-primary/90 backdrop-blur-sm border border-white/10 p-6 w-full max-w-xs">
              <div className="flex justify-between items-center border-b border-white/10 pb-2 mb-4"><span className="text-accent font-mono text-xs uppercase">Current mandate</span><div className="h-2 w-2 bg-green-500 rounded-full"></div></div>
              <div className="space-y-4 font-mono text-xs text-gray-400">
                <div className="flex justify-between"><span>ROLE</span><span className="text-white">DEVELOPMENT PARTNER</span></div>
                <div className="flex justify-between"><span>FOCUS</span><span className="text-white">CONNECTED PLACES</span></div>
                <div className="flex justify-between"><span>STATUS</span><span className="text-white">PROJECT-SPECIFIC</span></div>
                <div className="flex justify-between"><span>APPROACH</span><span className="text-white">DEFINED SCOPE</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-accent/10 border-b border-accent/30">
        <div className="container grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 relative"><div className="aspect-[4/5] bg-accent/20 relative overflow-hidden border-2 border-accent/50"><img src="https://private-us-east-1.manuscdn.com/sessionFile/ZjFXVya7OY7OKPHR0oss06/sandbox/WIiXvLlw7WES47FgvwIOcC-img-2_1770750937000_na1fn_YWJzdHJhY3Qtc3RydWN0dXJlLWdkZw.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80" alt="Abstract structural detail" className="w-full h-full object-cover opacity-80 grayscale hover:grayscale-0 transition-all duration-700" /><div className="absolute top-0 left-0 w-full h-full border border-white/10 m-4 pointer-events-none"></div></div></div>
          <div className="md:col-span-7">
            <h2 className="font-heading text-4xl md:text-5xl text-accent mb-8">Development with the whole picture in view.</h2>
            <div className="space-y-6 text-lg text-primary/80 font-light leading-relaxed">
              <p>Guardian Development Group serves as a developer and development partner. We help organize project priorities, coordinate specialist teams, and guide the transition from an initial concept toward execution.</p>
              <p>Our approach considers land, uses, infrastructure, operating needs, and the partners required to bring them together. Capital sourcing and readiness evaluation are handled through separately defined ecosystem engagements.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">{focusAreas.map((item) => <div key={item.title} className="border-t-2 border-accent pt-4"><h3 className="font-heading text-xl text-accent mb-2">{item.title}</h3><p className="text-sm text-primary/70">{item.description}</p></div>)}</div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-secondary-foreground relative overflow-hidden"><div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div><div className="container relative z-10"><div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8"><div><span className="text-accent font-mono uppercase tracking-widest text-sm block mb-2">Our operating principles</span><h2 className="font-heading text-4xl text-white">The Guardian Creed</h2></div><p className="text-gray-400 max-w-md text-right mt-4 md:mt-0 font-light">A clear scope, honest communication, and disciplined coordination at every stage.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">{[{title:"Truth over convenience",desc:"Describe the opportunity, constraints, and status as they are."},{title:"Transparency by design",desc:"Keep responsibilities, decisions, evidence, and milestones visible."},{title:"Execution is coordination",desc:"Move the work forward by connecting the people and dependencies that matter."}].map((value, i) => <div key={i} className="bg-secondary p-10 hover:bg-white/5 transition-colors group"><div className="opacity-70 group-hover:opacity-100 transition-opacity">{i===0?<Shield className="w-8 h-8 text-accent mb-4"/>:i===1?<Layers className="w-8 h-8 text-accent mb-4"/>:<BarChart3 className="w-8 h-8 text-accent mb-4"/>}</div><h3 className="font-heading text-2xl text-white mb-4">{value.title}</h3><p className="text-gray-400 font-light leading-relaxed">{value.desc}</p></div>)}</div></div></section>

      <section className="py-24 bg-white border-t border-border"><div className="container"><div className="mb-16"><span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Current pipeline & partnerships</span><h2 className="font-heading text-4xl md:text-5xl text-primary mb-6">A connected development portfolio.</h2><p className="text-xl text-muted-foreground max-w-2xl font-light">Representative initiatives at different stages of planning, evaluation, and partner coordination. These descriptions do not represent completed GDG projects or guaranteed outcomes.</p></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{initiatives.map((initiative) => <div key={initiative.name} className="p-7 border border-border hover:border-accent transition-colors"><div className="flex items-center gap-2 text-muted-foreground text-sm mb-4"><MapPin className="w-4 h-4 text-accent"/><span>{initiative.location}</span></div><p className="text-accent font-mono text-xs uppercase tracking-widest mb-3">{initiative.status}</p><h3 className="font-heading text-2xl text-primary mb-3">{initiative.name}</h3><p className="text-muted-foreground font-light text-sm leading-relaxed">{initiative.description}</p></div>)}</div><div className="mt-10"><Link href="/projects"><Button variant="outline" className="rounded-none border-primary text-primary hover:bg-primary hover:text-white uppercase tracking-widest">View project details <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div></div></section>
      <section className="py-20 bg-background border-t border-border"><div className="container"><div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10"><div><span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-3">Selected work</span><h2 className="font-heading text-4xl text-primary">Verified Project Portfolio</h2><p className="text-muted-foreground font-light mt-4 max-w-2xl">Business Development Concepts (BDC) Portfolio — selected public-source project descriptions, shown as entity-based legacy work rather than investor social proof or a claim that every initiative was completed by GDG.</p></div><a href="https://bdc1.webflow.io/development-and-management-projects" target="_blank" rel="noreferrer" className="text-primary font-semibold text-sm uppercase tracking-wider hover:text-accent">View BDC source ↗</a></div><div className="grid grid-cols-1 md:grid-cols-3 gap-6">{["The New Eastside Market, LLC", "Inter-Global Health & Research Center", "Veterans Housing Development"].map((name) => <div key={name} className="p-6 border border-border bg-white"><span className="text-accent font-mono text-xs uppercase tracking-widest">Verified BDC Project</span><h3 className="font-heading text-xl text-primary mt-3 mb-3">{name}</h3><p className="text-muted-foreground font-light text-sm">Public-source project reference. Confirm entity, role, completion status, and outcomes through approved diligence materials.</p></div>)}</div>{/* Source naming reference: Inter-Global Health &amp; Research Center */}</div></section>

      <section className="py-24 bg-secondary text-white border-t border-white/10"><div className="container grid grid-cols-1 md:grid-cols-2 gap-16 items-center"><div><span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Our ecosystem</span><h2 className="font-heading text-4xl md:text-5xl mb-6">Readiness. Capital alignment. Development execution.</h2><p className="text-xl text-gray-300 font-light leading-relaxed mb-8">GDG can be engaged independently or alongside BDC advisory and EVIAM-1™ readiness support. Each role has a defined scope, and no evaluation guarantees financing, approvals, or delivery.</p><Link href="/about"><Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-14 px-8 text-sm uppercase tracking-widest font-bold">Explore the ecosystem <ArrowRight className="ml-2 h-4 w-4" /></Button></Link></div><div className="relative h-80 bg-white/10 border border-white/20 flex items-center justify-center"><div className="text-center"><div className="text-6xl font-heading text-accent mb-4">03</div><p className="text-gray-400 font-light">Defined roles · coordinated work</p></div></div></div></section>

      <section className="py-24 bg-primary text-white relative overflow-hidden"><div className="container relative z-10 text-center"><h2 className="font-heading text-4xl md:text-5xl mb-6">Start where your project needs support.</h2><p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">Share the opportunity, its current stage, and the decisions that need to be made. We’ll help identify the appropriate starting point.</p><Link href="/contact"><Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary rounded-none h-16 px-10 text-base uppercase tracking-widest font-bold">Discuss a Project</Button></Link></div></section>
    </div>
  );
}
