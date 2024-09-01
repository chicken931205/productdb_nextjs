import { Metadata } from "next";

import type { Viewport } from "next";
import Hero from "@/components/home/hero";
import FeaturesTab from "@/components/home/FeaturesTab";
import Feature from "@/components/home/feature";
import Team from "@/components/home/teams";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f8f8" },
    { media: "(prefers-color-scheme: dark)", color: "#212529" },
  ],
};

export const metadata: Metadata = {
  title: "ProductDB: Centrale Hub voor Optimaal Productbeheer",
  description: "Ontdek ProductDB, je complete oplossing voor efficiënt productbeheer. Met onze krachtige tools krijg je realtime inzicht in vraag en aanbod, optimaliseer je processen en verbeter je samenwerking tussen groothandels, producenten en kleinhandels. Start vandaag nog met het stroomlijnen van je bedrijfsvoering!",
};

export default function Home() {
  return (
    <>
      <Hero/>
      <FeaturesTab/>
      <Feature/>
      <Team/>
    </>
  );
}
