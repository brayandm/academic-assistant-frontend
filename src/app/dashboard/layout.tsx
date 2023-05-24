import Logout from "@/components/Logout";
import MenuNavigation from "@/components/MenuNavigation";
import { requiredRoles } from "@/lib/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!(await requiredRoles([]))) return <Logout />;

  return (
    <>
      <MenuNavigation />
      {children}
    </>
  );
}
