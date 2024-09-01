import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className=" flex relative  flex-col justify-center px-6 py-8  lg:flex-row lg:py-16 z-10">

      <div className="flex w-fit flex-col  gap-6 p-4  md:pl-8 md:pt-12  lg:pr-20">
        <h3 className="w-fit  text-3xl font-bold  text-black dark:text-white md:text-hero">
          Security
        </h3>
        <p className="w-full text-lg  text-black dark:text-white ">
          Keeping our clients' data secure is an absolute top priority at
          ProductDB. Our goal is to provide a secure environment, while also
          being mindful of application performance and the overall user
          experience.
        </p>
        <p className="w-full  text-lg  text-black dark:text-white ">
          To report a vulnerability or other security concern, please report it
          <Link href={"#"} className="ml-1 underline">
            here
          </Link>
          .
        </p>
      </div>
      <div className="w-full  z-10">
        <Image src={"/security/security.png"} alt="" width={700} height={700} className="opacity-80" draggable={false}/>
      </div>
    </div>
  );
}

export default Hero;
