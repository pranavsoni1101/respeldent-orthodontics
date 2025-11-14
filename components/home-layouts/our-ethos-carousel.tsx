"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import { Sparkles, Award, Microscope, User2 } from "lucide-react";

const ethosItems = [
  {
    title: "Know Your Orthodontist",
    icon: User2,
    desc: "Meet Dr. Purva Verma — a board-certified orthodontist who blends clinical precision, technology, and empathy to create confident smiles.",
    image: "https://images.pexels.com/photos/3845811/pexels-photo-3845811.jpeg",
  },
  {
    title: "Foundations",
    icon: Sparkles,
    desc: "Rooted in compassion and driven by innovation, Resplendent Orthodontics was founded on the belief that every smile deserves custom care.",
    image: "https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg",
  },
  {
    title: "Recognitions",
    icon: Award,
    desc: "Honored for clinical excellence and patient satisfaction, our team has been featured across national orthodontic platforms.",
    image: "https://images.pexels.com/photos/6120397/pexels-photo-6120397.jpeg",
  },
  {
    title: "Explorations",
    icon: Microscope,
    desc: "Pioneering digital orthodontics — from 3D planning to clear aligners — we continuously explore the science behind the perfect smile.",
    image: "https://images.pexels.com/photos/6627349/pexels-photo-6627349.jpeg",
  },
];

export default function OurEthosCarousel() {
    const plugin = React.useRef(
    Autoplay({
      delay: 5000, // ms between slides
      stopOnInteraction: false, // keeps looping even after manual swipe
      stopOnMouseEnter: true,  // keeps going when hovered
    })
  );

  return (
    <section className="relative py-20 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
          Our Expertise & Ethos
        </h2>
        <p className="mt-3 text-base text-muted-foreground max-w-2xl mx-auto">
          The science, soul, and spirit behind every Resplendent smile.
        </p>

        <div className="relative mt-12">
          <Carousel
          plugins={[plugin.current]}
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {ethosItems.map(({ title, icon: Icon, desc, image }) => (
                <CarouselItem
                  key={title}
                  className="basis-[85%] sm:basis-[45%] md:basis-[30%] px-4"
                >
                  <div
                    className={cn(
                      "relative rounded-xl overflow-hidden shadow-md group transition-all duration-500"
                    )}
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-110 transition-transform duration-700"
                      style={{ backgroundImage: `url(${image})` }}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/20" />

                    {/* Content */}
                    <div className="relative z-10 p-8 flex flex-col justify-end text-left h-[420px]">
                      <Icon className="size-8 text-primary mb-3" />
                      <h3 className="text-xl font-semibold text-white">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-200 mt-3 leading-relaxed">
                        {desc}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Controls */}
            <CarouselPrevious className="cursor-pointer  bg-background/80 hover:bg-primary" />
            <CarouselNext className=" cursor-pointer bg-background/80 hover:bg-primary" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
