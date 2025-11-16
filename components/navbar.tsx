"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Calendar, Phone, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ---------- Brand Logo ---------- */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-base font-semibold tracking-tight text-foreground">
            Resplendent Orthodontics
          </span>
        </Link>

        {/* ---------- Desktop Navigation ---------- */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {/* Treatments Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={cn(
                  "text-sm font-medium text-muted-foreground",
                  "data-[state=open]:bg-secondary/20 data-[state=open]:text-foreground"
                )}
              >
                Treatments
              </NavigationMenuTrigger>
              <NavigationMenuContent className="rounded-xl border border-border/60 bg-card/95 shadow-lg backdrop-blur-sm">
                <div className="w-[520px] lg:w-[600px] p-4">
                  <div className="mb-3 px-1">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/80">
                      Comprehensive orthodontic care
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Explore braces, clear aligners, growth guidance, and
                      advanced biomechanics.
                    </p>
                  </div>

                  <ul className="grid gap-3 sm:grid-cols-2">
                    <NavLink
                      href="/services/brackets"
                      title="Brackets (Metal, Ceramic, Lingual)"
                      desc="Reliable fixed braces with aesthetic and hidden options tailored to your needs."
                    />
                    <NavLink
                      href="/services/clear-aligners"
                      title="Clear Aligners"
                      desc="Removable, nearly invisible trays designed for discreet, lifestyle-friendly treatment."
                    />
                    <NavLink
                      href="/services/growth-modifying-appliances"
                      title="Growth Modifying Appliances"
                      desc="Guiding jaw growth in children and teens to correct skeletal imbalances early."
                    />
                    <NavLink
                      href="/services/mini-implant"
                      title="Mini-Implants (TADs)"
                      desc="Tiny temporary anchors that help move teeth precisely in complex cases."
                    />
                    <NavLink
                      href="/services/extra-alveolar-screws"
                      title="Extra-Alveolar Screws"
                      desc="Special anchorage screws for larger tooth movements and advanced mechanics."
                    />
                    <NavLink
                      href="/services/digital-surgical-planning"
                      title="Digital Surgical Planning"
                      desc="3D-planned orthodontic–surgical treatments for complex jaw and facial corrections."
                    />
                    <NavLink
                      href="/services/artistic-mechanics"
                      title="Artistic Mechanics"
                      desc="Finishing, detailing, and smile artistry to perfect function and aesthetics."
                    />
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Static nav links */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/resources">Patient Resources</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/success">Success Stories</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/20"
                )}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* ---------- Actions (Desktop) ---------- */}
        <div className="hidden items-center gap-2 md:flex">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-2 border-secondary text-secondary-foreground hover:bg-secondary/10"
          >
            <a href="tel:+91XXXXXXXXXX" aria-label="Call clinic">
              <Phone className="size-4" />
              Call
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">
              <Calendar className="size-4" />
              Book Appointment
            </Link>
          </Button>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            asChild
            size="icon"
            variant="outline"
            className="border-secondary text-secondary-foreground hover:bg-secondary/10"
          >
            <a href="tel:+91XXXXXXXXXX" aria-label="Call clinic">
              <Phone className="size-4" />
            </a>
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

/* Dropdown item card (desktop Treatments menu) */
function NavLink({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-snug no-underline transition-colors",
          "border border-transparent hover:border-primary/25 hover:bg-secondary/10"
        )}
      >
        <h6 className="text-sm font-semibold text-foreground">{title}</h6>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </Link>
    </li>
  );
}

/* Mobile nav – full-screen sheet */
function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="border-border">
          <Menu className="size-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="h-screen w-screen border-none bg-background p-0 [&>button]:hidden"
      >
        {/* A11y-only header + title */}
        <SheetHeader className="sr-only">
          <SheetTitle>Site navigation</SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          {/* Visual header */}
          <div className="flex h-16 items-center justify-between border-b border-border px-4">
            <span className="text-base font-semibold tracking-tight text-foreground">
              Resplendent Orthodontics
            </span>
            <SheetClose asChild>
              <button
                className="inline-flex items-center justify-center rounded-full border border-border bg-card p-1.5 text-muted-foreground hover:bg-muted"
                aria-label="Close menu"
              >
                <X className="size-4" />
              </button>
            </SheetClose>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto px-4 py-5">
            {/* Treatments */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Treatments
              </p>
              <div className="mt-1 flex flex-col space-y-1 text-sm">
                <SheetClose asChild>
                  <Link
                    href="/services/brackets"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Brackets (Metal, Ceramic, Lingual)
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services/clear-aligners"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Clear Aligners
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services/growth-modifying-appliances"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Growth Modifying Appliances
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services/mini-implant"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Mini-Implants (TADs)
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services/extra-alveolar-screws"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Extra-Alveolar Screws
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services/digital-surgical-planning"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Digital Surgical Planning
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/services/artistic-mechanics"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Artistic Mechanics
                  </Link>
                </SheetClose>
              </div>
            </div>

            <div className="my-5 h-px bg-border/60" />

            {/* Main pages */}
            <div className="space-y-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Clinic
              </p>
              <div className="mt-1 flex flex-col space-y-1 text-sm">
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/resources"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Patient Resources
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/success"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Success Stories
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/contact"
                    className="rounded-md px-1.5 py-1.5 text-foreground hover:bg-secondary/10 hover:text-primary"
                  >
                    Contact
                  </Link>
                </SheetClose>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="border-t border-border px-4 py-4 space-y-2">
            <SheetClose asChild>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </SheetClose>
            <Button
              asChild
              variant="outline"
              className="w-full border-secondary text-secondary-foreground hover:bg-secondary/10"
            >
              <a href="tel:+91XXXXXXXXXX">Call Clinic</a>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
