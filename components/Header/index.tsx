"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";
import Solutions from "./mobile-menu/solutions";
import Resources from "./mobile-menu/resources";
import About from "./mobile-menu/about";
import SearchModal from "./search-modal";
import resources_data from "./resourceMenuData";
import solutions_data from "./solutionMenuData";
import product_data from "./productMenuData";
import Product from "./mobile-menu/product";
import { about_data } from "./aboutMenuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  const [subMenu, setSubMenu] = useState("");
  const handleMenuClose = () => {
    setSubMenu("");
  };

  useEffect(() => {
    if (theme === "dark") {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [theme]);
  const [mobileScreen, setMobileScreen] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <>
      <Disclosure as="nav">
        {({ open, close }) => (
          <div className="relative">
            <header
              className={`fixed left-0 top-0 z-99999 w-full border-b bg-white dark:border-gray-700 dark:bg-black`}
              onMouseEnter={handleMenuClose}
            >
              <div
                className="mx-auto  hidden  h-7 max-w-c-1390 items-center justify-between px-4 pb-3 pr-2 pt-7 lg:flex"
                onMouseEnter={handleMenuClose}
              >
                <div className="flex items-center gap-x-4">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-semibold hover:text-primary   hover:underline focus:outline-none   focus-visible:ring-2 focus-visible:ring-white/75 dark:bg-black/20">
                        <div className="flex gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                            />
                          </svg>

                          <p className="">English</p>
                        </div>
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5 "
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="dropdpwn-top-arrow-lang absolute z-999 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-white text-primary underline"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                日本語
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-white text-primary underline"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Deutsch
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-white text-primary underline"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                English
                              </button>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-white text-primary underline"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Español
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                className={`${
                                  active
                                    ? "bg-white text-primary underline"
                                    : "text-gray-900"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Português
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <div className="flex items-center gap-x-1">
                    <Switch
                      checked={enabled}
                      onChange={() => {
                        if (theme === "dark") {
                          setTheme("light");
                        } else {
                          setTheme("dark");
                        }
                      }}
                      className={`${
                        enabled ? "bg-blue-600" : "bg-slate-300 dark:bg-blackho"
                      } relative inline-flex h-4 w-10 items-center rounded-full`}
                    >
                      <span
                        className={`${
                          enabled ? "translate-x-6" : "translate-x-0"
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                      />
                    </Switch>
                    <p className="text-sm font-semibold">Dark Mode</p>
                  </div>

                  <div className="flex items-center gap-x-1 hover:text-primary hover:underline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <Link href={"/contact-sales"}>
                      <p className="text-sm font-semibold">Contact Sales</p>
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <Link
                    href={"#"}
                    onClick={() => setOpen(true)}
                    className=" text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </Link>
                  <div className="flex items-center gap-x-1 hover:text-primary hover:underline">
                    <Link href={"#"}>
                      <p className="text-sm font-semibold">Log in</p>
                    </Link>
                  </div>

                  <div className="flex items-center gap-x-1 hover:text-primary hover:underline">
                    <Link href={"https://support.productdb.io"}>
                      <p className="text-sm font-semibold">Customer Support</p>
                    </Link>
                  </div>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-semibold hover:text-primary   hover:underline focus:outline-none   focus-visible:ring-2 focus-visible:ring-white/75 dark:bg-black/20">
                        <div className="flex gap-1">
                          <p className="">About</p>
                        </div>
                        <ChevronDownIcon
                          className="-mr-1 ml-2 h-5 w-5 "
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="dropdpwn-top-arrow-about absolute right-0 z-99999 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Link href="/company/our-story" passHref>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-white text-primary underline"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  About Us
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                          <Link href="/company/careers" passHref>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-white text-primary underline"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Careers
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                        </div>
                        <div className="px-1 py-1">
                          <Link href="/contact-sales" passHref>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-white text-primary underline"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Contact Us
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                        </div>
                        <div className="px-1 py-1">
                          <Link href="/company/management" passHref>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active
                                      ? "bg-white text-primary underline"
                                      : "text-gray-900"
                                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                >
                                  Management Team
                                </button>
                              )}
                            </Menu.Item>
                          </Link>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
              <div
                className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 lg:flex 2xl:px-0 "
                onMouseEnter={handleMenuClose}
              >
                <div
                  className="flex w-full items-center justify-between lg:w-1/4"
                  onMouseEnter={handleMenuClose}
                >
                  <a href="/" className="mr-14 max-w-xs lg:m-0">
                    <Image
                      src="/images/logo/logo-dark.svg"
                      alt="logo"
                      width={107.127}
                      height={27}
                      className="hidden w-full dark:block"
                    />
                    <Image
                      src="/images/logo/logo-light.svg"
                      alt="logo"
                      width={107.127}
                      height={27}
                      className="w-full dark:hidden"
                    />
                  </a>

                  {/*  Hamburger Toggle BTN  */}

                  <div className="-ml-2 mr-2 flex h-20 items-center gap-4 lg:hidden">
                    <Link
                      href={"#"}
                      onClick={() => setOpen(true)}
                      className=" text-gray-400  "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </Link>
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <div
                        aria-label="hamburger Toggler"
                        className="block lg:hidden"
                      >
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                          <span className="absolute right-0 block h-full w-full">
                            <span
                              className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                                !open ? "!w-full delay-300" : "w-0"
                              }`}
                            ></span>
                            <span
                              className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                                !open ? "delay-400 !w-full" : "w-0"
                              }`}
                            ></span>
                            <span
                              className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                                !open ? "!w-full delay-500" : "w-0"
                              }`}
                            ></span>
                          </span>
                          <span className="du-block absolute right-0 h-full w-full rotate-45">
                            <span
                              className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                                !open ? "!h-0 delay-[0]" : "h-full"
                              }`}
                            ></span>
                            <span
                              className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                                !open ? "!h-0 delay-200" : "h-0.5"
                              }`}
                            ></span>
                          </span>
                        </span>
                      </div>
                    </Disclosure.Button>
                  </div>
                </div>

                {/* Nav Menu Start   */}
                <div
                  className={`invisible h-0 w-full items-center justify-between  lg:visible lg:flex lg:h-auto lg:w-full ${
                    navigationOpen &&
                    "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white px-7.5 shadow-solid-5 dark:bg-blacksection lg:h-auto lg:p-0 lg:shadow-none lg:dark:bg-transparent"
                  }`}
                >
                  <nav className="flex w-full px-4">
                    <div
                      className={`group flex h-20 cursor-pointer items-center gap-x-2  border-b-[3px] px-3 xl:px-6 ${
                        subMenu === "product"
                          ? " border-primary"
                          : "border-transparent"
                      }`}
                      onMouseEnter={() => {
                        setSubMenu("product");
                      }}
                      onClick={() => {
                        if (subMenu === "product") {
                          handleMenuClose();
                        } else {
                          setSubMenu("product");
                        }
                      }}
                    >
                      <div
                        className={clsx(
                          `flex items-center gap-2 text-regular font-medium text-waterloo group-hover:text-primary `,
                          {
                            "!text-primary": subMenu === "product",
                          },
                        )}
                      >
                        Products
                        <ChevronDownIcon
                          className="h-5 w-5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div
                      className={`group flex h-20 cursor-pointer items-center gap-x-2  border-b-[3px] px-3 xl:px-6 ${
                        subMenu === "sol"
                          ? " border-primary"
                          : "border-transparent"
                      }`}
                      onMouseEnter={() => {
                        setSubMenu("sol");
                      }}
                      onClick={() => {
                        if (subMenu === "sol") {
                          handleMenuClose();
                        } else {
                          setSubMenu("sol");
                        }
                      }}
                    >
                      <div
                        className={clsx(
                          `flex items-center gap-2 text-regular font-medium text-waterloo group-hover:text-primary `,
                          {
                            "!text-primary": subMenu === "sol",
                          },
                        )}
                      >
                        Solutions
                        <ChevronDownIcon
                          className="h-5 w-5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div
                      className={`group flex h-20 cursor-pointer items-center gap-x-2  border-b-[3px] px-3 xl:px-6 ${
                        subMenu === "res"
                          ? " border-primary"
                          : "border-transparent"
                      }`}
                      onMouseEnter={() => {
                        setSubMenu("res");
                      }}
                      onClick={() => {
                        if (subMenu === "res") {
                          handleMenuClose();
                        } else {
                          setSubMenu("res");
                        }
                      }}
                    >
                      <div
                        className={clsx(
                          `flex items-center gap-2 text-regular font-medium text-waterloo group-hover:text-primary `,
                          {
                            "!text-primary": subMenu === "res",
                          },
                        )}
                      >
                        Resources
                        <ChevronDownIcon
                          className="h-5 w-5 group-hover:text-primary"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div
                      className={`group flex h-20  cursor-pointer items-center border-b-[3px] border-transparent px-3 hover:border-primary xl:px-6`}
                      onMouseEnter={handleMenuClose}
                    >
                      <div
                        className={clsx(
                          `flex items-center gap-2 text-regular font-medium text-waterloo group-hover:text-primary `,
                        )}
                      >
                        Pricing
                      </div>
                    </div>

                    <div className=" w-full" onMouseEnter={handleMenuClose}>
                      {""}
                    </div>
                  </nav>
                  <div
                    className="flex h-20  items-center justify-end gap-6 xl:mt-0"
                    onMouseEnter={handleMenuClose}
                  >
                    {/* <ThemeToggler /> */}

                    <Link
                      href="/demo"
                      className="whitespace-nowrap text-regular font-medium text-primary hover:text-primary dark:text-white"
                    >
                      Get a demo
                    </Link>

                    <Link
                      href="#"
                      className="flex items-center justify-center whitespace-nowrap rounded-full bg-primary px-7.5 py-2.5 text-regular font-semibold text-white  hover:bg-primaryho"
                    >
                      Get started free
                    </Link>
                  </div>
                </div>
              </div>
              {subMenu !== "" ? (
                <>
                  <div className=" absolute   top-0 z-[999999] mt-[7.6rem] w-full bg-blue-50 dark:bg-blacksection">
                    {subMenu === "sol" ? (
                      <SolutionsMenuContent closeMenu={handleMenuClose} />
                    ) : subMenu === "res" ? (
                      <ResourcesMenuContent closeMenu={handleMenuClose} />
                    ) : subMenu === "product" ? (
                      <ProductsMenuContent closeMenu={handleMenuClose} />
                    ) : null}
                  </div>
                  <div
                    className="absolute z-10 h-[100vh] w-full bg-black opacity-50"
                    onMouseEnter={handleMenuClose}
                  ></div>
                </>
              ) : null}
            </header>

            <Disclosure.Panel className="fixed  z-50 h-full min-h-screen w-full overflow-scroll  lg:hidden">
              {mobileScreen === "solutions" ? (
                <div className="h-full min-h-screen w-full space-y-4 bg-white pb-3 pt-24 text-black dark:bg-black ">
                  <Solutions setMobileScreen={setMobileScreen} close={close} />
                </div>
              ) : mobileScreen === "product" ? (
                <div className="h-full min-h-screen w-full space-y-4 bg-white pb-3 pt-24 text-black dark:bg-black ">
                  <Product setMobileScreen={setMobileScreen} close={close} />
                </div>
              ) : mobileScreen === "resources" ? (
                <div className="h-full min-h-screen  w-full space-y-4 bg-white pt-20 text-black ">
                  <Resources
                    setMobileScreen={setMobileScreen}
                    resources_data={resources_data}
                    close={close}
                  />
                </div>
              ) : mobileScreen === "about" ? (
                      <div className="h-full min-h-screen w-full space-y-4 bg-white pb-3 pt-24 text-black dark:bg-black ">
                  <About
                    setMobileScreen={setMobileScreen}
                    //  about_data={about_data}
                    close={close}
                  />
                </div>
              ) : (
                <div className="h-full  min-h-screen w-full space-y-4 bg-white px-6 pb-3 pt-30 text-black dark:bg-black">
                  <div>
                    <Link href={"#"} onClick={() => setMobileScreen("product")}>
                      <div className="flex w-full items-center justify-between rounded-sm border border-gray-400/80 bg-slate-100 p-3 shadow">
                        <p className="text-xl font-medium ">Products</p>
                        <button>
                          <ChevronDownIcon
                            className="h-8 w-8 -rotate-90"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Link>
                  </div>

                  <div>
                    <Link
                      href={"#"}
                      onClick={() => setMobileScreen("solutions")}
                    >
                      <div className="flex w-full items-center justify-between rounded-sm border border-gray-400/80 bg-slate-100 p-3 shadow">
                        <p className="text-xl font-medium ">Solutions</p>
                        <button>
                          <ChevronDownIcon
                            className="h-8 w-8 -rotate-90"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Link>
                  </div>

                  <div>
                    <Link href={"#"}>
                      <div className="flex w-full items-center justify-between rounded-sm border border-gray-400/80 bg-slate-100 p-3 shadow">
                        <p className="text-xl font-medium ">Pricing</p>
                        <button>
                          <ChevronDownIcon
                            className="h-8 w-8 -rotate-90"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"#"}
                      onClick={() => setMobileScreen("resources")}
                    >
                      <div className="flex w-full items-center justify-between rounded-sm border border-gray-400/80 bg-slate-100 p-3 shadow">
                        <p className="text-xl font-medium ">Resources</p>
                        <button>
                          <ChevronDownIcon
                            className="h-8 w-8 -rotate-90"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Link>
                  </div>
                  <div>
                    <Link
                      href={"#"}
                      onClick={() => setMobileScreen("about")}
                    >
                      <div className="flex w-full items-center justify-between rounded-sm border border-gray-400/80 bg-slate-100 p-3 shadow">
                        <p className="text-xl font-medium ">About</p>
                        <button>
                          <ChevronDownIcon
                            className="h-8 w-8 -rotate-90"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </Link>
                  </div>
                  <br/>
                  <Link href="/demo">
                    <button className="h-10 w-full rounded-md bg-primary font-medium text-white">
                      Get a demo
                    </button>
                  </Link>
                  <button className="h-10 w-full rounded-md border border-primary bg-white font-medium text-primary">
                    Get started for free
                  </button>

                  <div className="flex  justify-around pt-4 dark:text-white">
                    <div className="flex flex-col items-start gap-x-4 space-y-4">
                      <Menu
                        as="div"
                        className="relative inline-block text-left"
                      >
                        <div>
                          <Menu.Button className="inline-flex w-full justify-center rounded-md py-2 text-sm font-semibold hover:text-primary   hover:underline focus:outline-none   focus-visible:ring-2 focus-visible:ring-white/75 dark:bg-black/20">
                            <div className="flex gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-5 w-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"
                                />
                              </svg>

                              <p className="">English</p>
                            </div>
                            <ChevronDownIcon
                              className="-mr-1 ml-2 h-5 w-5 "
                              aria-hidden="true"
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="dropdpwn-top-arrow-lang absolute z-999 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div className="px-1 py-1 ">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-white text-primary underline"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    日本語
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-white text-primary underline"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Deutsch
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-white text-primary underline"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    English
                                  </button>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-white text-primary underline"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Español
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                            <div className="px-1 py-1">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active
                                        ? "bg-white text-primary underline"
                                        : "text-gray-900"
                                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                  >
                                    Português
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <div className="flex items-center gap-x-1">
                        <Switch
                          checked={enabled}
                          onChange={() => {
                            if (theme === "dark") {
                              setTheme("light");
                            } else {
                              setTheme("dark");
                            }
                          }}
                          className={`${
                            enabled
                              ? "bg-blue-600"
                              : "bg-slate-300 dark:bg-blackho"
                          } relative inline-flex h-4 w-10 items-center rounded-full`}
                        >
                          <span
                            className={`${
                              enabled ? "translate-x-6" : "translate-x-0"
                            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                          />
                        </Switch>
                        <p className="text-sm font-semibold">Dark Mode</p>
                      </div>

                      <div className="flex items-center gap-x-1 hover:text-primary hover:underline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>
                        <Link href={"/contact-sales"}>
                          <p className="text-sm font-semibold">Contact Sales</p>
                        </Link>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center gap-x-1 hover:text-primary hover:underline">
                        <Link href={"#"}>
                          <p className="text-sm font-semibold">Log in</p>
                        </Link>
                      </div>

                      <div className="flex items-center gap-x-1 hover:text-primary hover:underline">
                        <Link href={"https://support.productdb.io"}>
                          <p className="text-sm font-semibold">
                            Customer Support
                          </p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      <SearchModal open={open} setOpen={setOpen} />
    </>
  );
};

