"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  ArrowRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/20/solid";

function Reporting() {
    return (
<div
id="operations"
className=" mx-auto flex	 max-w-c-1390 flex-col gap-4 bg-stone-50		px-4			 pb-12 pt-24 dark:bg-black md:px-8 md:pb-24 md:pt-37.5 "
>
<div className="text-center">
  <h2 className="mx-auto mb-3 text-3xl font-bold text-black dark:text-white   lg:text-hero">
    Stay on track with real-time reporting.
  </h2>
</div>
<div className="mx-auto mb-4 text-center text-sm text-black dark:text-white ">
  <p className="  ">
    Set goals, track progress, and manage resources more effectively
    with powerful reporting features.
  </p>
</div>
<div className="md:px-16">
  <div className="mx-auto flex max-w-c-1390 flex-col gap-4  rounded-lg  bg-rose-400   transition   duration-100 ease-linear hover:scale-[0.99]  hover:shadow-solid-10 lg:flex-row   ">
    <article className=" w-full px-12 py-12   lg:w-2/3">
      <h3 className="mb-5  w-full text-3xl font-bold text-white md:text-sectiontitle2 ">
        Dashboards
      </h3>

      <p className="text-md   w-full  text-justify text-white ">
        Bring important project indicators into one place with
        Dashboards. Add visual widgets for team members, tasks, sprints,
        time tracking, statuses, docs, embeds, and more.
      </p>
    </article>
    <div>
      <Image
        src={"/product/team-collaborate/dashboards.png"}
        width={900}
        height={900}
        alt="overview"
      />
    </div>
  </div>
</div>
<section className="mx-auto grid max-w-c-1390 grid-cols-1 gap-8 py-4 md:grid-cols-3 md:px-16 ">
  <div className="col-span-1 rounded-lg  bg-gray-100 p-4   transition duration-100 ease-linear hover:scale-[0.99]  hover:shadow-solid-10 dark:bg-blackho">
    <article className=" w-full px-6 py-9   ">
      <h3 className="mb-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2  ">
        Workload & Box view
      </h3>

      <p className="text-md   w-full  text-justify  ">
        Visualize your team's day-by-day work capacity with Workload and
        Box views. See who is under or over capacity to reduce
        bottlenecks and allocate resources effectively.
      </p>
    </article>
  </div>
  <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 transition duration-100 ease-linear hover:scale-[0.99] hover:shadow-solid-10 dark:bg-blackho  md:col-span-2 lg:flex-row">
    <article className=" w-full px-6 py-9   ">
      <h3 className="mb-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2  ">
        Goals
      </h3>

      <p className="text-md   w-full  text-justify ">
        Measure your project goals by tying them to specific tasks,
        numbers, monetary values, and more. Organize your OKRs and
        Sprints into Goal Folders and automatically track your progress
        for linked tasks.
      </p>
    </article>
    <div className="">
      <Image
        // className="absolute bottom-2 h-auto w-auto lg:-right-5 lg:bottom-0  lg:h-[600] lg:w-[600]"
        src={"/product/team-collaborate/goals.png"}
        width={900}
        height={900}
        alt="overview"
        className=""
      />
    </div>
  </div>
  <div className="col-span-1 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4 transition duration-100 ease-linear hover:scale-[0.99] hover:shadow-solid-10 dark:bg-blackho  md:col-span-2 lg:flex-row">
    <article className=" w-full px-6 py-9   ">
      <h3 className="my-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2  ">
        Milestones
      </h3>

      <p className="text-md   w-full  text-justify ">
        Set milestones to signify when an important stage in the project
        is complete.
      </p>
    </article>
    <div className="">
      <Image
        // className="absolute bottom-2 h-auto w-auto lg:-right-5 lg:bottom-0  lg:h-[600] lg:w-[600]"
        src={"/product/team-collaborate/milestones.png"}
        width={900}
        height={900}
        alt="overview"
        className=""
      />
    </div>
  </div>
  <div className="col-span-1 rounded-lg bg-gray-100  p-4  transition duration-100 ease-linear hover:scale-[0.99]  hover:shadow-solid-10 dark:bg-blackho">
    <article className=" w-full px-6 py-9   ">
      <h3 className="mb-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2  ">
        Pulse
      </h3>

      <p className="text-md   w-full  text-justify  ">
        View automatic activity reports powered by machine learning to
        easily see where your time is being spent.
      </p>
    </article>
  </div>
</section>
</div>
)
}

export default Reporting