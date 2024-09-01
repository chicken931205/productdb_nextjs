import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Overview() {
  return (
    <div id="overview" className="mx-auto mb-16 max-w-c-1390">
      <div className="flex flex-col gap-4 px-4 pb-6 pt-16 md:px-8 md:pb-12 md:pt-37.5 2xl:px-0">
        <div className="text-center">
          <h2 className=" mb-3 text-3xl font-bold text-black dark:text-white  lg:text-hero ">
            ProductDB Overview.
          </h2>
        </div>
        <div className="w-full text-center text-xl">
          <p className="mx-auto  text-sm sm:w-4/5 md:w-3/5">
            ProductDB unique Hierarchy helps you create the perfect structure
            that scales with your needs. Each level of ClickUp gives you more
            flexibility and control to organize everything from small teams to
            enterprise companies.
          </p>
        </div>

        <div className="mt-4 md:px-8">
          <div className=" duration-80  my-6  flex max-w-c-1390 flex-col gap-4  rounded-lg bg-violet-500  p-4   transition ease-linear  hover:scale-[0.99] lg:flex-row   ">
            <article className=" w-full px-5 py-8 md:w-full md:px-8 md:py-16 lg:w-2/3">
              <h3 className="my-5  w-full text-lg font-bold text-white md:text-hero ">
                Everything view
              </h3>

              <p className="text-md  w-full   text-justify text-white ">
                ProductDB's Everything view makes it easy to find anything
                you're looking for, no matter where it lives in the Hierarchy.
                It's your birds-eye view for all tasks across every level of
                your organization that can be filtered, sorted, and saved for
                any need.
              </p>
            </article>
            <Image
              className=" h-auto w-auto   "
              src={"/product/overview/everything.png"}
              width={600}
              height={600}
              alt="overview"
            />
          </div>
        </div>
      </div>
      <section className=" grid grid-cols-1 gap-8 md:grid-cols-2 md:px-16">
        <div className="duration-80 col-span-1 p-4 transition  ease-linear hover:scale-[0.99]">
          <div className="flex flex-col gap-4 rounded-lg  bg-white px-4 pt-9 shadow-lg hover:shadow-2xl dark:bg-blacksection  md:px-16 lg:flex-row">
            <article className="w-full">
              <h3 className="my-5 w-full text-lg font-bold text-black dark:text-gray-100 md:text-sectiontitle2">
                Space, Folder, List
              </h3>
              <p className="text-md w-full text-black dark:text-gray-100">
                Organize teams and departments into Spaces, group big projects
                or initiatives into Folders, and break out tasks into Lists for
                a clear visual hierarchy of all your work.
                <span className="flex items-center justify-start gap-4 text-primary">
                  Meer informatie
                </span>
              </p>
              <img
                className="mt-8"
                src={"/product/overview/space-folder-list.png"}
                width={400}
                height={400}
                alt="overview"
              />
            </article>
          </div>
        </div>
        <div className="duration-80 col-span-1 p-4 transition  ease-linear hover:scale-[0.99]">
          <div className="flex flex-col gap-4 rounded-lg  bg-white px-4 pt-9 shadow-lg hover:shadow-2xl dark:bg-blacksection  md:flex-row md:px-14">
            <article className="w-full">
              <h3 className="my-5 w-full text-lg font-bold text-black dark:text-gray-100 md:text-sectiontitle2">
                Customizable Tasks
              </h3>
              <p className="text-md w-full text-black dark:text-gray-100">
                Choose from 35+ ClickApps to customize your task management for
                any work need. Save time with task Automations, assign Sprint
                Points, add Custom Field data, and more.
              </p>
              <img
                className="mt-8"
                src={"/product/overview/assign-comments.png"}
                width={400}
                height={400}
                alt="overview"
              />
            </article>
          </div>
        </div>
        <div className="duration-80 col-span-1 p-4 transition ease-linear  hover:scale-[0.99] md:col-span-2">
          <div className="flex flex-col gap-4 rounded-lg  bg-white p-4  shadow-lg hover:shadow-2xl dark:bg-blacksection md:flex-row lg:px-16 lg:py-20">
            <article className="lg:w-2/3">
              <h3 className="my-5 w-full text-lg font-bold text-black dark:text-white md:text-sectiontitle2">
                Nested subtasks & checklists
              </h3>
              <p className="text-md w-full text-black dark:text-white lg:w-2/3">
                Simplify complex projects by breaking them down into levels of
                subtasks. Create checklists within tasks to track anything from
                multi-step workflows to simple to-do lists.
                <span className="flex items-center justify-start gap-4 text-primary">
                  Meer informatie
                </span>
              </p>
            </article>
            <div className="lg:w-1/3">
              <Image
                src={"/product/overview/checklists.png"}
                width={600}
                height={600}
                alt="overview"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Overview;