const SolutionsMenuContent = ({ closeMenu }) => {
  return (
    <div className="mx-auto h-full max-w-c-1280">
      <div className="space-y-6 p-[24px]">
        <div className="space-y-1">
          <h4 className="text-center text-lg font-semibold dark:text-white">
            {solutions_data.platform.title}
          </h4>
          <p className="text-center">{solutions_data.platform.description}</p>
        </div>

        {/* <div className="flex items-center justify-center gap-x-8">
          {solutions_data.platform.links.map((item) => {
            return (
              <Link href={item.url} passHref
                onClick={closeMenu}
              >
                <span className="text-sm font-medium text-[#0057fc] hover:underline">
                  <div className="rounded-sm border bg-white px-16 py-3 dark:border-gray-700 dark:bg-black">
                    {item.title}
                  </div>
                </span>
              </Link>
            )
          })}
        </div> */}

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6">
            {solutions_data.hubs.map((hub, index) => (
              <Link
                href={hub.link.url}
                key={index}
                passHref
                onClick={closeMenu}
              >
                <span className="flex max-w-[300px] gap-x-2 rounded-3xl border bg-white p-3 dark:border-gray-700 dark:bg-black">
                  <div className="pt-1 text-primary">{hub.icon}</div>
                  <div className="space-y-2">
                    <h5 className="font-semibold dark:text-white">
                      {hub.title}
                    </h5>
                    <p>{hub.description}</p>
                    <span className="text-sm font-medium text-[#0057fc] hover:underline">
                      {hub.link.title}
                    </span>
                  </div>
                </span>
              </Link>
            ))}
          </div>

          {/* <div className="mx-auto flex  items-center justify-center gap-x-6 pt-6">
            {solutions_data.footer.map((item, index) => (
              <Link href={item.link.url} key={index}
                onClick={closeMenu}
              >
                <div className="rounded-sm border  bg-white px-[105px] py-3 dark:border-gray-700 dark:bg-black ">
                  <h5 className="text-center font-semibold dark:text-white">
                    {item.title}
                  </h5>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))
            }
          </div> */}
        </div>
      </div>
    </div>
  );
};

