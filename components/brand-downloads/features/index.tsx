import Image from "next/image";
import React from "react";

export default function Feature() {
  return (
    <section>
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-4 px-4 md:flex-row md:px-8">
        <div className="w-full p-4 text-black dark:text-white md:w-1/2 md:p-8">
          <h1 className="pb-3 text-4xl   font-bold ">Our logo</h1>
          <p className="pb-3">
          Gebruik indien mogelijk altijd het standaard positieve CMYK/PMS/RGB
logo. Wanneer het logo op een achtergrond wordt geplaatst (in de ProductDB
witte of zwarte kleur), gebruik dan altijd de omgekeerde versie van ons logo.
          </p>
          <h1 className="pb-3 text-2xl   font-bold ">How to use it.</h1>

          <p>
          We hebben een duidelijke ruimte gedefinieerd die het logo omringt, wat wordt aangegeven met de hoogte van de letter ‘o’ van ons logo om ervoor te zorgen
dat we de integriteit ervan behouden. Niets mag deze duidelijke ruimte betreden. Het
standaardlogo mag nooit worden afgedrukt of gereproduceerd met een grootte kleiner dan
25 mm. Het mag nooit worden gebruikt met minder dan 100 pixels voor digitale en schermtoepassingen.
          </p>
        </div>
        <div className="flex w-full justify-center p-4 md:w-1/2 md:p-8">
          <Image
            src="/brand-downloads/Assets_Logo.avif"
            alt="our-logo"
            height={375}
            width={375}
          />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-4 px-4 md:flex-row md:px-8">
        <div className="w-full p-4 text-black dark:text-white md:w-1/2 md:p-8">
          <h1 className="pb-3 text-4xl   font-bold ">Our symbol</h1>
          <p className="pb-3">
          Ons PDB-symbool is de standaloneversie van het ProductDB-logo.
          Gebruik dit pictogram wanneer het standaardlogo geen optie is vanwege beperkingen in de grootte
          of het formaat.
          </p>
          <h1 className="pb-3 text-2xl   font-bold ">Hoe te gebruiken.</h1>

          <p>
          We hebben een duidelijke ruimte gedefinieerd die het symbool omringt, dat
          wordt aangegeven met een marge van 15% op basis van de grootte van het merkteken om
          de integriteit ervan te behouden. Niets mag deze duidelijke ruimte betreden.
          </p>
        </div>
        <div className="flex w-full justify-center p-4 md:w-1/2 md:p-8">
          <Image
            src="/brand-downloads/Assets_Icon2.avif"
            alt="Our-symbol"
            height={375}
            width={375}
          />
        </div>
      </div>
    </section>
  );
}
