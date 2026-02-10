"use client";

import { useRef, useEffect } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Supabase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
];

const TechLogo = ({ name, logo }: { name: string, logo: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="w-24 h-24 bg-card/50 rounded-full flex items-center justify-center p-4 transition-all duration-300 hover:bg-card hover:scale-110 hover:shadow-lg hover:shadow-primary/20">
          <img src={logo} alt={name} className="max-w-full max-h-full" />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function TechStack() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const logos = gsap.utils.toArray('.tech-logo');
    
    gsap.fromTo(logos, 
      { opacity: 0, scale: 0.5 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      logos.forEach((logo: any) => {
        gsap.to(logo, {
          y: 'random(-10, 10)',
          x: 'random(-10, 10)',
          duration: 'random(3, 6)',
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true
        });
      });
    });

  }, []);

  return (
    <section id="tech-stack" ref={sectionRef} className="py-20 sm:py-32 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-headline font-bold">Tools & Technologies I Work With</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            I master a curated set of modern tools to build high-quality digital products from concept to deployment.
          </p>
        </div>
        <div ref={gridRef} className="mt-16 flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div key={tech.name} className="tech-logo">
              <TechLogo name={tech.name} logo={tech.logo} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
