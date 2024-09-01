import React from "react";
import { Mousewheel, Keyboard, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";

const data = [
  {
    question: "Free Appointment & Meeting Scheduler",
    answer:
      "Share a link with customers that lets them see when you're free and book meetings with you.",
  },
  {
    question: "Free Email Tracking Software",
    answer:
      " Track one-off emails to prospects. Receive real-time notifications when emails are opened or clicked.",
  },
  {
    question: "Free Email Templates",
    answer:
      "Builder Save and reuse your best performing emails, and share them with your team for a faster and more consistent way to communicate with prospects.",
  },
  {
    question: "Free Call Tracking Software",
    answer:
      " Call prospects through VOIP from inside your ProductDB account. Calls can be recorded and auto-logged on the contact record for future reference.",
  },
  {
    question: " Free Sales Leads & Prospecting Software",
    answer:
      "Track prospectsâ€™ visits to your site in real time, determine which companies are the most engaged, and set up custom email notifications for your team.",
  },
  {
    question: " Email Scheduling",
    answer:
      " Write one-to-one prospect emails, and schedule them for the right send and receipt time.",
  },
  {
    question: "Free CRM for Outlook",
    answer:
      " Connect ProductDB CRM to your Gmail or Outlook inbox to send email from the CRM, set up a shared team email account, and access dozens of other useful, time-saving tools.",
  },
  {
    question: "              Customer Profile Software",
    answer:
      "Get powerful context about the people and companies youâ€™re emailing, right inside your Gmail or Outlook inbox.",
  },
  {
    question: "              Quote Software",
    answer:
      "              Create and share professional-looking quotes in just a few clicks.",
  },

  {
    question: "              Sales Reports & Performance Management",
    answer:
      "Achieve total visibility into your sales metrics, with deep insights into your pipeline and a quick way to build more accurate forecasts, right out of the box.",
  },
  {
    question: "              Sales Management Software",
    answer:
      "Build a library of sales best practices and resources to share with your team.",
  },
  {
    question: "              Sales Automation Tools",
    answer:
      " Use workflows to automate lead rotation and task creation, and streamline prospect follow-up with sequences.",
  },
];

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
      {data.map((item, index) => (
        <SwiperSlide className="h-full">
          <div className="flex min-h-[300px]  w-full flex-col gap-4 rounded-sm bg-white px-6 pt-8 dark:bg-blackho">
            <div>
              <Link
                href="#"
                className="text-regular font-bold text-primary underline"
              >
                {item.question}
              </Link>
            </div>
            <div>
              <p className="text-regular font-medium text-black dark:text-white">
                {item.answer}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
