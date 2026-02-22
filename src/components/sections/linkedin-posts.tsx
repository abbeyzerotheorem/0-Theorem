"use client"

import { useEffect } from 'react';

export default function LinkedInPosts() {
  useEffect(() => {
    // Load the Sociablekit widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/linkedin-profile-posts/widget.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-2">
            Latest from LinkedIn
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay updated with my professional insights and industry knowledge
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div 
              className="sk-ww-linkedin-profile-post rounded-lg shadow-lg" 
              data-embed-id="25656756"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
