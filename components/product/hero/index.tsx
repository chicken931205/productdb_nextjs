"use client";
import useWindowPosition from "@/app/hooks/use-scroll";
import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { useWindowSize } from "react-use";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Hero() {
  const { width, height } = useWindowSize();

  const tabs = [
    {
      href: "#overview",
      label: "OVERVIEW",
      view_lower_value: 800,
      view_upper_value: 2300,
    },
    {
      href: "#classification",
      label: "CLASSIFICATION",
      view_lower_value: 2300,
      view_upper_value: 3300,
    },
    {
      href: "#content",
      label: "CONTENT",
      view_lower_value: 3300,
      view_upper_value: 5000,
    },
    {
      href: "#marketing",
      label: "MARKETING",
      view_lower_value: 5000,
      view_upper_value: 5900,
    },
    {
      href: "#technical",
      label: "TECHNICAL",
      view_lower_value: 5900,
      view_upper_value: 7000,
    },
    {
      href: "#operations",
      label: "OPERATIONS",
      view_lower_value: 7000,
      view_upper_value: 8700,
    },
    {
      href: "#commerce",
      label: "COMMERCE",
      view_lower_value: 8700,
      view_upper_value: 9500,
    },
    {
      href: "#all-feature",
      label: "ALL FEATURES",
      view_lower_value: 9500,
      view_upper_value: 12000,
    },
  ];

  const scrollY = useWindowPosition();

  const isInView = (tab) => {
    if (width < 1024) {
      return (
        scrollY >= tab.view_lower_value + 150 &&
        scrollY < tab.view_upper_value + 150
      );
    }
    return scrollY >= tab.view_lower_value && scrollY < tab.view_upper_value;
  };

  console.log(scrollY, "scrollY");

  return (
    <div>
      <div
        className={clsx("top-20 z-30 lg:top-30 ", {
          "visible absolute": scrollY > 300,
        })}
      >
        <div className="fixed block h-20 w-full border-b bg-white dark:border-gray-700 dark:bg-black md:hidden">
          <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 overflow-x-auto px-4 py-4">
            <Swiper
              spaceBetween={2}
              slidesPerView={3}
              freeMode={true}
              className="flex h-full w-full"
            >
              {tabs.map((tab, index) => (
                <SwiperSlide key={index} className="w-auto">
                  <Link
                    href={tab.href}
                    className={clsx(
                      "flex cursor-pointer flex-col items-center gap-2 text-xs font-bold transition-all duration-100 ease-in-out",
                      {
                        "text-black dark:text-white": isInView(tab),
                        "text-gray-400 hover:text-gray-800 dark:hover:text-white":
                          !isInView(tab),
                      },
                    )}
                  >
                    <span>0{index + 1}.</span>
                    <span className="whitespace-nowrap">{tab.label}</span>
                    <div
                      className={clsx(
                        "h-[2px] w-full rounded-full transition-all duration-100 ease-in-out",
                        isInView(tab) ? "bg-primary" : "bg-transparent",
                      )}
                    ></div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="fixed hidden h-20 w-full border-b bg-white dark:border-gray-700 dark:bg-black md:block">
          <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 overflow-x-auto px-4">
            {tabs.map((tab, index) => (
              <Link
                href={tab.href}
                className={clsx(
                  "flex cursor-pointer flex-col items-center gap-2 text-xs font-bold transition-all duration-100  ease-in-out",
                  {
                    "text-black dark:text-white": isInView(tab),
                    "text-gray-400 hover:text-gray-800 dark:hover:text-white":
                      !isInView(tab),
                  },
                )}
              >
                <span>0{index + 1}.</span>
                <span className="whitespace-nowrap">{tab.label}</span>
                <div
                  className={clsx(
                    "h-[2px] w-full rounded-full transition-all duration-100 ease-in-out",
                    isInView(tab) ? "bg-primary" : "bg-transparent",
                  )}
                ></div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={clsx(
          "top-30 transition-transform duration-1000 ease-in",
          scrollY > 300 ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <div className="fixed h-10 w-full bg-red-400">s</div>
      </div>

      <div className="mx-auto min-h-[600px] max-w-[1890px] bg-[url('/product/bg_gradient__product.svg')] bg-cover bg-no-repeat">
        <div className="mx-auto flex flex-col gap-4 px-10 pb-10 pt-40">
          <div className="text-center">
            <h2 className="mx-auto mb-3 text-3xl font-bold text-white lg:text-hero">
              The power of the product, one platform.
            </h2>
          </div>
          <div className="w-full text-center text-xl">
            <p className="mx-auto max-w-3xl text-white opacity-60">
              It comes with hundreds of features that can be customized for any
              work need—with more added every week. And they're all free,
              forever.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center">
            <ul className="flex flex-wrap items-center justify-center gap-4">
              {tabs.map((tab, index) => (
                <li key={index} className="">
                  <Link
                    href={tab.href}
                    className="rounded-lg bg-white/10 px-3 py-2 text-xs font-bold text-white hover:bg-purple-500/20"
                  >
                    {tab.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex justify-center">
            <video
              className="rounded-lg"
              width="560"
              height="auto"
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
      <div className="mt-10 text-center">
        <span className="flex items-center">
          <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700/80"></span>
          <span className="shrink-0 px-6">
            <Link
              href="#"
              className="mx-8 inline-flex items-center gap-2.5 rounded-md bg-primary px-8 py-3 text-sm font-bold text-white shadow-solid-10 hover:opacity-90"
            >
              Start Nu
            </Link>
          </span>
          <span className="h-px flex-1 bg-gray-200 dark:bg-gray-700/80"></span>
        </span>
      </div>
    </div>
  );
}

export default Hero;
