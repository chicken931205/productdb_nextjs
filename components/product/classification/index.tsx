"use client";
import Image from "next/image";
import { useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import Link from "next/link";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState(featuresTabData[0].id);

  return (
    <section id="classification" className="relative bg-purple-400  pt-36 ">
      {/* <span id="views" className="block -mt-60 h--60"></span> */}
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-16">
        <div className="text-center">
          <h2 className="mx-auto mb-3 text-3xl font-bold text-white md:w-2/3   lg:text-hero ">
          Bekijk Producten vanuit Elke Hoek met 15+ Krachtige Visualisaties
          </h2>
        </div>
        <div className="mx-auto mb-9 flex flex-wrap justify-center gap-x-4 gap-y-2  py-4    md:items-center    ">
          {featuresTabData.map((feature, index) => (
            <div
              key={index}
              onClick={() => setCurrentTab(`${feature.id}`)}
              className={`relative flex cursor-pointer flex-col items-center  dark:border-strokedark  pb-2 ${
                currentTab === `${feature.id}`
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-[2px] before:w-full before:rounded-[6px] before:bg-white"
                  : ""
              }`}
            >
              <div className="flex h-14.5 w-14.5 flex-col items-center justify-center rounded-2xl border border-stroke text-blue-400 dark:border-strokedark dark:bg-blacksection">
                {feature?.icon}
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-c-1154 md:mt-12">
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
  );
};

export default FeaturesTab;
