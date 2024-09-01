import Hero from "@/components/our-story/hero";
import Team from "@/components/our-story/team";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return <div className="pt-20 md:pt-30">
    <Hero/>
    <Team/>
  </div>;
}

export default page;
