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
                    <path fill="#007aff"d="M8.8 3.1C7.2 4 7 6.2 7 25c0 19.7.1 21 1.9 22 2.6 1.3 29.6 1.3 32.2 0 1.8-1 1.9-2.3 1.9-22s-.1-21-1.9-22c-2.5-1.3-30-1.3-32.3.1zM40 14.5V23H10V6h30v8.5zm-7.2 12.2c-4.3.2-11.3.2-15.5 0-4.3-.1-.8-.3 7.7-.3s12 .2 7.8.3zm-1.5 4c-3.5.2-9.1.2-12.5 0-3.5-.2-.7-.3 6.2-.3s9.7.1 6.3.3zm-1.5 4c-2.7.2-6.9.2-9.5 0-2.7-.2-.5-.3 4.7-.3s7.4.1 4.8.3zM40 40.5V44H10v-7h30v3.5z"/>
                    <path fill="#007aff"d="m11.2 14.2.3 7.3h27l.3-7.3.3-7.2H10.9l.3 7.2zM28.5 11c0 .8-.8 1.6-1.7 1.8-1.3.2-1.8-.3-1.8-1.8s.5-2 1.8-1.8c.9.2 1.7 1 1.7 1.8zm-5 3.7 3.3 3.8 2.6-2.4c2.5-2.4 2.6-2.4 4.7-.5 1.1 1 2.5 2.8 3 3.9.6 1.1-.3.5-1.9-1.3L32.3 15l-2.5 2c-3.5 2.7-3.8 2.6-7.1-1.5l-2.9-3.6-3.6 4.5c-2 2.5-3.8 4.3-4 4.1-.4-.4 6.9-9.5 7.7-9.5.2 0 1.9 1.7 3.6 3.7z"/>
                    <path fill="#007aff"d="M26 11c0 .5.5 1 1 1 .6 0 1-.5 1-1 0-.6-.4-1-1-1-.5 0-1 .4-1 1zM11 40.5V43h28v-5H11v2.5z" />
          </svg>
          <h4 className="text-xl  font-bold text-gray-800 dark:text-white">
            Content
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
