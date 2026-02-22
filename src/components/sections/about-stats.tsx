"use client";
import { useEffect, useState } from 'react';

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const startTime = Date.now();
    function animate() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    }
    animate();
    // eslint-disable-next-line
  }, [target]);
  return count;
}

export default function AboutStats() {
  const projects = useCountUp(50);
  const rating = useCountUp(49); // 4.9 * 10 for decimal
  const years = useCountUp(2);
  const satisfaction = useCountUp(100);

  return (
    <section className="py-8 sm:py-12 bg-background/80">
      <div className="container mx-auto flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-primary">{projects}+</span>
          <span className="text-muted-foreground text-sm md:text-base mt-1">Projects Completed</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-primary">{(rating / 10).toFixed(1)}<span className="text-2xl">★</span></span>
          <span className="text-muted-foreground text-sm md:text-base mt-1">Average Rating</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-primary">{years}+</span>
          <span className="text-muted-foreground text-sm md:text-base mt-1">Years Experience</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-4xl md:text-5xl font-bold text-primary">{satisfaction}%</span>
          <span className="text-muted-foreground text-sm md:text-base mt-1">Client Satisfaction</span>
        </div>
      </div>
    </section>
  );
}
