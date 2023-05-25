import * as React from "react";
import TabSection from "@/components/TabSection";

export default function UserManagement() {
  return (
    <TabSection
      tabs={[
        {
          label: "Users",
          component: <div>Users</div>,
        },
        {
          label: "Roles",
          component: <div>Roles</div>,
        },
        {
          label: "Permissions",
          component: <div>Permissions</div>,
        },
      ]}
    />
  );
}
