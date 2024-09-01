import Features from '@/components/classification/feature';
import Hero from '@/components/classification/hero';
import More from '@/components/classification/more';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Product Management Software die samenwerkt | ProductDB",
  description: "ProductDB's productclassificatie vereenvoudigt het organiseren van uw assortiment, waardoor u producten efficiënt kunt categoriseren en beheren, allemaal vanuit één centraal systeem!",
  // other metadata
};
function page() {
  return (
    <div>
      <Hero/>
      <Features/>
      <More/>
    </div>
  )
}

export default page
