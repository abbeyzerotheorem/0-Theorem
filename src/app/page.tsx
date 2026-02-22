
import HeroSection from '@/components/sections/hero';
import TrustBar from '@/components/sections/trust-bar';
import Services from '@/components/sections/services';
import Portfolio from '@/components/sections/portfolio';
import Process from '@/components/sections/process';
import Testimonials from '@/components/sections/testimonials';
import GoogleReviews from '@/components/sections/google-reviews';
import LinkedInPosts from '@/components/sections/linkedin-posts';
import Cta from '@/components/sections/cta';
import { Metadata } from 'next';
import AboutPreview from '@/components/sections/about-preview';

export const metadata: Metadata = {
  title: {
    template: '%s | Zero Theorem',
    default: 'Zero Theorem | Web Developer & Designer Studio',
  },
  description: 'Crafting responsive, user-focused websites and apps for startups and small businesses.',
  openGraph: {
    title: 'Zero Theorem | Web Developer & Designer Studio',
    description: 'Crafting responsive, user-focused websites and apps for startups and small businesses.',
    url: 'https://zero-theorem.vercel.app/', // Replace with your actual domain
    siteName: 'Zero Theorem',
    images: [
      {
        url: 'https://i.pinimg.com/1200x/78/a6/97/78a6977314662fe64f69898c4055c722.jpg', // Replace with your actual OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero Theorem | Web Developer & Designer Studio',
    description: 'Crafting responsive, user-focused websites and apps for startups and small businesses.',
     images: ['https://i.pinimg.com/1200x/78/a6/97/78a6977314662fe64f69898c4055c722.jpg'], // Replace with your actual Twitter image
  },
  icons: {
    icon: '/zero-theorem-blue.svg',
    shortcut: '/zero-theorem-blue.svg',
    apple: '/zero-theorem-blue.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Services />
      <AboutPreview />
      <Portfolio />
      <Process />
      <Testimonials />
      <GoogleReviews />
      <LinkedInPosts />
      <Cta />
    </>
  );
}
