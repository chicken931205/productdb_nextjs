import Image from "next/image";
import React from "react";
import cardData from "./data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

function Feature() {
  return (
    <div className="mx-auto max-w-c-1390">
      <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
        <div className="mx-auto text-center text-sm text-black dark:text-white">
          <p className="rounded-lg bg-gray-100 px-3 py-1 dark:bg-blackho dark:text-white">
            Workflows
          </p>
        </div>
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-3/5  xl:text-hero">
            Experience a day in the life with ProductDB
          </h2>
        </div>
        <div className="mx-auto md:w-3/5 text-center ">
          <p className="  text-lg font-bold text-black dark:text-white">
            Learn how ProductDB can make your workday better, whether you're an
            individual contributor, senior executive, or anyone in between.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-3 lg:px-16">
          {cardData.map((item, index) => (
            <Link
              href={`${item.btnLink}`}
              className="rounded-xl border bg-white dark:border-none  dark:bg-blackho"
            >
              <Image
                alt=""
                width={250}
                height={250}
                src={`${item.imageUrl}`}
                className="w-full rounded-t-xl object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className=" text-justify text-black dark:text-white">
                  {item.text}
                </p>
                <div className="justify mt-2 flex w-full">
                  <p className="flex items-center justify-center gap-2 font-bold text-primary hover:gap-4 hover:text-primaryho">
                    Meer informatie
                    <ArrowRightIcon className="h-4 w-4" />
                  </p>
                </div>
              </div>
            </Link>
          ))}
          {/* <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={250}
              height={250}
              src={""}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Chat
              </h3>
              <p className="font-bold text-black dark:text-white">
                Bring everyone together with Chat
              </p>
              <p className="mt-4  text-sm/relaxed ">
                Work smarter as a team with real-time chat. Tag individuals or
                groups, assign comments for action items, and link tasks to get
                more done together.
              </p>

              <div className="my-3 flex flex-wrap">
                <span className="text-black dark:text-white">Replaces:</span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Slack
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  MS Teams
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Google Hangouts
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={250}
              height={250}
              src={""}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Chat
              </h3>
              <p className="font-bold text-black dark:text-white">
                Bring everyone together with Chat
              </p>
              <p className="mt-4  text-sm/relaxed ">
                Work smarter as a team with real-time chat. Tag individuals or
                groups, assign comments for action items, and link tasks to get
                more done together.
              </p>

              <div className="my-3 flex flex-wrap">
                <span className="text-black dark:text-white">Replaces:</span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Slack
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  MS Teams
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Google Hangouts
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <section className="mt-8 mb-24 px-4 md:px-16 ">
        <div className="flex flex-col gap-4 rounded-lg  bg-gradient-to-r from-purple-800  to-blue-900 pt-8  md:pt-16 dark:bg-blacksection   md:flex-row    ">
          <article className="md:w-2/3 p-4 md:pl-16">
            <p className="text-md mt-2 line-clamp-3 w-full  text-white md:w-2/3">
              Want a 1:1 demo instead?
            </p>
            <h3 className="mt-0.5 w-full text-2xl font-bold  text-white md:w-2/3 ">
              See how ProductDB boosts your team productivity.
            </h3>

            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-600 bg-white px-8 py-3 text-purple-900   focus:outline-none focus:ring active:text-indigo-500"
                href="/demo/demo-request/"
              >
                <span className="text-medium font-bold"> Book a demo </span>

                <ArrowRightIcon className="h-5 w-5" />
              </Link>

              {/* Border */}
            </div>
          </article>
          <div>
            <Image
              src={"/demo/list-view.avif"}
              alt=""
              width={600}
              height={600}
              className="px-4 md:px-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Feature;
