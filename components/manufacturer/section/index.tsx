import Image from 'next/image'
import React from 'react'

const FeaturesDisplay = () => {
  return (
    <div className=" py-16">
      <div className=" flex flex-col gap-4 px-4 py-12 text-center  md:px-8 ">
        <h2 className="mx-auto mb-4 text-3xl md:text-4xl font-extrabold text-black dark:text-white md:w-3/5 ">
          Built for unmatched enterprise scalability, security, and
          reliability.
        </h2>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-6 px-4  md:px-16 lg:grid-cols-2">
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={250}
              height={250}
              src={"/manufacturer/uptime.avif"}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                99.9% uptime guarantee
              </h3>

              <p className="mt-4  text-black dark:text-white  ">
                Ensure your operations never skip a beat with our 99.9% uptime
                guarantee, keeping your workflow smooth and uninterrupted.
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={250}
              height={250}
              src={"/manufacturer/speed-scalability.avif"}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Unmatched speed and scalability
              </h3>

              <p className="mt-4  text-black dark:text-white  ">
                Leverage our exclusive RapidViews DB™ technology for ultimate
                scalability and performance unmatched by any other solution
              </p>
            </div>
          </div>
          <div className="col-span-1  gap-6 lg:col-span-3 ">
            <div className="flex flex-col lg:flex-row  rounded-lg border bg-white dark:border-none  dark:bg-blackho">
              <Image
                alt=""
                width={250}
                height={250}
                src={"/manufacturer/advanced-admin-tools.avif"}
                className="w-full object-cover"
              />
              <div className="flex flex-col items-start justify-center p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Advanced admin tools
                </h3>

                <p className="mt-4  text-black dark:text-white  ">
                  Everything you need to protect your data, manage access,
                  configure permissions and keep a compressive activities log
                  is built-in.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={250}
              height={250}
              src={"/manufacturer/ai-powered-workflows.avif"}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                AI-powered workflows
              </h3>

              <p className="mt-4  text-black dark:text-white  ">
                The world's first neural network connecting tasks, docs,
                people, and all of your company’s knowledge with AI.
              </p>
            </div>
          </div>
          <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">
            <Image
              alt=""
              width={250}
              height={250}
              src={"/manufacturer/internationally-compliant.avif"}
              className="w-full object-cover"
            />

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Internationally compliant
              </h3>

              <p className="mt-4  text-black dark:text-white  ">
                Our unwavering commitment to international standards
                guarantees your data is managed with exceptional care.
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-6 lg:col-span-3 lg:flex-row">
            <div className="rounded-lg border bg-white dark:border-none dark:bg-blackho  lg:w-1/3">
              <Image
                alt=""
                width={250}
                height={250}
                src={"/manufacturer/loved-by-teams.avif"}
                className="w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Loved by all teams
                </h3>

                <p className="mt-4  text-black dark:text-white  ">
                  Unmatched flexibility, standards, and scale to support any
                  team - no matter the size or complexity.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white dark:border-none dark:bg-blackho  lg:w-1/3">
              <Image
                alt=""
                width={250}
                height={250}
                src={"/manufacturer/trusted-by-leadership.avif"}
                className="w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Trusted by leadership
                </h3>

                <p className="mt-4  text-black dark:text-white  ">
                  Clear visibility from strategic plans to daily execution,
                  for a single source for updates, risks, and progress.
                </p>
              </div>
            </div>
            <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho lg:w-1/3">
              <Image
                alt=""
                width={250}
                height={250}
                src={"/manufacturer/endorsed-by-it.avif"}
                className="w-full object-cover"
              />

              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Endorsed by IT
                </h3>

                <p className="mt-4  text-black dark:text-white  ">
                  Data is encrypted, safeguarded, and fully compliant with
                  HIPAA, GDPR, Privacy Shield, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  )
}

export default FeaturesDisplay