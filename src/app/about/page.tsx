import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import AboutHero from '@/components/sections/about-hero';
import AboutStats from '@/components/sections/about-stats';
import GoogleReviews from '@/components/sections/google-reviews';
import LinkedInPosts from '@/components/sections/linkedin-posts';
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';


export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Abiodun Aina, a Full-Stack Web Developer and UI/UX Designer with over 2 years of experience building responsive, user-focused websites and applications.',
};

const experiences = [
    {
        role: "Full-Stack Developer Intern",
        company: "DevelopersHub Corporation©",
        date: "May 2025 – Aug 2025",
        points: [
            "Built and contributed to full-stack web applications using modern frontend and backend technologies.",
            "Developed responsive user interfaces with React, Next.js, and Tailwind CSS.",
            "Implemented backend functionality including authentication and data storage."
        ],
        tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Firebase", "Supabase", "MongoDB"]
    },
    {
        role: "Intern Graphic Designer",
        company: "OURSMEDIA",
        date: "Jul 2025–Present",
        points: [
            "Designed marketing assets and digital graphics for various campaigns.",
            "Improved visual communication for online advertisements and print materials.",
            "Collaborated on brand consistency across different media."
        ],
        tech: ["Figma", "Adobe Illustrator", "Adobe Photoshop"]
    },
    {
        role: "UI/UX Design",
        company: "WanderUnion",
        date: "Sept–Oct 2024",
        points: [
            "Developed a travel platform prototype from concept to high-fidelity screens.",
            "Designed intuitive user onboarding flows to improve user retention.",
            "Created a component library in Figma for smooth handoff to developers."
        ],
        tech: ["UI/UX Design", "Figma", "Prototyping", "User Research"]
    },
    {
        role: "Web Developer Internship",
        company: "GAOTek Inc.",
        date: "Jun–Nov 2024",
        points: [
            "Built and maintained client websites using HTML, CSS, JavaScript, and PHP.",
            "Customized WordPress themes and plugins to meet project requirements.",
            "Contributed to real-world client projects, honing development best practices."
        ],
        tech: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"]
    },
    {
        role: "WordPress Developer",
        company: "Mike Hairstylist",
        date: "Jan 2024",
        points: [
            "Built a responsive WordPress landing page to showcase services and portfolio.",
            "Optimized the site for mobile devices and search engines (SEO).",
            "Integrated a booking form to streamline client appointments."
        ],
        tech: ["WordPress", "Elementor", "CSS", "SEO"]
    }
].sort((a, b) => {
    const a_end_date = a.date.split('–')[1]?.trim() === 'Present' ? new Date() : new Date(a.date.split('–')[1] || a.date.split('–')[0]);
    const b_end_date = b.date.split('–')[1]?.trim() === 'Present' ? new Date() : new Date(b.date.split('–')[1] || b.date.split('–')[0]);
    return b_end_date.getTime() - a_end_date.getTime();
});

const skills = {
    "Frontend": ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    "Backend": ["Supabase", "Firebase", "MongoDB", "Node.js (Basic)", "PHP (Basic)"],
    "CMS": ["WordPress", "Elementor"],
    "Design": ["UI/UX Design", "Figma", "Prototyping", "Graphic Design", "Adobe Illustrator"]
};

const approachSteps = [
    { title: "Understand", description: "I start by understanding the core problem and business goals to ensure the final product delivers real value." },
    { title: "Design", description: "With a focus on usability, I create wireframes and high-fidelity designs that are both intuitive and visually appealing." },
    { title: "Build", description: "I write clean, scalable code using modern technologies, building a robust foundation for your application." },
    { title: "Test & Deliver", description: "After rigorous testing to ensure quality, I deploy the project and provide support to ensure a smooth launch." }
];


export default function AboutPage() {
  return (
    <>
      {/* About Page Hero */}
      <AboutHero />
      {/* Stats Bar */}
      <AboutStats />
      <div className="container max-w-5xl mx-auto px-4 py-16 sm:py-24 animate-fade-in">
      
      {/* 1. Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-24" id="experience">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            I’m a Full-Stack Web Developer and UI/UX Designer, turning ideas into clean, functional, and engaging digital experiences. I specialize in building responsive, user-focused websites and applications from the ground up.
          </p>
        </div>
        <div className="relative w-48 h-48 md:w-56 md:h-56 justify-self-center md:justify-self-end">
            <Image
                src="/AbiodunAbbeyAina.jpg"
                alt="Abiodun Aina"
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover rounded-full border-4 border-card"
                priority
            />
        </div>
      </section>

      {/* 2. Experience Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-headline font-bold mb-8">Experience</h2>
        <div className="space-y-8">
            {experiences.map((exp) => (
                <Card key={exp.company} className="bg-card/50 border-border/40 p-2">
                    <CardHeader>
                        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                            <h3 className="text-xl font-bold font-headline">{exp.role} <span className="text-primary font-normal">@ {exp.company}</span></h3>
                            <p className="text-sm text-muted-foreground flex-shrink-0">{exp.date}</p>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-outside pl-5 space-y-2 mb-6 text-muted-foreground">
                            {exp.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 items-center">
                            <span className="text-sm font-semibold mr-2">Tech:</span>
                            {exp.tech.map(t => (
                                <Badge key={t} variant="secondary">{t}</Badge>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      {/* 3. Skills / Tools Section */}
      <section className="mb-24">
        <h2 className="text-3xl font-headline font-bold mb-8">Skills & Tools</h2>
        <div className="space-y-6">
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="flex flex-col sm:flex-row gap-4 items-start">
                    <h3 className="text-lg font-headline font-semibold w-full sm:w-32 shrink-0">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skillList.map(s => <Badge key={s} variant="outline">{s}</Badge>)}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* 4. Approach Section */}
       <section className="mb-24">
        <h2 className="text-3xl font-headline font-bold mb-8">My Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approachSteps.map((step, index) => (
                <div key={step.title} className="p-6 rounded-lg bg-card/50 border-border/40">
                    <span className="text-primary font-bold text-lg">0{index + 1}</span>
                    <h3 className="font-headline font-bold text-xl mt-2 mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
            ))}
        </div>
      </section>


      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* LinkedIn Posts Section */}
      <LinkedInPosts />

      {/* 5. Closing CTA */}
      <section className="text-center bg-card/30 border border-border/20 rounded-lg py-12 px-6">
        <h2 className="text-3xl font-headline font-bold mb-2">Open to Opportunities</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            I'm currently available for freelance projects and interested in full-time roles. If you have a project in mind or a position to fill, let's talk.
        </p>
        <Button asChild size="lg">
            <Link href="/contact">
                Contact Me
            </Link>
        </Button>
      </section>

    </div>
    </>
  );
}
