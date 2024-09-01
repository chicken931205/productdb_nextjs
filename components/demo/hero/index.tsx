import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="mx-auto max-w-c-1390 ">
     
      <div className=" flex flex-col gap-4 px-4 pb-6 pt-16 md:px-8 md:pb-12  2xl:px-0">
        <div className="text-center">
          <h2 className="  text-3xl font-bold text-black dark:text-white  lg:text-hero ">
            See ProductDB in action!
          </h2>
        </div>
        <div className="w-full text-center text-xl">
          <p className="mx-auto text-lg font-bold text-black  dark:text-white sm:w-4/5 md:w-3/5">
            Explore the complete solution for work, no signup or credit card
            required.
          </p>
        </div>
        <div className="mt-2 flex flex-col items-center justify-center gap-4 text-center md:mx-auto md:flex-row">
          <Link
            href="#"
            className="text-md inline-flex w-full items-center justify-center gap-1 rounded-xl bg-primary px-9 py-2.5 font-bold text-white hover:opacity-90 md:w-auto md:gap-2.5"
          >
            Get started today
          </Link>
          <Link
            href="#"
            className="text-md inline-flex w-full items-center justify-center gap-1 rounded-xl bg-gray-200 px-8 py-2.5 font-bold text-black hover:bg-gray-300 hover:opacity-90 md:w-auto md:gap-2.5"
          >
            Contact sales
          </Link>
        </div>

        <div className="mt-1 w-full text-center ">
          Free forever. No credit card.
        </div>
        <div className="mt-8 flex justify-center bg-purple-700 p-6 md:p-16 md:mx-16 rounded-lg">
          <video
            className="rounded-lg"
            width="900"
            height="900"
            muted={true}
            controls={false}
            autoPlay={true}
            loop
          >
            <source src="/product/pm-view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Hero;
