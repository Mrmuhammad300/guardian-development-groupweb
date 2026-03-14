import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: "investment" | "process" | "governance" | "returns";
}

const faqItems: FAQItem[] = [
  {
    category: "investment",
    question: "What is the minimum investment amount?",
    answer: "Guardian Development Group works with institutional investors, family offices, and accredited investors. Minimum commitments typically range from $5M to $25M depending on project structure and investor profile. We evaluate each opportunity individually to ensure alignment with our institutional-grade standards and your investment criteria.",
  },
  {
    category: "investment",
    question: "What types of projects does Guardian focus on?",
    answer: "We specialize in complex real estate and infrastructure projects including mixed-use developments, industrial and logistics assets, public-private partnerships, and long-term strategic asset plays. Our sweet spot is projects requiring $50M-$500M in total capital with 24-48 month development timelines. We avoid speculative ventures and focus on fundamentally sound, execution-dependent opportunities.",
  },
  {
    category: "investment",
    question: "How does Guardian structure capital stacks?",
    answer: "We design capital stacks to optimize risk-adjusted returns for all stakeholders. Typical structures include senior debt (bank financing), mezzanine capital (our institutional partners), and equity. We prioritize transparency in waterfall structures and ensure alignment between Guardian's interests and investor returns. Each project's structure is customized based on risk profile, timeline, and exit strategy.",
  },
  {
    category: "process",
    question: "What is your development and execution process?",
    answer: "Our process follows five disciplined phases: (1) Opportunity Assessment—rigorous feasibility and risk analysis; (2) Capital Formation—transparent structuring and investor alignment; (3) Entitlement & Permitting—regulatory navigation and stakeholder coordination; (4) Construction & Operations—budget/timeline governance and vendor accountability; (5) Exit & Distribution—strategic positioning for optimal returns. We use SiteSyncOS™ to unify projects, capital, compliance, and AI-driven insights across all phases.",
  },
  {
    category: "process",
    question: "How long does a typical project take from commitment to exit?",
    answer: "Our average project timeline is 36 months from capital deployment to exit. However, this varies significantly by project type. Mixed-use developments typically require 30-42 months, while infrastructure projects may extend to 48-60 months. We provide detailed timelines and milestone schedules upfront, and our governance framework ensures transparency if timelines shift due to market conditions or regulatory changes.",
  },
  {
    category: "process",
    question: "What is Guardian's role in project execution?",
    answer: "Guardian provides owner's representation and development leadership throughout the project lifecycle. We manage all vendor relationships, budget governance, timeline accountability, and regulatory compliance. Our team includes experienced development professionals who have delivered 140+ projects totaling $2.4B+ in capital. We don't delegate execution—we own it, which is why our investors see predictable outcomes.",
  },
  {
    category: "governance",
    question: "What reporting and transparency standards do you maintain?",
    answer: "We provide quarterly financial reports, monthly operational updates, and real-time dashboard access via SiteSyncOS™. All reports include budget variance analysis, timeline status, risk assessments, and distribution forecasts. We maintain complete audit trails for regulatory compliance and investor due diligence. Our governance framework exceeds pension fund fiduciary requirements and institutional investor standards.",
  },
  {
    category: "governance",
    question: "How does Guardian handle risk management?",
    answer: "Risk management is embedded in every phase of our process. We conduct rigorous pre-investment feasibility studies, maintain contingency reserves (typically 10-15% of project budget), secure comprehensive insurance coverage, and implement real-time monitoring systems. We also structure capital stacks to protect investor downside while maintaining upside participation. Our audit logging system tracks every material decision for compliance and transparency.",
  },
  {
    category: "governance",
    question: "What happens if a project encounters challenges?",
    answer: "We communicate proactively and transparently. Our governance framework includes escalation procedures, contingency protocols, and investor notification requirements. We maintain reserves for cost overruns and have established relationships with lenders and capital partners to address liquidity challenges. Our track record shows we've navigated market cycles, regulatory changes, and operational challenges while protecting investor capital and maintaining return targets.",
  },
  {
    category: "returns",
    question: "What are typical return targets?",
    answer: "Return targets vary by project risk profile and structure. For core/core-plus projects, we target 12-16% IRR with 1.2-1.5x equity multiple. For value-add opportunities, we target 18-24% IRR with 1.5-2.0x multiple. For opportunistic plays, returns can exceed 25% IRR. We're transparent about return assumptions upfront and provide detailed sensitivity analysis showing how returns respond to key variables like construction costs, lease-up timing, and exit cap rates.",
  },
  {
    category: "returns",
    question: "How are distributions handled?",
    answer: "Distributions follow the capital stack waterfall: senior debt holders receive scheduled payments, then mezzanine capital receives preferred returns, and finally equity holders receive distributions. We prioritize regular distributions where project cash flow permits, typically quarterly or semi-annually. Upon exit, proceeds flow according to the agreed waterfall structure. All distribution schedules are transparent and documented in offering materials.",
  },
  {
    category: "returns",
    question: "What is your track record on returns?",
    answer: "Our portfolio has delivered an average 19.2% IRR across 140+ completed projects totaling $2.4B+ in deployed capital. Our institutional investors have achieved returns ranging from 14% to 28% depending on project structure and market conditions. We maintain detailed performance documentation and are happy to discuss specific project outcomes with qualified investors. Our 40+ years of combined team experience translates to consistent execution and predictable returns.",
  },
  {
    category: "investment",
    question: "How do I get started as an investor?",
    answer: "Start by scheduling a confidential conversation with our team. We'll discuss your investment criteria, risk tolerance, and capital availability. If there's mutual interest, we'll provide detailed investment materials, financial projections, and references from existing institutional investors. Our team will walk you through the underwriting process, governance structure, and expected returns. Most investors move from initial conversation to commitment within 60-90 days.",
  },
  {
    category: "governance",
    question: "What legal and compliance standards does Guardian maintain?",
    answer: "Guardian operates under SEC regulations for accredited investor offerings, maintains comprehensive insurance coverage (D&O, general liability, professional liability), and follows GAAP accounting standards. All projects include detailed legal documentation including operating agreements, investor agreements, and security agreements. We maintain audit trails for regulatory compliance and work with institutional-grade legal and accounting firms. Our governance framework exceeds pension fund and institutional investor requirements.",
  },
  {
    category: "process",
    question: "Can I participate in project selection and governance?",
    answer: "Yes. Depending on your investment structure, you may have board representation, observer rights, or governance committee participation. We believe in investor alignment and transparency. Institutional investors typically have quarterly board meetings, access to project dashboards, and direct communication with development teams. We customize governance structures to match investor sophistication and capital commitment.",
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "investment" | "process" | "governance" | "returns">("all");

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "investment", label: "Investment" },
    { id: "process", label: "Process" },
    { id: "governance", label: "Governance" },
    { id: "returns", label: "Returns" },
  ] as const;

  const filteredItems = selectedCategory === "all" 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary text-white border-b border-white/10">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-accent font-mono uppercase tracking-widest text-sm block mb-4">Investor Resources</span>
            <h1 className="font-heading text-5xl md:text-6xl font-semibold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Clear answers to the questions institutional investors ask about Guardian Development Group, our investment process, governance standards, and return expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as typeof selectedCategory)}
                className={`px-6 py-2 font-semibold text-sm uppercase tracking-wider transition-all ${
                  selectedCategory === category.id
                    ? "bg-accent text-primary border-2 border-accent"
                    : "bg-white text-primary border-2 border-border hover:border-accent"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-24 bg-white flex-1">
        <div className="container max-w-3xl">
          <div className="space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="border border-border bg-white hover:border-accent transition-colors"
              >
                <button
                  onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                  className="w-full px-8 py-6 flex items-start justify-between gap-4 hover:bg-accent/5 transition-colors text-left"
                >
                  <h3 className="font-semibold text-lg text-primary leading-relaxed">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 mt-1 transition-transform duration-300 ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedIndex === index && (
                  <div className="px-8 pb-6 border-t border-border bg-accent/5">
                    <p className="text-muted-foreground leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
            Our team is ready to discuss your specific investment criteria and how Guardian can deliver institutional-grade returns.
          </p>
          <a
            href="/contact"
            className="inline-block px-10 py-4 bg-accent text-primary font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors"
          >
            Schedule a Conversation
          </a>
        </div>
      </section>
    </div>
  );
}
