import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowRightIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/20/solid";

function AllFeatures() {
  return (
    <div
        id="all-feature"
        className=" mx-auto flex	 max-w-c-1390 flex-col gap-4 px-4 pb-12 pt-24 md:px-8 md:pb-24 md:pt-37.5 "
      >
        <div className="text-center">
          <h2 className="mx-auto mb-3 text-3xl font-bold text-black dark:text-white   lg:text-hero">
            But wait, there's more.
          </h2>
        </div>
        <div className="mx-auto mb-4 text-center text-sm text-black dark:text-white ">
          <p className="  ">
            ProductDB comes with hundreds of more features to help your team
            tackle any type of work, check them all out below.
          </p>
        </div>

        <div className="mx-2 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mx-16 lg:grid-cols-3">
          <article className="col-span-1 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 shadow-sm dark:bg-black">
            <div className="mt-5 flex gap-4 px-4">
              <div className="rounded-xl bg-primary p-4">
                <Square3Stack3DIcon className="h-8 w-8 text-white " />
              </div>
              <div className="">
                <h1 className="w-1/2 text-2xl font-bold text-black dark:text-white">
                  Task Management
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-2">
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Recurring Checklists
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Reminders
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Resolve Comments
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Scrum Points
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Status Templates
                  </p>
                </Link>
              </div>
            </div>
            <div className="m-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primaryho"
              >
                View all
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </article>
          <article className="col-span-1 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 shadow-sm dark:bg-black">
            <div className="mt-5 flex gap-4 px-4">
              <div className="rounded-xl bg-primary p-4">
                <Square3Stack3DIcon className="h-8 w-8 text-white " />
              </div>
              <div className="">
                <h1 className="w-1/2 text-2xl font-bold text-black dark:text-white">
                  Complete Customization
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-2">
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Custom Fields
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Custom Statuses
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Customize Assignees
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Filter and Search Tasks
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Hotkeys & Shortcuts
                  </p>
                </Link>
              </div>
            </div>
            <div className="m-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primaryho"
              >
                View all
                <span
                  aria-hidden="true"
                  className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </article>
          <article className="col-span-1 overflow-hidden rounded-lg border border-gray-100 bg-gray-100 shadow-sm dark:bg-black">
            <div className="mt-5 flex gap-4 px-4">
              <div className="rounded-xl bg-primary p-4">
                <Square3Stack3DIcon className="h-8 w-8 text-white " />
              </div>
              <div className="">
                <h1 className="w-1/2 text-2xl font-bold text-black dark:text-white">
                  Team Collaboration
                </h1>
              </div>
            </div>

            <div className="p-4 sm:p-6">
              <div className="flex flex-col gap-2">
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    2-Way Calendar Sync
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Capture, Mark Up, and Edit Screenshots
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    List Details & Discussions
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Mentions
                  </p>
                </Link>
                <Link href={"#"}>
                  <p className="mt-2 text-sm/relaxed text-gray-500 hover:text-primary">
                    Real-Time Editing
                  </p>
                </Link>
              </div>
            </div>
            <div className="m-4">
              <Link
                href="#"
                className="group inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primaryho"
              >
                View all
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
        <div className="mt-6 flex items-center justify-center">
          <Link
            href={"#"}
            className="rounded-md bg-primary px-4 py-2.5 font-bold text-white hover:bg-primaryho"
          >
            See All Features
          </Link>
        </div>
      </div>
  );
}

export default AllFeatures;
