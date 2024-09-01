import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <section className="">
      <div className="mx-auto flex max-w-c-1390 flex-col gap-4 px-4 pb-6 pt-24 md:px-8 md:pb-12 md:pt-44 2xl:px-0">
        <div className="text-center">
          <h2 className="mx-auto mb-4 text-3xl text-black dark:text-white md:w-4/5 lg:text-5xl font-extrabold xl:w-1/2">
           The everything app, <br /> for products
          </h2>
        </div>
        <div className="text-center text-xl text-black dark:text-white">
          <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
          Laat iedereen werken op één platform
          dat is ontworpen om elk type product te beheren
          </p>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="inline-flex items-center gap-2.5 rounded-xl bg-primary px-8 py-3 text-xl font-bold text-white hover:opacity-90 md:px-16 md:py-4 md:text-2xl border border-primary"
          >
            Start nu. Het is GRATIS
            <ArrowRightIcon className="h-3 w-3 md:h-6 md:w-6" />
          </Link>
        </div>
        <div className="text-center">
          <p className="mx-auto">Voor altijd gratis. Geen creditcard vereist.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
