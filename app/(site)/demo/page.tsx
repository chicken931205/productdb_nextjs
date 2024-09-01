import Feature from "@/components/demo/feature";
import Hero from "@/components/demo/hero";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return (
    <div className="pt-20 md:pt-32">
      <Hero />
      <Feature />
    </div>
  );
}

export default page;
