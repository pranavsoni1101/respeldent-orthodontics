"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Smile, Baby, Microscope } from "lucide-react";

const treatments = [
  {
    title: "Brackets & Braces",
    desc: "From traditional to aesthetic and invisible systems — braces crafted with precision and tailored to your smile.",
    sub: "Metal • Ceramic • Lingual • Self-ligating",
    icon: Sparkles,
    href: "/services/brackets",
  },
  {
    title: "Clear Aligners",
    desc: "Virtually invisible, removable trays engineered for accuracy and comfort — lifestyle-friendly orthodontics.",
    sub: "Invisalign • Clear Correct • In-house systems",
    icon: Smile,
    href: "/services/clear-aligners",
  },
  {
    title: "Growth & Pediatric Orthodontics",
    desc: "Guiding early jaw growth and tooth alignment to support strong, healthy lifelong smiles.",
    sub: "Growth modifying appliances • Early treatment",
    icon: Baby,
    href: "/services/growth-modifying-appliances",
  },
  {
    title: "Digital & Advanced Orthodontics",
    desc: "3D treatment planning, mini-implants, and biomechanical artistry for complex corrections.",
    sub: "3D Planning • Mini Implants • Extra-alveolar Screws",
    icon: Microscope,
    href: "/services/digital-surgical-planning",
  },
];

export function TreatmentsOverview() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Our Treatments
        </h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          From braces to aligners — orthodontic care designed around you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map(({ title, desc, sub, icon: Icon, href }) => (
            <Card
              key={title}
              className="flex flex-col justify-between border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 mb-4">
                  <Icon className="mb-3 size-8 text-primary" />
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </CardHeader>

                <CardContent className="flex flex-col justify-between p-0 flex-grow">
                  <p className="flex-grow text-sm leading-relaxed text-muted-foreground">
                    {desc}
                  </p>
                  <div className="mt-6 pt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-primary/40 text-primary hover:bg-primary/10"
                    >
                      <Link href={href}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TreatmentsOverview;
