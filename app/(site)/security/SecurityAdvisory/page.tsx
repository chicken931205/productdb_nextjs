import Hero from '@/components/SecurityAdvisory/hero';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};
function page() {
  return <div className='pt-11 lg:mt-16 max-w-c-1390 mx-auto'>
    <Hero/>
  </div>;
}

export default page
