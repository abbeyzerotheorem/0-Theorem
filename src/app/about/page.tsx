
"use client";

import Image from 'next/image';
import Cta from '@/components/sections/cta';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const experience = [
  {
    role: "Intern Graphic Designer",
    company: "OURSMEDIA",
    date: "Jul 2025 – Present",
    description: "Designing marketing assets and digital graphics, improving visual communication for online campaigns and print materials.",
  },
  {
    role: "Full-Stack Developer Intern",
    company: "DevelopersHub Corporation©",
    date: "May 2025 – Aug 2025",
    description: "Built and contributed to full-stack web applications using modern frontend and backend technologies. Developed responsive user interfaces with React, Next.js, TypeScript, Tailwind CSS. Implemented backend functionality using Firebase, Supabase, and MongoDB",
  },
  {
    role: "Web Developer Internship",
    company: "GAOTek Inc.",
    date: "Jun–Nov 2024",
    description: "Built and maintained websites using HTML, CSS, JavaScript, PHP, and WordPress, contributing to real-world client projects and honing development best practices.",
  },
  {
    role: "UI/UX Design",
    company: "WanderUnion",
    date: "Sept–Oct 2024",
    description: "Developed a travel platform prototype, designing intuitive onboarding flows and high-fidelity screens in Figma, with smooth handoff to front-end implementation.",
  },
  {
    role: "WordPress Developer",
    company: "Mike Hairstylist",
    date: "Jan 2024",
    description: "Built a responsive WordPress landing page to showcase services, optimized for usability and mobile devices.",
  },
];

const education = [
    {
        program: "ALX ProDev Frontend Program",
        focus: "React, UI/UX, Web Performance"
    },
    {
        program: "ALX Freelancer Academy",
        focus: "Technical skills + business strategies for freelance work"
    },
    {
        program: "freeCodeCamp Responsive Web Design",
        focus: "Certification in responsive design principles"
    }
];

export default function AboutPage() {
  return (
    <div className="about-page-gradient">
      <main className="container mx-auto px-4 py-20 sm:py-32">
        {/* Intro Section */}
        <section id="about-intro" className="mb-48">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="lg:col-span-1 flex justify-center">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                        <Image
                            src="https://i.pinimg.com/1200x/1c/2c/a8/1c2ca8837147cd8176756a3397db2131.jpg"
                            alt="Abiodun Abbey Aina"
                            width={400}
                            height={400}
                            className="rounded-full object-cover border-4 border-primary/20 shadow-2xl shadow-primary/20"
                            data-ai-hint="professional man portrait"
                            priority
                        />
                         <div className="absolute inset-0 rounded-full border-primary/50 animate-pulse"></div>
                    </div>
                </div>
                <div className="lg:col-span-2 text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-headline font-bold">About Me</h1>
                    <div className="mt-6 text-lg md:text-xl text-muted-foreground space-y-4">
                        <p>Hi, I’m Abiodun Aina, a Full-Stack Web Developer and UI/UX Designer with 2+ years of experience building responsive, user-focused websites and applications. I specialize in turning ideas into clean, functional, and engaging digital experiences.</p>
                        <p>I’ve worked on a variety of projects, from WordPress landing pages to full-stack React applications, always focusing on performance, usability, and accessibility. My design work ensures that interfaces are not just visually appealing, but also practical and user-friendly.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-24">
          <h2 className="text-4xl font-headline font-bold text-center mb-12">Experience Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {experience.map((job, index) => (
              <Card key={index} className="bg-card/50">
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{job.role}</CardTitle>
                  <CardDescription className="flex items-center gap-4 pt-1">
                    <span>{job.company}</span>
                    <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded-full">{job.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* Education Section */}
        <section id="education" className="mb-24">
            <h2 className="text-4xl font-headline font-bold text-center mb-12">Education & Training</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {education.map((edu, index) => (
                    <Card key={index} className="bg-card/50 text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <CardTitle className="text-lg font-headline pt-2">{edu.program}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{edu.focus}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-headline font-bold">My Approach</h2>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground">
                I thrive on creating solutions that balance clean code, thoughtful design, and user-first experiences. I’m constantly learning new technologies to stay ahead in web development, and I enjoy collaborating with clients and teams to deliver results that truly make an impact.
            </p>
        </section>
      </main>

      {/* CTA Section */}
      <Cta />
    </div>
  );
}
