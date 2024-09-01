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
          src="/sales-images/hero/sales-hub.webp"
          alt="sales-header-image"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex w-full flex-grow flex-col px-4 py-4 md:w-1/2 md:py-8 lg:pr-40">
        <div className="mb-6 flex w-full gap-3">
        <svg className="h-7 w-7 text-primary" viewBox="0 0 50 50">
        <path fill="#007aff" d="M35.7 5.9c-3 4.5-7.7 7.7-12.9 8.6l-3.8.7v14.6l3.8.7c5.4 1 8.9 3.4 12.8 8.8 1.9 2.7 4 4.7 4.7 4.4.6-.2 1.5-2.1 2-4.3 1-4.6.4-33.1-.7-35.7-1.3-2.7-3.1-2-5.9 2.2zM3.6 16.6c-2.1 2.1-2.1 9.7 0 11.8 1 1.1 3.4 1.6 7.5 1.6H17V15h-5.9c-4.1 0-6.5.5-7.5 1.6zM45 23.5c0 1.9.4 3.5.9 3.5 1.3 0 2.3-3.4 1.5-5.4-1.1-2.8-2.4-1.8-2.4 1.9zM7.1 33.2c.1.7.8 4.2 1.7 7.8l1.7 6.5 4.3.3c5.1.4 6.2-1.3 3.8-6.2-.9-1.9-1.6-4.8-1.6-6.5 0-3.1-.1-3.1-5-3.1-3.4 0-5 .4-4.9 1.2z"/>
        </svg>
          <h4 className="text-xl  font-bold text-gray-800 dark:text-white">
            Marketing
          </h4>
        </div>
        <div className="mb-6 w-full">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white ">
          Get marketing, on all layers
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
