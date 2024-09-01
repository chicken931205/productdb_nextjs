import Link from "next/link";
import React from "react";

export default function About() {
  return (
    <section className="overflow-hidden bg-white pb-10 dark:bg-strokedark lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
      <div className="mx-auto flex max-w-c-1235 flex-col gap-24 px-8 md:px-12 xl:px-16">
        <div className="flex flex-col gap-2">
          <h1 className="text-sectiontitle4 font-bold text-black dark:text-white">
            Contact us
          </h1>
          <p>Questions or feedback? Reach out.</p>
          <p className="dark-text-white flex gap-2 font-medium ">
            For legal questions:
            <Link className="text-primary " href={"legal@productdb.io"}>
              legal@productdb.io
            </Link>
          </p>
          <p className="dark-text-white flex gap-2 font-medium ">
            For legal questions:
            <Link className="text-primary " href={"dpo@productdb.io"}>
              dpo@productdb.io
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-sectiontitle4 font-bold text-black dark:text-white">
            Company details
          </h1>
          <p>ProductDB</p>
          <p>Oude Molenstraat 144</p>
          <p>9100 Sint-Niklaas (Belgium)</p>
        </div>
      </div>
    </section>
  );
}
