import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className=" flex flex-col justify-between gap-8 py-4 md:flex-row md:gap-0 md:py-16">
        <div className="flex w-full flex-col gap-6 p-4 md:pl-8 md:pt-12  ">
          <h3 className="w-full text-3xl  font-bold text-black dark:text-white md:w-2/3 md:text-hero ">
            Change your life with ClickUp.
          </h3>
          <p className="text-md  w-full  text-black dark:text-white md:w-2/3">
            A great workplace combines exceptional people with challenging
            problems.
          </p>
          <div className="w-1/2 lg:w-1/3">
            <Link
              href="#"
              className="text-md inline-flex w-full items-center justify-center gap-1 rounded-md bg-purple-600 px-9 py-2.5 font-bold text-white hover:opacity-90 md:w-auto md:gap-2.5"
            >
              Apply Now
            </Link>
          </div>
        </div>
        <div className="w-full p-2 ">
          <Image
            src={"/company-career/clickup-crew.png"}
            alt=""
            width={700}
            height={700}
            className=""
          />
        </div>
      </div>
      <div className=" flex flex-col   py-8 md:flex-row md:gap-0 md:py-16">
        <div className="flex w-full flex-col  gap-6 p-4 md:w-1/2 md:pl-8 md:pt-12  ">
          <p className="w-full  text-xs font-bold  text-purple-600 dark:text-white ">
            MISSION
          </p>
          <h3 className="w-full text-3xl  font-bold text-black dark:text-white md:w-2/3 md:text-hero ">
            Our mission.
          </h3>
          <div className="h-1 w-27 rounded-lg bg-purple-600"></div>
          <p className="text-md  w-full  text-black dark:text-white ">
            While we absolutely love productivity software, we believe
            productivity, in general, is broken. There are just too many tools
            to keep track of, too many things in entirely separate ecosystems.
            There has to be a better way to work - that's why we created
            ClickUp, first an internal tool, now as a way to fulfill our vision
            of making the world more productive.
          </p>
          <p className="text-md  w-full  text-black dark:text-white ">
            Eventually, our goal is to have all work live in ClickUp - thereby
            making people more productive and giving back at least 20% of time
            to dedicate to other things. One app to replace them all. We're just
            getting started, and are so grateful for all of the 2 million teams
            that are in this together with our team.
          </p>
        </div>
        <div className="w-full  md:w-2/3">
          <Image
            src={"/company-career/our-mission.svg"}
            alt=""
            width={700}
            height={700}
            className="hover:scale-95 "
          />
        </div>
      </div>
      <div className=" flex flex-col-reverse   py-8 md:flex-row md:gap-0 md:py-16">
        <div className="mt-4 w-full md:w-2/3">
          <Image
            src={"/company-career/who-should-work.png"}
            alt=""
            width={800}
            height={800}
            className="hover:scale-95 "
          />
        </div>
        <div className="flex w-full flex-col gap-6 p-4 md:w-1/2   ">
          <p className="w-full  text-xs font-bold  text-purple-600 dark:text-white ">
            WHO
          </p>
          <h3 className="w-full text-3xl  font-bold text-black dark:text-white  md:text-hero ">
            Who should work at ClickUp?
          </h3>
          <div className="h-1 w-27 rounded-lg bg-purple-600"></div>
          <p className="text-md  w-full  text-black dark:text-white ">
            ClickUp was founded on a culture of hard work, consistent growth,
            and a desire to break norms. We’re a values-driven company and hire
            based on ambition, merit, and a willingness to do what it takes to
            succeed. We don’t care where you’re from, what you look like, or who
            you’re in a relationship with—we hire the best people for the job,
            and create an environment that supports employees on their journey
            to do the most exciting work of their lives!
          </p>
          <p className="text-md  w-full  text-black dark:text-white ">
            ClickUp is an Equal Opportunity Employer, and qualified applicants
            will receive consideration for employment without regard to race,
            color, religion, sex, sexual orientation, gender identity, or
            national origin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
