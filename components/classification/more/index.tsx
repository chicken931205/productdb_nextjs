import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function More() {
  return (
    <div>
      <section className="mb-24 mt-8 px-4 md:px-16 ">
        <div className="flex flex-col-reverse items-center justify-center gap-4 rounded-lg  bg-gradient-to-r from-purple-800  to-primary pt-8  dark:bg-blacksection lg:flex-row   md:pt-16    ">
          <article className="p-4 lg:w-2/3 lg:pl-16">
            <p className="text-md mt-2 line-clamp-3 w-full  text-white lg:w-2/3">
            Geef uw productiviteit een boost
            </p>
            <h3 className="mt-1 w-full text-2xl font-bold  text-white lg:w-2/3 ">
            Alles wat u nodig hebt om georganiseerd te blijven en uw werk gedaan te krijgen.
            </h3>

            <div className="mt-8">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-600 bg-white px-8 py-3 text-purple-900   focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                <span className="text-medium font-bold">
                  Probeer ProductDB
                </span>

                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              {/* Border */}
            </div>
          </article>
          <div>
            <Image
              src={"/test2/list-view.webp"}
              alt=""
              width={600}
              height={600}
              className="px-4 md:px-0"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default More;
