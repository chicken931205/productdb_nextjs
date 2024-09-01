import React from "react";
import ProductHeader from "@/components/solutions/content-components/hero-section";
import WfSection from "@/components/solutions/content-components/wf-section";
import CsolSection from "@/components/solutions/content-components/csol-section";
import SalesProblemSection from "@/components/solutions/content-components/sales-problem-section";
import Pricing from "@/components/solutions/content-components/sales-software";
import CustomerSupport from "@/components/solutions/content-components/customer-suport-section";
import CustomerSales from "@/components/solutions/content-components/customer-sales-section";
import AwardSection from "@/components/solutions/content-components/sales-products-award";
import SalesConnection from "@/components/solutions/content-components/sales-hub-connection";
import FAQ from "@/components/solutions/content-components/faq-section";
import CustomerUse from "@/components/solutions/content-components/customer-use-sales-hub";
import ContentSection from "@/components/solutions/content-components/content-section";
export default function page() {
  return (
    <div className="w-full">
      <ProductHeader />
      <CsolSection />
      <SalesProblemSection />
      <Pricing />
      <CustomerSupport />
      <CustomerSales />
      <CustomerUse />
      <AwardSection />
      <SalesConnection />
      <FAQ />
      <ContentSection/>
    </div>
  );
}
