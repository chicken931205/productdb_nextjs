import Content from "@/components/product-images/content-section";
import FAQ from "@/components/product-images/faq-section";
import Feature from "@/components/product-images/feature-section";
import Hero from "@/components/product-images/hero";
import Resourses from "@/components/product-images/related-resouses-section";
import React from "react";

export default function page() {
  return (
    <div className="mt-20">
      <Hero />
      <Content />
      <Resourses />
      <FAQ />
      <Feature/>
    </div>
  );
}
