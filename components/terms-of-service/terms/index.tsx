import React from "react";
const data = [
  {
    head: "“Admin”",
    detail:
      "A User who is responsible for an Admin User Account and who has the most extensive rights of use with regard to the Tool. For more information, see this support centre article.",
  },

  {
    head: " “Admin User Account”",
    detail: "A User Account which can solely be accessed and used by an Admin.",
  },

  {
    head: "“Affiliate”",
    detail:
      "A Party's affiliate, as defined by article 1:20 of the Belgian Company Code. For ProductDB NV, Affiliates include, but are not limited to: Visma Belgium Holding BV (BE0754.932.390) and Visma AS, as parent company.",
  },

  {
    head: "  “Agreement”",
    detail:
      "The agreement regarding the Services which is concluded between the Parties when the Customer accepts the present Terms of Service, either in writing or electronically, and which governs the commercial relationship between Parties. The Agreement includes the DPA which is attached as an annex to these Terms of Service.",
  },

  {
    head: "“Booster(s)”",
    detail:
      "The different add-ons which ProductDB offers and which the Customer can activate to expand the functionalities included in their Subscription. A non-exhaustive overview of the specific functionalities provided by the various Boosters can be found on the Website.",
  },

  {
    head: "“Communication”",
    detail:
      "Any non-commercial communication concerning the Services by ProductDB to the Customer (and, where appropriate, to its related Users) via its Website, email, messages (e.g. banners) in the Tool and/or via any other appropriate means of communication;",
  },

  {
    head: "“Customer”",
    detail:
      "Any natural or legal person who has entered into an Agreement with ProductDB.",
    detail2:
      "As the Services are solely meant for the Customer’s internal business purposes, any Customer is considered to be an ‘undertaking’ within the meaning of the Belgian Code of Economic Law and, consequently, cannot be a ‘consumer’ in its commercial relationship with ProductDB.",
  },

  {
    head: "  “Customer Account”",
    detail:
      "The unique environment established by a Customer to enable its Users to access and use the Tool. It has its own configuration, a unique account number and includes all User Accounts associated with it, along with all Customer Account Data stored in them.",
  },

  {
    head: "  “Customer Account Data”",
    detail:
      "Any data (information, files, records, or any other digital content), both personal and non-personal, which is entered and/or uploaded directly into the Customer Account by the Customer and its User(s) when using the Services, excluding data directly related to the Customer itself or its Users.",
  },

  {
    head: "  “Customer Account Information”",
    detail:
      "Any information about the Customer Account, the Customer, and the associated User(s) and User Account(s) which ProductDB collects, manages and stores in the context of its Services, including, but not limited to: general business details, billing and payment data, Subscription specifics, marketing preferences, log records, etc.",
  },

  {
    head: "“Demo”",
    detail:
      "The demo version of the Tool which allows the Customer to use the Services free of charge for a limited period of time, after which the Customer must switch to one of the paying Packages.",
  },

  {
    head: "  “Documentation”",
    detail:
      "Any documentation, tutorials or other materials regarding the Services provided by ProductDB, available in the Tool and on the Website.",
  },

  {
    head: "“DPA”",
    detail: "ProductDB’s data processing agreement as available here.",
  },

  {
    head: "  “Lead Capture Booster”",
    detail:
      "The Booster which offers the Customer the additional feature of scheduling, creating webforms and holding video meetings.",
  },

  {
    head: "  “Non-Admin User”",
    detail: "A User with a Non-Admin User Account.",
  },

  {
    head: "  “Non-Admin User Account”",
    detail:
      "A User Account, which is created by an Admin for a Non-Admin User and of which the corresponding rights of use with regard to the Tool are determined by the relevant Admin within the limits permitted by these Terms of Service.",
  },

  {
    head: "  “Onboarding Services”",
    detail:
      "The services offered and performed by ProductDB personnel with respect to the preparation and implementation of the Customer Account for the purpose of the proper and effective use of the Subscription.",
  },

  {
    head: "  “Package(s)”",
    detail:
      "The different paying packages with respect to the Subscription which ProductDB offers and which the Customer can choose from. A non-exhaustive overview of the functionalities included in each Package can be found on the Website.",
  },

  {
    head: "“Party”",
    detail:
      "Any party to the Agreement, either ProductDB or the Customer. ProductDB and the Customer are collectively referred to as the Parties.",
  },

  {
    head: "  “Personal Customer Account Data”",
    detail:
      "Any Customer Account Data regarded as 'personal data' within the meaning of the Privacy Legislation.",
  },

  {
    head: "  “Personal Customer Account Information”",
    detail:
      "Any Customer Account Information related to the Customer and its Users regarded as 'personal data' within the meaning of the Privacy Legislation.",
  },

  {
    head: "  “Privacy Legislation”",
    detail:
      "Jointly refers to (i) the General Data Protection Regulation of 27 April 2016 (‘the Regulation of the European Parliament and of the Council on the protection of individuals with regard to the processing of personal data and on the free movement of such data or ‘GDPR’) and (ii) all Belgian laws regarding the implementation of the GDPR.",
  },

  {
    head: "  “Privacy Statement”",
    detail:
      "ProductDB's privacy statement specifically related to the use of the Tool as available here.",
  },

  {
    head: "  “Renewal Date”",
    detail:
      "The date, after expiry of the previous Term, on which the Subscription is automatically renewed for an additional Term.",
  },

  {
    head: "“Services”",
    detail:
      "The services provided by ProductDB to the Customer in the context of the Agreement, including in particular the Subscription and, where appropriate, the Onboarding Services.",
  },
  {
    head: "“Subscription”",
    detail:
      "The software license with regard to the Tool and all associated rights of use provided by ProductDB to the Customer and its related Users as stipulated in these Terms of Service, which is granted for a specified Term.",
  },
  {
    head: "“Subscription Fee”",
    detail:
      "The recurring amount paid by the Customer for the Subscription, based mainly on the Package selected, the Term, the number of User Licenses, the use of one or more Boosters and the Customer Account limits.",
  },

  {
    head: "“Term”",
    detail:
      "The initial or renewed term – i.e. a quarter or a year – during which the Customer and its related Users are granted the Subscription.",
  },

  {
    head: "“Tool”",
    detail:
      "The ‘ProductDB’ Software as a Service (SaaS) web and mobile application, including the various Boosters, as developed, maintained and owned by ProductDB and its Affiliates. A non-exhaustive overview of the functionalities of the Tool can be found on the Website.",
    detail2:
      "Both the name 'ProductDB' and the name 'Focus' are registered and protected as European trademarks with the European Union Intellectual Property Office (EUIPO), with trademark registration numbers 018356648 and 018356651, respectively.",
  },
  {
    head: "“User”",
    detail:
      "Any natural person who is authorized by the Customer to access and use the Tool through a User Account and who is also individually bound by the terms of use and other relevant provisions included in these Terms of Service.",
    detail2: "Admins and Non-Admin Users are jointly referred to as “Users”.",
  },

  {
    head: "“User Account”",
    detail:
      "An individual user account on the Tool which can be accessed by a User through their unique and personal login.",
    detail2:
      "Admin User Accounts and Non-Admin User Accounts are jointly referred to as “User Accounts”.",
  },

  {
    head: "  “User License”",
    detail:
      "The possibility for a Customer, as part of its current Subscription, to invite a User to activate its own User Account.",
  },

  {
    head: "  “Website”",
    detail:
      "ProductDB’s official website regarding its Services which is available via www.ProductDB.eu and every other ProductDB website intended for the different countries in which ProductDB operates.",
  },
];
export default function Terms() {
  return (
    <div>
      <div>
        <h1 className="text-sectiontitle4 font-bold text-black  dark:text-white">
          1. Important terms
        </h1>
        <p>
          In these Terms of Service, the following concepts shall have the
          meaning described in this article (when written with a capital
          letter).
        </p>
      </div>
      <div className="mt-4 border">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex w-full gap-4 border-b dark:bg-blackho"
          >
            <div className=" w-1/2 p-4 text-center md:w-1/4">
              <p className="font-bold text-black dark:text-white">
                {item.head}
              </p>
            </div>
            <div className="w-1/2 p-4  md:w-3/4">
              <p className="text-justify text-sm text-gray-600 dark:text-white">
                {item.detail}
              </p>
              {item.detail2 && (
                <p className="mt-2 text-justify text-sm text-gray-600 dark:text-white">
                  {item.detail2}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
