"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const CustomerSupport = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white  xl:text-sectiontitle3">
            It’s already easy to use. But we’re still here for you.
          </h2>
          <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
            We’re here to help your whole team stay ahead of the curve as you
            grow.
          </p>
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className=" mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          <>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
            >
              <Link
                href={`#`}
                className="relative flex aspect-[368/239] items-center justify-center"
              >
                <Image
                  src="/sales-images/customer-support-section/Book Bulb.webp"
                  alt="Education"
                  width={120}
                  height={120}
                  // fill
                />
              </Link>

              <div className="px-4 text-center">
                <h3 className="mb-3.5 mt-5.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                  <Link href="#" className="text-primary underline">
                    Education
                  </Link>
                </h3>
                <p className="line-clamp-3">
                  Grow your skills with free ProductDB Academy courses and
                  certifications.
                </p>
              </div>
            </motion.div>
          </>
          <>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
            >
              <Link
                href={`/blog/`}
                className="relative flex aspect-[368/239] items-center justify-center"
              >
                <Image
                  src="/sales-images/customer-support-section/Three Blue People.webp"
                  alt="24/7 Customer Support"
                  width={120}
                  height={120}
                  // fill
                />
              </Link>

              <div className="px-4 text-center">
                <h3 className="mb-3.5 mt-5.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                  <Link href="#" className="text-primary underline">
                    24/7 Customer Support
                  </Link>
                </h3>
                <p className="line-clamp-3">
                  Get help by calling, chatting with, or emailing our customer
                  support team.
                </p>
              </div>
            </motion.div>
          </>
          <>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
            >
              <Link
                href={`/blog/`}
                className="relative flex aspect-[368/239] items-center justify-center"
              >
                <Image
                  src="/sales-images/customer-support-section/Integration3.webp"
                  alt="Apps"
                  height={120}
                  width={120}
                  // fill
                />
              </Link>

              <div className="px-4 text-center">
                <h3 className="mb-3.5 mt-5.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
                  <Link className="text-primary underline" href="#">
                    Apps
                  </Link>
                </h3>
                <p className="line-clamp-3">
                  Integrate with over 1,500 third-party apps and tools.
                </p>
              </div>
            </motion.div>
          </>
        </div>
        <div className="mt-8.5 w-full border-transparent bg-waterlo py-4 text-center dark:bg-blacksection ">
          <h4 className="text-2xl font-bold text-black dark:text-white">
            Have a question for our sales team? Give us a call and we'll walk
            you through it.
          </h4>
          <Link href="#" className="text-2xl font-bold text-primary underline">
            +1 888-482-7768
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerSupport;
