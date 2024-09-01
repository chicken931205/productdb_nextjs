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
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
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
    <div className="relative mx-auto flex max-w-c-1390 py-16 lg:px-8">
      <div className="flex w-full flex-col gap-4 px-4 py-12 md:px-8 lg:w-3/4">
        <div className="text-sm text-black dark:text-white">
          <span className="rounded-lg bg-gray-200 px-3 py-1 dark:bg-blackho dark:text-white">
            Advanced Task Views
          </span>
        </div>
        {dataList.map((item, index) => (
          <div key={index}>
            <span id={`${item.id}`} className="-mt-60 block h-60"></span>
            <div className="mb-8">
              <h2 className="mb-4 text-3xl font-bold text-black dark:text-white xl:text-hero">
                {item.mainHeading}
              </h2>
              <h4 className="mb-4 text-xl font-bold text-black dark:text-white">
                {item.subHeading1}
              </h4>
              <ul className="list-disc pl-8">
                <li className="text-black dark:text-white">{item.text1}</li>
              </ul>
              <h4 className="my-4 text-xl font-bold text-black dark:text-white">
                {item.subHeading2}
              </h4>
              <ul className="list-disc pl-8">
                <li className="text-black dark:text-white">{item.text2}</li>
              </ul>
              {item.subHeading3 !== "" ? (
                <>
                  <h4 className="my-4 text-xl font-bold text-black dark:text-white">
                    {item.subHeading3}
                  </h4>
                  <ul className="list-disc pl-8">
                    <li className="text-black dark:text-white">{item.text3}</li>
                  </ul>
                </>
              ) : null}
              {item.buttonText !== "" ? (
                <>
                  <div className="my-6">
                    <Link
                      href="#"
                      className="text-md inline-flex items-center gap-1 rounded-lg bg-primary px-6 py-2.5 font-bold text-white hover:opacity-90 md:gap-2.5"
                    >
                      {item.buttonText}
                      {/* <ArrowRightIcon className="h-4 w-4 text-white" /> */}
                    </Link>
                  </div>
                </>
              ) : null}
              <div className="my-4">
                <Image
                  src={`${item.imagePath}`}
                  height={700}
                  width={700}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden w-1/4 lg:block">
        <div className="top-40 mx-auto w-full lg:sticky">
          <div className="w-50 rounded-lg bg-gray-100 p-4 dark:bg-blackho">
            <ul>
              {listItems.map((item, index) => (
                <Link href={`#${item.id}`} key={index}>
                  <li
                    className={`my-1 rounded-md px-2 py-1 text-black hover:bg-white dark:text-white dark:hover:text-primary ${
                      activeId === item.id
                        ? "bg-white text-primary dark:text-primary"
                        : ""
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
