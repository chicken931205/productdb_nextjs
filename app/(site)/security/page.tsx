import Hero from "@/components/security/hero";
import SecurityTypes from "@/components/security/security-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GlobeImg from '/public/security/circle.svg'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog Page - ProductDB SaaS Boilerplate",
  description: "This is Blog page for ProductDB Pro",
  // other metadata
};


function page() {
  return (
    <div className=" ">
      <div className=" max-w-2xl w-full absolute z-1 right-0">
        <Image src={GlobeImg} alt="" width={700} height={700} className="absolute top-20 z-1 opacity-50 " />
      </div>
    <div className="mx-auto max-w-c-1390 pt-20 md:pt-30">
      <Hero />
      <SecurityTypes />
    </div>
    </div>
  );
}

export default page;
