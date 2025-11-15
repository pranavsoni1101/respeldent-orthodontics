// app/services/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { SERVICES } from "@/data/services";
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
          <div className="mb-8 flex items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-foreground">Our Services</h1>
              <p className="text-sm text-muted-foreground mt-1">
                Explore the treatments we offer — click any card to learn more.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Search services..."
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-2 top-2 size-4 text-muted-foreground" />
              </div>
              <Button asChild className="hidden md:inline-flex bg-primary text-primary-foreground">
                <Link href="/contact#book">Book Consultation</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <Card className="border-border bg-card shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="inline-flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {/* optional image or icon */}
            <div className="text-lg font-semibold">{service.title[0]}</div>
          </div>

          <div className="flex-1">
            <h3 className="text-base font-semibold text-foreground">{service.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>

            <div className="mt-4 flex items-center gap-3">
              <Link href={`/services/${service.slug}`} className="text-sm font-medium text-primary hover:underline">
                Learn more →
              </Link>
              <Link href="/contact#book" className="ml-auto text-sm">
                <Button className="bg-primary text-primary-foreground text-sm">Book</Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
