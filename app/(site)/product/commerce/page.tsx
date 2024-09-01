import Features from '@/components/commerce/features';
import Hero from '@/components/commerce/hero';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return (
    <section className='max-w-c-1390 mx-auto py-24 md:py-40 px-5'>
     <Hero/>
     <Features/>
    </section>
  )
}

export default page
