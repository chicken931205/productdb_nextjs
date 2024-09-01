"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Content() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setFullScreenImage(imageSrc);
    setIsFullScreen(true);
  };

  const handleCloseClick = () => {
    setIsFullScreen(false);
    setFullScreenImage("");
  };

  return (
    <>
      <section className="llg:pb-15 pb-8 pt-8 lg:pt-15 xl:pb-20 xl:pt-20">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row lg:gap-32.5">
            <div className="w-full md:w-1/2 ">
              <h2 className="relative mb-6 text-sectiontitle4 font-bold text-black dark:text-white xl:text-itemtitle">
                Meet and exceed your goals with real-time sales reports.
              </h2>
              <p className="text-justify text-black dark:text-white">
                Sales managers are expected to make convincing strategic
                decisions. That’s a tall order when your data is hiding in a
                spreadsheet somewhere — or worse, requires you to consult an
                admin or analyst just to make sense of it.
              </p>
              <p className="mt-2 text-justify text-black dark:text-white">
                With ProductDB’s sales reporting software, insights are always at
                your fingertips. Easily and quickly create customizable and
                visual reports with deep sales analytics for real-time updates
                on your pipeline, team performance, deal status, prospecting
                touches and conversions, and more. AI-powered sales tools also
                help you generate report descriptions faster.
              </p>
            </div>

            <div className="w-full md:w-1/2 ">
              <Image
                src="/sales-report-images/hero/Sales Report 1.webp"
                alt="About"
                height={700}
                width={700}
                onClick={() =>
                  handleImageClick(
                    "/sales-report-images/hero/Sales Report 1.webp",
                  )
                }
                className="cursor-pointer border"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stroke pb-8 pt-8 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row lg:gap-32.5">
            <div className="w-full md:w-1/2 ">
              <Image
                src="/sales-report-images/hero/Sales reporting-1.webp"
                alt="About"
                height={700}
                width={700}
                onClick={() =>
                  handleImageClick(
                    "/sales-report-images/hero/Sales reporting-1.webp",
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className="relative mb-6 text-sectiontitle4 font-bold text-black dark:text-white xl:text-itemtitle">
                Gain total visibility into sales performance at the click of a
                button.
              </h2>
              <p className="text-justify text-black dark:text-white">
                Is your team on track to hit its targets? When you work out of
                cobbled-together systems, it can be difficult to figure out if
                you’re on track to hit your sales goal. With dozens of free
                pre-built sales reports that come standard with ProductDB’s sales
                reporting software, getting started with sales reporting is
                easy. Use the out-of-the-box reports to track deal forecasts,
                prospecting, and sales activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stroke pb-8 pt-8 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row lg:gap-32.5">
            <div className="w-full md:w-1/2 ">
              <h2 className="relative mb-6 text-sectiontitle4 font-bold text-black dark:text-white xl:text-itemtitle">
                Leverage easy-to-build custom reports.
              </h2>
              <p className="text-justify text-black dark:text-white">
                As your business grows, so will your reporting needs. While
                other tools may require an admin to collect and analyze data,
                ProductDB’s reporting tools come out of the box, so there’s no
                delay or fuss. Use the custom report builder to report on any
                single-object and cross-object data within your CRM. Easily
                visualize reports and create AI-generated descriptions about
                anything relevant to your business, such as lead funnels, target
                account engagement, and custom objects.
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <Image
                src="/sales-report-images/hero/Custom_Report_Builder.webp"
                alt="About"
                height={700}
                width={700}
                onClick={() =>
                  handleImageClick(
                    "/sales-report-images/hero/Custom_Report_Builder.webp",
                  )
                }
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stroke pb-8 pt-8 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row lg:gap-32.5">
            <div className="w-full md:w-1/2 ">
              <Image
                src="/sales-report-images/hero/Weighted_Pipeline_Forecast_en.webp"
                alt="About"
                height={700}
                width={700}
                onClick={() =>
                  handleImageClick(
                    "/sales-report-images/hero/Weighted_Pipeline_Forecast_en.webp",
                  )
                }
                className="cursor-pointer"
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className="relative mb-6 text-sectiontitle4 font-bold text-black dark:text-white xl:text-itemtitle">
                Demystify your sales performance.
              </h2>
              <p className="text-justify text-black dark:text-white">
                Having all the data you need is one thing. Understanding the why
                behind your results is another. ProductDB’s easy-to-use interface
                makes light work of extracting insights so you can spend more
                time figuring out your next move. Whether it's prioritizing your
                sales team’s efforts with real-time deal data or identifying
                opportunity areas with waterfall reporting, ProductDB’s sales
                reporting software is powerful enough for an analyst but
                accessible enough for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-stroke pb-8 pt-8 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse items-center justify-center gap-8 md:flex-row lg:gap-32.5">
            <div className="w-full md:w-1/2 ">
              <h2 className="relative mb-6 text-sectiontitle4 font-bold text-black dark:text-white xl:text-itemtitle">
                Coach reps based on best practices.
              </h2>
              <p className="text-justify text-black dark:text-white">
                With reps out on the road or working from home it can be hard to
                understand why some reps hit their targets and others don’t.
                Knowing what works and what doesn’t is crucial to ensure your
                reps keep hitting their numbers. With ProductDB’s sales analytics
                tool, you get immediate access to the performance insights of
                your team so you quickly learn from top performers what success
                looks like and then coach reps who need an extra push to get on
                track.
              </p>
            </div>
            <div className="w-full md:w-1/2 ">
              <Image
                src="/sales-report-images/hero/Full screen call review.webp"
                alt="About"
                height={700}
                width={700}
                onClick={() =>
                  handleImageClick(
                    "/sales-report-images/hero/Full screen call review.webp",
                  )
                }
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zumthor pb-8 pt-8 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 ">
            <div className="rounded-l-full rounded-r-full border bg-white px-8 py-2 text-center">
              <h4 className="text-sm font-medium text-black dark:text-white">
                Have questions? Give us a call and we'll walk you through it.
              </h4>
              <Link
                href={"#"}
                className="text-sm font-medium text-primary underline"
              >
                +65 6 955 6000
              </Link>
            </div>
            <div className="">
              <div className="flex  items-center justify-center rounded-t-lg border border-t-8 border-t-sky-500 bg-white px-8 	  text-center text-black dark:bg-strokedark  dark:text-white md:h-44  md:w-[650px]">
                "We’re getting greater insights into prospects and their
                behavior, which helps us prepare for meetings and get ahead of
                any issues that might be developing."
              </div>
              {/* <div className=" h-0.5 w-[650px] bg-gray-500"></div> */}
              <div className="flex flex-col items-center  justify-center border bg-white  py-2 text-black dark:bg-strokedark dark:text-white md:h-24 md:w-[650px]">
                <span className="text-bold">COLUM LUNDT</span>
                <span>CRO</span>
                <span>
                  <Link className="font-bold text-primary underline" href={"#"}>
                    Sandler Training
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>

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
              src={fullScreenImage}
              alt="Full Screen"
              height={700}
              width={700}
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
    </>
  );
}

export default Content;
