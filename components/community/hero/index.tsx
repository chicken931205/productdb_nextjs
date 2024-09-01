import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cardData } from "../feature/data";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

function Hero() {
  return (
    <div>
      <div className=" flex   flex-col justify-center px-6 py-8  lg:flex-row lg:py-16">
        <div className="flex w-fit flex-col  gap-6 p-4   lg:pr-20">
          <h3 className="w-fit  text-3xl font-extrabold  text-black dark:text-white md:text-hero">
            Join our global community.
          </h3>
          <p className="w-full text-lg  text-black dark:text-white ">
            If you love ProductDB, you're in the right place. See how you can
            deepen your knowledge, show off your skills, and connect with the
            wider productivity-community.
          </p>

          <ul className="grid grid-cols-2 gap-9 text-base font-bold text-black dark:text-white lg:pl-4">
            <li className=" flex gap-2">
              <CheckCircleIcon className="h-6 w-6 text-[#0BA959]" />
              Share ideas
            </li>
            <li className=" flex gap-2">
              <CheckCircleIcon className="h-6 w-6 text-[#0BA959]" />
              Get involved
            </li>
            <li className=" flex gap-2">
              <CheckCircleIcon className="h-6 w-6 text-[#0BA959]" />
              Learn and grow
            </li>
            <li className=" flex gap-2">
              <CheckCircleIcon className="h-6 w-6 text-[#0BA959]" />
              See what's new
            </li>
          </ul>
        </div>
        <div className="w-full  ">
          <Image
            src={"/community/header_image.avif"}
            alt=""
            width={700}
            height={700}
          />
        </div>
      </div>
      <div className=" my-8 flex flex-col justify-center rounded-3xl  bg-[#FFF8FB] px-6 py-8 dark:bg-black  lg:flex-row lg:py-16">
        <div className="flex w-fit flex-col  gap-6 p-4  md:pl-8   lg:pr-20">
          <p className="w-full text-lg  text-[#FD71BB] dark:text-white ">
            Share Your Ideas
          </p>
          <h3 className="w-fit  text-3xl font-extrabold  text-black dark:text-white md:text-hero">
            Help us make ProductDB even better.
          </h3>
          <p className="h-1 w-24 rounded-2xl  bg-[#FD71BB]  "></p>
          <p className="w-full text-base  text-black dark:text-white ">
            Have a great idea to improve the ProductDB experience? Share it with
            us on Canny!
          </p>
          <div className="mt-6">
            <Link
              href="#"
              className="rounded-md border  bg-primary px-5 py-4 text-base font-bold leading-6 text-white  "
            >
              Submit Your Idea
            </Link>
          </div>
        </div>
        <div className="w-full  ">
          <Image
            src={"/community/Group.avif"}
            alt=""
            width={700}
            height={700}
          />
        </div>
      </div>
    
    </div>
  );
}

export default Hero;
