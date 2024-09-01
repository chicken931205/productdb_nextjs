import {} from "@heroicons/react/20/solid";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function SecurityTypes() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-center gap-8 px-4 py-12  md:px-8 ">
        <div className="text-center">
          <h2 className="  text-3xl font-bold text-black dark:text-white md:w-3/5  xl:text-hero">
            Compliance
          </h2>
        </div>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-4 sm:grid-cols-2 md:px-8 lg:grid-cols-4 lg:px-16">
          <div className="flex items-center justify-center px-14 py-4 shadow-solid-10">
            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={125}
              height={125}
            />
          </div>
          <div className="flex items-center justify-center px-14 py-4 shadow-solid-10">
            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={125}
              height={125}
            />
          </div>
          <div className="flex items-center justify-center px-14 py-4 shadow-solid-10">
            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={125}
              height={125}
            />
          </div>
          <div className="flex items-center justify-center px-14 py-4 shadow-solid-10">
            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={125}
              height={125}
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-3/5  xl:text-hero">
            End-to-End Security
          </h2>
          <p className="mx-auto  px-3 py-1 text-lg text-black  dark:text-white md:w-2/3">
            ProductDB is hosted entirely on
            <span className="pl-1 font-bold">Amazon Web Services (AWS)</span>,
            providing end-to-end security and privacy features built in. Our
            team takes additional proactive measures to ensure a
            <span className="pl-1 font-bold">
              secure infrastructure environment.
            </span>
            For additional, more specific details regarding AWS security, please
            refer to{" "}
            <Link href={"#"} className="font-bold text-blue-600 underline">
              https://aws.amazon.com/security/.
            </Link>
          </p>
        </div>
        <div className="mx-auto py-16">
          <Image src="/security/amazon.png" alt="" width={500} height={500} />
        </div>
      </div>

      <div className=" flex flex-col gap-4 p-4  md:px-16 md:py-12 ">
        <div className=" flex flex-col items-center justify-start gap-8 rounded-2xl px-8 pb-16 shadow-solid-10 dark:bg-blackho md:px-16">
          <div className="flex w-full flex-row justify-between">
            <h2 className=" flex items-end text-3xl font-bold text-black dark:text-white   md:text-sectiontitle2">
              SOC 2 Compliance
            </h2>

            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={105}
              height={105}
              className="h-auto w-auto"
            />
          </div>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            Security and trust are integral at ProductDB. We have achieved audit
            certification for Service Organization Controls (SOC 2) Trust
            Services Principles, focused on security. Our continued SOC 2
            certification ensures our organizational and technology controls are
            independently audited at least annually. Please contact
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              sales@ProductDB.com
            </Link>
            for ProductDB's latest report.
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-4 p-4  md:px-16 md:py-12 ">
        <div className=" flex flex-col items-center justify-start gap-8 rounded-2xl px-8 pb-16 shadow-solid-10 dark:bg-blackho md:px-16">
          <div className="flex w-full flex-row justify-between">
            <h2 className=" flex items-end text-3xl font-bold text-black dark:text-white   md:text-sectiontitle2">
              SOC 2 Compliance
            </h2>

            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={105}
              height={105}
              className="h-auto w-auto"
            />
          </div>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            Security and trust are integral at ProductDB. We have achieved audit
            certification for Service Organization Controls (SOC 2) Trust
            Services Principles, focused on security. Our continued SOC 2
            certification ensures our organizational and technology controls are
            independently audited at least annually. Please contact
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              sales@ProductDB.com
            </Link>
            for ProductDB's latest report.
          </p>
        </div>
      </div>
      <div className=" flex flex-col gap-4 p-4  md:px-16 md:py-12 ">
        <div className=" flex flex-col items-center justify-start gap-8 rounded-2xl px-8 pb-16 shadow-solid-10 dark:bg-blackho md:px-16">
          <div className="flex w-full flex-row justify-between">
            <h2 className=" flex items-end text-3xl font-bold text-black dark:text-white   md:text-sectiontitle2">
              Data Center Security
            </h2>

            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={105}
              height={105}
              className="h-auto w-auto"
            />
          </div>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            ProductDB customer data is hosted by Amazon Web Services (AWS), which
            is certified SOC 2 Type 2. AWS maintains an impressive list of
            reports, certifications, and third party assessments to ensure
            complete and ongoing
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              state-of-the-art data center security.
            </Link>
          </p>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            AWS infrastructure is housed in Amazon-controlled data centers
            throughout the world, and the data centers themselves are secured
            with a variety of physical controls to prevent unauthorized access.
            More information on AWS data centers and their security controls can
            be found
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              here.
            </Link>
          </p>
          <h2 className="flex w-full justify-start  text-3xl font-bold text-black dark:text-white   ">
            Data Center Security
          </h2>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            ProductDB customers who are on the Enterprise Plan have the option to
            host their core Workspace data in ProductDB’s US, European, or Asia
            Pacific data centers at no additional cost. With ownership over
            their hosting region, customers can ensure ProductDB meets their data
            security goals.
          </p>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            ProductDB supports Data Residency through our Amazon Web
            Services-operated data centers in Ireland (Europe Region), Australia
            (Asia Pacific Region), Singapore (Asia Pacific Region), and the
            United States.
          </p>
          <p className=" flex w-full justify-start text-justify  text-lg text-black  dark:text-white ">
            Meer informatie
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              here.
            </Link>
          </p>
          <h2 className="flex w-full justify-start  text-3xl font-bold text-black dark:text-white   ">
            ProductDB Data Center Locations
          </h2>
          <Image
            src="/security/map.jpg"
            alt=""
            width={700}
            height={700}
            className="h-full w-full"
          />
        </div>
      </div>
      <div className=" flex flex-col gap-4 p-4  md:px-16 md:py-12 ">
        <div className=" flex flex-col items-center justify-start gap-8 rounded-2xl px-8 pb-16 shadow-solid-10 dark:bg-blackho md:px-16">
          <div className="flex w-full flex-row justify-between">
            <h2 className=" flex items-end text-3xl font-bold text-black dark:text-white   md:text-sectiontitle2">
              Application Security
            </h2>

            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={105}
              height={105}
              className="h-auto w-auto"
            />
          </div>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            All ProductDB web application communications are encrypted over TLS
            1.2, which cannot be viewed by a third party and is the same level
            of encryption used by banks and financial institutions. All data for
            ProductDB is encrypted at rest using AES-256 encryption.
          </p>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            ProductDB actively monitors ongoing security, performance and
            availability 24/7/365. We run automated security testing on an
            ongoing basis. We also contract a third party for penetration
            testing.
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              here.
            </Link>
          </p>

          <p className=" text-justify  text-lg text-black  dark:text-white ">
            ProductDB Security team will continue to do everything to keep your
            data safe and advise you about risks and the availability of fixes
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              here.
            </Link>
          </p>

          <div className="flex w-full flex-col items-start justify-center gap-4 p-4 lg:flex-row lg:items-center">
            <div className="flex w-full items-center justify-start gap-2  bg-gray-100 p-6 dark:bg-blacksection">
              <span className="text-blue-400">
                <ShieldCheckIcon className="h-16 w-16" />
              </span>
              <span className="text-xl text-black dark:text-white">
                Encryption at Rest
              </span>
            </div>
            <div className="flex w-full items-center justify-start gap-2 bg-gray-100 p-6 dark:bg-blacksection">
              <span className="text-blue-400">
                <ShieldCheckIcon className="h-16 w-16" />
              </span>
              <p className="text-xl text-black dark:text-white">
                Two-factor Authentication
              </p>
            </div>
            <div className="flex w-full items-center justify-start gap-2 bg-gray-100 p-6 dark:bg-blacksection">
              <span className="text-blue-400">
                <ShieldCheckIcon className="h-16 w-16" />
              </span>
              <p className="text-xl text-black dark:text-white">
                Google SSO
                <span className="ml-1 bg-blue-400 text-white">BUSINESS</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col gap-4 p-4  md:px-16 md:py-12 ">
        <div className=" flex flex-col items-center justify-start gap-8 rounded-2xl px-8 pb-16 shadow-solid-10 dark:bg-blackho md:px-16">
          <div className="flex w-full flex-row justify-between">
            <h2 className=" flex items-end text-3xl font-bold text-black dark:text-white   md:text-sectiontitle2">
              SOC 2 Compliance
            </h2>

            <Image
              src="/security/soc2-badge.png"
              alt=""
              width={105}
              height={105}
              className="h-auto w-auto"
            />
          </div>
          <p className=" text-justify  text-lg text-black  dark:text-white ">
            Security and trust are integral at ProductDB. We have achieved audit
            certification for Service Organization Controls (SOC 2) Trust
            Services Principles, focused on security. Our continued SOC 2
            certification ensures our organizational and technology controls are
            independently audited at least annually. Please contact
            <Link
              href={"#"}
              className="px-1 font-bold text-blue-600 underline"
            >
              sales@ProductDB.com
            </Link>
            for ProductDB's latest report.
          </p>
        </div>
      </div>
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <h2 className="w-full text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-hero">
          Questions about security or compliance?
        </h2>
        <p className="mt-6 w-full text-center text-lg  leading-8 text-gray-600 md:px-16">
          Keeping our clients' data secure is an absolute top priority at
          ProductDB. Our goal is to provide a secure environment, while also being
          mindful of application performance and the overall user experience. To
          report a vulnerability or other security concern, please report it
          below.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="#"
            className="rounded-md bg-primary px-4 py-3 text-base font-bold  text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Report concern
          </Link>
          <Link
            href="#"
            className="rounded-md border border-primary px-4 py-3 text-base font-bold leading-6 text-primary hover:bg-primaryho hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SecurityTypes;
