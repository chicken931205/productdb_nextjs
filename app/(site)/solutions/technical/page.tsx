import React from "react";
import ProductHeader from "@/components/solutions/technical-components/hero-section";
import WfSection from "@/components/solutions/technical-components/wf-section";
import CsolSection from "@/components/solutions/technical-components/csol-section";
import SalesProblemSection from "@/components/solutions/technical-components/sales-problem-section";
import Pricing from "@/components/solutions/technical-components/sales-software";
import CustomerSupport from "@/components/solutions/technical-components/customer-suport-section";
import CustomerSales from "@/components/solutions/technical-components/customer-sales-section";
import AwardSection from "@/components/solutions/technical-components/sales-products-award";
import SalesConnection from "@/components/solutions/technical-components/sales-hub-connection";
import FAQ from "@/components/solutions/technical-components/faq-section";
import CustomerUse from "@/components/solutions/technical-components/customer-use-sales-hub";
import ContentSection from "@/components/solutions/technical-components/content-section";
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
