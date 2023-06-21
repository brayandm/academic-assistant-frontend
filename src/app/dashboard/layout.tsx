import Logout from "@/components/Logout";
import MenuNavigation from "@/components/MenuNavigation";
import { requiredPolicies } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredPolicies([]))) return <Logout />;

  return (
    <>
      <MenuNavigation />
      {children}
    </>
  );
}
