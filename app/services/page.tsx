// app/services/page.tsx
"use client";

import Link from "next/link";
import { SERVICES, type Service } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { useState } from "react";

export default function ServicesIndex() {
  const [q, setQ] = useState("");
  const results = SERVICES.filter(
    (s) =>
      s.title.toLowerCase().includes(q.toLowerCase()) ||
      s.short.toLowerCase().includes(q.toLowerCase()) ||
      (s.overview && s.overview.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-background">
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header + search (responsive) */}
          <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/80">
                Treatments
              </p>
              <h1 className="mt-1 text-3xl md:text-4xl font-semibold text-foreground">
                Our Services
              </h1>
              <p className="mt-2 max-w-xl text-sm md:text-base text-muted-foreground">
                Explore the orthodontic treatments we offer — from classic
                braces to advanced digital planning. Click any card to learn
                more.
              </p>
            </div>

            <div className="w-full max-w-md space-y-2 md:space-y-3">
              <label className="block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Search treatments
              </label>
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground">
                    <Search className="size-4" />
                  </span>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Braces, aligners, mini-implants..."
                    className="w-full rounded-md border border-secondary/60 bg-background px-9 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>

                {/* Desktop Book button */}
                <Button
                  asChild
                  className="hidden whitespace-nowrap bg-secondary text-primary-foreground hover:bg-secondary/90 sm:inline-flex"
                >
                  <Link href="/contact#book">Book consultation</Link>
                </Button>
              </div>

              {/* Mobile Book button */}
              <Button
                asChild
                className="w-full bg-secondary text-primary-foreground hover:bg-secondary/90 sm:hidden"
              >
                <Link href="/contact#book">Book consultation</Link>
              </Button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <Card className="border border-secondary/40 bg-card shadow-sm transition-all hover:border-primary/60 hover:shadow-md">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="inline-flex size-12 items-center justify-center rounded-lg bg-secondary/20 text-primary">
            {/* simple initial – can swap with icon later */}
            <div className="text-lg font-semibold">{service.title[0]}</div>
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {service.short}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Link
                href={`/services/${service.slug}`}
                className="text-sm font-medium text-primary hover:underline"
              >
                Learn more →
              </Link>

              <Button
                asChild
                variant="outline"
                className="ml-auto border-secondary text-secondary-foreground hover:bg-secondary/10 hover:text-secondary-foreground"
                size="sm"
              >
                <Link href="/contact#book">Book</Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
