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
    question: "What is sales software?",
    answer:
      "Sales software includes all the tools you need to improve your sales team’s productivity. It supports the entire sales cycle, from finding potential leads and tracking their progress, to managing and automating the deal flow, and even generating quotes. Additionally, it offers valuable analytics, coaching, and reporting features for managers to onboard and coach reps, analyze strategy, and optimize process. ",
    answer2:
      "Rather than using multiple tools to accomplish each of these tasks separately, ProductDB’s sales software enables teams to do all their work under one roof. Save time and energy by using a single tool, rather than splitting up your team’s energy and information across multiple tools or platforms.",
  },
  {
    question:
      "Do I have to use ProductDB as a CRM in order to get value from Sales Hub? What if I already have a CRM?",
    answer:
      "Sales Hub is ProductDB’s sales software solution. It works great when paired with ProductDB’s Smart CRM, but can be used to drive productivity and power customer connections alongside your existing CRM, too. ",
    answer2:
      "For example, your business development team might adopt Sales Hub as a sales engagement platform, to consolidate prospecting activities and manage leads in one place. ",
  },

  {
    question: "How much does ProductDB’s sales software cost?",
    answer: `ProductDB’s sales software is called Sales Hub. Many of Sales Hub’s tools are available for free, with more advanced features designed to help automate and scale your sales operations available in Starter, Professional, and Enterprise editions. Curious about the return on investment from Sales Hub? Explore our ROI calculator.`,
  },
  {
    question:
      "Can I implement ProductDB’s software without dedicated programmers/developers?",
    answer:
      "Yes. Our customer success team is committed to getting you up and running in days or weeks (not months) so you can start selling better sooner. Looking for more customization and expertise? Our solutions partners offer a wide range of specialized support to help you get the most out of your ProductDB implementation.",
  },
  {
    question:
      "  How is Sales Hub different from other sales solutions, like Salesforce?",
    answer:
      "Unlike a lot of software that’s been built by acquisition, Sales Hub was built from the ground up. It’s both deeply powerful and uniquely easy to use. The result? Your team gets up and running faster, allowing you to achieve ROI more quickly. Meer informatie about the differences between ProductDB and Salesforce.",
  },

  {
    question: "  What are popular sales software features?",
    ul_: "Popular features in ProductDB’s sales software include:",
    li_1: "Contact and lead management organize prospecting activities and propel pipeline growth..",
    li_2: "Email tracking and automation let you track engagement in real-time, automate personalized email sequences, and schedule emails for optimal timing.",
    li_3: "Deal and pipeline management let you visualize and manage deals from start to finish, assign tasks, set reminders, and collaborate with team members.",
    li_4: "Sales analytics and reporting let you gain valuable insights into sales performance with dashboards, activity tracking, revenue tracking, and forecasting.",
    li_5: "Document management lets you store and manage sales documents efficiently, allowing easy access and sharing with prospects and team members.",
    li_6: "Sales automation and workflows automate repetitive tasks and let you create custom workflows to improve efficiency in lead segmentation, task assignments, and email sequences.",
  },

  {
    question: "  How much time does it take to implement sales software?",
    answer:
      "Sales software is up and running from the get-go. Simply grant your sales team access to the appropriate tools, and they can start using them immediately. Features such as email templates, deals, and meetings are ready to go from the moment you log in.",
    answer2:
      "For more experienced teams, advanced features like conversation intelligence and predictive lead scoring take your sales organization to the next level. While these features are available right from the start, it may take some time to gather valuable insights from them",
  },

  {
    question: "Can I customize my Sales Hub account?",
    answer:
      "Of course! With custom objects (available in the enterprise edition of Sales Hub), you have complete flexibility and control to match your CRM data to your business. You’ll have full flexibility to name the object, determine its properties, and decide what other objects it can be associated with.",
    answer2:
      "And you can easily sort, automate, and report on data associated with them right in ProductDB. Plus, with more than 1,500 apps in our app marketplace, you can easily connect ProductDB to your favorite tools in just a few clicks.",
  },
  // More questions...
];

export default function Example() {
  return (
    <div className="bg-zumthor dark:bg-black dark:text-white">
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
                      <p className="text-base leading-7 text-gray-600 dark:text-white">
                        {faq.answer2}
                      </p>
                    </DisclosurePanel>
                    {faq.ul_ && (
                      <DisclosurePanel as="dd" className="mt-2 pr-12">
                        <p className=" text-base font-semibold leading-7 text-gray-600 dark:text-white">
                          {faq.ul_}
                        </p>
                        <ul className="list-disc">
                          <li className="ml-6 text-base leading-7 text-gray-600">
                            {faq.li_1}
                          </li>
                          <li className="ml-6 text-base leading-7 text-gray-600">
                            {faq.li_2}
                          </li>
                          <li className="ml-6 text-base leading-7 text-gray-600">
                            {faq.li_3}
                          </li>
                          <li className="ml-6 text-base leading-7 text-gray-600">
                            {faq.li_4}
                          </li>
                          <li className="ml-6 text-base leading-7 text-gray-600">
                            {faq.li_5}
                          </li>
                          <li className="ml-6 text-base leading-7 text-gray-600">
                            {faq.li_6}
                          </li>
                        </ul>
                      </DisclosurePanel>
                    )}
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
