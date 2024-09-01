"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import teamData from "./data";
import {
  ArrowRightIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/20/solid";

function TeamCollaborate() {
  const [currentTab, setCurrentTab] = useState("tabOne");
  const tabs = [
    { id: 'tabOne', label: 'Whiteboards' },
    { id: 'tabTwo', label: 'Comments' },
    { id: 'tabThree', label: 'Proofing' },
    { id: 'tabFour', label: 'Email' },
    { id: 'tabFive', label: 'Chat' },
  ];

  return (
    <section id="marketing">
      <div className=" mx-auto flex max-w-c-1390 flex-col gap-4 px-4 pb-52 pt-20 ">
        <div className="text-center">
          <h2 className="mx-auto mb-3 text-3xl font-bold text-black dark:text-white  lg:w-1/2 lg:text-hero">
            Collaborate on anything with your team.
          </h2>
        </div>
        <div className="w-full text-center text-sm">
          <p className=" mx-auto ">
            Streamline teamwork with powerful collaboration features that make
            it easy to work together on any type of project.
          </p>
        </div>
        <div className=" flex flex-col items-center justify-center rounded-xl bg-cyan-400  	">
          <ul className="flex flex-wrap items-center justify-center gap-4 py-10">
            {tabs.map((tab) => (
              <li
                key={tab.id}
                onClick={() => setCurrentTab(tab.id)}
                className={`rounded-3xl border border-white bg-transparent px-3 py-2 text-sm font-semibold hover:cursor-pointer hover:bg-white hover:text-cyan-400 md:text-lg ${
                  currentTab === tab.id
                    ? "bg-white text-cyan-400"
                    : "bg-transparent text-white"
                }`}
              >
                {tab.label}
              </li>
            ))}
          </ul>
          <div className="-mb-50">
            {teamData.map((data, index) =>
              data.id === currentTab ? (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={`${data.image}`}
                    height={800}
                    width={800}
                    alt=""
                    className="px-10"
                  />

                  <div className="w-full max-w-xl py-10 text-center  ">
                    <p className=" text-black dark:text-gray-500">
                      {data.text}
                    </p>
                  </div>
                </div>
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamCollaborate;
