"use client";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
const faqs = [
  {
    question: "What is ProductDB’s sales reporting software?",
    answer:"ProductDB’s sales reporting software provides sales teams with real-time performance metrics and customizable reports to track and analyze their sales processes. Because it’s deeply integrated into the ProductDB customer platform, it helps sales managers gain insight into their team's performance, identify trends, and make data-driven decisions."
   },
 

  {
    question:"What makes ProductDB’s sales reporting software so popular?",
    answer: "Because of ProductDB’s unified and centralized Smart CRM, ProductDB’s reporting software makes generating accurate sales reports really simple and fast as it prevents sales teams from having to spend time manually collecting data from different sources."
  },


  {
    question: "Does ProductDB’s sales reporting software integrate with other sales tools?",
    answer: "Yes, there are many sales tools listed in the ProductDB App Marketplace that can integrate with the ProductDB customer platform. If their data is shared with ProductDB, our sales reporting software will empower sales teams to create reports with it."  },
  {
    question:
    "What is the difference between ProductDB’s sales analytics and the report builder?",
    answer:"Both the sales analytics tool and the report builder are essential parts of ProductDB’s reporting software. The sales analytics tool provides sales professionals with a one-stop shop for out-of-the-box sales reports. The report builder on the other hand lets sales professionals easily create their own reports from scratch. "  },

  // More questions...
];

export default function FAQ() {
  return (
    <div className="dark:bg-strokedark bg-zumthor dark:text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <DisclosureButton className="flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
                        <span className="text-base font-semibold leading-7 ">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <ChevronDownIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <ChevronRightIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </DisclosureButton>
                    </dt>
                    <DisclosurePanel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600 dark:text-white">
                        {faq.answer}
                      </p>
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
