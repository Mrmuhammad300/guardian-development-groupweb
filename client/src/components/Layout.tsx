import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Expertise", href: "/expertise" },
    { label: "Projects", href: "/projects" },
    { label: "SiteSyncOS™", href: "/sitesync-os" },
    { label: "Leadership", href: "/leadership" },
    { label: "Investor Portal", href: "/investor-portal" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 group">
              <div className="h-8 w-8 bg-primary flex items-center justify-center">
                <div className="h-4 w-4 border border-accent rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out-quart"></div>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-semibold text-lg leading-none tracking-tight text-primary uppercase">
                  Guardian
                </span>
                <span className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  Development Group
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={cn(
                    "text-sm font-medium uppercase tracking-widest transition-colors hover:text-accent relative py-1",
                    location === item.href
                      ? "text-primary after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-accent"
                      : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="outline" className="ml-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest text-xs font-bold px-6">
                Partner With Us
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden animate-in slide-in-from-top-10 fade-in duration-300">
          <nav className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="text-2xl font-heading font-semibold text-primary border-b border-border pb-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/contact">
              <Button className="w-full mt-4 rounded-none uppercase tracking-widest" onClick={() => setIsMobileMenuOpen(false)}>
                Partner With Us
              </Button>
            </Link>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative">
        {/* Vertical Grid Lines (Decorative) */}
        <div className="absolute inset-0 pointer-events-none container flex justify-between opacity-20 z-0">
          <div className="w-[1px] h-full bg-border hidden md:block"></div>
          <div className="w-[1px] h-full bg-border hidden md:block"></div>
          <div className="w-[1px] h-full bg-border hidden md:block"></div>
          <div className="w-[1px] h-full bg-border hidden md:block"></div>
        </div>
        
        <div className="relative z-10 flex-1 flex flex-col">
            {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary text-secondary-foreground pt-16 pb-8">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-6 w-6 bg-accent flex items-center justify-center">
                <div className="h-3 w-3 border border-primary rotate-45"></div>
              </div>
              <span className="font-heading font-semibold text-xl tracking-tight text-white">
                Guardian Development Group
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-8 font-light">
              We protect value by building with truth, transparency, and disciplined execution. Where others build assets, Guardian builds certainty.
            </p>
            <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors cursor-pointer">
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                </div>
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-accent hover:text-accent transition-colors cursor-pointer">
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-5.5-4.6 1.5-7.9 3.2-6.9-3.48 2.9-4.47 7.49-3.35 10.91-2.5-1.5-5.1-4-5.1-4 3.5-4.5 8-8.5 14.5-10 1.5-1 4-1 4-1s-.5 2.5-2 4c2.5-1 4.5-2 4.5-2"/></svg>
                </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg mb-6 text-accent">Contact</h4>
            <address className="not-italic text-muted-foreground space-y-2 font-light">
              <p>Aurora, OH</p>
              <p>Cleveland Metropolitan Area</p>
              <p className="mt-4 text-white">info@guardiandg.com</p>
              <p className="text-white">+1 (212) 555-0199</p>
            </address>
          </div>

          <div>
            <h4 className="font-heading text-lg mb-6 text-accent">Sitemap</h4>
            <ul className="space-y-2 text-muted-foreground font-light">
              <li><Link href="/expertise"><a className="hover:text-white transition-colors">Expertise</a></Link></li>
              <li><Link href="/projects"><a className="hover:text-white transition-colors">Projects</a></Link></li>
              <li><Link href="/about"><a className="hover:text-white transition-colors">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-white transition-colors">Contact</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-white transition-colors">Privacy Policy</a></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="container border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground font-mono uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Guardian Development Group. All rights reserved.</p>
          <p>Built on Truth. Executed with Precision.</p>
        </div>
      </footer>
    </div>
  );
}
