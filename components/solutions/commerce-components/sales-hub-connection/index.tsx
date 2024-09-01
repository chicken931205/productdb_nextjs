import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SalesConnection() {
  return (
    <section>
      <div className="mx-auto mt-15 max-w-c-1280  px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="flex w-full flex-col items-center justify-between  shadow-solid-l  md:flex-row">
          <div className=" flex w-full flex-col items-start justify-center gap-3 p-16">
            <h2 className="text-2xl font-medium text-center text-black dark:text-white">
              Regain productivity and power connection with Sales Hub.
            </h2>
            <div className="my-4 flex flex-col gap-4 md:my-8 flex-nowrap md:flex-row">
              <Link
                className="text-center rounded border border-primary bg-primary px-12 py-6 text-lg font-bold text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primaryho"
                href="#"
              >
                Get a demo
              </Link>

              <Link
                className="text-center rounded border border-primary px-12 py-6 text-lg font-bold text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:bg-primary"
                href="#"
              >
                Get started free
              </Link>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 p-12 ">
            <Image
              src="/sales-images/sales-connection-section/cta-content-block-srvh-en@2x-1.webp"
              alt="Awards"
              height={350}
              width={350}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
