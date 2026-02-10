
import type { Metadata } from 'next';
import Cta from '@/components/sections/cta';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'About Abiodun Aina, a Full-Stack Web Developer and UI/UX Designer with over 2 years of experience building responsive, user-focused websites and applications.',
};

export default function AboutPage() {
  return (
    <div className="about-page-gradient">
      <section className="py-20 sm:py-24 animate-fade-in">
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
              <h2 className="text-3xl font-headline font-bold mb-6 border-b border-border/40 pb-3">Experience Highlights</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold font-headline">Intern Graphic Designer <span className="text-primary">@ OURSMEDIA</span></h3>
                  <p className="text-sm text-muted-foreground mb-2">Jul 2025–Present</p>
                  <p className="text-foreground/80">Designing marketing assets and digital graphics, improving visual communication for online campaigns and print materials.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Full-Stack Developer Intern <span className="text-primary">@ DevelopersHub Corporation©</span></h3>
                  <p className="text-sm text-muted-foreground mb-2">May 2025 – Aug 2025</p>
                  <p className="text-foreground/80">Built and contributed to full-stack web applications using modern frontend and backend technologies. Developed responsive user interfaces with React, Next.js, TypeScript, Tailwind CSS. Implemented backend functionality using Firebase, Supabase, and MongoDB</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">UI/UX Design <span className="text-primary">@ WanderUnion</span></h3>
                  <p className="text-sm text-muted-foreground mb-2">Sept–Oct 2024</p>
                  <p className="text-foreground/80">Developed a travel platform prototype, designing intuitive onboarding flows and high-fidelity screens in Figma, with smooth handoff to front-end implementation.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">Web Developer Internship <span className="text-primary">@ GAOTek Inc.</span></h3>
                  <p className="text-sm text-muted-foreground mb-2">Jun–Nov 2024</p>
                  <p className="text-foreground/80">Built and maintained websites using HTML, CSS, JavaScript, PHP, WordPress, contributing to real-world client projects and honing development best practices.</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-headline">WordPress Developer <span className="text-primary">@ Mike Hairstylist</span></h3>
                  <p className="text-sm text-muted-foreground mb-2">Jan 2024</p>
                  <p className="text-foreground/80">Built a responsive WordPress landing page to showcase services, optimized for usability and mobile devices.</p>
                </div>
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
