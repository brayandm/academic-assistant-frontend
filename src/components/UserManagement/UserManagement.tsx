import * as React from "react";
import TabSection from "@/components/TabSection";
import UsersTable from "../UsersTable/UsersTable";

export default function UserManagement() {
  return (
    <TabSection
      tabs={[
        {
          label: "Users",
          component: <UsersTable />,
        },
        {
          label: "Roles",
          component: <div>Roles</div>,
        },
        {
          label: "Policies",
          component: <div>Policies</div>,
        },
      ]}
    />
  );
}
