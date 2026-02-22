
import ServicesHero from '@/components/sections/services-hero';
import ServicesDeepDive from '@/components/sections/services-deep-dive';
import TechStack from '@/components/sections/tech-stack';
import ProcessRefresher from '@/components/sections/process-refresher';
import GoogleReviews from '@/components/sections/google-reviews';
import Cta from '@/components/sections/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What I Do',
  description: 'Web Development, WordPress, and UI/UX Design services. Building modern web solutions that are visually appealing, technically solid, and tailored to your goals.',
};

export default function ServicesPage() {
  return (
    <div className="services-page-gradient">
      <ServicesHero />
      <ServicesDeepDive />
      <TechStack />
      <ProcessRefresher />
      <GoogleReviews />
      <Cta />
    </div>
  );
}
