"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ScanLine,
  ShieldCheck,
  HeartHandshake,
  Timer,
  Quote,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type BeforeAfter = {
  before: string;
  after: string;
  label?: string;
};

type Testimonial = {
  quote: string;
  author: string;
  tag?: string;
};

type Props = {
  title?: string;
  subtitle?: string;
  cases?: BeforeAfter[];
  testimonials?: Testimonial[];
};

export default function SectionProof({
  title = "Results you can see. Care you can feel.",
  subtitle = "Real transformations, real stories—and clear reasons patients choose Resplendent.",
  cases = [
    { before: "https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg", after: "https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg", label: "Crowding" },
    { before: "https://images.pexels.com/photos/33748023/pexels-photo-33748023.jpeg", after: "https://images.pexels.com/photos/13207280/pexels-photo-13207280.jpeg", label: "Deep Bite" },
    { before: "https://images.pexels.com/photos/33748023/pexels-photo-33748023.jpeg", after: "https://images.pexels.com/photos/13207280/pexels-photo-13207280.jpeg", label: "Open Bite" },
    { before: "https://images.pexels.com/photos/3845855/pexels-photo-3845855.jpeg", after: "https://images.pexels.com/photos/6528908/pexels-photo-6528908.jpeg", label: "Spacing" },
  ],
  testimonials = [
    { quote: "Painless, precise, and so thoughtfully explained. I loved the experience.", author: "Ms. Ritthika", tag: "Braces" },
    { quote: "Clear aligners were easy and effective. I started smiling again.", author: "Mr. Sahil", tag: "Aligners" },
    { quote: "The digital planning gave me so much confidence in the result.", author: "Ms. Sharmili", tag: "Digital Planning" },
  ],
}: Props) {
  const autoplay = React.useRef(
    Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  return (
    <section className="py-24 bg-secondary/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            {title}
          </h2>
          <p className="mt-2 text-base text-muted-foreground">{subtitle}</p>
        </div>

        {/* Content: Transformations + Testimonials */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Transformations Grid */}
          <div className="grid grid-cols-2 gap-6">
            {cases.slice(0, 4).map((c, i) => (
              <BeforeAfterCard key={i} before={c.before} after={c.after} label={c.label} />
            ))}
          </div>

          {/* Testimonials Carousel (lightweight text) */}
          <Card className="border-border bg-card/80 shadow-sm backdrop-blur-sm">
            <CardContent className="p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-3 text-accent">
                <Quote className="size-6" />
                <p className="text-sm font-medium">Patient testimonials</p>
              </div>

              <div className="mt-4 flex-1">
                <Carousel
                  plugins={[autoplay.current]}
                  opts={{ align: "start", loop: true }}
                  className="w-full"
                >
                  <CarouselContent>
                    {testimonials.map((t, idx) => (
                      <CarouselItem key={idx} className="basis-full">
                        <figure className="text-left">
                          <blockquote className="text-lg leading-relaxed text-foreground/90">
                            “{t.quote}”
                          </blockquote>
                          <figcaption className="mt-4 text-sm text-muted-foreground">
                            — {t.author}
                            {t.tag ? (
                              <span className="ml-2 rounded-full border border-accent/50 px-2 py-0.5 text-[11px] text-accent">
                                {t.tag}
                              </span>
                            ) : null}
                          </figcaption>
                        </figure>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  <div className="hidden md:flex gap-2 mt-6">
                    <CarouselPrevious className="bg-background/80 hover:bg-background shadow-sm" />
                    <CarouselNext className="bg-background/80 hover:bg-background shadow-sm" />
                  </div>
                </Carousel>
              </div>

              <div className="pt-6">
                <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/success">View More Success Stories</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Differentiators */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Reason
            icon={<ScanLine className="size-6 text-primary" />}
            title="Digital precision"
            text="3D scans & planning for accurate, comfortable treatment."
          />
          <Reason
            icon={<ShieldCheck className="size-6 text-primary" />}
            title="Board-certified care"
            text="Experienced orthodontic expertise you can trust."
          />
          <Reason
            icon={<HeartHandshake className="size-6 text-primary" />}
            title="Gentle & personal"
            text="Clear guidance, empathetic care, and tailored plans."
          />
          <Reason
            icon={<Timer className="size-6 text-primary" />}
            title="Same-day starts"
            text="When suitable, begin treatment the same day."
          />
        </div>

        {/* CTA band */}
        <div className="mt-16 rounded-xl bg-primary/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-black">Ready to begin your smile journey?</h3>
            <p className="text-black/70">Book an appointment or explore treatment options with our team.</p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact#book">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline" className="bg-primary border-primary/20 text-background hover:bg-primary/70">
              <Link href="/services">Explore Treatments</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Subcomponents --- */

function BeforeAfterCard({ before, after, label }: BeforeAfter) {
  const [isRevealed, setIsRevealed] = React.useState(false);

  const handleToggle = () => {
    // Only toggle on touch/click (helps mobile)
    if (window.innerWidth < 1024) {
      setIsRevealed((prev) => !prev);
    }
  };

  return (
    <div
      onClick={handleToggle}
      className="group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm cursor-pointer select-none"
    >
      {/* BEFORE image */}
      <Aspect>
        <Image
          src={before}
          alt={`${label || "Case"} before`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-all duration-500"
          priority={false}
        />
      </Aspect>

      {/* AFTER image overlay */}
      <div
        className={cn(
          "absolute inset-0 transition-opacity duration-500",
          // show on hover (desktop) or if toggled (mobile)
          isRevealed ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        )}
      >
        <Aspect>
          <Image
            src={after}
            alt={`${label || "Case"} after`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </Aspect>
      </div>

      {/* Label */}
      <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2.5 py-1 text-[11px] text-foreground shadow-sm">
        {label || "Case"}
      </div>

      {/* Hint text */}
      <div className="absolute right-3 bottom-3 rounded-full border border-accent/50 bg-black/80 px-2 py-0.5 text-[10px] text-accent">
        {isRevealed ? "Reveal before" : "Reveal after"}
      </div>
    </div>
  );
}

function Reason({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <Card className="h-full border-border bg-card shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-6 flex items-start gap-4">
        <div className="inline-flex size-10 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/20 shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="text-base font-semibold text-foreground">{title}</h4>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Aspect({ children }: { children: React.ReactNode }) {
  // 4:3 aspect ratio looks good for intra-oral photos; tweak as needed
  return (
    <div className="relative w-full" style={{ paddingTop: "75%" }}>
      {children}
    </div>
  );
}
