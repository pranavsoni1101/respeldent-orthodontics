"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles, Award, Microscope, User2 } from "lucide-react";

const items = [
  {
    title: "Know Your Orthodontist",
    icon: User2,
    desc: "Dr. Purva Verma, a board-certified orthodontist, combines precision, technology, and empathy to craft confident smiles.",
  },
  {
    title: "Foundations",
    icon: Sparkles,
    desc: "Rooted in compassion and innovation, Resplendent Orthodontics delivers evidence-based, personalized care.",
  },
  {
    title: "Recognitions",
    icon: Award,
    desc: "Honored for clinical excellence and patient-first design, recognized across professional orthodontic platforms.",
  },
  {
    title: "Explorations",
    icon: Microscope,
    desc: "Constantly evolving with the latest in digital orthodontics, aligner systems, and 3D planning technologies.",
  },
];

export function OurEthos() {
  return (
    <section className="py-20 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Our Expertise & Ethos
        </h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          The science, soul, and spirit behind every Resplendent smile.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, icon: Icon, desc }) => (
            <Card key={title} className="border-border/50 bg-background shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-col items-center justify-center">
                <Icon className="size-8 text-primary mb-3" />
                <CardTitle className="text-lg font-semibold text-foreground">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {desc}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurEthos;
