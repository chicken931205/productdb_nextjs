import Link from "next/link";
import React from "react";
import CalEmbed from "./Schedule";

export default function Scheduler() {
  return (
    <section className="  dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 py-8 md:px-16 md:py-16 2xl:px-0">
        <div className="flex flex-col items-center justify-center gap-8 ">
          <span id={`schedule`} className="-mt-60 block h-60"></span>
          <div className="md:px-16  lg:px-44 ">
            <h3 className="text-center text-3xl   font-bold text-black dark:text-white">
              Schedule a demo:
            </h3>
            <p className="mt-4">
              <span className="pr-1 text-justify font-bold">
                Not able to chat right now? No problem.
              </span>
              Complete the form below to schedule a short call (± 15 min), tell
              us about your challenges and a consultant will call you at your
              earliest convenience. Already a customer?
              <Link href={"#"} className="font-md pl-1 text-primary underline">
                Contact support
              </Link>
              .
            </p>
          </div>
          <div className="w-full">
            <CalEmbed />
          </div>
        </div>
      </div>
    </section>
  );
}
