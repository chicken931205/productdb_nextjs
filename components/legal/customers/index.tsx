import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const data = [
  {
    question: "Terms of service",
    answer:
      "ProductDB customer? Then these are the terms on which you enter into a contract with us. For specific arrangements regarding data protection, see the data processing agreement (DPA), which is an annex to the terms of service.",
  },
  {
    question: "Data Processing Agreement",
    answer:
      "This is a specific agreement required under GDPR to clearly define our respective obligations and responsibilities regarding the data in your ProductDB account.",
  },
  {
    question: "End-User License Agreement (EULA)",
    answer:
      "Using ProductDB via one of our partners instead of through us directly? That means you have a contract with both the partner and us. Through the EULA, we agree on the (acceptable) use of our software.",
  },
];

export default function Customer() {
  return (
    <section className="overflow-hidden bg-gray-100 pb-10 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
      <div className="mx-auto flex max-w-c-1235 flex-col gap-4 px-8 md:px-12 xl:px-16">
        <div>
          <h1 className="text-sectiontitle4 font-bold text-black dark:text-white">
            Customer terms
          </h1>
          <p>
            Using our software? Hooray! Find the contract terms
            that apply to you:
          </p>
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
