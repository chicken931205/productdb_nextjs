"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import FAQItem from "./FaqItem";
import faqData from "./faqData";

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
        <svg className="h-7 w-7"><path stroke="#007aff" fill="#007aff"strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.921 17.95A1.026 1.026 0 1 1 9.9 16.9c.571.01 1.028.479 1.021 1.05ZM16.391 17.95a1.026 1.026 0 1 1-1.026-1.05 1.038 1.038 0 0 1 1.026 1.05ZM20.13 7.8h-9.893l-.684 5.6a1.384 1.384 0 0 0 1.368 1.4h6.064c.484-.002.93-.26 1.173-.68l3.142-4.2a1.4 1.4 0 0 0-1.17-2.12v0Z" clipRule="evenodd"/><path fill="#007aff" d="M9.508 7.978a.75.75 0 1 0 1.458-.356l-1.458.356Zm.074-2.86.729-.178V4.94l-.729.179ZM9.432 5l.003-.75h-.003V5Zm-2.614-.75a.75.75 0 0 0 0 1.5v-1.5Zm.545 5.389a.75.75 0 0 0 0-1.5v1.5ZM4.5 8.139a.75.75 0 0 0 0 1.5v-1.5Zm2.864 3.833a.75.75 0 0 0 0-1.5v1.5Zm-.932-1.5a.75.75 0 0 0 0 1.5v-1.5Zm4.534-2.85L10.31 4.94l-1.458.356.655 2.682 1.458-.356ZM10.31 4.94a.905.905 0 0 0-.875-.689l-.006 1.5a.595.595 0 0 1-.575-.453l1.456-.358Zm-.878-.689H6.818v1.5h2.614v-1.5ZM7.363 8.139H4.5v1.5h2.863v-1.5Zm.001 2.333h-.932v1.5h.932v-1.5Z"/></svg>
          <h4 className="text-xl  font-bold text-gray-800 dark:text-white">
            Commerce
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
