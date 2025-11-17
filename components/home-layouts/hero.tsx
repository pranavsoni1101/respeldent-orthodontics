"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import toothAnimation from "@/public/animations/clean_tooth.json";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        {/* <Image
          src="https://images.pexels.com/photos/3845551/pexels-photo-3845551.jpeg"
          alt="Confident smiling patient"
          fill
          priority
          className="object-cover object-center"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-background/10 dark:from-background/70 dark:via-background/40" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:py-36 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text block */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Smiles that shine out
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Get the smile you’ve always wanted — precise, gentle, and guided by
            science.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
            <Button asChild className="min-w-[12rem]">
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="min-w-[12rem]">
              <Link href="/services">Explore Treatments</Link>
            </Button>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[400px] flex-shrink-0">
          <Lottie
            animationData={toothAnimation}
            loop
            autoplay
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))" }}
          />
        </div>
      </div>
    </section>
  );
}

type Hero2Props = {
  headline?: string;
  subheadline?: string;
  ctaPrimaryHref?: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryHref?: string;
  ctaSecondaryLabel?: string;
  videoSrc?: string; // default: /hero.mp4
  posterSrc?: string; // optional poster image for faster first paint
  className?: string;
};

export function Hero2({
  headline = "Smiles that shine out",
  subheadline = "Gentle, precise, evidence-based orthodontic care.",
  ctaPrimaryHref = "/contact",
  ctaPrimaryLabel = "Book Appointment",
  ctaSecondaryHref = "/services",
  ctaSecondaryLabel = "Explore Treatments",
  videoSrc = "/hero.mp4",
  posterSrc,
  className,
}: Hero2Props) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        "min-h-screen grid place-items-center px-4 sm:px-6", // 👈 changed here
        className
      )}
      aria-label="Hero"
    >
      {/* Background video */}
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          src={videoSrc}
          // For autoplay to work across browsers:
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
          poster={posterSrc}
          aria-hidden="true"
        />
        {/* Dark scrim for contrast on a light video */}
        <div className="absolute inset-0 bg-black/30" />
        {/* very subtle vignette to lift center text */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-black/15 to-black/10" />
      </div>

      {/* Centered content */}
      <div className="mx-auto max-w-3xl text-center text-white">
        <h1 className="text-5xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          {headline}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
          {subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {/* Dark high-contrast primary: invert shadcn button colors */}
          <Button
            asChild
            className="min-w-[12rem] bg-foreground text-background hover:bg-foreground/90"
          >
            <Link href={ctaPrimaryHref}>{ctaPrimaryLabel}</Link>
          </Button>

          {/* Outline that stays visible on dark/overlay */}
          <Button
            asChild
            variant="outline"
            className="min-w-[12rem] border-white/70 bg-white/10 text-white hover:bg-white/20 hover:text-white"
          >
            <Link href={ctaSecondaryHref}>{ctaSecondaryLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
