"use client"

import { useEffect } from 'react';

export default function GoogleReviews() {
  useEffect(() => {
    // Load the Sociablekit widget script
    const script = document.createElement('script');
    script.src = 'https://widgets.sociablekit.com/google-business-profile/widget.js';
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
            Trusted by Our Clients
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our customers say on Google
          </p>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div 
              className="sk-ww-google-business-profile rounded-lg shadow-lg" 
              data-embed-id="25656752"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
