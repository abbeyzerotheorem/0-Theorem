
import type { Metadata } from 'next';
import Cta from '@/components/sections/cta';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';


export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Abiodun Aina, a Full-Stack Web Developer and UI/UX Designer with over 2 years of experience building responsive, user-focused websites and applications.',
};

const experiences = [
    {
        title: "Intern Graphic Designer",
        company: "OURSMEDIA",
        date: "Jul 2025–Present",
        description: "Designing marketing assets and digital graphics, improving visual communication for online campaigns and print materials."
    },
    {
        title: "Full-Stack Developer Intern",
        company: "DevelopersHub Corporation©",
        date: "May 2025 – Aug 2025",
        description: "Built and contributed to full-stack web applications using modern frontend and backend technologies. Developed responsive user interfaces with React, Next.js, TypeScript, Tailwind CSS. Implemented backend functionality using Firebase, Supabase, and MongoDB"
    },
    {
        title: "UI/UX Design",
        company: "WanderUnion",
        date: "Sept–Oct 2024",
        description: "Developed a travel platform prototype, designing intuitive onboarding flows and high-fidelity screens in Figma, with smooth handoff to front-end implementation."
    },
    {
        title: "Web Developer Internship",
        company: "GAOTek Inc.",
        date: "Jun–Nov 2024",
        description: "Built and maintained websites using HTML, CSS, JavaScript, PHP, WordPress, contributing to real-world client projects and honing development best practices."
    },
    {
        title: "WordPress Developer",
        company: "Mike Hairstylist",
        date: "Jan 2024",
        description: "Built a responsive WordPress landing page to showcase services, optimized for usability and mobile devices."
    }
].sort((a, b) => new Date(b.date.split('–')[0]).getTime() - new Date(a.date.split('–')[0]).getTime());


export default function AboutPage() {
  return (
    <div className="about-page-gradient">
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          
          <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">About Me</h1>
          
          <p className="text-lg text-muted-foreground mb-6">
            Hi, I’m Abiodun Aina, a Full-Stack Web Developer and UI/UX Designer with 2+ years of experience building responsive, user-focused websites and applications. I specialize in turning ideas into clean, functional, and engaging digital experiences.
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            I’ve worked on a variety of projects, from WordPress landing pages to full-stack React applications, always focusing on performance, usability, and accessibility. My design work ensures that interfaces are not just visually appealing, but also practical and user-friendly.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-headline font-bold mb-8 border-b border-border/40 pb-3">Experience Highlights</h2>
              <div className="space-y-8">
                {experiences.map((exp) => (
                    <Card key={exp.company} className="bg-card/50">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold font-headline">{exp.title} <span className="text-primary">@ {exp.company}</span></CardTitle>
                            <CardDescription>{exp.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="text-foreground/80">{exp.description}</p>
                        </CardContent>
                    </Card>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-headline font-bold mb-6 border-b border-border/40 pb-3">Education & Training</h2>
              <ul className="space-y-3 list-disc list-inside text-lg text-muted-foreground">
                <li>ALX ProDev Frontend Program &ndash; <span className="text-foreground/90 font-medium">React, UI/UX, Web Performance</span></li>
                <li>ALX Freelancer Academy &ndash; <span className="text-foreground/90 font-medium">Technical skills + business strategies for freelance work</span></li>
                <li>freeCodeCamp Responsive Web Design Certification</li>
              </ul>
            </div>
            
            <div>
              <h2 className="text-3xl font-headline font-bold mb-6 border-b border-border/40 pb-3">My Approach</h2>
              <p className="text-lg text-muted-foreground">
                  I thrive on creating solutions that balance clean code, thoughtful design, and user-first experiences. I’m constantly learning new technologies to stay ahead in web development, and I enjoy collaborating with clients and teams to deliver results that truly make an impact.
              </p>
            </div>
           
            <div>
              <h2 className="text-3xl font-headline font-bold mb-6 border-b border-border/40 pb-3">Let’s Connect</h2>
              <p className="text-lg text-muted-foreground">
                  Whether you’re looking to hire a reliable developer, improve your website, or collaborate on a digital project, I’m ready to help bring your ideas to life.
              </p>
            </div>
          </div>

        </div>
      </section>
      <Cta />
    </div>
  );
}
