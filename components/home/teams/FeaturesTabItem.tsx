import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import {
  ArrowRightIcon,
  CalendarDaysIcon,
  CalendarIcon,
  CheckCircleIcon,
  Cog6ToothIcon,
  DocumentIcon,
  DocumentTextIcon,
  KeyIcon,
  PencilSquareIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";

const FeaturesTabItem = ({ featureTab }) => {
  // const { image, imageSm } = featureTab;

  return (
    <div className="mx-auto flex max-w-c-1390  rounded-lg border-2 border-gray-400  dark:bg-blacksection      ">
      <div className="w-full p-14 sm:w-1/2 ">
        <h3 className="mt-0.5 w-full text-xl font-bold text-black dark:text-white  ">
          {featureTab.heading}
        </h3>

        <p className="text-md mt-2  w-full  text-black dark:text-white ">
          {featureTab.para}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-start gap-3">
            <CheckCircleIcon className="h-6 w-6 " />

            <p className="text-md mt-2  w-full  text-black dark:text-white ">
              {featureTab.li1}
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <CheckCircleIcon className="h-6 w-6 " />
            <p className="text-md mt-2  w-full  text-black dark:text-white ">
              {featureTab.li2}
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <CheckCircleIcon className="h-6 w-6 " />
            <p className="text-md mt-2  w-full  text-black dark:text-white ">
              {featureTab.li3}
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 md:flex-row">
          <Image
            src={`${featureTab.image}`}
            alt=""
            height={200}
            width={200}
            className="rounded-full"
          />
          <div className="w-full ">
            <div className="flex items-center gap-4">
              <div className="flex">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <StarIcon className="h-5 w-5 text-yellow-500" />
              </div>
              <h3 className="mt-0.5  w-full text-lg font-bold text-blue-600 dark:text-white  ">
                {featureTab.name}
              </h3>
            </div>

            <p className="text-md mt-2 w-full  text-justify  text-black dark:text-white ">
              {featureTab.intro}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-20 sm:w-1/2">
        <div className="rounded-b-lg rounded-t-lg border-2">
          <li className="flex items-center justify-start gap-4 border-b-2 p-5">
            {featureTab.li4_Icon}
            <p className="text-regular text-black dark:text-white">
              {featureTab.li4}
            </p>
          </li>
          <li className="flex items-center justify-start gap-4 border-b-2	  p-5">
            {featureTab.li5_Icon}
            <p className="text-regular text-black dark:text-white">
              {featureTab.li5}
            </p>
          </li>
          <li className="flex items-center justify-start gap-4  border-b-2	  p-5">
            {featureTab.li6_Icon}
            <p className="text-regular text-black dark:text-white">
              {featureTab.li6}
            </p>
          </li>
          <li className="flex items-center justify-start gap-4 	  p-5">
            {featureTab.li7_Icon}
            <p className="text-regular text-black dark:text-white">
              {featureTab.li7}
            </p>
          </li>
        </div>
        <div className="mt-16 w-full">
          <Link
            className=" inline-flex w-full items-center justify-center gap-2 rounded border border-primaryho bg-primary px-8 py-3 text-white hover:bg-primaryho  focus:outline-none focus:ring "
            href="#"
          >
            <span className="text-lg font-bold"> Use this Solution </span>

            <ArrowRightIcon className="h-5 w-5 text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTabItem;
