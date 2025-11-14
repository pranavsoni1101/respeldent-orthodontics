"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function AboutSnapshot() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Block */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Vivifying the Fine Smiles
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground max-w-prose">
            We believe in the <span className="italic">uniqueness</span> of you — every smile is one of a kind.
            Your vividness is your signature mark, and at{" "}
            <span className="font-medium">Resplendent Orthodontics</span>, we aim to sculpt
            the best version of your smile — tailored for you, only you.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Personalized care, precision-driven results, and a touch of artistry define everything we do.
          </p>
          <Button asChild size="lg">
            <Link href="/about">Vivify Your Smile Today</Link>
          </Button>
        </div>

        {/* Image Block */}
        <div className="overflow-hidden rounded-2xl shadow-sm border border-border/60">
          <Image
            src="https://images.pexels.com/photos/32852531/pexels-photo-32852531.jpeg" // use one of the suggested Pexels images
            alt="Smiling patient at Resplendent Orthodontics"
            width={640}
            height={480}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSnapshot;
