import RequestForm from "@/components/demo-request";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

function page() {
  return (
    <div className=" md:pt-32">
      <RequestForm />
    </div>
  );
}

export default page;
