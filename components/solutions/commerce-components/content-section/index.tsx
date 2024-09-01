"use client"; // Ensure this is recognized by your framework (e.g., Next.js)
import React from "react";
// import Swiper from "./Swiper";
import SwiperComponent from "./Swiper";

// const customStyles = `
//   .swiper-button-next, .swiper-button-prev {
//     background-color: red;
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
//   }

//   .slide-content {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     padding: 20px;
//     background: white;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     height: 100%;
//   }

//   .swiper-slide {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     height: auto; /* Adjust based on your content */
//   }
// `;

export default function ContentSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col bg-black px-4 py-12 md:px-8">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h2 className="text-sectiontitle4 font-medium text-white ">
          Powerful alone, even better together.
        </h2>
        <p className="px-4 text-sectiontitle font-medium text-white md:px-16">
          Each product in the platform is connected to the same underlying CRM
          database. Although our products are powerful on their own, the real
          magic happens when you use them together.
        </p>
      </div>
      <div className="mx-4  my-8 flex items-center  md:mx-16 lg:mx-32">
        <SwiperComponent />
      </div>
    </div>
  );
}
