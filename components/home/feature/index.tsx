"use client";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Feature() {
  const [currentTab, setCurrentTab] = useState("tabOne");

  return (
    <div>
      <section>
        <div className="mx-auto flex max-w-c-1390 flex-col gap-4 px-4 pb-12 md:px-8">
          <div className="text-center">
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-hero">
            Bespaar tijd en krijg meer gedaan
            </h2>
          </div>
          <div className="text-center text-xl text-black dark:text-white">
            <p className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%]">
            Geef productiviteit een boost. Maak impact vanop 
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-c-1235 px-4 py-16 md:px-8">
          <div className="flex items-center gap-8 lg:gap-12.5">
            <div className="w-full md:w-1/2">
              <div className="w-full">
                <h2
                  onClick={() => setCurrentTab("tabOne")}
                  className={`mb-6 cursor-pointer text-3xl font-bold hover:text-primary xl:text-hero ${
                    currentTab === "tabOne"
                      ? "text-primary dark:text-primary"
                      : "text-gray-400 dark:text-white"
                  }`}
                >
                  Verbeter de samenwerking
                </h2>
                {currentTab === "tabOne" && (
                  <>
                    <p className="text-lg text-black dark:text-white md:pr-12">
                      <b>
                      nauwer samenwerken, zelfs als
                      ze ver van elkaar verwijderd zijn.
                      </b>{" "}
                      werk moeiteloos samen tussen groothandel, producent en kleinhandel, ongeacht de fysieke afstand. Breng alle takken samen op één platform, zodat iedereen dezelfde informatie deelt en realtime kan inspelen op veranderingen. Of je nu producten levert, maakt of verkoopt, Jij versterkt de samenwerking en stroomlijnt de communicatie in de hele keten.
                    </p>
                    <div className="mb-4 mt-4 flex flex-wrap gap-3">
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Marketing
                      </span>
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Content
                      </span>
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Opperations
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="w-full">
                <h2
                  onClick={() => setCurrentTab("tabTwo")}
                  className={`mb-6 cursor-pointer text-3xl font-bold hover:text-primary xl:text-hero ${
                    currentTab === "tabTwo"
                      ? "text-primary dark:text-primary "
                      : "text-gray-400 dark:text-white"
                  }`}
                >
                  Verbeter de rendabiliteit
                </h2>
                {currentTab === "tabTwo" && (
                  <>
                    <p className="text-lg text-black dark:text-white md:pr-12">
                    <b>Verbeter de rendabiliteit door marktinzichten.</b> je krijgt scherpe inzichten in vraag en aanbod binnen de markt, waardoor je beter kunt inspelen op trends en behoeften. Door realtime gegevens te analyseren, kun je sneller reageren op veranderende omstandigheden, 
                    voorraden optimaliseren en prijzen strategisch aanpassen. 
                    Dit leidt tot efficiëntere bedrijfsvoering en verhoogt direct je winstgevendheid.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Views
                      </span>
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Dashboards
                      </span>
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Reports
                      </span>
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Goals
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="w-full">
                <h2
                  onClick={() => setCurrentTab("tabThree")}
                  className={`mb-6 cursor-pointer text-3xl font-bold hover:text-primary xl:text-hero ${
                    currentTab === "tabThree"
                      ? "text-primary dark:text-primary"
                      : "text-gray-400 dark:text-white"
                  }`}
                >
                  Automatiseer werk
                </h2>
                {currentTab === "tabThree" && (
                  <>
                    <p className="text-lg text-black dark:text-white md:pr-12">
                      <b>
                      Stroomlijn bedrijfsprocessen zonder dat u er moeite voor hoeft te doen.
                      </b>{" "}
                      Laat routineuze taken los en laat ProductDB het zware werk voor je doen. 
                      Automatiseer repetitieve processen, bespaar tijd en voorkom fouten. 
                      Of het nu gaat om voorraadbeheer, rapportage of orderverwerking, je werk wordt gestroomlijnd  en kun je je richten op wat echt belangrijk is.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Automations
                      </span>
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Commerce
                      </span>
                      <span className="rounded-lg border px-3 py-1 text-lg text-black shadow-sm dark:text-white">
                        Classification
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="md:w-1/2">
              {currentTab === "tabOne" && (
                <div>
                  <Image
                    src="/home/features/improve-collaboration.png"
                    alt="About"
                    className="hidden md:block"
                    height={700}
                    width={700}
                  />
                </div>
              )}
              {currentTab === "tabTwo" && (
                <div>
                  <Image
                    src="/home/features/enhance.png"
                    alt="About"
                    className="hidden md:block"
                    height={700}
                    width={700}
                  />
                </div>
              )}
              {currentTab === "tabThree" && (
                <div>
                  <Image
                    src="/home/features/streamline.png"
                    alt="About"
                    className="hidden md:block"
                    height={700}
                    width={700}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="my-6 px-10">
        <div className="mx-auto flex max-w-c-1390 flex-col gap-4 rounded-lg border-2 border-gray-400 bg-zumthor p-4 dark:bg-blacksection md:p-16">
          <article>
            <h3 className="mt-0.5 w-full text-3xl font-bold text-primary md:w-2/3">
            Eén AI voor al uw producten
            </h3>
            <p className="text-md mt-2 line-clamp-3 w-full text-black dark:text-white md:w-2/3">
              <b className="pr-1">Geef productbrede AI direct een boost</b> die
              elk aspect van uw producten verbindt, in alle apps.
            </p>
            <div className="mt-8 flex flex-col gap-4 md:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-600 bg-blue-600 px-8 py-3 text-white hover:bg-primary hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                <span className="text-medium font-bold"> Try for free </span>
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-indigo-600 bg-blue-600 px-8 py-3 text-white hover:bg-primary hover:text-white focus:outline-none focus:ring active:text-indigo-500"
                href="#"
              >
                <span className="text-medium font-bold"> Meer informatie </span>
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Feature;
