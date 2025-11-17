import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-semibold">Resplendent Orthodontics</h3>
            <p className="mt-3 text-sm text-white/80 max-w-sm leading-relaxed">
              Creating confident smiles through precision, technology,
              and compassionate orthodontic care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
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
            <ul className="mt-4 space-y-2 text-sm">
              <FooterLink href="/services/brackets">Brackets</FooterLink>
              <FooterLink href="/services/clear-aligners">Clear Aligners</FooterLink>
              <FooterLink href="/services/growth-modifying-appliances">
                Growth Modifying Appliances
              </FooterLink>
              <FooterLink href="/services/mini-implant">Mini-Implants (TADs)</FooterLink>
              <FooterLink href="/services/extra-alveolar-screws">Extra-Alveolar Screws</FooterLink>
              <FooterLink href="/services/digital-surgical-planning">
                Digital Surgical Planning
              </FooterLink>
              <FooterLink href="/services/artistic-mechanics">Artistic Mechanics</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              Contact Us
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-2">
                <Phone className="size-4 text-white/90" />
                <a href="tel:+9198XXXXXXXX" className="hover:text-black/70 transition-colors">
                  +91 98XX-XXX-XXX
                </a>
              </li>
              <li className="flex gap-2">
                <Mail className="size-4 text-white/90" />
                <a
                  href="mailto:care@resplendentorthodontics.com"
                  className="hover:text-black/70 transition-colors"
                >
                  care@resplendentorthodontics.com
                </a>
              </li>

              <li className="flex gap-2">
                <MapPin className="size-4 text-white/90" />
                <span className="text-white/90">
                  Malviya Nagar, Jaipur <br /> Rajasthan, India
                </span>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact#book"
                className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-white/70">
            © {new Date().getFullYear()} Resplendent Orthodontics. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-xs text-white/80">
            <Link href="/privacy" className="hover:text-black/70 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-black/70 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>

            {/* Built By Srizen */}
            <Link
              href="https://srizen.com"
              target="_blank"
              className="hover:text-black/70 transition-colors"
            >
              Built by Srizen
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
        className="text-white/90 transition-all hover:text-black/70 "
      >
        {children}
      </Link>
    </li>
  );
}

