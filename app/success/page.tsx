"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Smile, Baby, Activity } from "lucide-react";

/* -------------------- Types & Data -------------------- */

type Category = "all" | "braces" | "aligners" | "pediatric" | "surgery";

type CaseStudy = {
  id: string;
  name: string;
  age: string;
  category: Category;
  chiefComplaint: string;
  outcome: string;
  before: string;
  after: string;
  treatmentLabel: string;
};

const CASES: CaseStudy[] = [
  {
    id: "case-1",
    name: "Rithika",
    age: "22 years",
    category: "braces",
    chiefComplaint: "Crowded front teeth and deep bite.",
    outcome: "Aligned smile, improved bite, and balanced profile.",
    before:
      "https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg",
    after:
      "https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg",
    treatmentLabel: "Metal + ceramic braces",
  },
  {
    id: "case-2",
    name: "Sahil",
    age: "28 years",
    category: "aligners",
    chiefComplaint: "Mild crowding with desire for discreet treatment.",
    outcome: "Straightened teeth with clear aligners, no change in lifestyle.",
    before:
      "https://images.pexels.com/photos/3373723/pexels-photo-3373723.jpeg",
    after:
      "https://images.pexels.com/photos/3762453/pexels-photo-3762453.jpeg",
    treatmentLabel: "Clear aligners",
  },
  {
    id: "case-3",
    name: "Ananya",
    age: "13 years",
    category: "pediatric",
    chiefComplaint: "Narrow jaw and crossbite in early teens.",
    outcome: "Guided jaw growth and corrected bite during growth phase.",
    before:
      "https://images.pexels.com/photos/6812554/pexels-photo-6812554.jpeg",
    after:
      "https://images.pexels.com/photos/6812557/pexels-photo-6812557.jpeg",
    treatmentLabel: "Growth modification + braces",
  },
  {
    id: "case-4",
    name: "Sharmili",
    age: "31 years",
    category: "surgery",
    chiefComplaint: "Prominent jaw with difficulty in bite and smile.",
    outcome:
      "Improved facial balance, function, and smile with combined ortho-surgical plan.",
    before:
      "https://images.pexels.com/photos/3762404/pexels-photo-3762404.jpeg",
    after:
      "https://images.pexels.com/photos/3762402/pexels-photo-3762402.jpeg",
    treatmentLabel: "Digital planning + orthognathic surgery",
  },
  {
    id: "case-5",
    name: "Aarav",
    age: "16 years",
    category: "braces",
    chiefComplaint: "Spacing and protruding upper teeth.",
    outcome:
      "Closed gaps and brought teeth into harmony with lips and face.",
    before:
      "https://images.pexels.com/photos/3373735/pexels-photo-3373735.jpeg",
    after:
      "https://images.pexels.com/photos/3762441/pexels-photo-3762441.jpeg",
    treatmentLabel: "Self-ligating braces",
  },
  {
    id: "case-6",
    name: "Meera",
    age: "24 years",
    category: "aligners",
    chiefComplaint: "Relapse crowding after previous orthodontic treatment.",
    outcome:
      "Teeth re-aligned with a short course of clear aligners and retainers.",
    before:
      "https://images.pexels.com/photos/3845762/pexels-photo-3845762.jpeg",
    after:
      "https://images.pexels.com/photos/3845763/pexels-photo-3845763.jpeg",
    treatmentLabel: "Clear aligners + retainers",
  },
];

const CATEGORY_CONFIG: { id: Category; label: string; icon: React.ElementType }[] =
  [
    { id: "all", label: "All cases", icon: Sparkles },
    { id: "braces", label: "Braces", icon: Activity },
    { id: "aligners", label: "Clear Aligners", icon: Smile },
    { id: "pediatric", label: "Pediatric", icon: Baby },
    { id: "surgery", label: "Surgical / Complex", icon: Activity },
  ];

/* -------------------- Page Component -------------------- */

