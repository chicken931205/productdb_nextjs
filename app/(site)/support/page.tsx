import React from "react";
import Contact from "@/components/Home-old/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - ProductDB SaaS Boilerplate",
  description: "This is Support page for ProductDB Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
