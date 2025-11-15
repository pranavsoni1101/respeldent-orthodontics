"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FileText,
  Download,
  Info,
  ClipboardList,
  AlertTriangle,
  CalendarCheck,
  Smile,
  Baby,
  Clock,
  ShieldCheck,
} from "lucide-react";

/**
 * Patient Resources page
 * - Update the hrefs and download links to real files
 * - The accordion items can be extended or pulled from CMS
 */

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="border-b border-border/60 bg-secondary/10 py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-secondary-foreground/80">
              Patient Resources
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Everything you need before, during, and after treatment
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Clear guides, downloadable forms, emergency instructions, and FAQs — organized so you can feel prepared and confident at every step.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact#book">Book Consultation</Link>
            </Button>
            <Button asChild variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
              <Link href="/contact">Contact Clinic</Link>
            </Button>

            <Badge className="ml-2 bg-secondary/10 text-secondary-foreground">
              New: Tele-consult available
            </Badge>
          </div>
        </div>
      </section>

      {/* RESOURCE GRID */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            <ResourceCard
              icon={<ClipboardList className="size-6 text-primary" />}
              title="Pre-treatment checklist"
              desc="What to bring, how to prepare for your first appointment, and records we typically take."
              href="/resources/pre-treatment"
              variant="primary"
            />
            <ResourceCard
              icon={<FileText className="size-6 text-primary" />}
              title="Braces care (all types)"
              desc="Daily hygiene, foods to avoid, managing soreness and common bracket issues."
              href="/resources/braces-care"
            />
            <ResourceCard
              icon={<Smile className="size-6 text-primary" />}
              title="Clear aligners guide"
              desc="Wearing schedules, cleaning aligners, lost tray steps and best practices."
              href="/resources/aligners"
            />
            <ResourceCard
              icon={<Baby className="size-6 text-primary" />}
              title="Pediatric & growth guidance"
              desc="When to start, early signs to watch, and how we support growing smiles."
              href="/resources/pediatric"
            />
            <ResourceCard
              icon={<ShieldCheck className="size-6 text-primary" />}
              title="Retainers & post-care"
              desc="Types of retainers, wear schedules, cleaning, and long-term stability tips."
              href="/resources/retainers"
            />
            <ResourceCard
              icon={<AlertTriangle className="size-6 text-primary" />}
              title="Emergency instructions"
              desc="Immediate home steps for poking wires, loose brackets, broken appliances, and urgent contact info."
              href="/resources/emergency"
              variant="danger"
            />
          </div>
        </div>
      </section>

      {/* DOWNLOADS + FORMS */}
      <section className="py-10 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground">Downloads & patient forms</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Save time at your first visit — download and complete forms in advance.
              </p>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <a href="/downloads/patient-form.pdf" download>
                  <Download className="mr-2 size-4" />
                  Download All Forms
                </a>
              </Button>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact#book">Book Now</Link>
              </Button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <DownloadItem label="New patient registration" href="/downloads/new-patient.pdf" />
            <DownloadItem label="Medical history form" href="/downloads/medical-history.pdf" />
            <DownloadItem label="Consent form (orthodontics)" href="/downloads/consent.pdf" />
            <DownloadItem label="Pre-surgery instructions" href="/downloads/pre-surgery.pdf" />
          </div>
        </div>
      </section>

      {/* FAQ + Quick Help */}
      <section className="py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1fr_0.85fr]">
          {/* FAQ column */}
          <div>
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold text-foreground">Frequently asked questions</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Short answers to common concerns — if you don't find your question, reach out and we'll help.
              </p>
            </div>

            <div className="mt-6">
              <Accordion type="single" collapsible className="w-full space-y-3">
                <AccordionItem value="faq-1" className="border-border rounded-lg border">
                  <AccordionTrigger className="text-left whitespace-normal break-words py-3">
                    How long will my orthodontic treatment typically take?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Typical treatments range between 12–24 months depending on complexity. We will provide a personalized estimate after your records and diagnostic review.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2" className="border-border rounded-lg border">
                  <AccordionTrigger className="text-left whitespace-normal break-words py-3">
                    Will braces or aligners be painful?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Some pressure or soreness is normal after adjustments or aligner changes. It usually subsides in a few days and is manageable with simple analgesics and soft foods. We provide specific comfort tips in our care guides.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3" className="border-border rounded-lg border">
                  <AccordionTrigger className="text-left whitespace-normal break-words py-3">
                    What should I do if an appliance breaks or a wire pokes?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    First, follow our emergency steps on the Emergency page (cover poking wires with wax, use nail clippers for loose wire ends if necessary). Then contact us immediately — call or WhatsApp for priority guidance.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4" className="border-border rounded-lg border">
                  <AccordionTrigger className="text-left whitespace-normal break-words py-3">
                    Are there payment plans available?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Yes — we offer staged payment options and can discuss a plan tailored to your case. Please bring billing queries to the consultation so we can propose an appropriate plan.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5" className="border-border rounded-lg border">
                  <AccordionTrigger className="text-left whitespace-normal break-words py-3">
                    How should I care for my retainers after treatment?
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    Clean removable retainers daily, avoid high heat, and attend follow-up checks. If a retainer is lost or broken, contact us promptly so we can arrange a replacement.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Quick help / emergency panel */}
          <aside className="space-y-4">
            <Card className="border-dashed border-secondary/40 bg-card/80">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground">Quick help</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Immediate steps for common problems and priority contact details.
                </p>

                <div className="space-y-2">
                  <QuickRow icon={<AlertTriangle className="size-4 text-primary" />} label="Poking wire" text="Cover the wire with orthodontic wax. If severe, call clinic." />
                  <QuickRow icon={<ClipboardList className="size-4 text-primary" />} label="Loose bracket" text="Save the bracket (if detached) and call us to schedule a repair." />
                  <QuickRow icon={<Clock className="size-4 text-primary" />} label="Severe pain or swelling" text="Contact clinic immediately — we will guide and arrange priority care." />
                </div>

                <div className="pt-3">
                  <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="tel:+91XXXXXXXXXX">Call clinic</a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-secondary/10 p-0">
              <CardContent className="p-4">
                <h4 className="text-sm font-semibold text-foreground">Need forms filled before your visit?</h4>
                <p className="mt-1 text-sm text-muted-foreground">Download, print, and bring the completed forms to speed up your first appointment.</p>

                <div className="mt-3 flex gap-2">
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    <a href="/downloads/new-patient.pdf" download>
                      <Download className="mr-2 size-4" />
                      Patient form
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
                    <a href="/downloads/medical-history.pdf" download>
                      <Download className="mr-2 size-4" />
                      Medical history
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-10 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border/60 bg-primary/5 p-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Still have questions?</h3>
              <p className="text-sm text-muted-foreground">Message us or book a short consultation — we’ll walk you through what to expect.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact#book">Book Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary/10">
                <Link href="/contact">Contact clinic</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ------------------ Small subcomponents ------------------ */

function ResourceCard({
  icon,
  title,
  desc,
  href,
  variant = "default",
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
  variant?: "default" | "primary" | "danger";
}) {
  const borderClass =
    variant === "primary"
      ? "border-primary/20"
      : variant === "danger"
      ? "border-accent/30"
      : "border-border/40";

  return (
    <Card className={`border ${borderClass} bg-card shadow-sm`}>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            <div className="mt-4">
              <Link href={href} className="text-xs font-medium text-primary hover:underline">
                Read guide &rarr;
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function DownloadItem({ label, href }: { label: string; href: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border/40 bg-card p-3">
      <div className="flex items-center gap-3">
        <FileText className="size-5 text-muted-foreground" />
        <div>
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">PDF • printable</p>
        </div>
      </div>

      <a href={href} download className="text-xs font-medium text-primary hover:underline">
        Download
      </a>
    </div>
  );
}

function QuickRow({ icon, label, text }: { icon: React.ReactNode; label: string; text: string }) {
  return (
    <div className="flex gap-3 items-start">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="text-sm font-semibold text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}
