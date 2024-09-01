"use client";

import React from "react";


import FeaturesTab from "./featureCard";
import TeamsFeature from "../teams-features";
function Team() {
  return (
    <div className="hidden lg:block">
    <section>
        <FeaturesTab/>
    </section>
    <section>
        <TeamsFeature/>
    </section>
    </div>
  );
}

export default Team;
