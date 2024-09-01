import React from "react";
import ProductHeader from "@/components/solutions/commerce-components/hero-section";
import WfSection from "@/components/solutions/commerce-components/wf-section";
import CsolSection from "@/components/solutions/commerce-components/csol-section";
import SalesProblemSection from "@/components/solutions/commerce-components/sales-problem-section";
import Pricing from "@/components/solutions/commerce-components/sales-software";
import CustomerSupport from "@/components/solutions/commerce-components/customer-suport-section";
import CustomerSales from "@/components/solutions/commerce-components/customer-sales-section";
import AwardSection from "@/components/solutions/commerce-components/sales-products-award";
import SalesConnection from "@/components/solutions/commerce-components/sales-hub-connection";
import FAQ from "@/components/solutions/commerce-components/faq-section";
import CustomerUse from "@/components/solutions/commerce-components/customer-use-sales-hub";
import ContentSection from "@/components/solutions/commerce-components/content-section";
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
