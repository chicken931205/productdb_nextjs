import Image from "next/image";
import Link from "next/link";
import React from "react";

function Resourses() {
  return (
    <section className="pb-20 pt-20 lg:pb-25 lg:pt-25 xl:pt-30 xl:pb-30">
      <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col items-center justify-center gap-4 lg:gap-12.5">
          <div className="w-full text-center">
            <h2 className="relative mb-6 text-sectiontitle4 font-bold text-black dark:text-white xl:text-itemtitle">
              Sandler Training
            </h2>
            <p className="text-center text-black dark:text-white">
              Related Resources If you’re interested in sales reporting, these
              related resources may help.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            {/* <a href="#" className="block">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
                Lorem, ipsum dolor.
              </h3>

              <p className="mt-2 max-w-sm text-gray-700">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni
                reiciendis sequi ipsam incidunt.
              </p>
            </a> */}

            <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:w-1/3">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={400}
                  height={100}
                  src="/sales-report-images/resourse-images/woman-holding-glasses.webp"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    ProductDB Reporting Certification
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Become proficient in ProductDB’s reporting software and make
                  confident data-driven decisions.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg  px-3 py-2 text-center text-lg font-medium text-primary underline       "
                >
                  Start the reporting course
                </Link>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:w-1/3">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={400}
                  height={100}
                  src="/sales-report-images/resourse-images/woman-curly-hair-using-laptop.webp"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    How to Create Sales Reports
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Learn how to create reports that help managers and reps better
                  understand how they’re performing.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg  px-3 py-2 text-center text-lg font-medium text-primary underline       "
                >
                  Learn how to create sales reports
                </Link>
              </div>
            </div>
            <div className="w-full rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800 md:w-1/3">
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  width={400}
                  height={100}
                  src="/sales-report-images/resourse-images/happy-male-money-rain.webp"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Sales Reporting Resources
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Use ProductDB's free reporting resources to learn how to
                  forecast, calculate compensation, and more.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center rounded-lg  px-3 py-2 text-center text-lg font-medium text-primary underline       "
                >
                  Get free sales reporting resources
                </Link>
              </div>
            </div>
            {/* <Image
                src="/sales-report-images/hero/Full screen call review.webp"
                alt="About"
                height={700}
                width={700}
                onClick={() =>
                  handleImageClick(
                    "/sales-report-images/hero/Full screen call review.webp",
                  )
                }
                className="cursor-pointer"
              /> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resourses;
