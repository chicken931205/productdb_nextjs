import Image from "next/image";
import React from "react";
import { cardData } from "./data";



function Teams() {
  return (
    <div>
      <div>
        <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
          <div className="text-center">
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-3/5 ">
              Supporting your team around the clock and across all fronts
            </h2>
            <p className="mx-auto  px-3 py-1 text-lg text-black  dark:text-white md:w-2/3">
              Dedicated onboarding, world-class support, and incredibly
              responsive success managers make getting started and migrating to
              ProductDB a breeze.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:px-16 lg:grid-cols-3">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="rounded-lg border bg-white dark:border-none dark:bg-blackho"
            >
              <Image
                alt={card.title}
                width={250}
                height={250}
                src={card.imagePath}
                className="w-full object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {card.title}
                </h3>
                <p className="mt-4 text-black dark:text-white">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
          <div className="mx-auto text-center text-sm text-black dark:text-white">
            <p className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-blackho dark:text-white">
              Why Board view?
            </p>
          </div>
          <div className="text-center">
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-3/5 ">
              Unmatched insight and efficiency
            </h2>
            <p className="mx-auto  px-3 py-1 text-lg text-black  dark:text-white md:w-2/3">
              ProductDB is the only platform that empowers you to visualize and
              report on all your data from a single, comprehensive view.
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-center gap-2  ">
          <Image
            src="/wholesale/users-love-us.png"
            width={900}
            height={600}
            alt=""
            className=" h-auto w-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Teams;
