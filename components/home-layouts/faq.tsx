"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, Info, ClipboardList, HelpCircle } from "lucide-react";

export default function SectionFaqResources() {
  return (
    <section className="py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* FAQ Block */}
        <div>
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Questions before you start?
            </h2>
            <p className="mt-2 text-base text-muted-foreground">
              Here are answers to what new patients ask us most often about
              treatment, comfort, and timelines.
            </p>
          </div>

          <Card className="mt-8 border border-border/70 bg-card shadow-sm">
            <CardContent className="p-4 sm:p-6">
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-2"
              >
                <AccordionItem
                  value="faq-1"
                  className="overflow-hidden rounded-lg border border-border/60 bg-background/60"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-muted/60">
                    How long will my orthodontic treatment take?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground">
                    Treatment duration depends on your bite and tooth movement
                    needs. On average, most cases range from 12–24 months, and
                    we’ll give you a clear, personalized estimate during your
                    consultation.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-2"
                  className="overflow-hidden rounded-lg border border-border/60 bg-background/60"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-muted/60">
                    Will getting braces or aligners be painful?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground">
                    You may feel mild pressure or soreness for a few days after
                    braces are placed or aligners are changed. This usually
                    settles quickly, and we give you simple tips to stay
                    comfortable.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-3"
                  className="overflow-hidden rounded-lg border border-border/60 bg-background/60"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-muted/60">
                    Am I too old for orthodontic treatment?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground">
                    Not at all. Many of our patients are adults choosing to
                    improve their smile and bite. With options like clear
                    aligners and ceramic braces, treatment can be discreet and
                    lifestyle-friendly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-4"
                  className="overflow-hidden rounded-lg border border-border/60 bg-background/60"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-muted/60">
                    How often will I need to visit the clinic?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground">
                    Most patients visit every 4–8 weeks, depending on the stage
                    of treatment and the system used. We try to plan visits
                    conveniently around your schedule.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="faq-5"
                  className="overflow-hidden rounded-lg border border-border/60 bg-background/60"
                >
                  <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-foreground hover:bg-muted/60">
                    Do you offer payment plans or flexible options?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pb-4 pt-0 text-sm text-muted-foreground">
                    Yes. We offer flexible, staged payment options and discuss
                    them clearly before treatment begins, so you can plan
                    comfortably.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>

        {/* Patient Resources Block */}
        <div className="space-y-4">
          <Card className="border border-border/70 bg-card shadow-sm">
            <CardContent className="space-y-4 p-6">
              <div className="flex items-center gap-3">
                <div className="inline-flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/20">
                  <Info className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Patient resources
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Helpful guides to make your orthodontic journey smoother.
                  </p>
                </div>
              </div>

              <ul className="space-y-3 text-sm">
                <ResourceLink
                  icon={<ClipboardList className="size-4" />}
                  label="Pre-treatment checklist"
                  href="/resources/pre-treatment"
                />
                <ResourceLink
                  icon={<FileText className="size-4" />}
                  label="Post-treatment care &amp; retainer guide"
                  href="/resources/post-treatment"
                />
                <ResourceLink
                  icon={<FileText className="size-4" />}
                  label="Download patient forms"
                  href="/resources/forms"
                />
                <ResourceLink
                  icon={<HelpCircle className="size-4" />}
                  label="Emergency orthodontic instructions"
                  href="/resources/emergency-care"
                />
              </ul>

              <Button
                asChild
                variant="outline"
                className="mt-2 w-full border-primary/40 text-primary hover:bg-primary/10"
              >
                <Link href="/resources">Visit Patient Resources</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border border-dashed border-border/70 bg-card/80">
            <CardContent className="space-y-3 p-6">
              <h4 className="text-base font-semibold text-foreground">
                Still unsure where to start?
              </h4>
              <p className="text-sm text-muted-foreground">
                A short consultation can clarify your options, timelines, and
                costs in one sitting.
              </p>
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Link href="/contact#book">Book a Consultation</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ResourceLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <li className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-background text-primary">
          {icon}
        </span>
        <span className="text-foreground">{label}</span>
      </div>
      <Link
        href={href}
        className="text-xs font-medium text-primary hover:underline"
      >
        View
      </Link>
    </li>
  );
}
