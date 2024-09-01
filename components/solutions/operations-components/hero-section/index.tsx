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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="w-7 h-7">
                    <path fill="#007aff" d="M5.1 1.4c-6.7 3.7-6.5 14.3.4 17.4 2.7 1.2 2.7 1.3 1 3.2-2.1 2.3-1.3 3.9 1 2 1.3-1.1 1.5-.8 1.5 2.4V30H0v20h20V30h-9v-3.6c0-3.2.2-3.5 1.5-2.4 2.3 1.9 3.1.3 1.1-1.9-1.7-1.9-1.7-2 1.2-3.5 1.6-.8 3.5-2.9 4.2-4.6 1-2.5 1.8-3 4.7-3 3.1 0 3.4.2 2.3 1.5-2.1 2.5-.2 3 2.3.7l2.3-2.2 4.2 4.3c3.5 3.5 4.2 5 4.2 8.1 0 3.3-.2 3.7-1.5 2.6-2.3-1.9-3.1-.3-1 2 1.7 1.9 1.7 2-1 3.2-2.9 1.3-5.5 5.5-5.5 8.8 0 5.1 4.9 10 10 10s10-4.9 10-10c0-3.3-2.6-7.5-5.5-8.8-2.7-1.2-2.7-1.3-1-3.2 2.1-2.3 1.3-3.9-1-2-1.3 1.1-1.5.7-1.5-2.6 0-3.2.7-4.6 4.7-8.6l4.8-4.8-5.3-5.2L40-.5l-4.8 4.8L30.4 9l-2.2-2.2c-2.3-2.4-4.3-1.8-2.2.7 1.1 1.3.8 1.5-2.3 1.5-2.9 0-3.7-.5-4.7-3C16.8.8 10.2-1.4 5.1 1.4z" />
                  </svg>
          <h4 className="text-xl  font-bold text-gray-800 dark:text-white">
            Operations
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
