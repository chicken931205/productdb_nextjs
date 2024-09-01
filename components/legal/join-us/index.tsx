import { ArrowRightIcon, CheckIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function JoinUs() {
  return (
    <section className="overflow-hidden bg-white pb-10 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
      <div className="mx-auto flex max-w-c-1235 flex-col gap-24 px-8 md:px-12 xl:px-16">
        <div className="flex flex-col gap-5">
          <h1 className="text-sectiontitle4 font-bold text-black dark:text-white md:pr-48">
            CRM, invoices, quotations and projects. Followed up, created and
            ticked off.
          </h1>
          <ul className="flex flex-col gap-8 md:flex-row">
            <li className="flex gap-2">
              <CheckIcon className="h-6 w-6 text-green-300" />
              Free 14-day trial
            </li>
            <li className="flex gap-2">
              <CheckIcon className="h-6 w-6 text-green-300" />
              No credit card needed
            </li>
            <li className="flex gap-2">
              <CheckIcon className="h-6 w-6 text-green-300" />
              Access to all features
            </li>
          </ul>
          <div>
            <Link
              className="border-Primary inline-flex items-center gap-2 rounded border bg-primary px-8 py-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <span className="text-medium font-medium"> Start today </span>

              <ArrowRightIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
