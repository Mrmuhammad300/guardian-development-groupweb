import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useLocation } from "wouter";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showFullNav, setShowFullNav] = useState(false);

  const navItems = [
    { label: "Expertise", href: "/expertise" },
    { label: "Projects", href: "/projects" },
    { label: "SiteSyncOS™", href: "/sitesync-os" },
    { label: "Leadership", href: "/leadership" },
    { label: "Investor Portal", href: "/investor-portal" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  // Detect when hero section scrolls out of view
  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('[data-hero-section]');
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();
        // Show nav when hero section scrolls up (bottom < 100px from top)
        const isHeroVisible = rect.bottom > 100;
        setShowFullNav(!isHeroVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-accent selection:text-accent-foreground">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
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

          {/* Desktop Navigation - Hidden on Hero, Visible After Scroll */}
          <nav className={cn(
            "hidden md:flex items-center gap-8 transition-all duration-300",
            showFullNav ? "opacity-100 visible" : "opacity-0 invisible"
          )}>
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

          {/* Mobile Menu Toggle - Hidden on Hero, Visible After Scroll */}
          <button
            className={cn(
              "md:hidden p-2 text-primary transition-all duration-300",
              showFullNav ? "opacity-100 visible" : "opacity-0 invisible"
            )}
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
      <main className="flex-1 flex flex-col relative" data-hero-section>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="font-heading font-semibold text-lg mb-4 text-primary">Guardian</h3>
              <p className="text-sm text-muted-foreground">Development Group</p>
              <p className="text-xs text-muted-foreground mt-2">Est. 2025 — Institutional Grade Development</p>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about"><a className="hover:text-primary transition-colors">About Us</a></Link></li>
                <li><Link href="/leadership"><a className="hover:text-primary transition-colors">Leadership</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/expertise"><a className="hover:text-primary transition-colors">Expertise</a></Link></li>
                <li><Link href="/projects"><a className="hover:text-primary transition-colors">Projects</a></Link></li>
                <li><Link href="/sitesync-os"><a className="hover:text-primary transition-colors">SiteSyncOS™</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-sm uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
                <li><Link href="/terms"><a className="hover:text-primary transition-colors">Terms of Service</a></Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Guardian Development Group. All rights reserved.</p>
            <p>Aurora, OH | Institutional Grade Development</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
