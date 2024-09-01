"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { dataList, listItems } from "./data";
import Image from "next/image";

function Features() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px 0px -30% 0px", // Adjust root margin to fine-tune the trigger
      threshold: 0.75, // Use an array to improve accuracy
    };

    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    }, options);

    dataList.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element && observer.current) {
        observer.current.observe(element);
      }
    });

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="relative mx-auto flex py-16 lg:px-8">
      <div className="flex w-full flex-col gap-16 px-4 py-12 md:px-8 lg:w-3/4">
        {dataList.map((item, index) => (
          <div key={index}>
            <span id={`${item.id}`} className="-mt-60 block h-60"></span>
            <div className="text-sm text-black dark:text-white">
              <span className="rounded-lg bg-gray-200 px-3 py-1 dark:bg-blackho dark:text-white">
                {item.smallHeading}
              </span>
            </div>
            <div className="mb-8 mt-2">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {item.heading}
              </h2>
              <p className="pr-8 font-medium text-black dark:text-white">
                {item.text1}
              </p>
              <div className="my-4">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg border bg-white dark:border-none dark:bg-blackho">
                    <Image
                      alt=""
                      width={250}
                      height={250}
                      src={item.image1Path}
                      className="w-full object-cover"
                    />
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.card1Title}
                      </h3>
                      <p className="mt-4 text-black dark:text-white">
                        {item.card1Descriptio}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white dark:border-none dark:bg-blackho">
                    <Image
                      alt=""
                      width={250}
                      height={250}
                      src={item.image2Path}
                      className="w-full object-cover"
                    />
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.card2Title}
                      </h3>
                      <p className="mt-4 text-black dark:text-white">
                        {item.card2Descriptio}
                      </p>
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white dark:border-none dark:bg-blackho">
                    <Image
                      alt=""
                      width={250}
                      height={250}
                      src={item.image1Path}
                      className="w-full object-cover"
                    />
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {item.card3Title}
                      </h3>
                      <p className="mt-4 text-black dark:text-white">
                        {item.card3Descriptio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden w-1/4 lg:block">
        <div className="top-40 mx-auto w-full lg:sticky">
          <div className="w-60 rounded-lg bg-gray-100 p-4 dark:bg-blackho">
            <ul>
              {listItems.map((item, index) => (
                <Link href={`#${item.id}`} key={index}>
                  <li
                    className={`my-1 rounded-md px-2 py-1 text-black hover:bg-white dark:hover:text-primary ${
                      activeId === item.id
                        ? "bg-white text-primary dark:text-primary"
                        : "dark:text-white"
                    }`}
                  >
                    {item.text}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
