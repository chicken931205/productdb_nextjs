import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

const data = [
  {
    question: "Commission Partner Agreement",
    answer:
      "Promoting ProductDB’s software tools to end customers and earning commissions? Then this is your contract.",
  },

  {
    question: "  Distribution Channel Partner Agreement",
    answer:
      "Ordering ProductDB software for end customers via a distributor? Then this is the contract for you.",
  },
];

export default function Partner() {
  return (
    <section className="overflow-hidden bg-white pb-10 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
      <div className="mx-auto flex max-w-c-1235 flex-col gap-4 px-8 md:px-12 xl:px-16">
        <div>
          <h1 className="text-sectiontitle4 font-bold text-black dark:text-white">
            Partner terms
          </h1>
          <p>
            ProductDB partner? We have specific agreements tailored to every
            partnership:
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
