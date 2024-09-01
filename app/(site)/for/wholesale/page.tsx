
import Features from "@/components/wholeSale/features";
import Hero from "@/components/wholeSale/hero";
import Templates from "@/components/wholeSale/templates";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return (
    <section className="mx-auto max-w-c-1390 px-5 py-20 lg:py-40">
      <Hero/>
      <Features />
      <Templates/>
    </section>
  );
}

export default page;
