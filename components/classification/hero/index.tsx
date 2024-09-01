import {
  ArrowDownCircleIcon,
  ArrowRightCircleIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="mx-auto max-w-c-1390  md:pt-30">
      <div className="flex flex-col items-center justify-center gap-14 p-4 pt-24 md:py-16 lg:ml-16 lg:flex-row lg:justify-between">
        <div className="flex w-full flex-col gap-6  text-center lg:w-1/2 lg:text-start">
          <div className=" flex w-full justify-center lg:justify-start">
            <p className="  rounded-lg bg-gray-100 px-3 py-1 dark:bg-blackho dark:text-white">
              ProductDB Product Classificatie
            </p>
          </div>
          <h3 className="  w-full text-4xl font-bold text-black dark:text-white md:text-hero ">
          Stroomlijn productgegevens met productclassificatie
          </h3>

          <p className="font-md w-full text-sm leading-6 text-black dark:text-white ">
          Visualiseer uw assortiment, maximaliseer efficiëntie en beheer productcategorieën eenvoudig met een overzichtelijke monkey-proof weergave die voor u werkt.
          </p>

          <div className=" mt-4 flex flex-col gap-3 lg:flex-row">
            <Link
              href="#"
              className=" text-md mx-auto inline-flex items-center justify-center gap-1 rounded-lg bg-primary  px-8 py-2 font-bold text-white hover:opacity-90 md:gap-2.5 lg:mx-0  "
            >
              Start nu
            </Link>
          </div>
          {/* <div className="mt-2 flex flex-col items-center justify-center gap-3 lg:flex-row lg:justify-start" Visualize="hidden">
            <div className="flex">
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
              <StarIcon className="h-4 w-4 text-yellow-400" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xs text-black dark:text-white">
                25,000+ reviews from
              </p>
              <svg
                width="89"
                height="14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.438 9.615l1.349 2.34c-1.982 1.516-5.065 1.7-7.347-.048A6.147 6.147 0 01.788 3.991C2.405 1.148 5.432.52 7.38.981c-.053.114-1.22 2.535-1.22 2.535s-.092.006-.144.007a3.29 3.29 0 00-1.465.397 3.484 3.484 0 00-1.849 2.69 3.396 3.396 0 00.23 1.688c.185.451.447.852.799 1.19a3.41 3.41 0 001.923.95 3.34 3.34 0 002.014-.319 4.1 4.1 0 00.677-.431c.03-.02.057-.045.093-.073z"
                  fill="#FF492C"
                ></path>
                <path
                  d="M8.443 2.722c-.115-.113-.222-.217-.328-.323-.063-.062-.124-.127-.189-.188-.023-.022-.05-.053-.05-.053l.031-.066c.124-.249.319-.43.55-.575.254-.162.551-.244.853-.236.386.007.745.103 1.048.362.223.191.338.434.358.723.034.489-.168.862-.57 1.123-.235.154-.49.273-.744.413-.14.078-.26.146-.398.286-.121.141-.127.274-.127.274l1.826-.002v.813H7.884v-.078c-.01-.4.036-.776.22-1.14.168-.332.43-.576.744-.764.242-.144.497-.267.74-.411.149-.09.255-.22.254-.408a.372.372 0 00-.286-.35.889.889 0 00-1.012.426l-.101.174zm3.532 6.028l-1.539-2.658H7.391L5.84 8.777H8.91l1.513 2.645 1.552-2.672z"
                  fill="#FF492C"
                ></path>
                <path
                  d="M36.84 6.59L31.227.98a.477.477 0 00-.666 0l-1.108 1.108 4.503 4.504c.18.18.18.485 0 .665l-4.642 4.642 1.109 1.108c.194.18.485.18.665 0l5.736-5.736a.481.481 0 00.014-.68z"
                  fill="#009C9C"
                ></path>
                <path
                  d="M27.278 1.393l-.402-.401a.477.477 0 00-.665 0L25.103 2.1l.734.734 1.441 1.441 1.441-1.44-1.441-1.442zM27.153 9.736l-1.44 1.441-.735.735 1.108 1.108c.195.18.486.18.666 0l.401-.402 1.442-1.44-1.442-1.442z"
                  fill="#40E3E3"
                ></path>
                <path
                  d="M29.62 6.591c.18.194.18.485 0 .665l-2.466 2.467 1.44 1.44 3.908-3.907a.477.477 0 000-.665l-3.769-3.769-1.454 1.441 2.341 2.328z"
                  fill="#1ABAB8"
                ></path>
                <path
                  d="M20.461 6.73l3.908-3.908-1.442-1.441-.415-.402a.477.477 0 00-.665 0l-5.737 5.75a.477.477 0 000 .665l5.612 5.612c.194.18.485.18.665 0l.416-.402 1.44-1.44-3.768-3.77a.464.464 0 01-.014-.665z"
                  fill="#87F0F0"
                ></path>
                <path
                  d="M24.811 6.729L26.53 5.01l-1.442-1.44-.734-.735-3.88 3.907a.477.477 0 000 .665l3.756 3.755.734-.734 1.44-1.44-1.593-1.594c-.18-.167-.18-.471 0-.665z"
                  fill="#40E3E3"
                ></path>
                <path
                  d="M24.812 7.395l1.594 1.593 1.718-1.718a.477.477 0 000-.665L26.53 5.012 24.812 6.73a.506.506 0 000 .665z"
                  fill="#17CFCF"
                ></path>
                <path
                  d="M40.973 4.948h9.38V2.017l-9.38 2.93z"
                  fill="#FF9D28"
                ></path>
                <path
                  d="M50.353 2.292v10.863L53.284.844l-2.931 1.448z"
                  fill="#68C5ED"
                ></path>
                <path
                  d="M50.352 4.948H46.25l4.103 8.208V4.948z"
                  fill="#044D80"
                ></path>
                <path
                  d="M40.973 4.948l5.862 1.759-.793-1.759h-5.07z"
                  fill="#E54747"
                ></path>
                <path
                  d="M57.312 2.429c0-.89.723-1.585 1.585-1.585h11.791c.89 0 1.585.723 1.585 1.585v5.784c0 .89-.723 1.585-1.585 1.585h-1.224c-.89 0-2.224.362-3.003.779l-4.282 2.391c-.78.418-1.085.112-.724-.667l.501-1.085c.361-.806-.056-1.446-.945-1.446h-2.142c-.89 0-1.585-.723-1.585-1.585V2.43"
                  fill="#EC8735"
                ></path>
                <path
                  d="M88.585 7a6.156 6.156 0 11-12.312 0 6.156 6.156 0 0112.312 0z"
                  fill="#DA552F"
                ></path>
                <path
                  d="M83.25 6.998h-1.744V5.152h1.744a.923.923 0 010 1.846zm0-3.078h-2.976v6.156h1.232V8.23h1.744a2.155 2.155 0 000-4.309z"
                  fill="#fff"
                ></path>
              </svg>
            </div>
          </div>
          */}
        </div>
        <div>
          <Image
            src={"/test2/hero/board_hero.avif"}
            alt="ProductDB"
            width={500}
            height={600}
            className=" object-cover "
          />
        </div>
      </div>
      <div className="py-16">
        <div className=" flex flex-col gap-4 px-4 py-12  md:px-8 ">
          <div className="mx-auto text-center text-sm text-black dark:text-white">
            <p className="rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-blackho dark:text-white">
              Waarom Product classificatie?
            </p>
          </div>
          <div className="text-center">
            <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-3/5  xl:text-hero">
            Beheer producten, kenmerken en media op één plaats
            </h2>
            <p className="mx-auto  px-3 py-1 text-lg text-black dark:bg-blackho dark:text-white md:w-2/3">
              Organiseer producten met aanpasbare categorieën, filter op kenmerken, en groepeer items voor gestroomlijnd voorraadbeheer en verbeterde tracking.
            </p>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 gap-6 px-3 md:px-16 lg:grid-cols-3">
            <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">

              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Verbeter het informatieniveau
                </h3>

                <p className="mt-4  text-black dark:text-white  ">
                Actuele, volledige en correcte productgegevens in de gehele toeleveringsketen zorgen voor een hogere kwaliteit, betere service, minder fouten en tevreden klanten!
                </p>
                <div className="mt-14 flex h-full w-full items-end justify-end">
                  <Link
                    href="#"
                    className=" text-md mx-auto inline-flex items-center justify-center gap-1 rounded-lg bg-gray-100 px-4  py-2 font-bold text-black hover:gap-4 hover:bg-gray-200 md:gap-2.5 lg:mx-0  "
                  >
                    Meer informatie
                    <ArrowDownCircleIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">

              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Uniformiteit en kwaliteit informatiestroom
                </h3>

                <p className="mt-4  text-black dark:text-white  ">
                Product classificatie combineert een uitwisselingsformaat met uitsluitend feitelijke productinformatie – zoals gespecificeerd door de producent.
                </p>
                <div className="mt-14 flex h-full w-full items-end justify-end">
                  <Link
                    href="#"
                    className=" text-md mx-auto inline-flex items-center justify-center gap-1 rounded-lg bg-gray-100 px-4  py-2 font-bold text-black hover:gap-4 hover:bg-gray-200 md:gap-2.5 lg:mx-0  "
                  >
                    Meer informatie
                    <ArrowDownCircleIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-white dark:border-none  dark:bg-blackho">

              <div className="p-4 sm:p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Eenvoudig integreerbaar
                </h3>

                <p className="mt-4  text-black dark:text-white  ">
                Met onze koppeling integreert u eenvoudig alle gegevens in uw bestaande software,
                 waardoor u naadloos informatie uit verschillende bronnen kunt benutten zonder ingewikkelde aanpassingen.
                </p>

                <div className="mt-14 flex h-full w-full items-end justify-end">
                  <Link
                    href="#"
                    className=" text-md mx-auto inline-flex items-center justify-center gap-1 rounded-lg bg-gray-100 px-4  py-2 font-bold text-black hover:gap-4 hover:bg-gray-200 md:gap-2.5 lg:mx-0  "
                  >
                    Meer informatie
                    <ArrowDownCircleIcon className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-span-1 flex flex-col gap-6 lg:col-span-3 lg:flex-row">
              <div className="rounded-lg  border bg-white dark:border-none dark:bg-blackho  lg:w-1/2">
                <div className="p-4 sm:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Open Standaard
                  </h3>

                  <p className="mt-4  text-black dark:text-white  ">
                  We gebruiken een open standaard om productkenmerken eenvoudig te integreren, waardoor we snel kunnen inspelen op nieuwe producteigenschappen. Dit zorgt voor een flexibele en actuele gegevensuitwisseling.
                  </p>
                  <div className="mt-14 flex h-full w-full items-end justify-end">
                    <Link
                      href="#"
                      className=" text-md mx-auto inline-flex items-center justify-center gap-1 rounded-lg bg-gray-100 px-4  py-2 font-bold text-black hover:gap-4 hover:bg-gray-200 md:gap-2.5 lg:mx-0  "
                    >
                      Meer informatie
                      <ArrowDownCircleIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="rounded-lg  border bg-white dark:border-none dark:bg-blackho  lg:w-1/2">
                <div className="p-4 sm:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Go to market
                  </h3>

                  <p className="mt-4  text-black dark:text-white  ">
                  Productdb vertraagt de go-to-market van nieuwe producten door uitgebreide productclassificatie en real-time synchronisatie, wat leidt tot langere doorlooptijden voor productintroducties.
                  </p>
                  <div className="mt-14 flex h-full w-full items-end justify-end">
                    <Link
                      href="#"
                      className=" text-md mx-auto inline-flex items-center justify-center gap-1 rounded-lg bg-gray-100 px-4  py-2 font-bold text-black hover:gap-4 hover:bg-gray-200 md:gap-2.5 lg:mx-0  "
                    >
                      Meer informatie
                      <ArrowDownCircleIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 gap-6 lg:col-span-3 ">
              <div className="flex  rounded-lg border bg-white dark:border-none  dark:bg-blackho">
                <div className="p-4 sm:p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Gelijkheidsbeginsel
                  </h3>

                  <p className="mt-4  text-black dark:text-white  ">
                  Bij Productdb worden alle producten volgens hetzelfde gelijkheidsbeginsel behandeld. Dit betekent dat elk product op uniforme wijze wordt ingedeeld en beheerd, ongeacht de kenmerken of oorsprong, waardoor consistente gegevensverwerking en eerlijke vergelijking mogelijk zijn.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
