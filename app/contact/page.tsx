"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Top text band (full width) */}
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-secondary-foreground/80">
              Contact Resplendent Orthodontics
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              Let&apos;s talk about your smile.
            </h1>
            <p className="mt-3 text-base text-muted-foreground">
              Have a question about treatment, timings, or costs? Share a few details
              and our team will get back to you with clear, simple guidance.
            </p>
          </div>

          {/* SINGLE GRID: left = intro + form, right = all cards */}
          <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] items-start">
            {/* LEFT COLUMN */}
            <div className="flex flex-col gap-8">
              {/* Call / WhatsApp pills */}
              <div className="grid gap-4 sm:grid-cols-2">
                <InfoPill
                  icon={<Phone className="size-4" />}
                  label="Call us"
                  value="+91 98XX-XXX-XXX"
                  href="tel:+91XXXXXXXXXX"
                />
                <InfoPill
                  icon={<MessageCircle className="size-4" />}
                  label="WhatsApp"
                  value="+91 98XX-XXX-XXX"
                  href="https://wa.me/91XXXXXXXXXX"
                />
              </div>

              {/* Form card */}
              <Card className="border-border bg-card shadow-sm min-h-[420px]">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-semibold text-foreground">
                    Send us a message
                  </CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Share your details and concerns—we&apos;ll respond with suitable
                    options and next steps.
                  </p>
                </CardHeader>
                <CardContent className="space-y-5">
                  <form
                    className="space-y-4"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <Label htmlFor="name">Full name</Label>
                        <Input id="name" name="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+91 ..."
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="email">Email (optional)</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="reason">What can we help you with?</Label>
                      <Input
                        id="reason"
                        name="reason"
                        placeholder="Braces, aligners, jaw correction, second opinion, etc."
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="message">Additional details</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Share any pain, concerns, or questions you have."
                        rows={4}
                      />
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="preferred-time">
                        Preferred date/time for a call or visit
                      </Label>
                      <Input
                        id="preferred-time"
                        name="preferredTime"
                        placeholder="For example: Saturday after 4 PM"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        Submit enquiry
                      </Button>
                    </div>

                    <p className="text-xs text-muted-foreground mt-2">
                      By submitting, you agree to be contacted by our clinic team on
                      the details you&apos;ve shared.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* RIGHT COLUMN (ALL CARDS STACKED, SAME WIDTH) */}
            <div className="flex flex-col gap-6">
              {/* Clinic details */}
              <Card className="border-secondary/40 bg-secondary/10">
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-foreground">
                    Clinic details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-muted-foreground">
                  <DetailRow
                    icon={<Phone className="size-4 text-primary" />}
                    label="Phone"
                  >
                    <a href="tel:+91XXXXXXXXXX" className="hover:text-primary">
                      +91 98XX-XXX-XXX
                    </a>
                  </DetailRow>
                  <DetailRow
                    icon={<Mail className="size-4 text-primary" />}
                    label="Email"
                  >
                    <a
                      href="mailto:care@resplendentorthodontics.com"
                      className="hover:text-primary break-all"
                    >
                      care@resplendentorthodontics.com
                    </a>
                  </DetailRow>
                  <DetailRow
                    icon={<MapPin className="size-4 text-primary" />}
                    label="Address"
                  >
                    Malviya Nagar, Jaipur
                    <br />
                    Rajasthan, India
                  </DetailRow>
                  <DetailRow
                    icon={<Clock className="size-4 text-primary" />}
                    label="Clinic hours"
                  >
                    Mon – Sat: 10:00 AM – 7:00 PM
                    <br />
                    <span className="text-xs text-muted-foreground/80">
                      Closed on Sundays and public holidays.
                    </span>
                  </DetailRow>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="border-secondary/40 bg-secondary/10">
                <CardHeader>
                  <CardTitle className="text-base font-semibold text-foreground">
                    Find us in Jaipur
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative w-full overflow-hidden rounded-lg border border-secondary/40 bg-background">
                    <div className="aspect-[4/3]">
                      <iframe
                        title="Clinic location map"
                        src="https://www.google.com/maps/embed?pb="
                        className="h-full w-full border-0"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Located in Malviya Nagar, with easy access and nearby parking.
                    Exact directions are shared when your appointment is confirmed.
                  </p>
                </CardContent>
              </Card>

              {/* Urgent issues */}
              <Card className="border-dashed border-secondary/40 bg-card">
                <CardContent className="p-5 space-y-2">
                  <p className="text-sm font-semibold text-foreground">
                    For urgent orthodontic issues
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If you have a poking wire, loose bracket, or sudden discomfort,
                    please call or WhatsApp us so we can guide you and schedule a
                    priority visit if needed.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary/10"
                    >
                      <Link href="tel:+91XXXXXXXXXX">
                        <Phone className="mr-2 size-3.5" />
                        Call clinic
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-secondary text-secondary-foreground hover:bg-secondary/10"
                    >
                      <Link href="https://wa.me/91XXXXXXXXXX">
                        <MessageCircle className="mr-2 size-3.5" />
                        WhatsApp us
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* --- Subcomponents --- */

function InfoPill({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center justify-between gap-3 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-2.5 text-xs sm:text-sm">
      <div className="flex items-center gap-2">
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
          {icon}
        </span>
        <span className="font-medium text-foreground">{label}</span>
      </div>
      <span className="text-[11px] sm:text-xs text-muted-foreground">
        {value}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}

function DetailRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-2">
      <div className="mt-0.5">{icon}</div>
      <div>
        <p className="font-medium text-foreground text-sm">{label}</p>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}
