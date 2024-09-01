"use client";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function RequestForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    phone: "",
    company: "",
    numEmployees: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
      <div className="w-full p-4 md:w-1/2 md:p-16">
        <h3 className="w-full text-3xl  font-bold text-black dark:text-white md:text-hero  ">
          Request a ProductDB demo.
        </h3>
        <p className="text-md mt-2  w-full  text-black dark:text-white ">
          Get a free 1:1 demo and consultation tailored to your business to
          ensure your team's success.
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <div className="flex items-center justify-start gap-3">
            <CheckCircleIcon className="h-6 w-6 " />

            <p className="text-md mt-2  w-full  text-black dark:text-white ">
              See how ProductDB boosts team productivity
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <CheckCircleIcon className="h-6 w-6 " />
            <p className="text-md mt-2  w-full  text-black dark:text-white ">
              Get a one-on-one demo tailored to your needs
            </p>
          </div>
          <div className="flex items-center justify-start gap-3">
            <CheckCircleIcon className="h-6 w-6 " />
            <p className="text-md mt-2  w-full  text-black dark:text-white ">
              Meer informatie about our pricing and premium services
            </p>
          </div>
          <Image
            src={`/demo/text_left__logos_csf_2.avif`}
            alt=""
            width={500}
            height={500}
            className="mt-4"
          />
        </div>
      </div>
      <div className="w-full md:mt-8 md:w-1/2">
        <div className="mx-auto max-w-lg rounded-lg bg-white p-6 shadow-md dark:bg-blacksection">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="firstName"
                className=" text-sm font-medium text-black dark:text-white"
              >
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-blackho dark:text-white sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-blackho dark:text-white sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="workEmail"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Work Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-blackho dark:text-white sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-blackho dark:text-white sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Company <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-blackho dark:text-white sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="numEmployees"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Number of Employees <span className="text-red-500">*</span>
              </label>
              <select
                id="numEmployees"
                value={formData.numEmployees}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:bg-blackho dark:text-white sm:text-sm"
              >
                <option value="">Select...</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-200">51-200</option>
                <option value="201-500">201-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1001+">1001+</option>
              </select>
            </div>
            <div className="my-4">
              <p className="text-justify text-sm">
                By submitting my information, I confirm that I have read and
                understood the ProductDB
              </p>
              <Link href={"/legal/privacy"} className="text-sm text-blue-400 underline">
                Privacy Policy.
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-4 text-sm font-medium text-white shadow-sm hover:bg-primaryho focus:outline-none focus:ring-2 focus:ring-primaryho focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RequestForm;
