"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";


export default function CalEmbed() {

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#1D71B8" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);


  return (
    <Cal
      calLink="productdb/demo-call"
      style={{ width: "100%", height: "100%", overflow: "hidden" }}
      config={{ layout: "month_view" }}
    />
  );
}
