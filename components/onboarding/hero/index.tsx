import Link from "next/link";
import React from "react";
import { cardData, cardData2 } from "./data";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

function Hero() {
  return (
    <div className="">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 dark:bg-black sm:py-44 lg:px-8">
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Everything you need
          </h1>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            to learn ProductDB
          </h1>
          <p className="mx-auto mt-6 text-lg font-semibold leading-7 text-gray-600 dark:dark:text-gray-300 lg:w-2/3">
            From on-demand demos and live webinars to coaching and step-by-step
            guides, everything you need to maximize your ProductDB.
          </p>
          <div className=" mt-10 flex-col items-center justify-center">
            <Link
              href="#"
              className="inline-flex items-center gap-2.5 rounded-xl border border-primary bg-primary px-4 py-2 text-xl font-bold text-white hover:opacity-90  md:text-lg"
            >
              Get Started.
              <ArrowRightIcon className="h-5 w-5" />
            </Link>
            <p className="mt-4 text-base font-semibold text-gray-400  ">
              Free forever. No credit card.
            </p>
          </div>
        </div>
      </main>
      <div className="mx-auto bg-[#FAFAFC] text-center dark:bg-black">
        <div className="w-full border-t border-gray-300 dark:border-gray-600" />

        <div className="grid w-full grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-16 lg:grid-cols-3">
          {cardData.map((item, index) => (
            <Link
              href={"#"}
              key={index}
              className="group relative flex flex-col items-start justify-center gap-3 rounded-xl border bg-gray-50 p-6 hover:bg-blue-50 dark:bg-blackho"
            >
              <div className="rounded-xl bg-blue-50 p-3 text-primary dark:bg-blue-950">
                {item.icon}
              </div>
              <h2 className="pt-4 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h2>
              <div className="text-md text-start text-black dark:text-white">
                {item.description}
              </div>
              <div className="absolute bottom-4 right-4 hidden items-center justify-start gap-2  rounded-3xl border bg-white p-[1px] px-2 text-black hover:text-primary group-hover:flex dark:bg-black dark:text-white dark:hover:text-primary">
                <p className="text-xs ">read more</p>
                <div className=" flex h-6 w-6 items-center justify-center">
                  <ArrowRightIcon className="h-4 w-4 " />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-10 lg:py-16">
        <h1 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Live resources
        </h1>
        <div className="grid w-full grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-16 lg:grid-cols-3">
          {cardData2.map((item, index) => (
            <Link
              href={"#"}
              key={index}
              className="group relative flex flex-col items-start justify-center gap-3 rounded-xl border bg-gray-50 p-8 hover:bg-blue-50  dark:bg-blackho"
            >
              <figcaption className=" flex items-center gap-x-6 ">
                <Image
                  width={50}
                  height={50}
                  alt=""
                  src={`${item.imagePath}`}
                  className="h-14 w-14 rounded-full bg-gray-50"
                />
                <div className="text-lg">
                  <div className="font-bold text-black dark:text-white">
                    {item.title}
                  </div>
                  <div className="text-semibold mt-1 text-gray-900 dark:text-white ">
                    {item.description}
                  </div>
                </div>
              </figcaption>
              <div className="absolute bottom-4 right-4 hidden items-center justify-start gap-2 rounded-3xl border  bg-white p-[1px] px-2 text-black hover:text-primary group-hover:flex dark:bg-black dark:text-white dark:hover:text-primary">
                <p className="text-xs ">read more</p>
                <div className=" flex h-6 w-6 items-center justify-center">
                  <ArrowRightIcon className="h-4 w-4 " />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
