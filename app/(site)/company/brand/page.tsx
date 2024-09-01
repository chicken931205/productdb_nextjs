import Feature from "@/components/brand-downloads/features";
import Hero from "@/components/brand-downloads/hero";
import Properties from "@/components/brand-downloads/properties";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

export default function page() {
  return (
    <div className="pt-30">
      <Hero />
      <Properties />
      <Feature/>
    </div>
  );
}
