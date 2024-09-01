"use client";
import React, { useState } from "react";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/20/solid";
import { MinusIcon } from "@heroicons/react/24/outline";

export default function PrivacyTemplate() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Collapsible menu for mobile devices */}
      <div className="sticky top-20 z-10 mb-4 lg:hidden">
        <div className="flex items-center justify-between bg-gray-300 px-8 py-3 dark:bg-blackho">
          <h2 className="text-2xl font-medium text-gray-600 dark:text-gray-300">
            Table of contents
          </h2>
          <button
            onClick={toggleMenu}
            className="hover:bg-secondary rounded-md  p-2 text-gray-500 dark:text-gray-300"
          >
            {isMenuOpen ? (
              <MinusIcon className="h-8 w-8 " />
            ) : (
              <PlusIcon className="h-8 w-8 " />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="space-y-2 bg-gray-100 px-8 py-4 dark:bg-blackho">
            <Link
              className="block border-b-2 border-gray-300 py-4 text-base font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href={"#scope"}
              onClick={toggleMenu}
            >
              Scope of this Privacy Policy
            </Link>
            <Link
              className="block border-b-2 border-gray-300 py-4 text-base font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href={"#information-collection"}
              onClick={toggleMenu}
            >
              What Information do we Collect?
            </Link>
            <Link
              className="block border-b-2 border-gray-300 py-4 text-base font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href={"#data-need"}
              onClick={toggleMenu}
            >
              Why do we Need your Personal Data?
            </Link>
            <Link
              className="block border-b-2 border-gray-300 py-4 text-base font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href={"#automatically-collected"}
              onClick={toggleMenu}
            >
              Information we collect automatically
            </Link>
            <Link
              className="block border-b-2 border-gray-300 py-4 text-base font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href={"#your-rights"}
              onClick={toggleMenu}
            >
              Your Rights
            </Link>
            <Link
              className="block border-b-2 border-gray-300 py-4 text-base font-medium hover:text-primary dark:text-gray-300 dark:hover:text-primary"
              href={"#data-transfer"}
              onClick={toggleMenu}
            >
              Where will Data be Transferred?
            </Link>
          </div>
        )}
      </div>

      {/* Main content and menu for large devices */}
      <section className="bg-white pb-10 dark:bg-black lg:pb-15 lg:pt-15 xl:pb-20 xl:pt-20">
        <div className="mx-auto flex max-w-c-1235 gap-12 px-8 md:px-12 xl:px-16">
          {/* Left menu for large devices */}
          <div className="hidden w-1/4 lg:block">
            <div className="sticky top-27 w-full bg-gray-200 px-6 py-6 dark:bg-black">
              <h3 className="mb-3 text-xl font-medium text-black dark:text-white">
                What's on this page?
              </h3>
              <ul className="flex	list-disc flex-col gap-2 px-4">
                <li>
                  <Link className="hover:text-primary" href={"#scope"}>
                    Scope of this Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary"
                    href={"#information-collection"}
                  >
                    What Information do we Collect?
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href={"#data-need"}>
                    Why do we Need your Personal Data?
                  </Link>
                </li>
                <li>
                  <Link
                    className="hover:text-primary"
                    href={"#automatically-collected"}
                  >
                    Information we collect automatically
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href={"#your-rights"}>
                    Your Rights
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-primary" href={"#data-transfer"}>
                    Where will Data be Transferred?
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Main content */}
          <div className="w-full lg:w-3/4">
            <h2 className="mx-auto mb-2 text-center text-3xl font-bold text-black dark:text-white xl:text-hero">
              Privacy Policy
            </h2>
            <p className="py-10 italic">
              Effective as of: June 18, 2024
              <br />
              <br />
              Your privacy is extremely important to us. To better protect you,
              we provide this notice explaining our online information practices
              and the choices you can make about the way your information is
              collected and used.
              <br />
              <br />
              This Privacy Policy relates to information collected by Mango
              Technologies, Inc. DBA ProductDB (referred to in this Privacy
              Policy as "ProductDB" "we" or "us" or "our") through your use of
              our website and our Services, features, and information available
              on our website (which are collectively referred to in this Privacy
              Policy as the "ProductDB Service").
            </p>
            <strong>
              If you do not agree to our use of your personal data in line with
              this policy, please do not use the ProductDB Services.
            </strong>
            <span id="scope" className="-mt-56 block h-56"></span>
            <strong>Scope of this Privacy Policy</strong>
            <p className="py-10">
              Please be aware that this Privacy Policy does not govern all the
              information ProductDB may process. Our commitment to customers and
              service providers is governed by a separate Data Protection
              Addendum. This Privacy Policy is also incorporated into and
              governed by our Terms of Use. Any capitalized words we use in this
              Privacy Policy that we haven&apos;t defined here will have the
              same meaning that they&apos;re given in our Terms of Use.
              <br />
              <br />
              Our commitments to employees are governed by our internal
              employment policies.
              <br />
              <br />
              In all instances we are committed to transparency with our
              customers, employees, and to protecting your data privacy.
            </p>
            <span
              id="information-collection"
              className="-mt-56 block h-56"
            ></span>
            <strong>What Information do we Collect?</strong>
            <p className="py-10">
              You will be required to establish an account in order to take
              advantage of certain features of the ProductDB Service. If you
              wish to establish an account you will be required to provide us
              with information (including personally identifiable information
              and non-personally identifiable information). In addition, we may
              obtain your personally identifiable information from you if you
              identify yourself to us by sending us an e-mail with questions or
              comments.
              <br />
              <br />
              Depending on your use of the ProductDB Service, we collect two
              types of information: personally identifiable information and
              non-personally identifiable information.
              <br />
              <br />
              <strong>Personally Identifiable Information </strong>
              Personally identifiable information identifies you or can be used
              to identify or contact you. Examples of personally identifiable
              information may include your name, IP address, company name, job
              title, address, e-mail address, telephone number, and billing and
              credit card information.
              <br />
              <br />
              <strong> Non-Personally Identifiable Information </strong>
              Non-personally identifiable information is information, any single
              item of which, by itself, cannot be used to identify or contact
              you, which may include demographic information (such as age,
              profession, company industry, gender, current location, or zip
              code), IP addresses, browser types, domain names, and statistical
              data involving the use of the ProductDB Service. Certain
              non-personally identifiable information may be considered a part
              of your personally identifiable information if it were combined
              with other identifiers (for example, combining your zip code with
              your street address) in a way that enables you to be identified.
              But the same pieces of information may be considered
              non-personally identifiable information when they are taken alone
              or combined only with other non-personally identifiable
              information (for example, your account preferences).
            </p>
            <span id="data-need" className="-mt-56 block h-56"></span>
            <strong>Why do we Need your Personal Data? </strong>
            <br />
            <br />
            We do not sell any data, including your personal data. We will only
            collect and process your personal data in accordance with applicable
            data protection and privacy laws. We need to collect and process
            certain personal data in order to provide you with access to
            ProductDB. If you registered with us, you will have been asked to
            check a tick box indicating your agreement to provide this data in
            order to access our services, purchase our products or view our
            content. This provides us with a lawful basis to process this data.
            You maintain the right to access or delete the data we have. In
            accordance with applicable data protection laws, any personal data
            you provide us will be deleted on request.
            <br />
            <br />
            <span
              id="automatically-collected"
              className="-mt-56 block h-56"
            ></span>
            <strong>Information we collect automatically</strong>
            <br />
            <br />
            We automatically collect certain information about you when you
            access or use our Services or transact business with us, including:
            <br />
            <ul className="list-disc space-y-5 pl-10 pt-5">
              <li>
                Transaction Information: When you purchase, return, request, or
                exchange a product or service from us, we collect information
                about the transaction, such as product details, purchase price,
                date, and location of the transaction.
              </li>
              <li>
                Log Information: We obtain information about your use of our
                Services, including the type of browser you use, access times,
                pages viewed, your IP address, and the page you visited before
                navigating to our Services.
              </li>
              <li>
                Device Information: We collect information about the computer or
                mobile device you use to access our Services, such as the
                hardware model, operating system and version, unique device
                identifiers, and mobile network information.
              </li>
              <li>
                Location Information: We may collect information about the
                precise location of your device when you consent to the
                collection of this information. We may also collect information
                about your approximate location each time you access our
                Services.
              </li>
            </ul>
            <br />
            <br />
            <span id="your-rights" className="-mt-56 block h-56"></span>
            <strong>Your Rights</strong>
            <br />
            <br />
            You have the right to be informed about our collection and use of
            your personal data. This Privacy Policy should tell you everything
            you need to know, but you can always contact us to find out more or
            to ask any questions.
            <br />
            <br />
            You have the right to access the personal data we hold about you. We
            will respond to access requests as soon as possible and, in any
            case, within one month of receiving your request (unless your
            request is complex).
            <br />
            <br />
            <span id="data-transfer" className="-mt-56 block h-56"></span>
            <strong>Where will Data be Transferred? </strong>
            <br />
            <br />
            We process and store data in the United States. If you reside
            outside of the United States, your data may be transferred to the
            United States. When you provide us with your personal data, you
            consent to the storage and processing of your personal data in the
            United States. We may also process your data elsewhere.
          </div>
        </div>
      </section>
    </div>
  );
}
