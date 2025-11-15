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
import { Calendar, Phone } from "lucide-react";

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

        {/* ---------- Navigation Menu (Desktop) ---------- */}
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
                      Explore braces, clear aligners, growth guidance, and advanced biomechanics.
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

            {/* Static nav links – using asChild, no legacyBehavior */}
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
                <Link href="/team">Our Team</Link>
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
            <Link href="/contact#book">
              <Calendar className="size-4" />
              Book Appointment
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}

/* Dropdown item card */
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
