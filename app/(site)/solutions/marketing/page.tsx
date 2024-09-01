import React from "react";
import ProductHeader from "@/components/solutions/marketing-components/hero-section";
import WfSection from "@/components/solutions/marketing-components/wf-section";
import CsolSection from "@/components/solutions/marketing-components/csol-section";
import SalesProblemSection from "@/components/solutions/marketing-components/sales-problem-section";
import Pricing from "@/components/solutions/marketing-components/sales-software";
import CustomerSupport from "@/components/solutions/marketing-components/customer-suport-section";
import CustomerSales from "@/components/solutions/marketing-components/customer-sales-section";
import AwardSection from "@/components/solutions/marketing-components/sales-products-award";
import SalesConnection from "@/components/solutions/marketing-components/sales-hub-connection";
import FAQ from "@/components/solutions/marketing-components/faq-section";
import CustomerUse from "@/components/solutions/marketing-components/customer-use-sales-hub";
import ContentSection from "@/components/solutions/marketing-components/content-section";
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
