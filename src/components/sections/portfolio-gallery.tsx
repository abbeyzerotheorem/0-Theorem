
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
    imageUrl: "https://picsum.photos/seed/p1/800/600",
    imageHint: "abstract network",
    width: 800,
    height: 600,
    description: "A scalable and performant web application for data visualization, built with Next.js and D3.js. The interactive dashboard design led to a 150% increase in user engagement and an 80% reduction in data processing time.",
    testimonial: "Zero Theorem delivered a product that exceeded all our expectations.",
    githubUrl: "https://github.com/abbeyzerotheorem/MOVIEREC",
    liveUrl: "https://movierecs-iota.vercel.app/home",
    dribbbleUrl: "#",
  },
  {
    id: "portfolio-2",
    title: "Fusion Hair",
    category: "UI/UX",
    imageUrl: "https://picsum.photos/seed/p2/800/600",
    imageHint: "web dashboard",
    width: 800,
    height: 600,
    description: "A complete UI/UX redesign for a complex enterprise software. Through extensive user research and a new design system, we streamlined the user experience, resulting in a 75% reduction in user errors and a 90% user satisfaction score.",
    testimonial: "The team's dedication and attention to detail were phenomenal.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://dribbble.com/abbey0",
  },
  {
    id: "portfolio-3",
    title: "Project Gamma",
    category: "Branding",
    imageUrl: "https://picsum.photos/seed/p3/800/600",
    imageHint: "mobile interface",
    width: 800,
    height: 600,
    description: "A comprehensive branding project for a new startup. We developed a unique brand strategy, logo, and visual language that resonated with the target audience, helping them secure $2M in seed funding.",
    testimonial: "I was impressed by their streamlined process and constant communication.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://dribbble.com/abbey0",
  },
  {
    id: "portfolio-4",
    title: "Project Delta",
    category: "Web Dev",
    imageUrl: "https://picsum.photos/seed/p4/800/1000",
    imageHint: "data visualization",
    width: 800,
    height: 1000,
    description: "A high-traffic e-commerce platform built with a custom Next.js frontend and Shopify's API. The solution provides maximum flexibility and performance, handling 10,000 concurrent users and boosting conversion rates by 20%.",
    testimonial: "They are not just a vendor, but a true partner in our success.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "#",
  },
  {
    id: "portfolio-5",
    title: "Project Epsilon",
    category: "UI/UX",
    imageUrl: "https://picsum.photos/seed/p5/800/800",
    imageHint: "mobile app design",
    width: 800,
    height: 800,
    description: "A mobile fitness app designed for motivation and ease of use. By implementing gamification and a clean, minimalist UI, the app achieved 1 million downloads in its first year and a 4.9-star rating.",
    testimonial: "Their expertise in both design and engineering is unparalleled.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://dribbble.com/abbey0",
  },
  {
    id: "portfolio-6",
    title: "Project Zeta",
    category: "Branding",
    imageUrl: "https://picsum.photos/seed/p6/800/600",
    imageHint: "brand guidelines",
    width: 800,
    height: 600,
    description: "A bold rebranding for a legacy company to connect with a younger audience. We created a modern brand identity with a vibrant color palette and a fresh tone of voice, leading to a 300% increase in social media engagement.",
    testimonial: "They truly understood our vision and brought it to life with incredible skill.",
    githubUrl: "#",
    liveUrl: "#",
    dribbbleUrl: "https://dribbble.com/abbey0",
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
