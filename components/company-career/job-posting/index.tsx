import Image from "next/image";
import Link from "next/link";
import React from "react";
import { jpData, cardData } from "./data";
import CoreValuesColorfulGrid from "@/components/our-story/core-values";

function JobPosting() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className=" mx-auto flex  flex-col py-8  md:gap-0 md:py-20">
        <div className="flex w-full  flex-col gap-6 p-4  ">
          <h3 className="w-full text-center text-3xl font-bold text-black dark:text-white  md:text-hero ">
            Where we work.
          </h3>

          <p className="text-md  mx-auto text-center text-black dark:text-white md:w-2/3 ">
            HubSpot is a hybrid company rooted in flexibility. Employees can
            choose to work from one of our global offices below, fully remotely,
            or a mix of the two.
            <Link href={"#"} className="pl-1 font-bold text-primary underline">
              Meer informatie about hybrid at HubSpot.
            </Link>
          </p>
        </div>
        <div className="mt-4 grid w-full grid-cols-1 gap-8  px-4 md:grid-cols-2 md:px-16 lg:grid-cols-3">
          {jpData.map((item, index) => (
            <div
              key={index}
              className="flex  justify-between rounded-sm   bg-stone-50 shadow-lg	 hover:scale-105 dark:bg-blackho "
            >
              <div className="flex flex-col justify-between p-4">
                <h4 className="text-lg font-medium text-black dark:text-white ">
                  {item.title}
                </h4>
                <Link
                  href={`${item.url}`}
                  className="text-lg font-medium text-primary underline "
                >
                  Meer informatie
                </Link>
              </div>
              <div>
                <Image
                  src={`${item.imagePath}`}
                  alt=""
                  width={110}
                  height={110}
                  className="p-2 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full  flex-col gap-4 p-4   py-8 md:p-16">
        <p className="w-full  text-xs font-bold  text-purple-600 dark:text-white ">
          PERKS & BENEFITS
        </p>
        <h3 className="w-full  text-3xl font-bold text-black dark:text-white  md:text-hero ">
          ClickUp Perks and Benefits.
        </h3>
        <div className="grid w-full grid-cols-4 gap-16 pt-8 ">
          {cardData.map((item, index) => (
            <Link
              href={"#"}
              key={index}
              className="flex flex-col items-start justify-center  rounded-xl  "
            >
              <div className={`rounded-2xl ${item.color ?? "bg-black"} p-3 shadow-xl dark:shadow-solid-10`}>
                {item.icon}
              </div>
              <h2 className="pt-6 text-md font-bold text-black dark:text-white">
                {item.title}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      <CoreValuesColorfulGrid />
    </div>
  );
}

export default JobPosting;