const ProductsMenuContent = ({ closeMenu }) => {
  return (
    <div className="mx-auto h-full max-w-c-1280">
      <div className="space-y-6 p-[24px]">
        <div className="space-y-1">
          <h4 className="text-center text-lg font-semibold dark:text-white">
            {product_data.platform.title}
          </h4>
          <p className="text-center">{product_data.platform.description}</p>
        </div>

        {/* <div className="flex items-center justify-center gap-x-8">
          {product_data.platform.links.map((item) => {
            return (
              <Link href={item.url} passHref
                onClick={closeMenu}
              >
                <span className="text-sm font-medium text-[#0057fc] hover:underline">
                  <div className="rounded-sm border bg-white px-16 py-3 dark:border-gray-700 dark:bg-black">
                    {item.title}
                  </div>
                </span>
              </Link>
            )
          })}
        </div> */}

        <div className="flex flex-col gap-y-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-6 ">
            {product_data.hubs.map((hub, index) => (
              <Link
                href={hub.link.url}
                key={index}
                passHref
                onClick={closeMenu}
              >
                <span className="flex max-w-[300px] gap-x-2 rounded-3xl border bg-white p-3 dark:border-gray-700 dark:bg-black">
                  <div className="pt-1 text-primary">{hub.icon}</div>
                  <div className="space-y-2">
                    <h5 className="font-semibold dark:text-white">
                      {hub.title}
                    </h5>
                    <p>{hub.description}</p>
                    <span className="text-sm font-medium text-[#0057fc] hover:underline">
                      {hub.link.title}
                    </span>
                  </div>
                </span>
              </Link>
            ))}
          </div>

          {/* <div className="mx-auto flex  items-center justify-center gap-x-6 pt-6">
            {product_data.footer.map((item, index) => (
              <Link href={item.link.url} key={index}
                onClick={closeMenu}
              >
                <div className="rounded-sm border  bg-white px-[105px] py-3 dark:border-gray-700 dark:bg-black ">
                  <h5 className="text-center font-semibold dark:text-white">
                    {item.title}
                  </h5>
                  <p>{item.description}</p>
                </div>
              </Link>
            ))
            }
          </div> */}
        </div>
      </div>
    </div>
  );
};

const ResourcesMenuContent = ({ closeMenu }) => {
  return (
    <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 p-8">
      {resources_data.items.map((category, index) => (
        <div key={index} className="  p-4">
          <div className="flex gap-4">
            <div className="pt-1 text-primary">{category.icon}</div>
            <div>
              <h2 className="text-md mb-2 font-semibold dark:text-white">
                {category.title}
              </h2>
              <ul className="">
                {category.items.map((item, index) => (
                  <Link
                    href={item.url}
                    className="hover:underline"
                    onClick={closeMenu}
                  >
                    <li key={index} className="mb-1">
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
