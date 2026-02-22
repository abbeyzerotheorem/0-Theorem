"use client";

import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';
import Link from 'next/link';
import WireframeGrid from './WireframeGrid';
import Image from 'next/image';

export default function HeroSection() {
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(headlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(subheadlineRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8')
      .fromTo(ctaRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.8');
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2; // -1 to 1
    setTilt({ x, y });
  }
  function handleMouseLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <section
      id="hero"
      className="hero-background-gradient relative h-screen min-h-[500px] w-full flex items-center justify-center text-center px-2 sm:px-4"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Wireframe Grid background */}
      <WireframeGrid tilt={tilt} />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full px-2 sm:px-4">
       
        {/* Tagline */}
        <span className="mb-2 text-sm xs:text-base md:text-lg font-semibold tracking-widest uppercase text-primary/80">
          Crafting Digital Experiences That Stand Out
        </span>
        <div className="overflow-hidden pb-2">
           <h1
            ref={headlineRef}
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-headline font-bold py-4 text-foreground leading-tight"
          >
            Full-Stack Web Developer & Designer Studio 
          </h1>
        </div>
        <div className="overflow-hidden">
          <p ref={subheadlineRef} className="mt-4 text-base xs:text-lg md:text-xl max-w-3xl text-muted-foreground">
            I design and develop responsive websites and web applications using React, WordPress, and modern backend tools like Supabase, Firebase, and MongoDB. From UI/UX design to backend integration, I help startups and businesses turn ideas into reliable, scalable web solutions.
          </p>
        </div>
        <div ref={ctaRef} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-xl">
          <Button size="lg" asChild className="group relative w-full sm:w-auto">
            <Link href="#portfolio">
              View Our Work
              <span className="absolute inset-0 bg-primary-foreground/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-md" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="group relative overflow-hidden border-2 w-full sm:w-auto">
            <Link href="#cta">
              Get a Quote
              <span className="absolute inset-0 border-2 border-primary scale-125 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 rounded-md" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="sr-only">Scroll down</span>
        <ChevronDown className="h-10 w-10 text-primary animate-bounce-slow drop-shadow-lg" aria-hidden="true" />
      </div>
    </section>
  );
}

// Add this to your global CSS (e.g., globals.css) for a slower bounce:
// .animate-bounce-slow {
//   animation: bounce 2.2s infinite;
// }
