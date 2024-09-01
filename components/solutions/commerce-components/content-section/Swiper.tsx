import React from "react";
import { Mousewheel, Keyboard, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/free-mode";
// import "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

export default function SwiperComponent() {
  return (
    <Swiper
      // spaceBetween={50}
      grabCursor={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      // loop={true}
      modules={[Pagination, Mousewheel, Keyboard]}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        // 1024: {
        //   slidesPerView: ,
        //   spaceBetween: ,
        // },
      }}
      className="min-h-[350px] w-full px-4 sm:px-8 md:px-12 lg:px-16"
    >
      <SwiperSlide className="">
        <div className="min-h-90 flex w-full flex-col gap-4 rounded-sm bg-white p-4 dark:bg-blackho">
          <div className="flex w-full items-center justify-center text-primary">
            <Image
              src="/sales-images/content-section/Content Hub Product Logo-1-1.svg"
              width={30}
              height={30}
              alt="Content Hub"
              className="text-primary"
            />
          </div>
          <div className="w-full text-center">
            <h3 className="text-itemtitle font-bold text-black dark:text-white">
              Content Hub
            </h3>
          </div>
          <div>
            <p className="text-regular font-medium text-black dark:text-white">
              All-in-one, AI-powered content marketing software that helps
              marketers create and manage content.
            </p>
          </div>
          <div>
            <Link
              href="#"
              className="text-regular font-bold text-primary underline"
            >
              Learn about Content Hub
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="min-h-90 flex w-full flex-col gap-4 rounded-sm bg-white p-4 dark:bg-blackho">
          <div className="flex w-full items-center justify-center text-primary">
            <Image
              src="/sales-images/content-section/OperationsHub_2023_Icon_Gradient_RGB_24px.svg"
              width={30}
              height={30}
              alt="Operations Hub"
              className="text-primary"
            />
          </div>
          <div className="w-full text-center">
            <h3 className="text-itemtitle font-bold text-black dark:text-white">
              Operations Hub
            </h3>
          </div>
          <div>
            <p className="text-regular font-medium text-black dark:text-white">
              Operations Hub Operations software that leverages AI to help you
              activate and manage your data.
            </p>
          </div>
          <div>
            <Link
              href="#"
              className="text-regular font-bold text-primary underline"
            >
              Learn about Operations Hub
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="min-h-90 flex w-full flex-col gap-4 rounded-sm bg-white p-4 dark:bg-blackho">
          <div className="flex w-full items-center justify-center text-primary">
            <Image
              src="/sales-images/content-section/CommerceHub_Icon.svg"
              width={30}
              height={30}
              alt="Commerce Hub"
              className="text-primary"
            />
          </div>
          <div className="w-full text-center">
            <h3 className="text-itemtitle font-bold text-black dark:text-white">
              Commerce Hub
            </h3>
          </div>
          <div>
            <p className="text-regular font-medium text-black dark:text-white">
              B2B commerce software designed to help you collect payments and
              automate billing.
            </p>
          </div>
          <div className="mt-7">
            <Link
              href="#"
              className="text-regular font-bold text-primary underline"
            >
              Learn about Commerce Hub
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="min-h-90 flex w-full flex-col gap-4 rounded-sm bg-white p-4 dark:bg-blackho">
          <div className="flex w-full items-center justify-center text-primary">
            <Image
              src="/sales-images/content-section/MarketingHub_Icon_2023_Gradient_RGB_24px-2.svg"
              width={30}
              height={30}
              alt="Marketing Hub"
              className="text-primary"
            />
          </div>
          <div className="w-full text-center">
            <h3 className="text-itemtitle font-bold text-black dark:text-white">
              Marketing Hub
            </h3>
          </div>
          <div>
            <p className="text-regular font-medium text-black dark:text-white">
              AI-powered marketing software that helps you generate leads and
              automate marketing.
            </p>
          </div>
          <div className="mt-7">
            <Link
              href="#"
              className="text-regular font-bold text-primary underline"
            >
              Learn about Marketing Hub
            </Link>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="">
        <div className="min-h-90 flex w-full flex-col gap-4 rounded-sm bg-white p-4 dark:bg-blackho">
          <div className="flex w-full items-center justify-center text-primary">
            <Image
              src="/sales-images/content-section/ServiceHub_2023_Icon_Gradient_RGB_24px.svg"
              width={30}
              height={30}
              alt="Commerce Hub"
              className="text-primary"
            />
          </div>
          <div className="w-full text-center">
            <h3 className="text-itemtitle font-bold text-black dark:text-white">
              Service Hub
            </h3>
          </div>
          <div>
            <p className="text-regular font-medium text-black dark:text-white">
              Customer service software powered by AI to scale support and drive
              retention.
            </p>
          </div>
          <div className="mt-7">
            <Link
              href="#"
              className="text-regular font-bold text-primary underline"
            >
              Learn about Service Hub
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
