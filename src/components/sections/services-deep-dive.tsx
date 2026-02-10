"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Code2, PenTool } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

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

const services = [
  {
    title: "Web Development",
    description: "Responsive, performance-focused websites and apps built from the ground up.",
    icon: <Code2 className="w-8 h-8" />,
    includes: [
      "Fast, responsive layout using HTML, CSS, JavaScript",
      "Dynamic interactions with React",
      "Clean, maintainable code ready for deployment",
    ],
    builtFor: [
      "Startups",
      "Business websites",
      "Web apps",
    ]
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress sites and landing pages designed for visibility and usability.",
    icon: <WordPressIcon className="w-8 h-8" />,
    includes: [
      "Custom themes or child themes",
      "SEO-ready structure",
      "Mobile-optimized, cross-device compatible",
    ],
    builtFor: [
      "Personal brands",
      "Small businesses",
      "Blogs & content sites",
    ]
  },
  {
    title: "UI/UX & Visual Design",
    description: "User-centered interfaces and visual graphics that align with your goals.",
    icon: <PenTool className="w-8 h-8" />,
    includes: [
      "Wireframes & prototypes in Figma",
      "UI design focused on clarity and usability",
      "Visual asset creation to support your brand",
    ],
    builtFor: []
  }
];

export default function ServicesDeepDive() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.fromTo(cardsRef.current, {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <section ref={sectionRef} id="services-deep-dive" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} ref={el => cardsRef.current[index] = el} className="opacity-0">
              <Card className="h-full bg-card/50 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-lg">
                      {service.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </div>
                  <p className="pt-4 text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">What’s included:</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start">
                          <Check className="w-4 h-4 mr-3 mt-1 text-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {service.builtFor.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-3">Built for:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.builtFor.map((item) => (
                          <span key={item} className="text-xs font-medium bg-muted text-muted-foreground px-2 py-1 rounded-full">{item}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
