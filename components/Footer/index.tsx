"use client";
import { BoltIcon, CalendarIcon, LockClosedIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from '/public/images/favicon.ico'
const Footer = () => {
  const footerData = {
    "sections": [
      {
        "title": "ProductDB",
        "links": [
          { "name": "Download", "href": "#" },
          { "name": "About Us", "href": "/company/our-story" },
          { "name": "Careers", "href": "/company/careers" },
          { "name": "Customers", "href": "#" },
          { "name": "Community", "href": "/community" },
          { "name": "Brand", "href": "/company/brand" },
          { "name": "Product Roadmap", "href": "#" },
          { "name": "Status", "href": "https://status.productdb.io" }
        ]
      },
      {
        "title": "Resources",
        "links": [
          { "name": "Help Docs", "href": "https://help.productdb.io" },
          { "name": "On-Demand Demo", "href": "/demo/demo-request" },
          { "name": "ProductDB University", "href": "https://university.productdb.io" },
          { "name": "Webinars", "href": "https://university.productdb.io/webinar" },
          { "name": "Events", "href": "https://university.productdb.io/events" },
          { "name": "API", "href": "https://www.productdb.dev/api#/" },
          { "name": "Contact Us", "href": "/contact-sales" }
        ]
      },
      {
        "title": "Features",
        "links": [
          { "name": "Product Classification", "href": "product/classification" },
          { "name": "Commerce", "href": "/product/commerce" },
          { "name": "Content", "href": "/product/content" },
          { "name": "Marketing", "href": "/product/marketing" },
          { "name": "Operations", "href": "/product/operations" },
          { "name": "Technical", "href": "/product/technical" },
        ]
      },
      {
        "title": "Learn",
        "links": [
          { "name": "Blog", "href": "/blog" },
          { "name": "Software Team Hub", "href": "#" },
          { "name": "Agency Hub", "href": "#" }
        ],
        "social_links": [
          { "name": "LinkedIn", "href": "https://www.linkedin.com/company/productdb/", "icon": "linkedin.svg" },
          { "name": "Facebook", "href": "https://www.facebook.com/productdb/", "icon": "facebook.svg" },
          { "name": "Instagram", "href": "#", "icon": "instagram.svg" },
          { "name": "Twitter", "href": "#", "icon": "twitter.svg" }
        ]
      }
    ]
  }

  return (
    <footer className=" bg-slate-50 dark:border-strokedark dark:bg-blacksection">
      <div className="border-y border-black dark:border-gray-500 ">
        <div className="flex flex-col lg:flex-row md:justify-between gap-x-4 gap-y-2 max-w-c-1390 mx-auto py-1">
          <div className="flex items-center gap-2 mx-0 sm:mx-auto lg:mx-0 px-10">
            <Image src={Logo} alt="ProductDB" width={16} height={16} />
            <span className="font-bold whitespace-nowrap">One app to get them all</span>
          </div>

          <div className="hidden sm:flex flex-wrap gap-x-2 lg:gap-x-4  w-full  justify-evenly lg:px-10 ">
            <div className="border-l border-gray-300 dark:border-gray-500 h-1/2 my-auto"></div>

            <div className="flex gap-1 items-center ">
            <Link href="https://help.productdb.io" className="flex gap-1 items-center ">
              <CalendarIcon className="h-6 w-6" />
              <span className="text-sm font-semibold whitespace-nowrap">24/7 support</span>
              </Link>
            </div>
            <div className="border-l border-gray-300 dark:border-gray-500 h-1/2 my-auto"></div>
            <div className="flex gap-1 items-center">
            <Link href="https://productdb.canny.io/" className="flex gap-1 items-center ">
              <BoltIcon className="h-6 w-6" />
              <span className="text-sm font-semibold whitespace-nowrap">Weekly updates</span>
            </Link>  
            </div>

            <div className="border-l border-gray-300 dark:border-gray-500 h-1/2 my-auto"></div>
            
            <div className="flex gap-1 items-center">
            <Link href="/security" className="flex gap-1 items-center ">
              <LockClosedIcon className="h-6 w-6" />
              <span className="text-sm font-semibold whitespace-nowrap">Secure and compliant</span>
            </Link>  
            </div>
            
            <div className="border-l border-gray-300 dark:border-gray-500 h-1/2 my-auto"></div>

            <div className="flex gap-1 items-center">
            <Link href="https://status.productdb.io" className="flex gap-1 items-center ">
              <RocketLaunchIcon className="h-6 w-6" />
              <span className="text-sm font-semibold whitespace-nowrap">99.9% uptime</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-c-1390 mx-auto px-10">

        <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0 py-10">
          <div className="mx-auto flex w-full flex-wrap gap-8  md:flex-row md:justify-between md:gap-012">
            {footerData.sections.map((section, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: 0}}
                viewport={{ once: true }}
                className="animate_top"
              >
                <h4 className="mb-4 text-md font-semibold text-black dark:text-white">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="mb-2 inline-block text-sm font-semibold text-gray-500 hover:text-primary dark:text-gray-400"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* <!-- Footer Bottom --> */}
        <div className="flex  flex-wrap items-center justify-center gap-5 border-t border-gray-400 py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">

          <ul className="flex items-center gap-5">
            <li>
              <Link href="#" aria-label="social icon">
                <Image
                  src="/home/footer/app-store-badge-black.svg"
                  width={100}
                  height={40}
                  alt="App Store"
                  className="cursor-pointer"
                />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="social icon">
                <Image
                  src="/home/footer/google-play-badge-black.svg"
                  width={100}
                  height={40}
                  alt="Google Play"
                  className="cursor-pointer"
                />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="social icon">
                <Image
                  src="/home/footer/app-store-mac-badge-black.svg"
                  width={100}
                  height={40}
                  alt="App Store Mac"
                  className="cursor-pointer"
                />
              </Link>
            </li>
            <li>
              <Link href="#" aria-label="social icon">
                <Image
                  src="/home/footer/app-store-microsoft-badge-black.svg"
                  width={100}
                  height={40}
                  alt="App Store Microsoft"
                  className="cursor-pointer"
                />
              </Link>
            </li>
          </ul>

          <ul className="flex gap-x-2">
            <Link href={'#'}>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 ProductDB.
              </li>
            </Link>

            <Link href={'/legal/privacy'}>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                Privacy
              </li>
            </Link>
            <Link href={'/security'}>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                Security
              </li>
            </Link>
            <Link href={'/legal/terms-of-service'}>
              <li className="text-sm text-gray-500 dark:text-gray-400">
                Terms
              </li>
            </Link>
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
