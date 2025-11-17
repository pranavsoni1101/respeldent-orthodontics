"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSnapshot() {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {/* Text Block */}
        <div className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary-foreground/80">
            About Resplendent Orthodontics
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Vivifying the Fine Smiles
          </h2>

          <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
            We believe in the <span className="italic">uniqueness</span> of you — every smile is one of a kind.
            Your vividness is your signature mark, and at{" "}
            <span className="font-medium">Resplendent Orthodontics</span>, we aim to sculpt the best
            version of your smile — tailored for you, only you.
          </p>

          <p className="text-base leading-relaxed text-muted-foreground">
            Personalized care, precision-driven results, and a touch of artistry define everything we do —
            from diagnosis to finishing touches.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/about">Vivify Your Smile Today</Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              Learn more about our philosophy, approach, and doctor-led care.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-sm">
          {/* Image */}
          <div className="relative h-[260px] sm:h-[320px] md:h-[360px]">
            <Image
              src="https://images.pexels.com/photos/32852531/pexels-photo-32852531.jpeg"
              alt="Smiling patient at Resplendent Orthodontics"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            {/* Soft overlay gradient for readability + mood */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-black/10 to-transparent" />
          </div>

          {/* Bottom label strip */}
          <div className="flex items-center justify-between gap-3 border-t border-border/70 bg-background/90 px-4 py-3">
            <p className="text-xs font-medium text-foreground">
              Clinic-led orthodontic care in Jaipur
            </p>
            <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-medium text-accent-foreground">
              Personalized treatment plans
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSnapshot;
