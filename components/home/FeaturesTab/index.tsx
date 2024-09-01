"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import clsx from "clsx";
import TabDecorationImg from '/public/tab-decoration.png';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState<any>(featuresTabData[0]);

  return (
    <section className="relative  ">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="     flex lg:justify-center gap-4 
          mb-9 py-4  md:items-center px-5">
          <Swiper
            spaceBetween={20}
            breakpoints={{

              320: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
              1536: {
                slidesPerView: 8,
                spaceBetween: 20,
              },
            }}
            centeredSlides={true}
            slideToClickedSlide={true}

          >

            {featuresTabData.map((feature, index) => (
              <SwiperSlide
                key={index}
                onClick={() => setCurrentTab(feature)}
              >
                <div
                  className={clsx(`flex flex-col  items-center justify-center cursor-pointer gap-2 min-w-[80px] pb-4 `, {

                  })}
                >

                <div className={clsx("flex h-14.5 w-14.5 flex-col items-center justify-center rounded-2xl border ",{
                  " dark:border-stroke bg-black border-strokedark dark:bg-gray-900 stroke-white": currentTab.id === feature.id,
                  "border-transparent text-black bg-slate-100 dark:bg-transparent stroke-black dark:stroke-gray-400": currentTab.id !== feature.id,
                })} 
                
                >
                  {feature?.icon}
                </div>

                  <button className={clsx("text-sm   ",{
                    "font-bold text-regular text-black dark:text-white ": currentTab.id === feature.id,
                    "text-[#7b73ae] font-medium": currentTab.id !== feature.id,
                  })}>
                    {feature.text}
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className=" mx-auto mt-8 md:mt-12 relative group ">
          <div
            className="absolute inset-x-20 bottom-0 h-3/4  bg-gradient-to-r from-primary to-purple-900  rounded-xl blur-3xl opacity-60 transition duration-300 group-hover:opacity-75"
          >
          </div>
          {currentTab ? (
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <FeaturesTabItem featureTab={currentTab} />
            </motion.div>

          ) : null}
        </div>
        <div className="mx-auto flex items-center justify-center md:px-20 px-10" >
          <Image src={TabDecorationImg} alt="tab decoration" height={TabDecorationImg.height} width={TabDecorationImg.width} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesTab;
