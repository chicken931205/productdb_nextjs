"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FAQItem from "./FaqItem";
import faqData from "./faqData";
import { StarIcon } from "@heroicons/react/20/solid";

export default function ProductHeader() {
  const [activeFaq, setActiveFaq] = useState(0);

  const handleFaqToggle = (id: number) => {
    setActiveFaq(activeFaq === id ? 0 : id);
  };

  return (
    <div className="mx-auto pt-20 flex w-full max-w-7xl  flex-col items-center justify-center md:pt-40 md:flex-row">
      <div className="flex-shrink-0 px-4 py-8 md:w-1/2 md:px-24">
        <Image
          src="/images/sales-images/hero/sales-hub.webp"
          alt="sales-header-image"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex w-full flex-grow flex-col px-4 py-4 md:w-1/2 md:py-8 lg:pr-40">
        <div className="mb-6 flex w-full gap-3">
          <svg className="h-7 w-7 text-primary" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 64 64">
  <path fill="#007aff" d="M44.7 4.6c-.4.4-.7 1.8-.7 3 0 1.7-.7 2.3-2.7 2.6l-2.8.3-.3 9.7c-.2 9-.4 9.8-2.2 9.8-1.7 0-2-.7-2-5.3 0-4.8-.3-5.6-3.8-9l-3.9-3.8-10.9.3-10.9.3v39h29l.3-8.8c.2-7.8.5-8.7 2.2-8.7 1.8 0 2 .9 2.2 9.7l.3 9.8 2.7.3c2.1.3 2.7.9 3 3 .3 2.7.4 2.7 7.8 2.7h7.5v-15H52c-7.4 0-7.5 0-7.8 2.8-.2 1.5-.8 2.7-1.3 2.7s-.9-3.6-.9-8 .4-8 .9-8 1.1 1.2 1.3 2.7c.3 2.8.4 2.8 7.8 2.8h7.5v-15H52c-7.4 0-7.5 0-7.8 2.7-.2 1.6-.8 2.8-1.3 2.8s-.9-3.6-.9-8 .4-8 .9-8 1.1 1.2 1.3 2.7c.3 2.8.4 2.8 7.8 2.8h7.5v-15l-7-.3c-3.9-.1-7.4 0-7.8.4zM28 23c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1zm0 6c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1zm0 6c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1zm0 6c0 .6-3.7 1-9 1s-9-.4-9-1 3.7-1 9-1 9 .4 9 1z"/>
</svg>

          <h4 className="text-xl  font-bold text-gray-800 dark:text-white">
            Product Classification
          </h4>
        </div>
        <div className="mb-6 w-full">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white ">
          the international classification standard for products
          </h1>
        </div>
        <div className="mb-6 flex flex-col   gap-2 md:flex-row">
          <Link
            className="text-md rounded-lg  bg-primary  px-0 py-3 text-center font-medium text-white hover:bg-primaryho focus:outline-none  md:px-5.5  "
            href="#"
          >
            Manufacturer
          </Link>
          <Link
            className="text-md rounded-lg border-2 border-primary px-0 py-3 text-center font-medium text-primary hover:bg-blue-100 focus:outline-none  md:px-5.5  "
            href="#"
          >
            Wholesale & Retail
          </Link>
        </div>
        <div className="mt-8 dark:border dark:border-strokedark dark:bg-gray-800">
          {faqData.map((faq, key) => (
            <FAQItem
              key={key}
              faqData={{ ...faq, activeFaq, handleFaqToggle }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
