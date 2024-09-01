"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1154 space-y-10 px-10">
          <div className=" flex items-center justify-between gap-4   ">
            {featuresTabData.map((feature, index) => (
              <div
                key={index}
                onClick={() => setCurrentTab(feature.id)}
                className={clsx(
                  `flex w-full max-w-[150px] cursor-pointer flex-col items-center gap-1 rounded-xl bg-white p-5  dark:bg-black`,
                  {
                    "border-2 border-primary shadow-solid-10 dark:shadow-solid-11 dark:border-white ":
                      currentTab === feature.id,
                    "border border-gray-500 ": currentTab !== feature.id,
                  },
                )}
              >
                <div
                  className={clsx("", {
                    "text-primary dark:text-slate-200":
                      currentTab === feature.id,
                    "text-gray-400 dark:text-slate-500":
                      currentTab !== feature.id,
                  })}
                >
                  {feature.icon}
                </div>

                <button
                  className={clsx("text-sm font-semibold dark:text-white ", {
                    "font-extrabold text-primary dark:text-slate-200":
                      currentTab === feature.id,
                    "text-gray-400 dark:text-slate-500":
                      currentTab !== feature.id,
                  })}
                >
                  {feature.text}
                </button>
              </div>
            ))}

            <Link
              href={"/for"}
              className={`relative flex w-full cursor-pointer flex-col items-center gap-1  rounded-xl   border-stroke p-5   dark:border-strokedark   md:w-auto md:py-6  
            `}
            >
              <div
                className={clsx(
                  `flex w-full max-w-[150px] cursor-pointer flex-col items-center gap-1 rounded-xl border border-gray-500  bg-white p-5 dark:bg-black`,
                  {},
                )}
              >
                <div className={clsx("text-gray-600 dark:text-slate-500", {})}>
                  <UsersIcon className="h-10 w-10" />
                </div>
                <button
                  className={clsx(
                    "text-sm font-semibold text-gray-600 dark:text-slate-500",
                    {},
                  )}
                >
                  Bekijk alle teams
                </button>
              </div>
            </Link>
          </div>

          <div>
            {featuresTabData.map((feature, key) => (
              <div
                className={feature.id === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesTab;
