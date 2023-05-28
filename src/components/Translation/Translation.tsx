import * as React from "react";
import TabSection from "@/components/TabSection";
import AiTranslation from "@/components/AiTranslation";

export default function Translation() {
  return (
    <TabSection
      tabs={[
        {
          label: "AI Translation",
          component: <AiTranslation />,
        },
        {
          label: "programming languages",
          component: <div>Programming languages</div>,
        },
      ]}
    />
  );
}
