import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function SalesProblemSection() {
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-col py-8">
      <div className="w-full pb-8 text-center">
        <h1 className=" text-3xl font-bold text-black dark:text-white">
          Solutions to Your Toughest Sales Problems as a Manufacturer
        </h1>
      </div>

      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:px-8">
        <div className="flex w-full justify-center p-4 md:w-1/2 md:p-8">
          <Image
            src="/sales-images/Sales-problem/sh-multi-row.webp"
            alt="About"
            width={500}
            height={500}
            //   className="h-auto w-full max-w-full"
          />
        </div>
        <div className="flex w-full flex-col justify-between p-4 text-black dark:text-white md:w-1/2 md:p-8">
          <div>
            <h1 className="pb:3 text-2xl   font-bold md:pb-6 ">
              Product Classification
            </h1>
            <p className="pb-3">
            Product classification – often referred to as taxonomy – is a logical, clear-cut way of structuring products in different product classes (categories). We provide such a structure to enable efficient and unambiguous communication between (international) parties offering and looking for technical products. The model allows for a precise and uniform listing of main technical characteristics within different product classes. With the provision of various synonyms for every listed class, We make it even easier to identify the right product!
            </p>
            <p>
            Please note, that the product classification model is not a final product in and of itself. It simply provides the much-needed structure for standardized (technical) product data exchange between parties. It does, however, lay the foundation for a wide variety of applications, from product databases to product data management software.
            </p>
          </div>
          <div className="mt-8">
            <Link href="/sales" className="text-primary underline">
              Meer informatie
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center px-8 md:px-16">
        <div className="pl-2">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Popular Features
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3 ">
          <Link
            href="/solutions/classification/product-images"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Product Images
            </h2>
            <p className="dark:text-white ">
            Keep your product visuals current with our constantly updated image library, ensuring accuracy and engagement.
            </p>
          </Link>
          <Link
            href="/solutions/classification/multiple-languages"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Multi Languages
            </h2>
            <p className="dark:text-white ">
            Ensure your product qualifications are accessible and up-to-date in multiple languages, enhancing usability and team collaboration.
            </p>
          </Link>
          <Link
            href="/solutions/classification/attributes"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
            Product Attributes
            </h2>
            <p className="dark:text-white ">
            Benefit from a robust community and dedicated support to enhance your experience and drive continuous improvement.
            </p>
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:px-8">
        <div className="flex w-full flex-col justify-between p-4 text-black dark:text-white md:w-1/2 md:p-8">
          <div>
            <h1 className="pb:3 text-2xl   font-bold md:pb-6 ">
              Always up to date
            </h1>
            <p className="pb-3">
            For us, accuracy and relevance are paramount. Our continuously updated product classification system ensures that your company always has the most current information, which is crucial in a competitive market. Rely on us to keep your product information up-to-date and stay ahead of the competition.
            </p>
            <p>
            Contact us for more information on how our product classification system can help your company grow and innovate. Together, we provide a future-proof solution!
            </p>
          </div>
        </div>
        <div className="flex w-full justify-center p-4 md:w-1/2 md:p-8">
          <Image
            src="/sales-images/Sales-problem/sh-multi-row-2.webp"
            alt="About"
            width={500}
            height={500}
            //   className="h-auto w-full max-w-full"
          />
        </div>
      </div>
      <div className="flex w-full flex-col justify-center px-8 md:px-16">
        <div className="pl-2">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Popular Features
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Meeting Scheduler
            </h2>
            <p className="dark:text-white ">
              Schedule meetings faster and forget the back-and-forth emails.
              Your calendar stays full, and you stay productive.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Document Tracking
            </h2>
            <p className="dark:text-white ">
              Build a library of sales content for your team to share, and track
              which documents close deals.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Playbooks
            </h2>
            <p className="dark:text-white ">
              Arm your sales team with scripts, competitor battlecards,
              positioning guides, and more — all from right where they manage
              their deals.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Deal Pipelines
            </h2>
            <p className="dark:text-white ">
              Easily add deals, assign tasks, and track your most lucrative
              prospects all in one place so your deal pipeline never stops
              flowing.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Payments
            </h2>
            <p className="dark:text-white ">
              Accept payments, manage subscriptions, and include payment links
              in quotes, forms, meeting invites, and more.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Quote Software
            </h2>
            <p className="dark:text-white ">
              Create and send sales quotes, collect electronic signatures, and
              receive payments from the same place you manage your deals.
            </p>
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:px-8">
        <div className="flex w-full justify-center p-4 md:w-1/2 md:p-8">
          <Image
            src="images/sales-images/Sales-problem/sh-multi-row-2.webp"
            alt="About"
            width={500}
            height={500}
            //   className="h-auto w-full max-w-full"
          />
        </div>
        <div className="flex w-full flex-col justify-between p-4 text-black dark:text-white md:w-1/2 md:p-8">
          <div>
            <h1 className="pb:3 text-2xl   font-bold md:pb-6 ">
              Every Company Counts
            </h1>
            <p className="pb-3">
            Our product qualification system offers a unique opportunity for companies to work together to improve product families. By being able to submit and vote on requests for new attributes, we create a dynamic and progressive environment where innovation and customer focus go hand in hand.
            </p>
            <p>
            Does your company have an idea for a new product attribute? Submit your application today and contribute to the future of your product family. Together we set the standard for innovation and quality!
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center px-8 md:px-16">
        <div className="pl-2">
          <h1 className="text-2xl font-bold text-black dark:text-white">
            Popular Features
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Open Source Classification
            </h2>
            <p className="dark:text-white ">
              Get full visibility into your process so you can forecast
              effectively and deliver exceptional results.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Connected to supplier
            </h2>
            <p className="dark:text-white ">
              Bring the voice of the customer directly into your CRM and provide
              better coaching for your team with insights from customer calls.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-blue-50 px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Connected with your software
            </h2>
            <p className="dark:text-white ">
              Get a comprehensive view of your pipeline and monitor your
              quarter's progress against goal to align your team.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
