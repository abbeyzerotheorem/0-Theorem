
"use client";

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Github, ExternalLink, Dribbble } from 'lucide-react';
import Link from 'next/link';


const allProjects = [
  {
    id: "portfolio-1",
    title: "MovieRec",
    category: "Web Dev",
    imageUrl: "/projects/MovieRec.jpg",
    imageHint: "abstract network",
    width: 800,
    height: 600,
    description: "I built a robust, full-stack streaming discovery platform utilizing Next.js 14 to leverage Server-Side Rendering (SSR), ensuring instant page loads and SEO optimization.",
    testimonial: "A production-ready entertainment hub that prioritizes speed and security. By integrating Swagger, I ensured the backend is fully documented for future scalability, while the TypeScript codebase remains maintainable and type-safe, drastically reducing runtime errors.",
    githubUrl: "https://github.com/abbeyzerotheorem/MOVIEREC",
    liveUrl: "https://movierecs-iota.vercel.app/home",
    dribbbleUrl: "#",
  },
  {
    id: "portfolio-2",
    title: "Fusion Hair",
    category: "UI/UX",
    imageUrl: "/projects/fusion-salon.jpg",
    imageHint: "web dashboard",
    width: 800,
    height: 600,
    description: "I designed a high-contrast, dark-mode landing page to position the studio as a high-end, modern establishment. Used a sophisticated dark palette with gold accents to evoke luxury and immediate brand trust.",
    testimonial: "A cohesive, high-conversion landing page that bridges the gap between digital discovery and physical appointments. The design moves away from the generic salon look and creates a distinct, memorable brand experience that justifies a premium price point",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://www.figma.com/design/uux927lwyYIpXhxDkv4Hib/Fusion-Hair-Salon?m=auto&t=smeGoen6ellkhhy8-6",
  },
  {
    id: "portfolio-3",
    title: "Goodyear Footwear – High-Urgency Retail Campaign",
    category: "Branding",
    imageUrl: "/projects/GoodyearFootwear.jpg",
    imageHint: "mobile interface",
    width: 800,
    height: 600,
    description: "I developed a dual-concept promotional campaign focused on maximum legibility and visual dominance. Utilized high-quality product masking to make the footwear pop off the canvas, creating a 3D effect that draws the eye immediately to the product.",
    testimonial: "A battle-tested marketing asset designed for conversion. By providing variations, I gave the client a toolkit for data-driven marketing rather than just a single static image. This approach minimizes ad fatigue and maximizes the ROI of the campaign spend.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://dribbble.com/shots/27080856-Goodyear-Footwear-High-Urgency-Retail-Campaign?utm_source=Clipboard_Shot&utm_campaign=abbey0&utm_content=Goodyear%20Footwear%20%E2%80%93%20High-Urgency%20Retail%20Campaign&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=abbey0&utm_content=Goodyear%20Footwear%20%E2%80%93%20High-Urgency%20Retail%20Campaign&utm_medium=Social_Share",
  },
  {
    id: "portfolio-4",
    title: "Mike Hairstylist – Service-Commerce & Booking Platform",
    category: "Web Dev",
    imageUrl: "/projects/mike-barber.png",
    imageHint: "wordpress",
    width: 800,
    height: 1000,
    description: "I developed a custom-tailored WordPress environment designed for high conversion and local SEO dominance.Implemented a dual-action CTA (Book Appointment / WhatsApp) to capture both high-intent users and those needing a quick consultation.",
    testimonial: "A robust, professional digital headquarters that bridges the gap between social media discovery and a chair appointment. By moving the business from a basic landing page to a functional service platform, I provided the client with a 24/7 automated booking assistant.",
    githubUrl: "#",
    liveUrl: "https://mikehairstylist.lovestoblog.com/?i=1",
    dribbbleUrl: "#",
  },
  {
    id: "portfolio-5",
    title: "Nexus Games",
    category: "UI/UX",
    imageUrl: "/projects/GameHaven.png",
    imageHint: "mobile app design",
    width: 800,
    height: 800,
    description: "I designed a multi-layered discovery portal that prioritizes visual storytelling and intuitive navigation. Used a deep-sea monochromatic dark theme to allow vibrant game cover art to serve as the primary visual driver, ensuring the UI recedes and the content pops.",
    testimonial: "A streamlined, gamer-centric storefront that balances aesthetic immersion with functional utility. The design architecture is built to handle dynamic content scaling, ensuring that as the library grows, the user experience remains fast, focused, and focused on conversion.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://www.figma.com/design/mWbitc0nyowes01pcynivS/GAMEHAVEN?m=auto&t=ixDWGYqc6VAzSih6-6",
  },
  {
    id: "portfolio-6",
    title: "Project Zeta",
    category: "Branding",
    imageUrl: "/projects/choco-croissant.jpg",
    imageHint: "brand guidelines",
    width: 800,
    height: 600,
    description: "I designed a high-impact promotional flyer centered on sensory design. Instead of a whole croissant, I utilized a break-apart composite to showcase the texture and filling, creating an immediate psychological craving. Structured the layout using the F-pattern to ensure the eye moves from the bold headline (Hotter, Better, Tastier!) directly to the price point and finally to the Call to Action (CTA).",
    testimonial: "A versatile marketing asset optimized for Instagram and Facebook ads. The design balances artistic flair with aggressive sales psychology, ensuring the product stands out in a feed and drives immediate customer inquiries via the prominent contact footer.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://dribbble.com/shots/27079745-ChocoCroissant-High-Conversion-Social-Media-Creative?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=abbey0&utm_content=ChocoCroissant%20%E2%80%93%20High-Conversion%20Social%20Media%20Creative&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=abbey0&utm_content=ChocoCroissant%20%E2%80%93%20High-Conversion%20Social%20Media%20Creative&utm_medium=Social_Share",
  },
  
];

