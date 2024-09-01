import AlreadyCustomer from "@/components/ProductDB-contact/already-customer";
import Feature from "@/components/ProductDB-contact/feature";
import Hero from "@/components/ProductDB-contact/hero";
import Request from "@/components/ProductDB-contact/leave-a-query";
import Scheduler from "@/components/ProductDB-contact/scheduler";
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
      <Feature/>
      <AlreadyCustomer/>
      <Scheduler/>
      <Request/>
    </div>
  );
}
