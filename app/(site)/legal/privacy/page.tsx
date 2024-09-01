import PrivacyTemplate from "@/components/privacy/template";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};

export default function page() {
  return <div className="pt-20 lg:pt-30">
    <PrivacyTemplate />
  </div>;
}
