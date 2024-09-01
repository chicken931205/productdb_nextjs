import Image from "next/image";
import Link from "next/link";
const CustomerSales = () => {
  return (
    <section className="bg-alabaster dark:bg-black py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white  xl:text-sectiontitle3">
            After 12 months, Sales Hub customers see:
          </h2>
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className=" mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          <div className=" rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            <div className="relative flex aspect-[368/239] items-center justify-center">
              <Image
                src="/sales-images/cutomer-sales-section/sh-illustration-1.svg"
                alt="sales illuctration-1"
                width={150}
                height={150}
                // fill
              />
            </div>

            <div className="px-4 text-center">
              <h3 className="mb-3.5 mt-5.5 line-clamp-2 inline-block text-3xl font-bold text-black duration-300 dark:text-white xl:text-hero">
                28%
              </h3>
              <p className="line-clamp-3">more deals created</p>
            </div>
          </div>
          <div className=" rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            <div className="relative flex aspect-[368/239] items-center justify-center">
              <Image
                src="/sales-images/cutomer-sales-section/sh-illustration-2.svg"
                alt="sales illuctration-2"
                width={150}
                height={150}
                // fill
              />
            </div>

            <div className="px-4 text-center">
              <h3 className="mb-3.5 mt-5.5 line-clamp-2 inline-block text-3xl font-bold text-black duration-300  dark:text-white  xl:text-hero">
                55%
              </h3>
              <p className="line-clamp-3">more deals closed</p>
            </div>

            <div />
          </div>
          <div className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection">
            <div className="relative flex aspect-[368/239] items-center justify-center">
              <Image
                src="/sales-images/cutomer-sales-section/sh-illustration-3.svg"
                alt="sales illuctration-3"
                width={150}
                height={150}
                // fill
              />
            </div>

            <div className="px-4 text-center">
              <h3 className="mb-3.5 mt-5.5 line-clamp-2 inline-block text-3xl font-bold text-black duration-300 dark:text-white  xl:text-hero">
                128%
              </h3>
              <p className="line-clamp-3">more meetings attended</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerSales;
