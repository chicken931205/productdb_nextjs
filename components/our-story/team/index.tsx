import Link from "next/link";
import React from "react";
import Image from "next/image";
import { images1, images2 } from "./data";
import ImageMap from "/public/our-story/map-team.png";
import ImageMilestones from "/public/our-story/milestones.png";
function Team() {
  return (
    <>
      <div className="mx-auto max-w-7xl  ">
        <div className="flex w-full  flex-col gap-4 p-4  py-8 md:py-16">
          <p className="w-full text-center text-xs font-bold  text-purple-600 dark:text-white ">
            OUR TEAM
          </p>
          <h3 className="w-full text-center text-3xl font-bold text-black dark:text-white  md:text-hero ">
            Meet the team!
          </h3>

          <p className="text-md  mx-auto text-center text-black dark:text-white md:w-2/3 ">
            ProductDB's are highly passionate, energetic, and unique people that
            align in the mission of saving people time and making the world more
            productive.
            <Link
              href={"#"}
              className="pl-1 font-bold text-purple-600 underline"
            >
              Join us.
            </Link>
          </p>
        </div>
        <div>
          <Image
            src={ImageMap.src}
            draggable={false}
            width={1920}
            height={1080}
            alt=""
          />
        </div>
        <div className="flex  flex-col justify-center gap-4 p-4 py-8  text-center md:py-16">
          <p className="  text-xs font-bold  text-purple-600 dark:text-white ">
            OUR PROGRESS
          </p>
          <h3 className="  text-3xl font-bold text-black dark:text-white  md:text-hero ">
            Milestones
          </h3>
        </div>
      </div>

      <div className="border-b-4 border-gray-400 ">
        <Image
          src={ImageMilestones.src}
          draggable={false}
          width={1920}
          height={1080}
          alt=""
          className="mx-auto -mb-[10px] max-w-7xl px-6"
        />
      </div>

      <div className="flex w-full  flex-col gap-4 p-4  py-32">
        <div className="flex flex-wrap items-center justify-center gap-2  md:flex-row lg:mx-auto">
          {images1.map((path, index) => (
            <Image
              key={index}
              src={`${path}`}
              width={115}
              height={115}
              alt={`${path}`}
              className=""
            />
          ))}
        </div>
        <div className="mx-auto flex flex-wrap items-center justify-center gap-2 md:flex-row">
          {images2.map((path, index) => (
            <Image
              key={index}
              src={`${path}`}
              width={110}
              height={110}
              alt={`${path}`}
              className=""
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
