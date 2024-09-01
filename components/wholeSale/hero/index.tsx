"use client";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "/public/images/favicon.ico";
import CardImage from "/public/test1/hero/Software_Team.avif";
import FormImage from "/public/product/form.png";
import { imagesData } from "./data";

function Hero() {
  const [currentTab, setCurrentTab] = useState("tabOne");
  return (
    <section className="mx-auto max-w-c-1390">
      <div className="flex flex-col items-center justify-between  lg:flex-row">
        <div className="px-0 sm:px-16 lg:w-1/2 ">
          <h3 className="my-3  w-full text-4xl font-extrabold text-black dark:text-white md:text-hero  ">
            Grow & manage your startup in one place.
          </h3>

          <p className="w-full text-lg font-semibold  text-black dark:text-white ">
            TBuild your business for long-term success by organizing all of your
            ideas, workflows, and teamwork in a single, shared place.
          </p>
          <ul className="mt-5 list-disc pl-4 font-semibold text-black dark:text-white md:pl-16">
            <li>Build product roadmaps that connect to daily work</li>
            <li>Track goals with real-time reporting</li>
            <li>Manage & maximize team resources</li>
            <li>Collaborate with your teams seamlessly</li>
          </ul>

          <div className="mx-auto mt-4 flex gap-3">
            <Link
              href="#"
              className=" text-md inline-flex items-center gap-1 rounded-lg  bg-primary px-8 py-2 font-bold text-white hover:opacity-90 md:gap-2.5  "
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </Link>
            <div className="flex flex-col font-semibold">
              <span className="leading-6">
                Free forever. <br /> No credit card.
              </span>
            </div>
          </div>
          <div className="mt-2 flex gap-3">
            <div className="flex">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-sm text-black dark:text-white">
                25,000+ reviews from
              </p>
              <div>
                <Image src={Logo} alt="ProductDB" width={16} height={16} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/wholesale/Goals_OKRs_List_view.avif"}
            alt="ProductDB"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6 px-4 py-4 lg:py-12">
        <div className="w-full text-center">
          <p className="font-medium text-black dark:text-white">
            Trusted by 2 million+ teams
          </p>
        </div>
        {/* <div className="flex gap-4">
          {imagesData.map((img, index) => (
            <div>{img}</div>
          ))}
        </div> */}
      </div>
      <div className="flex flex-col items-center gap-6 py-8 lg:flex-row">
        <div className="p-4  lg:w-1/2">
          <div className=" flex items-start justify-start">
            <p className="rounded-lg bg-gray-100  px-3 py-1 text-xs text-black dark:bg-blackho dark:text-white">
              Roadmap
            </p>
          </div>
          <h3 className="my-5  w-full text-4xl font-extrabold text-black dark:text-white lg:w-4/5 ">
            Connect your roadmaps to daily work.
          </h3>

          <p className="w-full text-lg font-semibold leading-6 text-black dark:text-white ">
            Manage everything from product roadmaps to sales pipelines in a
            single place with 10+ customizable views. Schedule releases on a
            Calendar, create bug tracking systems on a List, or adjust timelines
            on a Gantt chart.
          </p>
          <div className="mt-9">
            <Link
              href="#"
              className=" text-md inline-flex items-center gap-1 rounded-xl  bg-gray-100 px-5 py-2 font-bold text-primary hover:bg-gray-200 hover:opacity-90   "
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-purple-600  py-4 lg:w-1/2">
          <Image
            src={"/wholesale/Gantt_Project-Roadmap_Mobile-App.avif"}
            alt=""
            width={600}
            height={600}
            className="rounded-xl shadow-2xl lg:-ml-4"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center gap-6 py-8 lg:flex-row">
        <div className="rounded-xl bg-[#31B0FF] py-4 ">
          <Image
            src={"/wholesale/hierarchy_v2.avif"}
            alt=""
            width={600}
            height={600}
            className="-mr-4 rounded-xl shadow-2xl"
          />
        </div>
        <div className="p-4  lg:w-1/2">
          <div className=" flex items-start justify-start">
            <p className="rounded-lg bg-gray-100  px-3 py-1 text-xs text-black dark:bg-blackho dark:text-white">
              Scale
            </p>
          </div>
          <h3 className="my-5  w-full text-4xl font-extrabold text-black dark:text-white  lg:w-4/5">
            Scale from startup to unicorn.
          </h3>

          <p className="w-full text-lg font-semibold leading-6 text-black dark:text-white ">
            Build the perfect organization that grows with your startup.
            ClickUp's Hierarchy makes it easy to expand your team and manage
            more complex projects as you bring on more resources.
          </p>
          <div className="mt-9">
            <Link
              href="#"
              className=" text-md inline-flex items-center gap-1 rounded-xl  bg-gray-100 px-5 py-2 font-bold text-primary hover:bg-gray-200 hover:opacity-90   "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 py-8 lg:flex-row">
        <div className="p-4  lg:w-1/2">
          <div className=" flex items-start justify-start">
            <p className="rounded-lg bg-gray-100  px-3 py-1 text-xs text-black dark:bg-blackho dark:text-white">
              Collaborate
            </p>
          </div>
          <h3 className="my-5  w-full text-4xl font-extrabold text-black dark:text-white  lg:w-4/5">
            Move team ideas to action, faster.
          </h3>

          <p className="w-full text-lg font-semibold leading-6 text-black dark:text-white ">
            Create beautiful Docs, wikis, and more—then connect them to
            workflows to execute on ideas with your team. Assign comments with
            action items, chat in real-time, share attachments, and never miss a
            beat with notifications that bring everything in one place.
          </p>
          <div className="mt-9">
            <Link
              href="#"
              className=" text-md inline-flex items-center gap-1 rounded-xl  bg-gray-100 px-5 py-2 font-bold text-primary hover:bg-gray-200 hover:opacity-90   "
            >
              Get Started
            </Link>
          </div>
        </div>
        <div className="rounded-xl bg-[#FC3F75]  py-4 lg:w-1/2">
          <Image
            src={"/wholesale/Goals_Docs_v4.avif"}
            alt=""
            width={600}
            height={600}
            className="rounded-xl shadow-2xl lg:-ml-4"
          />
        </div>
      </div>
      <div className="flex flex-col-reverse items-center gap-6 py-8 lg:flex-row">
        <div className="rounded-xl bg-[#9612F6]  py-4 ">
          <Image
            src={"/wholesale/Gantt_Project-Roadmap_Mobile-App.avif"}
            alt=""
            width={600}
            height={600}
            className="-mr-4 rounded-xl shadow-2xl"
          />
        </div>
        <div className="p-4  lg:w-1/2">
          <div className=" flex items-start justify-start"></div>
          <h3 className="my-5  w-full text-4xl font-extrabold text-black dark:text-white  lg:w-4/5">
            See everything at a glance with Dashboards.
          </h3>

          <p className="w-full text-lg font-semibold leading-6 text-black dark:text-white ">
            Bring all of your success indicators into one place. Add visual
            widgets for team members, tasks, sprints, time tracking, statuses,
            docs, embeds, and more.
          </p>
          <div className="mt-9">
            <Link
              href="#"
              className=" text-md inline-flex items-center gap-1 rounded-xl  bg-gray-100 px-5 py-2 font-bold text-primary hover:bg-gray-200 hover:opacity-90   "
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
        <div className="mx-auto text-center text-sm text-black dark:text-white">
          <p className="rounded-lg bg-gray-100 px-3 py-1 dark:bg-blackho dark:text-white">
            Page Views
          </p>
        </div>
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-5xl font-extrabold text-black dark:text-white md:w-3/5  ">
            Seamlessly collaborate on any project
          </h2>
        </div>
      </div>
      {/* <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:px-16 lg:grid-cols-3 xl:grid-cols-4">
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={CardImage.width}
              height={CardImage.height}
              src={CardImage}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Docs
              </h3>

              <p className="mt-4  text-sm/relaxed ">
                Create beautiful Docs, wikis, and more—then connect them to
                workflows to execute on ideas with your team. Collaborate in
                real time with comments, and convert text into trackable tasks
                to stay on top of ideas.
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={CardImage.width}
              height={CardImage.height}
              src={CardImage}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Chat
              </h3>

              <p className="mt-4  text-sm/relaxed ">
                Work smarter as a team with real-time chat. Tag individuals or
                groups, assign comments for action items, and link tasks to get
                more done together.
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={CardImage.width}
              height={CardImage.height}
              src={CardImage}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Whiteboards
              </h3>

              <p className="mt-4  text-sm/relaxed ">
                Turn your team's ideas into coordinated actions with a virtual
                Whiteboard. Collaborate in real time, visualize processes and
                relationships, draw freehand, and more—all in ClickUp.
              </p>
            </div>
          </div>
          <div className="rounded-lg  border bg-white dark:border-none dark:bg-blackho  ">
            <Image
              alt=""
              width={FormImage.width}
              height={FormImage.height}
              src={FormImage}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Forms
              </h3>

              <p className="mt-4  text-sm/relaxed ">
                Streamline how your team collects information from customers,
                prospects, and internal stakeholders. Automatically turn custom
                forms and surveys into actionable, easy-to-manage tasks.
              </p>
            </div>
          </div>
          <div className="rounded-lg  border bg-white dark:border-none dark:bg-blackho  ">
            <Image
              alt=""
              width={CardImage.width}
              height={CardImage.height}
              src={CardImage}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Embed
              </h3>

              <p className="mt-4  text-sm/relaxed ">
                Save time from jumping between apps by adding spreadsheets,
                docs, videos, and more alongside tasks, projects, and workflows.
              </p>
            </div>
          </div>
          <div className="rounded-lg  border bg-white dark:border-none dark:bg-blackho  ">
            <Image
              alt=""
              width={CardImage.width}
              height={CardImage.height}
              src={CardImage}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Embed
              </h3>

              <p className="mt-4  text-sm/relaxed ">
                Save time from jumping between apps by adding spreadsheets,
                docs, videos, and more alongside tasks, projects, and workflows.
              </p>
            </div>
          </div>
          <div className="rounded-lg  border bg-white dark:border-none dark:bg-blackho  ">
            <Image
              alt=""
              width={CardImage.width}
              height={CardImage.height}
              src={CardImage}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Embed
              </h3>

              <p className="mt-4  text-sm/relaxed ">
                Save time from jumping between apps by adding spreadsheets,
                docs, videos, and more alongside tasks, projects, and workflows.
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}

export default Hero;
