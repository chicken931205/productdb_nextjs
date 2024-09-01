import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import { cardData, cardData2, cardData3, cardData4, cardData5 } from "./data";

function Features() {
  return (
    <div>
      <div className=" flex flex-col  justify-center bg-[#EDFAFE] rounded-3xl px-6 py-8  dark:bg-blackho  lg:my-9  lg:flex-row lg:py-16">
        <div className="flex flex-col items-center justify-center  gap-6 p-4  ">
          <p className="w-full text-center text-md text-[#49CCF9] dark:text-white ">
            GET SOCIAL
          </p>
          <h3 className="w-fit  text-3xl font-extrabold text-center text-[#333333] dark:text-white md:text-hero">
            Join the productivity conversation.
          </h3>
          <p className="w-full text-center text-lg text-black  dark:text-white md:w-2/3 ">
            Meet other ProductDB users on social media and share your voice.
          </p>
          <div className="grid w-full grid-cols-1 gap-8 p-2 md:grid-cols-2 md:p-16 lg:grid-cols-4 ">
            {cardData.map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="flex flex-col items-start justify-center gap-3 rounded-xl bg-gray-50 p-6 dark:bg-black shadow-lg "
              >
                <div className="rounded-xl bg-[#49CCF9] p-3 text-white">
                  {item.icon}
                </div>
                <h2 className="pt-4 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h2>
                <div className="text-md text-start text-black dark:text-white">
                  {item.description}
                </div>
                <h2 className="flex items-center justify-start gap-2 pt-4 text-base font-semibold text-primary dark:text-white">
                  {item.buttonText}
                  <ArrowRightIcon className="h-5 w-5 text-[#49CCF9]" />
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col  justify-center bg-[#edfefa] rounded-3xl px-6 py-8  dark:bg-blackho  lg:my-9  lg:flex-row lg:py-16">
        <div className="flex w-fit flex-col items-center justify-center  gap-6 p-4  ">
          <p className="w-full text-center text-md text-[#00B884] dark:text-white ">
            FLEX YOUR EXPERTISE
          </p>
          <h3 className="w-fit  text-3xl font-extrabold text-center text-[#333333] dark:text-white md:text-hero">
            Become a ProductDB champion.
          </h3>
          <p className="w-full text-center text-lg text-black  dark:text-white md:w-2/3 ">
            Passionate about ProductDB? Share your love and know-how to unlock
            special resources, gifts, and rewards.
          </p>
          <div className="grid w-full grid-cols-1 gap-8 p-2 md:grid-cols-2 md:p-16 lg:grid-cols-3">
            {cardData2.map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="flex flex-col items-start justify-center gap-3 rounded-xl bg-gray-50 p-6 dark:bg-black shadow-lg "
              >
                <div className="rounded-xl bg-[#00B884] p-3 text-white">
                  {item.icon}
                </div>
                <h2 className="pt-4 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h2>
                <div className="text-md text-start text-black dark:text-white">
                  {item.description}
                </div>
                <h2 className="flex items-center justify-start gap-2 pt-4 text-base font-semibold text-primary dark:text-white">
                  {item.buttonText}
                  <ArrowRightIcon className="h-5 w-5 text-[#49CCF9]" />
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col  justify-center bg-[#F8F7FE] rounded-3xl px-6 py-8  dark:bg-blackho  lg:my-9  lg:flex-row lg:py-16">
        <div className="flex w-fit flex-col items-center justify-center  gap-6 p-4  ">
          <p className="w-full text-center text-base text-[#7B68EE] dark:text-white ">
            Learn and Grow
          </p>
          <h3 className="w-fit  text-3xl font-extrabold text-center text-[#333333] dark:text-white md:text-hero">
            Take your ProductDb skills to the next level.
          </h3>
          <p className="w-full text-center text-lg text-black  dark:text-white md:w-2/3 ">
            Become a ProductDb master in no time with these helpful resources.
          </p>
          <div className="grid w-full grid-cols-1 gap-8 p-2 md:grid-cols-2 md:p-16 lg:grid-cols-2">
            {cardData3.map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="flex flex-col items-start justify-center gap-3 rounded-xl bg-gray-50 p-6 dark:bg-black shadow-lg "
              >
                <div className="rounded-xl bg-[#7B68EE] p-3 text-white">
                  {item.icon}
                </div>
                <h2 className="pt-4 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h2>
                <div className="text-md text-start text-black dark:text-white">
                  {item.description}
                </div>
                <h2 className="flex items-center justify-start gap-2 pt-4 text-base font-semibold text-primary dark:text-white">
                  {item.buttonText}
                  <ArrowRightIcon className="h-5 w-5 text-[#49CCF9]" />
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col  justify-center bg-[#F5EEFC] rounded-3xl px-6 py-8  dark:bg-blackho  lg:my-9  lg:flex-row lg:py-16">
        <div className="flex w-fit flex-col items-center justify-center  gap-6 p-4  ">
          <p className="w-full text-center text-base text-[#9B51E0] dark:text-white ">
            Discover What's New
          </p>
          <h3 className="w-fit  text-3xl font-extrabold text-center text-[#333333] dark:text-white md:text-hero">
            Stay up-to-date on all things ProductDB.
          </h3>
          <p className="w-full text-center text-lg text-black  dark:text-white md:w-2/3 ">
            Meer informatie about our recent innovations at an event or in our
            product release notes.
          </p>
          <div className="grid w-full grid-cols-1 gap-8 p-2 md:grid-cols-2 md:p-16 ">
            {cardData4.map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="flex flex-col items-start justify-center gap-3 rounded-xl bg-gray-50 p-6 dark:bg-black shadow-lg "
              >
                <div className="rounded-xl bg-[#9B51E0] p-3 text-white">
                  {item.icon}
                </div>
                <h2 className="pt-4 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h2>
                <div className="text-md text-start text-black dark:text-white">
                  {item.description}
                </div>
                <h2 className="flex items-center justify-start gap-2 pt-4 text-base font-semibold text-primary dark:text-white">
                  {item.buttonText}
                  <ArrowRightIcon className="h-5 w-5 text-[#49CCF9]" />
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex flex-col  justify-center bg-[#FFF8FB] rounded-3xl px-6 py-8  dark:bg-blackho  lg:my-9  lg:flex-row lg:py-16">
        <div className="flex w-fit flex-col items-center justify-center  gap-6 p-4  ">
          <p className="w-full text-center text-base text-[#FD71AF] dark:text-white ">
            CONNECT WITH SPECIALISTS
          </p>
          <h3 className="w-fit  text-3xl font-extrabold text-center text-[#333333] dark:text-white md:text-hero">
            Partner with us or our consultants.
          </h3>
          <p className="w-full text-center text-lg text-black  dark:text-white md:w-2/3 ">
            Maximize your ProductDB investment with expert guidance from proven
            pros.
          </p>
          <div className="grid w-full grid-cols-1 gap-8 p-2 md:grid-cols-2 md:p-16 ">
            {cardData5.map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="flex flex-col items-start justify-center gap-3 rounded-xl bg-gray-50 p-6 dark:bg-black shadow-lg "
              >
                <div className="rounded-xl bg-[#FD71AF] p-3 text-white">
                  {item.icon}
                </div>
                <h2 className="pt-4 text-xl font-bold text-black dark:text-white">
                  {item.title}
                </h2>
                <div className="text-md text-start text-black dark:text-white">
                  {item.description}
                </div>
                <h2 className="flex items-center justify-start gap-2 pt-4 text-base font-semibold text-primary dark:text-white">
                  {item.buttonText}
                  <ArrowRightIcon className="h-5 w-5 text-[#49CCF9]" />
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
