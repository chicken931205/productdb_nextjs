import Hero from '@/components/onboarding/hero';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return <div className="mx-auto max-w-c-1390">
    <Hero/>
  </div>;
}

export default page
