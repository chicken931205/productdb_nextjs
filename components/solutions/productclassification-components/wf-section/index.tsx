"use client"; // Ensure this is recognized by your framework (e.g., Next.js)
import React from "react";
import { Navigation, Mousewheel, Keyboard, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

//   .swiper-button-next, .swiper-button-prev {
//     background-color: white;
//     width: 44px;
//     height: 44px;
//     border-radius: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border: none;
//     transition: border 0.3s ease;
//   }
//   .swiper-button-next:hover, .swiper-button-prev:hover {
//     background-color: #f0f0f0;
//     border: 1px solid #333;
//   }
//   .swiper-button-next::after, .swiper-button-prev::after {
//     color: black;
//     font-size: 20px;
//   }
//   .swiper-button-prev::after {
//     content: '<';
//   }
//   .swiper-button-next::after {
//     content: '>';
//   }
//   .swiper-container {
//     padding: 0 20px;
//     height: 50px;
//   }
//   .slide-content {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 100%;
//   }
//   .slide-image {
//     max-width: 100%;
//     max-height: 100%;
//     object-fit: contain;
//   }
// `;

export default function WfSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col dark:bg-black bg-zumthor px-8 py-4">
      <div className="mt-4 text-center">
        <h2 className="text-xl font-medium text-black dark:text-white">
          216,000+ customers in over 135 countries grow their businesses with
          ProductDB
        </h2>
      </div>
      <div className="pb-4 pt-8">
        <Swiper
          // slidesPerView={6}
          // spaceBetween={30}
          // freeMode={true}
          grabCursor={true}
          // navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          loop={true}
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
            // when window width is >= 1024px
            // 1024: {
            //   slidesPerView: ,
            //   spaceBetween: ,
            // },
          }}
          modules={[Mousewheel, Pagination, Keyboard]}
          className="px-4 sm:px-8 md:px-12 lg:px-16"
        >
          <SwiperSlide>
            <div className="slide-content flex flex-wrap">
              <img
                src="/sales-images/swiper-image/amika_logo_color.webp"
                alt="Slide 1"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex  flex-wrap">
              <img
                src="/sales-images/swiper-image/Canadian Red Cross.webp"
                alt="Slide 2"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex flex-wrap">
              <img
                src="/sales-images/swiper-image/DoorDash-logo.webp"
                alt="Slide 3"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex flex-wrap">
              <img
                src="/sales-images/swiper-image/eventbrite logo.webp"
                alt="Slide 4"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex flex-wrap">
              <img
                src="/sales-images/swiper-image/GameSquare-1.webp"
                alt="Slide 5"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex flex-wrap">
              <img
                src="/sales-images/swiper-image/GoFundMe Logo.webp"
                alt="Slide 6"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex flex-wrap">
              <img
                src="/sales-images/swiper-image/KaplanELC.webp"
                alt="Slide 7"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content flex flex-wrap">
              <img
                src="/sales-images/swiper-image/MHC_CUPOLA_HORZ.webp"
                alt="Slide 8"
                width={100}
                height={100}
                className="slide-image"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
