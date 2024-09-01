import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div>
      <div className=" flex   flex-col justify-center px-6 py-8  lg:flex-row lg:py-16">
        <div className="flex w-fit flex-col  gap-6 p-4  md:pl-8 md:pt-12  lg:pr-20">
          <h3 className="w-fit  text-3xl font-bold  text-black dark:text-white md:text-hero">
            Security Advisories
          </h3>
          <p className="w-full text-lg  text-black dark:text-gray-300">
            ProductDB strives to ensure our products is secure and vulnerability
            free before it lands in the hands of our users.
          </p>
          <p className="w-full  text-lg  text-black dark:text-gray-300 ">
            Software vulnerabilities are a part of all software and the ProductDB
            Security team will continue to do the necessary to keep your data
            safe and advise you about risks and the availability of fixes.
          </p>
        </div>
        <div className="w-full  ">
          <Image
            src={"/security/security.png"}
            alt=""
            width={700}
            height={700}
          />
        </div>
      </div>
      <div className="flex px-6 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className=" lg:w-4/5 ">
          <h2 className="w-full  text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-hero">
            2024 ProductDB Security Advisories
          </h2>
          <ul className="list-disc">
            <li className="lg:ml-16 mt-6  w-full  text-lg leading-8 text-gray-600 dark:text-gray-300">
              CVE-2024-23755 - Vulnerability in ProductDB Desktop Applications |
              Arbitrary Code Execution in ProductDB application for MacOS and
              Windows
            </li>
          </ul>
        </div>
        <div className="hidden lg:block">
          <Link
            href=""
            className="w-50 rounded-2xl border-4 border-gray-100 py-1 pl-4 pr-30 text-sm font-bold leading-6 text-black dark:text-gray-300 shadow-lg "
          >
            2024
          </Link>
        </div>
      </div>
      <div className="px-6 pb-16 sm:px-6 sm:pb-32 lg:px-8">
        <h2 className="w-full text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-hero">
          Questions about security or compliance?
        </h2>
        <p className="mt-6 w-full text-center text-lg  leading-8 text-gray-600 dark:text-gray-300 md:px-27">
          Keeping our clients' data secure is an absolute top priority at
          ProductDB. Our goal is to provide a secure environment, while also being
          mindful of application performance and the overall user experience.
        </p>
        <p className="mt-6 w-full text-center text-lg  leading-8 text-gray-600 dark:text-gray-300 md:px-27">
          To report a vulnerability or other security concern, please report it
          here.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="#"
            className="rounded-xl bg-primary px-14 py-3 text-lg font-bold  text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primaryho"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
