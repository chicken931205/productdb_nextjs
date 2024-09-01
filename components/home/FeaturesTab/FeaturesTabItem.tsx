import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }) => {
  const {  image, imageSm } = featureTab;

  return (
  
    <div className=" w-full ">
      <Image
        src={`${image}`}
        width={700}
        height={700}
        alt="projects-image"
        className="relative h-full w-full max-w-7xl mx-auto rounded-3xl border-2 border-primary/65"
      ></Image>
      <Image
        src={`${imageSm}`}
        width={500}
        height={500}
        alt="projects-image-sm"
        className="absolute -bottom-12 right-20 hidden xl:block"
      />
    </div>
  );
};

export default FeaturesTabItem;
