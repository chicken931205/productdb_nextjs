import { ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";

export default function AlreadyCustomer() {
  return (
    <section className=" bg-meta dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 py-8 md:px-16 md:py-16 2xl:px-0">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:gap-4">
          <span id={`customer`} className="-mt-60 block h-60"></span>
          <div className="flex flex-col gap-8 md:w-1/2">
            <h3 className="text-3xl font-bold text-white dark:text-white">
              Already a customer?
            </h3>
            <p className="text-white">
              <span className="pr-1 font-bold text-white">
                Getting a bit stuck in ProductDB?
              </span>
              Don’t get tied in knots, just ask one of our experts. We’ll get
              back to you with an answer on average within
              <span className="pl-1 font-bold text-white">3 hours</span>.
            </p>
          </div>
          <div className="flex items-center justify-center md:w-1/2">
            <button className="flex items-center justify-center gap-4 rounded-3xl bg-blue-600 px-6 py-3 text-lg text-white">
              <span>Contact support</span>
              <ArrowRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
