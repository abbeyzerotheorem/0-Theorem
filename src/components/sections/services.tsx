"use client";

import { useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, PenTool } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WordPressIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-3.5 0-6.5-2.2-6.5-5.5S8.5 1 12 1s6.5 2.2 6.5 5.5-3 5.5-6.5 5.5z"/>
        <path d="M12 12c1.5 0 3.5 0 5.5 0 2.5 0 4.5 1.5 4.5 4s-2 4-4.5 4-3-1.5-4-3"/>
        <path d="M12 12c-1.5 0-3.5 0-5.5 0-2.5 0-4.5 1.5-4.5 4s2 4 4.5 4 3-1.5 4-3"/>
        <path d="M2.5 9c0-2 1.5-4 4-4"/>
        <path d="M21.5 9c0-2-1.5-4-4-4"/>
    </svg>
)

const whatIDo = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description: "I build responsive, high-performance websites and web applications using HTML, CSS, JavaScript, React, and modern backend tools.",
  },
  {
    icon: <WordPressIcon className="w-8 h-8" />,
    title: "WordPress Development",
    description: "Custom WordPress websites, landing pages, and content-driven sites optimized for performance, SEO, and ease of use.",
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "UI/UX & Visual Design",
    description: "User-centered interface and visual design in Figma, including layouts, wireframes, and marketing visuals that translate smoothly into development.",
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
    <section id="what-i-do" ref={sectionRef} className="py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-headline font-bold">What I Do</h2>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whatIDo.map((service, index) => (
            <div key={index} ref={el => { cardsRef.current[index] = el; }} className="opacity-0 animate-fade-in md:opacity-100">
                <Card className="h-full bg-card/50 hover:bg-card/80 transition-colors duration-300 p-4">
                <CardHeader className="flex-row items-center gap-4 pb-4">
                    <div className="text-primary bg-primary/10 p-3 rounded-lg">{service.icon}</div>
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
                </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
