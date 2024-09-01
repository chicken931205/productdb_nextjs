import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section className="">
      <div className="mx-auto flex max-w-c-1390 flex-col gap-8 px-4 py-8 text-center md:px-32 md:py-16 ">
        <h2 className="mx-auto   text-6xl font-bold text-black dark:text-white">
          Merk downloads
        </h2>
        <p className="mx-auto  text-lg">
          Op deze pagina vindt u onze missieverklaring en logo-downloads.
          Neem even de tijd om te leren hoe u deze assets correct kunt gebruiken voor 
          uw use case.
        </p>
        <div className="flex items-center justify-center">
          <Link
            href={"#"}
            className=" flex items-center justify-center gap-4 bg-primary px-6 py-3 text-xl font-medium text-white "
          >
            Download de bestanden
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
