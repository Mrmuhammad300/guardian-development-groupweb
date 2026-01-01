import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-background py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-primary/60 font-mono uppercase tracking-widest text-sm block mb-4">Get in Touch</span>
            <h1 className="font-heading text-5xl md:text-6xl text-primary mb-6">Start the Conversation.</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              We are selective about our partnerships. If you have a complex project that requires disciplined leadership, we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="font-heading text-2xl text-primary mb-6">Headquarters</h3>
              <div className="flex items-start gap-4 text-muted-foreground font-light">
                <MapPin className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                <address className="not-italic">
                  1200 Architectural Ave, Suite 400<br />
                  New York, NY 10001<br />
                  United States
                </address>
              </div>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-primary mb-6">Direct Contact</h3>
              <div className="space-y-4 text-muted-foreground font-light">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="tel:+12125550199" className="hover:text-primary transition-colors">+1 (212) 555-0199</a>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <a href="mailto:info@guardiandg.com" className="hover:text-primary transition-colors">info@guardiandg.com</a>
                </div>
              </div>
            </div>

            <div className="p-8 bg-secondary text-white">
              <h4 className="font-heading text-xl mb-4">Media Inquiries</h4>
              <p className="text-gray-400 text-sm mb-4">
                For press kits and interview requests with our principals.
              </p>
              <a href="mailto:press@guardiandg.com" className="text-accent text-sm font-mono uppercase tracking-widest hover:text-white transition-colors">
                press@guardiandg.com
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">First Name</Label>
                  <Input id="firstName" className="rounded-none border-border focus:border-accent h-12 bg-background" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Last Name</Label>
                  <Input id="lastName" className="rounded-none border-border focus:border-accent h-12 bg-background" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email Address</Label>
                <Input id="email" type="email" className="rounded-none border-border focus:border-accent h-12 bg-background" placeholder="jane@company.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Company / Organization</Label>
                <Input id="company" className="rounded-none border-border focus:border-accent h-12 bg-background" placeholder="Guardian Development Group" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Project Details</Label>
                <Textarea id="message" className="rounded-none border-border focus:border-accent min-h-[200px] bg-background resize-none" placeholder="Tell us about your project's scope, location, and challenges..." />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto bg-primary text-white hover:bg-accent hover:text-primary rounded-none h-14 px-10 text-sm uppercase tracking-widest font-bold">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
