"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Mail, Calendar, Github, Twitter, Dribbble, Linkedin } from 'lucide-react';

import Link from 'next/link';

const contactLinks = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "zerotheorem01@gmail.com",
    href: "mailto:zerotheorem01@gmail.com",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    label: "Schedule a Meeting",
    href: "#", // Replace with your Calendly link
  },
];

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21h.01c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.52 14.38c-.28-.14-1.64-.81-1.9-1.04-.25-.14-.43-.14-.62.14-.19.28-.72.91-.88 1.1-.16.19-.32.22-.59.07-.28-.14-1.18-.44-2.24-1.38-1.06-.94-1.78-2.1-2-2.46-.24-.37-.02-.57.12-.71.13-.13.28-.32.43-.48.14-.16.19-.28.28-.46.09-.19.05-.37-.02-.51s-.62-1.5-1-2.06c-.37-.56-.75-.48-1.02-.48h-.54c-.28 0-.75.12-1.14.54-1.11 1.18-1.33 2.76-1.33 4.28.01 1.58.62 3.1 1.78 4.67 1.15 1.56 2.53 2.82 4.61 3.72 2.55 1.1 3.63.93 4.89.57 1.26-.36 2.08-1.48 2.37-2.92.29-1.44.29-2.67.2-2.92-.09-.25-.27-.4-.54-.54z"
      />
    </svg>
);


const socialLinks = [
    { label: "GitHub", icon: <Github className="w-8 h-8" />, href: "https://github.com/abbeyzerotheorem" },
    { label: "Twitter", icon: <Twitter className="w-8 h-8" />, href: "https://x.com/ZeroTheorem01?t=GaBiYlmbrPNi9tkTmm1l_Q&s=09" },
    { label: "LinkedIn", icon: <Linkedin className="w-8 h-8" />, href: "https://www.linkedin.com/in/abbey0" },
    { label: "Dribbble", icon: <Dribbble className="w-8 h-8" />, href: "https://dribbble.com/abbey0" },
    { label: "WhatsApp", icon: <WhatsAppIcon className="w-8 h-8" />, href: "https://wa.me/27641663906" },
]

export default function ContactDetails() {
  const containerRef = useRef(null);

  useEffect(() => {
    const q = gsap.utils.selector(containerRef);
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(q('.contact-headline'), { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1 })
      .fromTo(q('.contact-subheadline'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, "-=0.6")
      .fromTo(q('.contact-item'), { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2, duration: 0.8 }, "-=0.5")
      .fromTo(q('.social-item'), { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }, "-=0.5");
  }, []);

  return (
    <div ref={containerRef} className="space-y-12">
      <div className="overflow-hidden">
        <h1 className="contact-headline text-5xl md:text-6xl font-headline font-bold">Let's Build the Future. Together.</h1>
      </div>
      <div className="overflow-hidden">
        <p className="contact-subheadline text-lg md:text-xl text-muted-foreground">
          Have an idea brewing? Let's unlock its potential. Tell me about your project, and I'll get back to you soon.
        </p>
      </div>

      <ul className="space-y-6">
        {contactLinks.map((link) => (
          <li key={link.label} className="contact-item">
            <Link href={link.href} className="group inline-flex items-center gap-4 text-lg hover:text-primary transition-colors duration-300">
                <div className="bg-card/50 group-hover:bg-primary/10 p-3 rounded-md transition-colors duration-300">
                    {link.icon}
                </div>
                <span className="font-medium">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        {socialLinks.map((link) => (
            <div key={link.label} className="social-item">
                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300 p-2 block">
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
}
