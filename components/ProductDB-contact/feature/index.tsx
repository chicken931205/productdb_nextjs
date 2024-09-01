import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function Feature() {
  return (
    <section className=" bg-gray-100 dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 py-8 md:px-24 md:py-27 2xl:px-0">
        <div className="mt-4 grid w-full gap-5 sm:grid-cols-1 md:grid-cols-3">
          <article className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-4 shadow-lg transition dark:border-none dark:bg-blackho sm:p-6">
            <div>
              <p className="text-primary">Not a customer yet?</p>
              <h3 className="mt-0.5 text-lg font-bold text-black dark:text-white">
                Get a call
              </h3>

              <p className="py-4 text-black dark:text-gray-300">
                Fill in the contact form and a consultant will call you back in
                under five minutes (during office hours only).
              </p>
            </div>
            <div>
              <Link
                href="#customer"
                className="text-medium group mt-4 inline-flex items-center gap-2 font-bold text-primary"
              >
                Read Me
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </article>
          <article className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-4 shadow-lg transition dark:border-none dark:bg-blackho sm:p-6" >
            <div>
              <p className="text-primary">Not a customer yet?</p>
              <h3 className="mt-0.5 text-lg font-bold text-black dark:text-white">
                Schedule a demo
              </h3>

              <p className="py-4 text-black dark:text-gray-300">
                Schedule a short call (± 15 min) and a consultant will call you
                at your earliest convenience.
              </p>
            </div>
            <div>
              <Link
                href="#schedule"
                className="text-medium group mt-4 inline-flex items-center gap-2 font-bold text-primary"
              >
                Book now
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </article>
          <article className="flex flex-col justify-between rounded-3xl border border-gray-100 bg-white p-4 shadow-lg transition dark:border-none dark:bg-blackho sm:p-6">
            <div>
              <p className="text-primary">Not a customer yet?</p>
              <h3 className="mt-0.5 text-lg font-bold text-black dark:text-white">
                Leave your query
              </h3>

              <p className="py-4 text-black dark:text-gray-300">
                Fill in the contact form and a consultant will answer your query
                within one working day.
              </p>
            </div>
            <div>
              <Link
                href="#call"
                className="text-medium group mt-4 inline-flex items-center gap-2 font-bold text-primary"
              >
                Send us a message
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
