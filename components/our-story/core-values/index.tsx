'use client'

import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Autoplay, Pagination } from "swiper";

const CoreValuesColorfulGrid = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="hidden max-w-c-1390 mx-auto xl:grid  grid-cols-3 gap-6  py-20 md:px-20">
        <div className="flex flex-col gap-8 max-w-sm">

          <div className="flex flex-col rounded-2xl border-l-4 border-purple-600 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col ">
              <p className=" text-4xl font-bold  text-purple-600  ">
                01
              </p>
              <p className=" text-5xl py-6 font-bold text-black  dark:text-white  ">
                Deliver <br /> the best customer experience
              </p>
              <p className=" text-sm font-bold  text-purple-600  ">
                (#BESTCX)
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border-l-4 border-cyan-400 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col">
              <p className=" text-4xl font-bold  text-cyan-400 ">
                02
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Embrace hard work
              </p>
              <p className=" text-sm font-bold  text-cyan-400  ">
                (#HARDWORK)
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border-l-4 border-rose-400 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col">
              <p className=" text-4xl font-bold  text-rose-400  ">
                03
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Drive urgency
              </p>
              <p className=" text-sm font-bold  text-rose-400  ">
                (#URGENCY)
              </p>
            </div>
          </div>

        </div>


        <div className="flex flex-col gap-8 max-w-sm">

          <div className="flex flex-col rounded-2xl border-l-4 border-yellow-400 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col ">
              <p className=" text-4xl font-bold  text-yellow-400 ">
                04
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Grow 1% every day
              </p>
              <p className=" text-sm font-bold  text-yellow-400  ">
                (#BESTCX)
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border-l-4 border-green-500 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col">
              <p className=" text-4xl font-bold  text-green-500 ">
                05
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Be in the details
              </p>
              <p className=" text-sm font-bold  text-green-500 ">
                (#HARDWORK)
              </p>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border-l-4 border-red-500 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col">
              <p className=" text-4xl font-bold  text-red-500  ">
                06
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Do hard things
              </p>
              <p className=" text-sm font-bold  text-red-500  ">
                (#URGENCY)
              </p>
            </div>
          </div>


          <div className="flex flex-col rounded-2xl border-l-4 border-purple-600 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col">
              <p className=" text-4xl font-bold  text-purple-600  ">
                07
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Be here
                to be exceptional
              </p>
              <p className=" text-sm font-bold  text-purple-600">
                (#URGENCY)
              </p>
            </div>
          </div>


        </div>


        <div className="flex flex-col gap-8 max-w-sm">
          <p className="py-8 text-center text-5xl font-bold text-black dark:text-white  ">
            Core Values
          </p>
          <div className="flex flex-col  rounded-2xl border-l-4 border-orange-400 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col ">
              <p className=" text-4xl font-bold  text-orange-400 ">
                08
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Be scrappy
              </p>
              <p className=" text-sm font-bold  text-orange-400 ">
                (#BESTCX)
              </p>
            </div>
          </div>

          <div className="flex flex-col  rounded-2xl border-l-4 border-cyan-300 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col">
              <p className=" text-4xl font-bold  text-cyan-300 ">
                09
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Be direct
              </p>
              <p className=" text-sm font-bold  text-cyan-300 ">
                (#HARDWORK)
              </p>
            </div>
          </div>

          <div className="flex flex-col  rounded-2xl border-l-4 border-blue-600 px-8 py-4 shadow-xl dark:bg-blackho">
            <div className="flex flex-col">
              <p className=" text-4xl font-bold  text-blue-600  ">
                10
              </p>
              <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                Be fun to work with
              </p>
              <p className=" text-sm font-bold  text-blue-600  ">
                (#URGENCY)
              </p>
            </div>
          </div>


        </div>

      </div>
      {/* Mobile */}
      <div className="px-4 py-9 xl:hidden">
        <Swiper
          spaceBetween={20}
          modules={[Pagination, Autoplay]}
          pagination={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}

        // centeredSlides={true}
        // slideToClickedSlide={true}
        >
          <SwiperSlide>
            <div className="flex flex-col mb-20 h-full min-h-[350px] rounded-2xl border-l-4 border-purple-600 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col ">
                <p className=" text-4xl font-bold  text-purple-600 ">
                  01
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Deliver <br /> the best customer experience
                </p>
                <p className=" text-sm font-bold  text-purple-600 ">
                  (#BESTCX)
                </p>
              </div>
            </div>


          </SwiperSlide>

          <SwiperSlide>

            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-cyan-400 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col">
                <p className=" text-4xl font-bold  text-cyan-400 ">
                  02
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Embrace hard work
                </p>
                <p className=" text-sm font-bold  text-cyan-400 ">
                  (#HARDWORK)
                </p>
              </div>
            </div>


          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-rose-400 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col">
                <p className=" text-4xl font-bold  text-rose-400 ">
                  03
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Drive urgency
                </p>
                <p className=" text-sm font-bold  text-rose-400 ">
                  (#URGENCY)
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-yellow-400 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col ">
                <p className=" text-4xl font-bold  text-yellow-400  ">
                  04
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Grow 1% every day
                </p>
                <p className=" text-sm font-bold  text-yellow-400 ">
                  (#BESTCX)
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-green-500 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col">
                <p className=" text-4xl font-bold  text-green-500  ">
                  05
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Be in the details
                </p>
                <p className=" text-sm font-bold  text-green-500  ">
                  (#HARDWORK)
                </p>
              </div>
            </div>

          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-red-500 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col">
                <p className=" text-4xl font-bold  text-red-500 ">
                  06
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Do hard things
                </p>
                <p className=" text-sm font-bold  text-red-500  ">
                  (#URGENCY)
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-purple-600 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col">
                <p className=" text-4xl font-bold  text-purple-600  ">
                  07
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Be here
                  to be exceptional
                </p>
                <p className=" text-sm font-bold  text-purple-600  ">
                  (#URGENCY)
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-orange-400 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col ">
                <p className=" text-4xl font-bold  text-orange-400 ">
                  08
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Be scrappy
                </p>
                <p className=" text-sm font-bold  text-orange-400 ">
                  (#BESTCX)
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-cyan-300 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col">
                <p className=" text-4xl font-bold  text-cyan-300 ">
                  09
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Be direct
                </p>
                <p className=" text-sm font-bold  text-cyan-300  ">
                  (#HARDWORK)
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>

            <div className="flex flex-col h-full min-h-[350px] rounded-2xl border-l-4 border-blue-600 px-8 py-4 shadow-xl dark:bg-blackho">
              <div className="flex flex-col">
                <p className=" text-4xl font-bold  text-blue-600  ">
                  10
                </p>
                <p className=" text-5xl py-6 font-bold text-black dark:text-white  ">
                  Be fun to work with
                </p>
                <p className=" text-sm font-bold  text-blue-600  ">
                  (#URGENCY)
                </p>
              </div>
            </div>

          </SwiperSlide>

        </Swiper>

      </div>

    </div>
  )
}

export default CoreValuesColorfulGrid