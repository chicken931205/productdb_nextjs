import { Metadata } from "next";
import Hero from "@/components/Home-old/Hero";
import Brands from "@/components/Home-old/Brands";
import Feature from "@/components/Home-old/Features";
import About from "@/components/Home-old/About";
import FeaturesTab from "@/components/Home-old/FeaturesTab";
import FunFact from "@/components/Home-old/FunFact";
import Integration from "@/components/Home-old/Integration";
import CTA from "@/components/Home-old/CTA";
import FAQ from "@/components/Home-old/FAQ";
import Pricing from "@/components/Home-old/Pricing";
import Contact from "@/components/Home-old/Contact";
import Blog from "@/components/Home-old/Blog";
import Testimonial from "@/components/Home-old/Testimonial";
import type { Viewport } from 'next'
 
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8f8' },
    { media: '(prefers-color-scheme: dark)', color: '#212529' },
  ],
}

export const metadata: Metadata = {
  title: "ProductDB - Connecting Companies",
  description: "No more excel orders with straightforward business software.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
