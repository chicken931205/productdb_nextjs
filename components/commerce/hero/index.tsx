"use client";
import { ArrowRightIcon, StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from '/public/images/favicon.ico'
import CardImage from "/public/test1/hero/Software_Team.avif";
import FormImage from "/public/product/form.png";

function Hero() {
  const [currentTab, setCurrentTab] = useState("tabOne");
  return (
    <section>
      <div className="flex md:flex-row flex-col items-center justify-between gap-14">
        <div className="w-full lg:w-1/2">
          <h3 className="my-5  w-full text-4xl font-bold text-black dark:text-white md:text-hero ">
            View your work, your way.
          </h3>

          <p className="w-full text-lg font-semibold leading-6 text-black dark:text-white ">
            Tailor your task management, project tracking, and workflow
            visualization to your preferences. ProductDB 15+ views are fully
            customizable, empowering you to work the way that suits you best.
          </p>
          <div className="mx-auto mt-4 flex gap-3">
            <Link
              href="#"
              className=" text-md inline-flex items-center gap-1 rounded-lg  bg-primary px-8 py-2 font-bold text-white hover:opacity-90 md:gap-2.5  "
            >
              Get Started
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </Link>
            <div className="flex flex-col font-semibold">
              <span className="leading-6">Free forever. <br /> No credit card.</span>
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
            <div className="flex gap-1 items-center">
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
          <video
            className="rounded-lg border"
            width="600"
            height="auto"
            controls={false}
            autoPlay={true}
            muted={true}
            loop={true}
          >
            <source src="/product/pm-view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      {/* <div className=" flex flex-col gap-4 px-4 pb-12 pt-8 md:px-8 ">
        <div className="mx-auto text-center text-sm text-black dark:text-white">
          <p className="rounded-lg   bg-gray-200 px-3 py-1 dark:bg-blackho dark:text-white">
            Core Task Views
          </p>
        </div>
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-3/5  xl:text-hero">
            Simple yet powerful views for managing work
          </h2>
        </div>
      </div> */}
      {/* <div className=" max-w-c-1235 px-4 py-8 md:px-16 ">
        <div className="flex flex-col items-center  gap-8 md:flex-row lg:gap-12.5">
          <div className="w-full md:w-1/2">
            <div className="w-full">
              <h2
                onClick={() => setCurrentTab("tabOne")}
                className={`mb-6 cursor-pointer text-3xl font-bold text-gray-400 hover:text-primary dark:text-white xl:text-sectiontitle4 ${currentTab === "tabOne" ? `text-primary` : ""
                  }`}
              >
                List
              </h2>
              {currentTab === "tabOne" ? (
                <>
                  <p className="text-justify text-lg text-black dark:text-white md:pr-12">
                    Understand where all your work stands at a glance by
                    organizing tasks with flexible sorting, filtering, and
                    grouping options.
                  </p>
                  <div className="mb-4 mt-4 flex flex-wrap gap-3">
                    <Link
                      href={"#"}
                      className="rounded-lg border px-3 py-1 text-lg  font-bold text-primary shadow-sm hover:bg-gray-100 dark:text-white dark:hover:text-black "
                    >
                      Get Started
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
            <div className="w-full">
              <h2
                onClick={() => setCurrentTab("tabTwo")}
                className={`mb-6 cursor-pointer text-3xl font-bold text-gray-400 hover:text-primary dark:text-white xl:text-sectiontitle4 ${currentTab === "tabTwo" ? `text-primary` : ""
                  }`}
              >
                Board
              </h2>
              {currentTab === "tabTwo" ? (
                <>
                  <p className="text-justify text-lg text-black dark:text-white md:pr-12">
                    Create the perfect Kanban workflow to visualize task and
                    project progress. Group boards by status, assignee,
                    priority, and more to identify bottlenecks and keep your
                    projects moving.
                  </p>
                  <div className="mb-4 mt-4 flex flex-wrap gap-3">
                    <Link
                      href={"#"}
                      className="rounded-lg border px-3 py-1 text-lg font-bold  text-primary shadow-sm hover:bg-gray-100 dark:text-white dark:hover:text-black "
                    >
                      Get Started
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
            <div className="w-full">
              <h2
                onClick={() => setCurrentTab("tabThree")}
                className={`mb-6 cursor-pointer text-3xl font-bold text-gray-400 hover:text-primary dark:text-white xl:text-sectiontitle4 ${currentTab === "tabThree" ? `text-primary` : ""
                  }`}
              >
                Calender
              </h2>
              {currentTab === "tabThree" ? (
                <>
                  <p className="text-justify text-lg text-black dark:text-white md:pr-12">
                    Manage your work and team on a flexible calendar. Drag and
                    drop tasks for easy scheduling and launch meetings with
                    Google Calendar and Zoom integrations.
                  </p>
                  <div className="mb-4 mt-4 flex flex-wrap gap-3">
                    <Link
                      href={"#"}
                      className="rounded-lg border px-3 py-1 text-lg font-bold  text-primary shadow-sm hover:bg-gray-100 dark:text-white dark:hover:text-black "
                    >
                      Get Started
                    </Link>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="md:w-1/2  ">
            {currentTab === "tabOne" && (
              <div>
                <Image
                  src="/test1/hero/views-list.avif"
                  alt="About"
                  className=" rounded-md border "
                  height={500}
                  width={500}
                />
              </div>
            )}
            {currentTab === "tabTwo" && (
              <div>
                <Image
                  src="/test1/hero/views-board.avif"
                  alt="About"
                  className=" rounded-md border "
                  height={500}
                  width={500}
                />
              </div>
            )}
            {currentTab === "tabThree" && (
              <div>
                <Image
                  src="/test1/hero/views-calendar.avif"
                  alt="About"
                  className=" rounded-md border "
                  height={500}
                  width={500}
                />
              </div>
            )}
          </div>
        </div>
      </div> */}
      <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
        <div className="mx-auto text-center text-sm text-black dark:text-white">
          <p className="rounded-lg bg-gray-100 px-3 py-1 dark:bg-blackho dark:text-white">
            Page Views
          </p>
        </div>
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-3/5  xl:text-hero">
            Seamlessly collaborate on any project
          </h2>
        </div>
      </div>
      <div >
        <div className="grid grid-cols-1 gap-6  lg:grid-cols-3 md:px-16">
          <div className="rounded-lg border dark:border-none bg-white  dark:bg-blackho">
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
              <p className="font-bold text-black dark:text-white">
                Create beautiful Docs for any need
              </p>
              <p className="mt-4  text-sm/relaxed ">
                Create beautiful Docs, wikis, and more—then connect them to
                workflows to execute on ideas with your team. Collaborate in
                real time with comments, and convert text into trackable tasks
                to stay on top of ideas.
              </p>

              <div className="my-3 flex flex-wrap">
                <span className="text-black dark:text-white">Replaces:</span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  MS Word
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Google Docs
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border dark:border-none bg-white  dark:bg-blackho">
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
              <p className="font-bold text-black dark:text-white">
                Bring everyone together with Chat
              </p>
              <p className="mt-4  text-sm/relaxed ">
                Work smarter as a team with real-time chat. Tag individuals or
                groups, assign comments for action items, and link tasks to get
                more done together.
              </p>

              <div className="my-3 flex flex-wrap">
                <span className="text-black dark:text-white">Replaces:</span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Slack
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  MS Teams
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Google Hangouts
                </span>
              </div>
            </div>
          </div>
          <div className="rounded-lg border dark:border-none bg-white  dark:bg-blackho">
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
              <p className="font-bold text-black dark:text-white">
                Brainstorm and build on a visual canvas
              </p>
              <p className="mt-4  text-sm/relaxed ">
                Turn your team's ideas into coordinated actions with a virtual
                Whiteboard. Collaborate in real time, visualize processes and
                relationships, draw freehand, and more—all in ClickUp.
              </p>

              <div className="my-3 flex flex-wrap">
                <span className="text-black dark:text-white">Replaces:</span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Google Hangouts
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  Miro
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  |
                </span>
                <span className="ml-1 font-bold text-black dark:text-white">
                  LucidSpark
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 flex flex-col lg:flex-row gap-6">
            <div className="rounded-lg  lg:w-1/2 border dark:border-none bg-white  dark:bg-blackho">

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
                <p className="font-bold text-black dark:text-white">
                  Simplify your intake processes
                </p>
                <p className="mt-4  text-sm/relaxed ">
                  Streamline how your team collects information from customers,
                  prospects, and internal stakeholders. Automatically turn custom
                  forms and surveys into actionable, easy-to-manage tasks.
                </p>

                <div className="my-3 flex flex-wrap">
                  <span className="text-black dark:text-white">Replaces:</span>
                  <span className="ml-1 font-bold text-black dark:text-white">
                    Google Forms
                  </span>
                  <span className="ml-1 font-bold text-black dark:text-white">
                    |
                  </span>
                  <span className="ml-1 font-bold text-black dark:text-white">
                    Microsoft Forms
                  </span>
                  <span className="ml-1 font-bold text-black dark:text-white">
                    |
                  </span>
                  <span className="ml-1 font-bold text-black dark:text-white">
                    SurveyMonkey
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-lg  lg:w-1/2 border dark:border-none bg-white  dark:bg-blackho">
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
                <p className="font-bold text-black dark:text-white">
                  Bring all your resources into one place
                </p>
                <p className="mt-4  text-sm/relaxed ">
                  Save time from jumping between apps by adding spreadsheets,
                  docs, videos, and more alongside tasks, projects, and workflows.
                </p>


              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
