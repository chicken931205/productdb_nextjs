import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AwardSection() {
  return (
    <section className="py-10 lg:py-15">
      <div className="mx-auto mt-15 max-w-c-1280  px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="flex w-full flex-col items-center justify-between  shadow-solid-l  md:flex-row">
          <div className=" flex w-full flex-col  items-center justify-center gap-5  md:p-12">
            <div className="flex items-center justify-center gap-3 md:gap-10 pt-4">
              <Image
                src="/sales-images/award-section/g2_best_software_2024_badge_sales_products.svg"
                alt="Awards"
                height={100}
                width={100}
              />
              <Image
                src="/sales-images/award-section/badge-leader-small-business.webp"
                alt="Awards"
                height={100}
                width={100}
              />
              <Image
                src="/sales-images/award-section/badge-best-relationships-3.webp"
                alt="Awards"
                height={100}
                width={100}
              />
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-10 pt-4">
              <Image
                src="/sales-images/award-section/badge-leader-mid-market.webp"
                alt="Awards"
                height={100}
                width={100}
              />
              <Image
                src="/sales-images/award-section/badge-leader-enterprise.webp"
                alt="Awards"
                height={100}
                width={100}
              />
              <Image
                src="/sales-images/award-section/badge-best-usability.webp"
                alt="Awards"
                height={100}
                width={100}
              />
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-4 p-12 ">
            <h2 className="text-2xl font-medium text-center text-black dark:text-white">
              Awarded #1 Sales Product
            </h2>
            <Link
              href="#"
              className="text-xl font-medium text-primary underline "
            >
              Read the press release
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
