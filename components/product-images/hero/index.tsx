"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleCloseClick = () => {
    setIsFullScreen(false);
  };

  return (
    <section className="bg-red-50 overflow-hidden pb-20 dark:bg-strokedark lg:pb-25 pt-4 lg:pt-25 xl:pb-30 xl:pt-30">
      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="lg:gap-20.5 flex flex-col items-center justify-center gap-4 md:flex-row md:items-start md:gap-8">
          <div className="w-full md:w-1/2">
            <Image
              src="/sales-report-images/hero/Sales reporting-1.webp"
              alt="About"
              width={600}
              height={600}
              onClick={handleImageClick}
              className="cursor-pointer"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h2 className="1` relative mb-6 text-2xl font-medium text-black dark:text-white xl:text-sectiontitle2">
              Sales Reporting &
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full ">
                Performance Management Software
              </span>
            </h2>
            <p className="text-metatitle2 text-black dark:text-white">
              Track your sales team’s progress and performance with
              easy-to-access and accurate data insights.
            </p>
            <button className="mt-4 rounded bg-primary px-6 py-3 font-bold text-white hover:bg-primaryho">
              Get started free
            </button>
            <div className="mt-7.5 flex items-center gap-5">
              <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-semibold text-black dark:text-white">
                  01
                </p>
              </div>
              <div className="w-3/4">
                <h3 className="mb-0.5 text-metatitle3 text-black dark:text-white">
                  Choose from dozens of pre-built reports or customize your own
                </h3>
                {/* <p>Ut ultricies lacus non fermentum ultrices.</p> */}
              </div>
            </div>
            <div className="mt-7.5 flex items-center gap-5">
              <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-semibold text-black dark:text-white">
                  02
                </p>
              </div>
              <div className="w-3/4">
                <h3 className="mb-0.5 text-metatitle3 text-black dark:text-white">
                  Report on pipeline revenue and track target attainment
                </h3>
                {/* <p>consectetur adipiscing elit fermentum ultricies.</p> */}
              </div>
            </div>
            <div className="mt-7.5 flex items-center gap-5">
              <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-semibold text-black dark:text-white">
                  03
                </p>
              </div>
              <div className="w-3/4">
                <h3 className="mb-0.5 text-metatitle3 text-black dark:text-white">
                  Monitor your team’s sales activities and unlock additional rep
                  performance with deep coaching insights
                </h3>
                {/* <p>consectetur adipiscing elit fermentum ultricies.</p> */}
              </div>
            </div>
          </div>
          {/* </motion.div> */}
          {isFullScreen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
              onClick={handleCloseClick}
            >
              <div
                className="relative mt-24" // Added margin-top to move the image down
                onClick={(e) => e.stopPropagation()} // Prevents closing the modal when clicking on the image itself
              >
                <Image
                  src="/sales-report-images/hero/Sales reporting-1.webp"
                  alt="Full Screen"
                  height={1200}
                  width={750}
                  className="max-h-full max-w-full"
                />
                <button
                  onClick={handleCloseClick}
                  className="mx-auto mt-4 block text-2xl text-white"
                >
                  &times; Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
