import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const data = [
  {
    question: "GDPR",
    answer:
      "ProductDB strives to be as GDPR compliant as possible itself all the while helping its customers meet their obligations under the GDPR. Read this page to understand how.",
  },
  {
    question: "  Privacy statement - general",
    answer:
      "We collect and use a lot of personal data for our own purposes, e.g. marketing. Read the privacy statement to find out what personal data we have about you, how long we store this data, which privacy rights you have, etc.",
  },

  {
    question: "Cookie policy - general",
    answer:
      "We use cookies for several purposes: to make sure our website works properly, to understand how you use our website and to provide you with relevant content and advertisements. Read the cookie policy for more information.",
  },

  {
    question: "Privacy statement - ProductDB",
    answer:
      "ProductDB user? Read our product-specific privacy statement to understand which personal data we collect from you and what we do with that information.",
  },

  {
    question: "Cookie policy - ProductDB",
    answer:
      "ProductDB user? Read our product-specific cookie policy to understand which cookies we use on our platform to provide you with a seamless and personalized user experience.",
  },
  {
    question: "Security - ProductDB",
    answer:
      "Meer informatie about the various security measures we take to keep your data in ProductDB safe and available 24-7.",
  },
];

export default function DataProtection() {
  return (
    <section className="overflow-hidden bg-white pb-10 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
      <div className="mx-auto flex max-w-c-1235 flex-col gap-4 px-8 md:px-12 xl:px-16">
        <div>
          <h1 className="text-sectiontitle4 font-bold text-black dark:text-white">
            Data protection
          </h1>
          <p>Your data is in safe hands. Read these key resources:</p>
        </div>
        <div className="mt-4 grid w-full gap-4 sm:grid-cols-1 md:grid-cols-3">
          {data.map((item, index) => (
            <article
              key={index}
              className="flex flex-col justify-between rounded-sm border border-gray-100 bg-white p-4 shadow-lg transition dark:border-none dark:bg-black sm:p-6"
            >
              <div>
                <h3 className="mt-0.5 text-lg font-bold text-black dark:text-white">
                  {item.question}
                </h3>

                <p className="py-4 text-black dark:text-white">{item.answer}</p>
              </div>
              <div>
                <Link
                  href="#"
                  className="text-medium group mt-4 inline-flex items-center gap-2 font-bold text-primary"
                >
                  Read Me
                  <ArrowRightIcon className="h-5 w-5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
