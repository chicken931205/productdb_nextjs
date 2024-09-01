import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
    ArrowRightIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/20/solid";

function Docs() {
  return (
<div
        id="technical"
        className=" mx-auto flex flex-col gap-4 bg-pink-400 px-4  pt-24  md:px-8  md:pt-37.5"
      >
        <div className="text-center">
          <h2 className="mx-auto mb-3 text-3xl font-bold text-white  lg:w-1/2 lg:text-hero">
            Document and share anything with your team.
          </h2>
        </div>
        <div className="mx-auto max-w-3xl text-center text-sm text-white">
          <p className="  ">
            Collaborate on product ideas, document bugs, or jot down meeting
            minutes with ProductDB Docs. Edit in real-time with others, add rich
            editing, and keep everyone up-to-date with a visual knowledge base.
          </p>
        </div>
        <div className="mt-4 flex items-center justify-center">
          <video
            width="1024"
            height="auto"
            controls={false}
            autoPlay={true}
            muted={true}
            loop={true}
            className=" rounded-t-xl"
          >
            <source src="/product/pm-view.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      );
    }
    
    export default Docs;