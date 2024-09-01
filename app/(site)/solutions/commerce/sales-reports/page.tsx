import Content from "@/components/sales-reports/content-section";
import FAQ from "@/components/sales-reports/faq-section";
import Feature from "@/components/sales-reports/feature-section";
import Hero from "@/components/sales-reports/hero";
import Resourses from "@/components/sales-reports/related-resouses-section";
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