export default function SuccessStoriesPage() {
  const [activeCategory, setActiveCategory] = React.useState<Category>("all");

  const filteredCases =
    activeCategory === "all"
      ? CASES
      : CASES.filter((c) => c.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b border-border/60 bg-secondary/10 py-14 md:py-16">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground/80">
              Success Stories
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Real smiles. Real transformations.
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              A glimpse into how orthodontic care at Resplendent has changed
              bites, profiles, and confidence—for children, teens, and adults.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              <Stat label="Completed orthodontic cases" value="1000+*" />
              <Stat label="Digital treatment plans" value="100%" />
              <Stat label="Average patient rating" value="4.9 / 5" />
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">
              *Numbers indicative, for representation. Final statistics can be
              updated as the clinic prefers.
            </p>
          </div>

          <div className="rounded-2xl border border-secondary/40 bg-card/80 p-5 shadow-sm">
            <p className="text-sm font-semibold text-foreground">
              Considering treatment?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Share your concerns and see what&apos;s possible for your smile.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90"
                size="sm"
              >
                <Link href="/contact">Book a consultation</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="sm"
                className="border-secondary text-secondary-foreground hover:bg-secondary/10"
              >
                <Link href="/resources">Learn about treatment</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters + Cases */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          {/* Filters */}
          <div className="mt-4">
            <div className="
    flex flex-wrap 
    gap-2 
    rounded-xl 
    border border-secondary/40 
    bg-secondary/10 
    px-4 py-4
  ">
              {CATEGORY_CONFIG.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveCategory(id)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5",
                    "rounded-full text-xs md:text-sm transition-colors",
                    "border border-transparent",
                    activeCategory === id
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background/60 text-muted-foreground hover:bg-background"
                  )}
                >
                  <Icon className="size-3.5 md:size-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>



          {/* Grid */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {filteredCases.map((c) => (
              <CaseCard key={c.id} caseStudy={c} />
            ))}
          </div>

          {/* If no cases (future) */}
          {filteredCases.length === 0 && (
            <p className="mt-8 text-sm text-muted-foreground">
              No cases to show in this category yet. Please check again soon or
              contact us for specific examples.
            </p>
          )}
        </div>
      </section>

      {/* Testimonials strip + CTA */}
      <section className="border-t border-border/60 bg-secondary/10 py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Testimonial
              quote="Dr. Purva made each step easy to understand. The process was gentle and the result is better than I imagined."
              name="Ms. Rithika"
              tag="Braces"
            />
            <Testimonial
              quote="I could continue my work and travels while on clear aligners. The team was always available for small doubts."
              name="Mr. Sahil"
              tag="Clear Aligners"
            />
            <Testimonial
              quote="The digital planning showed my future smile even before we began. It gave me a lot of confidence in the treatment."
              name="Ms. Sharmili"
              tag="Digital planning"
            />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border border-secondary/40 bg-background/80 px-5 py-4 rounded-xl md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm font-semibold text-foreground">
                Ready to start your own success story?
              </p>
              <p className="text-sm text-muted-foreground">
                A short consultation can help you understand timelines, options,
                and realistic outcomes for your smile.
              </p>
            </div>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact">Book an appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}

/* -------------------- Subcomponents -------------------- */

function CaseCard({ caseStudy }: { caseStudy: CaseStudy }) {
  const [revealed, setRevealed] = React.useState(false);

  return (
    <Card className="flex h-full flex-col border-border bg-card shadow-sm">
      <CardContent className="p-5 md:p-6 flex flex-col gap-4">
        {/* Before / After */}
        <div
          className="group relative overflow-hidden rounded-xl border border-border bg-muted cursor-pointer select-none"
          onClick={() => setRevealed((prev) => !prev)}
        >
          {/* BEFORE */}
          <Aspect>
            <Image
              src={caseStudy.before}
              alt={`${caseStudy.name} before`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </Aspect>

          {/* AFTER overlay */}
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-500",
              revealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )}
          >
            <Aspect>
              <Image
                src={caseStudy.after}
                alt={`${caseStudy.name} after`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </Aspect>
          </div>

          {/* Labels */}
          <div className="absolute left-3 top-3 flex flex-col gap-1">
            <Badge className="bg-background/90 text-foreground text-[10px] font-medium">
              {caseStudy.treatmentLabel}
            </Badge>
            <Badge variant="outline" className="border-secondary/60 bg-background/80 text-[10px]">
              {caseStudy.category === "braces"
                ? "Braces"
                : caseStudy.category === "aligners"
                  ? "Clear Aligners"
                  : caseStudy.category === "pediatric"
                    ? "Pediatric"
                    : "Surgical / Complex"}
            </Badge>
          </div>
          <div className="absolute right-3 bottom-3 rounded-full border border-primary/60 bg-background/90 px-2 py-0.5 text-[10px] text-primary">
            {revealed ? "Reveal before" : "Reveal after"}
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-base font-semibold text-foreground">
              {caseStudy.name}
            </h3>
            <p className="text-xs text-muted-foreground">{caseStudy.age}</p>
          </div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
            Chief concern
          </p>
          <p className="text-sm text-muted-foreground">
            {caseStudy.chiefComplaint}
          </p>
          <p className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground/80">
            Outcome
          </p>
          <p className="text-sm text-muted-foreground flex-1">
            {caseStudy.outcome}
          </p>
        </div>

        {/* Optional future link */}
        {/* <Button variant="outline" size="sm" className="mt-2 self-start">
          View full case details
        </Button> */}
      </CardContent>
    </Card>
  );
}

function Aspect({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full" style={{ paddingTop: "75%" }}>
      {children}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-secondary/50 bg-background/80 px-3 py-2 text-left">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function Testimonial({
  quote,
  name,
  tag,
}: {
  quote: string;
  name: string;
  tag?: string;
}) {
  return (
    <Card className="h-full border-border bg-card shadow-sm">
      <CardContent className="flex h-full flex-col gap-3 p-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          “{quote}”
        </p>
        <div className="mt-auto">
          <p className="text-sm font-medium text-foreground">{name}</p>
          {tag && (
            <p className="text-xs text-muted-foreground mt-0.5">{tag}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
