import React from "react";
import { FeatureTabb } from "./featuresTabData";
import Image from "next/image";
import Link from "next/link";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTabb }) => {
  const { image, imageh, imagew, title, head1, desc1,desc11, head2, desc2, link } =
    featureTab;

  return (
    <>
      <div className="text-black dark:text-white ">
        <div className="md:w-full">
          <div className="mb-8">
            <Image
              src={`${image}`}
              width={imageh}
              height={imagew}
              // fill
              className=""
              alt=""
            />
          </div>

          <div>
            <h2 className="mb-7 text-2xl font-medium  xl:text-itemtitle">
              {title}
            </h2>
          </div>
          <div>
            <h2 className="text-metatitle2">{head1}</h2>
            <p className="mb-5">{desc1}</p>
          </div>
          <div>
            <h2 className="text-metatitle2">{head2}</h2>
            <p className="mb-5">{desc2}</p>
            <p className="mb-5">{desc11}</p>
          </div>
          <div>
            <Link href="#" className="font-medium text-primary underline">
              {link}
            </Link>
          </div>
        </div>
        {/* <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div> */}
      </div>
    </>
  );
};

export default FeaturesTabItem;
