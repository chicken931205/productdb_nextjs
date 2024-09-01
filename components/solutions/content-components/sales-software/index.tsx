import { CheckIcon, StarIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function Pricing() {
  return (
    <section className=" bg-stroke pb-5 pt-15 dark:bg-strokedark md:px-16 lg:pb-10 xl:pb-15">
      <div className="mx-auto flex max-w-c-1315 flex-col items-center justify-center px-4 md:px-16 xl:px-0  ">
        <div className="py-4">
          <h1 className="text-3xl font-bold text-black dark:text-white">
            Sales Software That Grows With You
          </h1>
        </div>
        <div className="py-4">
          <p>
            Start with free tools and pay as you grow, or hit the ground running
            with one of our premium editions.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3.5 lg:flex-nowrap xl:gap-5.5">
          {/* <!-- Pricing Item --> */}
          <div className="animate_top group relative w-full rounded-lg border border-stroke bg-white p-5.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[50%] lg:w-1/4 xl:p-8.5">
            <div>
              <h3 className="pb-1 text-itemtitle font-bold text-black dark:text-white xl:text-itemtitle">
                Free
              </h3>
            </div>
            <div>
              <p>No credit card required</p>
            </div>
            <div className="mb-7.5 mt-1">
              <h3 className=" text-xl  font-bold text-black dark:text-white ">
                $0/month
              </h3>
            </div>

            <div className=" border-stroke pb-12.5 pt-9 dark:border-strokedark">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white ">
                  Popular features
                </h3>
              </div>
              <div className="mt-4 ">
                <ul className="flex flex-col items-start justify-center gap-2">
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />

                    <span>Contact management</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Deal pipeline</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Quotes</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Live chat</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Meeting scheduling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="animate_top group relative w-full rounded-lg border border-stroke bg-white p-5.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[50%] lg:w-1/4 xl:p-8.5">
            <div>
              <h3 className=" flex items-center justify-start gap-2 pb-1 text-itemtitle font-bold text-black dark:text-white xl:text-itemtitle">
                <StarIcon className="h-5 w-5 text-primary" />
                Starter
              </h3>
            </div>
            <div>
              <p>starter at</p>
            </div>
            <div className="mb-7.5 mt-1">
              <h3 className=" text-lg  font-bold text-black dark:text-white ">
                $20/month per seat
              </h3>
            </div>

            <div className=" border-stroke pb-12.5 pt-9 dark:border-strokedark">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white ">
                  Popular features
                </h3>
              </div>
              <div className="mt-4 ">
                <ul className="flex flex-col items-start justify-center gap-2">
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />

                    <span>Everything in Free</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Sales automation</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Goals</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Sales content analytics</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Payments</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Task queues</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="animate_top group relative w-full rounded-lg border border-stroke bg-white p-5.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[50%] lg:w-1/4 xl:p-8.5">
            <div>
              <h3 className="flex items-center justify-start gap-2 pb-1 text-itemtitle font-bold text-black dark:text-white xl:text-itemtitle">
                <StarIcon className="h-5 w-5 text-primary" />
                Professional
              </h3>
            </div>
            <div>
              <p>Starts at</p>
            </div>
            <div className="mb-7.5 mt-1">
              <h3 className=" text-lg  font-bold text-black dark:text-white ">
                $100/month per seat
              </h3>
            </div>

            <div className="border-stroke pb-12.5 pt-9 dark:border-strokedark">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white ">
                  Popular features
                </h3>
              </div>
              <div className="mt-4 ">
                <ul className="flex flex-col items-start justify-center gap-2">
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />

                    <span>Everything in Starter</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Prospecting & lead management</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Sequences</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Forecasting</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Custom reporting & sales analytics</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Playbooks</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="animate_top group relative w-full rounded-lg border border-stroke bg-white p-5.5 shadow-solid-10 dark:border-strokedark dark:bg-blacksection dark:shadow-none md:w-[50%] lg:w-1/4 xl:p-8.5">
            <div>
              <h3 className="ite flex justify-start gap-2 pb-1 text-itemtitle font-bold text-black dark:text-white xl:text-itemtitle">
                <StarIcon className="h-5 w-5 text-primary" />
                Enterprise
              </h3>
            </div>
            <div>
              <p>Starts at</p>
            </div>
            <div className="mb-7.5 mt-1">
              <h3 className=" text-lg  font-bold text-black dark:text-white">
                $150/month per seat
              </h3>
            </div>

            <div className=" border-stroke pb-12.5 pt-9 dark:border-strokedark">
              <div>
                <h3 className="text-xl font-bold text-black dark:text-white ">
                  Popular features
                </h3>
              </div>
              <div className="mt-4 ">
                <ul className="flex flex-col items-start justify-center gap-1">
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />

                    <span>Everything in Professional</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Custom objects</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Predictive lead scoring</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Conversation intelligence</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Recurring revenue tracking</span>
                  </li>
                  <li className="mb-4 flex items-center justify-start gap-2 text-black last:mb-0 dark:text-manatee">
                    <CheckIcon className="h-5 w-5 text-black dark:text-manatee" />
                    <span>Deal journey analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col gap-4 md:my-8 md:flex-row">
          <Link
            className=" rounded border border-primary bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primaryho"
            href="#"
          >
            Get a demo of premium editions
          </Link>

          <Link
            className=" rounded border border-primary px-12 py-3 text-sm font-medium text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
            href="#"
          >
            Get started with free tools
          </Link>
        </div>
        <div className="px-8 text-center text-black dark:text-white">
          <p className="">
            For more detailed information on product packaging and the limits
            that apply, please see our &nbsp;
            <Link className="text-primary underline" href="#">
              pricing page.
            </Link>
            &nbsp; Price shown in USD and subject to applicable tax.
          </p>
        </div>
      </div>
    </section>
  );
}
