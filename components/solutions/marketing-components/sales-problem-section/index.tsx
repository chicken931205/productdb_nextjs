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
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Lead Management & Prospecting
            </h2>
            <p className="dark:text-white ">
              Manage your leads and upcoming sales activities on one
              personalized prospecting workspace and turn more leads into deals.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Email Templates
            </h2>
            <p className="dark:text-white ">
              Turn your best sales emails into templates you can personalize,
              optimize, and share with your team.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Email Tracking
            </h2>
            <p className="dark:text-white ">
              Know the second a lead opens an email so you can follow up at
              exactly the right time and close deals faster than ever.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Sales Automationn
            </h2>
            <p className="dark:text-white ">
              Set up a series of automated, personalized emails and follow-up
              tasks to make sure you stay top of mind throughout the sales
              process.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Call Traking
            </h2>
            <p className="dark:text-white ">
              Prioritize your day’s sales calls. Make, record, and automatically
              log calls in your CRM for maximum efficiency.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              ProductDB AI
            </h2>
            <p className="dark:text-white ">
              Use ProductDB’s AI tools to draft engaging prospecting emails or
              create compelling CTAs.
            </p>
          </Link>
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 px-4 md:flex-row md:px-8">
        <div className="flex w-full flex-col justify-between p-4 text-black dark:text-white md:w-1/2 md:p-8">
          <div>
            <h1 className="pb:3 text-2xl   font-bold md:pb-6 ">
              Accelerate Revenue Growth
            </h1>
            <p className="pb-3">
              Close more deals, faster with ProductDB’s AI-powered deal management
              tools that streamline your sales process, so your leads move
              seamlessly from qualified to closed-won.
            </p>
            <p>
              Introduce consistency into the customer journey and arm your
              sellers with all the data and insights they need to effectively
              prioritize the right deals at the right time.
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
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
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
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
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
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
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
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
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
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
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
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
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
            src="/sales-images/Sales-problem/sh-multi-row-2.webp"
            alt="About"
            width={500}
            height={500}
            //   className="h-auto w-full max-w-full"
          />
        </div>
        <div className="flex w-full flex-col justify-between p-4 text-black dark:text-white md:w-1/2 md:p-8">
          <div>
            <h1 className="pb:3 text-2xl   font-bold md:pb-6 ">
              Scale Insightfully
            </h1>
            <p className="pb-3">
              Accurately set, predict, and hit your revenue goals with ProductDB’s
              integrated reporting and analytics tools that help you effectively
              forecast revenue and achieve visibility and predictability into
              your pipeline.
            </p>
            <p>
              Track your team’s performance and analyze customer feedback with
              conversation intelligence to reveal competitive trends, process
              enhancements, and valuable coaching opportunities.
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
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Sales Analytics & Reporting
            </h2>
            <p className="dark:text-white ">
              Get full visibility into your process so you can forecast
              effectively and deliver exceptional results.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Conversation Intelligence
            </h2>
            <p className="dark:text-white ">
              Bring the voice of the customer directly into your CRM and provide
              better coaching for your team with insights from customer calls.
            </p>
          </Link>
          <Link
            href="/"
            className="rounded-lg bg-alabaster px-4 py-6 dark:bg-blacksection"
          >
            <h2 className="pb-2 text-lg font-bold text-primaryho underline">
              Forecasting
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
