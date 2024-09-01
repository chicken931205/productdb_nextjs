import React from "react";
import ProductHeader from "@/components/solutions/operations-components/hero-section";
import WfSection from "@/components/solutions/operations-components/wf-section";
import CsolSection from "@/components/solutions/operations-components/csol-section";
import SalesProblemSection from "@/components/solutions/operations-components/sales-problem-section";
import Pricing from "@/components/solutions/operations-components/sales-software";
import CustomerSupport from "@/components/solutions/operations-components/customer-suport-section";
import CustomerSales from "@/components/solutions/operations-components/customer-sales-section";
import AwardSection from "@/components/solutions/operations-components/sales-products-award";
import SalesConnection from "@/components/solutions/operations-components/sales-hub-connection";
import FAQ from "@/components/solutions/operations-components/faq-section";
import CustomerUse from "@/components/solutions/operations-components/customer-use-sales-hub";
import ContentSection from "@/components/solutions/operations-components/content-section";
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
