"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Smile, Baby, Cpu } from "lucide-react";

const treatments = [
  {
    title: "Braces",
    desc: "Comprehensive orthodontic options — from traditional metal to discreet ceramic and lingual braces, each tailored to precision and aesthetics.",
    sub: "Metal • Ceramic • Lingual • Self-ligating",
    icon: Sparkles,
    href: "/services/braces",
  },
  {
    title: "Clear Aligners",
    desc: "Virtually invisible, removable trays custom-engineered to align your teeth with precision and comfort.",
    sub: "Invisalign • ClearCorrect • In-house systems",
    icon: Smile,
    href: "/services/clear-aligners",
  },
  {
    title: "Pediatric Orthodontics",
    desc: "Early-age orthodontic guidance ensuring proper jaw growth, tooth alignment, and lasting smiles.",
    sub: "Growth modifying appliances • Early treatment",
    icon: Baby,
    href: "/services/pediatric-orthodontics",
  },
  {
    title: "Digital Orthodontics & Surgery",
    desc: "Advanced 3D digital planning, surgical coordination, and mini-implant anchorage for complex orthodontic movements.",
    sub: "3D Planning • Mini Implants • Extra-alveolar Screws",
    icon: Cpu,
    href: "/services/digital-orthodontics",
  },
];

export function TreatmentsOverview() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Our Treatments
        </h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          From braces to aligners — discover orthodontic care personalized to you.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {treatments.map(({ title, desc, sub, icon: Icon, href }) => (
            <Card
              key={title}
              className="border-border/60 bg-background shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left"
            >
              {/* Use flex-col so the button stays aligned at bottom */}
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 mb-4">
                  <Icon className="size-8 text-primary mb-3" />
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {title}
                  </CardTitle>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </CardHeader>

                <CardContent className="p-0 flex flex-col flex-grow justify-between">
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {desc}
                  </p>
                  <div className="mt-6 pt-4">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full"
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
