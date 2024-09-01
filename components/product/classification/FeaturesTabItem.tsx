import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }) => {
  const {  image, imageSm } = featureTab;

  return (
   
    <div className="w-full ">
      <Image
        src={`${image}`}
        width={700}
        height={700}
        alt="projects-image"
        className=" h-full w-full md:px-16"
      ></Image>
      
    </div>
  );
};

export default FeaturesTabItem;
