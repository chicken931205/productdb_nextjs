import Image from "next/image";
import React from "react";
import { cardData } from "./data";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

function Templates() {
  return (
    <div>
      <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
        <div className="mx-auto text-center text-sm text-black dark:text-white">
          <p className="rounded-lg bg-gray-100 px-3 py-1 dark:bg-blackho dark:text-white">
            Templates
          </p>
        </div>
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-5xl font-extrabold text-black dark:text-white md:w-3/5  ">
            Get a head start with templates.
          </h2>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:px-16 lg:grid-cols-3 ">
          {cardData.map((item, index) => (
            <Link
              href={"#"}
              key={index}
              className="rounded-lg border bg-white shadow-md dark:border-none  dark:bg-blackho"
            >
              <Image
                alt=""
                width={250}
                height={250}
                src={`${item.imagePath}`}
                className="w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-4 px-4 pb-9 pt-16 md:px-8  lg:pt-36 ">
        <div className="mx-auto text-center text-sm text-black dark:text-white">
          <p className="rounded-lg bg-gray-100 px-3 py-1 dark:bg-blackho dark:text-white">
            Reviews
          </p>
        </div>
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-5xl font-extrabold text-black dark:text-white md:w-3/5  ">
            Startups love ProductDB.
          </h2>
        </div>
      </div>
      <div className="flex  items-center justify-center gap-2  ">
        <Image
          src="/wholesale/users-love-us.png"
          width={900}
          height={600}
          alt=""
          className=" h-auto w-auto object-cover"
        />
      </div>
      <section className="mt-8 px-4 py-24 md:px-16 ">
        <div className="flex flex-col-reverse items-center justify-center gap-4 rounded-lg  bg-gradient-to-r from-purple-800  to-blue-900 pt-8  dark:bg-blacksection md:pt-16   lg:flex-row    ">
          <article className="p-4 lg:w-2/3 lg:pl-16">
            <p className="text-md mt-2 line-clamp-3 w-full  text-white lg:w-2/3">
              Grow your startup with ClickUp
            </p>
            <h3 className="mt-1 w-full text-2xl font-bold  text-white lg:w-2/3 ">
              Eligible startups get $3,000 in credit!
            </h3>

            <div className="mt-8">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-600 bg-white px-8 py-3 text-purple-900   focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                <span className="text-medium font-bold">Meer informatie</span>

                <ArrowRightIcon className="h-5 w-5" />
              </Link>

              {/* Border */}
            </div>
          </article>
          <div>
            <Image
              src={"/wholesale/rocket__man-clickup.avif"}
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

export default Templates;
