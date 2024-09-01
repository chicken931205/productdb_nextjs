import About from '@/components/legal/about';
import Customer from '@/components/legal/customers';
import DataProtection from '@/components/legal/data-protection';
import Hero from '@/components/legal/hero';
import Partner from '@/components/legal/partner';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return (
    <div className='pt-30'>
      <Hero/>
      <Customer/>
      <Partner/>
      <DataProtection/>
      <About/>
    </div>
  )
}

export default page
