import Features from "@/components/community/feature";
import Hero from "@/components/community/hero";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return (
    <div className="mx-auto max-w-c-1390 pt-20 lg:pt-30">
      <Hero />
      <Features />
    </div>
  );
}

export default page;
