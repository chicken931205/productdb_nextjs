"use client";
import { useState } from "react";
import Link from "next/link";
import React from "react";
import { Phone } from "./Phone";

export default function Request() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    industry: "",
    companySize: "",
    email: "",
    phoneNumber: "",
    country: "",
    contactMethod: "",
    query: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 py-8 md:px-16 md:py-16 2xl:px-0">
        <span id={`call`} className="-mt-60 block h-60"></span>
        <div className="flex flex-col items-center justify-center gap-8 md:px-16  lg:px-44">
          <div className="">
            <h3 className="text-3xl font-bold text-black dark:text-white">
              Get a call or leave a query:
            </h3>
            <p className="mt-4">
              <span className="pr-1 font-bold">
                Choose to be called or leave your query
              </span>
              and tell us about your challenges. A consultant will call you back
              in under five minutes (during office hours only) or answer your
              query within one working day. Already a customer?
              <Link href="#" className="pl-1 font-bold text-primary underline">
                Contact support.
              </Link>
            </p>
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <div className="flex w-full flex-col gap-4  md:flex-row">
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    First name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 dark:bg-blacksection"
                    required
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    Last name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 dark:bg-blacksection"
                    required
                  />
                </div>
              </div>
              <div className="mt-8 w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Company name*
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={form.companyName}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 dark:bg-blacksection"
                  required
                />
              </div>
              <div className="mt-8 flex w-full flex-col gap-4 md:flex-row">
                <div className="w-full">
                  <label className="text-md block font-medium text-gray-700">
                    What industry do you work in?*
                  </label>
                  <p className="mt-1 text-sm">
                    That’s how we will know whether ProductDB is the right
                    solution for your business.
                  </p>
                  <select
                    name="industry"
                    value={form.industry}
                    onChange={handleChange}
                    className="text-md mt-1 w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 dark:bg-blacksection"
                    required
                  >
                    <option value="" disabled>
                      Please select
                    </option>
                    <option value="Web Agency">
                      Digital &amp; web agencies
                    </option>
                    <option value="Creative Agency">
                      Marketing &amp; advertising agencies
                    </option>
                    <option value="Content producers">Creative agencies</option>
                    <option value="Professional services">
                      Professional services
                    </option>
                    <option value="Small independent businesses">
                      Small independent businesses
                    </option>
                    <option value="Architecture">Architecture</option>
                    <option value="Technical Agency">Technical Agency</option>
                    <option value="Installation &amp; maintenance">
                      Installation &amp; maintenance
                    </option>
                    <option value="Construction, Manufacturing &amp; Installation">
                      Construction, Manufacturing &amp; Installation
                    </option>
                    <option value="IT &amp; software">
                      IT and software companies
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="w-full">
                  <label className="text-md block font-medium text-gray-700">
                    How many people work at your company?*
                  </label>
                  <p className="mt-1 text-sm">
                    That’s how we will know whether ProductDB is the right
                    solution for your business.
                  </p>
                  <select
                    name="companySize"
                    value={form.companySize}
                    onChange={handleChange}
                    className="text-md mt-1 w-full border border-gray-300 p-3 focus:outline-none focus:ring-2 dark:bg-blacksection"
                    required
                  >
                    <option value="" disabled>
                      Please select
                    </option>
                    <option value="1">1</option>
                    <option value="2-5">2-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-20">11-20</option>
                    <option value="21-100">21-100</option>
                    <option value="100+">100+</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Business email address*
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 dark:bg-blacksection"
                  required
                />
              </div>
              <div className="mt-8 w-full ">
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number*
                </label>
                {/* <div className="flex gap-4">
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    className="w-1/4 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option disabled value="">
                      Country
                    </option>
                    <option value="PK">Pakistan</option>
                    <option value="US">United States</option>
                    <option value="IN">India</option>
                  </select>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className="w-3/4 border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div> */}
                {/* <div className="w-full"> */}
                <Phone />
                {/* </div> */}
              </div>
              <div className="mt-8 w-full">
                <p className="block text-sm font-medium text-gray-700">
                  How would you like to be contacted?*
                </p>
                <div className="mb-2 flex items-center">
                  <input
                    className="mr-2 "
                    type="radio"
                    id="contactCall"
                    name="contactMethod"
                    value="call"
                    checked={form.contactMethod === "call"}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="contactCall">I want to be called.</label>
                </div>
                <div className="flex items-center">
                  <input
                    className="mr-2"
                    type="radio"
                    id="contactQuery"
                    name="contactMethod"
                    value="query"
                    checked={form.contactMethod === "query"}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="contactQuery">
                    I’ll leave my query here.
                  </label>
                </div>
              </div>
              {form.contactMethod === "query" && (
                <div className="mt-4 w-full">
                  <label className="block text-sm font-medium text-gray-700">
                    My query
                  </label>
                  <textarea
                    name="query"
                    value={form.query}
                    onChange={handleChange}
                    className="mt-1 w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    // rows="4"
                    // cols={}
                    required={form.contactMethod === "query"}
                  ></textarea>
                </div>
              )}
              <p className="mt-4 text-sm">
                Safeguarding your personal data is our top priority. Read more
                about this in our{" "}
                <a href="/legal/privacy" className="text-primary underline">
                  privacy statement
                </a>
                .
              </p>
              <div className="mt-8 w-full">
                <button
                  type="submit"
                  className="  rounded-3xl bg-primaryho px-6 py-3 text-xl text-white"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
