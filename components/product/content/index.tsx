import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Content() {
  return (
    <div id="content" className="mb-16">
      <div className="mx-auto flex max-w-c-1390 flex-col gap-4 px-4 pb-6 pt-16 md:px-8 md:pb-12 md:pt-37.5 2xl:px-0">
        <div className="text-center">
          <h2 className="mx-auto mb-3 text-3xl font-bold text-black dark:text-white md:w-2/3  lg:text-hero ">
            Customize ClickUp for any need, no code required.
          </h2>
        </div>
        <div className="w-full text-center text-xl">
          <p className=" mx-auto text-sm sm:w-4/5 md:w-3/5">
            Everything in ClickUp can be easily customized to manage any type of
            project, no code or add-ons required.
          </p>
        </div>

        <div className="mt-12">
          <section className="my-6  md:px-16 ">
            <div className="relative">
              <div className="mx-auto flex flex-col gap-4 rounded-lg bg-yellow-500 lg:flex-row      ">
                <div className=" w-full px-9 py-12 lg:w-2/3">
                  <h3 className="my-5  w-full text-lg font-bold text-white md:text-sectiontitle2 ">
                    ProductDB
                  </h3>

                  <p className="text-md  max-w-md text-justify text-white font-semibold ">
                    Tailor your tasks for any work need with 35+ ClickApps that
                    each add different functionalities. Save time with task
                    Automations, assign Sprint Points, add Custom Fields, and
                    more
                  </p>
                  <div className="mt-8">
                    <Link
                      href={"#"}
                      className="inline-flex items-center gap-2.5 rounded-md bg-primary shadow-solid-10  px-8 py-3 text-sm font-bold text-white hover:opacity-90  "
                    >
                      Visit App Center
                    </Link>
                  </div>
                </div>
                <div className="lg:-mr-10">
                  <Image
                    src={"/product/customization-images/clickapps_v2.png"}
                    width={900}
                    height={900}
                    alt="overview"
                    className=""
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="mx-auto grid max-w-c-1390 grid-cols-1 gap-4 lg:gap-8 md:grid-cols-3 md:px-16 ">
        <div className="col-span-1 m-4  rounded-lg bg-gray-100  dark:bg-blacksection hover:shadow-solid-10 transition ease-linear  hover:scale-[0.99] duration-100">
          <article className=" w-full px-6 py-9   ">
            <h3 className="mb-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2 ">
              Automations
            </h3>

            <p className="text-md   w-full  text-justify  ">
              Automate routine work and processes with 50+ actions, triggers,
              and conditions. Use pre-built automation recipes or customize them
              based on your needs.
            </p>
          </article>
        </div>
        <div className="col-span-1 m-4 flex flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-blacksection transition ease-linear  hover:scale-[0.99] duration-100 hover:shadow-solid-10 md:col-span-2  lg:flex-row">
          <article className=" w-full px-6 py-9   ">
            <h3 className="mb-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2 ">
              Templates
            </h3>

            <p className="text-md   w-full  text-justify ">
              Save time by leveraging hundreds of templates for team use cases,
              views, tasks, checklists, Docs, and more.
            </p>
          </article>
          <div className="">
            <Image
              // className="absolute bottom-2 h-auto w-auto lg:-right-5 lg:bottom-0  lg:h-[600] lg:w-[600]"
              src={"/product/customization-images/custom-templates.png"}
              width={900}
              height={900}
              alt="overview"
              className=""
            />
          </div>
        </div>
        <div className="col-span-1 m-4 flex flex-col items-center justify-center rounded-lg bg-gray-100 dark:bg-blacksection transition ease-linear  hover:scale-[0.99] duration-100 hover:shadow-solid-10 md:col-span-2 lg:flex-row">
          <article className=" w-full px-6 py-9   ">
            <h3 className="mb-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2 ">
              Relationships
            </h3>

            <p className="text-md   w-full  text-justify ">
              Create the perfect visual database with Relationships. Link tasks,
              documents, integrations and more to access everything you need in
              one place.
            </p>
          </article>
          <div className="">
            <Image
              // className="absolute bottom-2 h-auto w-auto lg:-right-5 lg:bottom-0  lg:h-[600] lg:w-[600]"
              src={"/product/customization-images/dependencies.png"}
              width={900}
              height={900}
              alt="overview"
              className="p-2"
            />
          </div>
        </div>
        <div className="col-span-1  m-4  rounded-lg bg-gray-100  dark:bg-blacksection transition ease-linear  hover:scale-[0.99] duration-100 hover:shadow-solid-10">
          <article className=" w-full px-6 py-9   ">
            <h3 className="mb-5  w-full text-lg font-bold text-black dark:text-white md:text-xl lg:text-2xl xl:text-sectiontitle2 ">
              Integrations
            </h3>

            <p className="text-md   w-full  text-justify  ">
              Automate routine work and processes with 50+ actions, triggers,
              and conditions. Use pre-built automation recipes or customize them
              based on your needs.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Content;
