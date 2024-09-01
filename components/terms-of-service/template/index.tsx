import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Terms from "../terms";
import Agreement from "../agreement";
import Price from "../price";
import TermsofUse from "../terms-of-use";
import InvoicingPayment from "../invoicing-payment";

export default function TermsTemplate() {
  return (
    <section className="bg-white pb-10 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
      <div className="mx-auto flex max-w-c-1235 gap-12 px-8 md:px-12 xl:px-16">
        <div className=" w-full ">
          <h2 className=" mb-2 inline-block  text-3xl font-bold text-black dark:text-white xl:text-hero">
            Terms of Service
          </h2>
          <h2 className=" text-3xl font-bold text-black dark:text-white xl:text-4xl">
            ProductDB
          </h2>
          <div>
            <Link
              href={"#"}
              className="text-xl font-bold text-primary underline"
            >
              Download as pdf
            </Link>
          </div>
          <div className=" mt-4 flex w-full flex-col items-start justify-center gap-2 bg-meta px-6 py-8 text-white dark:bg-blackho">
            <p className="text-xl">
              No time to fully read our Terms of Services?
            </p>
            <h4 className="text-xl font-bold">
              All you have to do is go through our FAQ page.
            </h4>
            <button className="mt-6 flex items-center justify-center gap-2 bg-blue-600 px-4 py-2 text-lg text-white">
              To the FAQ
              <ArrowRightIcon className="h-5 w-5" />
            </button>
          </div>
          <div className=" mt-4 flex w-full flex-col items-start justify-center gap-2 bg-meta px-6 py-8 text-white dark:bg-blackho">
            <p className="text-xl">
              Find the older version of our Terms of Service and Data Processing
              Agreement (DPA) below:
            </p>
            <ul className="mt-6 flex flex-col gap-2">
              <li>
                <span className="pr-1 text-lg font-bold text-white">
                  Terms of Services:
                </span>
                <Link
                  href={"#"}
                  className="hover:underline-none text-lg text-primary underline hover:text-primaryho"
                >
                  version November 2022
                  <span className="px-1 text-white">-</span> version January
                  2022
                  <span className="px-1 text-white">-</span> version February
                  2018
                </Link>
              </li>
              <li>
                <span className="pr-1 text-lg font-bold text-white">DPA:</span>
                <Link
                  href={"#"}
                  className="hover:underline-none text-lg text-primary underline hover:text-primaryho"
                >
                  version November 2022
                  <span className="px-1 text-white">-</span> version January
                  2022
                  <span className="px-1 text-white">-</span>version February
                  2018
                </Link>
              </li>
            </ul>
          </div>
          <div className=" mt-2 flex w-full flex-col items-start justify-center gap-2 py-8 text-black dark:bg-blackho dark:text-white">
            <p>These are the Terms of Service of:</p>
            <p className="pr-2 text-justify">
              <span className="text-lg font-bold">ProductDB NV</span>, a
              private limited company incorporated under Belgian law with its
              registered office at Dok-Noord 3A (box 101), 9000 Ghent (Belgium),
              registered under VAT number BE 0899.623.035 and registered with
              the Register for legal entities of Ghent, division Ghent.
            </p>
            <div className="mt-2 flex w-full items-center justify-center">
              <Image
                src="/terms-of-service/https___storage.googleapis.com_ProductDB-images-production_general_Legal_Company-details-ProductDB-NV-EN.avif"
                alt="terms of services"
                height={800}
                width={800}
              />
            </div>
            <p>
              Hereinafter referred to as “<span className="font-bold">Us</span>
              ”, “<span className="font-bold">Our</span>”, “
              <span className="font-bold">We</span>” and “
              <span className="font-bold">ProductDB”</span>.
            </p>
          </div>
          <Terms />
          <Agreement />
          <Price />
          <TermsofUse />
          <InvoicingPayment />
        </div>
        <div className=" w-1/3 hidden lg:block">
          <div className="sticky top-40  w-full bg-gray-200 px-6 py-6 dark:bg-blackho">
            <h3 className="mb-3 text-xl font-medium text-black dark:text-white">
              What's on this page?
            </h3>
            <p>
              <Link className="hover:text-primary" href={"#contract"}>
                A contract with ProductDB
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#price"}>
                Price
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#term-of-use"}>
                Terms of use
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#invoicing-payment"}>
                Invoicing & payment
              </Link>
            </p>
            <p>
              <Link
                className="hover:text-primary"
                href={"#itellectual-property"}
              >
                Intellectual property
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#duration"}>
                Duration
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#termination"}>
                Termination
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#liability"}>
                Liability
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#privacy"}>
                Privacy
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#confidentiality"}>
                Confidentiality
              </Link>
            </p>
            <p>
              <Link className="hover:text-primary" href={"#availability"}>
                Availability
              </Link>
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}
