'use client'

import {
  PlayIcon,

} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoreValuesColorfulGrid from "../core-values";


function Hero() {
  return (

    <div>
      <div className=" bg-[url('/our-story/bg-gradient.png')] bg-no-repeat bg-cover  min-h-[500px]  mx-auto flex w-full flex-col  md:pt-20 justify-center  lg:flex-row">
        <div className="flex  flex-col  gap-2 p-4  ">
          <h3 className="w-full text-4xl  font-bold text-white md:w-2/3 md:text-hero ">
            We are ProductDB.
          </h3>
          <p className="w-full  text-lg text-gray-100   md:w-2/3">
            A great workplace combines exceptional people with challenging
            problems.
          </p>
          <div className="">
            <Link
              href="#"
              className="text-md inline-flex w-full items-center justify-start gap-2.5  rounded-md   py-2.5 font-bold text-white hover:opacity-90 md:w-auto md:gap-2.5"
            >
              <div className="flex rounded-full  bg-primaryho p-3">
                <PlayIcon className="h-5 w-5 " />
              </div>
              <div className=" w-2/3 text-start text-sm ">
                Watch the video to Meer informatie about us.
              </div>
            </Link>
          </div>
        </div>
        <div className="p-2  ">
          <Image
            src={"/our-story/clickup-people.png"}
            alt=""
            width={700}
            height={700}
            className=" object-cover"
          />
        </div>
      </div>
      <div className=" flex flex-col px-4  py-8 lg:flex-row justify-center max-w-c-1390  mx-auto lg:py-16">
        <div className="flex w-fit flex-col  gap-6 p-4  md:pl-8 md:pt-12  ">
          <p className="w-fit  text-xs font-bold  text-primary dark:text-white ">
            MISSION
          </p>
          <h3 className="w-fit  text-3xl  font-bold text-black dark:text-white  md:text-hero border-b-4 border-primary">
            Our mission.
          </h3>
          <p className="text-sm  w-full  text-black dark:text-white ">
            While we absolutely love productivity software, we believe
            productivity, in general, is broken. There are just too many tools
            to keep track of, too many things in entirely separate ecosystems.
            There has to be a better way to work - that's why we created
            ClickUp, first an internal tool, now as a way to fulfill our vision
            of making the world more productive.
          </p>
          <p className="text-sm  w-full  text-black dark:text-white ">
            Eventually, our goal is to have all work live in ClickUp - thereby
            making people more productive and giving back at least 20% of time
            to dedicate to other things. One app to replace them all. We're just
            getting started, and are so grateful for all of the 2 million teams
            that are in this together with our team.
          </p>
        </div>
        <div className="w-full  ">
          <Image
            src={"/company-career/our-mission.svg"}
            alt=""
            width={700}
            height={700}
            className="hover:scale-95 "
          />
        </div>
      </div>

      <CoreValuesColorfulGrid />
      <div className=" bg-primary ">
        <div className="max-w-c-1390 mx-auto flex flex-col lg:flex-row justify-center items-center  lg:items-center lg:justify-start gap-4 lg:gap-8 bg-purple-500 py-16 md:px-16">
          <div className=" flex items-center justify-center rounded-full bg-white h-48 w-48">
            <svg
              width="120"
              height="96"
              viewBox="0 0 120 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M120 -9.53674e-07V16.4059C113.446 18.1148 108.462 20.5073 105.051 23.5834C101.549 26.6595 98.7654 30.5474 96.7003 35.247C94.6352 40.032 93.6027 45.8425 93.6027 52.6782C102.132 52.6782 108.418 54.9853 112.458 59.5995C116.498 64.2136 118.519 69.1268 118.519 74.3391C118.519 80.4059 116.274 85.5327 111.785 89.7196C107.295 93.9065 102.043 96 96.0269 96C88.3053 96 81.6611 92.7957 76.0943 86.3872C70.4377 80.0641 67.6094 71.3912 67.6094 60.3685C67.6094 50.6275 69.8092 41.4846 74.2088 32.9399C78.6083 24.4806 84.624 17.2176 92.2559 11.1509C99.798 5.16956 109.046 1.4526 120 -9.53674e-07ZM52.5253 -9.53674e-07V16.4059C45.9708 18.1148 40.9428 20.5073 37.4411 23.5834C33.9394 26.6595 31.156 30.5474 29.0909 35.247C27.0258 40.032 25.9933 45.8425 25.9933 52.6782C34.523 52.6782 40.853 54.9853 44.9832 59.5995C49.0236 64.2136 51.0438 69.1268 51.0438 74.3391C51.0438 80.4059 48.7991 85.5327 44.3098 89.7196C39.8204 93.9065 34.6128 96 28.6869 96C20.7856 96 14.0516 92.7957 8.48484 86.3872C2.82828 80.0641 -1.61395e-05 71.3912 -1.61395e-05 60.3685C-1.61395e-05 50.6275 2.24466 41.4846 6.734 32.9399C11.1336 24.4806 17.1493 17.2176 24.7811 11.1509C32.3232 5.16956 41.5713 1.4526 52.5253 -9.53674e-07Z"
                fill="#FFC800"
              ></path>
            </svg>
          </div>
          <div className="flex text-center lg:text-left flex-col gap-8">
            <p className="w-full  text-xs font-bold  text-yellow-300">
              OUR MOTTO
            </p>
            <h3 className="w-full text-6xl  font-bold text-white  ">
              Save one day every week.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
