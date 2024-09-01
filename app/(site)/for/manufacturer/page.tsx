import Features from '@/components/manufacturer/feature';
import Hero from '@/components/manufacturer/hero';
import FeaturesDisplay from '@/components/manufacturer/section';
import Teams from '@/components/manufacturer/teams';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fabrikantoplossingen bij ProductDB: stroomlijn uw bedrijf",
  description: "Ontdek de oplossingen van ProductDB voor producenten. Verhoog efficiëntie en stroomlijn processen met onze gespecialiseerde tools. Begin nu met optimaliseren!",
  // other metadata
};

function page() {
  return (
    <>
      <div className="mx-auto max-w-c-1390">
        <Hero />
      </div>
      <div className='border-t border-gray-400 bg-[#fbfbfd] dark:bg-black'>

        <div className="mx-auto max-w-c-1390">

          <FeaturesDisplay />
          <Features />
          <Teams />
        </div>
      </div>
    </>
  );
}

export default page
