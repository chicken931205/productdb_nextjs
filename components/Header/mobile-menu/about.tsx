import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";
import solutions_data from "../solutionMenuData";
import { about_data } from "../aboutMenuData";

const About = ({ setMobileScreen, close }) => {
  return (
    <div className=" relative bg-white px-4 pb-40 dark:bg-black">
      <span
        className="flex cursor-pointer items-center font-bold dark:text-white"
        onClick={() => setMobileScreen("")}
      >
        <ChevronDownIcon className="h-6 w-6 rotate-90" aria-hidden="true" />
        back
      </span>
      <br />
      <div className=" mx-auto h-full w-full px-3">
        <div className="space-y-6 ">
          {/* <div className="space-y-1 text-center dark:text-white">
            <h4 className="text-center  text-lg font-semibold">
              {solutions_data.platform.title}
            </h4>
            <p className="text-center">{solutions_data.platform.description}</p>
          </div> */}

          {/* <div className='flex flex-col items-center justify-center gap-3'>
            {solutions_data.platform.links.map((item) => {
              return (
                <div
                  className='w-full'>
                  <Link href={item.url}
                    onClick={() => {
                      close()
                      setMobileScreen('')
                    }}
                  >
                    <div className="flex shadow justify-between items-center w-full border border-gray-400/80 py-4 p-3 rounded-sm bg-slate-100">
                      <p className="text-lg font-medium ">   {item.title}</p>
                      <button>
                        <ChevronDownIcon className="h-8 w-8 -rotate-90" aria-hidden="true" />
                      </button>
                    </div>
                  </Link>
                </div>
              )
            })}
          </div> */}

          <div className="flex w-full flex-col gap-y-6">
            <div className="flex w-full flex-col gap-4">
              {about_data.map((item, index) => (
                <Link
                  href={item.link.url}
                  key={index}
                  onClick={() => {
                    close();
                    setMobileScreen("");
                  }}
                >
                  <div className="flex w-full justify-between gap-x-2 rounded-sm border border-gray-400/80 bg-white p-3 shadow">
                    <div className="flex gap-4">
                      {/* <div className="pt-1 text-primary">{hub.icon}</div> */}
                      <div className="space-y-2">
                        <h5 className="font-semibold "> {item.title}</h5>
                        {/* <p>{hub.description}</p> */}
                      </div>
                    </div>
                    <button>
                      <ChevronDownIcon
                        className="h-8 w-8 -rotate-90"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Link>
              ))}
            </div>

            {/* <div className="flex flex-col items-center w-full mx-auto gap-4 justify-center pt-6">

              {solutions_data.footer.map((item, index) => (
                <Link
                  href={item.link.url} key={index} className='w-full'
                  onClick={() => {
                    close()
                    setMobileScreen('')
                  }}
                >
                  <div className='p-3  flex justify-between bg-white border-gray-400/80  shadow border  rounded-sm w-full'>
                    <div>
                      <h5 className="font-semibold  ">    {item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                    <button>
                      <ChevronDownIcon className="h-8 w-8 -rotate-90" aria-hidden="true" />
                    </button>
                  </div>
                </Link>
              ))
              }
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