const filters = ["All", "Web Dev", "UI/UX", "Branding"];

const PortfolioItem = ({ project, onOpen }: { project: (typeof allProjects)[0], onOpen: (project: (typeof allProjects)[0]) => void }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="group relative cursor-pointer"
        onClick={() => onOpen(project)}
    >
        <div className="overflow-hidden rounded-lg relative aspect-[4/3]">
            <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                data-ai-hint={project.imageHint}
                className="object-cover transform transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:brightness-90"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
            <p className="text-sm font-bold text-secondary">{project.category}</p>
            <h3 className="text-2xl font-bold font-headline text-white mt-1">{project.title}</h3>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className="h-16 w-16 bg-background/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">View</div>
        </div>
    </motion.div>
);

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<(typeof allProjects)[0] | null>(null);

  const filteredProjects = useMemo(() =>
    activeFilter === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );
  
  const handleOpen = (project: (typeof allProjects)[0]) => {
    setSelectedProject(project);
  };
  
  const handleClose = () => {
    setSelectedProject(null);
  };

  const handleNext = () => {
    if (selectedProject) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
      const nextIndex = (currentIndex + 1) % filteredProjects.length;
      setSelectedProject(filteredProjects[nextIndex]);
    }
  }

  const handlePrev = () => {
     if (selectedProject) {
      const currentIndex = filteredProjects.findIndex(p => p.id === selectedProject.id);
      const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
      setSelectedProject(filteredProjects[prevIndex]);
    }
  }


  return (
    <section id="portfolio-gallery" className="py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-12">
          <div className="bg-card/50 p-2 rounded-full flex flex-wrap justify-center gap-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                onClick={() => setActiveFilter(filter)}
                className="rounded-full px-6"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
                {filteredProjects.map((project) => (
                    <PortfolioItem key={project.id} project={project} onOpen={handleOpen} />
                ))}
            </AnimatePresence>
        </motion.div>

      </div>
      
        <AnimatePresence>
            {selectedProject && (
                <Dialog open={!!selectedProject} onOpenChange={(open) => !open && handleClose()}>
                     <DialogContent className="max-w-6xl w-full p-0 bg-card border-border overflow-hidden motion-safe:animate-scale-in">
                        <DialogHeader className="sr-only">
                          <DialogTitle>{selectedProject.title}</DialogTitle>
                          <DialogDescription>
                            A detailed view of the project.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[90vh]">
                            <div className="relative h-[300px] md:h-auto bg-black">
                                <Image
                                    src={selectedProject.imageUrl}
                                    alt={selectedProject.title}
                                    fill
                                    sizes="(max-width: 767px) 100vw, 50vw"
                                    className="object-contain"
                                />
                            </div>
                            <div className="p-8 md:p-12 overflow-y-auto">
                                <h2 className="text-3xl font-headline font-bold text-primary">{selectedProject.title}</h2>
                                <p className="text-sm text-muted-foreground mt-1">{selectedProject.category}</p>

                                <div className="flex items-center gap-4 mt-4">
                                    {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                                        <Link href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Github className="w-6 h-6" />
                                            <span className="sr-only">GitHub</span>
                                        </Link>
                                    )}
                                    {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                                        <Link href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <ExternalLink className="w-6 h-6" />
                                            <span className="sr-only">Live Site</span>
                                        </Link>
                                    )}
                                    {selectedProject.dribbbleUrl && selectedProject.dribbbleUrl !== "#" && (
                                        <Link href={selectedProject.dribbbleUrl} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                            <Dribbble className="w-6 h-6" />
                                            <span className="sr-only">Dribbble</span>
                                        </Link>
                                    )}
                                </div>

                                <div className="mt-8 space-y-6 text-foreground/90">
                                    <p className="text-muted-foreground">{selectedProject.description}</p>
                                    {selectedProject.testimonial && (
                                         <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
                                            "{selectedProject.testimonial}"
                                        </blockquote>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button variant="ghost" size="icon" onClick={handleClose} className="absolute top-4 right-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/70 text-white">
                            <X className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handlePrev} className="absolute top-1/2 -translate-y-1/2 left-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/70 text-white">
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                        <Button variant="ghost" size="icon" onClick={handleNext} className="absolute top-1/2 -translate-y-1/2 right-4 rounded-full h-10 w-10 bg-black/50 hover:bg-black/70 text-white">
                            <ArrowRight className="h-6 w-6" />
                        </Button>
                    </DialogContent>
                </Dialog>
            )}
        </AnimatePresence>
    </section>
  );
}
