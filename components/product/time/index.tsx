"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/20/solid";

function Time() {
    return (
    
<div
        id="commerce"
        className=" mx-auto flex	 max-w-c-1390 flex-col gap-4 bg-gray-100 px-4 pb-12 pt-24 dark:bg-black md:px-8 md:pb-24 md:pt-37.5 "
      >
        <div className="text-center">
          <h2 className="mx-auto mb-3 text-3xl font-bold text-black dark:text-white   lg:text-hero">
            Time management made easy.
          </h2>
        </div>
        <div className="mx-auto mb-4 text-center text-sm text-blacksection dark:text-white ">
          <p className="  ">
            Make the most of your time with global Time Tracking from any
            device, Time Estimates, and time Reporting.
          </p>
        </div>

        <div className="mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mx-16 lg:grid-cols-3">
          <article className="col-span-1 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:bg-black">
            <img
              alt=""
              width={500}
              height={500}
              // src={"/product/team-collaborate/time-tracking.png"}
              src="/product/team-collaborate/tracking.png"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Tracking
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Track time automatically (or manually) link it to tasks from
                your desktop, mobile, or browser with ProductDB's global timer.
              </p>

              <Link
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primaryho"
              >
                Meer informatie
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </article>

          <article className="col-span-1 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:bg-black">
            <img
              alt=""
              width={500}
              height={500}
              src="/product/team-collaborate/estimates.png"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900  dark:text-white">
                Estimates
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Add time estimates to tasks to allocate resources smarter and
                set expectations for your team.
              </p>

              <Link
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primaryho"
              >
                Meer informatie
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </article>
          <article className="col-span-1 overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm dark:bg-black">
            <img
              alt=""
              width={500}
              height={500}
              // src={"/product/team-collaborate/time-tracking.png"}
              src="/product/team-collaborate/reporting.png"
              className="h-56 w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900  dark:text-white">
                Reporting
              </h3>

              <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                Access detailed reporting for time tracked and automatically
                create reports for billable time.
              </p>

              <Link
                href="#"
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primaryho"
              >
                Meer informatie
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </article>
        </div>
      </div>
        )
    }
    
    export default Time