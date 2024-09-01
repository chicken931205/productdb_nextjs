import React from "react";
import ProductHeader from "@/components/solutions/productclassification-components/hero-section";
import WfSection from "@/components/solutions/productclassification-components/wf-section";
import CsolSection from "@/components/solutions/productclassification-components/csol-section";
import SalesProblemSection from "@/components/solutions/productclassification-components/sales-problem-section";
import Pricing from "@/components/solutions/productclassification-components/sales-software";
import CustomerSupport from "@/components/solutions/productclassification-components/customer-suport-section";
import CustomerSales from "@/components/solutions/productclassification-components/customer-sales-section";
import AwardSection from "@/components/solutions/productclassification-components/sales-products-award";
import SalesConnection from "@/components/solutions/productclassification-components/sales-hub-connection";
import FAQ from "@/components/solutions/productclassification-components/faq-section";
import CustomerUse from "@/components/solutions/productclassification-components/customer-use-sales-hub";
import ContentSection from "@/components/solutions/productclassification-components/content-section";
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
