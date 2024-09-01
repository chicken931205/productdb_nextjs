import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error Page - ProductDB SaaS Boilerplate",
  description: "This is Error page for ProductDB Pro",
  // other metadata
};

const cardData = [
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
  {
    icon: <DevicePhoneMobileIcon className="h-9 w-9" />,
    title: "Apps",
    description: "Let's go",
  },
];

const ErroPage = () => {
  return (
    <div className="mx-auto max-w-c-1390">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-44 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Whoops!
          </h1>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Something went wrong
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            The page you were looking for is not there. A task has been created
            to fix this.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primaryho focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
        <h1 className="mx-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          In the meantime
        </h1>
        <p className="mx-auto mt-6 text-lg leading-8 text-gray-600">
          You may have been looking for one of the following:
        </p>
        <div className="grid w-full grid-cols-1 gap-8 p-8 md:grid-cols-2 md:p-16 lg:grid-cols-3 xl:grid-cols-4">
          {cardData.map((item, index) => (
            <Link
              href={"#"}
              key={index}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border-2 bg-gray-50 p-8"
            >
              <div className="rounded-xl bg-blue-50 p-3 text-primary">
                {item.icon}
              </div>
              <h2 className="pt-9 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h2>
              <div className="text-md text-black dark:text-white">
                {item.description}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ErroPage;
