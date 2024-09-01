import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";
import AIImage from '/public/home/teamsFeature/AI-powered-productivity.png'
import ViewWorkImage from '/public/home/teamsFeature/view-work-your-way.png'
import StayAheadImage from '/public/home/teamsFeature/stay-ahead.png'
import SearchEverythingImage from '/public/home/teamsFeature/search-everything.png'
import PlanetImage from '/public/home/teamsFeature/teams-worldwide-planet.png'

const TeamsFeature = () => {
  return (
    <div className="mx-auto  max-w-7xl py-16">
      <div className="mx-auto mb-16 max-w-7xl">
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-1/2  lg:text-hero">
            Everything your team is looking for
          </h2>
        </div>
        <div className="text-center text-xl text-black dark:text-white">
          <p className="mx-auto">
              Get started fast with out-of-the-box solutions.
            Easily customize ProductDB as team needs grow!
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:px-24 lg:grid-cols-3">
        {/* First Row */}
        <div className="col-span-1 rounded-lg bg-gradient-to-t from-blue-700 to-purple-600   ">
          <div className="block rounded-lg  ">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white ">
                AI-powered productivity
              </h3>
              <p className="text-md mt-4 font-bold text-white ">
                Get work done faster with the only AI-powered assistant tailored
                to your role.
              </p>
            </div>
            <Image
            draggable={false}
              alt=""
              src={AIImage}
              className="w-full  object-cover"
              height={AIImage.height}
              width={AIImage.width}
            />
          </div>
        </div>
        
        <div className="col-span-1 rounded-lg bg-gradient-to-t from-blue-700 to-cyan-500  ">
          <div className="flex flex-col justify-between h-full  rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white ">
                View work your way
              </h3>
              <p className="text-md mt-4 font-bold text-white ">
                Instantly switch between 15 views including list, board, gantt,
                and more.
              </p>
            </div>
     
            <Image
            draggable={false}
              alt=""
              src={ViewWorkImage}
              className="w-full  object-cover"
              height={ViewWorkImage.height}
              width={ViewWorkImage.width}
            />
          </div>
        </div>

   
        <div className="col-span-1 rounded-lg bg-gradient-to-t from-cyan-500 to-[#6731EC]  ">
          <div className="flex flex-col justify-between h-full  rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white ">
                Customize in a click
              </h3>
              <p className="text-md mt-4 font-bold text-white ">
                Configuring ProductDb for different types of work is as easy as
                flipping a switch.
              </p>
            </div>

            <Image
            draggable={false}
              alt=""
              src={ViewWorkImage}
              className="w-full  object-cover"
              height={ViewWorkImage.height}
              width={ViewWorkImage.width}
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="col-span-1 flex divide-x-2 rounded-lg bg-gradient-to-t from-purple-600 to-primary p-4  sm:col-span-2 sm:flex sm:gap-4 lg:col-span-2">
          <div className="p-4  ">
            <div className="p-4">
              <h3 className="text-xl font-bold text-white ">
                Plays well with others
              </h3>
              <p className="text-md mt-4 font-bold text-white ">
                Easily integrates with the tools you already use.
              </p>
            </div>
            <Image
              alt=""
              src="/home/teamsFeature/clickup-integrations.svg"
              className=" w-full  object-cover"
              width={500}
              height={500}
            />
          </div>
          <div className="p-4  ">
            <div className="p-4">
              <h3 className="text-xl font-bold text-white ">
                Replaces them entirely
              </h3>
              <p className="text-md mt-4 font-bold text-white ">
                Eliminate app sprawl and reduce software spend.
              </p>
            </div>
            <Image
              alt=""
              src="/home/teamsFeature/clickup-integration-replaces.svg"
              className=" w-full  object-cover"
              width={500}
              height={500}
            />
          </div>
        </div>
      
        <div className="col-span-1 rounded-lg bg-slate-950   ">
          <div className="flex flex-col justify-between h-full  rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white">
                Search everything
              </h3>
              <p className="text-md mt-4 font-bold text-white ">
                Find any file in ProductDB, a connected app, or your local drive,
                from one place.
              </p>
            </div>

            <Image
            draggable={false}
              alt=""
              src={SearchEverythingImage}
              className="w-full pl-6 object-cover"
              height={SearchEverythingImage.height}
              width={SearchEverythingImage.width}
            />
          </div>
        </div>

        {/* Third Row */}

        <div className="col-span-1 rounded-lg bg-gradient-to-t from-[#FF674E] to-[#D613EE]  ">
          <div className="flex flex-col justify-between h-full  rounded-lg">
            <div className="p-6">
              <h3 className="text-xl font-bold text-white ">
                View work your way
              </h3>
              <p className="text-md mt-4 font-bold text-white ">
                Instantly switch between 15 views including list, board, gantt,
                and more.
              </p>
            </div>

            <Image
            draggable={false}
              alt=""
              src={StayAheadImage}
              className="w-full  object-cover"
              height={StayAheadImage.height}
              width={StayAheadImage.width}
              />  
          </div>
        </div>
        <div className="col-span-1 flex relative rounded-lg bg-blue-950 p-4 shadow-md sm:col-span-2   lg:col-span-2">
          <div className="block ">
            <div className="p-4">
              <h3 className="text-xl font-bold text-white ">
                Trusted by over 2,000,000 teams
              </h3>
              <div className="mt-8 flex gap-8">
                <div className="">
                  <h3 className="text-xl font-bold text-white ">305M+</h3>
                  <p className="text-md mt-2 font-bold ">Tasks completed</p>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold text-white ">55M+</h3>
                  <p className="text-md mt-2 font-bold ">Docs created</p>
                </div>
              </div>
              <div className="mt-8 flex gap-8">
                <div className="">
                  <h3 className="text-xl font-bold text-white ">615M+</h3>
                  <p className="text-md mt-2 font-bold ">Messages sent</p>
                </div>
                <div className="">
                  <h3 className="text-xl font-bold text-white ">11M+</h3>
                  <p className="text-md mt-2 font-bold ">Automations created</p>
                </div>
              </div>
              <div className="mt-8">
                <button className=" flex items-center justify-center gap-4 rounded-full bg-primary px-7 py-2.5 font-bold text-white hover:bg-primaryho">
                  Join today for free
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
             <Image
             draggable={false}
              alt=""
              src={PlanetImage}
              className=" absolute object-cover right-0 bottom-0"
              height={PlanetImage.height/2}
              width={PlanetImage.width/2}
            />

        </div>
      </div>
    </div>
  );
};

export default TeamsFeature;
