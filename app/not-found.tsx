import { ArrowRightIcon, DevicePhoneMobileIcon, PlayIcon, RadioIcon } from "@heroicons/react/20/solid";
import { DocumentPlusIcon, KeyIcon, PhoneIcon, PlusIcon, TvIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error Page - ProductDB",
  description: "This is Error page for ProductDB",
  // other metadata
};

const cardData = [
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    title: "Apps",
    description: "Let's go",
    link:"/product",
  },
  {
    icon: <DocumentPlusIcon className="h-6 w-6" />,
    title: "Docs",
    description: "Meer informatie",
    link:"https://help.productdb.io",
  },
  {
    icon: <PhoneIcon className="h-6 w-6" />,
    title: "Contact Us",
    description: "Ask a question",
    link:"/contact-sales",
  },
  {
    icon: <TvIcon className="h-6 w-6" />,
    title: "Features",
    description: "Meer informatie",
    link:"/product",
  },
  {
    icon: <PlayIcon className="h-6 w-6" />,
    title: "Demo",
    description: "See in action",
    link:"/demo",
  },
  {
    icon: <RadioIcon className="h-6 w-6" />,
    title: "Blog",
    description: "Read a post",
    link:"/blog",
  },
  {
    icon: <KeyIcon className="h-6 w-6" />,
    title: "Pricing",
    description: "Start for Free",
    link:"",
  },
  {
    icon: <PlusIcon className="h-6 w-6" />,
    title: "Case Studies",
    description: "Meer informatie",
    link:"/case-studies",
  },
];


const NotFound = () => {
  return (
    <div className="mx-auto max-w-c-1390">
      <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-44 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Whoops!
          </h1>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Something went wrong
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-200">
            The page you were looking for is not there. A task has been created
            to fix this.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryho focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Go back home
            </Link>
            <Link
              href="#"
              className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <div className="mx-auto text-center">
        <h1 className="mx-auto text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
          In the meantime
        </h1>
        <p className="mx-auto mt-6 text-lg leading-8 text-gray-600 dark:text-gray-200">
          You may have been looking for one of the following:
        </p>
        <div className="grid w-full grid-cols-1 gap-8  p-8 md:grid-cols-3 md:p-16 xl:grid-cols-4">
          {cardData.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 bg-gray-50 p-8 dark:border-slate-600 dark:bg-blackho"
            >
              <div className="rounded-xl bg-blue-50 p-3 text-primary dark:bg-black">
                {item.icon}
              </div>
              <h2 className="pt-9 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h2>
              <div className="text-md text-black dark:text-white">
                {item.description}
              </div>
              <div className="absolute bottom-4 right-4 hidden items-center justify-start  gap-2 rounded-3xl border bg-white p-[1px] px-2 text-black hover:text-primary group-hover:flex dark:bg-black dark:text-white dark:hover:text-primary">
                <p className="text-xs ">read more</p>
                <div className=" flex h-6 w-6 items-center justify-center">
                  <ArrowRightIcon className="h-4 w-4 " />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotFound;
