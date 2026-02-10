"use client";

import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const valuePropositions = [
  {
    text: "Hands-on experience across front-end and full-stack development",
  },
  {
    text: "Design-to-code workflow (UI/UX + development)",
  },
  {
    text: "Focus on performance, accessibility, and clean code",
  },
  {
    text: "Experience working with real clients and remote teams",
  }
];

export default function Services() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
       gsap.fromTo(cardsRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="why-work-with-me" ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold">Why Work With Me</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {valuePropositions.map((prop, index) => (
            <div key={index} ref={el => cardsRef.current[index] = el} className="opacity-0">
                <Card className="h-full bg-card/50 hover:bg-card/80 transition-colors duration-300">
                <CardContent className="p-6 flex items-center gap-6">
                    <CheckCircle2 className="w-10 h-10 text-primary shrink-0" />
                    <p className="text-lg font-medium text-left">{prop.text}</p>
                </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
