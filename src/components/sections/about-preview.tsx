
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} id="about-preview" className="py-20 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex justify-center lg:justify-end lg:order-2">
            <div className="relative w-80 h-[28rem] rounded-lg overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-105">
              <Image
                src="/AbiodunAbbey.jpg"
                alt="Abiodun Aina, founder of Zero Theorem"
                fill
                sizes="(max-width: 1023px) 80vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:order-1">
            <h2 className="text-4xl font-headline font-bold">About Zero Theorem</h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl">
              Zero Theorem is a solo web development and design studio led by Abiodun Aina. I work hands-on across design and development to deliver modern, user-focused digital solutions.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="outline" className="group">
                <Link href="/about">
                  More About Me
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
