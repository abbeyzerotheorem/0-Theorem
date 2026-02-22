"use client"

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AboutHero() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 text-center">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Tagline */}
        <span className="mb-4 text-sm xs:text-base md:text-lg font-semibold tracking-widest uppercase text-primary/80">
          Full-Stack Developer & Designer
        </span>
        
        {/* Main Heading */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-headline font-bold mb-6 text-foreground leading-tight">
          Building Digital Solutions That Matter
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          I turn complex ideas into clean, functional, and beautiful digital experiences. With expertise spanning full-stack development and UI/UX design, I help startups and businesses create products that users love.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="#experience">
              View My Work
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              Let's Connect
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
