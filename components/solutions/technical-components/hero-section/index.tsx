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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" className="h-7 w-7">
                    <path fill="#007aff" d="M1.2 1.2c-1.5 1.5 2.4 9.2 4.2 8.5.7-.3 4.7 2.9 8.9 7.1 6.2 6.2 7.5 8.1 7.1 9.9-.5 1.8-.1 2.5 2 3.3 1.5.5 2.9 1.8 3.3 2.7C27.8 36 42.3 50 44.6 50c2.5 0 5.4-2.9 5.4-5.4 0-2.2-13.6-16.5-16.8-17.7-1.2-.5-2.7-2-3.2-3.5-.8-2.1-1.5-2.5-3.3-2-1.8.4-3.7-.9-9.9-7.1-4.2-4.2-7.4-8.2-7.1-8.9.7-1.8-7-5.7-8.5-4.2zM38 36.5c2.9 3 5.1 5.8 4.7 6.2-.8.7-11.7-9.5-11.7-10.9 0-1.8 1.8-.5 7 4.7z"/>
                    <path fill="#007aff" d="M31.8 2.1c-4.7 2.4-6.2 5.2-5.4 9.7.4 2.6.1 4.1-1.1 5.4-1.5 1.7-1.4 1.8 1.3 1.8 3.5 0 5.4 1.6 5.4 4.4 0 1.5.3 1.7 1.2.8.7-.7 2.7-.9 5.4-.5 3.6.5 4.6.2 6.7-2 2.9-2.8 5.3-9.7 4.3-12.3-.6-1.5-1.1-1.3-4.1 1.6L42 14.4l-3.2-3.2L35.6 8l3.2-3.3c1.8-1.8 2.9-3.6 2.6-4-1.3-1.3-5.9-.6-9.6 1.4zM15.6 26.9c-2 2.1-3.9 3.1-5.9 3.1-3.9 0-6.4 1.5-8.2 5-2.4 4.7-1.9 7.8 2 11.7 3.2 3.2 3.9 3.5 7.8 3 5.2-.7 8.7-4.4 8.7-9.1 0-2 .8-4 2-5.1 2.5-2.3 2.5-2.8-.2-4-1.5-.7-2.5-2.1-2.8-4.3l-.5-3.4-2.9 3.1zm-2.2 10c3.6 4-2.3 9.8-6.2 5.9-2-2-1.4-5.8 1.1-6.8 3.1-1.2 3.2-1.2 5.1.9z" />
          </svg>
          <h4 className="text-xl  font-bold text-gray-800 dark:text-white">
            Technical Hub
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
