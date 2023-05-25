import * as React from "react";
import TabSection from "@/components/TabSection";

export default function Translation() {
  return (
    <TabSection
      tabs={[
        {
          label: "problems",
          component: <div>Problems</div>,
        },
        {
          label: "programming languages",
          component: <div>Programming languages</div>,
        },
      ]}
    />
  );
}
