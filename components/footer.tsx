import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-primary-foreground pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold">
              Resplendent Orthodontics
            </h3>
            <p className="mt-3 text-sm text-primary-foreground/90 max-w-sm">
              Creating confident smiles with precision and compassionate care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/team">Our Team</FooterLink>
              <FooterLink href="/services">Treatments</FooterLink>
              <FooterLink href="/success">Success Stories</FooterLink>
              <FooterLink href="/resources">Patient Resources</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Treatments
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/90">
              <FooterLink href="/services/braces">Braces</FooterLink>
              <FooterLink href="/services/clear-aligners">Clear Aligners</FooterLink>
              <FooterLink href="/services/pediatric-orthodontics">
                Pediatric Orthodontics
              </FooterLink>
              <FooterLink href="/services/surgical-planning">
                Digital Surgical Planning
              </FooterLink>
              <FooterLink href="/services/mini-implants">
                Mini Implants
              </FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/95">
              <li className="flex gap-2">
                <Phone className="size-4 " />
                <a href="tel:+91XXXXXXXXXX" className="hover:text-accent">
                  +91 98XX-XXX-XXX
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="size-4 " />
                <a href="mailto:care@resplendentorthodontics.com" className="hover:text-accent">
                  care@resplendentorthodontics.com
                </a>
              </li>
              <li className="flex gap-2">
                <MapPin className="size-4" />
                <span>
                  Malviya Nagar, Jaipur <br /> Rajasthan, India
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact#book"
                className="inline-block bg-accent text-accent-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-accent/90 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Resplendent Orthodontics. All rights reserved.
          </p>

          <div className="flex gap-4 text-xs text-primary-foreground/80">
            <Link href="/privacy" className="hover:text-accent">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-accent">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-accent transition-colors"
      >
        {children}
      </Link>
    </li>
  );
}
