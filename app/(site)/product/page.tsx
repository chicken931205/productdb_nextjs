import Content from '@/components/product/content';
import Classification from '@/components/product/classification';
import Hero from '@/components/product/hero';
import Overview from '@/components/product/overview';
import TeamCollaborate from '@/components/product/team-collaborate';
import Docs from '@/components/product/docs';
import Reporting from '@/components/product/reporting';
import Time from '@/components/product/time';
import AllFeatures from '@/components/product/all-features';
import React from 'react';
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return (
    <div>
      <Hero/>
      <Overview/>
      <Classification/>
      <Content/>
      <TeamCollaborate/>
      <Docs/>
      <Reporting/>
      <Time/>
      <AllFeatures/>
    </div>
  )
}

export default page
